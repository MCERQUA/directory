# Development Workflows

## Overview

This guide covers common development workflows, patterns, and best practices for working with the ListingHub React TypeScript template. It provides step-by-step procedures for typical development tasks.

## Getting Started Workflow

### 1. Initial Setup
```bash
# Clone and setup
git clone <repository-url>
cd DIRECTORY-SITE
npm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with your API keys

# Start development
npm run dev
```

### 2. First Development Tasks
1. **Explore the codebase** - Navigate through different pages
2. **Run linting** - `npm run lint` to check code quality
3. **Test build process** - `npm run build` to ensure everything compiles
4. **Review documentation** - Read through `/docs/` folder

## Common Development Tasks

### 1. Adding a New Page

#### Step 1: Create the Page Component
```typescript
// src/pages/inner-pages/new-page.tsx
import React from 'react';
import NavbarLight from '../../components/navbar/navbar-light';
import Footer from '../../components/footer';

export default function NewPage() {
  return (
    <>
      <NavbarLight />
      <main>
        <div className="container">
          <h1>New Page</h1>
          <p>Your content here</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
```

#### Step 2: Add Route
```typescript
// src/App.tsx
import NewPage from './pages/inner-pages/new-page';

// Add to Routes component
<Route path='/new-page' element={<NewPage/>}/>
```

#### Step 3: Add Navigation Link
```typescript
// In relevant navbar component
<Link to="/new-page" className="nav-link">
  New Page
</Link>
```

### 2. Creating a New Component

#### Component Structure
```typescript
// src/components/my-new-component.tsx
import React, { useState, useEffect } from 'react';

interface MyNewComponentProps {
  title: string;
  data?: any[];
  onAction?: (item: any) => void;
}

export default function MyNewComponent({ 
  title, 
  data = [], 
  onAction 
}: MyNewComponentProps) {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    // Component setup logic
  }, []);
  
  const handleClick = (item: any) => {
    if (onAction) {
      onAction(item);
    }
  };
  
  return (
    <div className="my-new-component">
      <h2>{title}</h2>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="component-content">
          {data.map((item, index) => (
            <div key={index} onClick={() => handleClick(item)}>
              {/* Component content */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

#### Component Testing
```typescript
// Create test file: src/components/__tests__/my-new-component.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import MyNewComponent from '../my-new-component';

test('renders component with title', () => {
  render(<MyNewComponent title="Test Title" />);
  expect(screen.getByText('Test Title')).toBeInTheDocument();
});

test('handles click events', () => {
  const mockAction = jest.fn();
  render(
    <MyNewComponent 
      title="Test" 
      data={[{ id: 1 }]} 
      onAction={mockAction} 
    />
  );
  
  fireEvent.click(screen.getByRole('button'));
  expect(mockAction).toHaveBeenCalledWith({ id: 1 });
});
```

### 3. Adding Mock Data

#### Extend Data Types
```typescript
// src/data/data.ts
export interface NewDataType {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  featured: boolean;
}

export const newData: NewDataType[] = [
  {
    id: 1,
    title: 'Sample Item',
    description: 'Sample description',
    image: '/assets/img/sample.jpg',
    category: 'category-1',
    featured: true
  },
  // ... more items
];
```

#### Use in Components
```typescript
// Import and use the data
import { newData } from '../data/data';

export default function MyComponent() {
  const [items, setItems] = useState(newData);
  
  const filteredItems = items.filter(item => item.featured);
  
  return (
    <div>
      {filteredItems.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}
```

### 4. Customizing Styles

#### Method 1: CSS Custom Properties
```scss
// src/assets/scss/_custom.scss
:root {
  --bs-primary: #your-color;
  --bs-secondary: #your-secondary-color;
  --custom-spacing: 24px;
}
```

#### Method 2: Component-Specific SCSS
```scss
// src/assets/scss/components/_my-component.scss
.my-component {
  padding: var(--custom-spacing);
  background-color: var(--bs-light);
  border-radius: 12px;
  
  .component-title {
    color: var(--bs-primary);
    font-weight: 600;
    margin-bottom: 16px;
  }
  
  .component-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
}
```

#### Method 3: Import in Main SCSS
```scss
// src/assets/scss/style.scss
@import 'components/my-component';
```

### 5. Implementing Authentication Flow

#### Protected Route Usage
```typescript
// src/pages/dashboard/new-dashboard-page.tsx
import React from 'react';
import { ProtectedRoute } from '../../components/ProtectedRoute';

export default function NewDashboardPage() {
  return (
    <div>
      <h1>Protected Dashboard Page</h1>
      {/* Dashboard content */}
    </div>
  );
}

// Add to App.tsx routes
<Route 
  path='/dashboard-new-page' 
  element={
    <ProtectedRoute>
      <NewDashboardPage />
    </ProtectedRoute>
  } 
/>
```

#### Using Auth Context
```typescript
// In any component
import { useAuth } from '../contexts/AuthContext';

export default function MyComponent() {
  const { user, login, logout, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in</p>
          <button onClick={() => login(email, password)}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}
```

## API Integration Workflow

### 1. Replace Mock Data with API

#### Create API Service
```typescript
// src/services/api.ts
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export class ApiService {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    
    return response.json();
  }
  
  // Listings
  async getListings(filters?: any) {
    return this.request('/listings', {
      method: 'POST',
      body: JSON.stringify(filters),
    });
  }
  
  async getListing(id: string) {
    return this.request(`/listings/${id}`);
  }
  
  // Categories
  async getCategories() {
    return this.request('/categories');
  }
  
  // Authentication
  async login(email: string, password: string) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }
}

export const apiService = new ApiService();
```

#### Use in Components
```typescript
// Replace mock data usage
import { apiService } from '../services/api';

export default function ListingsPage() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        const data = await apiService.getListings();
        setListings(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch listings');
      } finally {
        setLoading(false);
      }
    };
    
    fetchListings();
  }, []);
  
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  
  return (
    <div>
      {listings.map(listing => (
        <ListingCard key={listing.id} data={listing} />
      ))}
    </div>
  );
}
```

### 2. Error Handling Strategy

#### Error Boundary Component
```typescript
// src/components/ErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

