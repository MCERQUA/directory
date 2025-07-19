# Data Layer

## Overview

ListingHub implements a comprehensive data layer with mock data structures, TypeScript interfaces, and centralized data management. The data layer is designed to be easily replaceable with real API calls while providing a robust development environment.

## Data Architecture

### Primary Data File
- **Location**: `src/data/data.ts`
- **Size**: 1,067 lines of structured mock data
- **Purpose**: Provides realistic data for development and demonstration

### Data Categories

1. **Category Data** - Business categories and classifications
2. **Listing Data** - Business listings with detailed information
3. **User Data** - User profiles and authentication data
4. **Review Data** - Customer reviews and ratings
5. **Blog Data** - Blog posts and content
6. **Location Data** - City and geographic information
7. **Event Data** - Events and activities
8. **Dashboard Data** - Admin and user dashboard information

## Data Structures

### 1. Category Data
```typescript
export const categoryData = [
  {
    image: string,           // Category image path
    icon: IconType,          // React icon component
    title: string,           // Category name
    list: string            // Number of listings (e.g., "103 Lists")
  }
];

// Example categories:
// - Showroom (103 Lists)
// - Fashion & Beauty (110 Lists)
// - Real Estate (35 Lists)
// - Health & Fitness (120 Lists)
// - Business Shop (69 Lists)
// - Coffee Shop (78 Lists)
// - Restaurants (69 Lists)
// - Hospital & Med (75 Lists)
// - Wedding & Events (16 Lists)
```

### 2. Listing Data (Primary Entity)
```typescript
export const listData = [
  {
    id: number,                    // Unique identifier
    image: string,                 // Main listing image
    user: string,                  // Owner profile image
    status: 'open' | 'closed',     // Business status
    featured: boolean,             // Featured listing flag
    title: string,                 // Business name
    desc: string,                  // Brief description
    call: string,                  // Phone number
    location: string,              // Location string
    tag: string,                   // Category tag
    tagIcon: IconType,             // Category icon
    tagIconStyle: string,          // CSS classes for icon
    review: string,                // Review count (e.g., "46 Reviews")
    rating: 'excellent' | 'good' | 'medium', // Rating category
    ratingRate: string,            // Numeric rating (e.g., "4.5")
    instantBooking: boolean        // Booking availability
  }
];

// Example listing:
{
  id: 1,
  image: list1,
  user: team1,
  status: 'open',
  featured: true,
  title: 'The Big Bumbble Gym',
  desc: 'Cicero famously orated against his political.',
  call: '+42 515 635 4758',
  location: 'Tokyo Japan',
  tag: 'Fitness',
  tagIcon: FaDumbbell,
  tagIconStyle: 'catIcon me-2 cats-1',
  review: '46 Reviews',
  rating: 'good',
  ratingRate: '4.5',
  instantBooking: false
}
```

### 3. User Review Data
```typescript
export const reviewData = [
  {
    rate: IconType[],              // Array of star icons
    title: string,                 // Review title
    desc: string,                  // Review content
    image: string,                 // User profile image
    name: string,                  // User name
    position: string               // User job title/position
  }
];

// Example review:
{
  rate: [FaStar, FaStar, FaStar, FaStar, FaStar],
  title: '"One of the Superb Platform"',
  desc: `Absolutely love Advertize! whenever I'm in need of finding a job, Advertize is my #1 go to! wouldn't look anywhere else.`,
  image: team1,
  name: 'Aman Diwakar',
  position: 'General Manager'
}
```

### 4. Blog Data
```typescript
export const blogData = [
  {
    id: number,                    // Unique identifier
    image: string,                 // Blog post image
    title: string,                 // Post title
    desc: string,                  // Post excerpt
    date: string,                  // Publication date
    views: string                  // View count
  }
];

// Example blog post:
{
  id: 1,
  image: blog1,
  title: '10 Must-Have Bootstrap Templates for Modern Web Design',
  desc: "Think of a news blog that's filled with content political against opponent Lucius Sergius Catilina. Hourly on the day of going live.",
  date: '13th Sept 2025',
  views: '12k Views'
}
```

### 5. Location/City Data
```typescript
export const cityData = [
  {
    image: string,                 // City image
    gridClass: string,             // Bootstrap grid classes
    listing: string,               // Number of listings
    name: string,                  // City name
    tag: string[]                  // Related cities/tags
  }
];

// Example city:
{
  image: location1,
  gridClass: 'col-xl-6 col-lg-6 col-md-4 col-sm-6',
  listing: '16 Listing',
  name: 'Jersey City',
  tag: ['San Diego', 'New York', 'Dallas', 'Denver']
}
```

### 6. Event Data
```typescript
export const eventData = [
  {
    image: string,                 // Event image
    date: string,                  // Event date
    month: string,                 // Event month
    tag: string,                   // Event category
    tagIcon: IconType,             // Category icon
    iconStyle: string,             // Icon styling
    title: string,                 // Event title
    time: string                   // Event time
  }
];
```

### 7. Dashboard Data

#### Admin Counter Data
```typescript
export const adminCounter = [
  {
    icon: IconType,                // Metric icon
    iconStyle: string,             // Icon color class
    number: number,                // Metric value
    symbol: string,                // Unit symbol (K, %, etc.)
    title: string,                 // Metric name
    bg: string                     // Background color class
  }
];

// Example metrics:
// - 23 Active Listings
// - 32K Total Views
// - 4K Total Saved
// - 88 Total Reviews
```

