import { Wallet, Users, BarChart3, Megaphone, Gamepad2 } from 'lucide-react'

const features = [
  {
    title: 'Wallet',
    description: 'Secure, user-friendly wallet for AMERO TOKEN',
    icon: Wallet,
  },
  {
    title: 'P2P Exchange',
    description: 'Peer-to-peer trading platform for seamless transactions',
    icon: Users,
  },
  {
    title: 'Decentralized Exchange (DEX)',
    description: 'High-performance crypto trading',
    icon: BarChart3,
  },
  {
    title: 'Crypto Ad Network',
    description: 'Blockchain-powered advertising solutions',
    icon: Megaphone,
  },
  {
    title: 'Future Innovations',
    description: 'Native blockchain and Web3 gaming in the 2025-26 roadmap',
    icon: Gamepad2,
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold font-orbitron mb-12 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 transition-transform hover:scale-105">
              <feature.icon className="w-12 h-12 mb-4 text-orange-500" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

