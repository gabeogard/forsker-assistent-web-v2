import { NextApiRequest, NextApiResponse } from "next/types";
require("dotenv").config();
import { PrismaClient } from "@prisma/client";
import { IllegalArgumentError } from "../../middlewares/errorHandling";
import { checkOrThrowIllegalArgument } from "../../utils/errorUtils";
import { withAllMiddlewares } from "../../middlewares";
import { sendEmail, validateSendContactEmailRequest } from "../../mail/mailClient";
import { storeMail } from "../../mail/mailSentStorage";

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  if (!validateSendContactEmailRequest(body)) {
    throw new IllegalArgumentError("Request is not valid");
  }

  await sendEmail(body);
  await storeMail(body);
};


export default withAllMiddlewares(contact);
