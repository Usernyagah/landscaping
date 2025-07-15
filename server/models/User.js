import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['client', 'landscaper'], default: 'client' },
  phone: String,
  location: String,
  bio: String,
});

export default mongoose.model('User', userSchema);
