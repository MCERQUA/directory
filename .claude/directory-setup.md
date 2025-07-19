# Directory Setup Slash Command

**Purpose**: Complete contractor directory transformation from template to production-ready platform with data cleanup and functional user dashboard integration.

**Location**: `.claude/directory-setup.md`

## Overview

This command converts the ListingHub template from placeholder content to a fully functional contractor directory platform by:

1. **Data Cleanup**: Remove all fake/placeholder content
2. **Database Integration**: Connect dashboard to real Supabase backend  
3. **User Functionality**: Enable real listing creation and management
4. **Content Replacement**: Replace demo content with proper contractor directory structure

## Implementation Tasks

### Phase 1: Data Cleanup & Template Sanitization (Critical Priority)

#### Task 1: Remove Mock Data from data.ts
- **File**: `src/data/data.ts` (1,067 lines)
- **Action**: Replace all mock listings, users, reviews, categories with empty arrays or minimal seed data
- **Remove**: 9 fake business listings (Elite Home Builders, Pro Plumbing Solutions, etc.)
- **Remove**: 13 fake user profiles (Julia F. Mitchell, Maria P. Thomas, etc.)
- **Remove**: 6 fake testimonials and blog posts
- **Keep**: Real category structure (already exists in Supabase)

#### Task 2: Clean Contact Information & Footer Content
- **File**: `src/components/footer.tsx`
- **Remove**: Placeholder address "Angraster 7, Greenhorst, Los Angeles QTC564"
- **Remove**: Fake phone "042 - 526 - 5263"
- **Action**: Make contact info configurable via environment variables

#### Task 3: Remove Placeholder Email Addresses
- **Files**: Multiple dashboard sidebar components
- **Remove**: "shree.patel@gmail.com", "danieldecuze@gmail.com", "Shreethemes@gmail.com"
- **Replace**: With real user data from authentication context

#### Task 4: Clean Hardcoded User References
- **Files**: Dashboard components, navbar components
- **Remove**: "Shreethemes", "Hello, Shreethemes"
- **Replace**: With actual user.full_name from AuthContext

#### Task 5: Replace Placeholder Images
- **Files**: `src/assets/img/` directory
- **Action**: Replace demo business photos with generic placeholder service
- **Keep**: Essential UI icons and branding elements

### Phase 2: Dashboard Backend Integration (High Priority)

#### Task 6: Connect Dashboard Stats to Supabase
- **File**: `src/pages/dashboard/dashboard-user.tsx`
- **Remove**: Import of mock `adminCounter` data
- **Add**: Real Supabase function calls for dashboard stats
- **Integrate**: `get_contractor_dashboard_stats` and `get_customer_dashboard_stats` functions

#### Task 7: Implement Profile Management Functionality
- **Files**: `src/pages/dashboard/dashboard-profile.tsx`
- **Add**: Form submission handlers
- **Connect**: Profile forms to `updateProfile` function from AuthContext
- **Load**: Real user profile data instead of placeholders

#### Task 8: Build Functional Listing Management
- **File**: `src/pages/dashboard/dashboard-my-listing.tsx`
- **Remove**: Mock `adminListing` data
- **Add**: Query `business_listings` table filtered by owner_id
- **Implement**: CRUD operations (Create, Read, Update, Delete listings)

#### Task 9: Implement Add Listing Functionality
- **File**: `src/pages/dashboard/dashboard-add-listing.tsx`
- **Add**: Form submission handler
- **Connect**: To Supabase `business_listings` table
- **Include**: Image upload to Supabase Storage
- **Add**: Category selection from real categories table

#### Task 10: Connect Booking System
- **Files**: Dashboard booking related pages
- **Remove**: Mock booking data
- **Connect**: To real `bookings` table
- **Implement**: Booking creation, status updates, messaging

### Phase 3: Frontend Data Integration (Medium Priority)

#### Task 11: Connect Homepage to Real Categories
- **Files**: Various index page components
- **Replace**: Mock category data with Supabase category queries
- **Update**: Category listings and counts

#### Task 12: Implement Real Listing Display
- **Files**: `src/pages/listings/` directory
- **Connect**: Listing pages to `business_listings` table
- **Add**: Search, filtering, and pagination
- **Remove**: Mock listing data

#### Task 13: Build Real Review System
- **Files**: Review components
- **Connect**: To `reviews` table
- **Implement**: Review submission and display
- **Add**: Review moderation workflow

#### Task 14: Connect Search Functionality
- **Files**: Search components
- **Implement**: Real search against `business_listings` table
- **Add**: Location-based search with radius
- **Connect**: To category filtering

### Phase 4: Configuration & Environment Setup (Medium Priority)

#### Task 15: Environment Configuration
- **Create**: Environment variable system for site configuration
- **Variables**: VITE_SITE_NAME, VITE_CONTACT_EMAIL, VITE_CONTACT_PHONE
- **Files**: Update footer and contact components to use env vars

#### Task 16: Remove Template Attribution
- **Files**: Footer components
- **Remove**: "© 2025 ListingHub. Develop with ❤️ By Shreethemes" 
- **Remove**: Links to "https://shreethemes.in/"
- **Replace**: With configurable site branding

#### Task 17: Update Default Content
- **Files**: About, contact, and static pages
- **Remove**: Template-specific content
- **Replace**: With contractor directory relevant content

### Phase 5: Image & Asset Management (Low Priority)

#### Task 18: Implement Image Upload System
- **Integration**: Supabase Storage for listing images
- **Components**: File upload components for dashboard
- **Processing**: Image resizing and optimization

#### Task 19: Replace Demo Images
- **Action**: Set up placeholder image service
- **Remove**: Specific demo business photos
- **Implement**: Default category and listing images

### Phase 6: Testing & Validation (Critical Priority)

#### Task 20: End-to-End User Flow Testing
- **Test**: User registration → Profile setup → Listing creation
- **Validate**: Dashboard functionality with real data
- **Verify**: Search and filtering works with real listings

#### Task 21: Data Validation & Security
- **Implement**: Form validation on all user inputs
- **Add**: RLS (Row Level Security) enforcement
- **Test**: Authorization and access controls

## Progress Tracking

Progress is tracked in `docs/setup-progress.json` with the following structure:

```json
{
  "session_id": "uuid",
  "started_at": "timestamp",
  "current_phase": 1,
  "completed_tasks": [],
  "failed_tasks": [],
  "notes": [],
  "estimated_completion": "percentage"
}
```

## Session Recovery

The setup process can be interrupted and resumed:
- Current progress saved after each task completion
- Failed tasks logged with error details  
- Resume capability from any point in the process

## Completion Criteria

✅ **Data Cleanup Complete**: All mock/placeholder content removed
✅ **Dashboard Functional**: Users can create and manage real listings  
✅ **Backend Connected**: All dashboard features use Supabase
✅ **Search Working**: Real search against actual business listings
✅ **User Flow Complete**: Registration → Profile → Listing creation works end-to-end

## Post-Setup Tasks

After completion, the platform will need:
1. **Content Creation**: Real contractor categories and initial listings
2. **SEO Optimization**: Meta tags and sitemap generation  
3. **Performance Optimization**: Image optimization and caching
4. **Admin Panel**: Content moderation and user management
5. **Analytics Integration**: User behavior and conversion tracking

## Usage

Execute `/directory-setup` to begin the transformation process. The system will:
1. Assess current state vs. planned implementation
2. Execute tasks in priority order
3. Track progress for session recovery
4. Provide completion summary and next steps

**Estimated Time**: 3-4 hours for complete transformation
**Dependencies**: Functional Supabase database with populated categories table