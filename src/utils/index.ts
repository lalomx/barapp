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
  // de alguna manera se exportan los objetos de servicio
  // y se matchean los path, el metodo y el handler a las funciones del servicio
  UserService.instance(db).init(router);
};