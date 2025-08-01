import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: {
    default:'Find Jobs in Kenya'
  
  },
 
  description: 'Find Your Dream Job Today.Discover thousands of job opportunities with all the information you need. Your next career move starts here.',
  keywords: ['Kenya jobs', 'Job board Kenya', 'find jobs', 'Ajira', 'Nairobi jobs', 'remote jobs Kenya', 'ajira Connect'],
  authors: [{ name: 'JobsKe Team', url: 'https://jobske.com' }],
  creator: 'JobsKe',
  openGraph: {
    title: 'JobsKe – Find Jobs in Kenya',
    description: 'Kenya\'s smart job board helping you connect with top employers. Explore job listings by industry, location, or company.',
    url: 'https://jobske.com',
    siteName: 'JobsKe',
    images: [
      {
        url: 'https://jobske.com/site-identity.png',
        width: 1200,
        height: 630,
        alt: 'JobsKe – Job board in Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JobsKe – Jobs in Kenya',
    description: 'Smart job listings and career opportunities in Kenya.',
    site: '@jobs_ke',
    creator: '@jobs_ke',
    images: ['https://jobske.com/site-identity.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
    <head>
        <Script
          id="structured-data-logo"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Radiant Metals Workshop",
              url: "https://jobske.com",
              logo: "https://jobske.com/site-identity.png",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      
      >
        <Suspense>
        <Header/>
        {children}

        </Suspense>
     
        <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}
