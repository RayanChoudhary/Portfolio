import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "John Doe | Frontend Developer",
  description:
    "Professional portfolio of John Doe, a frontend developer specializing in Next.js, React, and TypeScript.",
  keywords: ["frontend developer", "web developer", "Next.js", "React", "TypeScript", "portfolio"],
  authors: [{ name: "John Doe" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johndoe-portfolio.vercel.app",
    title: "John Doe | Frontend Developer",
    description:
      "Professional portfolio of John Doe, a frontend developer specializing in Next.js, React, and TypeScript.",
    siteName: "John Doe Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "John Doe Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe | Frontend Developer",
    description:
      "Professional portfolio of John Doe, a frontend developer specializing in Next.js, React, and TypeScript.",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
