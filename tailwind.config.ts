import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Fuentes específicas de Figma
      fontFamily: {
        'figtree': ['Figtree', 'system-ui', 'sans-serif'],
        'manrope': ['Manrope', 'system-ui', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
        'ibm-plex': ['IBM Plex Sans', 'system-ui', 'sans-serif'],
      },
      
      // Colores específicos de Figma
      colors: {
        // Colores principales
        'accent': {
          1: '#5C4F3A', // Accent/Accent 1
          3: '#AAE8FD', // Accent/Accent 3
        },
        'background': {
          1: '#461A4C', // Background/Background 1
          2: '#FFFFFF', // Background/Background 2
          3: '#EDEDED', // Background/Background 3
          4: '#AAE8FD', // Background 4
          5: '#777777', // Background 5
        },
        'text': {
          'heading': '#394508', // Text/Heading
          'paragraph': '#777777', // Text/Paragraph 2
          'black': '#000000',
          'white': '#FFFFFF',
        },
        'divider': '#E9E9E9', // Divider Lines
        'link': {
          'default': '#D2FD9C', // Link default
          'hover': '#77EDFF', // Link hover
        },
        'purple': {
          'figma': '#5C137E', // Purple específico de Figma
        },
      },
      
      // Espaciados específicos de Figma
      spacing: {
        'figma-xs': '8px',
        'figma-sm': '10px',
        'figma-md': '14px',
        'figma-lg': '17px',
        'figma-xl': '20px',
        'figma-2xl': '22px',
        'figma-3xl': '24px',
        'figma-4xl': '30px',
        'figma-5xl': '50px',
        'figma-6xl': '74px',
        'figma-7xl': '100px',
        'figma-15': '15px',
        'figma-21.33': '21.33px',
      },
      
      // Dimensiones específicas de Figma
      width: {
        'figma-container': '1200px',
        'figma-content': '1160px',
        'figma-button': '133.33px',
        'figma-icon': '30px',
        'figma-image': '174px',
        'figma-335': '335px',
        'figma-369': '369px',
        'figma-373.33': '373.33px',
        'figma-481': '481px',
      },
      
      maxWidth: {
        'figma-container': '1200px',
        'figma-content': '1160px',
      },
      
      height: {
        'figma-container': '100%',
        'figma-label': '62px',
        'figma-button': '120px',
        'figma-icon': '30px',
        'figma-image': '174px',
        'figma-text': '14px',
        'figma-heading1': '38px',
        'figma-heading2': '31px',
        'figma-heading3': '22px',
        'figma-paragraph': '17px',
        'figma-link': '13px',
        'figma-30': '30px',
        'figma-44': '44px',
        'figma-250': '250px',
        'figma-279': '279px',
        'figma-288.09': '288.09px',
        'figma-317.09': '317.09px',
        'figma-925': '925px',
      },
      
      // Tipografía específica de Figma
      fontSize: {
        'figma-xs': ['11.5px', { lineHeight: '115%', letterSpacing: '-0.02em' }],
        'figma-sm': ['12px', { lineHeight: '120%', letterSpacing: '-0.02em' }],
        'figma-base': ['16px', { lineHeight: '109.01%' }],
        'figma-lg': ['20px', { lineHeight: '109.01%', letterSpacing: '-0.02em' }],
        'figma-xl': ['28px', { lineHeight: '109.01%', letterSpacing: '-0.02em' }],
        'figma-2xl': ['36px', { lineHeight: '105.81%', letterSpacing: '-0.02em' }],
        'figma-28': ['28px', { lineHeight: '105.81%', letterSpacing: '-0.02em' }],
        'figma-42': ['42px', { lineHeight: '105.81%', letterSpacing: '-0.02em' }],
      },
      
      // Bordes específicos de Figma
      borderWidth: {
        'figma-thin': '1px',
        'figma-medium': '2px',
      },
      
      borderRadius: {
        'figma-sm': '4px',
        'figma-md': '5px',
        'figma-lg': '10px',
        'figma-xl': '20px',
      },
      
      // Sombras y efectos
      boxShadow: {
        'figma': '0px 0px 0px 1px #9747FF', // Para elementos dashed
      },
      
      // Gradientes específicos
      backgroundImage: {
        'figma-gradient': 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
      },
      
      // Gap específico de Figma
      gap: {
        'figma-xs': '8px',
        'figma-sm': '10px',
        'figma-md': '14px',
        'figma-lg': '17px',
        'figma-xl': '22px',
        'figma-2xl': '50px',
        'figma-3xl': '74px',
        'figma-15': '15px',
        'figma-21.33': '21.33px',
      },
      
      // Padding específico de Figma
      padding: {
        'figma-xs': '10px',
        'figma-sm': '20px',
        'figma-md': '24px',
        'figma-lg': '30px',
        'figma-xl': '100px',
      },
      
      // Margin específico de Figma
      margin: {
        'figma-xs': '10px',
        'figma-sm': '20px',
        'figma-md': '24px',
        'figma-lg': '30px',
        'figma-xl': '100px',
      },
    },
  },
  plugins: [],
};

export default config; 