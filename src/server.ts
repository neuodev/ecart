import path from "path";
import express from "express";
import morgan from "morgan";
import connectDB from "./config/db";
import errorHandler from "./middleware/error";
import productRouter from "./routes/product";
import userRouter from "./routes/user";
import orderRouter from "./routes/order";
import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import cors from "cors";
import hpp from "hpp";
import dotenv from "dotenv";
import "colors";
import "./utils/toAdmin";
import Environment from "./env";

// Setup evnironment variables from .env
dotenv.config();
// Make MongoDB connection
connectDB();
const environment = new Environment();
const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(morgan("dev"));
app.use(mongoSanitize());
app.use(helmet());
app.use(hpp());
app.use(cors());
app.use(express.json());

// get paypal client id
app.get("/api/v1/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});
app.use("/api/v1/products", productRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/orders", orderRouter);

if (environment.isProd()) {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (_req, res) =>
    res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"))
  );
} else {
  app.get("/", (_req, res) => {
    res.send("API is running....");
  });
}

//  Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(
    `Server start in ${process.env.NODE_ENV || "-"} at port ${PORT}`.bgCyan
  )
);
