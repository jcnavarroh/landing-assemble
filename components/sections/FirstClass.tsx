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
      <div className="desktop-only flex flex-col items-center px-figma-4xl pt-figma-5xl gap-figma-4xl w-[1280px] h-[558px] mx-auto">
        
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
          
          {/* First Icon information container */}
          <div className="flex flex-col items-center gap-figma-15 w-figma-373.33 h-figma-317.09 flex-1">
            
            {/* Icon container */}
            <div className="flex flex-col justify-center items-center gap-figma-21.33 w-figma-373.33 h-figma-288.09 bg-background-1 rounded-figma-lg relative overflow-hidden transition-transform duration-500 ease-in-out hover:-translate-y-2">
              {features[0]?.image.url && (
                <Image
                  src={features[0].image.url}
                  alt={features[0].image.alt || features[0].title}
                  width={features[0].image.width || 373}
                  height={features[0].image.height || 288}
                  className="object-cover w-full h-full"
                />
              )}
            </div>

            {/* Safe Storage */}
            <h3 className="w-figma-373.33 h-figma-text font-manrope font-medium text-figma-sm leading-[115%] text-center text-text-black">
              {features[0]?.title}
            </h3>
          </div>

          {/* Second Icon information container */}
          <div className="flex flex-col items-center gap-figma-15 w-figma-373.33 h-figma-317.09 flex-1">
            
            {/* Icon container */}
            <div className="flex flex-col justify-center items-center gap-figma-21.33 w-figma-373.33 h-figma-288.09 bg-background-1 rounded-figma-lg relative overflow-hidden transition-transform duration-500 ease-in-out hover:-translate-y-2">
              {features[1]?.image.url && (
                <Image
                  src={features[1].image.url}
                  alt={features[1].image.alt || features[1].title}
                  width={features[1].image.width || 373}
                  height={features[1].image.height || 288}
                  className="object-cover w-full h-full"
                />
              )}
            </div>

            {/* Secure */}
            <h3 className="w-figma-373.33 h-figma-text font-manrope font-medium text-figma-sm leading-[115%] text-center text-text-black">
              {features[1]?.title}
            </h3>
          </div>

          {/* Third Icon information container */}
          <div className="flex flex-col items-center gap-figma-15 w-figma-373.33 h-figma-317.09 flex-1">
            
            {/* Icon container */}
            <div className="flex flex-col justify-center items-center gap-figma-21.33 w-figma-373.33 h-figma-288.09 bg-background-1 rounded-figma-lg relative overflow-hidden transition-transform duration-500 ease-in-out hover:-translate-y-2">
              {features[2]?.image.url && (
                <Image
                  src={features[2].image.url}
                  alt={features[2].image.alt || features[2].title}
                  width={features[2].image.width || 373}
                  height={features[2].image.height || 288}
                  className="object-cover w-full h-full"
                />
              )}
            </div>

            {/* Earn Interest */}
            <h3 className="w-figma-373.33 h-figma-text font-manrope font-medium text-figma-sm leading-[115%] text-center text-text-black">
              {features[2]?.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="mobile-only flex flex-col items-center px-figma-sm py-figma-5xl gap-figma-4xl w-figma-335 h-[1123px] mx-auto">
        
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
          
          {/* First Icon information container */}
          <div className="flex flex-col items-center gap-figma-15 w-figma-335 h-figma-279">
            
            {/* Icon container */}
            <div className="flex flex-col justify-center items-center gap-figma-21.33 w-figma-335 h-figma-250 bg-background-1 rounded-figma-lg relative overflow-hidden transition-transform duration-500 ease-in-out hover:-translate-y-2">
              {features[0]?.image.url && (
                <Image
                  src={features[0].image.url}
                  alt={features[0].image.alt || features[0].title}
                  width={features[0].image.width || 335}
                  height={features[0].image.height || 250}
                  className="object-cover w-full h-full"
                />
              )}
            </div>

            {/* Safe Storage */}
            <h3 className="w-figma-335 h-figma-text font-manrope font-medium text-[11px] leading-[125%] text-center text-text-black">
              {features[0]?.title}
            </h3>
          </div>

          {/* Second Icon information container */}
          <div className="flex flex-col items-center gap-figma-15 w-figma-335 h-figma-279">
            
            {/* Icon container */}
            <div className="flex flex-col justify-center items-center gap-figma-21.33 w-figma-335 h-figma-250 bg-background-1 rounded-figma-lg relative overflow-hidden transition-transform duration-500 ease-in-out hover:-translate-y-2">
              {features[1]?.image.url && (
                <Image
                  src={features[1].image.url}
                  alt={features[1].image.alt || features[1].title}
                  width={features[1].image.width || 335}
                  height={features[1].image.height || 250}
                  className="object-cover w-full h-full"
                />
              )}
            </div>

            {/* Secure */}
            <h3 className="w-figma-335 h-figma-text font-manrope font-medium text-[11px] leading-[125%] text-center text-text-black">
              {features[1]?.title}
            </h3>
          </div>

          {/* Third Icon information container */}
          <div className="flex flex-col items-center gap-figma-15 w-figma-335 h-figma-279">
            
            {/* Icon container */}
            <div className="flex flex-col justify-center items-center gap-figma-21.33 w-figma-335 h-figma-250 bg-background-1 rounded-figma-lg relative overflow-hidden transition-transform duration-500 ease-in-out hover:-translate-y-2">
              {features[2]?.image.url && (
                <Image
                  src={features[2].image.url}
                  alt={features[2].image.alt || features[2].title}
                  width={features[2].image.width || 335}
                  height={features[2].image.height || 250}
                  className="object-cover w-full h-full"
                />
              )}
            </div>

            {/* Earn Interest */}
            <h3 className="w-figma-335 h-figma-text font-manrope font-medium text-[11px] leading-[125%] text-center text-text-black">
              {features[2]?.title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstClass;
