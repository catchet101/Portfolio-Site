import Navbar from './components/navbar/Navbar'
import './globals.css'

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
      <body className='bg-slate-700 font-mono'>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
