import React from 'react'

function Testimonials() {
  return (
    <div className="bg-gray-100 py-20 text-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Témoignages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg">"Ce service m'a vraiment aidé à trouver ma nouvelle carrière."</p>
            <p className="mt-4 font-bold">- Jean Dupont</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg">"Grâce au test IA, j'ai découvert des opportunités que je n'aurais jamais envisagées."</p>
            <p className="mt-4 font-bold">- Marie Dubois</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg">"Le soutien continu est incroyable, je me sens vraiment accompagné."</p>
            <p className="mt-4 font-bold">- Luc Martin</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials