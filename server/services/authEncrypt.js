import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const signToken = async (userId) => {
  const token = await jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "10h",
  });
  return token;
};

export const verifyToken = async (token) => {
  const verifyId = await jwt.verify(token, process.env.JWT_SECRET);
  return verifyId;
};

export const comparePassowrd = async (typedPass, dbPass) => {
  const isCorrect = await bcrypt.compare(typedPass, dbPass);
  return isCorrect;
};
