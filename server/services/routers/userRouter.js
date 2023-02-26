import express from "express";
import {
  sendEmailToUser,
  signup,
  login,
  protect,
  updateUserDetails,
  getMe,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/email").post(sendEmailToUser);
router.route("/signup").post(signup);
router.route("/login").post(login);

router.use(protect);

router.route("/").patch(updateUserDetails);
router.route("/me").get(getMe);

export default router;
