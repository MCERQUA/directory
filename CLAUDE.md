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
- React Router DOM for routing
- Bootstrap 5 for styling (with custom SCSS)
- Google Maps API integration (@react-google-maps/api)

### Project Structure
- `src/pages/` - Main page components organized by functionality:
  - `index/` - 12 different home page variants (index-one through index-eleven, plus index-map)
  - `listings/` - Listing display pages in grid, list, and half-map layouts
  - `dashboard/` - User dashboard pages (profile, bookings, listings, etc.)
  - `auth/` - Authentication pages (login, register, forgot password, 2FA)
  - `inner-pages/` - Static pages (about, blog, contact, pricing, etc.)
- `src/components/` - Reusable UI components organized by feature
- `src/data/` - Data layer and mock data
- `src/assets/` - Static assets including images and SCSS styles

### Key Features
- Multiple home page layouts demonstrating different design approaches
- Comprehensive listing system with grid, list, and map views
- Full-featured dashboard for user management
- Authentication system with 2FA support
- Google Maps integration for location-based features
- Bootstrap-based responsive design with custom SCSS

### Routing
The app uses a comprehensive routing system with 60+ routes covering all page variants. Single listing pages support dynamic routing with ID parameters.

### Styling
- Primary styling via Bootstrap 5
- Custom SCSS in `src/assets/scss/`
- Animate.css for animations
- Responsive design patterns throughout

## Development Notes

- TypeScript configuration uses project references (tsconfig.json, tsconfig.app.json, tsconfig.node.json)
- ESLint configured for React and TypeScript with hooks and refresh plugins
- Bootstrap tooltips are initialized globally in App.tsx
- All pages are pre-built as separate components for easy customization