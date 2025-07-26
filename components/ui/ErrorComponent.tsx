import React from 'react';
import Link from 'next/link';

interface ErrorComponentProps {
  message?: string;
  retry?: () => void;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ 
  message = "Something went wrong", 
  retry 
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-2">
      <div className="text-center p-8 max-w-md mx-auto">
        <div className="mb-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg 
              className="w-8 h-8 text-red-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-text-black mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-text-paragraph mb-6">
            {message}
          </p>
        </div>
        
        {retry && (
          <button
            onClick={retry}
            className="bg-background-1 text-background-2 px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-background-1 focus:ring-offset-2"
          >
            Try Again
          </button>
        )}
        
        <div className="mt-6">
          <Link 
            href="/" 
            className="text-link-default hover:text-link-hover transition-colors focus:outline-none focus:ring-2 focus:ring-link-default focus:ring-offset-2 rounded"
          >
            Go back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent; 