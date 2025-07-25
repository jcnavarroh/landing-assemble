'use client';

import React from 'react';
import Hero from '../../components/sections/Hero';
import ContentSection from '../../components/sections/ContentSection';
import { Feature } from '../../types';

export default function Home() {
  const features: Feature[] = [
    {
      id: '1',
      title: 'Real-time Collaboration',
      description: 'Work with your team in real-time with integrated communication tools.',
      icon: '💬',
      color: 'bg-blue-500'
    },
    {
      id: '2',
      title: 'Project Management',
      description: 'Organize and manage your projects efficiently with advanced tools.',
      icon: '📊',
      color: 'bg-green-500'
    },
    {
      id: '3',
      title: 'Advanced Analytics',
      description: 'Get valuable insights about your team and project performance.',
      icon: '📈',
      color: 'bg-purple-500'
    },
    {
      id: '4',
      title: 'Complete Integration',
      description: 'Connect with all your favorite tools in a single platform.',
      icon: '🔗',
      color: 'bg-orange-500'
    }
  ];

  const handleFreeTrial = () => {
    console.log('Free trial clicked');
  };

  const handleContactSales = () => {
    console.log('Contact sales clicked');
  };

  return (
    <div className="min-h-screen">
      <Hero />
      
      <ContentSection 
        title="Key Features"
        subtitle="Discover everything Assemble can do for your team"
        id="features"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center text-2xl mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection 
        title="Why Choose Assemble?"
        subtitle="Thousands of teams trust us to improve their productivity"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The most comprehensive platform for modern teams
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Assemble combines the best collaboration, project management 
              and analytics tools in a single intuitive and easy-to-use platform.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                Setup in less than 5 minutes
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                24/7 support in English
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                Integration with over 100 tools
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                Enterprise-level security
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-soft">
            <div className="text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Proven Results
              </h4>
              <p className="text-gray-600">
                Teams using Assemble see a 40% increase in productivity 
                and a 60% reduction in meeting time.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection 
        title="Start Your Journey with Assemble"
        subtitle="Join thousands of teams that are already transforming their way of working"
      >
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            No matter the size of your team or the industry you work in. 
            Assemble adapts to your needs and grows with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              onClick={handleFreeTrial}
            >
              Free Trial
            </button>
            <button 
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              onClick={handleContactSales}
            >
              Contact Sales
            </button>
          </div>
        </div>
      </ContentSection>
    </div>
  );
}
