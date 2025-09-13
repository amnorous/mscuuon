# Medical School Christian Union (MSCU) Compassion Week Website

## Overview

This is a modern, faith-based nonprofit website for the Medical School Christian Union's Compassion Week initiative. The platform serves as both an inspirational hub and functional tool for community engagement, featuring Bible verses about compassion, donation mechanisms, and support contact systems. Built with React, TypeScript, and Tailwind CSS, the application emphasizes emotional impact while maintaining accessibility and user-friendly functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom design system based on shadcn/ui components
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching

### Design System
- **Component Library**: Custom implementation using Radix UI primitives with shadcn/ui styling
- **Color Palette**: Navy blue primary (#062971), golden yellow secondary (#BF9108), with warm grays
- **Typography**: Inter for body text, Merriweather for Bible verses
- **Layout**: Responsive design with consistent spacing using Tailwind's spacing scale
- **Animations**: CSS transitions and transforms for hover effects, card floating animations

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon serverless PostgreSQL for scalable cloud hosting
- **Session Management**: Built-in session handling with PostgreSQL storage

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect for schema management and migrations
- **Schema**: Defined user management and donation tracking tables
- **Validation**: Zod for runtime type validation and schema validation
- **Migrations**: Automated database migrations using Drizzle Kit

### Application Features
- **Hero Section**: Full-screen video background with animated text overlays
- **Bible Verses**: Dynamic verse display with 38+ compassion-themed scriptures and facts
- **Donation System**: M-Pesa integration with paybill details and amount input
- **Contact System**: Staff directory with WhatsApp and call integration
- **Responsive Design**: Mobile-first approach with tablet and desktop breakpoints

### Development Tooling
- **Build**: ESBuild for server bundling, Vite for client bundling
- **Type Checking**: TypeScript compiler with strict mode enabled
- **Styling**: PostCSS with Tailwind CSS and Autoprefixer
- **Development**: Hot module replacement and runtime error overlays

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive component primitives for accessibility and interaction
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Class Variance Authority**: Type-safe variant API for component styling
- **Lucide React**: Modern icon library for consistent iconography

### Database and Backend
- **Neon Database**: Serverless PostgreSQL hosting platform
- **Drizzle ORM**: Modern TypeScript ORM with excellent type inference
- **Express.js**: Minimal and flexible Node.js web application framework

### Development and Build Tools
- **Vite**: Next-generation frontend build tool with fast HMR
- **TypeScript**: Static type checking for JavaScript
- **ESBuild**: Extremely fast JavaScript bundler for production builds

### State Management and Data Fetching
- **TanStack Query**: Powerful data synchronization for React applications
- **React Hook Form**: Performant forms library with minimal re-renders
- **Zod**: TypeScript-first schema validation library

### Payment Integration
- **M-Pesa**: Mobile money payment system integration (Paybill: 4109183, Account: COMPASSION)

### Third-party Services
- **WhatsApp API**: Direct messaging integration for staff contact
- **Google Maps**: Location services for physical address display
- **Linktree**: Social media and link aggregation (linktr.ee/mscuon)