// const express = require("express");
// const jobModel = require("../models/job");
// const job = express();

// // find all jobs
// job.get("/job/all", async (request, response) => {
//   const jobs = await jobModel.find({});

//   try {
//     response.send(jobs);
//   } catch (error) {
//     console.log(error);
//     response.status(500).send(error);
//   }
// });

// // Create a new job
// job.post("/job", async (request, response) => {
//   const job = request.body;
//   console.log(job);

//   try {
//     const createdJob = await jobModel.create({
//       title: "guru",
//       description: "test",
//     });
//     response.send(createdJob);
//   } catch (error) {
//     console.log(error);
//     response.status(500).send(error);
//   }
// });

// // Update a job
// job.put("/job/:id", async (request, response) => {
//   try {
//     await jobModel.findByIdAndUpdate(request.params.id, request.body);
//     await jobModel.save();
//     response.send(request.body);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

// // delete a job
// job.delete("/food/:id", async (request, response) => {
//   try {
//     const job = await jobModel.findByIdAndDelete(request.params.id);

//     if (!job)
//       response.status(404).send({
//         message: "job not found with id " + request.params.id,
//       });
//     response.status(200).send();
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

// // find a job by id

// module.exports = job;
