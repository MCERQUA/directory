import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import bg from '../../assets/img/auth-bg.png';
import logo from '../../assets/img/icon.png';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  const { resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setIsLoading(true);

    try {
      await resetPassword(email);
      setMessage('Password reset email sent! Please check your inbox.');
    } catch (error) {
      setError('Failed to send reset email. Please try again.');
      console.error('Password reset error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
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
                        <h1 className="mb-2 fs-2">Forgot Password?</h1>
                        <p className="text-muted">
                          Enter your email address and we'll send you a link to reset your password.
                        </p>
                      </div>
                      
                      {error && (
                        <div className="alert alert-danger mt-3" role="alert">
                          {error}
                        </div>
                      )}
                      
                      {message && (
                        <div className="alert alert-success mt-3" role="alert">
                          {message}
                        </div>
                      )}

                      <form className="mt-5 text-start" onSubmit={handleSubmit}>
                        <div className="form mb-5">
                          <div className="form-group form-border mb-4">
                            <label>Email Address</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="name@example.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              disabled={isLoading}
                            />
                          </div>

                          <div className="form-group form-border mb-4">
                            <button
                              type="submit"
                              className="btn btn-primary full-width fw-medium"
                              disabled={isLoading || !email}
                            >
                              {isLoading ? 'Sending...' : 'Send Reset Link'}
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
                      Remember your password?
                      <Link to="/login" className="fw-medium text-primary"> Back to Login</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
