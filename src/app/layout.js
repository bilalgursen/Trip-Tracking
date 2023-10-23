import { Inter } from 'next/font/google'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Trip Tracking App',
  description: 'Trip Tracking Web App'
}

export default function RootLayout({ children }) {
  return (
    <html className="bg-[#453976]" lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
