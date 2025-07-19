# Setup Guide

## Prerequisites

### System Requirements
- **Node.js**: v18.0.0 or higher
- **npm**: v8.0.0 or higher (or yarn equivalent)
- **Git**: For version control
- **Modern Web Browser**: Chrome, Firefox, Safari, or Edge

### API Keys (Optional)
- **Google Maps API Key**: For map features
- **Google OAuth Client ID**: For Google authentication
- **Facebook App ID**: For Facebook authentication (currently disabled)

## Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd DIRECTORY-SITE
```

### 2. Install Dependencies
```bash
npm install
```

This will install all required dependencies including:
- React 19 and TypeScript
- Vite build tools
- Bootstrap 5 and SCSS
- React Router and other libraries

### 3. Environment Configuration

Create environment files for configuration:

#### `.env.local` (for local development)
```env
# Google Maps API Key
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Google OAuth (for social login)
VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id_here

# Facebook OAuth (currently disabled)
# VITE_FACEBOOK_APP_ID=your_facebook_app_id_here

# API Base URL (if using backend)
# VITE_API_BASE_URL=http://localhost:3001/api
```

#### `.env.production` (for production builds)
```env
VITE_GOOGLE_MAPS_API_KEY=your_production_google_maps_api_key
VITE_GOOGLE_CLIENT_ID=your_production_google_oauth_client_id
VITE_API_BASE_URL=https://your-api-domain.com/api
```

### 4. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Development Commands

### Core Commands
```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint
```

### Additional Development Tasks
```bash
# Type checking (via build command)
npm run build

# Check for TypeScript errors only
npx tsc --noEmit

# Format code (if using Prettier)
npx prettier --write "src/**/*.{ts,tsx,scss}"
```

## Project Configuration

### TypeScript Configuration

The project uses multiple TypeScript configuration files:

#### `tsconfig.json` (root configuration)
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

#### `tsconfig.app.json` (application code)
- Configured for React and DOM APIs
- Strict TypeScript settings
- ES2020 target for modern browsers

#### `tsconfig.node.json` (build tools)
- Configured for Node.js environment
- Used by Vite and build tools

### Vite Configuration

Located at `vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Additional configuration options
})
```

### ESLint Configuration

Located at `eslint.config.js`:
- React and TypeScript linting rules
- React Hooks plugin for hooks rules
- React Refresh plugin for hot reload

## API Integration Setup

### Mock Data Development
By default, the application uses mock data from `src/data/data.ts`. This allows for immediate development without backend setup.

### Backend Integration
To integrate with a real backend:

1. **Configure API endpoints** in `src/contexts/AuthContext.tsx`:
```typescript
// Replace mock endpoints with real API URLs
const response = await fetch('/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password }),
});
```

2. **Update environment variables** with your API base URL
3. **Implement error handling** for network requests
4. **Add authentication tokens** to requests

### Google Maps Setup

1. **Get Google Maps API Key**:
   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Enable Maps JavaScript API
   - Create credentials (API Key)
   - Restrict the key to your domain

2. **Configure the API key** in your environment file:
```env
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

3. **Test map functionality** on any half-map layout page

### Social Authentication Setup

#### Google OAuth
1. **Create Google OAuth credentials**:
   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Create OAuth 2.0 client ID
   - Add authorized JavaScript origins

2. **Configure in environment**:
```env
VITE_GOOGLE_CLIENT_ID=your_client_id_here
```

#### Facebook OAuth (Currently Disabled)
Facebook authentication is currently disabled but ready for activation:

1. **Uncomment Facebook code** in `src/App.tsx` (lines 104-125)
2. **Add Facebook App ID** to environment
3. **Re-enable Facebook buttons** in login/register pages

## Development Workflow

### 1. Local Development
```bash
# Start development server
npm run dev

# Open browser to http://localhost:5173
# Changes will hot-reload automatically
```

### 2. Code Quality
```bash
# Run linting before commits
npm run lint

# Fix auto-fixable issues
npm run lint --fix
```

### 3. Building for Production
```bash
# Create production build
npm run build

# Test production build locally
npm run preview
```

### 4. Testing Routes
Navigate to different routes to test functionality:
- `/` - Default home page
- `/home-2` through `/home-splash` - Home variants
- `/grid-layout-01` through `/grid-layout-06` - Grid layouts
- `/list-layout-01` through `/list-layout-05` - List layouts
- `/half-map-01` through `/half-map-05` - Half-map layouts
- `/dashboard-user` - User dashboard (requires authentication)

## Common Issues and Solutions

### Port Already in Use
If port 5173 is in use:
```bash
# Use different port
npm run dev -- --port 3000
```

### TypeScript Errors
```bash
# Check for TypeScript errors
npx tsc --noEmit

# Common fixes:
# - Check import paths
# - Verify type definitions
# - Update TypeScript version if needed
```

### SCSS Compilation Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Environment Variables Not Loading
- Ensure `.env.local` file is in the root directory
- Variables must be prefixed with `VITE_`
- Restart development server after changes

### Google Maps Not Loading
- Verify API key is correct
- Check API key restrictions
- Ensure Maps JavaScript API is enabled
- Check browser console for errors

## Next Steps

After successful setup:
1. **Explore the codebase** - Check different page variants
2. **Customize styling** - Modify SCSS variables in `src/assets/scss/_custom.scss`
3. **Add your content** - Update mock data in `src/data/data.ts`
4. **Configure authentication** - Set up social login providers
5. **Deploy** - Follow the deployment guide for production setup