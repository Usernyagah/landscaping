import express from 'express';
import { createBooking, getBookings } from '../controllers/bookingController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.get('/', protect, getBookings);
router.post('/', protect, createBooking);

export default router;
