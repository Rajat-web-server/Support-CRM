const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;

const app = require("./src/app");

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
});
