import { Request, Response, NextFunction, Router } from "express";
import * as ErrorHandler from "../utils/ErrorHandler";

export class ErrorMiddleware {
  private constructor() {
  }
  static instance() {
    return new ErrorMiddleware();
  }

  init(router: Router) {
    router.use((req: Request, res: Response) => {
      ErrorHandler.notFoundError();
    });

    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      ErrorHandler.clientError(err, res, next);
    });

    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      ErrorHandler.serverError(err, res, next);
    });
  }
}