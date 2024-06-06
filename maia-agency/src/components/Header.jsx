import React from 'react'
import logo from '../assets/image/logo_white.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className='flex justify-between items-center'>
        
        <img src={logo} className="w-[180px]" alt="Image qui illustre le logo de l'entreprise [ ]" />
        <ul className='flex gap-4 md:gap-14'>
            <li className='hover:font-bold cursor-pointer text-white'><Link to="/">Home</Link></li>
            <li className='hover:font-bold cursor-pointer'><Link to="/test">Test</Link></li>
            <li className='hover:font-bold cursor-pointer'><Link to="/blog">Blog</Link></li>
            <li className='hover:font-bold cursor-pointer'><Link to="/a-propos">A propos</Link></li>
            <li className='hover:font-bold cursor-pointer'><Link to="/contact">Contact</Link></li>
        </ul>
        <button className='bg-white rounded-full text-black'><Link to="/compte">Mon compte</Link></button>

    </nav>
  )
}

export default Header