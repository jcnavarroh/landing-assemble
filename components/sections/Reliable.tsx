'use client';

import React from 'react';
import Image from 'next/image';
import { ReliableProps } from '../../types';

const Reliable: React.FC<ReliableProps> = ({ data }) => {
  // Fallback data si no hay datos del API
  const reliableData = {
    title: "The Most Reliable App",
    benefits: [
      {
        title: "Scale Your Team, Not Your Card Expenses",
        description: "Issue virtual and physical cards at no additional cost to support teams of any size.",
        image: null
      },
      {
        title: "Effortless Paper Tracking, Mobile Convenience",
        description: "Get precise control—at scale—with the ability to lock any card and restrict any type of spend.",
        image: null
      }
    ]
  };

  const benefits = data?.image_tile || reliableData.benefits;

  return (
    <section className="bg-white">
      {/* Desktop version */}
      <div className="hidden md:flex flex-col items-center px-10 pt-20 gap-8 w-[1280px] h-[672.51px] mx-auto">
        
        {/* The Most Reliable App - Title */}
        <div className="flex flex-col justify-center items-center gap-1 w-[481px] h-11">
          <h2 className="w-[412px] h-11 font-manrope font-normal text-[42px] leading-[105.81%] text-center tracking-[-0.02em] capitalize text-[#461A4C]">
            {data?.title || reliableData.title}
          </h2>
        </div>

        {/* Section content */}
        <div className="flex flex-row items-start gap-5 w-[1200px] h-[518.51px]">
          
          {/* First Benefit container */}
          <div className="flex flex-col items-start gap-5 w-[590px] h-[518.51px] flex-1">
            
            {/* Benefit image */}
            <div className="w-[590px] h-[457.51px] rounded-[10px] flex items-center justify-center relative overflow-hidden">
              {benefits[0]?.image ? (
                <Image
                  src={benefits[0].image.url}
                  alt={benefits[0].image.alt || "Benefit 1"}
                  width={benefits[0].image.width || 590}
                  height={benefits[0].image.height || 457}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-full h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">💳</div>
                    <p className="text-purple-100">Card Management</p>
                  </div>
                </div>
              )}
            </div>

            {/* Benefit information */}
            <div className="flex flex-col items-start w-[590px] h-[42px]">
              <h3 className="w-[590px] h-[14px] font-manrope font-medium text-xs leading-[115%] text-[#394508]">
                {benefits[0]?.title || "Scale Your Team, Not Your Card Expenses"}
              </h3>
              <p className="w-[590px] h-[28px] font-manrope font-medium text-xs leading-[115%] text-[#777777] mt-2">
                {benefits[0]?.description || "Issue virtual and physical cards at no additional cost to support teams of any size."}
              </p>
            </div>
          </div>

          {/* Second Benefit container */}
          <div className="flex flex-col items-start gap-5 w-[590px] h-[504.51px] flex-1">
            
            {/* Benefit image */}
            <div className="w-[590px] h-[457.51px] rounded-[10px] flex items-center justify-center relative overflow-hidden">
              {benefits[1]?.image ? (
                <Image
                  src={benefits[1].image.url}
                  alt={benefits[1].image.alt || "Benefit 2"}
                  width={benefits[1].image.width || 590}
                  height={benefits[1].image.height || 457}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-full h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">📱</div>
                    <p className="text-blue-100">Mobile Control</p>
                  </div>
                </div>
              )}
            </div>

            {/* Benefit information */}
            <div className="flex flex-col items-start w-[590px] h-[28px]">
              <h3 className="w-[590px] h-[14px] font-manrope font-medium text-xs leading-[115%] text-[#394508]">
                {benefits[1]?.title || "Effortless Paper Tracking, Mobile Convenience"}
              </h3>
              <p className="w-[590px] h-[14px] font-manrope font-medium text-xs leading-[115%] text-[#777777] mt-2">
                {benefits[1]?.description || "Get precise control—at scale—with the ability to lock any card and restrict any type of spend."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="md:hidden flex flex-col items-center px-5 py-12 gap-8 w-[375px] h-[821.54px] mx-auto">
        
        {/* The Most Reliable App - Title */}
        <div className="flex flex-col justify-center items-center gap-1 w-[335px] h-[30px]">
          <h2 className="w-[335px] h-[30px] font-manrope font-normal text-[28px] leading-[105.81%] text-center tracking-[-0.02em] capitalize text-[#461A4C]">
            {data?.title || reliableData.title}
          </h2>
        </div>

        {/* Section content */}
        <div className="flex flex-col items-start gap-5 w-[335px] h-[661.54px]">
          
          {/* First Benefit container */}
          <div className="flex flex-col items-start gap-4 w-[335px] h-[320.77px]">
            
            {/* Benefit image */}
            <div className="w-[335px] h-[259.77px] rounded-[10px] flex items-center justify-center relative overflow-hidden">
              {benefits[0]?.image ? (
                <Image
                  src={benefits[0].image.url}
                  alt={benefits[0].image.alt || "Benefit 1"}
                  width={benefits[0].image.width || 335}
                  height={benefits[0].image.height || 259}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-full h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">💳</div>
                    <p className="text-purple-100 text-sm">Card Management</p>
                  </div>
                </div>
              )}
            </div>

            {/* Benefit information */}
            <div className="flex flex-col items-start w-[335px] h-[42px]">
              <h3 className="w-[335px] h-[14px] font-manrope font-medium text-[11px] leading-[125%] text-black">
                {benefits[0]?.title || "Scale Your Team, Not Your Card Expenses"}
              </h3>
              <p className="w-[335px] h-[28px] font-manrope font-medium text-[11px] leading-[125%] text-[#777777] mt-2">
                {benefits[0]?.description || "Issue virtual and physical cards at no additional cost to support teams of any size."}
              </p>
            </div>
          </div>

          {/* Second Benefit container */}
          <div className="flex flex-col items-start gap-4 w-[335px] h-[320.77px]">
            
            {/* Benefit image */}
            <div className="w-[335px] h-[259.77px] rounded-[10px] flex items-center justify-center relative overflow-hidden">
              {benefits[1]?.image ? (
                <Image
                  src={benefits[1].image.url}
                  alt={benefits[1].image.alt || "Benefit 2"}
                  width={benefits[1].image.width || 335}
                  height={benefits[1].image.height || 259}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-full h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">📱</div>
                    <p className="text-blue-100 text-sm">Mobile Control</p>
                  </div>
                </div>
              )}
            </div>

            {/* Benefit information */}
            <div className="flex flex-col items-start w-[335px] h-[42px]">
              <h3 className="w-[335px] h-[14px] font-manrope font-medium text-[11px] leading-[125%] text-black">
                {benefits[1]?.title || "Effortless Paper Tracking, Mobile Convenience"}
              </h3>
              <p className="w-[335px] h-[28px] font-manrope font-medium text-[11px] leading-[125%] text-[#A3A3A3] mt-2">
                {benefits[1]?.description || "Get precise control—at scale—with the ability to lock any card and restrict any type of spend."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reliable;
