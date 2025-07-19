import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Types for user data
export interface User {
  id: string;
  email: string;
  name: string;
  picture?: string;
  provider: 'google' | 'facebook' | 'email';
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing user session on app load
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      setLoading(true);
      
      // Replace this with your actual API call
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const userData = await response.json();
      const user: User = {
        id: userData.id,
        email: userData.email,
        name: userData.name,
        provider: 'email',
      };

      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string): Promise<void> => {
    try {
      setLoading(true);
      
      // Replace this with your actual API call
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const userData = await response.json();
      const user: User = {
        id: userData.id,
        email: userData.email,
        name: userData.name,
        provider: 'email',
      };

      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async (): Promise<void> => {
    try {
      setLoading(true);
      
      // Initialize Google Auth if not already done
      if (!window.google) {
        throw new Error('Google SDK not loaded');
      }

      const auth = window.google.accounts.oauth2.initTokenClient({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        scope: 'email profile',
        callback: async (response: any) => {
          try {
            // Get user info from Google
            const userInfoResponse = await fetch(
              `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${response.access_token}`
            );
            const userInfo = await userInfoResponse.json();

            const user: User = {
              id: userInfo.id,
              email: userInfo.email,
              name: userInfo.name,
              picture: userInfo.picture,
              provider: 'google',
            };

            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            
            // Optional: Send user data to your backend
            await fetch('/api/auth/social-login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ user, provider: 'google' }),
            });
          } catch (error) {
            console.error('Google auth callback error:', error);
            throw error;
          } finally {
            setLoading(false);
          }
        },
      });

      auth.requestAccessToken();
    } catch (error) {
      console.error('Google login error:', error);
      setLoading(false);
      throw error;
    }
  };

  const loginWithFacebook = async (): Promise<void> => {
    try {
      setLoading(true);
      
      if (!window.FB) {
        throw new Error('Facebook SDK not loaded');
      }

      return new Promise((resolve, reject) => {
        window.FB.login((response: any) => {
          if (response.authResponse) {
            // Get user info from Facebook
            window.FB.api('/me', { fields: 'name,email,picture' }, async (userInfo: any) => {
              try {
                const user: User = {
                  id: userInfo.id,
                  email: userInfo.email,
                  name: userInfo.name,
                  picture: userInfo.picture?.data?.url,
                  provider: 'facebook',
                };

                setUser(user);
                localStorage.setItem('user', JSON.stringify(user));
                
                // Optional: Send user data to your backend
                await fetch('/api/auth/social-login', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ user, provider: 'facebook' }),
                });

                setLoading(false);
                resolve();
              } catch (error) {
                console.error('Facebook auth error:', error);
                setLoading(false);
                reject(error);
              }
            });
          } else {
            setLoading(false);
            reject(new Error('Facebook login failed'));
          }
        }, { scope: 'email' });
      });
    } catch (error) {
      console.error('Facebook login error:', error);
      setLoading(false);
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      setLoading(true);
      
      // Logout from social providers if needed
      if (user?.provider === 'google' && window.google) {
        // Google logout is handled automatically
      }
      
      if (user?.provider === 'facebook' && window.FB) {
        window.FB.logout();
      }

      // Clear local storage and user state
      localStorage.removeItem('user');
      setUser(null);
      
      // Optional: Call your backend logout endpoint
      await fetch('/api/auth/logout', {
        method: 'POST',
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email: string): Promise<void> => {
    try {
      setLoading(true);
      
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Password reset failed');
      }
    } catch (error) {
      console.error('Password reset error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    register,
    loginWithGoogle,
    loginWithFacebook,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
