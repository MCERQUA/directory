# Chosen Page Variants

## Selected Page Templates

Based on the project requirements, the following page variants have been chosen for the contractor directory site:

### Core Page Selections
- **Home Page**: `home-2` - Selected as the main homepage layout
- **Grid Layout**: `grid-layout-01` - For contractor listings in grid format
- **List Layout**: `list-layout-01` - For contractor listings in list format  
- **Half-Map Layout**: `half-map-01` - For map-integrated contractor listings
- **Single Listing**: `single-listing-01` - For individual contractor detail pages

### Implementation Strategy
These selected variants will serve as the foundation for the contractor directory, with all other pages using consistent styling and layout patterns derived from these chosen templates.

### Page Mapping
- `/` → `home-2` (Homepage)
- `/contractors` → `grid-layout-01` (Default contractor listings)
- `/contractors/list` → `list-layout-01` (List view contractors)
- `/contractors/map` → `half-map-01` (Map view contractors)
- `/contractor/:id` → `single-listing-01` (Individual contractor profile)

All other pages will maintain design consistency with these selected variants while serving their specific functional purposes.