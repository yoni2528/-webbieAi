import catchAsync from "../utils/catchAsync.js";
import User from "../models/userModel.js";
import sendEmail from "../services/emailHandler.js";

import CustomeError from "../utils/errorHandler.js";

import { signToken } from "../services/authEncrypt.js";
import { verifyToken } from "../services/authEncrypt.js";
import { comparePassowrd } from "../services/authEncrypt.js";

export const signup = catchAsync(async (req, res) => {
  const userObj = {
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  };

  const user = await User.create(userObj);
  const token = await signToken(user.id);

  res.status(200).json({
    status: "succed",
    message: "You have succesfully signed up!",
    token,
    user: { id: user.id, nickName: user.nickName, token },
  });
});

export const login = catchAsync(async (req, res) => {
  const { password, email } = req.body;
  if (!password || !email)
    throw new CustomeError(
      "Authentication Error",
      "Invalid login credentials, Please check your email and password and try again"
    );

  const currUser = await User.findOne({ email: email }).select("+password");

  if (!currUser)
    throw new CustomeError(
      "Authentication Error",
      "Invalid login credentials, Please check your email and password and try again"
    );

  const isVerfied = await comparePassowrd(password, currUser.password);

  if (!isVerfied)
    throw new CustomeError(
      "Authentication Error",
      "Invalid login credentials, Please check your email and password and try again"
    );

  const token = await signToken(currUser.id);

  res.status(200).json({
    status: "succed",
    message: "You have succesfuuly logged in to website",
    user: {
      id: currUser.id,
      nickName: currUser.nickName,
      token,
      image: currUser.image,
    },
  });
});

export const protect = catchAsync(async (req, res, next) => {
  if (!req.headers.authorization)
    throw new CustomeError(
      "Token Error",
      "Invalid or expired token. Please login again or contact support for assistance."
    );

  const token = req.headers.authorization.replace("Bearer ", "").toString();

  if (!token)
    throw new CustomeError(
      "Token Error",
      "Invalid or expired token. Please login again or contact support for assistance."
    );

  const { id } = await verifyToken(token);

  const user = await User.findOne({ _id: id });

  if (!user)
    throw new CustomeError(
      "Token Error",
      "Invalid or expired token. Please login again or contact support for assistance."
    );

  req.user = user;

  next();
});

export const getMe = catchAsync(async (req, res) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    status: "Succed",
    user: { id: user.id, nickName: user.nickName, image: user.image },
  });
});

export const updateUserDetails = catchAsync(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
  });

  res.status(200).json({
    status: "Succed",
    user: { id: user.id, nickName: user.nickName, image: user.image },
  });
});

export const sendEmailToUser = catchAsync(async (req, res) => {
  const { to, from, message, name } = req.body;

  sendEmail(to, from, message, name);

  res.status(200).json({
    status: "Succed",
  });
});
