import express from "express";
import { indexController } from "./controllers/indexController";

const app = express();
const PORT = process.env.PORT || 4000;

const server = async () => {
  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Route
  app.get("/", indexController);

  // Listen
  app.listen(PORT, () =>
    console.log(`Server is running at http://localhost:${PORT}`)
  );
};

server();
