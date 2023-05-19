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
connectDB().then(() => console.log("Success on Connecting DB")).catch(e => console.log(e));

// Import routes
const authRoutes = require("./routes/authRoutes");

const centerRoutes = require("./routes/centerRoutes");

const productRoutes = require("./routes/productRT");
const purchasedtRoutes = require("./routes/purchasedtRT");

const scheduleRoutes = require("./routes/schedule");

const vehicleRoutes = require("./routes/vehicle");


// App middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());

// app.use(cors())
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

// Middlewares
app.use("/api", authRoutes);

app.use("/api/centers", centerRoutes);

app.use("/product", productRoutes);
app.use("/purchasedt", purchasedtRoutes);

app.use("/api/schedule", scheduleRoutes);

app.use("/api/vehicle", vehicleRoutes);

// Setting the PORT, backend runs
const port = process.env.PORT;
app.listen(port, () => console.log(`API is running on port ${port}`));
