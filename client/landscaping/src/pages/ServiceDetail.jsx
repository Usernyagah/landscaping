import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../lib/api';

export default function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [date, setDate] = useState('');

  useEffect(() => {
    api.get(`/services/${id}`).then(res => setService(res.data)).catch(console.error);
  }, [id]);

  const handleBooking = () => {
    api.post('/bookings', { service: id, date })
      .then(() => alert('Booking successful!'))
      .catch(() => alert('Booking failed.'));
  };

  if (!service) return <p>Loading...</p>;

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
      <p className="text-gray-500">{service.location}</p>
      <p className="mt-4">{service.description}</p>
      <p className="mt-4 font-bold">Ksh {service.price}</p>
      <input type="datetime-local" className="mt-4 p-2 border rounded" value={date} onChange={e => setDate(e.target.value)} />
      <button className="mt-2 bg-green-600 text-white py-2 px-4 rounded" onClick={handleBooking}>Book</button>
    </div>
  );
}
