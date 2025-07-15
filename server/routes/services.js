import express from 'express';
import { createService, getServices } from '../controllers/serviceController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getServices);
router.post('/', protect, createService);

export default router;