#### Booking Data
```typescript
export const bookingData = [
  {
    image: string,                 // Business image
    title: string,                 // Business name
    tag: string,                   // Business category
    pending: boolean,              // Status flags
    unpaid: boolean,
    approved: boolean,
    cancelled: boolean,
    reject: boolean,
    approve: boolean,
    sendMsg: boolean,
    date: string,                  // Booking date/time
    info: string,                  // Booking details
    name: string,                  // Customer name
    contact: string,               // Contact number
    price: string                  // Price amount
  }
];
```

#### Chat/Message Data
```typescript
export const chatData = [
  {
    image: string,                 // User avatar
    name: string,                  // User name
    time: string,                  // Message time
    msg: string,                   // Message preview
    pending: boolean,              // Unread status
    message: number                // Unread count
  }
];
```

## Asset Management

### Image Imports
The data layer includes comprehensive image management:

```typescript
// Listing images
import list1 from '../assets/img/list-1.jpg'
import list2 from '../assets/img/list-2.jpg'
// ... through list9

// Team/user images
import team1 from '../assets/img/team-1.jpg'
import team2 from '../assets/img/team-2.jpg'
// ... through team9

// Blog images
import blog1 from '../assets/img/blog-2.jpg'
import blog2 from '../assets/img/blog-3.jpg'
// ... through blog6

// Category images
import cats1 from '../assets/img/cats/catt-1.jpg'
import cats2 from '../assets/img/cats/catt-2.jpg'
// ... through cats10

// Location images
import location1 from '../assets/img/city/location-1.jpg'
import location2 from '../assets/img/city/location-2.jpg'
// ... through location6
```

### Icon Integration
```typescript
// React Icons imports
import { 
  BsBackpack, BsBarChart, BsBasket2, BsCameraReels, 
  BsCodeSlash, BsCoin, BsCreditCard2Back, BsCupHot,
  // ... many more Bootstrap icons
} from "react-icons/bs";

import { FaDumbbell, FaStar, FaStarHalfStroke } from "react-icons/fa6";
```

## Data Usage Patterns

### 1. Component Data Binding
```typescript
// In React components
import { listData, categoryData } from '../data/data';

export default function FeaturedListings() {
  return (
    <div>
      {listData.filter(item => item.featured).map(listing => (
        <ListingCard key={listing.id} data={listing} />
      ))}
    </div>
  );
}
```

### 2. Filtering and Search
```typescript
// Filter data based on criteria
const filteredListings = listData.filter(listing => {
  return (
    listing.status === 'open' &&
    listing.tag.toLowerCase().includes(searchTerm.toLowerCase()) &&
    parseFloat(listing.ratingRate) >= minRating
  );
});
```

### 3. Dynamic Routing Data
```typescript
// Get specific listing by ID
import { useParams } from 'react-router-dom';
import { listData } from '../data/data';

export default function SingleListing() {
  const { id } = useParams();
  const listing = listData.find(item => item.id === parseInt(id || '1'));
  
  return listing ? <ListingDetails data={listing} /> : <NotFound />;
}
```

## Type Definitions

### Custom Types
```typescript
// src/types/global.d.ts or component files
interface ListingData {
  id: number;
  image: string;
  user: string;
  status: 'open' | 'closed';
  featured: boolean;
  title: string;
  desc: string;
  call: string;
  location: string;
  tag: string;
  tagIcon: IconType;
  tagIconStyle: string;
  review: string;
  rating: 'excellent' | 'good' | 'medium';
  ratingRate: string;
  instantBooking: boolean;
}

interface CategoryData {
  image: string;
  icon: IconType;
  title: string;
  list: string;
}

interface ReviewData {
  rate: IconType[];
  title: string;
  desc: string;
  image: string;
  name: string;
  position: string;
}
```

## Data Migration Strategy

### Replacing Mock Data with API
```typescript
// Current mock data usage
import { listData } from '../data/data';

// Replace with API calls
const fetchListings = async () => {
  try {
    const response = await fetch('/api/listings');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch listings:', error);
    return [];
  }
};

// Usage in component
const [listings, setListings] = useState([]);

useEffect(() => {
  fetchListings().then(setListings);
}, []);
```

### API Integration Points
```typescript
// Authentication API
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const login = async (email, password) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    
    if (!response.ok) throw new Error('Login failed');
    
    const userData = await response.json();
    setUser(userData);
  };
  
  // ... other auth methods
};
```

## Data Relationships

### Linked Data Structures
```typescript
// Listings reference user/team data
{
  id: 1,
  title: 'The Big Bumbble Gym',
  user: team1,  // References team image
  // ... other properties
}

// Categories link to icons and images
{
  image: cats1,           // Category image
  icon: BsBackpack,       // React icon component
  title: 'Showroom',
  list: '103 Lists'
}

// Reviews include user data
{
  rate: [FaStar, FaStar, FaStar, FaStar, FaStar],
  image: team1,           // User profile image
  name: 'Aman Diwakar',
  position: 'General Manager'
}
```

## Best Practices

### 1. Data Consistency
- Maintain consistent property naming across data structures
- Use TypeScript interfaces to enforce data shape
- Keep image references organized and predictable

### 2. Performance
- Consider lazy loading for large image sets
- Implement data pagination for large datasets
- Use memoization for expensive data transformations

### 3. Maintainability
- Keep data structures flat when possible
- Use enums for status values (`'open' | 'closed'`)
- Document data relationships and dependencies

### 4. Testing
- Create data factories for testing
- Mock API responses with realistic data structures
- Test edge cases with incomplete or invalid data

This data layer provides a robust foundation for development while being easily adaptable for production API integration.