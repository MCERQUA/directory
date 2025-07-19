import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireVerified?: boolean;
  requiredUserType?: 'contractor' | 'customer';
  fallback?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireVerified = false,
  requiredUserType,
  fallback
}) => {
  const { user, profile, loading } = useAuth();
  const location = useLocation();

  // Show loading spinner while checking auth
  if (loading) {
    return (
      fallback || (
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <div className="spinner-border text-primary mb-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <h4>Loading...</h4>
          </div>
        </div>
      )
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  // Check if profile is required but not loaded
  if (!profile) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h4>Loading profile...</h4>
        </div>
      </div>
    );
  }

  // Check if verification is required
  if (requireVerified && !profile.is_verified) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="alert alert-warning">
            <h4>Account Verification Required</h4>
            <p>Please verify your account to access this feature.</p>
            <button className="btn btn-primary">Verify Account</button>
          </div>
        </div>
      </div>
    );
  }

  // Check user type requirements
  if (requiredUserType && profile.user_type !== requiredUserType) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="alert alert-danger">
            <h4>Access Restricted</h4>
            <p>
              This page is only available for{' '}
              {requiredUserType === 'contractor' ? 'contractors' : 'customers'}.
            </p>
            <Navigate to="/dashboard" replace />
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;