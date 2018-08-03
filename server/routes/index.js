import s3 from './s3.js';
import login from './login.js';
import activities from './activities.js';
import express from 'express';
const router = express.Router();
router.use('/', s3);
router.use('/', login);
router.use('/activities', activities);
export default router;