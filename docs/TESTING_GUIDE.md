# Testing Guide - Assemble Landing Page

This guide provides comprehensive information about the testing implementation in the Assemble landing page project, including unit tests, integration tests, accessibility testing, and best practices.

## 🧪 Testing Overview

The project implements a robust testing strategy using Jest and React Testing Library, ensuring code quality, reliability, and accessibility compliance.

### Testing Stack

- **Jest**: JavaScript testing framework
- **React Testing Library**: Component testing utilities
- **Jest-Axe**: Accessibility testing
- **MSW**: API mocking for integration tests

## 📁 Test Structure

```
components/
├── layout/
│   └── __tests__/
│       ├── Header.test.tsx
│       └── Footer.test.tsx
├── sections/
│   └── __tests__/
│       ├── Hero.test.tsx
│       ├── FirstClass.test.tsx
│       └── Reliable.test.tsx
└── ui/
    └── __tests__/
        ├── Button.test.tsx
        ├── Logo.test.tsx
        ├── ErrorPage.test.tsx
        ├── LoadingComponent.test.tsx
        └── ErrorComponent.test.tsx
```

## ⚙️ Jest Configuration

### jest.config.js

```javascript
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    'app/**/*.{ts,tsx}',
    'services/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testMatch: [
    '<rootDir>/**/__tests__/**/*.{ts,tsx}',
    '<rootDir>/**/*.{test,spec}.{ts,tsx}',
  ],
};
```

### jest.setup.ts

```typescript
import '@testing-library/jest-dom';
import 'jest-axe/extend-expect';

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    };
  },
}));

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

// Global test utilities
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));
```

## 🧩 Component Testing

### Basic Component Test

```typescript
// components/ui/__tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('renders as disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

### ErrorPage Component Test

```typescript
// components/ui/__tests__/ErrorPage.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import ErrorPage from '../ErrorPage';

expect.extend(toHaveNoViolations);

