import { ApiResponse, WordPressPage } from '@/types';

// Base API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://webdevtest.assemblestaging.com/wp-json/wp/v2/pages?slug=home&_fields=id,acf&acf_format=standard';

// Basic HTTP client
class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return { data, error: null };
    } catch (error) {
      return { 
        data: null, 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      };
    }
  }

  async getHomePage(): Promise<ApiResponse<WordPressPage[]>> {
    return this.get<WordPressPage[]>('');
  }
}

// API client instance
export const apiClient = new ApiClient(API_BASE_URL);

// Convenience functions for use in components
export const api = {
  getHomePage: () => apiClient.getHomePage(),
  get: <T>(endpoint: string) => apiClient.get<T>(endpoint)
}; 