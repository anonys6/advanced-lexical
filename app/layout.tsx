import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Advanced Text Editor: Edit Your Plain Text Online for FREE",
  description: "This free online advance text editor comes with features like case conversion, super-easy text editing and 10+ formatting functionalities. Try now.",
  openGraph: {
    title: "Advanced Text Editor: Edit Your Plain Text Online for FREE",
    description: "This free online advance text editor comes with features like case conversion, super-easy text editing and 10+ formatting functionalities. Try now.",
    url: "https://advancedtexteditor.com/",
    siteName: "Advanced Text Editor",
    images: [
      {
        url: "https://advancedtexteditor.com/og-image.svg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  other: {
    "robots": "index, follow",
    "keywords": "text editor, online text editor, free text editor, advanced text editor",
  },
  metadataBase: new URL("https://advancedtexteditor.com/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon links */}
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link rel="canonical" href="https://www.advancedtexteditor.com/" />
      </head>
      <body>
        <GoogleAnalytics />
        {/* Metadata script */}
        <Script type="application/ld+json" id="json-ld">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Advanced Text Editor",
              "url": "https://www.advancedtexteditor.com/",
              "description": "This free online advanced text editor comes with features like case conversion, super-easy text editing, and 10+ formatting functionalities. Try now.",
              "applicationCategory": "TextEditor",
              "operatingSystem": "All",
              "creator": {
                "@type": "Organization",
                "name": "Advanced Text Editor"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "bestRating": "5",
                "worstRating": "1",
                "ratingCount": "100"
              }
            }
        `}
        </Script>

        {/* Clarity script */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}
        </Script>

        <Header />

        {children}

        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
