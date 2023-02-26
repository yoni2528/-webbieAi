import express from "express";
import { protect } from "../controllers/userController.js";
import { handleNewPrompt } from "../controllers/openaiController.js";

const router = express.Router();

router.use(protect);

router.route("/").post(handleNewPrompt);

export default router;
