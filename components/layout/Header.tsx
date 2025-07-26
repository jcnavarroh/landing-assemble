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
    <header className="bg-[#461A4C] px-10 py-5">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col items-start gap-[50px]">
          {/* Navigation */}
          <nav className="flex flex-row justify-between items-start gap-[49px] w-[858px] h-[23px] md:w-full">
            {/* Logo */}
            <div className="flex flex-row items-center gap-5 w-[92px] h-[23px]">
              <Link 
                href="/" 
                className="text-white font-ibm-plex font-semibold text-[22px] leading-[105.81%] tracking-[-0.02em] capitalize"
              >
                {companyName}
              </Link>
            </div>
            
            {/* Menu items */}
            <div className="flex flex-row items-center gap-6">
              {menuItems.map((menuItem, index) => (
                <Link
                  key={index}
                  href={menuItem.item.url}
                  target={menuItem.item.target}
                  className="text-white font-manrope font-medium text-sm hover:text-gray-200 transition-colors"
                >
                  {menuItem.item.title}
                </Link>
              ))}
            </div>
          </nav>
          
          {/* Contact links */}
          <div className="flex flex-row items-start w-[1200px] h-[14px] md:w-full">
            {/* Aquí puedes agregar los enlaces de contacto cuando tengas los datos */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 