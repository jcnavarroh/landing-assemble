import { mockHeaderData, getHeaderDataWithFallback, isValidHeaderData } from '../mockData';
import { Header } from '../../types';

describe('mockData', () => {
  describe('mockHeaderData', () => {
    it('should have the correct structure', () => {
      expect(mockHeaderData).toHaveProperty('company_name');
      expect(mockHeaderData).toHaveProperty('menu_items');
      expect(mockHeaderData).toHaveProperty('contact_links');
      expect(mockHeaderData.company_name).toBe('Assemble');
    });

    it('should have menu items', () => {
      expect(mockHeaderData.menu_items).toHaveLength(4);
      expect(mockHeaderData.menu_items[0].item.title).toBe('Home');
      expect(mockHeaderData.menu_items[1].item.title).toBe('About');
      expect(mockHeaderData.menu_items[2].item.title).toBe('Services');
      expect(mockHeaderData.menu_items[3].item.title).toBe('Contact');
    });

    it('should have contact links', () => {
      expect(mockHeaderData.contact_links).toHaveLength(4);
      expect(mockHeaderData.contact_links![0].item.title).toBe('Email');
      expect(mockHeaderData.contact_links![1].item.title).toBe('Phone');
      expect(mockHeaderData.contact_links![2].item.title).toBe('LinkedIn');
      expect(mockHeaderData.contact_links![3].item.title).toBe('Twitter');
    });
  });

  describe('getHeaderDataWithFallback', () => {
    it('should return mock data when no API data is provided', () => {
      const result = getHeaderDataWithFallback();
      expect(result).toEqual(mockHeaderData);
    });

    it('should return mock data when null is provided', () => {
      const result = getHeaderDataWithFallback(null);
      expect(result).toEqual(mockHeaderData);
    });

    it('should return mock data when API data has no company name', () => {
      const invalidData = { menu_items: [], contact_links: [] } as unknown as Header;
      const result = getHeaderDataWithFallback(invalidData);
      expect(result).toEqual(mockHeaderData);
    });

    it('should merge API data with mock data when valid API data is provided', () => {
      const apiData: Header = {
        company_name: 'Custom Company',
        menu_items: [
          {
            item: {
              title: 'Custom Menu',
              url: '/custom',
              target: '_self'
            }
          }
        ],
        contact_links: [
          {
            item: {
              title: 'Custom Contact',
              url: 'mailto:custom@example.com',
              target: '_blank'
            }
          }
        ]
      };

      const result = getHeaderDataWithFallback(apiData);
      expect(result.company_name).toBe('Custom Company');
      expect(result.menu_items).toHaveLength(1);
      expect(result.menu_items[0].item.title).toBe('Custom Menu');
      expect(result.contact_links).toHaveLength(1);
      expect(result.contact_links[0].item.title).toBe('Custom Contact');
    });

    it('should use mock contact links when API data has no contact links', () => {
      const apiData: Header = {
        company_name: 'Custom Company',
        menu_items: [],
        contact_links: []
      };

      const result = getHeaderDataWithFallback(apiData);
      expect(result.company_name).toBe('Custom Company');
      expect(result.contact_links!).toEqual(mockHeaderData.contact_links);
    });
  });

  describe('isValidHeaderData', () => {
    it('should return true for valid header data', () => {
      const validData: Header = {
        company_name: 'Valid Company',
        menu_items: [],
        contact_links: []
      };
      expect(isValidHeaderData(validData)).toBe(true);
    });

    it('should return false for null', () => {
      expect(isValidHeaderData(null)).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(isValidHeaderData(undefined)).toBe(false);
    });

    it('should return false for empty object', () => {
      expect(isValidHeaderData({})).toBe(false);
    });

    it('should return false for object without company_name', () => {
      expect(isValidHeaderData({ menu_items: [] })).toBe(false);
    });

    it('should return false for object with empty company_name', () => {
      expect(isValidHeaderData({ company_name: '' })).toBe(false);
    });

    it('should return false for object with whitespace-only company_name', () => {
      expect(isValidHeaderData({ company_name: '   ' })).toBe(false);
    });

    it('should return false for non-object values', () => {
      expect(isValidHeaderData('string')).toBe(false);
      expect(isValidHeaderData(123)).toBe(false);
      expect(isValidHeaderData(true)).toBe(false);
    });
  });
}); 