'use client';

import React, { Suspense } from 'react';
import LoadingComponent from './LoadingComponent';

interface SuspenseWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const SuspenseWrapper: React.FC<SuspenseWrapperProps> = ({ 
  children, 
  fallback = <LoadingComponent /> 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default SuspenseWrapper; 