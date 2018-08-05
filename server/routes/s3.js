import express from 'express';
const router = express.Router();
router.use('/', require('react-s3-uploader/s3router')({
    bucket: "bixygroups",
    getFileKeyDir: () => "pbp",
    uniquePrefix: true // (4.0.2 and above) default is true, setting the attribute to false preserves the original filename in S3
}));
export default router;