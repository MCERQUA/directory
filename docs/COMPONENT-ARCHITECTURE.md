# Component Architecture

## Overview

ListingHub follows a modular, feature-based component architecture built with React 19 and TypeScript. Components are organized by functionality and reusability, following modern React patterns and best practices.

## Directory Structure

```
src/components/
├── navbar/                 # Navigation components (9 variants)
├── list-detail/           # Single listing page components
├── admin/                 # Dashboard-specific components
├── ProtectedRoute.tsx     # Authentication wrapper
├── [feature-components]   # Categorized by functionality
└── [utility-components]   # Reusable utilities
```

## Component Categories

### 1. Navigation Components (`navbar/`)

Located in `src/components/navbar/`, provides 9 different navigation variants:

#### Available Variants
- `navbar-light.tsx` - Light theme navigation
- `navbar-dark.tsx` - Dark theme navigation
- `nav-dark-transparant.tsx` - Transparent dark navigation
- `nav-light-two.tsx` - Alternative light navigation
- `nav-light-three.tsx` - Third light navigation variant
- `navbar-full.tsx` - Full-width navigation
- `feature-nav.tsx` - Feature-focused navigation
- `them-navbar.tsx` - Theme-based navigation
- `admin-navbar.tsx` - Dashboard navigation

#### Common Features
```typescript
// Example: navbar-light.tsx
export default function NavbarLight() {
  const location = useLocation();
  const { user, logout } = useAuth();
  
  // Authentication modal states
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  
  // Mobile menu toggle
  const [mobileMenu, setMobileMenu] = useState(false);
  
  return (
    <nav className="navbar navbar-expand-lg">
      {/* Navigation content */}
    </nav>
  );
}
```

#### Navigation Patterns
- **Active Route Detection**: Uses `useLocation()` for highlighting current page
- **Authentication Integration**: Displays login/register or user menu based on auth state
- **Responsive Design**: Mobile-first with collapsible menus
- **Modal Integration**: Built-in login/register modals

### 2. Listing Components

#### Featured Listings (`featured-listing.tsx`)
```typescript
export default function FeaturedListing() {
  return (
    <div className="container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {listData.map((item) => (
          <SwiperSlide key={item.id}>
            <ListingCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
```

#### Popular Listings (`popular-listing-one.tsx`, `popular-listing-two.tsx`)
- Grid-based listing displays
- Filtering and sorting capabilities
- Pagination support
- Responsive card layouts

### 3. Filter Components

#### Filter One (`filter-one.tsx`)
```typescript
interface FilterProps {
  list: any; // Listing data array
}

export default function FilterOne({ list }: FilterProps) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [selectedRating, setSelectedRating] = useState('');
  
  // Filter logic and UI
  return (
    <div className="filter-section">
      {/* Category filter */}
      {/* Price range slider */}
      {/* Rating filter */}
      {/* Location filter */}
    </div>
  );
}
```

#### Filter Features
- **Category Selection**: Dropdown with category options
- **Price Range**: Multi-range slider integration
- **Rating Filter**: Star-based rating selection
- **Location Search**: Location-based filtering
- **Responsive Design**: Desktop dropdown + mobile offcanvas

### 4. Form Components

#### Search Forms (`form-one.tsx` through `form-four.tsx`)
```typescript
export default function FormOne() {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState(null);
  const [keyword, setKeyword] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Search logic
  };
  
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="form-group">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />
      </div>
      <div className="form-group">
        <Select
          value={category}
          onChange={setCategory}
          options={categoryOptions}
          placeholder="Category"
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}
```

### 5. Single Listing Components (`list-detail/`)

Modular components for single listing pages:

#### Core Components
- `about.tsx` / `about-two.tsx` - Listing descriptions
- `galleries.tsx` - Image galleries with lightbox
- `reviews.tsx` - Review system with ratings
- `maps.tsx` - Google Maps integration
- `pricings.tsx` / `pricing-two.tsx` - Pricing information
- `features.tsx` - Listing features and amenities
- `statistics.tsx` - Listing statistics and metrics

#### Example: Reviews Component
```typescript
export default function Reviews() {
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(0);
  
  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit review logic
  };
  
  return (
    <div className="reviews-section">
      <div className="review-form">
        <form onSubmit={handleSubmitReview}>
          <StarRating value={rating} onChange={setRating} />
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write your review..."
          />
          <button type="submit">Submit Review</button>
        </form>
      </div>
      
      <div className="reviews-list">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
```

### 6. Dashboard Components (`admin/`)

