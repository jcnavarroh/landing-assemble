'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import { HeroProps } from '../../types';

const Hero: React.FC<HeroProps> = ({ data }) => {
  // Fallback data si no hay datos del API
  const heroData = {
    title: "Connect, Collaborate, Innovate",
    subtitle: "Assemble is the platform that revolutionizes how we work together. Organize projects, manage teams and achieve extraordinary results.",
    cta_primary: "Get Started Now",
    cta_secondary: "View Demo",
    trusted_by: "Trusted by",
    logos: ["Logo 1", "Logo 2", "Logo 3", "Logo 4"]
  };

  return (
    <section className="bg-white">
      {/* Header container */}
      <div className="flex flex-col items-center px-10 pt-12 gap-12 w-[1280px] h-[481px] mx-auto">
        
        {/* Header image */}
        <div className="w-[1200px] h-[635px] rounded-[20px] flex items-center justify-center relative overflow-hidden">
          {data?.desktop_image ? (
            <Image
              src={data.desktop_image.url}
              alt={data.desktop_image.alt || "Hero background"}
              width={data.desktop_image.width || 1200}
              height={data.desktop_image.height || 635}
              className="object-cover w-full h-full"
              priority
            />
          ) : (
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-full h-full flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  {heroData.title.split(', ').map((part, index) => (
                    <React.Fragment key={index}>
                      {index === 1 ? (
                        <span className="block text-yellow-300">{part}</span>
                      ) : (
                        part
                      )}
                      {index < heroData.title.split(', ').length - 1 && ', '}
                    </React.Fragment>
                  ))}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
                  {heroData.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="primary" 
                    size="large"
                    onClick={() => console.log('Get started now')}
                  >
                    {heroData.cta_primary}
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="large"
                    onClick={() => console.log('View demo')}
                  >
                    {heroData.cta_secondary}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Logo wall */}
        <div className="flex flex-row flex-wrap items-start py-8 row-gap-0 w-[1200px] h-[89.64px] rounded-[10px] bg-gray-50">
          <div className="flex items-center justify-center w-full h-full">
            <div className="flex space-x-8 items-center">
              <div className="text-2xl font-bold text-gray-600">{heroData.trusted_by}</div>
              <div className="flex space-x-6">
                {heroData.logos.map((logo, index) => (
                  <div 
                    key={index}
                    className="w-16 h-8 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-600"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 