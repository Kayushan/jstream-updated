# React App Setup Instructions

This project has been converted from Next.js to a standard React app using Vite.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# App Configuration
VITE_APP_URL=http://localhost:3000
VITE_SITE_NAME=Jstream

# TMDB API Configuration
VITE_TMDB_TOKEN=your_tmdb_jwt_token_here

# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Social Media Links (Optional)
VITE_TWITTER=https://x.com
VITE_FACEBOOK=https://facebook.com
VITE_INSTAGRAM=https://instagram.com
VITE_YOUTUBE=https://youtube.com

# Image Domain (Optional)
VITE_IMAGE_DOMAIN=image.tmdb.org
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Key Changes Made

### 1. Build System
- Replaced Next.js with Vite
- Updated package.json scripts and dependencies
- Added Vite configuration with path aliases

### 2. Routing
- Replaced Next.js App Router with React Router DOM
- Converted page components to use React hooks for data fetching
- Updated navigation to use React Router

### 3. Environment Variables
- Changed from `NEXT_PUBLIC_*` to `VITE_*` prefix
- Updated environment configuration to use Vite's import.meta.env

### 4. Fonts
- Replaced Next.js font optimization with CSS imports
- Added Google Fonts import for Inter
- Configured local font loading for Cal Sans

### 5. TypeScript Configuration
- Updated tsconfig.json for Vite compatibility
- Added tsconfig.node.json for build tools

## Features Preserved

- ✅ TMDB JWT token authentication
- ✅ Supabase integration
- ✅ All UI components and styling
- ✅ Theme switching
- ✅ PWA capabilities
- ✅ Video streaming functionality
- ✅ Search functionality
- ✅ Responsive design

## Next Steps for Mobile

This React app is now ready for Capacitor integration:

1. Install Capacitor:
```bash
npm install @capacitor/core @capacitor/cli
npx cap init
```

2. Add platform-specific packages:
```bash
npm install @capacitor/ios @capacitor/android
npx cap add ios
npx cap add android
```

3. Build and sync:
```bash
npm run build
npx cap sync
```

## Troubleshooting

- If you encounter font loading issues, ensure the font files are in the correct location
- For environment variable issues, make sure all VITE_* variables are properly set
- For routing issues, check that all page components are properly imported in App.tsx
