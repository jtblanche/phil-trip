import express from 'express';
import protectedRoute from './resources/protectedRoute';
var jwt = require('express-jwt');
const router = express.Router();
router.get('/', jwt({ secret: process.env.JWT_SECRET }), protectedRoute, (req, res) => {
    res.json(['activity 1', 'activity 2', 'activity 3']);
});
export default router;