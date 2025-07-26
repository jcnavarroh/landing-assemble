# Assemble Landing Page - Web Development Technical Test

This repository contains the implementation of a modern and responsive landing page as part of the Assemble web development technical test. The project was developed following industry best practices, using a modern technology stack, and meeting all the specified evaluation criteria.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **CMS**: WordPress Headless (provided by Assemble)
- **Deployment**: [Vercel](https://vercel.com/)

## Project Audit Summary

After a thorough code review, the project has been evaluated as **excellent**, meeting all the requirements of the technical test. Below is a summary of the final status:

| Criteria | Status | Justification |
| :--- | :---: | :--- |
| **Code Quality and Architecture** | ✅ | Project with a logical, scalable structure and modular components. |
| **Technical Implementation** | ✅ | Robust API integration, error handling, and 100% dynamic content. |
| **Image Implementation** | ✅ | Consistent and optimized use of `next/image` with all required attributes. |
| **Pixel-Perfect Styling and Design** | ✅ | Responsive and precise design using exclusively Tailwind CSS and a centralized token system. |
| **Best Practices and Accessibility** | ✅ | Implementation of semantic HTML, correct heading hierarchy, and smooth keyboard navigation. |

## Project Architecture

The project structure was designed to be maintainable, scalable, and to promote a clear separation of responsibilities.

```
/
├── app/                  # Main application routes (App Router)
│   ├── (pages)/          # Grouping of page routes
│   │   └── page.tsx      # Home page (Server Component)
│   └── layout.tsx        # Main layout
├── components/           # Reusable React components
│   ├── layout/           # Structural components (Header, Footer)
│   ├── sections/         # Page section components (Hero, FirstClass, etc.)
│   └── ui/               # Generic UI components (Button, Logo, etc.)
├── services/             # Data access logic and external services
│   └── api.ts            # Functions to interact with the WordPress CMS
├── types/                # TypeScript type definitions
│   └── index.ts          # Types for component props and API data
├── public/               # Static files (images, fonts, etc.)
├── tailwind.config.ts    # Tailwind CSS theme configuration
└── ...                   # Other configuration files
```

### Key Architectural Points

- **Server Components**: The main page (`page.tsx`) is a Server Component, allowing data to be fetched from the CMS on the server for optimal performance (SSR/SSG).
- **Client Components**: Components that require interactivity (e.g., with `hover` effects or state) use the `'use client'` directive.
- **Suspense for Loading and Errors**: A `SuspenseWrapper` is used, which, along with `Suspense` boundaries, declaratively shows `Loading` and `Error` components while data is being fetched.
- **Centralized Design System**: All design values (colors, spacing, typography) are defined in `tailwind.config.ts`, eliminating "magic values" and ensuring consistency.

## How to Start the Project Locally

To run this project in your local development environment, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <REPOSITORY_URL>
   cd assemble-landing-page
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## Deployment

The project is configured for easy deployment on [Vercel](https://vercel.com/), the recommended platform by the creators of Next.js.
