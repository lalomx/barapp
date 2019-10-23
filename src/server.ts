import http from "http";
import express from "express";
import { applyCommonMiddleware, applyRoutes, applyErrorMiddleware } from "./utils";
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

const router = express();

applyCommonMiddleware(router, db);
applyRoutes(router, db);
applyErrorMiddleware(router);


const server = http.createServer(router);
const hostname = 'localhost';
const port = 3000;

server.listen(hostname, port, () =>
  console.log(`Server is running http://localhost:${port}...`)
);