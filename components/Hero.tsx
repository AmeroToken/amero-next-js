import Link from 'next/link'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-4 relative">
      <div className="max-w-4xl z-10">
        <h1 className="text-5xl md:text-6xl font-bold font-orbitron mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 text-glow">
          AMERO TOKEN
        </h1>
        <p className="text-2xl md:text-3xl mb-8 text-cyan-100">
          Empowering the Future of Decentralized Finance and Gaming
        </p>
        <p className="text-xl md:text-2xl mb-8 text-blue-200">
          Explore AMERO's Ecosystem: Wallet, P2P Exchange, DEX, and Web3 Gaming
        </p>
        <div className="mb-8 p-4 bg-gray-900 bg-opacity-50 backdrop-blur-md rounded-lg inline-block border-future">
          <p className="text-sm md:text-base text-cyan-300">
            <span className="font-bold">Contract Address (BSC):</span>
            <br />
            <span className="font-mono break-all">0x795F62B36D5b890E32CF839eD8e462CF2BAcb3fA</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <a 
            href="https://amerowallet.io/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-full transition-colors border-future"
          >
            Download Wallet
          </a>
          <a 
            href="https://amerotoken.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors border-future"
          >
            Buy Amero
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

