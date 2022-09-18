import path from "path";
import express from "express";
import "dotenv/config";
import "colors";
import "./utils/toAdmin";
import morgan from "morgan";
import connectDB from "./config/db";
import errorHandler from "./middleware/error";
import productRouter from "./routes/product";
import userRouter from "./routes/user";
import orderRouter from "./routes/order";
import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import cors from "cors";
import xss from "xss";
import hpp from "hpp";

connectDB();
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

// Serve files for production
if (process.env.NODE_ENV === "production") {
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

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(
    `Server start in ${process.env.NODE_ENV || "-"} at port ${PORT}`.bgCyan
  )
);
