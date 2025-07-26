import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Reliable from '../components/sections/Reliable';
import FirstClass from '../components/sections/FirstClass';
import ErrorPage from '../components/ui/ErrorPage';
import Button from '../components/ui/Button';
import Logo from '../components/ui/Logo';

expect.extend(toHaveNoViolations);

// Mock data for components
const mockHeaderData = {
  company_name: 'Test Company',
  menu_items: [
    { item: { title: 'Home', url: '/', target: '_self' } },
    { item: { title: 'About', url: '/about', target: '_self' } }
  ],
  contact_links: [
    { item: { title: 'Email', url: 'mailto:test@example.com', target: '_blank' } }
  ]
};

const mockFooterData = {
  footer_title: 'Test Footer',
  contact_links: [
    { item: { title: 'Contact', url: '/contact', target: '_self' } }
  ]
};

const mockHeroData = {
  title: 'Test Hero',
  subtitle: 'Test Subtitle',
  cta_primary: 'Primary CTA',
  cta_secondary: 'Secondary CTA',
  trusted_by: 'Trusted by',
  logos: ['logo1', 'logo2'],
  desktop_image: {
    ID: 1,
    id: 1,
    title: 'Test Image',
    filename: 'test-image.jpg',
    filesize: 1000,
    url: '/test-image.jpg',
    link: '/test-image.jpg',
    alt: 'Test image',
    author: 'test',
    description: 'Test image',
    caption: 'Test image',
    name: 'test-image',
    status: 'inherit',
    uploaded_to: 1,
    date: new Date(),
    modified: new Date(),
    menu_order: 0,
    mime_type: 'image/jpeg',
    type: 'image',
    subtype: 'jpeg',
    icon: 'image',
    width: 800,
    height: 600,
    sizes: {
      thumbnail: '/test-image-thumb.jpg',
      'thumbnail-width': 150,
      'thumbnail-height': 150,
      medium: '/test-image-medium.jpg',
      'medium-width': 300,
      'medium-height': 300,
      medium_large: '/test-image-medium-large.jpg',
      'medium_large-width': 768,
      'medium_large-height': 768,
      large: '/test-image-large.jpg',
      'large-width': 1024,
      'large-height': 1024,
      '1536x1536': '/test-image-1536.jpg',
      '1536x1536-width': 1536,
      '1536x1536-height': 1536,
      '2048x2048': '/test-image-2048.jpg',
      '2048x2048-width': 2048,
      '2048x2048-height': 2048
    }
  }
};

const mockImage = {
  ID: 1,
  id: 1,
  title: 'Test Image',
  filename: 'test.jpg',
  filesize: 1000,
  url: '/test.jpg',
  link: '/test.jpg',
  alt: 'Test',
  author: 'test',
  description: 'Test image',
  caption: 'Test image',
  name: 'test',
  status: 'inherit',
  uploaded_to: 1,
  date: new Date(),
  modified: new Date(),
  menu_order: 0,
  mime_type: 'image/jpeg',
  type: 'image',
  subtype: 'jpeg',
  icon: 'image',
  width: 100,
  height: 100,
  sizes: {
    thumbnail: '/test-thumb.jpg',
    'thumbnail-width': 150,
    'thumbnail-height': 150,
    medium: '/test-medium.jpg',
    'medium-width': 300,
    'medium-height': 300,
    medium_large: '/test-medium-large.jpg',
    'medium_large-width': 768,
    'medium_large-height': 768,
    large: '/test-large.jpg',
    'large-width': 1024,
    'large-height': 1024,
    '1536x1536': '/test-1536.jpg',
    '1536x1536-width': 1536,
    '1536x1536-height': 1536,
    '2048x2048': '/test-2048.jpg',
    '2048x2048-width': 2048,
    '2048x2048-height': 2048
  }
};

const mockReliableData = {
  title: 'Test Reliable',
  image_tile: [
    {
      image: mockImage,
      title: 'Test Title',
      description: 'Test Description'
    }
  ]
};

