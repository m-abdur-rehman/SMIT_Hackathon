import NavItem from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'

import 'bootstrap/dist/css/bootstrap.css'
// import "../css/customcss.css";
// import "../app/"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'Blogging App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <NavItem />
        {children}
      </body>
    </html>
  )
}
