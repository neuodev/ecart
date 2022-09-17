const path = require("path");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const orderRouter = require("./routes/order");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const cors = require("cors");
// const xss = require('xss');
const hpp = require("hpp");
// Load env vars
dotenv.config({ path: "./config/config.env" });
connectDB();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(morgan("dev"));

// sinitize our data
app.use(mongoSanitize());
// set security headers
app.use(helmet());

// prvent http param pollution
app.use(hpp());

// enaple course
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

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

//  Error Handler
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server start in ${process.env.NODE_ENV} at port ${PORT}`.bgCyan)
);
