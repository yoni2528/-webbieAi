import newPromptCreate from "../services/openaiPrompt.js";

import Website from "../models/websiteModel.js";
import catchAsync from "../utils/catchAsync.js";

import handleImages from "../services/unsplahApiHandler.js";

import openai from "../services/openaiConfig.js";

export const handleNewPrompt = catchAsync(async (req, res) => {
  const { name, work, webTone, advantages, products, template, email, color } =
    req.body;

  const prompt = await newPromptCreate({
    email,
    work,
    name,
    webTone,
    advantages,
    products,
    color,
  });

  const data = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 1000,
  });

  const webData = data.data.choices[0].text;
  const parsedData = JSON.parse(webData);

  const WebObject = {
    template,
    color,
    email,
    imageKeyword: parsedData.keyword_for_image,
    title: parsedData.web_title,
    subtitle: parsedData.web_subtitle,
    aboutMe: {
      title: parsedData.about_me_title,
      content: parsedData.about_me_paragraph,
    },
    advantages: [
      {
        title: parsedData.advantage_1_title,
        content: parsedData.advantage_1_description,
      },
      {
        title: parsedData.advantage_2_title,
        content: parsedData.advantage_2_description,
      },
      {
        title: parsedData.advantage_3_title,
        content: parsedData.advantage_3_description,
      },
    ],
    products: [
      {
        title: parsedData.product_1_title,
        content: parsedData.product_1_description,
      },
      {
        title: parsedData.product_2_title,
        content: parsedData.product_2_description,
      },
      {
        title: parsedData.product_3_title,
        content: parsedData.product_3_description,
      },
    ],
  };

  const imagesGenerator = await handleImages(WebObject.imageKeyword);

  const newWeb = await Website.create({
    ...WebObject,
    user: req.user.id,
    template: template,
    name: name,
    webImages: imagesGenerator,
  });

  res.status(200).json({
    message: "success",
    data: { ...WebObject, id: newWeb._id },
    baseData: req.body,
    webId: newWeb._id,
  });
});