const mockFirstClassData = {
  title: 'Test First Class',
  image_tile: [
    {
      image: mockImage,
      title: 'Test Title'
    }
  ]
};

describe('Accessibility Tests', () => {
  describe('Header Component', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Header data={mockHeaderData} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have proper heading structure', () => {
      render(<Header data={mockHeaderData} />);
      // Header should not contain h1-h6 elements as it's navigation
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      expect(headings.length).toBe(0);
    });

    it('should have proper navigation landmarks', () => {
      render(<Header data={mockHeaderData} />);
      const nav = document.querySelector('nav');
      expect(nav).toBeInTheDocument();
      expect(nav).toHaveAttribute('role', 'navigation');
    });
  });

  describe('Footer Component', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Footer data={mockFooterData} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have proper contentinfo role', () => {
      render(<Footer data={mockFooterData} />);
      const footer = document.querySelector('footer');
      expect(footer).toBeInTheDocument();
      expect(footer).toHaveAttribute('role', 'contentinfo');
    });
  });

  describe('Hero Component', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Hero data={mockHeroData} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have proper heading hierarchy', () => {
      render(<Hero data={mockHeroData} />);
      const h1 = document.querySelector('h1');
      expect(h1).toBeInTheDocument();
      expect(h1).toHaveTextContent('Test Hero');
    });

    it('should have proper image alt text', () => {
      render(<Hero data={mockHeroData} />);
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        expect(img).toHaveAttribute('alt');
        expect(img.getAttribute('alt')).not.toBe('');
      });
    });
  });

  describe('Reliable Component', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Reliable data={mockReliableData} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have proper heading structure', () => {
      render(<Reliable data={mockReliableData} />);
      const headings = document.querySelectorAll('h2, h3');
      expect(headings.length).toBeGreaterThan(0);
    });
  });

  describe('FirstClass Component', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<FirstClass data={mockFirstClassData} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have proper heading structure', () => {
      render(<FirstClass data={mockFirstClassData} />);
      const headings = document.querySelectorAll('h2, h3');
      expect(headings.length).toBeGreaterThan(0);
    });
  });

  describe('ErrorPage Component', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<ErrorPage />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have proper heading structure', () => {
      render(<ErrorPage />);
      const h1 = document.querySelector('h1');
      expect(h1).toBeInTheDocument();
    });

    it('should have proper button and link accessibility', () => {
      render(<ErrorPage />);
      const buttons = document.querySelectorAll('button');
      const links = document.querySelectorAll('a');
      
      buttons.forEach(button => {
        expect(button).toHaveAttribute('aria-label');
      });
      
      links.forEach(link => {
        expect(link).toHaveAttribute('href');
      });
    });
  });

  describe('Button Component', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Button>Test Button</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have proper button semantics', () => {
      render(<Button>Test Button</Button>);
      const button = document.querySelector('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Test Button');
    });
  });

  describe('Logo Component', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Logo />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have proper link semantics', () => {
      render(<Logo />);
      const link = document.querySelector('a');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/');
      expect(link).toHaveAttribute('aria-label');
    });
  });

  describe('Overall Page Structure', () => {
    it('should have proper landmark structure', () => {
      // Test that main components have proper landmarks
      const { container: headerContainer } = render(<Header data={mockHeaderData} />);
      const { container: footerContainer } = render(<Footer data={mockFooterData} />);
      
      const header = headerContainer.querySelector('header');
      const footer = footerContainer.querySelector('footer');
      
      expect(header).toHaveAttribute('role', 'banner');
      expect(footer).toHaveAttribute('role', 'contentinfo');
    });

    it('should have proper focus management', () => {
      render(<ErrorPage />);
      const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
      expect(focusableElements.length).toBeGreaterThan(0);
      
      // Test that focusable elements are properly accessible
      focusableElements.forEach(element => {
        expect(element).not.toHaveAttribute('tabindex', '-1');
      });
    });
  });
}); 