'use client';

import React from 'react';
import Image from 'next/image';
import { ReliableProps } from '../../types';

const Reliable: React.FC<ReliableProps> = ({ data }) => {
  if (!data) {
    return null;
  }

  const { title, image_tile: benefits } = data;

  return (
    <section className="bg-white top-[-160px] md:top-[-175px] relative mb-[-160px] md:mb-[-175px]">
      {/* Desktop version */}
      <div data-testid="desktop-reliable" className="hidden md:flex flex-col items-center px-10 pt-20 gap-8 w-[1280px] h-[672.51px] mx-auto bg-background-2">
        
        {/* The Most Reliable App - Title */}
        <div className="flex flex-col justify-center items-center gap-1 w-[481px] h-11">
          <h2 className="w-[412px] h-11 font-manrope font-normal text-[42px] leading-[105.81%] text-center tracking-[-0.02em] capitalize text-[#461A4C]">
            {title}
          </h2>
        </div>

        {/* Section content */}
        <div className="flex flex-row items-start gap-5 w-[1200px] h-[518.51px]">
          
          {benefits && benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-start gap-5 w-[590px] h-[518.51px] flex-1">
              
              {/* Benefit image */}
              <div className="w-[590px] h-[457.51px] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                {benefit.image && (
                  <Image
                    src={benefit.image.url}
                    alt={benefit.image.alt || benefit.title}
                    width={benefit.image.width || 590}
                    height={benefit.image.height || 457}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>

              {/* Benefit information */}
              <div className="flex flex-col items-start w-[590px] h-[42px]">
                <h3 className="w-[590px] h-[14px] font-manrope font-medium text-xs leading-[115%] text-[#394508]">
                  {benefit.title}
                </h3>
                <p className="w-[590px] h-[28px] font-manrope font-medium text-xs leading-[115%] text-[#777777] mt-2">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Mobile version */}
      <div data-testid="mobile-reliable" className="md:hidden flex flex-col items-center px-5 py-12 gap-8 w-[375px] h-[821.54px] mx-auto">
        
        {/* The Most Reliable App - Title */}
        <div className="flex flex-col justify-center items-center gap-1 w-[335px] h-[30px]">
          <h2 className="w-[335px] h-[30px] font-manrope font-normal text-[28px] leading-[105.81%] text-center tracking-[-0.02em] capitalize text-[#461A4C]">
            {title}
          </h2>
        </div>

        {/* Section content */}
        <div className="flex flex-col items-start gap-5 w-[335px] h-[661.54px]">
          
          {benefits && benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-start gap-4 w-[335px] h-[320.77px]">
              
              {/* Benefit image */}
              <div className="w-[335px] h-[259.77px] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                {benefit.image && (
                  <Image
                    src={benefit.image.url}
                    alt={benefit.image.alt || benefit.title}
                    width={benefit.image.width || 335}
                    height={benefit.image.height || 259}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>

              {/* Benefit information */}
              <div className="flex flex-col items-start w-[335px] h-[42px]">
                <h3 className="w-[335px] h-[14px] font-manrope font-medium text-[11px] leading-[125%] text-black">
                  {benefit.title}
                </h3>
                <p className="w-[335px] h-[28px] font-manrope font-medium text-[11px] leading-[125%] text-[#777777] mt-2">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Reliable;
