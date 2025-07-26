import { useState } from 'react';
import api from '../lib/api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'client' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/auth/register', form);
      navigate('/login');
    } catch {
      alert('Registration failed.');
    }
  };

  return (
    <div className="flex justify-center p-8">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />
        <label>Email</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />
        <label>Password</label>
        <input name="password" type="password" value={form.password} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />
        <label>Role</label>
        <select name="role" value={form.role} onChange={handleChange} className="w-full p-2 border rounded mb-4">
          <option value="client">Client</option>
          <option value="landscaper">Landscaper</option>
        </select>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Register</button>
      </form>
    </div>
  );
}

