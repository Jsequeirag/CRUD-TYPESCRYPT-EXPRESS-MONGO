/* -------------------------------- packages -------------------------------- */
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
const app = express();
/* ------------------------------- middlewares ------------------------------- */
app.use(morgan("dev"));
app.use(express.json());
app.use(helmet());
app.use(compression());
/* -------------------------------------------------------------------------- */
/*                                   routes                                   */
/* -------------------------------------------------------------------------- */
/* ----------------------------- categoryRoutes ----------------------------- */
import categoryRoutes from "./routes/categoryRoutes";
app.use("/category", categoryRoutes);
/* ----------------- database conecction and server startup ----------------- */
mongoose
  .connect("mongodb://127.0.0.1:27017/crud-typescript")
  .then((res) => {
    app.listen(3000, () => {
      console.log("server:3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
