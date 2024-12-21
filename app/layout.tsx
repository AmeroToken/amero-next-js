import './globals.css'
import { Inter, Orbitron } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

export const metadata = {
  title: 'AMERO TOKEN',
  description: 'Empowering the Future of Decentralized Finance and Gaming',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${orbitron.variable} font-sans bg-gray-900 text-white`}>
        {children}
      </body>
    </html>
  )
}

