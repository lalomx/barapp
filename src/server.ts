import http from "http";
import express from "express";
import { applyCommonMiddleware, applyRoutes, applyErrorMiddleware } from "./utils";
import { createDb } from "./db/models";
import parser from "body-parser";

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

const router = express();

applyCommonMiddleware(router, db);
applyRoutes(router, db);
applyErrorMiddleware(router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);