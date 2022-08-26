import { NextApiRequest, NextApiResponse } from "next/types";
import { withErrorHandlingMiddleware } from "./errorHandling";
import { withJsonResponseMiddleware } from "./responseHandling";


export const withAllMiddlewares = <T>(
  actual: (req: NextApiRequest, res: NextApiResponse) => Promise<T>
) => withErrorHandlingMiddleware(withJsonResponseMiddleware(actual));
