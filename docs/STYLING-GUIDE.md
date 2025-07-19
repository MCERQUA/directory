# Styling Guide

## Overview

ListingHub implements a comprehensive styling system built on Bootstrap 5 with extensive customization through SCSS and CSS custom properties. The styling architecture provides a flexible, maintainable design system that supports theming, responsive design, and component-specific styling.

## Architecture

### File Structure
```
src/assets/scss/
├── style.scss        # Main SCSS file (79,474 tokens)
├── _custom.scss      # Custom variables and overrides
└── [imported in main.tsx]
```

### Style Loading Order
```typescript
// main.tsx
import './assets/scss/style.scss'           // Custom styles
import '../node_modules/animate.css/animate.css'  // Animations
```

## CSS Custom Properties System

### Theme Variables (Light Mode)
Located in `src/assets/scss/_custom.scss`:

```scss
:root,
[data-bs-theme=light] {
  // Core Colors
  --bs-primary: #c71f37;           // Primary red
  --bs-primary-2: #d02b38;        // Primary variant
  --bs-primary-rgb: 226, 55, 68;  // RGB values
  
  // Background Colors
  --bs-body-bg: #ffffff;           // Main background
  --bs-card-bg: #ffffff;           // Card background
  --bs-light: #f7f7f7;           // Light background
  --bs-dashboard-bg: #2e3338;     // Dashboard dark background
  
  // Text Colors
  --bs-body-color: #2b2b2b;       // Main text
  --headingColor: #2b2b2b;        // Headings
  --paragraphColor: #2b2b2b;      // Paragraphs
  --bs-muted: #444c55;            // Muted text
  
  // Border and UI
  --bs-border-color: #efefef;     // Standard borders
  --bs-light-gray: #ffffffa8;     // Light gray with opacity
  
  // Typography
  --body-font-family: 'Jost', sans-serif;
}
```

### Typography System
```scss
// Font Import
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600;700;800&display=swap');

// Font weights available: 200, 300, 400, 500, 600, 700, 800
// Base font size: 15px
// Line height: Optimized for readability
```

## Component Styling Patterns

### 1. Button System
```scss
// Standard button heights and padding
.btn {
  height: 56px;
  padding: 10px 20px;
  transition: all 0.4s ease;
  
  // Hover effects with shimmer animation
  &:hover::after {
    animation: shimmer 1.3s infinite;
    transform: translateX(100%);
  }
}

// Button variants with consistent styling
.btn-primary {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
  
  &:hover {
    background-color: var(--bs-primary-2);
    transform: translateY(-2px);
  }
}
```

### 2. Card Components
```scss
.card {
  background-color: var(--bs-card-bg);
  border: 1px solid var(--bs-border-color);
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  }
}

// Listing card specific styling
.listing-card {
  overflow: hidden;
  
  .card-img-top {
    transition: transform 0.3s ease;
  }
  
  &:hover .card-img-top {
    transform: scale(1.05);
  }
}
```

### 3. Navigation Components
```scss
.navbar {
  background-color: var(--bs-body-bg);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--bs-border-color);
  
  .navbar-nav .nav-link {
    color: var(--bs-nav-color);
    font-weight: 500;
    padding: 12px 16px;
    transition: color 0.3s ease;
    
    &:hover,
    &.active {
      color: var(--bs-primary);
    }
  }
}

// Dashboard navigation
.dashboard-nav {
  background-color: var(--bs-dashboard-bg);
  
  .nav-link {
    color: rgba(255,255,255,0.8);
    
    &:hover,
    &.active {
      color: #ffffff;
      background-color: rgba(255,255,255,0.1);
    }
  }
}
```

## Responsive Design System

### Breakpoint System
```scss
// Bootstrap 5 breakpoints with custom additions
// xs: 0px
// sm: 576px
// md: 768px
// lg: 992px
// xl: 1200px
// xxl: 1400px

// Custom breakpoints used in the system
@media (max-width: 575px) { /* Mobile */ }
@media (max-width: 600px) { /* Small mobile */ }
@media (max-width: 767px) { /* Mobile landscape */ }
@media (max-width: 991px) { /* Tablet */ }
@media (max-width: 992px) { /* Small laptop */ }
@media (min-width: 993px) { /* Desktop */ }
@media (min-width: 1024px) { /* Large desktop */ }
@media (min-width: 1200px) { /* Extra large */ }
@media (min-width: 1400px) { /* XXL */ }
@media (min-width: 1500px) { /* Ultra wide */ }
```

