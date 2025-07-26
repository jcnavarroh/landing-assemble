import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Reliable from '../Reliable';
import { Row1, Image } from '../../../types';

// Partial mock for the Image type
const mockImage = (url: string, alt: string): Partial<Image> => ({ url, alt, width: 100, height: 100 });

// Mock data for the Reliable component
const mockReliableData: Row1 = {
  title: "The Most Reliable App",
  image_tile: [
    {
      image: mockImage('/benefit-1.jpg', 'Benefit 1 Image') as Image,
      title: "Scale Your Team",
      description: "Support teams of any size.",
    },
    {
      image: mockImage('/benefit-2.jpg', 'Benefit 2 Image') as Image,
      title: "Mobile Convenience",
      description: "Get precise control at scale.",
    },
  ],
};

describe('Reliable Component', () => {
  test('renders nothing if no data is provided', () => {
    const { container } = render(<Reliable data={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });

  describe('Desktop Reliable Section', () => {
    test('renders the main title', () => {
      render(<Reliable data={mockReliableData} />);
      const desktopReliable = screen.getByTestId('desktop-reliable');
      const titleElement = within(desktopReliable).getByText(mockReliableData.title);
      expect(titleElement).toBeInTheDocument();
    });

    test('renders benefit cards with correct content', () => {
      render(<Reliable data={mockReliableData} />);
      const desktopReliable = screen.getByTestId('desktop-reliable');
      
      mockReliableData.image_tile.forEach(benefit => {
        expect(within(desktopReliable).getByText(benefit.title)).toBeInTheDocument();
        expect(within(desktopReliable).getByText(benefit.description)).toBeInTheDocument();
        expect(within(desktopReliable).getByAltText(benefit.image.alt as string)).toBeInTheDocument();
      });
    });
  });

  describe('Mobile Reliable Section', () => {
    test('renders the main title', () => {
      render(<Reliable data={mockReliableData} />);
      const mobileReliable = screen.getByTestId('mobile-reliable');
      const titleElement = within(mobileReliable).getByText(mockReliableData.title);
      expect(titleElement).toBeInTheDocument();
    });

    test('renders benefit cards with correct content', () => {
      render(<Reliable data={mockReliableData} />);
      const mobileReliable = screen.getByTestId('mobile-reliable');
      
      mockReliableData.image_tile.forEach(benefit => {
        expect(within(mobileReliable).getByText(benefit.title)).toBeInTheDocument();
        expect(within(mobileReliable).getByText(benefit.description)).toBeInTheDocument();
        expect(within(mobileReliable).getByAltText(benefit.image.alt as string)).toBeInTheDocument();
      });
    });
  });
}); 