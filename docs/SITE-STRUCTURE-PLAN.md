# Site Structure Plan - Contractor Directory

## Overview
Complete site structure plan using the chosen page variants (home-2, grid-layout-01, list-layout-01, half-map-01, single-listing-01) as the foundation for a fully functional contractor directory website.

## Main Navigation Structure

### 1. Homepage
- **Route**: `/`
- **Template**: `home-2`
- **Purpose**: Main landing page with hero section, featured contractors, categories
- **Components**: Hero section, search form, featured listings, categories, testimonials

### 2. Contractor Listings
- **Grid View**: `/contractors` → `grid-layout-01`
- **List View**: `/contractors/list` → `list-layout-01`
- **Map View**: `/contractors/map` → `half-map-01`
- **Purpose**: Browse all contractors with filtering and search capabilities
- **Features**: Category filters, location search, rating filters, price range

### 3. Single Contractor Profile
- **Route**: `/contractor/:id`
- **Template**: `single-listing-01`
- **Purpose**: Detailed contractor information, portfolio, reviews, contact
- **Features**: Gallery, services, pricing, reviews, contact form, booking

## User Dashboard Pages

### Dashboard Navigation Structure
All dashboard pages will be protected routes requiring authentication.

#### 4. Dashboard Home
- **Route**: `/dashboard`
- **Template**: `dashboard-user`
- **Purpose**: Main dashboard overview with statistics and quick actions
- **Features**: Stats widgets, recent activity, quick links

#### 5. Profile Management
- **Route**: `/dashboard/profile`
- **Template**: `dashboard-my-profile`
- **Purpose**: User profile editing and account settings
- **Features**: Personal info, contact details, profile photo, password change

#### 6. My Listings (For Contractors)
- **Route**: `/dashboard/listings`
- **Template**: `dashboard-my-listings`
- **Purpose**: Manage contractor listings and services
- **Features**: Add/edit/delete listings, manage photos, pricing, availability

#### 7. Add New Listing
- **Route**: `/dashboard/add-listing`
- **Template**: `dashboard-add-listing`
- **Purpose**: Create new contractor listing
- **Features**: Step-by-step listing creation, photo upload, service details

#### 8. Bookings Management
- **Route**: `/dashboard/bookings`
- **Template**: `dashboard-my-bookings`
- **Purpose**: View and manage service bookings
- **Features**: Upcoming bookings, booking history, status updates

#### 9. Messages
- **Route**: `/dashboard/messages`
- **Template**: `dashboard-messages`
- **Purpose**: Communication with clients/contractors
- **Features**: Message threads, notifications, quick replies

#### 10. Reviews & Ratings
- **Route**: `/dashboard/reviews`
- **Template**: `dashboard-reviews`
- **Purpose**: Manage reviews and ratings
- **Features**: View received reviews, respond to reviews, rating analytics

#### 11. Bookmarks/Favorites
- **Route**: `/dashboard/bookmarks`
- **Template**: `dashboard-bookmarks`
- **Purpose**: Saved contractors and listings
- **Features**: Bookmarked contractors, saved searches, quick access

#### 12. Wallet & Payments
- **Route**: `/dashboard/wallet`
- **Template**: `dashboard-wallet`
- **Purpose**: Payment management and transaction history
- **Features**: Payment methods, transaction history, earnings (for contractors)

## Authentication Pages

#### 13. Login
- **Route**: `/login`
- **Template**: `login`
- **Purpose**: User authentication
- **Features**: Email/password login, social login, remember me

#### 14. Register
- **Route**: `/register`
- **Template**: `register`
- **Purpose**: New user registration
- **Features**: User type selection (client/contractor), form validation

#### 15. Forgot Password
- **Route**: `/forgot-password`
- **Template**: `forgot-password`
- **Purpose**: Password recovery
- **Features**: Email verification, password reset

#### 16. Two-Factor Authentication
- **Route**: `/two-factor-auth`
- **Template**: `two-factor-auth`
- **Purpose**: Enhanced security verification
- **Features**: OTP verification, backup codes

## Static/Inner Pages

#### 17. About Us
- **Route**: `/about`
- **Template**: `about-us`
- **Purpose**: Company information and mission
- **Features**: Team info, company story, values

#### 18. Contact Us
- **Route**: `/contact`
- **Template**: `contact-us`
- **Purpose**: Contact information and inquiry form
- **Features**: Contact form, office locations, support info

#### 19. Pricing
- **Route**: `/pricing`
- **Template**: `pricing`
- **Purpose**: Service pricing and plans
- **Features**: Pricing tiers, feature comparison, FAQ

#### 20. Help Center
- **Route**: `/help`
- **Template**: `help-center`
- **Purpose**: User support and documentation
- **Features**: FAQs, tutorials, support articles

