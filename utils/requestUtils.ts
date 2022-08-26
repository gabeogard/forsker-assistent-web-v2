import { NextApiRequest } from "next";

export const getIpFromRequest = ({
  headers,
  socket: { remoteAddress },
}: NextApiRequest) =>
  headers["CF-Connecting-IP"] ??
  headers["X-FORWARDED-FOR"] ??
  headers["X-REAL-IP"] ??
  remoteAddress;
