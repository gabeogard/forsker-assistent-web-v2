import { NextApiRequest, NextApiResponse } from "next/types";
require("dotenv").config();
import { PrismaClient } from "@prisma/client";
import { IllegalArgumentError } from "../../middlewares/errorHandling";
import { checkOrThrowIllegalArgument } from "../../utils/errorUtils";
import { withAllMiddlewares } from "../../middlewares";
import { sendEmail, validateSendContactEmailRequest } from "../../mail/mailClient";
import { hasRecentlySentEmail, storeMail } from "../../mail/mailSentStorage";
import { getIpFromRequest } from "../../utils/requestUtils";

const contact = async (req: NextApiRequest) => {
  const { body } = req;
  if (!validateSendContactEmailRequest(body)) {
    throw new IllegalArgumentError("Request is not valid");
  }

  const hasRecentlySent = await hasRecentlySentEmail(body);
  if (hasRecentlySent) {
    return;
  }

  await sendEmail(body);
  await storeMail({
    ...body,
    ipAddress: getIpFromRequest(req),
  });
};


export default withAllMiddlewares(contact);
