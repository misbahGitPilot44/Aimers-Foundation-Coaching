# SAU ACM Website Architecture

## Project Overview

The SAU ACM Website is a modern, responsive web application built using React and TypeScript. This document provides a comprehensive overview of the project's architecture, technology stack, and codebase organization.

## Technology Stack

### Core Technologies
- **React 18.3.1**: Modern UI library with concurrent features
- **TypeScript 5.5.3**: Static typing for enhanced development experience
- **Vite 5.4.2**: Next-generation frontend tooling
- **Tailwind CSS 3.4.1**: Utility-first CSS framework
- **React Router DOM 6.22.3**: Client-side routing

### UI Components
- **Lucide React**: Modern icon library
- **Embla Carousel**: Lightweight carousel component

### Development Tools
- **ESLint 9.9.1**: Code linting
- **TypeScript ESLint**: TypeScript-specific linting
- **Autoprefixer & PostCSS**: CSS processing

## Project Structure

```
sau-acm-website/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Footer.tsx
│   │   ├── ImageCarousel.tsx
│   │   └── Navbar.tsx
│   ├── pages/             # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Events.tsx
│   │   ├── Blog.tsx
│   │   ├── Membership.tsx
│   │   ├── Resources.tsx
│   │   └── Contact.tsx
│   ├── App.tsx           # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
└── config files         # Various configuration files
```

## Key Features

### 1. Responsive Design
- Mobile-first approach using Tailwind CSS
- Flexible layouts that adapt to all screen sizes
- Custom breakpoints for optimal viewing

### 2. Theme System
- Dark/Light mode support
- CSS variables for consistent theming
- Page-specific accent colors

### 3. Component Architecture
- Modular, reusable components
- Type-safe props using TypeScript
- Consistent styling patterns

### 4. Navigation
- Client-side routing with React Router
- Smooth page transitions
- Responsive navigation menu

### 5. Interactive Elements
- Image carousels
- Card-based layouts
- Hover effects and animations

## Component Details

### Navbar (`components/Navbar.tsx`)
- Responsive navigation
- Dark mode toggle
- Mobile menu support

### Footer (`components/Footer.tsx`)
- Social media links
- Quick navigation links
- Contact information

### ImageCarousel (`components/ImageCarousel.tsx`)
- Touch-friendly carousel
- Responsive images
- Navigation controls

## Page Components

Each page component follows a consistent structure:
- Clear type definitions
- Responsive layouts
- Modular sections
- Interactive elements

### Example: Events Page
- List/Detail view toggle
- Click-outside detection
- Structured event data
- Rich media support

## Styling Architecture

### Global Styles (`index.css`)
- CSS variables for theming
- Tailwind utility classes
- Custom component classes
- Responsive patterns

### Design System
- Consistent spacing
- Typography scale
- Color palette
- Component variants

## Best Practices

### TypeScript
- Strict type checking
- Interface definitions
- Type safety
- Generic components

### React
- Functional components
- React hooks
- Performance optimization
- Error boundaries

### Code Organization
- Clear file structure
- Consistent naming
- Module separation
- Clean imports

## Development Workflow

### Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

### Code Quality
- ESLint configuration
- TypeScript strict mode
- Consistent formatting
- Code review guidelines

## Deployment

The website is configured for deployment on Netlify:
- Automatic builds
- Environment variables
- Preview deployments
- SSL/TLS support