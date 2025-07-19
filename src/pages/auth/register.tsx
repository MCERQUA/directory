import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import bg from '../../assets/img/auth-bg.png';
import logo from '../../assets/img/icon.png';
import { FaGooglePlusG, FaEye, FaEyeSlash } from 'react-icons/fa6';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { register, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (!formData.agreeToTerms) {
      setError('You must agree to the Terms and Conditions');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      await register(formData.email, formData.password, formData.name);
      navigate('/dashboard-user'); // Redirect to dashboard after successful registration
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setError('');
    setIsLoading(true);
    
    try {
      await loginWithGoogle();
      navigate('/dashboard-user');
    } catch (error) {
      setError('Google signup failed. Please try again.');
      console.error('Google signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section style={{
      backgroundImage: `url(${bg})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#ffe8ee',
      backgroundSize: 'cover'
    }}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-5 col-lg-7 col-md-9">
            <div className="authWrap">
              <div className="authhead">
                <div className="text-center mb-4">
                  <Link to="/">
                    <img className="img-fluid" src={logo} width="55" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="authbody d-black mb-4">
                <div className="card rounded-4 p-sm-5 p-4">
                  <div className="card-body p-0">
                    <div className="text-center">
                      <h1 className="mb-2 fs-2">Create An Account!</h1>
                    </div>

                    {error && (
                      <div className="alert alert-danger mt-3" role="alert">
                        {error}
                      </div>
                    )}

                    <form className="mt-5 text-start" onSubmit={handleSubmit}>
                      <div className="form mb-5">
                        <div className="form-group form-border">
                          <label className="form-label">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                          />
                        </div>
                        
                        <div className="form-group form-border">
                          <label className="form-label">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                          />
                        </div>
                        
                        <div className="form-group form-border">
                          <label className="form-label">Enter Password</label>
                          <div className="position-relative">
                            <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              className="form-control"
                              placeholder="Password"
                              value={formData.password}
                              onChange={handleChange}
                              required
                              disabled={isLoading}
                            />
                            <button
                              type="button"
                              className="btn position-absolute top-50 end-0 translate-middle-y me-3 p-0 border-0 bg-transparent"
                              onClick={() => setShowPassword(!showPassword)}
                              disabled={isLoading}
                            >
                              {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                          </div>
                        </div>

                        <div className="form-group form-border">
                          <label className="form-label">Confirm Password</label>
                          <div className="position-relative">
                            <input
                              type={showConfirmPassword ? "text" : "password"}
                              name="confirmPassword"
                              className="form-control"
                              placeholder="Confirm Password"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              required
                              disabled={isLoading}
                            />
                            <button
                              type="button"
                              className="btn position-absolute top-50 end-0 translate-middle-y me-3 p-0 border-0 bg-transparent"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              disabled={isLoading}
                            >
                              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                          </div>
                        </div>

                        <div className="form-group form-border mb-4">
                          <button
                            type="submit"
                            className="btn btn-primary full-width fw-medium"
                            disabled={isLoading}
                          >
                            {isLoading ? 'Creating Account...' : 'Create Account'}
                          </button>
                        </div>

                        <div className="modal-flex-item d-flex align-items-center justify-content-between mb-3">
                          <div className="modal-flex-first">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="agreeToTerms"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                required
                              />
                              <label className="form-check-label" htmlFor="agreeToTerms">
                                I agree to <Link to="/privacy-policy" className="text-primary">Terms & Conditions</Link>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="prixer my-5">
                        <div className="devider-wraps position-relative">
                          <div className="devider-text text-muted text-md">Or signup with</div>
                        </div>
                      </div>

                      <div className="social-login">
                        <div className="d-flex align-items-center justify-content-center">
                          <button
                            type="button"
                            onClick={handleGoogleSignup}
                            className="btn bg-white border border-2 text-dark full-width"
                            disabled={isLoading}
                          >
                            <FaGooglePlusG className="color--googleplus me-2" />
                            <span className="fw-medium text-md">
                              {isLoading ? 'Loading...' : 'Signup with Google'}
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="authfooter">
                <div className="text-center">
                  <p className="text-dark mb-0">
                    Already have an account?
                    <Link to="/login" className="fw-medium text-primary"> Sign in</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
