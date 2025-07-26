import React from 'react';
import Hero from '../../components/sections/Hero';
import Reliable from '../../components/sections/Reliable';
import FirstClass from '../../components/sections/FirstClass';
import { api } from '../../services/api';
import { WordPressPage } from '../../types';

export default async function HomePage() {
  let pageData: WordPressPage | null = null;
  let error: string | null = null;

  try {
    const { data: homeData, error: apiError } = await api.getHomePage();
    
    if (apiError) {
      error = apiError;
    } else if (homeData && homeData.length > 0) {
      pageData = homeData[0];
    } else {
      error = "No data available";
    }
  } catch {
    error = "Failed to load page data";
  }

  if (error) {
    throw new Error(error);
  }

  if (!pageData?.acf) {
    throw new Error("Invalid page data structure");
  }

  const { acf } = pageData;

  return (
    <>
      {/* Main H1 for accessibility */}
      <h1 className="sr-only">
        Assemble - Connect, Collaborate, Innovate
      </h1>
      
      <Hero data={acf.body.hero_image} />
      <Reliable data={acf.body.row_1} />
      <FirstClass data={acf.body.row_2} />
    </>
  );
}
