'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const tokenomics = [
  { name: 'People', value: 70, color: '#003399' },
  { name: 'Developers', value: 5, color: '#0055CC' },
  { name: 'Presale', value: 10, color: '#0077FF' },
  { name: 'Community', value: 1, color: '#00AAFF' },
  { name: 'Staking Rewards', value: 10, color: '#00DDFF' },
  { name: 'Marketing & Misc', value: 4, color: '#FF6600' },
]

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold font-orbitron mb-12 text-center">Tokenomics</h2>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-2xl font-bold mb-4">Total Supply: 1 billion tokens (1,000,000,000)</h3>
            <ul className="space-y-2">
              {tokenomics.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
                  <span>{item.name}: {item.value}% ({item.value * 10000000} tokens)</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/2 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={tokenomics}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {tokenomics.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tokenomics

