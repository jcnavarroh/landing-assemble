'use client';

import { useState } from 'react';
import Header from '../../components/layout/Header';
import { Header as HeaderType } from '../../types';

export default function TestFallbackPage() {
  const [headerData, setHeaderData] = useState<HeaderType | undefined>(undefined);
  const [showFallback, setShowFallback] = useState(false);

  const toggleFallback = () => {
    if (showFallback) {
      // Simulate API data
      setHeaderData({
        company_name: 'API Company',
        menu_items: [
          {
            item: {
              title: 'API Home',
              url: '/',
              target: '_self'
            }
          },
          {
            item: {
              title: 'API About',
              url: '/about',
              target: '_self'
            }
          }
        ],
        contact_links: [
          {
            item: {
              title: 'API Contact',
              url: 'mailto:api@example.com',
              target: '_blank'
            }
          }
        ]
      });
      setShowFallback(false);
    } else {
      // Show fallback data
      setHeaderData(undefined);
      setShowFallback(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Header Fallback Test Page</h1>
        
        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Test Controls</h2>
          <button
            onClick={toggleFallback}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            {showFallback ? 'Show API Data' : 'Show Fallback Data'}
          </button>
          
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <p className="font-medium">Current State:</p>
            <p className="text-sm text-gray-600">
              {showFallback ? 'Using Fallback Data (API unavailable)' : 'Using API Data'}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Header Component</h2>
          <div className="border rounded">
            <Header data={headerData} />
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">How It Works</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-medium text-green-600">✅ API Data Available</h3>
              <p className="text-gray-600">When API data is provided, the header displays the actual content from WordPress.</p>
            </div>
            <div>
              <h3 className="font-medium text-orange-600">⚠️ Fallback Data</h3>
              <p className="text-gray-600">When no API data is available, the header automatically uses fallback data with:</p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Company name: &quot;Assemble&quot;</li>
                <li>Menu items: Home, About, Services, Contact</li>
                <li>Contact links: Email, Phone, LinkedIn, Twitter</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-blue-600">🔧 Development Features</h3>
              <p className="text-gray-600">In development mode, console warnings appear when fallback data is used.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 