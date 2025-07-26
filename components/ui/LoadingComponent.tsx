import React from 'react';

interface LoadingComponentProps {
  message?: string;
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({ 
  message = "Loading..." 
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-2">
      <div className="text-center p-8 max-w-md mx-auto">
        <div className="mb-6">
          <div className="w-16 h-16 border-4 border-background-3 border-t-background-1 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-text-black mb-2">
            Loading
          </h2>
          <p className="text-text-paragraph">
            {message}
          </p>
        </div>
        
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-background-1 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-background-1 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-background-1 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent; 