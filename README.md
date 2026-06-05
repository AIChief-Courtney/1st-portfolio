# My First Portfolio(Courtney)

A professional personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

This project demonstrates a modern front-end stack for creating fast, accessible, and responsive portfolio experiences.

## � Project Overview

### What is this project?

This is a **fully-featured personal portfolio website** designed to showcase professional work, skills, certifications, and experience. It serves as a single-page application (SPA) where visitors can learn about a professional profile and view projects in an interactive, animated interface.

### Who is it for?

- **Developers & Designers** looking to build a professional online presence
- **Career changers** showcasing their transition and new skills
- **Freelancers** displaying portfolio work and services
- **Students** building projects to demonstrate learning outcomes

### Key Components

The portfolio includes several modular components:

1. **Header** - Navigation bar with portfolio branding
2. **Hero Section** - Eye-catching introduction with call-to-action
3. **About** - Personal/professional bio and background
4. **Experience** - Career timeline and professional roles
5. **Skills** - Technical abilities and expertise areas
6. **Projects** - Portfolio showcase with project descriptions and links
7. **Certifications** - Credentials and professional certifications
8. **Contact** - Contact form or contact details
9. **Footer** - Social links and additional navigation

Each component is:

- **Type-safe**: Built with TypeScript for compile-time error prevention
- **Tested**: Unit tests ensure component functionality and reliability
- **Animated**: Smooth transitions using Framer Motion for better UX
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: Semantic HTML and WCAG guidelines for inclusive design

### How it works

1. **Development** - Edit components in `src/components/` and see changes instantly with Vite HMR
2. **Building** - TypeScript compiler validates all code, then Vite bundles for production
3. **Deployment** - Static files are uploaded to Vercel, served globally via CDN
4. **User Experience** - Visitors browse your portfolio with instant page loads and smooth animations

### Why this tech stack?

- **React** - Component-based UI with reusable patterns
- **TypeScript** - Catch bugs before production, better IDE support
- **Vite** - 10x faster builds than traditional bundlers (webpack)
- **Tailwind CSS** - Utility-first styling for rapid, consistent UI development
- **Framer Motion** - Production-ready animations without heavy libraries
- **Jest + Testing Library** - Comprehensive testing to ensure quality

## �🚀 Features

- Fully responsive single-page portfolio layout
- Smooth animations using `framer-motion`
- Type-safe React development with `TypeScript`
- Fast local development and production builds with `Vite`
- CSS styling with Tailwind CSS utilities
- Unit testing powered by `Jest` and `React Testing Library`
- Vercel-compatible static deployment

## 🧰 Tech Stack

- `React` 19
- `TypeScript` 6
- `Vite` 8
- `Tailwind CSS` 3
- `Framer Motion`
- `Jest` + `@testing-library/react`
- `ESLint`

## 📦 Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Run production build

```bash
npm run build
```

### Preview production build locally

```bash
npm run preview
```

### Run tests

```bash
npm test
```

## 📁 Project Structure

- `src/` - application source code
- `src/components/` - reusable UI components for portfolio sections
- `public/` - static assets
- `tsconfig.app.json` - TypeScript app configuration
- `vite.config.ts` - Vite build configuration
- `vercel.json` - Vercel deployment settings

## 🌐 Deployment

### Vercel

This project is optimized for deployment on [Vercel](https://vercel.com), a zero-config platform for modern web applications.

#### Automatic Deployments

- Pushes to the `develop` branch trigger automatic builds and previews
- Production deployments can be configured via Vercel dashboard settings
- GitHub webhook integration ensures every commit is deployed automatically

#### Build Configuration

The `vercel.json` file defines the deployment behavior:

```json
{
  "version": 3,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

- Uses `@vercel/static-build` to compile the project
- Output directory: `dist/` (Vite build output)
- Single-page app routing: all paths redirect to `index.html` for client-side routing

#### Build Process on Vercel

1. Installs dependencies: `npm install`
2. Compiles TypeScript: `tsc -p tsconfig.app.json`
3. Builds with Vite: `vite build`
4. Serves static files from `dist/`

#### Environment Requirements

- **Node.js**: 20+ (configured in `package.json` engines field)
- **npm**: 10+

#### Vercel Dashboard Setup

1. Connect your GitHub repository to Vercel
2. Select the `develop` branch as the deployment source (or configure as needed)
3. Framework preset: auto-detected as Vite
4. Build command: `npm run build`
5. Output directory: `dist`

#### Troubleshooting Deployments

**Build fails with TypeScript errors:**

- Ensure `tsconfig.app.json` is included in project references
- Verify `allowImportingTsExtensions: true` is set in compiler options
- Check that all CSS imports are declared in `src/types.d.ts`

**CSS not loading on production:**

- Vite automatically generates CSS bundles during build
- CSS modules are declared in `src/types.d.ts` for TypeScript support
- Verify no CSS import errors in the build log

**App not rendering at deploy URL:**

- Confirm `vercel.json` routes all requests to `index.html`
- Check browser console for JavaScript errors
- Verify API calls (if any) use correct URLs for production environment

#### Deploy Manually

To trigger a manual redeploy from Vercel dashboard:

1. Go to your Vercel project settings
2. Click "Deployments" tab
3. Select the desired commit and click "Redeploy"

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel --prod  # Deploy to production
vercel          # Deploy to preview
```

#### Preview Deployments

Each push to GitHub automatically creates a preview deployment with a unique URL. Share this URL with collaborators before merging to production.

## ✨ Notes

- Ensure `node` 20+ is used for compatibility with the current build setup
- CSS imports are typed using a local declaration file for TypeScript support

## 📬 Contact

For questions or collaboration, connect via GitHub or include your own contact details here.
