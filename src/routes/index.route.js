const express = require("express");
const auth = require("./auth.route");

const route = express();

route.use(auth);

route.get("/", (req, res) => {
  const test = {
    message: "OK testing",
    timestamp: Date.now(),
  };
  res.send(JSON.stringify(test));
});

module.exports = route;
