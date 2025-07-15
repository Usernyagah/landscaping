import Service from '../models/Service.js';

export const createService = async (req, res) => {
  const service = await Service.create({
    ...req.body,
    landscaper: req.user.id,
  });
  res.status(201).json(service);
};

export const getServices = async (req, res) => {
  const services = await Service.find().populate('landscaper', 'name');
  res.json(services);
};
