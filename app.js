const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/user.routes");
const recordRoutes = require("./routes/record.routes");
const dashboardRoutes = require("./routes/dashboard.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/records", recordRoutes);
app.use("/dashboard", dashboardRoutes);

module.exports = app;
