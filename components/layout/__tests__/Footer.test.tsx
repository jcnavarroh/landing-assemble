import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Footer from '../Footer';
import { Footer as FooterType } from '../../../types';

// Mock data for the Footer component
const mockFooterData: FooterType = {
  footer_title: "TestCorp Inc.",
  contact_links: [
    { item: { title: "Contact Us", url: "/contact", target: "_self" } },
    { item: { title: "Twitter", url: "https://twitter.com", target: "_blank" } },
    { item: { title: "LinkedIn", url: "https://linkedin.com", target: "_blank" } }
  ]
};

describe('Footer Component', () => {
  test('renders nothing if no data is provided', () => {
    const { container } = render(<Footer data={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });

  describe('Desktop Footer', () => {
    test('renders footer title and contact links', () => {
      render(<Footer data={mockFooterData} />);
      const desktopFooter = screen.getByTestId('desktop-footer');

      // Check for footer title
      const titleElement = within(desktopFooter).getByText(mockFooterData.footer_title);
      expect(titleElement).toBeInTheDocument();

      // Check for contact links
      mockFooterData.contact_links.forEach(link => {
        const linkElement = within(desktopFooter).getByText(link.item.title);
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', link.item.url);
        expect(linkElement).toHaveAttribute('target', link.item.target);
      });
    });
  });

  describe('Mobile Footer', () => {
    test('renders footer title and contact links', () => {
      render(<Footer data={mockFooterData} />);
      const mobileFooter = screen.getByTestId('mobile-footer');

      // Check for footer title
      const titleElement = within(mobileFooter).getByText(mockFooterData.footer_title);
      expect(titleElement).toBeInTheDocument();

      // Check for contact links
      mockFooterData.contact_links.forEach(link => {
        const linkElement = within(mobileFooter).getByText(link.item.title);
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', link.item.url);
      });
    });
  });
}); 