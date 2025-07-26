import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ErrorComponent from "../components/ui/ErrorComponent";
import LoadingComponent from "../components/ui/LoadingComponent";
import { api } from "../services/api";
import { Header as HeaderType, Footer as FooterType } from "../types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Assemble - Connect, Collaborate, Innovate",
  description: "Innovative platform to connect and collaborate efficiently. Organize projects, manage teams and achieve extraordinary results.",
  keywords: ["collaboration", "project management", "teams", "productivity", "platform"],
  authors: [{ name: "Assemble Team" }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Obtener datos del API para Header y Footer
  let headerData: HeaderType | undefined = undefined;
  let footerData: FooterType | undefined = undefined;
  let error: string | null = null;

  try {
    const { data: homeData, error: apiError } = await api.getHomePage();
    
    if (apiError) {
      error = apiError;
    } else if (homeData && homeData.length > 0) {
      const pageData = homeData[0];
      headerData = pageData.acf?.header;
      footerData = pageData.acf?.footer;
    } else {
      error = "No data available";
    }
  } catch (err) {
    error = err instanceof Error ? err.message : "An unexpected error occurred";
    console.error('Error loading layout data:', err);
  }

  // Si hay error, mostrar ErrorComponent
  if (error) {
    return (
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ErrorComponent 
            message={`Failed to load page data: ${error}`}
            retry={() => window.location.reload()}
          />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip link para accesibilidad */}
        <a href="#main-content" className="skip-link focus-ring">
          Skip to main content
        </a>
        
        <div className="min-h-screen flex flex-col">
          <Header data={headerData} />
          <main id="main-content" className="flex-1" role="main">
            {children}
          </main>
          <Footer data={footerData} />
        </div>
      </body>
    </html>
  );
}
