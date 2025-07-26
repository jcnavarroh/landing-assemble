import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Hero from '../Hero';
import { HeroImage, Image } from '../../../types';

// Partial mock for the Image type
const mockImage = (url: string, alt: string): Partial<Image> => ({ url, alt, width: 100, height: 100 });

// Mock data for the Hero component
const mockHeroData: HeroImage = {
  desktop_image: mockImage('/desktop-hero.jpg', 'Desktop hero image') as Image,
  mobile_image: mockImage('/mobile-hero.jpg', 'Mobile hero image') as Image,
  title: "Connect, Collaborate, Innovate",
  subtitle: "A revolutionary platform.",
  cta_primary: "Get Started",
  cta_secondary: "Learn More",
  trusted_by: "Trusted by the best",
  logos: ["LogoA", "LogoB", "LogoC"],
};

describe('Hero Component', () => {
  test('renders nothing if no data is provided', () => {
    const { container } = render(<Hero data={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });

  describe('Desktop Hero', () => {
    test('renders desktop image', () => {
      render(<Hero data={mockHeroData} />);
      const desktopHero = screen.getByTestId('desktop-hero');
      const desktopImage = within(desktopHero).getByAltText('Desktop hero image');
      expect(desktopImage).toBeInTheDocument();
    });

    test('renders trusted by section with logos', () => {
      render(<Hero data={mockHeroData} />);
      const desktopHero = screen.getByTestId('desktop-hero');
      expect(within(desktopHero).getByText('Trusted by the best')).toBeInTheDocument();
      mockHeroData.logos.forEach(logo => {
        expect(within(desktopHero).getByText(logo)).toBeInTheDocument();
      });
    });
  });

  describe('Mobile Hero', () => {
    test('renders mobile image', () => {
      render(<Hero data={mockHeroData} />);
      const mobileHero = screen.getByTestId('mobile-hero');
      const mobileImage = within(mobileHero).getByAltText('Mobile hero image');
      expect(mobileImage).toBeInTheDocument();
    });
  });

  describe('Fallback Content', () => {
    test('renders fallback content when images are not provided', () => {
      const dataWithoutImages: HeroImage = { ...mockHeroData, desktop_image: undefined, mobile_image: undefined };
      render(<Hero data={dataWithoutImages} />);
      
      const desktopHero = screen.getByTestId('desktop-hero');
      const mobileHero = screen.getByTestId('mobile-hero');

      // Use a custom text matcher for the title
      const titleMatcher = (content: string, element: Element | null) => {
        const hasText = (node: Element) => node.textContent === "Connect, Collaborate, Innovate";
        const elementHasText = element ? hasText(element) : false;
        const childrenDontHaveText = Array.from(element?.children || []).every(child => !hasText(child));
        return elementHasText && childrenDontHaveText;
      };

      // Check for fallback content in both desktop and mobile versions
      expect(within(desktopHero).getByText(titleMatcher)).toBeInTheDocument();
      expect(within(desktopHero).getByText(mockHeroData.subtitle)).toBeInTheDocument();
      expect(within(desktopHero).getByText(mockHeroData.cta_primary)).toBeInTheDocument();

      expect(within(mobileHero).getByText(titleMatcher)).toBeInTheDocument();
      expect(within(mobileHero).getByText(mockHeroData.subtitle)).toBeInTheDocument();
      expect(within(mobileHero).getByText(mockHeroData.cta_primary)).toBeInTheDocument();
    });
  });
}); 