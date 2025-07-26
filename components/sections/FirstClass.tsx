'use client';

import React from 'react';
import Image from 'next/image';
import { FirstClassProps } from '../../types';

const FirstClass: React.FC<FirstClassProps> = ({ data }) => {
  // Fallback data si no hay datos del API
  const firstClassData = {
    title: "First class software",
    features: [
      {
        title: "Safe Storage",
        icon: "🔒",
        image: null
      },
      {
        title: "Secure",
        icon: "🛡️",
        image: null
      },
      {
        title: "Earn Interest",
        icon: "💰",
        image: null
      }
    ]
  };

  const features = data?.image_tile || firstClassData.features;

  return (
    <section className="bg-background-2">
      {/* Desktop version */}
      <div className="desktop-only flex flex-col items-center px-figma-4xl pt-figma-5xl gap-figma-4xl w-[1280px] h-[558px] mx-auto">
        
        {/* Section header */}
        <div className="flex flex-col items-center gap-figma-sm w-[481px] h-[44px]">
          
          {/* Headline */}
          <div className="flex flex-col justify-center items-center gap-[4.27px] w-[481px] h-[44px]">
            <h2 className="w-[369px] h-[44px] font-manrope font-normal text-[42px] leading-[105.81%] text-center tracking-[-0.02em] capitalize text-background-1">
              {data?.title || firstClassData.title}
            </h2>
          </div>
        </div>

        {/* Icon section container */}
        <div className="flex flex-row items-center pb-2 gap-figma-4xl w-[1200px] h-[325.09px]">
          
          {/* First Icon information container */}
          <div className="flex flex-col items-center gap-[15px] w-[373.33px] h-[317.09px] flex-1">
            
            {/* Icon container */}
            <div className="flex flex-col justify-center items-center gap-[21.33px] w-[373.33px] h-[288.09px] bg-background-1 rounded-figma-lg relative overflow-hidden">
              {features[0]?.image ? (
                <Image
                  src={features[0].image.url}
                  alt={features[0].image.alt || features[0].title}
                  width={features[0].image.width || 373}
                  height={features[0].image.height || 288}
                  className="object-cover w-full h-full"
                />
              ) : (
                <>
                  <div className="text-6xl text-white">{features[0]?.icon || "🔒"}</div>
                  <div className="text-4xl text-white">💾</div>
                </>
              )}
            </div>

            {/* Safe Storage */}
            <h3 className="w-[373.33px] h-[14px] font-manrope font-medium text-figma-sm leading-[115%] text-center text-text-black">
              {features[0]?.title || "Safe Storage"}
            </h3>
          </div>

          {/* Second Icon information container */}
          <div className="flex flex-col items-center gap-[15px] w-[373.33px] h-[317.09px] flex-1">
            
            {/* Icon container */}
            <div className="flex flex-col justify-center items-center gap-[21.33px] w-[373.33px] h-[288.09px] bg-background-1 rounded-figma-lg relative overflow-hidden">
              {features[1]?.image ? (
                <Image
                  src={features[1].image.url}
                  alt={features[1].image.alt || features[1].title}
                  width={features[1].image.width || 373}
                  height={features[1].image.height || 288}
                  className="object-cover w-full h-full"
                />
              ) : (
                <>
                  <div className="text-6xl text-white">{features[1]?.icon || "🛡️"}</div>
                  <div className="text-4xl text-white">🔐</div>
                </>
              )}
            </div>

            {/* Secure */}
            <h3 className="w-[373.33px] h-[14px] font-manrope font-medium text-figma-sm leading-[115%] text-center text-text-black">
              {features[1]?.title || "Secure"}
            </h3>
          </div>

          {/* Third Icon information container */}
          <div className="flex flex-col items-center gap-[15px] w-[373.33px] h-[317.09px] flex-1">
            
            {/* Icon container */}
            <div className="flex flex-col justify-center items-center gap-[21.33px] w-[373.33px] h-[288.09px] bg-background-1 rounded-figma-lg relative overflow-hidden">
              {features[2]?.image ? (
                <Image
                  src={features[2].image.url}
                  alt={features[2].image.alt || features[2].title}
                  width={features[2].image.width || 373}
                  height={features[2].image.height || 288}
                  className="object-cover w-full h-full"
                />
              ) : (
                <>
                  <div className="text-6xl text-white">{features[2]?.icon || "💰"}</div>
                  <div className="text-4xl text-white">📈</div>
                </>
              )}
            </div>

            {/* Earn Interest */}
            <h3 className="w-[373.33px] h-[14px] font-manrope font-medium text-figma-sm leading-[115%] text-center text-text-black">
              {features[2]?.title || "Earn Interest"}
            </h3>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="mobile-only flex flex-col items-center px-figma-sm py-figma-5xl gap-figma-4xl w-[375px] h-[1123px] mx-auto">
        
        {/* Section header */}
        <div className="flex flex-col items-center gap-figma-sm w-[335px] h-[30px]">
          
          {/* Headline */}
          <div className="flex flex-col justify-center items-center gap-[4.27px] w-[335px] h-[30px]">
            <h2 className="w-[335px] h-[30px] font-manrope font-normal text-[28px] leading-[105.81%] text-center tracking-[-0.02em] capitalize text-background-1">
              {data?.title || firstClassData.title}
            </h2>
          </div>
        </div>

        {/* Icon section container */}
        <div className="flex flex-col justify-center items-start pb-2 gap-figma-4xl w-[335px] h-[925px]">
          
          {/* First Icon information container */}
          <div className="flex flex-col items-center gap-[15px] w-[335px] h-[279px]">
            
            {/* Icon container */}
            <div className="flex flex-col justify-center items-center gap-[21.33px] w-[335px] h-[250px] bg-background-1 rounded-figma-lg relative overflow-hidden">
              {features[0]?.image ? (
                <Image
                  src={features[0].image.url}
                  alt={features[0].image.alt || features[0].title}
                  width={features[0].image.width || 335}
                  height={features[0].image.height || 250}
                  className="object-cover w-full h-full"
                />
              ) : (
                <>
                  <div className="text-5xl text-white">{features[0]?.icon || "🔒"}</div>
                  <div className="text-3xl text-white">💾</div>
                </>
              )}
            </div>

            {/* Safe Storage */}
            <h3 className="w-[335px] h-[14px] font-manrope font-medium text-[11px] leading-[125%] text-center text-text-black">
              {features[0]?.title || "Safe Storage"}
            </h3>
          </div>

          {/* Second Icon information container */}
          <div className="flex flex-col items-center gap-[15px] w-[335px] h-[279px]">
            
            {/* Icon container */}
            <div className="flex flex-col justify-center items-center gap-[21.33px] w-[335px] h-[250px] bg-background-1 rounded-figma-lg relative overflow-hidden">
              {features[1]?.image ? (
                <Image
                  src={features[1].image.url}
                  alt={features[1].image.alt || features[1].title}
                  width={features[1].image.width || 335}
                  height={features[1].image.height || 250}
                  className="object-cover w-full h-full"
                />
              ) : (
                <>
                  <div className="text-5xl text-white">{features[1]?.icon || "🛡️"}</div>
                  <div className="text-3xl text-white">🔐</div>
                </>
              )}
            </div>

            {/* Secure */}
            <h3 className="w-[335px] h-[14px] font-manrope font-medium text-[11px] leading-[125%] text-center text-text-black">
              {features[1]?.title || "Secure"}
            </h3>
          </div>

          {/* Third Icon information container */}
          <div className="flex flex-col items-center gap-[15px] w-[335px] h-[279px]">
            
            {/* Icon container */}
            <div className="flex flex-col justify-center items-center gap-[21.33px] w-[335px] h-[250px] bg-background-1 rounded-figma-lg relative overflow-hidden">
              {features[2]?.image ? (
                <Image
                  src={features[2].image.url}
                  alt={features[2].image.alt || features[2].title}
                  width={features[2].image.width || 335}
                  height={features[2].image.height || 250}
                  className="object-cover w-full h-full"
                />
              ) : (
                <>
                  <div className="text-5xl text-white">{features[2]?.icon || "💰"}</div>
                  <div className="text-3xl text-white">📈</div>
                </>
              )}
            </div>

            {/* Earn Interest */}
            <h3 className="w-[335px] h-[14px] font-manrope font-medium text-[11px] leading-[125%] text-center text-text-black">
              {features[2]?.title || "Earn Interest"}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstClass;
