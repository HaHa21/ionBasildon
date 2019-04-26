import {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  UNAUTHORIZED,
  NOT_FOUND
} from "http-status-codes";
import userService from "./user.service";
import User from "./user.model";

exports.register = async (req, res) => {
  try {
    const { error, value } = userService.validateSignupSchema(req.body);
    if (error && error.details) {
      return res.status(BAD_REQUEST).json(error);
    }

    const existingUser = await User.findOne({ where: { email: value.email } });
    if (existingUser) {
      return res
        .status(BAD_REQUEST)
        .json({ err: "You have already created account" });
    }
  } catch (err) {
    console.error(err);
    return res.status(INTERNAL_SERVER_ERROR).json(err);
  }
};
