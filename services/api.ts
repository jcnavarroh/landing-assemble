// Base API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.assemble.com';

// Types for API responses
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'archived';
  createdAt: string;
  updatedAt: string;
}

// Basic HTTP client
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Methods for different endpoints
  async getUsers(): Promise<ApiResponse<User[]>> {
    return this.request<User[]>('/users');
  }

  async getUser(id: string): Promise<ApiResponse<User>> {
    return this.request<User>(`/users/${id}`);
  }

  async getProjects(): Promise<ApiResponse<Project[]>> {
    return this.request<Project[]>('/projects');
  }

  async getProject(id: string): Promise<ApiResponse<Project>> {
    return this.request<Project>(`/projects/${id}`);
  }

  async createProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Project>> {
    return this.request<Project>('/projects', {
      method: 'POST',
      body: JSON.stringify(project),
    });
  }

  async updateProject(id: string, updates: Partial<Project>): Promise<ApiResponse<Project>> {
    return this.request<Project>(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteProject(id: string): Promise<ApiResponse<void>> {
    return this.request<void>(`/projects/${id}`, {
      method: 'DELETE',
    });
  }
}

// API client instance
export const apiClient = new ApiClient(API_BASE_URL);

// Convenience functions for use in components
export const api = {
  users: {
    getAll: () => apiClient.getUsers(),
    getById: (id: string) => apiClient.getUser(id),
  },
  projects: {
    getAll: () => apiClient.getProjects(),
    getById: (id: string) => apiClient.getProject(id),
    create: (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => apiClient.createProject(project),
    update: (id: string, updates: Partial<Project>) => apiClient.updateProject(id, updates),
    delete: (id: string) => apiClient.deleteProject(id),
  },
}; 