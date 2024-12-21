import Background3D from '../components/Background3D'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Tokenomics from '../components/Tokenomics'
import Roadmap from '../components/Roadmap'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Background3D />
      <Header />
      <Hero />
      <Features />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </main>
  )
}

