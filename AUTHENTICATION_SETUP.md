# Social Authentication Setup Guide

This guide will help you set up Google and Facebook authentication for your ListingHub application.

## 🚀 Quick Start

1. **Clone and Install**
   ```bash
   git clone https://github.com/MCERQUA/directory.git
   cd directory
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env with your credentials (see below)
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   ```

## 🔧 Social Authentication Setup

### Google OAuth Setup

1. **Go to Google Cloud Console**
   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one

2. **Enable Google+ API**
   - Go to "APIs & Services" > "Library"
   - Search for "Google+ API" and enable it
   - Also enable "Google Identity" API

3. **Create OAuth 2.0 Credentials**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth 2.0 Client IDs"
   - Choose "Web application"
   - Add your authorized origins:
     - `http://localhost:5173` (for development)
     - `https://yourdomain.com` (for production)
   - Add authorized redirect URIs:
     - `http://localhost:5173/auth/google/callback`
     - `https://yourdomain.com/auth/google/callback`

4. **Copy Client ID**
   - Copy the Client ID and add it to your `.env` file:
   ```
   VITE_GOOGLE_CLIENT_ID=your_google_client_id_here.googleusercontent.com
   ```

### Facebook OAuth Setup

1. **Go to Facebook Developers**
   - Visit [Facebook Developers](https://developers.facebook.com/)
   - Create a new app or use an existing one

2. **Add Facebook Login Product**
   - In your app dashboard, click "Add Product"
   - Find "Facebook Login" and click "Set Up"

3. **Configure OAuth Settings**
   - Go to "Facebook Login" > "Settings"
   - Add Valid OAuth Redirect URIs:
     - `http://localhost:5173/` (for development)
     - `https://yourdomain.com/` (for production)

4. **Copy App ID**
   - Go to "Settings" > "Basic"
   - Copy the App ID and add it to your `.env` file:
   ```
   VITE_FACEBOOK_APP_ID=your_facebook_app_id_here
   ```

### Complete .env File Example

```bash
# Google OAuth Configuration
VITE_GOOGLE_CLIENT_ID=123456789-abcdef.googleusercontent.com

# Facebook App Configuration  
VITE_FACEBOOK_APP_ID=123456789012345

# API Configuration (optional - for your backend)
VITE_API_BASE_URL=http://localhost:3001/api

# Environment
VITE_NODE_ENV=development
```

## 🏗️ Architecture Overview

The authentication system consists of:

1. **AuthContext** (`src/contexts/AuthContext.tsx`)
   - Manages user state and authentication methods
   - Provides login, register, and social auth functions
   - Handles token management and user persistence

2. **Protected Routes** (`src/components/ProtectedRoute.tsx`)
   - `ProtectedRoute`: Requires authentication
   - `PublicRoute`: Redirects authenticated users

3. **Updated Auth Pages**
   - `src/pages/auth/login.tsx`: Functional login with social options
   - `src/pages/auth/register.tsx`: Registration with validation
   - `src/pages/auth/forgot-password.tsx`: Password reset functionality

## 🔒 Security Features

- **Route Protection**: Dashboard routes require authentication
- **Token Management**: Secure storage in localStorage
- **Form Validation**: Client-side validation for better UX
- **Error Handling**: Comprehensive error messages
- **Loading States**: Visual feedback during authentication

## 🚦 How It Works

### Login Flow
1. User clicks "Sign in with Google/Facebook"
2. OAuth popup opens for authentication
3. User grants permissions
4. User data is received and stored
5. User is redirected to dashboard

### Registration Flow
1. User fills out registration form
2. Form validation runs
3. Account is created
4. User is automatically logged in
5. Redirect to dashboard

### Route Protection
- Dashboard routes check authentication status
- Unauthenticated users are redirected to login
- Authenticated users can't access login/register pages

## 🛠️ Customization

### Adding Custom Fields
To add custom fields to registration, modify:
1. `AuthContext.tsx` - Update User interface and register function
2. `register.tsx` - Add form fields and validation

### Styling
- Components use Bootstrap 5 classes
- Customize in your existing SCSS files
- Auth pages maintain your existing design system

### Backend Integration
The auth context includes placeholder API calls. Update these in `AuthContext.tsx`:
- `login()` function
- `register()` function
- `resetPassword()` function

Example backend integration:
```typescript
const login = async (email: string, password: string) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  // Handle response...
};
```

## 🐛 Troubleshooting

### Google Auth Issues
- Ensure HTTPS in production
- Check redirect URIs match exactly
- Verify Google+ API is enabled

### Facebook Auth Issues
- App must be live for production use
- Check redirect URIs in Facebook settings
- Ensure app domain is added in Facebook settings

### General Issues
- Clear browser cache and localStorage
- Check environment variables are loaded
- Verify all dependencies are installed

## 📚 Next Steps

1. **Backend Integration**: Connect to your authentication API
2. **User Profiles**: Extend user management features
3. **Role-Based Access**: Add user roles and permissions
4. **Email Verification**: Implement email confirmation
5. **Two-Factor Auth**: Add 2FA support (placeholder exists)

## 🔗 Useful Links

- [Google OAuth Documentation](https://developers.google.com/identity/oauth2/web/guides/overview)
- [Facebook Login Documentation](https://developers.facebook.com/docs/facebook-login/web)
- [React Router Documentation](https://reactrouter.com/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/)

## 🆘 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify environment variables are set correctly
3. Ensure OAuth apps are configured properly
4. Check network requests in dev tools

Your ListingHub application now has a complete authentication system with Google and Facebook login! 🎉
