import React from 'react';

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  subtitle,
  children,
  className = '',
  id,
}) => {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-12">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentSection; 