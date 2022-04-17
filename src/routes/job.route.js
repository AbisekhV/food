const express = require("express");
const job = express();

const { createJob, getJobById } = require("../controllers/job");

job.post("/api/job", createJob);
job.get("/api/job/:id", getJobById);

module.exports = job;
