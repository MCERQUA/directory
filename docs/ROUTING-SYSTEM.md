# Routing System

## Overview

ListingHub uses React Router DOM v7 for client-side routing, implementing a comprehensive routing system with 60+ routes covering all page variants, authentication, and dashboard functionality.

## Route Configuration

The main routing configuration is located in `src/App.tsx` within the `<Routes>` component.

### Route Categories

#### 1. Home Page Routes
```typescript
// 12 different home page variants
<Route path='/' element={<IndexOne/>}/>
<Route path='/home-2' element={<IndexTwo/>}/>
<Route path='/home-3' element={<IndexThree/>}/>
<Route path='/home-4' element={<IndexFour/>}/>
<Route path='/home-5' element={<IndexFive/>}/>
<Route path='/home-6' element={<IndexSix/>}/>
<Route path='/home-7' element={<IndexSeven/>}/>
<Route path='/home-8' element={<IndexEight/>}/>
<Route path='/home-9' element={<IndexNine/>}/>
<Route path='/home-10' element={<IndexTen/>}/>
<Route path='/home-splash' element={<IndexEleven/>}/>
<Route path='/home-map' element={<IndexMap/>}/>
```

#### 2. Grid Layout Routes
```typescript
// 6 grid layout variants
<Route path='/grid-layout-01' element={<GridLayout1/>}/>
<Route path='/grid-layout-02' element={<GridLayout2/>}/>
<Route path='/grid-layout-03' element={<GridLayout3/>}/>
<Route path='/grid-layout-04' element={<GridLayout4/>}/>
<Route path='/grid-layout-05' element={<GridLayout5/>}/>
<Route path='/grid-layout-06' element={<GridLayout6/>}/>
```

#### 3. List Layout Routes
```typescript
// 5 list layout variants
<Route path='/list-layout-01' element={<ListLayout1/>}/>
<Route path='/list-layout-02' element={<ListLayout2/>}/>
<Route path='/list-layout-03' element={<ListLayout3/>}/>
<Route path='/list-layout-04' element={<ListLayout4/>}/>
<Route path='/list-layout-05' element={<ListLayout5/>}/>
```

#### 4. Half-Map Layout Routes
```typescript
// 5 half-map layout variants
<Route path='/half-map-01' element={<HalfMap1/>}/>
<Route path='/half-map-02' element={<HalfMap2/>}/>
<Route path='/half-map-03' element={<HalfMap3/>}/>
<Route path='/half-map-04' element={<HalfMap4/>}/>
<Route path='/half-map-05' element={<HalfMap5/>}/>
```

#### 5. Single Listing Routes (with Dynamic Parameters)
```typescript
// 5 single listing variants with optional ID parameters
<Route path='/single-listing-01' element={<SingleListing1/>}/>
<Route path='/single-listing-01/:id' element={<SingleListing1/>}/>
<Route path='/single-listing-02' element={<SingleListing2/>}/>
<Route path='/single-listing-02/:id' element={<SingleListing2/>}/>
<Route path='/single-listing-03' element={<SingleListing3/>}/>
<Route path='/single-listing-03/:id' element={<SingleListing3/>}/>
<Route path='/single-listing-04' element={<SingleListing4/>}/>
<Route path='/single-listing-04/:id' element={<SingleListing4/>}/>
<Route path='/single-listing-05' element={<SingleListing5/>}/>
<Route path='/single-listing-05/:id' element={<SingleListing5/>}/>
```

## Protected Routes

### Dashboard Routes (Authentication Required)
```typescript
// All dashboard routes are wrapped with ProtectedRoute
<Route path='/dashboard-user' element={<ProtectedRoute><DashboardUser/></ProtectedRoute>}/>
<Route path='/dashboard-my-profile' element={<ProtectedRoute><DashboardMyProfile/></ProtectedRoute>}/>
<Route path='/dashboard-my-bookings' element={<ProtectedRoute><DashboardMyBookings/></ProtectedRoute>}/>
<Route path='/dashboard-my-listings' element={<ProtectedRoute><DashboardMyListings/></ProtectedRoute>}/>
<Route path='/dashboard-bookmarks' element={<ProtectedRoute><DashboardBookmarks/></ProtectedRoute>}/>
<Route path='/dashboard-messages' element={<ProtectedRoute><DashboardMessages/></ProtectedRoute>}/>
<Route path='/dashboard-reviews' element={<ProtectedRoute><DashboardReviews/></ProtectedRoute>}/>
<Route path='/dashboard-wallet' element={<ProtectedRoute><DashboardWallet/></ProtectedRoute>}/>
<Route path='/dashboard-add-listing' element={<ProtectedRoute><DashboardAddListing/></ProtectedRoute>}/>
```

### ProtectedRoute Component
```typescript
// src/components/ProtectedRoute.tsx
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
```

## Public Routes (Redirect if Authenticated)

### Authentication Routes
```typescript
// Auth routes redirect to dashboard if user is already logged in
<Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/>
<Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
<Route path='/forgot-password' element={<PublicRoute><ForgotPassword/></PublicRoute>}/>
<Route path='/two-factor-auth' element={<PublicRoute><TwoFactorAuth/></PublicRoute>}/>
```

### PublicRoute Component
```typescript
// src/components/ProtectedRoute.tsx
export const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (user) {
    return <Navigate to="/dashboard-user" replace />;
  }

  return <>{children}</>;
};
```

## Static Page Routes

