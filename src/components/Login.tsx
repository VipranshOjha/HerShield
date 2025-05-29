import React, { useState } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg">
        <div className="py-8 px-6">
          <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex justify-center mb-6">
            <Shield className="w-12 h-12 text-purple-600" />
          </div>
          
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
            Welcome to HerShield
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Sign In
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}