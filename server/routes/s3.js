import express from 'express';
import s3router from './s3router';
const router = express.Router();
router.use('/', s3router({
    bucket: "bixygroups",
    getFileKeyDir: () => "pbp",
    ACL: "public-read",
    uniquePrefix: true // (4.0.2 and above) default is true, setting the attribute to false preserves the original filename in S3
}));
export default router;