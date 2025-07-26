# SCSS Modules and Advanced Styling Guide

This guide documents the implementation of advanced styling using SCSS modules and Tailwind CSS's `@apply` directive for the Assemble landing page project.

## 🎨 Architecture Overview

The styling system is organized into three main layers:

1. **Global Utilities** (`styles/utilities.scss`) - Reusable utility classes and mixins
2. **Component Modules** (`components/ui/*.module.scss`) - Component-specific styles
3. **Page Modules** (`app/*.module.scss`) - Page-specific styles

## 📁 File Structure

```
styles/
├── utilities.scss              # Global utilities and mixins
components/ui/
├── ErrorPage.tsx              # Reusable error page component
├── ErrorPage.module.scss      # Component-specific styles
app/
├── not-found.tsx              # 404 page implementation
└── not-found.module.scss      # Page-specific styles (legacy)
```

## 🛠️ Key Features

### 1. SCSS Modules with Tailwind Integration

- **SCSS Modules**: Scoped styling to prevent CSS conflicts
- **Tailwind @apply**: Leverages Tailwind's utility classes in SCSS
- **Custom Properties**: Uses Tailwind's theme function for consistent values

### 2. Advanced Animations

- **Staggered Animations**: Sequential element animations
- **Interactive Effects**: Hover states with transforms and transitions
- **Accessibility**: Respects `prefers-reduced-motion` preference

### 3. Responsive Design

- **Mobile-First**: Responsive breakpoints using Tailwind's system
- **Flexible Layouts**: Adaptive component sizing and spacing
- **Touch-Friendly**: Optimized for mobile interactions

### 4. Accessibility Features

- **High Contrast**: Enhanced visibility for accessibility
- **Focus States**: Clear focus indicators
- **Screen Reader**: Proper semantic structure

## 🎯 Usage Examples

### Basic Error Page

```tsx
import ErrorPage from '../components/ui/ErrorPage';

export default function NotFound() {
  return (
    <ErrorPage
      errorCode="404"
      title="Page Not Found"
      description="Custom error message"
    />
  );
}
```

### Custom Error Page

```tsx
import ErrorPage from '../components/ui/ErrorPage';

export default function CustomError() {
  return (
    <ErrorPage
      errorCode="500"
      title="Server Error"
      description="Something went wrong on our end"
      primaryAction={{
        label: 'Try Again',
        onClick: () => window.location.reload()
      }}
      secondaryAction={{
        label: 'Contact Support',
        href: '/contact'
      }}
      showDecorativeElements={false}
    >
      <div className="mt-4 text-sm text-gray-600">
        Error ID: {errorId}
      </div>
    </ErrorPage>
  );
}
```

## 🎨 SCSS Utilities

### Mixins

```scss
// Flexbox utilities
@mixin flex-center {
  @apply flex items-center justify-center;
}

@mixin flex-between {
  @apply flex items-center justify-between;
}

// Button base styles
@mixin button-base {
  @apply inline-flex items-center gap-figma-sm px-figma-xl py-figma-md font-manrope font-semibold rounded-figma-lg transition-all duration-300;
}
```

### Utility Classes

```scss
// Layout utilities
.container-figma {
  @apply max-w-figma-container mx-auto px-figma-lg;
}

// Typography utilities
.heading-primary {
  @apply text-figma-2xl font-manrope font-bold text-text-heading;
}

// Button utilities
.btn-primary {
  @include button-base;
  @apply bg-accent-1 text-text-white hover:bg-accent-3 hover:text-text-heading hover:scale-105 hover:shadow-lg;
}
```

## 🎭 Animation System

### Keyframe Animations

```scss
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Animation Classes

```scss
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out;
}

.animate-bounce-in {
  animation: bounceIn 1s ease-out;
}
```

## 📱 Responsive Design

### Breakpoint System

```scss
// Mobile-first approach
@media (max-width: 768px) {
  .errorNumber .digit {
    @apply text-figma-28;
  }
  
  .actions {
    @apply flex-col;
  }
}
```

### Responsive Utilities

```scss
.text-responsive {
  @apply text-figma-base sm:text-figma-lg lg:text-figma-xl;
}

.padding-responsive {
  @apply px-figma-sm py-figma-md sm:px-figma-lg sm:py-figma-xl;
}
```

## ♿ Accessibility

### High Contrast Mode

```scss
@media (prefers-contrast: high) {
  .floatingShape {
    @apply opacity-60;
    border: 2px solid currentColor;
  }
}
```

### Reduced Motion

```scss
@media (prefers-reduced-motion: reduce) {
  .digit,
  .title,
  .description,
  .actions {
    animation: none;
  }
}
```

### Focus States

```scss
.focus-visible {
  @apply focus:outline-none focus:ring-2 focus:ring-accent-3 focus:ring-offset-2;
}
```

## 🎨 Color System

The project uses a custom color palette defined in `tailwind.config.ts`:

```typescript
colors: {
  'accent': {
    1: '#5C4F3A', // Primary accent
    3: '#AAE8FD', // Secondary accent
  },
  'background': {
    1: '#461A4C', // Primary background
    2: '#FFFFFF', // Secondary background
    3: '#EDEDED', // Tertiary background
    4: '#AAE8FD', // Quaternary background
  },
  'text': {
    'heading': '#394508', // Heading text
    'paragraph': '#777777', // Body text
  }
}
```

## 🔧 Development Workflow

### 1. Creating New Components

1. Create component file: `components/ui/MyComponent.tsx`
2. Create SCSS module: `components/ui/MyComponent.module.scss`
3. Import utilities: `@import '../../styles/utilities.scss';`
4. Use `@apply` for Tailwind classes
5. Add component-specific styles

### 2. Adding New Utilities

1. Add to `styles/utilities.scss`
2. Use `@layer components` for component classes
3. Use `@layer utilities` for utility classes
4. Document in this guide

### 3. Best Practices

- **Consistency**: Use predefined spacing and typography values
- **Modularity**: Keep styles scoped to components
- **Performance**: Minimize CSS bundle size
- **Accessibility**: Always consider accessibility features
- **Maintainability**: Use meaningful class names and comments

## 🚀 Performance Considerations

### CSS Optimization

- **SCSS Modules**: Automatic CSS scoping
- **Tailwind Purge**: Unused styles are removed in production
- **Critical CSS**: Inline critical styles for faster rendering

### Animation Performance

- **GPU Acceleration**: Use `transform` and `opacity` for animations
- **Reduced Motion**: Respect user preferences
- **Efficient Keyframes**: Minimize layout thrashing

## 🔍 Troubleshooting

### Common Issues

1. **Styles Not Applying**: Check SCSS module import path
2. **Tailwind Classes Missing**: Ensure `@apply` is used correctly
3. **Animation Issues**: Verify keyframe definitions
4. **Responsive Problems**: Check breakpoint values

### Debug Tools

- **Browser DevTools**: Inspect computed styles
- **Tailwind CSS IntelliSense**: VS Code extension for autocomplete
- **SCSS Compiler**: Check for compilation errors

## 📚 Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [SCSS Documentation](https://sass-lang.com/documentation)
- [CSS Modules Documentation](https://github.com/css-modules/css-modules)
- [Next.js Styling Guide](https://nextjs.org/docs/basic-features/built-in-css-support)

## 🤝 Contributing

When adding new styles:

1. Follow the established patterns
2. Use the predefined design tokens
3. Add appropriate accessibility features
4. Test across different devices and browsers
5. Update this documentation

---

This guide serves as a comprehensive reference for the SCSS modules and advanced styling implementation in the Assemble landing page project. 