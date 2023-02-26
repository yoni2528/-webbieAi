import AWS from "aws-sdk";
import fs from "fs";

const s3 = new AWS.S3();

export const uploadS3Object = async (bucketName, filePath, fileName) => {
  const fileStream = fs.createReadStream(filePath);
  await s3
    .putObject({
      Body: fileStream,
      Bucket: bucketName,
      Key: `${fileName}.html`,
      ContentType: "text/html",
    })
    .promise();
};

export const deleteS3Object = async (bucketName, objectKey) => {
  try {
    const params = {
      Bucket: bucketName,
      Key: objectKey,
    };
    await s3.deleteObject(params).promise();
    console.log(`Object ${objectKey} deleted from bucket ${bucketName}`);
  } catch (err) {
    console.log(
      `Error deleting object ${objectKey} from bucket ${bucketName}: ${err}`
    );
    throw err;
  }
};
