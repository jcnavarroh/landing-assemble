import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Header from '../Header';
import { Header as HeaderType } from '../../../types';

// Mock data for the Header component
const mockHeaderData: HeaderType = {
  company_name: "TestCorp",
  menu_items: [
    { item: { title: "Home", url: "/", target: "_self" } },
    { item: { title: "About Us", url: "/about", target: "_self" } },
    { item: { title: "Products", url: "/products", target: "_blank" } }
  ],
  contact_links: [
    { item: { title: "Contact", url: "/contact", target: "_self" } },
    { item: { title: "Support", url: "/support", target: "_self" } }
  ]
};

describe('Header Component', () => {
  test('renders fallback data when no data is provided', () => {
    render(<Header data={undefined} />);
    
    // Should render fallback company name (check both desktop and mobile)
    const desktopHeader = screen.getByTestId('desktop-header');
    const mobileHeader = screen.getByTestId('mobile-header');
    
    expect(within(desktopHeader).getByText('Assemble')).toBeInTheDocument();
    expect(within(mobileHeader).getByText('Assemble')).toBeInTheDocument();
    
    // Should render fallback menu items
    expect(screen.getAllByText('Home')).toHaveLength(2); // Desktop and mobile
    expect(screen.getAllByText('About')).toHaveLength(2);
    expect(screen.getAllByText('Services')).toHaveLength(2);
    expect(screen.getAllByText('Contact')).toHaveLength(2);
    
    // Should render fallback contact links
    expect(screen.getAllByText('Email')).toHaveLength(2);
    expect(screen.getAllByText('Phone')).toHaveLength(2);
    expect(screen.getAllByText('LinkedIn')).toHaveLength(2);
    expect(screen.getAllByText('Twitter')).toHaveLength(2);
  });

  describe('Desktop Header', () => {
    test('renders company name and navigation links', () => {
      render(<Header data={mockHeaderData} />);
      const desktopHeader = screen.getByTestId('desktop-header');
      
      // Check for company name within the desktop header
      const companyNameElement = within(desktopHeader).getByText(mockHeaderData.company_name);
      expect(companyNameElement).toBeInTheDocument();
      expect(companyNameElement).toHaveAttribute('href', '/');

      // Check for main menu items within the desktop header
      mockHeaderData.menu_items.forEach(menuItem => {
        const linkElement = within(desktopHeader).getByText(menuItem.item.title);
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', menuItem.item.url);
      });
    });
  });

  describe('Mobile Header', () => {
    test('renders company name', () => {
      render(<Header data={mockHeaderData} />);
      const mobileHeader = screen.getByTestId('mobile-header');
      
      // Check for company name within the mobile header
      const companyNameElement = within(mobileHeader).getByText(mockHeaderData.company_name);
      expect(companyNameElement).toBeInTheDocument();
      expect(companyNameElement).toHaveAttribute('href', '/');
    });

    test('does not render main menu items visibly', () => {
      render(<Header data={mockHeaderData} />);
      const mobileHeader = screen.getByTestId('mobile-header');
      
      // The main menu is hidden on mobile, so we check that the links are not found
      // using queryByText which returns null if not found
      mockHeaderData.menu_items.forEach(menuItem => {
        const linkElement = within(mobileHeader).queryByText(menuItem.item.title);
        // This test is a bit tricky because the elements are in the DOM but hidden by CSS.
        // A better approach for visibility would require a full browser environment.
        // For now, we'll just check they are in the DOM but inside a hidden container.
        if (linkElement) {
          expect(linkElement.closest('div.hidden')).not.toBeNull();
        }
      });
    });
  });
}); 