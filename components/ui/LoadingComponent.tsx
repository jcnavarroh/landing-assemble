import React from 'react';

const LoadingComponent: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Cargando...
        </h2>
        <p className="text-gray-600">
          Por favor espera mientras cargamos el contenido
        </p>
      </div>
    </div>
  );
};

export default LoadingComponent; 