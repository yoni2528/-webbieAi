import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const signToken = async (userId) => {
  const token = await jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: 24 * 60 * 60 * 1000 * 30,
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
