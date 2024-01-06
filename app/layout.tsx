import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Portfolio Site',
  description: 'Cameron\'s Portfolio Site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} bg-slate-700`}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
