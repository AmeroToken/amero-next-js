const roadmapItems = [
  {
    year: '2025',
    title: 'AMERO Blockchain Development',
    description: 'Start of native AMERO blockchain development',
  },
  {
    year: '2025',
    title: 'Web3 Gaming Ecosystem',
    description: 'Launch of initial Web3 gaming projects',
  },
  {
    year: '2026',
    title: 'AMERO Blockchain Launch',
    description: 'Official launch of AMERO native blockchain',
  },
  {
    year: '2026',
    title: 'Gaming Expansion',
    description: 'Expansion of Web3 gaming ecosystem on AMERO blockchain',
  },
]

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold font-orbitron mb-12 text-center">Roadmap</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500"></div>
          {roadmapItems.map((item, index) => (
            <div key={index} className={`mb-8 flex justify-${index % 2 === 0 ? 'start' : 'end'}`}>
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 w-full md:w-5/12 relative">
                <div className="absolute top-6 -mt-1 w-3 h-3 rounded-full bg-orange-500 shadow"></div>
                <h3 className="text-xl font-bold mb-2">{item.year}</h3>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roadmap

