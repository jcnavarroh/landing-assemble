import React from 'react';
import { render, screen, within } from '@testing-library/react';
import FirstClass from '../FirstClass';
import { Row2, Image } from '../../../types';

// Partial mock for the Image type
const mockImage = (url: string, alt: string): Partial<Image> => ({ url, alt, width: 100, height: 100 });

// Mock data for the FirstClass component
const mockFirstClassData: Row2 = {
  title: "First Class Software",
  image_tile: [
    {
      image: mockImage('/feature-1.jpg', 'Safe Storage Image') as Image,
      title: "Safe Storage",
    },
    {
      image: mockImage('/feature-2.jpg', 'Secure Image') as Image,
      title: "Secure",
    },
    {
      image: mockImage('/feature-3.jpg', 'Earn Interest Image') as Image,
      title: "Earn Interest",
    },
  ],
};

describe('FirstClass Component', () => {
  test('renders nothing if no data is provided', () => {
    const { container } = render(<FirstClass data={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });

  describe('Desktop FirstClass Section', () => {
    test('renders the main title', () => {
      render(<FirstClass data={mockFirstClassData} />);
      const desktopFirstClass = screen.getByTestId('desktop-first-class');
      const titleElement = within(desktopFirstClass).getByText(mockFirstClassData.title);
      expect(titleElement).toBeInTheDocument();
    });

    test('renders feature cards with correct content', () => {
      render(<FirstClass data={mockFirstClassData} />);
      const desktopFirstClass = screen.getByTestId('desktop-first-class');
      
      mockFirstClassData.image_tile.forEach(feature => {
        expect(within(desktopFirstClass).getByText(feature.title)).toBeInTheDocument();
        expect(within(desktopFirstClass).getByAltText(feature.image.alt as string)).toBeInTheDocument();
      });
    });
  });

  describe('Mobile FirstClass Section', () => {
    test('renders the main title', () => {
      render(<FirstClass data={mockFirstClassData} />);
      const mobileFirstClass = screen.getByTestId('mobile-first-class');
      const titleElement = within(mobileFirstClass).getByText(mockFirstClassData.title);
      expect(titleElement).toBeInTheDocument();
    });

    test('renders feature cards with correct content', () => {
      render(<FirstClass data={mockFirstClassData} />);
      const mobileFirstClass = screen.getByTestId('mobile-first-class');
      
      mockFirstClassData.image_tile.forEach(feature => {
        expect(within(mobileFirstClass).getByText(feature.title)).toBeInTheDocument();
        expect(within(mobileFirstClass).getByAltText(feature.image.alt as string)).toBeInTheDocument();
      });
    });
  });
}); 