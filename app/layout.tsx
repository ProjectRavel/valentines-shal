import type { Metadata, Viewport } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'

import './globals.css'

const _poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
})

const _playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Happy Valentine\'s Day, Shal',
  description: 'I just Created Kecil kecilan dulu yang sengaja aku buat untuk kamu.',
}

export const viewport: Viewport = {
  themeColor: '#e8a0b5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${_poppins.variable} ${_playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
