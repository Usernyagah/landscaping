import { useEffect, useState } from 'react';
import api from '../lib/api';
import { useAuth } from '../hooks/useAuth';
import ServiceCard from '../components/ServiceCard';

export default function Dashboard() {
  const { user } = useAuth();
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user.role === 'landscaper') {
      api.get('/services').then(res => {
        setServices(res.data.filter(s => s.landscaper._id === user._id));
      });
    } else {
      api.get('/bookings').then(res => setBookings(res.data));
    }
  }, [user]);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      {user.role === 'landscaper' ? (
        <>
          <h3 className="text-xl mb-4">Your Services</h3>
          <div className="grid gap-4">{services.map(s => <ServiceCard key={s._id} service={s} />)}</div>
        </>
      ) : (
        <>
          <h3 className="text-xl mb-4">Your Bookings</h3>
          <ul className="space-y-4">
            {bookings.map(b => (
              <li key={b._id} className="border p-4 rounded shadow">
                <p><strong>Service:</strong> {b.service.title}</p>
                <p><strong>Date:</strong> {new Date(b.date).toLocaleString()}</p>
                <p><strong>Status:</strong> {b.status}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
