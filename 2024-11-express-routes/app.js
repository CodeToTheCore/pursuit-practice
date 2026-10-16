// DEPENDENCIES
const express = require("express");
const colors = require("./models/color.js");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/colors/:index", (req, res) => {
    res.send(req.params);
  });

app.get("/colors/:index", (req, res) => {
  const { index } = req.params;
  res.send(colors[index]);
});

app.get("/colors/:index", (req, res) => {
    res.send(colors[req.params.index]);
  });

app.get("/", (req, res) => {
  res.send("Welcome to my Express app");
});

// Index route
app.get("/colors", (req, res) => {
    res.send(colors);
  });

  app.get("/", (request, response) => {
    response.send("Hello World");
  });
  
//   app.listen(3003, () => {
//     console.log("Listening for requests on port 3003");
//   });

// EXPORT
module.exports = app;
