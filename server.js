

const express = require("express");
const app = express();
const port = 5500;
const fs = require("fs");

app.use(express.static(__dirname));


let date = new Date();
let hours = date.getUTCHours();


const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = weekday[date.getUTCDay()];


let sunday = weekday[date.getUTCDay() - 4];
let saturday = weekday[date.getUTCDay() + 2];



app.get("/", (req, res) => {
  if (hours >= 9 && hours <= 17 && day !== sunday && day !== saturday) {
    res.status(200).sendFile(__dirname + "/pages/home.html");
  } else {
    res.status(404).send("nous sommes fermés le weekend");
  }
});

app.get("/services", (req, res) => {
  if (hours >= 9 && hours <= 17 && day !== sunday && day !== saturday) {
    res.status(200).sendFile(__dirname + "/pages/services.html");
  } else {
    res.status(404).send("nous sommes fermés le weekend");
  }
});

app.get("/contacts", (req, res) => {
  if (hours >= 9 && hours <= 17 && day !== sunday && day !== saturday) {
    res.status(200).sendFile(__dirname + "/pages/contact.html");
  } else {
    res.status(404).send("nous sommes fermés le weekend");
  }
});

app.listen(port, () =>
  console.log("application listening on http://localhost:" + port)
);