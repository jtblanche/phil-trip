import routes from './routes';
import express from 'express';
const router = express.Router();
router.use('/api', routes);
export default router;