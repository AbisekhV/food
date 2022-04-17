const Job = require("../models/job");
const Company = require("../models/company");
const User = require("../models/user");

// Create Job
exports.createJob = async (req, res) => {
  try {
    const { company } = req.body;

    const job = await Job.create(req.body);
    const companyDetails = await Company.findByIdAndUpdate(
      company,
      { $push: { job: job._id } },
      { new: true, useFindAndModify: false }
    );
    console.log(companyDetails);

    res.json({
      status: 200,
      data: job,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      error: error,
    });
  }
};

// Get Job
exports.getJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);

    if (!job) {
      return res.json({
        status: 500,
        error: "job not found",
      });
    }

    job.company = await Company.findById(job.company);

    const applicants = job.applicants;
    job.applicants = [];

    for (let i = 0; i < applicants.length; i++) {
      const applicant = await User.findById(applicants[i]);
      job.applicants.push(applicant);
    }

    const payload = {
      status: 200,
      data: job,
    };
    console.log(payload);

    return res.json(payload);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      error: error,
    });
  }
};