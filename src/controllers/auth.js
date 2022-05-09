const User = require("../models/user");

exports.signup = async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });

    // Check the user already exists
    if (userExists) {
      return res.json({
        status: 500,
        error: "Email is taken!",
      });
    }

    const newUser = new User(req.body);
    const user = await newUser.save();
    delete user.password;

    res.json({
      status: 200,
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: 500,
      error: error,
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        status: 500,
        error: "Incorrect email or password",
      });
    }

    if (!user.authenticate(password)) {
      return res.status(401).json({
        status: 500,
        error: "Incorrect email or password",
      });
    }

    const payload = {
      status: 200,
      data: {
        _id: user.id,
        name: user.name,
        email: user.email,
        walletAmount: user.walletAmount,
      },
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

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.json({
        status: 500,
        error: "User does not exist.",
      });
    }
    delete user.password;

    const payload = {
      status: 200,
      data: user,
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