### Responsive Components
```scss
// Listing grid responsive behavior
.listing-grid {
  display: grid;
  gap: 30px;
  
  // Mobile first approach
  grid-template-columns: 1fr;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

// Dashboard responsive layout
.dashboard-layout {
  display: flex;
  
  .sidebar {
    width: 280px;
    
    @media (max-width: 991px) {
      width: 100%;
      position: fixed;
      transform: translateX(-100%);
      transition: transform 0.3s ease;
      
      &.show {
        transform: translateX(0);
      }
    }
  }
  
  .main-content {
    flex: 1;
    min-width: 0; // Prevent flex item overflow
    
    @media (max-width: 991px) {
      width: 100%;
    }
  }
}
```

## Utility Classes

### Typography Utilities
```scss
// Text size utilities
.text-xs { font-size: 12px; }
.text-sm { font-size: 14px; }
.text-md { font-size: 16px; }
.text-lg { font-size: 18px; }
.text-xl { font-size: 20px; }

// Text color utilities
.text-muted-2 { color: var(--bs-muted-2); }
.text-seagreen { color: #20b2aa; }
.text-purple { color: #6f42c1; }

// Heading utilities
.heading-color { color: var(--headingColor); }
```

### Background Utilities
```scss
// Background opacity utilities
.bg-opacity-20 { background-color: rgba(var(--bs-primary-rgb), 0.2); }
.bg-opacity-30 { background-color: rgba(var(--bs-primary-rgb), 0.3); }
.bg-opacity-40 { background-color: rgba(var(--bs-primary-rgb), 0.4); }
.bg-opacity-60 { background-color: rgba(var(--bs-primary-rgb), 0.6); }
.bg-opacity-70 { background-color: rgba(var(--bs-primary-rgb), 0.7); }
.bg-opacity-80 { background-color: rgba(var(--bs-primary-rgb), 0.8); }
.bg-opacity-90 { background-color: rgba(var(--bs-primary-rgb), 0.9); }
.bg-opacity-97 { background-color: rgba(var(--bs-primary-rgb), 0.97); }

// Status background colors
.bg-light-success { background-color: rgba(25, 135, 84, 0.1); }
.bg-light-danger { background-color: rgba(220, 53, 69, 0.1); }
.bg-light-warning { background-color: rgba(255, 193, 7, 0.1); }
.bg-light-info { background-color: rgba(13, 202, 240, 0.1); }
```

## Animation System

### Keyframe Animations
```scss
// Preloader animations
@keyframes preloader {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

// Bounce animation
@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -30px, 0);
  }
  70% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0,-4px,0);
  }
}

// Shimmer effect for buttons
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

// Francisco slide animation
@keyframes francisco {
  0% { transform: translateX(-100%); opacity: 0; }
  50% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(100%); opacity: 0; }
}
```

### Transition System
```scss
// Standard transitions
.transition-all { transition: all 0.3s ease; }
.transition-fast { transition: all 0.15s ease; }
.transition-slow { transition: all 0.5s ease; }

// Transform utilities
.transform-hover:hover {
  transform: translateY(-5px);
}

.scale-hover:hover {
  transform: scale(1.05);
}
```

## Component-Specific Styling

### 1. Listing Components
```scss
.listing-item {
  .listing-top {
    position: relative;
    overflow: hidden;
    
    .listing-image {
      transition: transform 0.3s ease;
    }
    
    .status-badge {
      position: absolute;
      top: 15px;
      left: 15px;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      
      &.open {
        background-color: rgba(25, 135, 84, 0.9);
        color: white;
      }
      
      &.closed {
        background-color: rgba(220, 53, 69, 0.9);
        color: white;
      }
    }
  }
  
  .listing-middle {
    padding: 20px;
    
    .listing-title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 8px;
      color: var(--headingColor);
    }
    
    .listing-location {
      color: var(--bs-muted);
      font-size: 14px;
      margin-bottom: 12px;
    }
  }
  
  .listing-footer {
    padding: 0 20px 20px;
    border-top: 1px solid var(--bs-border-color);
    padding-top: 15px;
    
    .rating {
      display: flex;
      align-items: center;
      gap: 5px;
      
      .stars {
        color: #ffc107;
      }
      
      .rating-text {
        color: var(--bs-muted);
        font-size: 14px;
      }
    }
  }
}
```

