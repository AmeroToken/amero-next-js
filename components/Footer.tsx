import Link from 'next/link'
import { Twitter, Linkedin, MessageCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold font-orbitron mb-2">AMERO TOKEN</h3>
            <p className="text-gray-400">Empowering the Future of DeFi and Gaming</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-white hover:text-orange-500 transition-colors">
              <Twitter size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-orange-500 transition-colors">
              <Linkedin size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-orange-500 transition-colors">
              <MessageCircle size={24} />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </nav>
          <div className="text-gray-400">
            &copy; {new Date().getFullYear()} AMERO TOKEN. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

