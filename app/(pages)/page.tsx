import React from 'react';
import { api } from '../../services/api';
import Hero from '../../components/sections/Hero';
import Reliable from '../../components/sections/Reliable';
import FirstClass from '../../components/sections/FirstClass';
import ErrorComponent from '../../components/ui/ErrorComponent';
import SuspenseWrapper from '../../components/ui/SuspenseWrapper';

export default async function Home() {
  try {
    const { data: homeData, error } = await api.getHomePage();
    
    if (error) {
      return <ErrorComponent message={error} />;
    }
    
    if (!homeData || homeData.length === 0) {
      return <ErrorComponent message="No se encontraron datos de la página" />;
    }
    
    const pageData = homeData[0]; // Tomamos la primera página
    
    return (
      <SuspenseWrapper>
        <div className="min-h-screen">
          <Hero data={pageData.acf?.body?.hero_image} />
          <Reliable data={pageData.acf?.body?.row_1} />
          <FirstClass data={pageData.acf?.body?.row_2} />
        </div>
      </SuspenseWrapper>
    );
  } catch {
    return <ErrorComponent message="Error al cargar la página" />;
  }
}
