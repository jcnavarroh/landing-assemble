# Accessibility Guide - Assemble Landing Page

This guide provides comprehensive information about accessibility implementation in the Assemble landing page project, including WCAG 2.1 AA compliance, testing strategies, and best practices.

## ♿ Accessibility Overview

The project is designed to meet WCAG 2.1 AA standards, ensuring that all users, including those with disabilities, can access and interact with the application effectively.

### Accessibility Standards

- **WCAG 2.1 AA**: Web Content Accessibility Guidelines 2.1 Level AA
- **Section 508**: Federal accessibility requirements
- **ADA Compliance**: Americans with Disabilities Act compliance

## 🎯 Key Accessibility Features

### 1. Semantic HTML Structure

```tsx
// Proper heading hierarchy and semantic elements
<main id="main-content" role="main">
  <h1>Page Title</h1>
  <section aria-labelledby="section-title">
    <h2 id="section-title">Section Title</h2>
    <article>
      <h3>Article Title</h3>
      <p>Article content...</p>
    </article>
  </section>
</main>
```

### 2. Keyboard Navigation

```scss
// Focus states for all interactive elements
.interactive-element {
  &:focus-visible {
    outline: 2px solid #AAE8FD;
    outline-offset: 4px;
    border-radius: 5px;
  }
  
  &:focus {
    outline: none;
  }
}
```

### 3. Screen Reader Support

```tsx
// ARIA labels and descriptions
<button
  aria-label="Go back to previous page"
  aria-describedby="back-button-desc"
  onClick={handleGoBack}
>
  Go Back
</button>
<span id="back-button-desc" className="sr-only">
  Navigate to the previous page in your browsing history
</span>
```

### 4. Color and Contrast

```scss
// High contrast mode support
@media (prefers-contrast: high) {
  .floatingShape {
    opacity: 0.6;
    border: 2px solid currentColor;
  }
  
  .primaryButton,
  .secondaryButton {
    border: 2px solid;
  }
  
  .title::after {
    height: 4px;
  }
}
```

### 5. Reduced Motion Support

```scss
// Respect user motion preferences
@media (prefers-reduced-motion: reduce) {
  .digit,
  .title,
  .description,
  .actions,
  .floatingShape,
  .floatingShape::before {
    animation: none;
  }
  
  .primaryButton:hover,
  .secondaryButton:hover {
    transform: none;
  }
  
  .buttonIcon {
    transition: none;
  }
  
  .title::after {
    animation: none;
    width: 60px;
  }
}
```

## 🧪 Accessibility Testing

### Automated Testing with Jest-Axe

```typescript
// components/ui/__tests__/ErrorPage.test.tsx
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('ErrorPage Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(<ErrorPage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('supports keyboard navigation', () => {
    render(<ErrorPage />);
    
    // Test tab navigation
    const primaryButton = screen.getByRole('link', { name: /go home/i });
    const secondaryButton = screen.getByRole('button', { name: /go back/i });
    
    expect(primaryButton).toHaveFocus();
    
    // Simulate tab navigation
    fireEvent.keyDown(document, { key: 'Tab' });
    expect(secondaryButton).toHaveFocus();
  });

  it('has proper ARIA labels', () => {
    render(<ErrorPage />);
    
    const primaryButton = screen.getByRole('link', { name: /go home/i });
    const secondaryButton = screen.getByRole('button', { name: /go back/i });
    
    expect(primaryButton).toHaveAccessibleName('Go Home');
    expect(secondaryButton).toHaveAccessibleName('Go Back');
  });

  it('has proper heading hierarchy', () => {
    render(<ErrorPage />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Page Not Found');
  });
});
```

### Manual Testing Checklist

