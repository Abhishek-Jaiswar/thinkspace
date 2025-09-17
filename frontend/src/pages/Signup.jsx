import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // ...existing code...
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3000/api/user/register',
        formData,
        { withCredentials: true }
      );

      if (response.data.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      console.error(error)
    }
  };

  const passwordRequirements = [
    { text: 'At least 8 characters', met: formData.password.length >= 8 },
    // { text: 'One uppercase letter', met: /[A-Z]/.test(formData.password) },
    // { text: 'One lowercase letter', met: /[a-z]/.test(formData.password) },
    // { text: 'One number', met: /\d/.test(formData.password) }
  ];

  const isPasswordValid = passwordRequirements.every(req => req.met);

  const doPasswordsMatch = formData.password === formData.confirmPassword && formData.confirmPassword.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-orange-50/30 flex items-center justify-center px-4">
      <div className="max-w-7xl lg:mt-0 mt-10 w-full lg:flex mx-auto items-center justify-center gap-44">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 mb-6">
            <img className="w-10" src="./globe.svg" alt="logo" />
            <h1 className="text-2xl font-bold text-orange-500">
              Think<span className="text-neutral-950">Space</span>
            </h1>
          </Link>
          <h2 className="text-3xl font-bold text-neutral-900 mb-2">Create your account</h2>
          <p className="text-neutral-600">Start your writing journey today</p>
        </div>

        {/* Signup Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">
                  First name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                    placeholder="John"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">
                  Last name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>

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
                  placeholder="john@example.com"
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
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Password Requirements */}
              {formData.password && (
                <div className="mt-3 space-y-2">
                  {passwordRequirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center ${req.met ? 'bg-green-500' : 'bg-neutral-200'
                        }`}>
                        {req.met && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className={`text-sm ${req.met ? 'text-green-600' : 'text-neutral-500'
                        }`}>
                        {req.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-2">
                Confirm password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className={`w-full pl-12 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-colors ${formData.confirmPassword && doPasswordsMatch
                    ? 'border-green-500 focus:border-green-500 focus:ring-green-200'
                    : formData.confirmPassword && !doPasswordsMatch
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                      : 'border-neutral-300 focus:border-orange-500 focus:ring-orange-200'
                    }`}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {formData.confirmPassword && !doPasswordsMatch && (
                <p className="mt-2 text-sm text-red-600">Passwords do not match</p>
              )}
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  required
                  className="w-4 h-4 text-orange-600 border-neutral-300 rounded focus:ring-orange-500 mt-1"
                />
                <span className="text-sm text-neutral-700">
                  I agree to the{' '}
                  <Link to="/terms" className="text-orange-600 hover:text-orange-700 font-medium">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-orange-600 hover:text-orange-700 font-medium">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              disabled={!isPasswordValid || !doPasswordsMatch || !formData.agreeToTerms}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-neutral-300 disabled:cursor-not-allowed text-white py-3 px-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
            >
              Create account
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
          {/* Login Link */}
          <div className="text-center mt-8">
            <p className="text-neutral-600">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-orange-600 hover:text-orange-700 font-semibold transition-colors"
              >
                Sign in
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

export default Signup;
