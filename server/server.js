// Using Express Js to handle Routes, Middleware, Templating, Error Handling and Integration of MongoDB
const express = require("express");
// Using morgan to log HTTP requests
const morgan = require("morgan");
// Using body-parser to extract the body of HTTP request
const bodyParser = require("body-parser");
// Using cor to get requests from different domains
const cors = require("cors");
// Using mongoose to set databse connection
const mongoose = require("mongoose");
// Using dotenv to load environment variable using process.env
require("dotenv").config();

// Terminal color codes
red = "\033[1;91m";
green = "\033[1;92m";
blue = "\033[1;94m";

const app = express();

// DB connection
URI = process.env.MONGO_DB;
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(green + "DB connection established"))
  .catch((err) => console.log(err));

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
