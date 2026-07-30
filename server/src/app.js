const express = require("express");
const cors = require("cors");
const app = express();
const db=require("./config/db");
const ticketRoutes = require("./routes/ticket_routes");
const errorHandler = require("./middleware/errorHandler");
const logger = require("./middleware/logger")
const Validate = require("./middleware/validateTicket");

//Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.send("Support CRM API is running");
  const rows = db.prepare("SELECT * FROM tickets").all();
  console.log(rows);
});

app.use("/api/tickets",ticketRoutes);
app.use(errorHandler);

module.exports = app;
