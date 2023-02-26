import renderHtmlPage from "../services/renderHtmlPage.js";
import WebData from "../models/websiteModel.js";
import { uploadS3Object } from "../services/awsS3.js";

export const deployWebsite = async (req, res) => {
  const { html, webId } = req.body;

  const { email } = await WebData.findOne({ _id: webId });

  const newFilePath = await renderHtmlPage(html, req.user.id, email);
  const fileName = webId;

  const bucketName = `bucket-63ea3eedd848faf8862d7ce9`;

  await uploadS3Object(bucketName, newFilePath, fileName);
  res.json({
    status: "success",
    staticUrl: `https://dv9ersq2puwv2.cloudfront.net/${fileName}.html`,
  });
};
