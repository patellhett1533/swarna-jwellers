import type { Metadata } from 'next'
import './_style/globals.css'
import Header from './_components/Header'
import Footer from './_components/Footer'
import StoreProvider from './StoreProvider'

export const metadata: Metadata = {
  title: 'Swarna Jwellers - A trusted Gold Retailer',
  description:
    'Swarna Jwellers - A trusted Gold Retailer with 25+ years in gold market',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </StoreProvider>
    </html>
  )
}
