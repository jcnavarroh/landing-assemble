import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { api } from "../services/api";
import { Header as HeaderType, Footer as FooterType } from "../types";

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

  try {
    const { data: homeData, error } = await api.getHomePage();
    
    if (!error && homeData && homeData.length > 0) {
      const pageData = homeData[0];
      headerData = pageData.acf?.header;
      footerData = pageData.acf?.footer;
    }
  } catch (error) {
    console.error('Error loading layout data:', error);
  }

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header data={headerData} />
          <main className="flex-1">
            {children}
          </main>
          <Footer data={footerData} />
        </div>
      </body>
    </html>
  );
}
