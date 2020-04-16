// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [
  {
    customerName: "DC",
    phoneNumber: "111",
    customerEmail: "dc@me.com",
    customerID: "22",
  },
  {
    customerName: "AC",
    phoneNumber: "222",
    customerEmail: "ac@me.com",
    customerID: "33",
  },
];
const waitlist = [
  {
    customerName: "CC",
    phoneNumber: "333",
    customerEmail: "cc@me.com",
    customerID: "44",
  },
];

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "html/index.html"));
});
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "html/reserve.html"));
});
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "html/tables.html"));
});
app.get("/waitlist", function (req, res) {
  return res.json(waitlist);
});
app.get("/reservations", function (req, res) {
  return res.json(reservations);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
