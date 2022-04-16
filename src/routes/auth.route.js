const express = require("express");
// const auth = require("./auth.route");
const auth = express();

const { signup, signin } = require("../controllers/auth");

auth.post("/api/auth/signin", signin);

auth.post("/api/auth/signup", signup);

module.exports = auth;
