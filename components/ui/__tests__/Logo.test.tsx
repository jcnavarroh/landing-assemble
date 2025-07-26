import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from '../Logo';

describe('Logo Component', () => {
  test('renders the logo with the correct text', () => {
    render(<Logo />);
    const linkElement = screen.getByRole('link');
    // Check for "Assemble" text with "A" inside a span
    expect(linkElement).toHaveTextContent('Assemble');
    const spanElement = screen.getByText('A');
    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveClass('text-blue-600');
  });

  test('renders as a link to the homepage', () => {
    render(<Logo />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/');
  });

  test('applies medium size class by default', () => {
    render(<Logo />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveClass('text-xl');
  });

  test('applies small size class when specified', () => {
    render(<Logo size="small" />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveClass('text-lg');
  });

  test('applies large size class when specified', () => {
    render(<Logo size="large" />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveClass('text-2xl');
  });

  test('applies additional custom classes', () => {
    render(<Logo className="custom-class" />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveClass('custom-class');
  });
}); 