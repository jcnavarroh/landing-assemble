import React from 'react';
import Link from 'next/link';
import { FooterProps } from '../../types';

const Footer: React.FC<FooterProps> = ({ data }) => {
  // Fallback data si no hay datos del API
  const footerData = {
    footer_title: "ACME GROUP",
    contact_links: [
      { item: { title: "hello@figma.com", url: "mailto:hello@figma.com", target: "_self" } },
      { item: { title: "Instagram", url: "#", target: "_blank" } },
      { item: { title: "X", url: "#", target: "_blank" } },
      { item: { title: "LinkedIn", url: "#", target: "_blank" } }
    ]
  };

  const contactLinks = data?.contact_links || footerData.contact_links;
  const footerTitle = data?.footer_title || footerData.footer_title;

  return (
    <footer className="bg-background-3">
      {/* Desktop version */}
      <div className="desktop-only flex flex-row items-start px-figma-4xl py-[31px] gap-figma-sm w-[1280px] h-[221px] mx-auto">
        
        {/* Left side footer container */}
        <div className="w-[1023px] h-[26px] relative flex-none order-0 flex-grow">
          <Link 
            href="/" 
            className="absolute left-3 top-[-4.51px] bottom-[-4.49px] w-[203px] font-manrope font-bold text-[32px] leading-[109.01%] tracking-[-0.02em] text-black"
          >
            {footerTitle}
          </Link>
        </div>
        
        {/* Right side footer container */}
        <div className="flex flex-col justify-between items-start w-[167px] h-[144px] flex-none order-1 flex-grow-0">
          
          {/* Contact details */}
          <div className="flex flex-col items-start gap-[12.64px] w-[167px] h-[62px]">
            <div className="flex flex-col items-start gap-[2px] w-[167px] h-[62px]">
              {contactLinks.map((contactLink, index) => (
                <Link 
                  key={index}
                  href={contactLink.item.url} 
                  target={contactLink.item.target}
                  className="w-[167px] h-[14px] font-manrope font-medium text-[12px] leading-[115%] text-black hover:text-gray-600 transition-colors"
                >
                  {contactLink.item.title}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Terms and conditions */}
          <div className="flex flex-col items-start gap-[2px] w-[167px] h-[14px]">
            <Link 
              href="#" 
              className="w-[41px] h-[14px] font-manrope font-medium text-[12px] leading-[115%] text-[#777777] hover:text-gray-600 transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="mobile-only flex flex-row items-start px-figma-sm py-[31px] gap-figma-sm w-[375px] h-[221px] mx-auto">
        
        {/* Left side footer container */}
        <div className="w-[225px] h-[20px] relative flex-none order-0 flex-grow-0">
          <Link 
            href="/" 
            className="absolute left-0 top-[-2px] bottom-[-2px] w-[135px] font-manrope font-normal text-[22px] leading-[109.01%] tracking-[-0.02em] text-black"
          >
            {footerTitle}
          </Link>
        </div>
        
        {/* Right side footer container */}
        <div className="flex flex-col justify-between items-start w-[100px] h-[144px] flex-none order-1 flex-grow-1">
          
          {/* Contact details */}
          <div className="flex flex-col items-start gap-[12.64px] w-fith-[62px]">
            <div className="flex flex-col items-start gap-[2px] w-fit h-[62px]">
              {contactLinks.map((contactLink, index) => (
                <Link 
                  key={index}
                  href={contactLink.item.url} 
                  target={contactLink.item.target}
                  className="w-fit h-[14px] font-manrope font-medium text-[11px] leading-[125%] text-black hover:text-gray-600 transition-colors"
                >
                  {contactLink.item.title}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Terms and conditions */}
          <div className="flex flex-col items-start gap-[2px] w-[100px] h-[14px]">
            <Link 
              href="#" 
              className="w-[38px] h-[14px] font-manrope font-medium text-[11px] leading-[125%] text-text-paragraph hover:text-gray-600 transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 