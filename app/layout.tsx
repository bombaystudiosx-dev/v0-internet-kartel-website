import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Oswald } from "next/font/google"

import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", weight: ["400", "500", "600", "700"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0a0a0a",
}

export const metadata: Metadata = {
  title: "Internet Kartel | Street Hustle. Real Ambition. Kingpin Energy.",
  description:
    "Internet Kartel is where ambition becomes presence. Built for artists, creators, and entrepreneurs ready to move different. Founded by Cali_Bombay.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
