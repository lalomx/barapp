import { Request, Response } from "express";
import { BarServicesDB } from "../../interfaces/BarServicesDB";

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send("Hello world!");
    }
  }
];