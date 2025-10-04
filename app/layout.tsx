import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { ChatbotWidget } from "@/components/ai/chatbot-widget"
import { ServiceWorkerRegistration } from "@/components/service-worker-registration"
import { Suspense } from "react"
import { organizationSchema, websiteSchema } from "@/lib/structured-data"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Nexpage Technologies - Shaping brands in the digital constellations",
    template: "%s | Nexpage Technologies"
  },
  description:
    "Cutting-edge digital agency specializing in web development, AI automation, branding, and data insights. Transform your business with Nexpage Technologies.",
  generator: "Next.js",
  applicationName: "Nexpage Technologies",
  referrer: "origin-when-cross-origin",
  keywords: [
    "digital agency", 
    "web development", 
    "AI automation", 
    "branding", 
    "SaaS", 
    "data analytics",
    "React development",
    "Next.js",
    "TypeScript",
    "UI/UX design",
    "digital transformation",
    "business automation"
  ],
  authors: [
    { name: "Shamikh Shahid", url: "https://nexpagetechnologies.com" },
    { name: "Wahb Ali", url: "https://nexpagetechnologies.com" },
    { name: "Umar Tariq", url: "https://nexpagetechnologies.com" }
  ],
  creator: "Nexpage Technologies Team",
  publisher: "Nexpage Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nexpagetechnologies.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexpagetechnologies.com",
    title: "Nexpage Technologies - Shaping brands in the digital constellations",
    description: "Cutting-edge digital agency specializing in web development, AI automation, branding, and data insights.",
    siteName: "Nexpage Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexpage Technologies - Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexpage Technologies - Shaping brands in the digital constellations",
    description: "Cutting-edge digital agency specializing in web development, AI automation, branding, and data insights.",
    images: ["/twitter-image.png"],
    creator: "@nexpagetechnologies",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Nexpage Technologies" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {/* Service worker registration moved to a client component */}
        {/* Google Analytics removed to fix hydration errors */}
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <Navigation />
            <main>{children}</main>
            <ChatbotWidget />
            <ServiceWorkerRegistration />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
