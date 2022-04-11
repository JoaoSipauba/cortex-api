import { S3, config } from "aws-sdk";
import crypto from "crypto";
import multer from "multer";
import multerS3 from "multer-s3";

config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
});

const s3 = new S3({});

export const upload = multer({
    storage: multerS3({
        s3,
        bucket: process.env.AWS_BUCKET as string,
        acl: "public-read",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata(req, file, cb) {
            console.log("cb");
            cb(null, {
                fieldName: file.fieldname,
            });
        },
        key(req, file, cb) {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                const filename = `${hash.toString("hex")}-${file.originalname}`;
                console.log(filename);

                cb(null, filename);
            });
        },
    }),
});
