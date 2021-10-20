const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../../models");
const invalidMobileNumberOrPassword = "Invalid mobile number or password";

exports.register = async (req, res, next) => {
  try {
    let user = null;

    const OBJ = {
      name: req.body.name,
      mobileNumber: req.body.mobileNumber,
      password: req.body.password,
    };

    user = await User.findOne({
      mobileNumber: OBJ.mobileNumber,
    });

    if (!user) {
      const hashedPassword = await bcrypt.hash(OBJ.password, 10);
      user = await User.create({
        mobileNumber: OBJ.mobileNumber,
        name: OBJ.name,
        password: hashedPassword,
      });

      return res.status(201).json({ data: user, message: "success" });
    }

    return res
      .status(400)
      .json({ message: "User with this mobile number already exists" });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const payload = {
      mobileNumber: req.body.mobileNumber,
      password: req.body.password,
    };

    let user = await User.findOne({
      mobileNumber: payload.mobileNumber,
    }).lean();

    if (!user) {
      return res.status(400).json({ message: invalidMobileNumberOrPassword });
    }

    const isPasswordCorrect = await bcrypt.compare(
      payload.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: invalidMobileNumberOrPassword });
    }

    const tokenData = {
      mob: user.mobileNumber,
      id: user._id,
    };

    console.log("tokenData", tokenData);

    const jwtToken = jwt.sign(tokenData, "123456789");

    return res.status(200).json({ token: jwtToken, message: "login success" });
  } catch (error) {
    next(error);
  }
};