#### 21. FAQ
- **Route**: `/faq`
- **Template**: `faq`
- **Purpose**: Frequently asked questions
- **Features**: Categorized questions, search functionality

#### 22. Blog
- **Route**: `/blog`
- **Template**: `blog`
- **Purpose**: Content marketing and SEO
- **Features**: Article listings, categories, search

#### 23. Blog Post Detail
- **Route**: `/blog/:id`
- **Template**: `blog-detail`
- **Purpose**: Individual blog post
- **Features**: Full article, comments, related posts

#### 24. Privacy Policy
- **Route**: `/privacy`
- **Template**: `privacy-policy`
- **Purpose**: Legal compliance
- **Features**: Privacy terms, data handling, compliance info

#### 25. Terms of Service
- **Route**: `/terms`
- **Template**: `privacy-policy` (adapted)
- **Purpose**: Legal terms and conditions
- **Features**: User agreements, service terms

## Booking & Payment Flow

#### 26. Booking Page
- **Route**: `/book/:contractorId`
- **Template**: `booking-page`
- **Purpose**: Service booking interface
- **Features**: Date selection, service options, pricing calculator

#### 27. Checkout
- **Route**: `/checkout`
- **Template**: `checkout-page`
- **Purpose**: Payment processing
- **Features**: Payment forms, order summary, confirmation

#### 28. Payment Success
- **Route**: `/payment/success`
- **Template**: `success-payment`
- **Purpose**: Booking confirmation
- **Features**: Confirmation details, next steps, receipt

#### 29. Invoice
- **Route**: `/invoice/:id`
- **Template**: `invoice-page`
- **Purpose**: Invoice display and download
- **Features**: Invoice details, PDF download, payment status

#### 30. View Cart
- **Route**: `/cart`
- **Template**: `viewcart`
- **Purpose**: Shopping cart for multiple services
- **Features**: Service summary, quantity adjustments, proceed to checkout

## Additional Utility Pages

#### 31. Author/Contractor Profile (Public)
- **Route**: `/contractor-profile/:id`
- **Template**: `author-profile`
- **Purpose**: Public contractor profile view
- **Features**: Portfolio, reviews, contact options

#### 32. Error Page
- **Route**: `/404` (and error fallback)
- **Template**: `error`
- **Purpose**: Error handling and navigation
- **Features**: Error message, navigation options, search

#### 33. Coming Soon
- **Route**: `/coming-soon`
- **Template**: `comingsoon`
- **Purpose**: Feature announcements
- **Features**: Countdown, email signup, feature preview

#### 34. Elements/Style Guide
- **Route**: `/elements`
- **Template**: `elements`
- **Purpose**: Design system showcase (internal use)
- **Features**: UI components, styling examples

## Implementation Checklist

### Phase 1: Core Functionality
- [ ] Homepage (home-2) with contractor search
- [ ] Contractor listings (grid-layout-01, list-layout-01, half-map-01)
- [ ] Single contractor profiles (single-listing-01)
- [ ] User authentication (login, register, forgot-password)
- [ ] Basic dashboard (dashboard-user)

### Phase 2: User Management
- [ ] Profile management (dashboard-my-profile)
- [ ] Contractor listing management (dashboard-my-listings, dashboard-add-listing)
- [ ] Bookings system (dashboard-my-bookings, booking-page)
- [ ] Messaging system (dashboard-messages)

### Phase 3: Enhanced Features
- [ ] Reviews and ratings (dashboard-reviews)
- [ ] Bookmarks system (dashboard-bookmarks)
- [ ] Payment integration (dashboard-wallet, checkout-page, success-payment)
- [ ] Invoice system (invoice-page)

### Phase 4: Content & Support
- [ ] Static pages (about, contact, pricing, help, faq)
- [ ] Blog system (blog, blog-detail)
- [ ] Legal pages (privacy-policy, terms)
- [ ] Error handling (error, 404)

### Phase 5: Advanced Features
- [ ] Two-factor authentication (two-factor-auth)
- [ ] Advanced booking features (viewcart, multiple services)
- [ ] Public contractor profiles (author-profile)
- [ ] Admin features and analytics

## Navigation Menu Structure

### Main Navigation
- Home
- Find Contractors
  - Grid View
  - List View
  - Map View
- About
- Pricing
- Blog
- Contact

### User Menu (Authenticated)
- Dashboard
- My Profile
- My Listings (contractors only)
- Bookings
- Messages
- Reviews
- Bookmarks
- Wallet
- Logout

### Footer Navigation
- About Us
- Contact
- Pricing
- Help Center
- FAQ
- Privacy Policy
- Terms of Service
- Blog

This structure provides a complete, professional contractor directory with all necessary functionality for both clients seeking contractors and contractors managing their business presence.