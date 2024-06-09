import React from 'react'

function Process() {
  return (
    <div className="bg-white text-black py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Notre Processus en 3 étapes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">1. Évaluation</h3>
            <p className="text-lg">Utilisez notre test IA pour évaluer vos compétences et intérêts.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">2. Planification</h3>
            <p className="text-lg">Recevez un plan personnalisé pour votre reconversion professionnelle.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">3. Action</h3>
            <p className="text-lg">Mettez en œuvre votre plan avec notre soutien continu.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process