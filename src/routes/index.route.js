const express = require("express");
const auth = require("./auth.route");
// const job = require("./job.route");

const route = express();

route.use(auth);
// route.use(job);

route.get("/", (req, res) => {
  const test = {
    message: "OK testing",
    timestamp: Date.now(),
  };
  res.send(JSON.stringify(test));
});

module.exports = route;
