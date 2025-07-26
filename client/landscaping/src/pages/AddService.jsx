import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../lib/api';

export default function AddService() {
  const [form, setForm] = useState({
    title: '', description: '', price: '', location: '', images: ['']
  });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/services', form);
      navigate('/dashboard');
    } catch {
      alert('Create service failed.');
    }
  };

  return (
    <div className="flex justify-center p-8">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded shadow space-y-4">
        <h2 className="text-2xl font-bold">Add New Service</h2>
        {['title', 'description', 'location'].map(f => (
          <>
            <label key={f}>{f.charAt(0).toUpperCase() + f.slice(1)}</label>
            <input name={f} value={form[f]} onChange={handleChange} className="w-full p-2 border rounded" required />
          </>
        ))}
        <label>Price</label>
        <input name="price" type="number" value={form.price} onChange={handleChange} className="w-full p-2 border rounded" required />
        
        <label>Image URL</label>
        <input name="images" value={form.images[0]} onChange={e => setForm({ ...form, images: [e.target.value] })} className="w-full p-2 border rounded" required />

        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Create Service</button>
      </form>
    </div>
  );
}
