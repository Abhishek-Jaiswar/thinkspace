import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import axios from 'axios';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/api/user/login',
        formData,
        { withCredentials: true }
      );

      if (response.data.status === 200) {
        return
      }
    } catch (error) {
      console.error(error)
    }
    console.log('Login data:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-orange-50/30 flex items-center justify-center py-12 px-4">
      <div className="max-w-4xl w-full md:flex items-center justify-between">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 mb-6">
            <img className="w-10" src="./globe.svg" alt="logo" />
            <h1 className="text-2xl font-bold text-orange-500">
              Think<span className="text-neutral-950">Space</span>
            </h1>
          </Link>
          <h2 className="text-3xl font-bold text-neutral-900 mb-2">Welcome back</h2>
          <p className="text-neutral-600">Sign in to your account to continue writing</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          {/* Login Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-12 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <Link
                  to="/forgot-password"
                  className="text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Sign in
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-8">
            <p className="text-neutral-600">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-orange-600 hover:text-orange-700 font-semibold transition-colors"
              >
                Sign up for free
              </Link>
            </p>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-4">
            <Link
              to="/"
              className="text-neutral-500 hover:text-neutral-700 text-sm transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
