import React from 'react';
import Link from 'next/link';
import { HeaderProps } from '../../types';
import { getHeaderDataWithFallback } from '../../utils/mockData';

const Header: React.FC<HeaderProps> = ({ data }) => {
  // Use fallback data if no data is provided
  const headerData = getHeaderDataWithFallback(data);
  
  // Log warning if using fallback data (only in development)
  if (!data && process.env.NODE_ENV === 'development') {
    console.warn('Header: Using fallback data - API data not available');
  }

  const { menu_items: menuItems, contact_links: contactLinks, company_name: companyName } = headerData;

  return (
    <header className="bg-background-1" role="banner">
      {/* Desktop version */}
      <div data-testid="desktop-header" className="desktop-only flex flex-col items-start px-figma-4xl py-figma-lg gap-figma-4xl w-[1280px] h-[157px] mx-auto">
        {/* Navigation */}
        <nav className="flex flex-row justify-between items-start gap-[49px] w-[858px] h-[23px]" role="navigation" aria-label="Main navigation">
          {/* Logo */}
          <div className="flex flex-row items-center gap-[20px] w-[92px] h-[23px]">
            <Link
              href="/"
              className="w-[92px] h-[23px] font-ibm-plex font-semibold text-[22px] leading-[105.81%] tracking-[-0.02em] capitalize text-background-2 focus-ring"
              aria-label={`${companyName} - Home`}
            >
              {companyName}
            </Link>
          </div>

          {/* Menu items */}
          <div className="flex flex-row items-center gap-figma-3xl">
            {menuItems && menuItems.map((menuItem, index) => (
              <Link
                key={index}
                href={menuItem.item.url}
                target={menuItem.item.target}
                className="text-background-2 font-manrope font-medium text-figma-sm hover:text-gray-200 transition-colors focus-ring"
              >
                {menuItem.item.title}
              </Link>
            ))}
          </div>
        </nav>

        {/* Contact links */}
        <nav className="flex flex-row items-end justify-end w-[1200px] h-[14px] flex-none order-1 flex-grow-0" role="navigation" aria-label="Contact links">
          <div className="flex flex-row items-center gap-figma-xl">
            {contactLinks && contactLinks.map((contactLink, index) => (
              <Link
                key={index}
                href={contactLink.item.url}
                target={contactLink.item.target}
                className="text-background-4 items-end font-manrope font-medium text-figma-sm hover:text-gray-200 transition-colors focus-ring"
              >
                {contactLink.item.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile version */}
      <div data-testid="mobile-header" className="mobile-only flex flex-col justify-center items-start px-figma-sm py-figma-lg pb-figma-4xl gap-figma-4xl w-[375px] max-w-[900px] h-[157px] mx-auto">
        {/* Navigation */}
        <nav className="flex flex-row justify-between items-start gap-[49px] w-[335px] h-[23px]" role="navigation" aria-label="Main navigation">
          {/* Logo */}
          <div className="flex flex-row items-center gap-[20px] w-[92px] h-[23px]">
            <Link
              href="/"
              className="w-[92px] h-[23px] font-ibm-plex font-semibold text-[22px] leading-[105.81%] tracking-[-0.02em] capitalize text-background-2 focus-ring"
              aria-label={`${companyName} - Home`}
            >
              {companyName}
            </Link>
          </div>

          {/* Menu items - Hidden on mobile for now, can be added as hamburger menu */}
          <div className="hidden">
            {menuItems && menuItems.map((menuItem, index) => (
              <Link
                key={index}
                href={menuItem.item.url}
                target={menuItem.item.target}
                className="text-background-2 font-manrope font-medium text-figma-sm hover:text-gray-200 transition-colors focus-ring"
              >
                {menuItem.item.title}
              </Link>
            ))}
          </div>
        </nav>

        {/* Contact links */}
        <nav className="flex flex-row items-start w-[335px] h-[14px] flex-none order-1 flex-grow-0" role="navigation" aria-label="Contact links">
          <div className="flex flex-row items-center gap-figma-xl">
            {contactLinks && contactLinks.map((contactLink, index) => (
              <Link
                key={index}
                href={contactLink.item.url}
                target={contactLink.item.target}
                className="text-background-4 items-start justify-start font-manrope font-medium text-figma-sm hover:text-gray-200 transition-colors focus-ring"
              >
                {contactLink.item.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 