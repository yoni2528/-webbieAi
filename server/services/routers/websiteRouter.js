import express from "express";
import {
  getWebsites,
  createWebsite,
  updateWebsite,
  deleteWebsite,
  getWebsite,
  createWebPrompt,
  getWebPrompts,
  updatePrompt,
  deletePrompt,
  updateWebsiteSnapshot,
  uploadImage,
  updateWebsiteImage,
} from "../controllers/websiteController.js";
import { protect } from "../controllers/userController.js";
import { deployWebsite } from "../controllers/renderWebsiteController.js";

const router = express.Router();

router.use(protect);

router.route("/").get(getWebsites).post(createWebsite).patch(updateWebsite);

router.route("/:id").delete(deleteWebsite);

router.route("/edit/:id").get(getWebsite);

router
  .route("/prompt")
  .post(createWebPrompt)
  .get(getWebPrompts)
  .patch(updatePrompt);

router.route("/prompt/:id").delete(deletePrompt);

router.route("/upload").post(uploadImage, updateWebsiteSnapshot);

router.route("/update/image").post(uploadImage, updateWebsiteImage);

router.route("/deploy").post(deployWebsite);

export default router;
