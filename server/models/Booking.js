import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  status: { type: String, enum: ['pending', 'confirmed', 'completed'], default: 'pending' },
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);
