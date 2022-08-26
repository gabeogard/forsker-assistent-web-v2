import { NextApiRequest, NextApiResponse } from "next/types";

export class IllegalArgumentError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export const withErrorHandlingMiddleware =
  (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await handler(req, res);
    } catch (error) {
      if (error instanceof IllegalArgumentError) {
        return res.status(400).send(error.message);
      }
      console.warn("Error", error);
      return res.status(500).send("Unknown error");
    }
  };

