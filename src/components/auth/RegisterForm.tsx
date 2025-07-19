import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface RegisterFormProps {
  onSuccess?: () => void;
  redirectTo?: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess, redirectTo = '/dashboard' }) => {
  const navigate = useNavigate();
  const { register, loginWithGoogle, loading } = useAuth();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'customer' as 'contractor' | 'customer',
    agreeToTerms: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      return 'Full name is required';
    }
    if (!formData.email.trim()) {
      return 'Email is required';
    }
    if (!formData.password) {
      return 'Password is required';
    }
    if (formData.password.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    if (formData.password !== formData.confirmPassword) {
      return 'Passwords do not match';
    }
    if (!formData.agreeToTerms) {
      return 'You must agree to the terms and conditions';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      await register(formData.email, formData.password, formData.fullName, formData.userType);
      onSuccess?.();
      navigate(redirectTo);
    } catch (err: any) {
      setError(err.message || 'Registration failed. Please try again.');
    }
  };

  const handleGoogleSignup = async () => {
    setError(null);
    try {
      await loginWithGoogle();
      onSuccess?.();
      // Note: Google OAuth will handle the redirect
    } catch (err: any) {
      setError(err.message || 'Google sign up failed');
    }
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit} className="auth-form">
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="userType" className="form-label">
            I am a
          </label>
          <select
            className="form-select"
            id="userType"
            name="userType"
            value={formData.userType}
            onChange={handleInputChange}
            disabled={loading}
          >
            <option value="customer">Customer (looking for services)</option>
            <option value="contractor">Contractor (providing services)</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            required
            disabled={loading}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
            disabled={loading}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Create a password"
              required
              disabled={loading}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
              disabled={loading}
            >
              <i className={`bi bi-eye${showPassword ? '-slash' : ''}`}></i>
            </button>
          </div>
          <div className="form-text">
            Password must be at least 6 characters long
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <div className="input-group">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
              required
              disabled={loading}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              disabled={loading}
            >
              <i className={`bi bi-eye${showConfirmPassword ? '-slash' : ''}`}></i>
            </button>
          </div>
        </div>

        <div className="mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              required
              disabled={loading}
            />
            <label className="form-check-label" htmlFor="agreeToTerms">
              I agree to the{' '}
              <Link to="/terms" target="_blank" className="text-decoration-none">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" target="_blank" className="text-decoration-none">
                Privacy Policy
              </Link>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100 mb-3"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Creating account...
            </>
          ) : (
            'Create Account'
          )}
        </button>

        <div className="text-center mb-3">
          <span className="text-muted">or continue with</span>
        </div>

        <button
          type="button"
          className="btn btn-outline-secondary w-100 mb-3"
          onClick={handleGoogleSignup}
          disabled={loading}
        >
          <i className="fab fa-google me-2"></i>
          Continue with Google
        </button>

        <div className="text-center">
          <span className="text-muted">
            Already have an account?{' '}
            <Link to="/auth/login" className="text-decoration-none">
              Sign in
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;