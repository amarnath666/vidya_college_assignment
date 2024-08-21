"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import AdminHeader from '@/app/_components/AdminHeader';
import { useDispatch, UseDispatch, useSelector } from 'react-redux';
import { setAdminLoggedIn } from '@/redux/features/adminSlice';
import { toast } from 'sonner';

const AdminSignin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();
  const adminLoggedIn = useSelector(state => state.admin.adminLoggedIn);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/adminSignin', { email, password });

      if (res.status === 200) {
        router.push('/adminDashboard'); 
        dispatch(setAdminLoggedIn(true));
        toast('Admin logged in successfully!');
      } else {
        setError(res.data.error || 'Sign-in failed.');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    }
  };

  return (
    <div>
      <AdminHeader />
      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">Admin Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignin;
