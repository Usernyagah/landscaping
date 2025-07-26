import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch {
      alert('Login failed.');
    }
  };

  return (
    <div className="flex justify-center p-8">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <label className="block mb-2">Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 border rounded mb-4" required />
        <label className="block mb-2">Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 border rounded mb-4" required />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Login</button>
      </form>
    </div>
  );
}

