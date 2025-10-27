# Mapa da Bíblia Católica

## Overview

This is a sales landing page application for "Mapa da Bíblia Católica" - a comprehensive Catholic Bible study guide. The application is built as a single-page React application with a futuristic and elegant design aesthetic, featuring glassmorphism effects, gradients, and modern animations. The page presents a digital product offering Bible maps, timelines, and study materials for all 73 books of the Catholic Bible.

The application includes marketing elements such as product features, testimonials, pricing cards, FAQ sections, and conversion-focused CTAs. It integrates Facebook Pixel for tracking and Utmify for UTM parameter capture, enabling marketing analytics and attribution.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server with HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing (minimal router, not React Router)
- Single-page application architecture with all content on the home page

**UI Component System:**
- Shadcn UI component library with Radix UI primitives for accessible, headless components
- Tailwind CSS for utility-first styling with custom design tokens
- Component variants managed through `class-variance-authority`
- Custom design system following futuristic/elegant aesthetic with gradients, glassmorphism, and animations

**State Management:**
- TanStack Query (React Query) v5 for server state management
- React hooks for local component state
- No global state management library (Redux, Zustand, etc.)

**Styling Approach:**
- Tailwind CSS with extensive custom configuration for design tokens
- CSS custom properties (CSS variables) for theming with HSL color format
- Custom fonts: Inter, Outfit, and Space Grotesk from Google Fonts
- Glassmorphism effects using backdrop-blur and semi-transparent backgrounds
- Gradient-heavy design with primary/accent color combinations

**Key Design Decisions:**
- Mobile-first responsive design with breakpoints
- Accessibility-focused with ARIA labels and semantic HTML
- Performance optimized with lazy loading and code splitting via Vite
- Component library structured for reusability with examples directory

### Backend Architecture

**Server Framework:**
- Express.js as the HTTP server framework
- TypeScript for type safety across the stack
- Custom Vite middleware integration for development HMR
- Modular route registration system (currently minimal API surface)

**Development vs Production:**
- Development: Vite dev server integrated with Express middleware
- Production: Static file serving from compiled assets
- Environment-based configuration via NODE_ENV

**Server Structure:**
- `server/index.ts`: Main application entry point with Express setup and middleware
- `server/routes.ts`: Route registration (currently minimal, prepared for expansion)
- `server/storage.ts`: Data abstraction layer with in-memory storage implementation
- `server/vite.ts`: Vite development server integration and SSR setup

**Storage Layer:**
- Interface-based storage abstraction (`IStorage`) for future database integration
- Current implementation: In-memory storage with Map-based data structures
- Prepared for database migration (Drizzle ORM configuration present)
- User model defined but not actively used in current application state

### Data Storage Solutions

**Current State:**
- In-memory storage using JavaScript Map structures
- No persistent database currently connected
- User schema defined in `shared/schema.ts` using Drizzle ORM

**Prepared Infrastructure:**
- Drizzle ORM configured for PostgreSQL via `@neondatabase/serverless`
- Database configuration in `drizzle.config.ts` pointing to `DATABASE_URL`
- Migration directory structure (`./migrations`)
- Schema defined with PostgreSQL-specific types (pgTable, varchar, text)
- Zod validation schemas for type-safe data insertion

**Database Design (Prepared):**
- Users table with UUID primary keys, username, and password fields
- Schema co-location in `shared/schema.ts` for frontend/backend sharing
- Type inference from schema for compile-time safety

### Authentication and Authorization

**Current State:**
- No active authentication system implemented
- User schema exists but authentication routes not implemented
- Session management dependencies installed (`connect-pg-simple`)

**Prepared Infrastructure:**
- Express session configuration prepared
- User model with username/password fields
- Storage layer includes user CRUD operations (getUserByUsername, createUser)
- Cookie-based session approach indicated by dependencies

### External Dependencies

**Marketing & Analytics:**
- **Facebook Pixel** (ID: 873027441950497): Conversion tracking and retargeting
  - PageView event tracking on initial load
  - Noscript fallback for users with JavaScript disabled
  
- **Utmify**: UTM parameter capture and tracking for marketing attribution
  - Configured to prevent cross-domain cookie sharing
  - Prevents subID parameter capture
  - CDN-hosted script with async/defer loading

**Fonts & CDN:**
- Google Fonts: Inter, Outfit, Space Grotesk with multiple weights
- Preconnect optimization for font loading performance

**Development Tools:**
- Replit-specific plugins for development environment:
  - `@replit/vite-plugin-runtime-error-modal`: Enhanced error display
  - `@replit/vite-plugin-cartographer`: Project structure visualization
  - `@replit/vite-plugin-dev-banner`: Development mode indicator

**UI Component Dependencies:**
- Radix UI primitives for 25+ accessible component patterns
- Embla Carousel for testimonial carousels
- React Hook Form with Zod resolvers for form validation
- Lucide React for icon system
- date-fns for date manipulation

**Build & Development:**
- ESBuild for server-side bundling (production builds)
- TSX for TypeScript execution in development
- PostCSS with Tailwind and Autoprefixer for CSS processing
- Vite with React plugin for frontend builds

**Deployment:**
- Netlify deployment artifacts present in `netlify-deploy/`
- Static asset compilation to `dist/public`
- Separate client and server build outputs