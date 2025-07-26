import React from 'react';
import Link from 'next/link';
import { HeaderProps } from '../../types';

const Header: React.FC<HeaderProps> = ({ data }) => {
  // Fallback data si no hay datos del API
  const headerData = {
    company_name: "FINTECH",
    menu_items: [
      { item: { title: "Home", url: "/", target: "_self" } },
      { item: { title: "About", url: "/about", target: "_self" } },
      { item: { title: "Contact", url: "/contact", target: "_self" } }
    ]
  };

  const menuItems = data?.menu_items || headerData.menu_items;
  const companyName = data?.company_name || headerData.company_name;

  return (
    <header className="bg-background-1">
      {/* Desktop version */}
      <div className="desktop-only flex flex-col items-start px-figma-4xl py-figma-lg gap-figma-4xl w-[1280px] h-[157px] mx-auto">
        {/* Navigation */}
        <nav className="flex flex-row justify-between items-start gap-[49px] w-[858px] h-[23px]">
          {/* Logo */}
          <div className="flex flex-row items-center gap-[20px] w-[92px] h-[23px]">
            <Link
              href="/"
              className="w-[92px] h-[23px] font-ibm-plex font-semibold text-[22px] leading-[105.81%] tracking-[-0.02em] capitalize text-background-2"
            >
              {companyName}
            </Link>
          </div>

          {/* Menu items */}
          <div className="flex flex-row items-center gap-figma-3xl">

          </div>
        </nav>

        {/* Contact links */}
        <div className="flex flex-row items-end justify-end w-[1200px] h-[14px] flex-none order-1 flex-grow-0">
          <div className="flex flex-row items-center gap-figma-xl">
            {menuItems.map((menuItem, index) => (
                <Link
                  key={index}
                  href={menuItem.item.url}
                  target={menuItem.item.target}
                  className="text-background-4 float-right font-manrope font-medium text-figma-sm hover:text-gray-200 transition-colors"
                >
                  {menuItem.item.title}
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="mobile-only flex flex-col justify-center items-start px-figma-sm py-figma-lg pb-figma-4xl gap-figma-4xl w-[375px] max-w-[900px] h-[157px] mx-auto">
        {/* Navigation */}
        <nav className="flex flex-row justify-between items-start gap-[49px] w-[335px] h-[23px]">
          {/* Logo */}
          <div className="flex flex-row items-center gap-[20px] w-[92px] h-[23px]">
            <Link
              href="/"
              className="w-[92px] h-[23px] font-ibm-plex font-semibold text-[22px] leading-[105.81%] tracking-[-0.02em] capitalize text-background-2"
            >
              {companyName}
            </Link>
          </div>

          {/* Menu items - Hidden on mobile for now, can be added as hamburger menu */}
          <div className="hidden">
            {/* Menu items */}
          </div>
        </nav>

        {/* Contact links */}
        <div className="flex flex-row items-start justify-start w-[335px] h-[14px] flex-none order-1 flex-grow-0">
          <div className="flex flex-row items-center gap-figma-xl">
          {menuItems.map((menuItem, index) => (
              <Link
                key={index}
                href={menuItem.item.url}
                target={menuItem.item.target}
                className="text-background-4 font-manrope font-medium text-figma-sm hover:text-gray-200 transition-colors"
              >
                {menuItem.item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 