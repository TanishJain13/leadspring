'use client';

import { Geist, Geist_Mono } from 'next/font/google'
import { useState } from 'react'

import './globals.css'
import LayoutContent from '@/components/layout-content'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        <LayoutContent
          showContactModal={showContactModal}
          setShowContactModal={setShowContactModal}
        >
          {children}
        </LayoutContent>
      </body>
    </html>
  )
}
