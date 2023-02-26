import mongoose from "mongoose";
import WebData from "../models/websiteModel.js";
import WebPrompts from "../models/webPrompt.js";
import upload from "../services/multerUpload.js";
import { deleteS3Object } from "../services/awsS3.js";
import catchAsync from "../utils/catchAsync.js";
import CustomeError from "../utils/errorHandler.js";

export const uploadImage = upload.single("file");

export const getWebsites = catchAsync(async (req, res) => {
  const { id } = req.user;
  if (!id) CustomeError("Auth Error", "no id was provided");
  const Web = await WebData.find({ user: id });

  res.json({
    status: "success",
    data: Web,
  });
});

export const getWebsite = catchAsync(async (req, res) => {
  const { id } = req.params;
  const Web = await WebData.findById(id);

  if (!Web) CustomeError("Wrong Path", "No website match this url");
  res.json({
    status: "success",
    data: Web,
  });
});

export const createWebsite = catchAsync(async (req, res) => {
  if (!req.body)
    CustomeError("No details", "Theres no details to create this website");
  const newWeb = await WebData.create(req.body);
  res.json({
    status: "success",
    data: newWeb,
  });
});

export const updateWebsite = catchAsync(async (req, res) => {
  const newWeb = await WebData.findByIdAndUpdate(
    req.body.webId,
    {
      ...req.body.data,
    },
    { new: true }
  );
  res.json({
    status: "success",
    data: newWeb,
  });
});

export const updateWebsiteImage = catchAsync(async (req, res) => {
  const { attribute, webId } = req.body;

  const webData = await WebData.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(webId),
      },
    },
    {
      $unwind: "$webImages",
    },
    {
      $match: {
        "webImages.attribute": attribute,
      },
    },
    {
      $group: {
        _id: "$_id",
        webImages: { $push: "$webImages" },
      },
    },
    {
      $project: {
        _id: 0,
        webImages: 1,
      },
    },
  ]);

  const currImagePath = webData[0].webImages[0].src.replace(
    "https://ya-cryptofolio-images.s3.amazonaws.com/",
    ""
  );

  deleteS3Object("ya-cryptofolio-images", currImagePath);

  const fileName = `https://ya-cryptofolio-images.s3.amazonaws.com/${req.file.originalname}`;

  await WebData.updateOne(
    {
      _id: webId,
      webImages: { $elemMatch: { attribute: attribute } },
    },
    { $set: { "webImages.$.src": fileName } }
  );

  const newWeb = await WebData.findOne({ _id: webId });

  res.json({
    status: "success",
    data: newWeb,
  });
});

export const deleteWebsite = catchAsync(async (req, res) => {
  const { id } = req.params;

  const webPrompt = await WebData.findByIdAndDelete(id);
  res.json({
    status: "success",
    data: webPrompt,
  });
});

export const updateWebsiteSnapshot = catchAsync(async (req, res) => {
  res.json({
    status: "success",
  });
});

export const createWebPrompt = catchAsync(async (req, res) => {
  const webPrompt = await WebPrompts.create({
    ...req.body,
    user: req.user.id,
    date: Date.now(),
  });
  res.json({
    status: "success",
    data: webPrompt,
  });
});

export const updatePrompt = catchAsync(async (req, res) => {
  const webPrompt = await WebPrompts.findByIdAndUpdate(req.body._id, {
    ...req.body,
    user: req.user.id,
    id: undefined,
    date: Date.now(),
  });
  res.json({
    status: "success",
    data: webPrompt,
  });
});

export const getWebPrompts = catchAsync(async (req, res) => {
  const webPrompt = await WebPrompts.find({ user: req.user.id }).select("-__v");
  res.json({
    status: "success",
    data: webPrompt,
  });
});

export const deletePrompt = catchAsync(async (req, res) => {
  const { id } = req.params;

  const webPrompt = await WebPrompts.findByIdAndDelete(id);
  res.json({
    status: "success",
    data: webPrompt,
  });
});
