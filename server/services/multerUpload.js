import AWS from "aws-sdk";
import multer from "multer";
import s3Storage from "multer-sharp-s3";

const s3 = new AWS.S3();

const upload = multer({
  storage: s3Storage({
    s3,
    Bucket: "ya-cryptofolio-images",
    Key: (req, file, cb) => {
      cb(null, file.originalname);
    },
    resize: {
      width: 600,
      height: 400,
    },
  }),
});

export default upload;
