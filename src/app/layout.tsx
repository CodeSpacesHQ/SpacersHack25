import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smoothscroll";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const duplicateSans = localFont({
  src: [
    {
      path: "../fonts/DuplicateSans-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../fonts/DuplicateSans.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/DuplicateSans-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/DuplicateSans-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../fonts/DuplicateSans-Heavy.ttf",
      weight: "800",
      style: "Heavy",
    },
  ],
  variable: "--duplicate-sans",
});

const graphikSans = localFont({
  src: [
    {
      path: "../fonts/Graphik/GraphikLight.otf",
      weight: "300",
      style: "Heavy",
    },
    {
      path: "../fonts/Graphik/GraphikRegular.otf",
      weight: "400",
      style: "light",
    },
    {
      path: "../fonts/Graphik/GraphikMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Graphik/GraphikSemibold.otf",
      weight: "600",
      style: "medium",
    },
    {
      path: "../fonts/Graphik/GraphikBold.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

const interDisplay = localFont({
  src: [
    {
      path: "../fonts/inter-display/InterDisplay-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/inter-display/InterDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/inter-display/InterDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/inter-display/InterDisplay-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/inter-display/InterDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--inter-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://hackathon.codespaces.org",
  ),
  title: {
    default:
      "Spacer's Hack Conf 2026 - Beyond Boundaries, Building for Tomorrow",
    template: "%s | Spacer's Hack Conf 2026",
  },
  description:
    "Spacer’s Hack Conf 2026 is Africa's pioneering tech event organized by Code Space. Join 1000+ visionaries for a hybrid hackathon, dynamic product showcases, and world-class networking across Fintech, AgriTech, HealthTech, AI, and more.",
  keywords: [
    "Spacer's Hack 2026",
    "Spacer's Hack Conf",
    "Beyond boundaries Building for tomorrow",
    "Code Space Africa",
    "Tech Conference Africa 2026",
    "Africa Hackathon 2026",
    "Fintech Africa",
    "AgriTech innovation Africa",
    "HealthTech conference",
    "Web3 Africa",
    "AI and IoT Nigeria",
    "SaaS innovation Africa",
    "African Tech Ecosystem",
    "Tech Talent Africa",
    "Product Showcase Africa",
    "Software Engineering Nigeria",
  ],
  authors: [{ name: "Code Space", url: "https://hackathon.codespaces.org" }],
  creator: "Code Space Team",
  publisher: "Code Space",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://hackathon.codespaces.org",
    title:
      "Spacer's Hack Conf 2026 - Beyond Boundaries, Building for Tomorrow",
    description:
      "The definitive 2-in-1 tech experience in Africa. Hybrid hackathon, product showcases, and keynote talks from industry leaders. August 29th, 2026.",
    siteName: "Spacer's Hack Conf",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spacer's Hack Conf 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Spacer's Hack Conf 2026 - Beyond Boundaries, Building for Tomorrow",
    description:
      "Join Africa's boldest tech innovators at Spacer's Hack Conf 2026. August 29th.",
    images: ["/og-image.png"],
    creator: "@CodeSpaceHQ",
    site: "@CodeSpaceHQ",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical:
      process.env.NEXT_PUBLIC_APP_URL || "https://hackathon.codespaces.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Spacer's Hack Conf 2026",
    description:
      "Africa's pioneering tech event. Hybrid hackathon, product showcases, and networking. Under the theme ~ 'Beyond boundaries, Building for tomorrow'.",
    url: "https://hackathon.codespaces.org",
    startDate: "2026-08-29T09:00:00+01:00",
    endDate: "2026-08-29T21:00:00+01:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Lagos, Nigeria",
      address: {
        "@type": "PostalAddress",
        addressCountry: "Nigeria",
        addressLocality: "Lagos",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Code Space",
      url: "https://hackathon.codespaces.org",
      logo: "https://hackathon.codespaces.org/images/logo.png",
    },
    offers: {
      "@type": "Offer",
      url: "https://hackathon.codespaces.org",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "NGN",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <Script
          defer
          data-domain="hackathon.codespaces.org"
          src="https://plausible.io/js/script.js"
        />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${interDisplay.className} ${duplicateSans.variable} antialiased lenis lenis-smooth`}
      >
        <SmoothScroll />

        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
