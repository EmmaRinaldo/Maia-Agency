import React from 'react'

function Newsletter() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-black">Inscrivez-vous à notre Newsletter</h2>
        <p className="text-lg mb-6 text-black">Restez informé des dernières nouvelles et des conseils en reconversion professionnelle.</p>
        <form className="flex flex-col md:flex-row justify-center gap-4">
          <input type="email" placeholder="Votre adresse email" className="py-3 px-6 rounded-full border-2 border-gray-300 outline-none text-white" />
          <button type="submit" className="bg-red-500 text-white py-3 px-6 rounded-full hover:bg-red-600 transition duration-300">S'inscrire</button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter