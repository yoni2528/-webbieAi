import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const signToken = async (userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
  });
  return token;
};

export const verifyToken = async (token) => {
  const verifyId = jwt.verify(token, process.env.JWT_SECRET);
  return verifyId;
};

export const comparePassowrd = async (typedPass, dbPass) => {
  const isCorrect = await bcrypt.compare(typedPass, dbPass);
  return isCorrect;
};