#### Admin Sidebar (`admin-sidebar.tsx`)
```typescript
export default function AdminSidebar() {
  const location = useLocation();
  const { user, logout } = useAuth();
  
  const menuItems = [
    { path: '/dashboard-user', label: 'Dashboard', icon: BsBarChart },
    { path: '/dashboard-my-profile', label: 'My Profile', icon: BsPerson },
    { path: '/dashboard-my-listings', label: 'My Listings', icon: BsList },
    // ... more menu items
  ];
  
  return (
    <div className="admin-sidebar">
      <div className="user-info">
        <img src={user?.picture} alt={user?.name} />
        <h5>{user?.name}</h5>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? 'active' : ''}
          >
            <item.icon />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
```

#### Other Admin Components
- `image-upload.tsx` - File upload with drag & drop
- `recent-activity.tsx` - Activity feed component

### 7. Utility Components

#### Protected Route (`ProtectedRoute.tsx`)
```typescript
interface ProtectedRouteProps {
  children: React.ReactNode;
}

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

export const PublicRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
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

#### Range Slider (`range-slider.tsx`)
```typescript
interface RangeSliderProps {
  min: number;
  max: number;
  value: { min: number; max: number };
  onChange: (value: { min: number; max: number }) => void;
}

export default function RangeSlider({ min, max, value, onChange }: RangeSliderProps) {
  const handleInput = (e: any) => {
    onChange({
      min: e.minValue,
      max: e.maxValue
    });
  };
  
  return (
    <MultiRangeSlider
      min={min}
      max={max}
      minValue={value.min}
      maxValue={value.max}
      onInput={handleInput}
      step={10}
      stepOnly={true}
    />
  );
}
```

## Component Patterns

### 1. TypeScript Integration
```typescript
// Props interface definition
interface ComponentProps {
  data: ListingData[];
  onFilter?: (filters: FilterOptions) => void;
  loading?: boolean;
}

// Component with typed props
const Component: React.FC<ComponentProps> = ({ data, onFilter, loading = false }) => {
  // Component logic
};
```

### 2. State Management
```typescript
// Local state for component-specific data
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');

// Context for global state
const { user, login, logout } = useAuth();

// Custom hooks for reusable logic
const useFilter = (initialData: any[]) => {
  const [filteredData, setFilteredData] = useState(initialData);
  const [filters, setFilters] = useState({});
  
  // Filter logic
  return { filteredData, filters, setFilters };
};
```

### 3. Event Handling
```typescript
// Form submission
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  
  try {
    await submitForm(formData);
    setSuccess(true);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

// Input changes
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));
};
```

### 4. Responsive Design
```typescript
// Window size detection
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => setWindowWidth(window.innerWidth);
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

// Conditional rendering based on screen size
return (
  <>
    {windowWidth > 768 ? (
      <DesktopComponent />
    ) : (
      <MobileComponent />
    )}
  </>
);
```

## Component Communication

### 1. Props Down, Events Up
```typescript
// Parent component
const ParentComponent = () => {
  const [data, setData] = useState([]);
  
  const handleDataChange = (newData: any[]) => {
    setData(newData);
  };
  
  return (
    <ChildComponent
      data={data}
      onDataChange={handleDataChange}
    />
  );
};

// Child component
interface ChildProps {
  data: any[];
  onDataChange: (data: any[]) => void;
}

const ChildComponent: React.FC<ChildProps> = ({ data, onDataChange }) => {
  // Component logic that calls onDataChange when needed
};
```

### 2. Context for Global State
```typescript
// Authentication context usage
const SomeComponent = () => {
  const { user, loading, login, logout } = useAuth();
  
  if (loading) return <LoadingSpinner />;
  
  return (
    <div>
      {user ? (
        <UserMenu user={user} onLogout={logout} />
      ) : (
        <LoginForm onLogin={login} />
      )}
    </div>
  );
};
```

## Best Practices

### 1. Component Design
- **Single Responsibility**: Each component has one clear purpose
- **Composition over Inheritance**: Build complex UIs by composing simple components
- **Props Interface**: Always define TypeScript interfaces for props
- **Default Props**: Use default parameters for optional props

### 2. Performance
- **React.memo**: Wrap components that receive stable props
- **useCallback**: Memoize event handlers passed to child components
- **useMemo**: Memoize expensive calculations
- **Lazy Loading**: Use React.lazy for code splitting

### 3. Accessibility
- **Semantic HTML**: Use proper HTML elements
- **ARIA Labels**: Add appropriate ARIA attributes
- **Keyboard Navigation**: Ensure keyboard accessibility
- **Screen Reader Support**: Test with screen readers

### 4. Testing
- **Component Testing**: Test component behavior and rendering
- **Props Testing**: Verify component responds to different props
- **Event Testing**: Test user interactions and event handling
- **Integration Testing**: Test component interactions

This component architecture provides a scalable, maintainable foundation for building directory and listing applications with React and TypeScript.