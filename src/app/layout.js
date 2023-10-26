import { Quicksand } from 'next/font/google'

import '@/styles/globals.css'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata = {
  title: 'Trip Tracking App',
  description: 'Trip Tracking Web App'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}
