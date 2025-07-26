'use client';

import React from 'react';
import Image from 'next/image';
import { FirstClassProps } from '../../types';

const FirstClass: React.FC<FirstClassProps> = ({ data }) => {
  if (!data) {
    return null;
  }

  const { title, image_tile: features } = data;

  return (
    <section className="bg-background-2">
      {/* Desktop version */}
      <div data-testid="desktop-first-class" className="desktop-only flex flex-col items-center px-figma-4xl pt-figma-5xl gap-figma-4xl w-[1280px] h-[558px] mx-auto">
        
        {/* Section header */}
        <div className="flex flex-col items-center gap-figma-sm w-figma-481 h-figma-44">
          
          {/* Headline */}
          <div className="flex flex-col justify-center items-center gap-[4.27px] w-figma-481 h-figma-44">
            <h2 className="w-figma-369 h-figma-44 font-manrope font-normal text-figma-42 leading-[105.81%] text-center tracking-[-0.02em] capitalize text-background-1">
              {title}
            </h2>
          </div>
        </div>

        {/* Icon section container */}
        <div className="flex flex-row items-center pb-2 gap-figma-4xl w-[1200px] h-figma-317.09">
          
          {features && features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-figma-15 w-figma-373.33 h-figma-317.09 flex-1">
              
              {/* Icon container */}
              <div className="flex flex-col justify-center items-center gap-figma-21.33 w-figma-373.33 h-figma-288.09 bg-background-1 rounded-figma-lg relative overflow-hidden transition-transform duration-500 ease-in-out hover:-translate-y-2">
                {feature.image?.url && (
                  <Image
                    src={feature.image.url}
                    alt={feature.image.alt || feature.title}
                    width={feature.image.width || 373}
                    height={feature.image.height || 288}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>

              {/* Title */}
              <h3 className="w-figma-373.33 h-figma-text font-manrope font-medium text-figma-sm leading-[115%] text-center text-text-black">
                {feature.title}
              </h3>
            </div>
          ))}

        </div>
      </div>

      {/* Mobile version */}
      <div data-testid="mobile-first-class" className="mobile-only flex flex-col items-center px-figma-sm py-figma-5xl gap-figma-4xl w-figma-335 h-[1123px] mx-auto">
        
        {/* Section header */}
        <div className="flex flex-col items-center gap-figma-sm w-figma-335 h-figma-30">
          
          {/* Headline */}
          <div className="flex flex-col justify-center items-center gap-[4.27px] w-figma-335 h-figma-30">
            <h2 className="w-figma-335 h-figma-30 font-manrope font-normal text-figma-28 leading-[105.81%] text-center tracking-[-0.02em] capitalize text-background-1">
              {title}
            </h2>
          </div>
        </div>

        {/* Icon section container */}
        <div className="flex flex-col justify-center items-start pb-2 gap-figma-4xl w-figma-335 h-figma-925">
          
          {features && features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-figma-15 w-figma-335 h-figma-279">
              
              {/* Icon container */}
              <div className="flex flex-col justify-center items-center gap-figma-21.33 w-figma-335 h-figma-250 bg-background-1 rounded-figma-lg relative overflow-hidden transition-transform duration-500 ease-in-out hover:-translate-y-2">
                {feature.image?.url && (
                  <Image
                    src={feature.image.url}
                    alt={feature.image.alt || feature.title}
                    width={feature.image.width || 335}
                    height={feature.image.height || 250}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>

              {/* Title */}
              <h3 className="w-figma-335 h-figma-text font-manrope font-medium text-[11px] leading-[125%] text-center text-text-black">
                {feature.title}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FirstClass;
