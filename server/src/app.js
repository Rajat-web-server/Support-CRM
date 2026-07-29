const express = require("express");
const cors = require("cors");
const app = express();
const db=require("./config/db");
const ticketRoutes = require("./routes/ticket_routes")

//Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Support CRM API is running");
  const rows = db.prepare("SELECT * FROM tickets").all();
  console.log(rows);
});

app.use("/api/tickets",ticketRoutes);

module.exports = app;
