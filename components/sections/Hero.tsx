'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import { HeroProps } from '../../types';

const Hero: React.FC<HeroProps> = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <section className="bg-background-2">
      {/* Desktop version */}
      <div className="desktop-only flex flex-col items-center px-figma-4xl pt-figma-3xl gap-figma-3xl w-[1280px] h-[600px] mx-auto">
        
        {/* Header image */}
        <div className="w-[1200px] h-[635px] rounded-figma-xl flex items-center justify-center relative overflow-hidden">
          {data.desktop_image ? (
            <Image
              src={data.desktop_image.url}
              alt={data.desktop_image.alt || "Hero background"}
              width={data.desktop_image.width || 1200}
              height={data.desktop_image.height || 635}
              className="object-cover object-top w-full h-full"
              priority
            />
          ) : (
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-full h-full flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  {data.title.split(', ').map((part, index) => (
                    <React.Fragment key={index}>
                      {index === 1 ? (
                        <span className="block text-yellow-300">{part}</span>
                      ) : (
                        part
                      )}
                      {index < data.title.split(', ').length - 1 && ', '}
                    </React.Fragment>
                  ))}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
                  {data.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="primary" 
                    size="large"
                    onClick={() => console.log('Get started now')}
                  >
                    {data.cta_primary}
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="large"
                    onClick={() => console.log('View demo')}
                  >
                    {data.cta_secondary}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Logo wall */}
        <div className="flex flex-row flex-wrap items-start py-figma-3xl w-[1200px] h-[89.64px] rounded-figma-lg bg-background-3">
          <div className="flex items-center justify-center w-full h-full">
            <div className="flex space-x-figma-3xl items-center">
              <div className="text-figma-2xl font-bold text-text-paragraph">{data.trusted_by}</div>
              <div className="flex space-x-figma-3xl">
                {data.logos.map((logo, index) => (
                  <div 
                    key={index}
                    className="w-16 h-8 bg-background-5 rounded flex items-center justify-center text-figma-xs text-text-paragraph"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="mobile-only flex flex-col items-center px-figma-sm pt-figma-5xl gap-[25px] w-[375px] h-[503px] mx-auto">
        
        {/* Header image */}
        <div className="w-[335px] h-[400px] rounded-figma-xl flex items-center justify-center relative overflow-hidden">
          {data.mobile_image ? (
            <Image
              src={data.mobile_image.url}
              alt={data.mobile_image.alt || "Hero background mobile"}
              width={data.mobile_image.width || 335}
              height={data.mobile_image.height || 400}
              className="object-cover w-full h-full"
              priority
            />
          ) : (
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-full h-full flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-3xl font-bold mb-4">
                  {data.title.split(', ').map((part, index) => (
                    <React.Fragment key={index}>
                      {index === 1 ? (
                        <span className="block text-yellow-300">{part}</span>
                      ) : (
                        part
                      )}
                      {index < data.title.split(', ').length - 1 && ', '}
                    </React.Fragment>
                  ))}
                </h1>
                <p className="text-lg mb-6 text-purple-100">
                  {data.subtitle}
                </p>
                <div className="flex flex-col gap-3">
                  <Button 
                    variant="primary" 
                    size="large"
                    onClick={() => console.log('Get started now')}
                  >
                    {data.cta_primary}
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="large"
                    onClick={() => console.log('View demo')}
                  >
                    {data.cta_secondary}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Logo wall */}
        <div className="flex flex-row flex-wrap items-start py-[34px] w-[335px] h-[158.61px] rounded-figma-lg bg-background-3">
          <div className="flex items-center justify-center w-full h-full">
            <div className="flex space-x-figma-lg items-center">
              <div className="text-figma-lg font-bold text-text-paragraph">{data.trusted_by}</div>
              <div className="flex space-x-figma-lg">
                {data.logos.map((logo, index) => (
                  <div 
                    key={index}
                    className="w-12 h-6 bg-background-5 rounded flex items-center justify-center text-figma-xs text-text-paragraph"
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