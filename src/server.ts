import "reflect-metadata";
import "express-async-errors";
import { createConnection } from "typeorm";
import express, { ErrorRequestHandler } from "express";
import cors from "cors";
import path from "path";

import routes from "./routes";

const errorHandler: ErrorRequestHandler = (error, _, res, __) => {
  console.error(error);

  return res.status(500).json({ message: "Internal server error" });
};

const PORT = process.env.PORT || 3333;
const main = async () => {
  const conn = await createConnection({
    type: "sqlite",
    database: path.join(__dirname, "./database/db.sqlite"),
    synchronize: false,
    logging: false,
    entities: [path.join(__dirname, "./entities/**/*{.ts,.js}")],
    migrations: [path.join(__dirname, "/database/migrations/**/*{.ts,.js}")],
    cli: {
      entitiesDir: path.join(__dirname, "./entities"),
      migrationsDir: path.join(__dirname, "/database/migrations"),
    },
  });
  await conn.runMigrations();

  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(routes);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}!`);
  });
};

main().catch((err) => console.error(err));
