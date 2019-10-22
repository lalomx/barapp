import { Router } from "express";
import { BarServicesDB } from "../interfaces/BarServicesDB";
import { UserService } from "../services/UserService";
import { ErrorMiddleware } from "../middleware/ErrorMiddleware";
import { CommonMiddleware } from "../middleware/CommonMiddleware";
import { AuthenticationMiddleware } from "../middleware/AuthenticationMiddleware";
import { DashboardService } from "../services/DashboardService";
import { ComandaService } from "../services/ComandaService";
import { InventarioService } from "../services/InventarioService";
import { AlertaService } from "../services/AlertaService";
import { ReportesService } from "../services/ReportesService";
import { SettingsService } from "../services/SettingsService";
import { MenuService } from "../services/MenuService";

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
  ComandaService.instance(db).init(router);
  InventarioService.instance(db).init(router);
  AlertaService.instance(db).init(router);
  ReportesService.instance(db).init(router);
  SettingsService.instance(db).init(router);
  MenuService.instance(db).init(router);
};