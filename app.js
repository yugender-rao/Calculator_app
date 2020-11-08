//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {});

app.listen(3000, function () {
  console.log("Server started on port 3000");
  console.log("Visit localhost:3000 in your web browser");
});
