// Using Express Js to handle Routes, Middleware, Templating, Error Handling and Integration of MongoDB
const express = require("express");
// Using morgan to log HTTP requests
const morgan = require("morgan");
// Using body-parser to extract the body of HTTP request
const bodyParser = require("body-parser");
// Using cor to get requests from different domains
const cors = require("cors");
// Using dotenv to load environment variable using process.env
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

// DB connection
connectDB();

// Import routes
const authRoutes = require("./routes/auth");

const centerRoutes = require("./routes/center");

const productRoutes = require("./routes/productRT");
const purchasedtRoutes = require("./routes/purchasedtRT");

// App middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());

// app.use(cors())
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
  })
);

// Middlewares
app.use("/api", authRoutes);

app.use("/api", centerRoutes);

app.use("/product", productRoutes);
app.use("/purchasedt", purchasedtRoutes);

// Setting the PORT, backend runs
const port = process.env.PORT;
app.listen(port, () => console.log(`API is running on port ${port}`));
