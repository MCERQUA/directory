# Project Overview

## ListingHub - React TypeScript Business Directory Template

ListingHub is a comprehensive business directory and listing template built with React 19, TypeScript, and Vite. It provides a complete solution for creating directory websites with multiple layout options, authentication, and dashboard functionality.

## Key Features

### 🏠 **Multiple Home Page Variants**
- 12 different home page layouts (`index-one` through `index-eleven`, plus `index-map`)
- Each variant demonstrates different design approaches and content organization
- Map-integrated homepage option
- Responsive design across all variants

### 📋 **Comprehensive Listing System**
- **Grid Layouts**: 6 different grid layout options
- **List Layouts**: 5 different list layout options  
- **Half-Map Layouts**: 5 integrated map and list combinations
- **Single Listing Pages**: 5 detailed listing page variants
- Dynamic routing with ID parameters for individual listings

### 🛡️ **Authentication System**
- Email/password authentication
- Google OAuth integration
- Facebook OAuth integration (configurable)
- Two-factor authentication support
- Protected routes with role-based access
- Context-based state management

### 📊 **User Dashboard**
- User profile management
- Listing management (add, edit, view)
- Booking management
- Message center
- Wallet/payments
- Review management
- Bookmark functionality

### 🗺️ **Google Maps Integration**
- Interactive maps using `@react-google-maps/api`
- Location-based search and filtering
- Map markers for listings
- Integrated half-map listing views

### 🎨 **Design System**
- Bootstrap 5 foundation with extensive customization
- Custom SCSS architecture
- CSS custom properties for theming
- Responsive design patterns
- Animation system with CSS keyframes
- Dark mode support for dashboard

## Technology Stack

### **Core Technologies**
- **React 19**: Latest React with modern features
- **TypeScript**: Full type safety and developer experience
- **Vite**: Fast build tool and development server
- **React Router DOM**: Client-side routing

### **UI & Styling**
- **Bootstrap 5**: Component framework and grid system
- **Custom SCSS**: Modular styling architecture
- **React Icons**: Icon library (Bootstrap Icons, Font Awesome)
- **Animate.css**: CSS animations
- **Swiper**: Touch sliders and carousels

### **Enhanced Components**
- **React Select**: Enhanced dropdown components
- **Multi-Range Slider**: Price and distance filtering
- **React Dropzone**: File upload functionality
- **React CountUp**: Animated number counters
- **React Scroll**: Smooth scrolling navigation
- **Yet Another React Lightbox**: Image galleries

### **Development Tools**
- **ESLint**: Code linting with React and TypeScript rules
- **Sass Embedded**: SCSS compilation
- **TypeScript ESLint**: TypeScript-specific linting
- **React Hooks Plugin**: React hooks linting

## Project Architecture

### **Page-Based Organization**
```
src/pages/
├── index/          # 12 home page variants
├── listings/       # Grid, list, half-map, single pages
├── dashboard/      # User dashboard pages
├── auth/           # Authentication pages
└── inner-pages/    # Static pages (about, blog, etc.)
```

### **Component Library**
```
src/components/
├── navbar/         # 9 navigation variants
├── list-detail/    # Single listing components
├── admin/          # Dashboard components
└── [feature-components] # Forms, filters, footers, etc.
```

### **Data Management**
- Centralized mock data in `/src/data/data.ts`
- TypeScript interfaces for type safety
- Context API for authentication state
- Local storage for session persistence

### **Styling Architecture**
- CSS custom properties for theming
- Component-specific SCSS organization
- Responsive design with Bootstrap breakpoints
- Animation system for interactive elements

## Target Use Cases

### **Business Directories**
- Local business listings
- Service provider directories
- Restaurant and venue guides
- Professional service directories

### **Marketplace Platforms**
- Product listings
- Service marketplaces
- Rental platforms
- Event directories

### **Real Estate Platforms**
- Property listings
- Rental directories
- Commercial real estate
- Property management

### **Travel & Tourism**
- Hotel and accommodation listings
- Tourist attraction guides
- Restaurant directories
- Local business guides

## Development Environment

### **Requirements**
- Node.js (v18 or higher recommended)
- npm or yarn package manager
- Modern web browser for development
- Google Maps API key (for map features)

### **Optional Services**
- Google OAuth client ID
- Facebook App ID (for social login)
- Backend API for production data

## Scalability Features

### **Modular Architecture**
- Component-based design for easy customization
- Page variants for different business needs
- Configurable authentication providers
- Extensible data layer

### **Performance Optimizations**
- Vite for fast development and building
- Code splitting ready
- Optimized asset loading
- Responsive image patterns

### **Customization Options**
- Multiple layout variants for each page type
- Theming through CSS custom properties
- Configurable color schemes
- Flexible component patterns

This template provides a solid foundation for building professional directory and listing websites with modern React development practices and comprehensive feature sets.