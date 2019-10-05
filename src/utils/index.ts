import { Router } from "express";
import { BarServicesDB } from "../interfaces/BarServicesDB";
import { UserService } from "../services/UserService";
import { ErrorMiddleware } from "../middleware/ErrorMiddleware";
import { CommonMiddleware } from "../middleware/CommonMiddleware";
import { AuthenticationMiddleware } from "../middleware/AuthenticationMiddleware";
import { DashboardService } from "../services/DashboardService";

export const applyCommonMiddleware = (router: Router, db: BarServicesDB) => {
  CommonMiddleware.instance().init(router);
  AuthenticationMiddleware.instance(db).init(router);
};

export const applyErrorMiddleware = (router: Router) => {
  ErrorMiddleware.instance().init(router);
}

export const applyRoutes = (router: Router, db: BarServicesDB, ) => {
  UserService.instance(db).init(router);
  DashboardService.instance(db).init(router);
};