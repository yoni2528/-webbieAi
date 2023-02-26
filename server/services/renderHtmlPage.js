import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const insertToString = (originalString, index, insertingString) => {
  const insertionPosition = originalString.lastIndexOf(index) + index.length;

  const newString = `${originalString.substring(
    0,
    insertionPosition
  )}\n${insertingString}\n${originalString.substring(insertionPosition)}`;

  return newString;
};

const renderNewHtmlPage = async (html, fileName, email) => {
  try {
    const filePath = path.resolve(__dirname, "../public/index.html");

    const originalHtml = await fs.promises.readFile(filePath);
    const newFilePath = `./public/${fileName}.html`;

    const newData = insertToString(
      originalHtml.toString(),
      "<!-- BODY -->",
      html
    );

    const lastFileData = insertToString(
      newData,
      "// Script -->",
      `const senderEmail="${email}"`
    );

    await fs.promises.writeFile(newFilePath, lastFileData);

    return newFilePath;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default renderNewHtmlPage;