### Inner Pages
```typescript
// Static pages and utility pages
<Route path='/author-profile' element={<AuthorProfile/>}/>
<Route path='/booking-page' element={<BookingPage/>}/>
<Route path='/about-us' element={<AboutUs/>}/>
<Route path='/blog' element={<Blog/>}/>
<Route path='/blog-detail' element={<BlogDetail/>}/>
<Route path='/blog-detail/:id' element={<BlogDetail/>}/>
<Route path='/contact-us' element={<ContactUs/>}/>
<Route path='/pricing' element={<Pricing/>}/>
<Route path='/help-center' element={<HelpCenter/>}/>
<Route path='/single-helps' element={<SingleHelps/>}/>
<Route path='/comingsoon' element={<Comingsoon/>}/>
<Route path='/faq' element={<Faq/>}/>
<Route path='/error' element={<Error/>}/>
<Route path='/elements' element={<Elements/>}/>
<Route path='/checkout-page' element={<CheckoutPage/>}/>
<Route path='/success-payment' element={<SuccessPayment/>}/>
<Route path='/invoice-page' element={<InvoicePage/>}/>
<Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
<Route path='/viewcart' element={<Viewcart/>}/>
```

## Dynamic Routing

### URL Parameters
Single listing pages support dynamic ID parameters:

```typescript
// Component usage example
import { useParams } from 'react-router-dom';

export default function SingleListing1() {
  const { id } = useParams();
  
  // Use ID to fetch specific listing data
  const listing = listData.find(item => item.id === parseInt(id || '1'));
  
  return (
    <div>
      {listing ? (
        <ListingDetails data={listing} />
      ) : (
        <NotFound />
      )}
    </div>
  );
}
```

### Blog Detail Routes
```typescript
// Blog posts also support dynamic parameters
<Route path='/blog-detail/:id' element={<BlogDetail/>}/>

// Usage in component
export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find(post => post.id === parseInt(id || '1'));
  
  return <BlogContent blog={blog} />;
}
```

## Navigation Management

### Active Route Detection
Components use `useLocation` to detect and highlight active routes:

```typescript
import { useLocation } from 'react-router-dom';

export default function NavbarLight() {
  const location = useLocation();
  
  return (
    <nav>
      <Link 
        to="/" 
        className={location.pathname === '/' ? 'active' : ''}
      >
        Home
      </Link>
      <Link 
        to="/about-us" 
        className={location.pathname === '/about-us' ? 'active' : ''}
      >
        About
      </Link>
    </nav>
  );
}
```

### Programmatic Navigation
```typescript
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const handleLogin = async (credentials) => {
    try {
      await login(credentials);
      navigate('/dashboard-user'); // Redirect after login
    } catch (error) {
      setError(error.message);
    }
  };
  
  return <LoginFormComponent onSubmit={handleLogin} />;
}
```

## Route Guards and Middleware

### Authentication Context Integration
```typescript
// App.tsx - Router setup with AuthProvider
function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* All routes */}
      </Routes>
    </AuthProvider>
  );
}
```

### Loading States
```typescript
// ProtectedRoute handles loading states
export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Route logic...
};
```

## Route Organization by Feature

### Home Page Variants
- **Standard Layouts**: `/home-2` through `/home-10`
- **Special Layouts**: `/home-splash` (splash page), `/home-map` (map-focused)
- **Default**: `/` (index-one layout)

### Listing Display Variants
- **Grid Layouts**: Focus on visual presentation in grid format
- **List Layouts**: Detailed information in list format
- **Half-Map Layouts**: Split-screen with map integration

### Single Listing Variants
- **Layout 01**: Basic single listing layout
- **Layout 02**: Enhanced with additional features
- **Layout 03**: Gallery-focused layout
- **Layout 04**: Review-focused layout
- **Layout 05**: Map-integrated layout

### Dashboard Organization
- **User Management**: Profile, settings, personal information
- **Listing Management**: Add, edit, view listings
- **Business Tools**: Messages, reviews, bookings
- **Financial**: Wallet, payments, invoices

## SEO and Meta Management

### Page Titles and Meta Tags
```typescript
// Example component with meta management
import { useEffect } from 'react';

export default function AboutUs() {
  useEffect(() => {
    document.title = 'About Us - ListingHub';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about ListingHub and our mission...');
    }
  }, []);
  
  return <AboutContent />;
}
```

## Error Handling

### 404 Error Route
```typescript
// Add catch-all route for 404 errors
<Route path="*" element={<Error />} />
```

### Error Boundaries
```typescript
// Wrap route components with error boundaries
<Route 
  path="/dashboard-user" 
  element={
    <ErrorBoundary>
      <ProtectedRoute>
        <DashboardUser />
      </ProtectedRoute>
    </ErrorBoundary>
  } 
/>
```

## Best Practices

### 1. Route Naming
- Use kebab-case for URLs (`/grid-layout-01`)
- Keep routes descriptive and consistent
- Group related routes with common prefixes

### 2. Parameter Handling
- Always validate route parameters
- Provide fallback values for missing parameters
- Handle invalid parameter values gracefully

### 3. Authentication Flow
- Redirect unauthenticated users to login
- Preserve intended destination after login
- Clear user data on logout and redirect appropriately

### 4. Performance
- Implement code splitting with React.lazy()
- Preload critical routes
- Use route-based data fetching

### 5. Navigation UX
- Provide loading states during route transitions
- Maintain scroll position appropriately
- Handle browser back/forward navigation

This routing system provides a comprehensive navigation structure that supports multiple layout variants, authentication flows, and dynamic content while maintaining clean URLs and excellent user experience.