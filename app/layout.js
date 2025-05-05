import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import { ClerkProvider } from "@clerk/nextjs";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: 'AjiraConnect – Find Jobs in Kenya',
  description: 'Discover thousands of job opportunities across Kenya. Browse jobs by category, location, and experience level. Start your career journey with AjiraConnect today.',
  keywords: ['Kenya jobs', 'Job board Kenya', 'find jobs', 'Ajira', 'Nairobi jobs', 'remote jobs Kenya', 'ajira Connect'],
  authors: [{ name: 'AjiraConnect Team', url: 'https://jobsafari.com' }],
  creator: 'AJiraConnect',
  openGraph: {
    title: 'AjiraConnect – Find Jobs in Kenya',
    description: 'Kenya\'s smart job board helping you connect with top employers. Explore job listings by industry, location, or company.',
    url: 'https://ajiraconnect.com',
    siteName: 'ajiraConnect',
    images: [
      {
        url: 'https://ajiraconnect.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AjiraConnect – Job board in Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JobSafari – Jobs in Kenya',
    description: 'Smart job listings and career opportunities in Kenya.',
    site: '@jobsafari_ke',
    creator: '@jobsafari_ke',
    images: ['https://jobsafari.co.ke/twitter-card.jpg'],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}
