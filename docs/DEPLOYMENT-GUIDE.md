# Deployment Guide

## Overview

This guide covers deployment strategies, configuration, and best practices for deploying the ListingHub React TypeScript template to production environments.

## Pre-Deployment Checklist

### 1. Code Quality
- [ ] All TypeScript errors resolved (`npm run build`)
- [ ] ESLint checks passing (`npm run lint`)
- [ ] All tests passing (`npm test`)
- [ ] No console errors in browser
- [ ] Performance audit completed

### 2. Configuration
- [ ] Environment variables configured for production
- [ ] API endpoints updated to production URLs
- [ ] Google Maps API key configured
- [ ] Social authentication configured
- [ ] Error tracking setup (Sentry, LogRocket, etc.)

### 3. Assets and Content
- [ ] All images optimized for web
- [ ] Mock data replaced with real data (if applicable)
- [ ] Content reviewed and finalized
- [ ] SEO meta tags configured
- [ ] Favicon and PWA icons in place

### 4. Security
- [ ] Environment secrets secured
- [ ] API keys restricted to production domains
- [ ] HTTPS configured
- [ ] Security headers configured
- [ ] Dependencies audited (`npm audit`)

## Build Process

### 1. Production Build
```bash
# Clean previous builds
rm -rf dist/

# Create production build
npm run build

# Verify build success
ls -la dist/
```

### 2. Build Output Structure
```
dist/
├── index.html              # Main HTML file
├── assets/
│   ├── index-[hash].js     # Main JavaScript bundle
│   ├── index-[hash].css    # Main CSS bundle
│   └── [assets]            # Images, fonts, other assets
└── vite.svg               # Favicon
```

### 3. Build Optimization
```typescript
// vite.config.ts - Production optimizations
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Enable source maps for debugging
    sourcemap: true,
    
    // Optimize bundle splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['react-icons'],
          
          // Feature chunks
          dashboard: [
            './src/pages/dashboard/dashboard-user',
            './src/pages/dashboard/dashboard-my-profile',
            // ... other dashboard pages
          ],
          listings: [
            './src/pages/listings/grid-layout/grid-layout-01',
            './src/pages/listings/list-layout/list-layout-01',
            // ... other listing pages
          ]
        }
      }
    },
    
    // Asset optimization
    assetsDir: 'assets',
    assetsInlineLimit: 4096, // 4kb
    
    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    }
  },
  
  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString())
  }
})
```

## Environment Configuration

### 1. Production Environment Variables
```bash
# .env.production
VITE_API_BASE_URL=https://api.yourdomain.com/v1
VITE_GOOGLE_MAPS_API_KEY=your_production_google_maps_key
VITE_GOOGLE_CLIENT_ID=your_production_google_oauth_client_id
VITE_APP_URL=https://yourdomain.com
VITE_SENTRY_DSN=your_sentry_dsn
VITE_GTM_ID=your_google_tag_manager_id

# Build flags
VITE_NODE_ENV=production
VITE_DEBUG=false
```

### 2. Runtime Configuration
```typescript
// src/config/environment.ts
export const config = {
  apiUrl: import.meta.env.VITE_API_BASE_URL || '/api',
  googleMapsKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  appUrl: import.meta.env.VITE_APP_URL || 'http://localhost:5173',
  sentryDsn: import.meta.env.VITE_SENTRY_DSN,
  gtmId: import.meta.env.VITE_GTM_ID,
  
  // Feature flags
  enableGoogleAuth: !!import.meta.env.VITE_GOOGLE_CLIENT_ID,
  enableFacebookAuth: !!import.meta.env.VITE_FACEBOOK_APP_ID,
  enableMaps: !!import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  
  // Environment info
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  version: import.meta.env.VITE_APP_VERSION || '1.0.0'
};
```

## Hosting Platforms

### 1. Netlify Deployment

#### Netlify Configuration
```toml
# netlify.toml (already exists in project)
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

#### Deploy to Netlify
```bash
# Method 1: Git integration (recommended)
# 1. Push code to GitHub/GitLab
# 2. Connect repository in Netlify dashboard
# 3. Configure build settings
# 4. Deploy automatically on push

# Method 2: Manual deployment
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### 2. Vercel Deployment

#### Vercel Configuration
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

#### Deploy to Vercel
```bash
# Method 1: Git integration
# 1. Push to GitHub/GitLab
# 2. Import project in Vercel dashboard
# 3. Deploy automatically

# Method 2: CLI deployment
npm install -g vercel
npm run build
vercel --prod
```

### 3. Firebase Hosting

#### Firebase Configuration
```json
// firebase.json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "/assets/**",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        "source": "**/*.@(html|json)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=0, must-revalidate"
          }
        ]
      }
    ]
  }
}
```

#### Deploy to Firebase
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Initialize Firebase project
firebase init hosting

# Build and deploy
npm run build
firebase deploy
```

### 4. AWS S3 + CloudFront

#### S3 Bucket Configuration
```bash
# Create S3 bucket
aws s3 mb s3://your-bucket-name

# Enable static website hosting
aws s3 website s3://your-bucket-name \
  --index-document index.html \
  --error-document index.html

