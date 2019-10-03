import { Router } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import compression from "compression";

export class CommonMiddleware {
  private constructor() {
  }
  static instance() {
    return new CommonMiddleware();
  }

  init(router: Router) {
    router.use(cors({ credentials: true, origin: true }));
    router.use(bodyParser.urlencoded({ extended: false }));
    router.use(bodyParser.json());
    router.use(compression());
  }
}
