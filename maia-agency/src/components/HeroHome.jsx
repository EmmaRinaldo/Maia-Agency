import React from 'react'
import { Link } from 'react-router-dom';

function HeroHome() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-6 text-black">Bienvenue sur notre site</h1>
        <p className="text-lg mb-6 text-black">Découvrez comment notre test IA peut vous aider dans votre reconversion professionnelle</p>
        <Link to="/test" className="bg-red-500 text-white py-3 px-6 rounded-full hover:bg-red-600 transition duration-300">Faire le test IA</Link>
      </div>
    </div>
  )
}

export default HeroHome