# Upload build files
npm run build
aws s3 sync dist/ s3://your-bucket-name --delete
```

#### CloudFront Distribution
```json
{
  "Origins": [{
    "DomainName": "your-bucket-name.s3.amazonaws.com",
    "Id": "S3-your-bucket-name",
    "S3OriginConfig": {
      "OriginAccessIdentity": ""
    }
  }],
  "DefaultCacheBehavior": {
    "TargetOriginId": "S3-your-bucket-name",
    "ViewerProtocolPolicy": "redirect-to-https",
    "Compress": true,
    "DefaultTTL": 86400,
    "MaxTTL": 31536000
  },
  "CustomErrorResponses": [{
    "ErrorCode": 404,
    "ResponseCode": 200,
    "ResponsePagePath": "/index.html"
  }]
}
```

## Server Configuration

### 1. Nginx Configuration
```nginx
# /etc/nginx/sites-available/listinghub
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;
    
    # SSL Configuration
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    
    # Document root
    root /var/www/listinghub/dist;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    # Asset caching
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # HTML files
    location ~* \.html$ {
        expires -1;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }
    
    # React Router fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
```

### 2. Apache Configuration
```apache
# .htaccess in document root
RewriteEngine On

# Handle Angular/React Router
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

## Monitoring and Analytics

### 1. Error Tracking with Sentry
```typescript
// src/utils/sentry.ts
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

if (import.meta.env.PROD && import.meta.env.VITE_SENTRY_DSN) {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [
      new BrowserTracing(),
    ],
    tracesSampleRate: 0.1,
    environment: import.meta.env.MODE,
    beforeSend(event) {
      // Filter out development errors
      if (event.exception) {
        const error = event.exception.values?.[0];
        if (error?.stacktrace?.frames?.some(frame => 
          frame.filename?.includes('localhost') || 
          frame.filename?.includes('webpack-internal')
        )) {
          return null;
        }
      }
      return event;
    }
  });
}

// Capture user context
export const setSentryUser = (user: { id: string; email: string }) => {
  Sentry.setUser(user);
};

// Capture custom events
export const captureEvent = (event: string, data?: any) => {
  Sentry.addBreadcrumb({
    message: event,
    data,
    level: 'info'
  });
};
```

### 2. Google Analytics Integration
```typescript
// src/utils/analytics.ts
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const initGA = () => {
  const gtmId = import.meta.env.VITE_GTM_ID;
  
  if (!gtmId || !import.meta.env.PROD) return;
  
  // Load GTM script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gtmId}`;
  script.async = true;
  document.head.appendChild(script);
  
  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  
  window.gtag('js', new Date());
  window.gtag('config', gtmId);
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

export const trackPageView = (path: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', import.meta.env.VITE_GTM_ID, {
      page_path: path
    });
  }
};
```

### 3. Performance Monitoring
```typescript
// src/utils/performance.ts
export const initPerformanceMonitoring = () => {
  // Core Web Vitals
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  });
  
  // Bundle size monitoring
  if ('performance' in window) {
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart);
    });
  }
};
```

## SEO Optimization

### 1. Meta Tags Configuration
```typescript
// src/utils/seo.ts
export const updateMetaTags = (data: {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}) => {
  // Update title
  document.title = data.title;
  
  // Update meta tags
  const updateMetaTag = (name: string, content: string, property = false) => {
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let meta = document.querySelector(selector) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      if (property) {
        meta.setAttribute('property', name);
      } else {
        meta.setAttribute('name', name);
      }
      document.head.appendChild(meta);
    }
    
    meta.setAttribute('content', content);
  };
  
  updateMetaTag('description', data.description);
  if (data.keywords) updateMetaTag('keywords', data.keywords);
  
  // Open Graph tags
  updateMetaTag('og:title', data.title, true);
  updateMetaTag('og:description', data.description, true);
  if (data.image) updateMetaTag('og:image', data.image, true);
  if (data.url) updateMetaTag('og:url', data.url, true);
  
  // Twitter Cards
  updateMetaTag('twitter:title', data.title);
  updateMetaTag('twitter:description', data.description);
  if (data.image) updateMetaTag('twitter:image', data.image);
};
```

### 2. Structured Data
```typescript
// src/utils/structuredData.ts
export const addStructuredData = (data: any) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

// Example usage for business listings
export const addBusinessStructuredData = (listing: any) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": listing.title,
    "description": listing.desc,
    "image": listing.image,
    "telephone": listing.call,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": listing.location
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": listing.ratingRate,
      "reviewCount": parseInt(listing.review.split(' ')[0])
    }
  };
  
  addStructuredData(structuredData);
};
```

## Production Maintenance

### 1. Health Checks
```typescript
// src/utils/healthCheck.ts
export const performHealthCheck = async () => {
  const checks = {
    api: false,
    maps: false,
    auth: false
  };
  
  try {
    // API health check
    const apiResponse = await fetch('/api/health');
    checks.api = apiResponse.ok;
  } catch (error) {
    console.error('API health check failed:', error);
  }
  
  try {
    // Maps API check
    checks.maps = !!window.google?.maps;
  } catch (error) {
    console.error('Maps check failed:', error);
  }
  
  try {
    // Auth providers check
    checks.auth = !!window.google?.accounts || !!window.FB;
  } catch (error) {
    console.error('Auth check failed:', error);
  }
  
  return checks;
};
```

### 2. Update Strategy
```bash
# Deployment script
#!/bin/bash

# Build new version
npm run build

# Backup current version
cp -r dist/ dist-backup-$(date +%Y%m%d-%H%M%S)/

# Deploy new version
rsync -av dist/ /var/www/listinghub/

# Test deployment
curl -f https://yourdomain.com || {
  echo "Deployment failed, rolling back..."
  cp -r dist-backup-latest/ dist/
  exit 1
}

echo "Deployment successful"
```

This deployment guide provides comprehensive coverage of production deployment scenarios while maintaining security, performance, and reliability standards.