### 2. Dashboard Components
```scss
.dashboard-sidebar {
  background-color: var(--bs-dashboard-bg);
  min-height: 100vh;
  padding: 30px 0;
  
  .user-profile {
    text-align: center;
    padding: 0 30px;
    margin-bottom: 40px;
    
    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-bottom: 15px;
    }
    
    .user-name {
      color: #ffffff;
      font-size: 18px;
      font-weight: 600;
    }
  }
  
  .sidebar-menu {
    .menu-item {
      display: flex;
      align-items: center;
      padding: 12px 30px;
      color: rgba(255,255,255,0.8);
      text-decoration: none;
      transition: all 0.3s ease;
      
      .icon {
        margin-right: 12px;
        font-size: 18px;
      }
      
      &:hover,
      &.active {
        color: #ffffff;
        background-color: rgba(255,255,255,0.1);
      }
    }
  }
}
```

### 3. Form Styling
```scss
.form-group {
  margin-bottom: 20px;
  
  label {
    font-weight: 500;
    margin-bottom: 8px;
    color: var(--headingColor);
  }
  
  .form-control {
    height: 50px;
    border: 1px solid var(--bs-border-color);
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 15px;
    transition: border-color 0.3s ease;
    
    &:focus {
      border-color: var(--bs-primary);
      box-shadow: 0 0 0 0.2rem rgba(var(--bs-primary-rgb), 0.25);
    }
  }
  
  .form-select {
    height: 50px;
    border: 1px solid var(--bs-border-color);
    border-radius: 8px;
    padding: 12px 16px;
  }
  
  .form-check {
    .form-check-input {
      &:checked {
        background-color: var(--bs-primary);
        border-color: var(--bs-primary);
      }
    }
  }
}
```

## Dark Mode Support

### Dashboard Dark Theme
```scss
[data-bs-theme="dark"] {
  .dashboard-content {
    background-color: #1a1d21;
    color: #ffffff;
  }
  
  .card {
    background-color: #2d3236;
    border-color: #404448;
  }
  
  .table {
    --bs-table-bg: #2d3236;
    --bs-table-color: #ffffff;
  }
}
```

## Performance Optimizations

### CSS Loading Strategy
1. **Critical CSS**: Inline critical styles for above-the-fold content
2. **Lazy Loading**: Non-critical styles loaded asynchronously
3. **Minification**: SCSS compiled and minified for production
4. **Caching**: Long cache headers for static CSS files

### Asset Optimization
```scss
// Optimized background images
.hero-section {
  background-image: url('../img/banner-1.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; // Parallax effect
  
  @media (max-width: 768px) {
    background-attachment: scroll; // Better performance on mobile
  }
}
```

## Customization Guide

### 1. Color Scheme Customization
```scss
// Modify primary colors in _custom.scss
:root {
  --bs-primary: #your-primary-color;
  --bs-primary-2: #your-primary-variant;
  --bs-primary-rgb: red, green, blue; // RGB values
}
```

### 2. Typography Customization
```scss
// Change font family
:root {
  --body-font-family: 'Your-Font', sans-serif;
}

// Import custom fonts
@import url('https://fonts.googleapis.com/css2?family=Your-Font:wght@300;400;500;600;700&display=swap');
```

### 3. Component Customization
```scss
// Override component styles
.listing-card {
  // Your custom styles
  border-radius: 16px;
  overflow: hidden;
  
  &:hover {
    transform: scale(1.02);
  }
}
```

This styling system provides a comprehensive, maintainable foundation for building professional directory and listing websites with modern design patterns and excellent user experience.