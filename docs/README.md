# ListingHub Developer Documentation

This documentation provides comprehensive guidance for developers working with the ListingHub React TypeScript business directory template.

## Documentation Overview

- **[Project Overview](./PROJECT-OVERVIEW.md)** - High-level project architecture and features
- **[Setup Guide](./SETUP-GUIDE.md)** - Installation, configuration, and development setup
- **[Component Architecture](./COMPONENT-ARCHITECTURE.md)** - React component structure and patterns
- **[Routing System](./ROUTING-SYSTEM.md)** - Route configuration and navigation
- **[Data Layer](./DATA-LAYER.md)** - Data management and mock data structure
- **[Styling Guide](./STYLING-GUIDE.md)** - SCSS architecture and Bootstrap customization
- **[Development Workflows](./DEVELOPMENT-WORKFLOWS.md)** - Common development tasks and patterns
- **[Deployment Guide](./DEPLOYMENT-GUIDE.md)** - Production build and deployment procedures

## Quick Reference

### Development Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

### Key Dependencies
- React 19 + TypeScript
- Vite (build tool)
- React Router DOM
- Bootstrap 5 + Custom SCSS
- Google Maps API
- React Icons

### Project Structure
```
src/
├── pages/           # Main page components (60+ routes)
├── components/      # Reusable UI components
├── contexts/        # React Context providers
├── data/           # Mock data and type definitions
├── assets/         # Images, SCSS, and static files
└── types/          # TypeScript type definitions
```

## Support

For questions or issues with this template:
1. Check the relevant documentation section
2. Review the component examples in `/src/components/`
3. Examine page implementations in `/src/pages/`
4. Check the mock data in `/src/data/data.ts`