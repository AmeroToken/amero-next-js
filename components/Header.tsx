'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img 
            src="https://i.ibb.co/SVLnyB4/PNG-3.png" 
            alt="AMERO TOKEN Logo" 
            className="h-10 w-10"
          />
          <span className="text-2xl font-bold font-orbitron text-white">
            AMERO TOKEN
          </span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {['Home', 'About', 'Features', 'Tokenomics', 'Roadmap', 'Whitepaper', 'Contact Us'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white hover:text-orange-500 transition-colors">
              {item}
            </Link>
          ))}
        </nav>
        <a 
          href="https://amerotoken.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Buy Amero
        </a>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          <nav className="flex flex-col space-y-4 px-4">
            {['Home', 'About', 'Features', 'Tokenomics', 'Roadmap', 'Whitepaper', 'Contact Us'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white hover:text-orange-500 transition-colors" onClick={toggleMenu}>
                {item}
              </Link>
            ))}
            <a
              href="https://amerotoken.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Buy Amero
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

