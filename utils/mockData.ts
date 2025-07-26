import { Header } from '../types';

/**
 * Mock data fallback for header component
 * This provides default data when the API fails or returns no data
 */
export const mockHeaderData: Header = {
  company_name: 'Assemble',
  menu_items: [
    {
      item: {
        title: 'Home',
        url: '/',
        target: '_self'
      }
    },
    {
      item: {
        title: 'About',
        url: '/about',
        target: '_self'
      }
    },
    {
      item: {
        title: 'Services',
        url: '/services',
        target: '_self'
      }
    },
    {
      item: {
        title: 'Contact',
        url: '/contact',
        target: '_self'
      }
    }
  ],
  contact_links: [
    {
      item: {
        title: 'Email',
        url: 'mailto:hello@assemble.com',
        target: '_blank'
      }
    },
    {
      item: {
        title: 'Phone',
        url: 'tel:+1234567890',
        target: '_blank'
      }
    },
    {
      item: {
        title: 'LinkedIn',
        url: 'https://linkedin.com/company/assemble',
        target: '_blank'
      }
    },
    {
      item: {
        title: 'Twitter',
        url: 'https://twitter.com/assemble',
        target: '_blank'
      }
    }
  ]
};

/**
 * Utility function to get header data with fallback
 * @param apiData - Data from API
 * @returns Header data (API data or fallback)
 */
export const getHeaderDataWithFallback = (apiData?: Header | null): Header => {
  if (apiData && apiData.company_name) {
    // If API data exists and has company name, use it
    return {
      ...mockHeaderData,
      ...apiData,
      // Ensure contact_links exist, fallback to mock if not provided
      contact_links: apiData.contact_links?.length ? apiData.contact_links : mockHeaderData.contact_links
    };
  }
  
  // Return mock data if no API data or invalid data
  return mockHeaderData;
};

/**
 * Check if data is valid header data
 * @param data - Data to validate
 * @returns boolean indicating if data is valid
 */
export const isValidHeaderData = (data: unknown): data is Header => {
  return Boolean(data && 
         typeof data === 'object' && 
         data !== null &&
         'company_name' in data &&
         typeof (data as Header).company_name === 'string' && 
         (data as Header).company_name.trim().length > 0);
}; 