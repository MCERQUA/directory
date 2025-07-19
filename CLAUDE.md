# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ListingHub is a React + TypeScript business directory and listing template built with Vite. It's a comprehensive directory site featuring multiple home page variants, listing layouts, and dashboard functionality.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (runs TypeScript check first)
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

## Architecture

### Tech Stack
- React 19 with TypeScript
- Vite for build tooling and development server
- React Router DOM v7 for routing
- Bootstrap 5 for styling (with custom SCSS)
- Google Maps API integration (@react-google-maps/api)
- React Icons (Bootstrap Icons, Font Awesome)
- Swiper for carousels and sliders
- React Select for enhanced dropdowns
- Multi-Range Slider for filtering
- React Dropzone for file uploads
- React CountUp for animated counters
- Yet Another React Lightbox for image galleries
- Animate.css for CSS animations

### Project Structure
- `src/pages/` - Main page components organized by functionality:
  - `index/` - 12 different home page variants (index-one through index-eleven, plus index-map)
  - `listings/` - Listing display pages in grid, list, and half-map layouts
  - `dashboard/` - User dashboard pages (profile, bookings, listings, etc.)
  - `auth/` - Authentication pages (login, register, forgot password, 2FA)
  - `inner-pages/` - Static pages (about, blog, contact, pricing, etc.)
- `src/components/` - Reusable UI components organized by feature:
  - `navbar/` - 9 different navigation variants (light, dark, transparent, admin, etc.)
  - `list-detail/` - Single listing page components (about, galleries, reviews, maps, pricing)
  - `admin/` - Dashboard-specific components (sidebar, image upload, activity)
  - Feature components: filters, forms, footers, listings, categories
- `src/data/` - Data layer with comprehensive mock data (1,067 lines)
- `src/contexts/` - React Context providers (AuthContext for authentication)
- `src/assets/` - Static assets including images and SCSS styles
- `src/types/` - TypeScript type definitions
- `docs/` - Comprehensive developer documentation

### Key Features
- **12 Home Page Variants**: Different design approaches (index-one through index-eleven, plus index-map)
- **26 Listing Layouts**: 6 grid layouts, 5 list layouts, 5 half-map layouts, 5 single listing variants + 5 additional single pages
- **9 Dashboard Pages**: Full user management (profile, bookings, listings, messages, wallet, reviews, bookmarks)
- **Authentication System**: Email/password, Google OAuth, Facebook OAuth (configurable), 2FA support
- **Protected Routes**: ProtectedRoute and PublicRoute components with authentication flow
- **Google Maps Integration**: Interactive maps, location-based search, map markers
- **Comprehensive Data Layer**: Mock data for listings, categories, users, reviews, blogs, locations, events
- **Responsive Design**: Mobile-first Bootstrap 5 with custom SCSS and CSS variables
- **Component Library**: 50+ reusable components with TypeScript interfaces
- **Animation System**: CSS keyframes, transitions, hover effects, loading states

### Routing
The app uses a comprehensive routing system with 60+ routes covering all page variants. Single listing pages support dynamic routing with ID parameters.

### Styling
- **Bootstrap 5 Foundation**: Extensive customization through CSS custom properties
- **Custom SCSS Architecture**: style.scss (79,474 tokens) + _custom.scss variables
- **CSS Variables System**: Theming with --bs-* custom properties for colors, spacing, typography
- **Typography**: 'Jost' font family with weights 200-800, 15px base font size
- **Color Scheme**: Primary red (#c71f37), comprehensive color system with opacity utilities
- **Animation System**: CSS keyframes (shimmer, bounce, preloader), transition utilities
- **Responsive Breakpoints**: Mobile-first with custom breakpoints (575px to 1500px)
- **Component-Specific Styling**: Buttons (56px height), cards, navigation, forms, dashboard
- **Dark Mode Support**: Dashboard dark theme with CSS variables

## Development Notes

### Configuration
- TypeScript configuration uses project references (tsconfig.json, tsconfig.app.json, tsconfig.node.json)
- ESLint configured for React and TypeScript with hooks and refresh plugins
- Vite configuration with React plugin, source maps enabled
- Environment variables prefixed with VITE_ (VITE_GOOGLE_MAPS_API_KEY, VITE_GOOGLE_CLIENT_ID)

### Architecture Patterns
- **Component-Based Design**: Functional components with TypeScript interfaces
- **Context API**: AuthContext for global authentication state
- **Protected Routes**: Authentication wrapper components (ProtectedRoute, PublicRoute)
- **State Management**: Local useState + useEffect patterns, Context for global state
- **Event Handling**: Async form submission, input change handlers, proper error handling
- **Responsive Design**: Window size detection, conditional rendering, mobile-first approach

### Key Implementation Details
- Bootstrap tooltips initialized globally in App.tsx
- Google/Facebook OAuth integration (Facebook currently disabled)
- All pages pre-built as separate components for easy customization
- Mock data in data.ts (1,067 lines) ready for API replacement
- Image assets organized by category (listings, team, blog, categories, cities, events)
- Icon system using React Icons (Bootstrap Icons, Font Awesome 6)

### Data Structures
- **Listings**: 9 sample listings with full metadata (status, rating, features, location, pricing)
- **Categories**: 12 business categories with icons and listing counts
- **Reviews**: User testimonials with star ratings and user profiles
- **Blog Posts**: 6 sample posts with images, dates, and view counts
- **Cities**: 6 location examples with listing counts and related tags
- **Events**: 3 sample events with dates, categories, and timing
- **Dashboard Data**: Counters, bookings, messages, earnings, admin reviews

### File Organization
- Pages organized by feature: index/, listings/, dashboard/, auth/, inner-pages/
- Components organized by function: navbar/, list-detail/, admin/, feature-specific
- Assets structured: img/ (organized by category), scss/ (modular architecture)
- Documentation: Complete developer guides in docs/ folder

## Slash Commands

### /directory-setup
**Purpose**: Complete contractor directory setup procedure with progress tracking
**Location**: `.claude/directory-setup.md`
**Features**:
- Reviews all planning documents (CHOSEN-PAGE-VARIANTS.md, SITE-STRUCTURE-PLAN.md, IMPLEMENTATION-TASKS.md)
- Assesses current production state vs planned implementation
- Executes 36 implementation tasks in priority order
- Tracks progress in `docs/setup-progress.json` for session recovery
- Handles interruptions gracefully with resume capability
- Provides completion tracking and session summaries

**Usage**: Simply execute `/directory-setup` to start or continue the setup process
**Progress Tracking**: All task completion status saved in setup-progress.json
**Recovery**: Can resume from any interruption point across multiple sessions