```typescript
// Manual accessibility testing checklist
describe('Manual Accessibility Testing', () => {
  it('should pass manual accessibility checks', () => {
    const manualChecks = [
      '✓ All interactive elements are keyboard accessible',
      '✓ Focus indicators are visible and clear',
      '✓ Color contrast meets WCAG AA standards',
      '✓ Screen reader announces content correctly',
      '✓ Heading hierarchy is logical',
      '✓ Alt text is provided for images',
      '✓ Form labels are properly associated',
      '✓ Error messages are announced to screen readers',
      '✓ Skip links work correctly',
      '✓ Page can be navigated using only keyboard',
      '✓ Content is readable when zoomed to 200%',
      '✓ No keyboard traps exist',
      '✓ Focus order is logical',
      '✓ ARIA attributes are used correctly',
      '✓ Dynamic content changes are announced',
    ];
    
    expect(manualChecks).toHaveLength(15);
  });
});
```

## 🎨 Visual Accessibility

### Color Contrast

```scss
// Color contrast ratios meet WCAG AA standards
// Normal text: 4.5:1 minimum
// Large text: 3:1 minimum

.text-normal {
  color: #394508; // Heading text - 4.5:1 contrast ratio
}

.text-paragraph {
  color: #777777; // Body text - 4.5:1 contrast ratio
}

.text-large {
  color: #5C4F3A; // Large text - 3:1 contrast ratio
  font-size: 18px;
  font-weight: bold;
}
```

### Focus Indicators

```scss
// Clear and visible focus indicators
.focus-visible {
  @apply focus:outline-none focus:ring-2 focus:ring-accent-3 focus:ring-offset-2;
}

// Custom focus styles for specific components
.button {
  &:focus-visible {
    outline: 2px solid #AAE8FD;
    outline-offset: 4px;
    border-radius: 5px;
    box-shadow: 0 0 0 4px rgba(170, 232, 253, 0.3);
  }
}
```

### Skip Links

```tsx
// Skip to main content link
<a href="#main-content" className="skip-link focus-ring">
  Skip to main content
</a>

// CSS for skip link
.skip-link {
  @apply sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-1 focus:text-text-white focus:rounded-figma-md;
}
```

## 🔊 Screen Reader Support

### ARIA Labels and Descriptions

```tsx
// Proper ARIA implementation
<div role="banner" aria-label="Site header">
  <nav aria-label="Main navigation">
    <ul role="menubar">
      <li role="none">
        <a role="menuitem" href="/" aria-current="page">Home</a>
      </li>
    </ul>
  </nav>
</div>

// Form labels and descriptions
<label htmlFor="email" id="email-label">Email Address</label>
<input
  id="email"
  type="email"
  aria-labelledby="email-label"
  aria-describedby="email-help"
  aria-required="true"
/>
<span id="email-help">Enter your email address to receive updates</span>
```

### Live Regions

```tsx
// Announce dynamic content changes
<div aria-live="polite" aria-atomic="true" className="sr-only">
  {notificationMessage}
</div>

// Status updates
<div role="status" aria-live="polite">
  {loadingStatus}
</div>
```

### Image Accessibility

```tsx
// Proper alt text for images
<Image
  src="/logo.png"
  alt="Assemble Logo - Connect, Collaborate, Innovate"
  width={150}
  height={50}
  priority
/>

// Decorative images
<Image
  src="/decoration.png"
  alt=""
  width={100}
  height={100}
  aria-hidden="true"
/>

// Complex images with descriptions
<figure>
  <Image
    src="/chart.png"
    alt="Sales growth chart showing 25% increase from Q1 to Q2"
    width={400}
    height={300}
  />
  <figcaption>
    Quarterly sales performance showing consistent growth
  </figcaption>
</figure>
```

## ⌨️ Keyboard Navigation

### Tab Order

```tsx
// Logical tab order
<div>
  <header>
    <nav>
      <a href="/" tabIndex={0}>Home</a>
      <a href="/about" tabIndex={0}>About</a>
    </nav>
  </header>
  
  <main>
    <h1 tabIndex={0}>Page Title</h1>
    <button tabIndex={0}>Primary Action</button>
    <button tabIndex={0}>Secondary Action</button>
  </main>
</div>
```

### Keyboard Shortcuts

```tsx
// Keyboard event handlers
useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    // Escape key to close modal
    if (event.key === 'Escape' && isModalOpen) {
      closeModal();
    }
    
    // Enter key to activate buttons
    if (event.key === 'Enter' && event.target === activeButton) {
      handleButtonClick();
    }
  };

  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
}, [isModalOpen, activeButton]);
```

