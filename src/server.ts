import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./services";
import { createDb } from "./db/models";

process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);
});

const db = createDb();
db.sequelize.sync();

const app = express();
applyMiddleware(middleware, app);
applyRoutes(routes, app, db);
applyMiddleware(errorHandlers, app);

const { PORT = 3000 } = process.env;
const server = http.createServer(app);

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);