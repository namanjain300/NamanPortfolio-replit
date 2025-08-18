# Portfolio Website - Naman Jain

## Overview

This is a personal portfolio website for Naman Jain, a Senior Flutter Developer with 5+ years of experience. The application is a full-stack React/Express application featuring a modern, responsive design with a contact form and resume download functionality. The website showcases professional experience, skills, projects, and provides a way for potential employers or clients to get in touch.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing instead of React Router
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom dark theme color palette and CSS variables for consistent theming
- **State Management**: React Hook Form for form handling with Zod validation, TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints for contact form submission and resume download
- **Error Handling**: Centralized error middleware with structured error responses
- **Request Logging**: Custom middleware for API request/response logging with timing information

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon serverless database for scalable PostgreSQL hosting
- **Schema Management**: Drizzle Kit for database migrations and schema synchronization
- **Development Storage**: In-memory storage implementation for local development and testing
- **Data Models**: User management and contact message storage with timestamp tracking

### Authentication and Authorization
- **Current State**: Basic user schema defined but no active authentication implementation
- **Session Management**: Connect-pg-simple for PostgreSQL session storage (configured but not actively used)
- **Future Ready**: Infrastructure in place for implementing user authentication when needed

### Design System and UI Architecture
- **Component Structure**: Modular section-based components (Hero, About, Experience, Projects, Contact, Footer)
- **Responsive Design**: Mobile-first approach with responsive breakpoints and mobile detection hooks
- **Dark Theme**: Default dark theme with custom color palette featuring cyan and blue accent colors
- **Animation**: Smooth scrolling navigation and CSS transitions for enhanced user experience
- **Typography**: Inter font family for clean, professional appearance

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod validation
- **Routing**: Wouter for lightweight client-side routing
- **Build Tools**: Vite with React plugin and TypeScript support

### UI and Styling
- **Component Library**: Shadcn/ui built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Lucide React for consistent iconography, React Icons for social media icons
- **Utilities**: Class Variance Authority (CVA) for component variant management, clsx for conditional classes

### Backend and Database
- **Server**: Express.js with TypeScript support via tsx
- **Database**: Neon serverless PostgreSQL with Drizzle ORM
- **Session Storage**: Connect-pg-simple for PostgreSQL session management
- **Validation**: Zod for runtime type validation and Drizzle-Zod integration

### Development Tools
- **Replit Integration**: Replit-specific plugins for development environment
- **Error Handling**: Runtime error modal for development debugging
- **Source Maps**: Support for debugging TypeScript in development
- **Hot Reload**: Vite HMR for fast development iteration

### Utility Libraries
- **Date Handling**: date-fns for date manipulation and formatting
- **Unique IDs**: nanoid for generating unique identifiers
- **HTTP Client**: Native fetch API with custom request wrapper
- **Carousel**: Embla Carousel for potential image/content carousels
- **Command Interface**: cmdk for potential command palette functionality