describe('ErrorPage', () => {
  it('renders with default props', () => {
    render(<ErrorPage />);
    
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    expect(screen.getByText(/page you're looking for/)).toBeInTheDocument();
  });

  it('renders with custom error code', () => {
    render(<ErrorPage errorCode="500" />);
    expect(screen.getByText('500')).toBeInTheDocument();
  });

  it('renders with custom title and description', () => {
    render(
      <ErrorPage
        title="Custom Error"
        description="Custom error message"
      />
    );
    
    expect(screen.getByText('Custom Error')).toBeInTheDocument();
    expect(screen.getByText('Custom error message')).toBeInTheDocument();
  });

  it('handles primary action with href', () => {
    render(
      <ErrorPage
        primaryAction={{
          label: 'Go Home',
          href: '/'
        }}
      />
    );
    
    const link = screen.getByRole('link', { name: /go home/i });
    expect(link).toHaveAttribute('href', '/');
  });

  it('handles primary action with onClick', () => {
    const mockOnClick = jest.fn();
    render(
      <ErrorPage
        primaryAction={{
          label: 'Try Again',
          onClick: mockOnClick
        }}
      />
    );
    
    fireEvent.click(screen.getByRole('button', { name: /try again/i }));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('handles secondary action', () => {
    const mockOnClick = jest.fn();
    render(
      <ErrorPage
        secondaryAction={{
          label: 'Go Back',
          onClick: mockOnClick
        }}
      />
    );
    
    fireEvent.click(screen.getByRole('button', { name: /go back/i }));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('renders decorative elements by default', () => {
    render(<ErrorPage />);
    const decorativeElements = screen.getByTestId('decorative-elements');
    expect(decorativeElements).toBeInTheDocument();
  });

  it('hides decorative elements when showDecorativeElements is false', () => {
    render(<ErrorPage showDecorativeElements={false} />);
    expect(screen.queryByTestId('decorative-elements')).not.toBeInTheDocument();
  });

  it('renders additional content when provided', () => {
    render(
      <ErrorPage>
        <div data-testid="additional-content">Additional content</div>
      </ErrorPage>
    );
    
    expect(screen.getByTestId('additional-content')).toBeInTheDocument();
  });
});
```

## ♿ Accessibility Testing

### Automated Accessibility Testing

```typescript
// components/ui/__tests__/ErrorPage.test.tsx
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

### Manual Accessibility Testing Checklist

```typescript
// Manual testing checklist for accessibility
describe('Manual Accessibility Testing', () => {
  it('should pass manual accessibility checks', () => {
    // This test serves as a checklist for manual testing
    const manualChecks = [
      '✓ All interactive elements are keyboard accessible',
      '✓ Focus indicators are visible and clear',
      '✓ Color contrast meets WCAG AA standards',
      '✓ Screen reader announces content correctly',
      '✓ Heading hierarchy is logical',
      '✓ Alt text is provided for images',
      '✓ Form labels are properly associated',
      '✓ Error messages are announced to screen readers',
    ];
    
    expect(manualChecks).toHaveLength(8);
  });
});
```

## 🔗 Integration Testing

### API Integration Tests

```typescript
// services/__tests__/api.test.ts
import { api } from '../api';

// Mock fetch
global.fetch = jest.fn();

describe('API Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches home page data successfully', async () => {
    const mockData = {
      id: 1,
      title: { rendered: 'Home Page' },
      acf: {
        header: { title: 'Header Title' },
        footer: { title: 'Footer Title' },
      },
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => [mockData],
    });

    const result = await api.getHomePage();
    
    expect(result.error).toBeNull();
    expect(result.data).toEqual([mockData]);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('/wp-json/wp/v2/pages')
    );
  });

  it('handles API errors gracefully', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    const result = await api.getHomePage();
    
    expect(result.error).toBe('Network error');
    expect(result.data).toBeNull();
  });

  it('handles empty response', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    const result = await api.getHomePage();
    
    expect(result.error).toBe('No data available');
    expect(result.data).toEqual([]);
  });
});
```

### Component Integration Tests

```typescript
// components/layout/__tests__/Header.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import Header from '../Header';
import { api } from '../../../services/api';

// Mock the API
jest.mock('../../../services/api');

describe('Header Integration', () => {
  it('renders header with data from API', async () => {
    const mockHeaderData = {
      title: 'Test Header',
      logo: { url: '/test-logo.png', alt: 'Test Logo' },
      navigation: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
      ],
    };

    (api.getHomePage as jest.Mock).mockResolvedValue({
      data: [{ acf: { header: mockHeaderData } }],
      error: null,
    });

    render(<Header data={mockHeaderData} />);

    await waitFor(() => {
      expect(screen.getByText('Test Header')).toBeInTheDocument();
      expect(screen.getByAltText('Test Logo')).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    });
  });

  it('handles missing header data gracefully', () => {
    render(<Header data={undefined} />);
    
    // Should render with default/fallback content
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
```

## 📊 Test Coverage

### Coverage Configuration

```javascript
// jest.config.js - Coverage settings
collectCoverageFrom: [
  'components/**/*.{ts,tsx}',
  'app/**/*.{ts,tsx}',
  'services/**/*.{ts,tsx}',
  '!**/*.d.ts',
  '!**/node_modules/**',
  '!**/__tests__/**',
  '!**/coverage/**',
],
coverageThreshold: {
  global: {
    branches: 80,
    functions: 80,
    lines: 80,
    statements: 80,
  },
},
coverageReporters: ['text', 'lcov', 'html'],
```

### Coverage Commands

```bash
# Run tests with coverage
npm run test:coverage

# Run tests with coverage and watch mode
npm run test:coverage:watch

# Generate coverage report
npm run test:report
```

## 🚀 Running Tests

### Available Scripts

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:coverage:watch": "jest --coverage --watch",
    "test:ci": "jest --ci --coverage --watchAll=false",
    "test:a11y": "jest --testPathPattern=.*\\.a11y\\.test\\.(ts|tsx)$",
    "test:unit": "jest --testPathPattern=.*\\.test\\.(ts|tsx)$",
    "test:integration": "jest --testPathPattern=.*\\.integration\\.test\\.(ts|tsx)$"
  }
}
```

### Test Execution

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- ErrorPage.test.tsx

# Run tests matching a pattern
npm test -- --testNamePattern="ErrorPage"

# Run tests in CI mode
npm run test:ci
```

## 🎯 Testing Best Practices

### Component Testing Guidelines

1. **Test Behavior, Not Implementation**
   ```typescript
   // ✅ Good - Test what the user sees
   expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
   
   // ❌ Bad - Test implementation details
   expect(component.state.isVisible).toBe(true);
   ```

2. **Use Semantic Queries**
   ```typescript
   // ✅ Good - Use semantic queries
   screen.getByRole('button', { name: /submit/i });
   screen.getByLabelText('Email address');
   screen.getByPlaceholderText('Enter your email');
   
   // ❌ Bad - Use non-semantic queries
   screen.getByTestId('submit-button');
   ```

3. **Test User Interactions**
   ```typescript
   // ✅ Good - Test user interactions
   fireEvent.click(screen.getByRole('button'));
   fireEvent.change(screen.getByRole('textbox'), {
     target: { value: 'test@example.com' }
   });
   ```

4. **Test Error States**
   ```typescript
   it('shows error message when form is invalid', () => {
     render(<ContactForm />);
     
     fireEvent.click(screen.getByRole('button', { name: /submit/i }));
     
     expect(screen.getByText(/email is required/i)).toBeInTheDocument();
   });
   ```

### Accessibility Testing Guidelines

1. **Automated Testing**
   ```typescript
   it('should not have accessibility violations', async () => {
     const { container } = render(<Component />);
     const results = await axe(container);
     expect(results).toHaveNoViolations();
   });
   ```

2. **Keyboard Navigation**
   ```typescript
   it('supports keyboard navigation', () => {
     render(<Component />);
     
     const firstButton = screen.getByRole('button');
     const secondButton = screen.getByRole('button', { name: /second/i });
     
     firstButton.focus();
     expect(firstButton).toHaveFocus();
     
     fireEvent.keyDown(document, { key: 'Tab' });
     expect(secondButton).toHaveFocus();
   });
   ```

3. **Screen Reader Support**
   ```typescript
   it('announces content to screen readers', () => {
     render(<Component />);
     
     expect(screen.getByRole('alert')).toHaveTextContent('Error message');
     expect(screen.getByLabelText('Search')).toBeInTheDocument();
   });
   ```

## 🔧 Debugging Tests

### Common Issues and Solutions

1. **Async Testing**
   ```typescript
   // ✅ Good - Use waitFor for async operations
   await waitFor(() => {
     expect(screen.getByText('Loaded content')).toBeInTheDocument();
   });
   ```

2. **Mocking External Dependencies**
   ```typescript
   // Mock Next.js router
   jest.mock('next/router', () => ({
     useRouter: () => ({
       push: jest.fn(),
       pathname: '/',
     }),
   }));
   ```

3. **Testing with Context**
   ```typescript
   const renderWithContext = (component: React.ReactElement) => {
     return render(
       <ThemeProvider>
         {component}
       </ThemeProvider>
     );
   };
   ```

## 📈 Continuous Integration

### GitHub Actions Workflow

```yaml
# .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run test:ci
      - run: npm run test:a11y
      - run: npm run build
```

This comprehensive testing guide ensures that the Assemble landing page project maintains high code quality, reliability, and accessibility standards through thorough testing practices. 