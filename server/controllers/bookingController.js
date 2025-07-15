import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
  const booking = await Booking.create({
    service: req.body.service,
    client: req.user.id,
    date: req.body.date,
  });
  res.status(201).json(booking);
};

export const getBookings = async (req, res) => {
  const bookings = await Booking.find({ client: req.user.id }).populate('service');
  res.json(bookings);
};