### Focus Management

```tsx
// Focus trap for modals
const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isOpen) {
      // Focus first focusable element
      const firstFocusable = modalRef.current?.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as HTMLElement;
      firstFocusable?.focus();
    }
  }, [isOpen]);

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {children}
    </div>
  );
};
```

## 📱 Mobile Accessibility

### Touch Targets

```scss
// Minimum touch target size (44px x 44px)
.touch-target {
  min-width: 44px;
  min-height: 44px;
  padding: 12px;
}

// Spacing between touch targets
.touch-target + .touch-target {
  margin-left: 8px;
}
```

### Gesture Support

```tsx
// Alternative to hover states for touch devices
const [isPressed, setIsPressed] = useState(false);

return (
  <button
    onTouchStart={() => setIsPressed(true)}
    onTouchEnd={() => setIsPressed(false)}
    className={`button ${isPressed ? 'pressed' : ''}`}
  >
    Button Text
  </button>
);
```

## 🔧 Accessibility Tools

### Development Tools

1. **Lighthouse**: Chrome DevTools accessibility audit
2. **axe DevTools**: Browser extension for accessibility testing
3. **WAVE**: Web accessibility evaluation tool
4. **Color Contrast Analyzer**: Verify color contrast ratios

### Testing Commands

```bash
# Run accessibility tests
npm run test:a11y

# Run all tests including accessibility
npm test

# Generate accessibility report
npm run test:coverage
```

### Browser Extensions

- **axe DevTools**: Automated accessibility testing
- **WAVE**: Visual accessibility feedback
- **Color Contrast Analyzer**: Color contrast verification
- **Screen Reader**: Test with NVDA, JAWS, or VoiceOver

## 📋 Accessibility Checklist

### Content Structure

- [ ] Proper heading hierarchy (h1, h2, h3, etc.)
- [ ] Semantic HTML elements (nav, main, section, article)
- [ ] Descriptive page titles
- [ ] Skip links for main content
- [ ] Landmark regions (banner, main, navigation, contentinfo)

### Images and Media

- [ ] Alt text for all images
- [ ] Empty alt="" for decorative images
- [ ] Captions for videos
- [ ] Transcripts for audio content
- [ ] Descriptive text for complex images

### Forms and Interactive Elements

- [ ] Labels for all form controls
- [ ] Error messages are clear and helpful
- [ ] Required fields are marked
- [ ] Form validation feedback
- [ ] Submit buttons are descriptive

### Keyboard Navigation

- [ ] All interactive elements are keyboard accessible
- [ ] Logical tab order
- [ ] Visible focus indicators
- [ ] No keyboard traps
- [ ] Keyboard shortcuts work

### Color and Contrast

- [ ] Color contrast meets WCAG AA standards
- [ ] Information is not conveyed by color alone
- [ ] High contrast mode support
- [ ] Text is readable when zoomed to 200%

### Screen Reader Support

- [ ] ARIA labels and descriptions
- [ ] Live regions for dynamic content
- [ ] Proper ARIA roles
- [ ] Screen reader announces content changes
- [ ] Form labels are properly associated

### Motion and Animation

- [ ] Respects prefers-reduced-motion
- [ ] No auto-playing animations
- [ ] Users can pause, stop, or hide animations
- [ ] Flashing content is avoided

## 🚀 Continuous Accessibility

### Code Review Checklist

- [ ] Accessibility tests pass
- [ ] Manual testing completed
- [ ] Screen reader testing done
- [ ] Keyboard navigation verified
- [ ] Color contrast checked
- [ ] ARIA attributes reviewed

### Monitoring and Maintenance

- [ ] Regular accessibility audits
- [ ] User feedback collection
- [ ] Accessibility testing in CI/CD
- [ ] Documentation updates
- [ ] Training for development team

This comprehensive accessibility guide ensures that the Assemble landing page project maintains the highest standards of accessibility and provides an inclusive experience for all users. 