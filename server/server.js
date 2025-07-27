import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

import authRoutes from './routes/auth.js';
import serviceRoutes from './routes/services.js';
import bookingRoutes from './routes/bookings.js';

dotenv.config();
connectDB();

const app = express();

// ✅ Define allowed frontend origins (add more if needed)
const allowedOrigins = [
  'https://landscaping-9j2c9t80u-dennis-projects-51b0d90d.vercel.app',
  'https://landscaping-zeta.vercel.app',
  'http://localhost:5173'  // ✅ for local dev with Vite or React
];

// ✅ CORS middleware with dynamic origin check
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow non-browser requests
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// ✅ Define API routes
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/bookings', bookingRoutes);

// ✅ Default port fallback
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

