import { NextApiRequest, NextApiResponse } from "next/types";

export const withJsonResponseMiddleware =
  <T>(handler: (req: NextApiRequest, res: NextApiResponse) => Promise<T>) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const result = await handler(req, res);

    res.status(200).send(result);
  };