#### Global Error Handler
```typescript
// src/hooks/useErrorHandler.ts
import { useState, useCallback } from 'react';

export const useErrorHandler = () => {
  const [error, setError] = useState<string | null>(null);
  
  const handleError = useCallback((error: unknown) => {
    const message = error instanceof Error ? error.message : 'An unexpected error occurred';
    setError(message);
    console.error('Error:', error);
  }, []);
  
  const clearError = useCallback(() => {
    setError(null);
  }, []);
  
  return { error, handleError, clearError };
};
```

## Testing Workflow

### 1. Component Testing Setup
```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom
```

### 2. Test Structure
```typescript
// src/components/__tests__/ListingCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ListingCard from '../ListingCard';
import { listData } from '../../data/data';

const mockListing = listData[0];

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('ListingCard', () => {
  test('renders listing information', () => {
    renderWithRouter(<ListingCard data={mockListing} />);
    
    expect(screen.getByText(mockListing.title)).toBeInTheDocument();
    expect(screen.getByText(mockListing.location)).toBeInTheDocument();
    expect(screen.getByText(mockListing.review)).toBeInTheDocument();
  });
  
  test('handles click events', () => {
    const mockOnClick = jest.fn();
    renderWithRouter(
      <ListingCard data={mockListing} onClick={mockOnClick} />
    );
    
    fireEvent.click(screen.getByRole('button'));
    expect(mockOnClick).toHaveBeenCalledWith(mockListing);
  });
  
  test('displays featured badge for featured listings', () => {
    const featuredListing = { ...mockListing, featured: true };
    renderWithRouter(<ListingCard data={featuredListing} />);
    
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });
});
```

### 3. Integration Testing
```typescript
// src/__tests__/auth-flow.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Authentication Flow', () => {
  test('login and redirect to dashboard', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Navigate to login
    fireEvent.click(screen.getByText('Login'));
    
    // Fill login form
    await user.type(screen.getByLabelText('Email'), 'test@example.com');
    await user.type(screen.getByLabelText('Password'), 'password123');
    
    // Submit form
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));
    
    // Wait for redirect
    await waitFor(() => {
      expect(screen.getByText('Dashboard')).toBeInTheDocument();
    });
  });
});
```

## Code Quality Workflow

### 1. Pre-commit Checks
```bash
# Run before committing
npm run lint
npm run build
npm test
```

### 2. Code Formatting
```bash
# Install Prettier (optional)
npm install --save-dev prettier

# Create .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}

# Format code
npx prettier --write "src/**/*.{ts,tsx,scss}"
```

### 3. ESLint Configuration
```javascript
// eslint.config.js - already configured
// Custom rules can be added:
export default {
  // ... existing config
  rules: {
    // Custom rules
    'react/prop-types': 'off', // Using TypeScript instead
    '@typescript-eslint/no-unused-vars': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  }
};
```

## Performance Optimization Workflow

### 1. Bundle Analysis
```bash
# Install bundle analyzer
npm install --save-dev webpack-bundle-analyzer

# Analyze bundle
npm run build
npx webpack-bundle-analyzer dist/assets/*.js
```

### 2. Code Splitting
```typescript
// Lazy load components
import { lazy, Suspense } from 'react';

const DashboardUser = lazy(() => import('./pages/dashboard/dashboard-user'));
const GridLayout1 = lazy(() => import('./pages/listings/grid-layout/grid-layout-01'));

// Use with Suspense
<Route 
  path="/dashboard-user" 
  element={
    <Suspense fallback={<div>Loading...</div>}>
      <ProtectedRoute>
        <DashboardUser />
      </ProtectedRoute>
    </Suspense>
  } 
/>
```

### 3. Image Optimization
```typescript
// src/components/OptimizedImage.tsx
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className, 
  loading = 'lazy' 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className={`image-container ${className}`}>
      {!isLoaded && (
        <div className="image-placeholder">
          <div className="spinner-border" role="status" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        style={{ display: isLoaded ? 'block' : 'none' }}
      />
    </div>
  );
}
```

## Deployment Workflow

### 1. Production Build
```bash
# Build for production
npm run build

# Test production build locally
npm run preview

# Check build size
ls -la dist/
```

### 2. Environment Configuration
```bash
# Production environment variables
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_GOOGLE_MAPS_API_KEY=your_production_key
VITE_GOOGLE_CLIENT_ID=your_production_client_id
```

### 3. Deployment Checklist
- [ ] Update environment variables
- [ ] Test all routes and functionality
- [ ] Verify API endpoints
- [ ] Check Google Maps integration
- [ ] Test authentication flows
- [ ] Validate responsive design
- [ ] Run performance audits
- [ ] Set up error monitoring

This workflow guide provides a structured approach to developing with the ListingHub template while maintaining code quality and performance standards.