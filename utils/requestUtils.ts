import { NextApiRequest } from "next";
import { throwError } from "./errorUtils";

export const getIpFromRequest = ({
  headers,
  socket: { remoteAddress },
}: NextApiRequest): string =>
  (headers["CF-Connecting-IP"] as string) ??
  remoteAddress ??
  throwError("Could not grab IP from request");
