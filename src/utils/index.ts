import { Router } from "express";
import { BarServicesDB } from "../interfaces/BarServicesDB";
import { UserService } from "../services/UserService";

type Wrapper = ((router: Router) => void);

export const applyMiddleware = (
  middlewareWrappers: Wrapper[],
  router: Router
) => {
  for (const wrapper of middlewareWrappers) {
    wrapper(router);
  }
};

export const applyRoutes = (router: Router, db: BarServicesDB) => {
  UserService.instance(db).init(router);
};