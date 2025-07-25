// Re-export API types
export type { 
  ApiResponse, 
  User, 
  Project 
} from '../services/api';

// Import types for internal use
import type { User, Project } from '../services/api';

// Additional types for the application
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: 'monthly' | 'yearly';
  features: string[];
  popular?: boolean;
  cta: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterSubscription {
  email: string;
  preferences?: {
    marketing: boolean;
    updates: boolean;
  };
}

// Types for application state
export interface AppState {
  user: User | null;
  projects: Project[];
  loading: boolean;
  error: string | null;
}

// Types for events
export interface AppEvent {
  type: string;
  payload: unknown;
  timestamp: Date;
}

// Types for configuration
export interface AppConfig {
  apiUrl: string;
  environment: 'development' | 'staging' | 'production';
  features: {
    [key: string]: boolean;
  };
}

// Types for navigation
export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavigationItem[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

// Types for forms
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'textarea' | 'select' | 'checkbox' | 'radio';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    custom?: (value: unknown) => string | null;
  };
}

export interface FormData {
  [key: string]: unknown;
}

export interface FormErrors {
  [key: string]: string;
}

// Types for notifications
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// Types for modals
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// Types for tooltips
export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

// Types for loading states
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
  retry?: () => void;
}

// Types for pagination
export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: Pagination;
} 