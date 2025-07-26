# Documentation - Assemble Landing Page

Welcome to the comprehensive documentation for the Assemble Landing Page project. This documentation provides detailed information about the project's architecture, implementation, testing, and accessibility features.

## 📚 Documentation Index

### 🎨 Styling and Design
- **[SCSS Modules Guide](./SCSS_MODULES_GUIDE.md)**: Comprehensive guide for SCSS modules and advanced styling implementation
  - SCSS Modules architecture
  - Tailwind CSS integration with @apply directive
  - Custom mixins and utilities
  - Advanced animations and responsive design
  - Component-scoped styling best practices

- **[Figma Style Guide](./FIGMA_STYLE_GUIDE.md)**: Complete reference for Figma design tokens and styling system
  - Figma-specific color palette and typography
  - Custom spacing and dimension tokens
  - Component classes and responsive utilities
  - Design system implementation guidelines
  - Pixel-perfect styling best practices

### 🧪 Testing Implementation
- **[Testing Guide](./TESTING_GUIDE.md)**: Detailed testing implementation and best practices
  - Jest configuration and setup
  - Component testing with React Testing Library
  - Accessibility testing with Jest-Axe
  - Integration testing strategies
  - Test coverage and reporting

### ♿ Accessibility Features
- **[Accessibility Guide](./ACCESSIBILITY_GUIDE.md)**: WCAG 2.1 AA compliance and accessibility features
  - WCAG 2.1 AA standards implementation
  - Keyboard navigation support
  - Screen reader compatibility
  - Color contrast and visual accessibility
  - Mobile accessibility considerations

## 🚀 Quick Start

### Project Overview
The Assemble Landing Page is a modern, responsive web application built with:
- **Next.js 15** (App Router)
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **SCSS Modules** for component-scoped styles
- **Jest & React Testing Library** for testing
- **WordPress Headless CMS** for content management

### Key Features
- ✅ **Advanced 404 Error Page** with custom animations
- ✅ **SCSS Modules** with Tailwind integration
- ✅ **Comprehensive Testing** with accessibility checks
- ✅ **WCAG 2.1 AA Compliance** for accessibility
- ✅ **Responsive Design** with mobile-first approach
- ✅ **Performance Optimized** with Next.js best practices

## 📁 Project Structure

```
/
├── app/                  # Next.js App Router
│   ├── (pages)/          # Page routes
│   ├── not-found.tsx     # Custom 404 page
│   └── layout.tsx        # Root layout
├── components/           # React components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── ui/               # UI components
├── styles/               # Global SCSS utilities
├── docs/                 # Documentation
│   ├── README.md         # This file
│   ├── SCSS_MODULES_GUIDE.md
│   ├── FIGMA_STYLE_GUIDE.md
│   ├── TESTING_GUIDE.md
│   └── ACCESSIBILITY_GUIDE.md
└── ...                   # Configuration files
```

## 🎯 Development Workflow

### 1. Setup
```bash
npm install
npm run dev
```

### 2. Development
- Follow the SCSS Modules guide for styling
- Implement tests following the Testing guide
- Ensure accessibility compliance using the Accessibility guide

### 3. Testing
```bash
npm test                    # Run all tests
npm run test:coverage       # Run with coverage
npm run test:a11y          # Run accessibility tests
```

### 4. Building
```bash
npm run build              # Production build
npm start                  # Start production server
```

### 5. CI/CD Pipeline
```bash
# Workflow automatically runs on:
# - Push to main/develop branches
# - Pull requests to main branch

# Manual workflow trigger:
# 1. Go to GitHub Actions tab
# 2. Select "CI Next.js Landing Page"
# 3. Click "Run workflow"
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_WORDPRESS_API_URL=your_wordpress_api_url
NEXT_PUBLIC_SITE_URL=your_site_url
```

### Key Configuration Files
- `tailwind.config.ts` - Tailwind CSS configuration
- `jest.config.js` - Jest testing configuration
- `next.config.mjs` - Next.js configuration
- `tsconfig.json` - TypeScript configuration

## 📊 Quality Assurance

### Code Quality
- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **Husky** for pre-commit hooks

### Testing Coverage
- **Unit Tests**: Component and utility testing
- **Integration Tests**: API and component integration
- **Accessibility Tests**: WCAG compliance verification
- **E2E Tests**: End-to-end user workflows

### Performance
- **Lighthouse** audits for performance
- **Core Web Vitals** optimization
- **Bundle analysis** for size optimization
- **Image optimization** with Next.js Image component

### CI/CD Pipeline
- **GitHub Actions** for automated testing and deployment
- **Code quality checks** with ESLint and TypeScript
- **Automated testing** with Jest and React Testing Library
- **Build verification** for production readiness

## 🤝 Contributing

When contributing to this project:

1. **Follow the established patterns** in the documentation
2. **Use the predefined design tokens** from Tailwind config
3. **Add appropriate accessibility features** following the Accessibility guide
4. **Write tests for new components** following the Testing guide
5. **Test across different devices and browsers**
6. **Update documentation** as needed

### Code Review Checklist
- [ ] Code follows TypeScript best practices
- [ ] Components are properly tested
- [ ] Accessibility requirements are met
- [ ] SCSS modules are used correctly
- [ ] Performance is not degraded
- [ ] Documentation is updated

## 📈 Monitoring and Maintenance

### Regular Tasks
- [ ] Update dependencies regularly
- [ ] Run accessibility audits
- [ ] Review and update tests
- [ ] Monitor performance metrics
- [ ] Update documentation

### Performance Monitoring
- **Core Web Vitals** tracking
- **Error monitoring** and reporting
- **User analytics** and feedback
- **Accessibility compliance** monitoring

## 📞 Support

For questions or issues related to:

- **Styling and SCSS**: Refer to [SCSS Modules Guide](./SCSS_MODULES_GUIDE.md)
- **Figma Design System**: Refer to [Figma Style Guide](./FIGMA_STYLE_GUIDE.md)
- **Testing**: Refer to [Testing Guide](./TESTING_GUIDE.md)
- **Accessibility**: Refer to [Accessibility Guide](./ACCESSIBILITY_GUIDE.md)
- **CI/CD Pipeline**: Check the main [README.md](../README.md#continuous-integration--deployment-cicd)
- **General Issues**: Check the main [README.md](../README.md)

---

This documentation is maintained as part of the Assemble Landing Page project and should be updated as the project evolves. 