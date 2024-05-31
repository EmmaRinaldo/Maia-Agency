import React from 'react'
import logo from '../assets/image/logo-nav.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className='flex justify-between items-center'>
        
        <img src={logo} className="w-[180px]" alt="Image qui illustre le logo de l'entreprise [ ]" />
        <ul className='flex gap-4 md:gap-14'>
            <li className='hover:font-bold cursor-pointer text-white'><Link to="/">Home</Link></li>
            <li className='hover:font-bold cursor-pointer'><Link to="/">A propos de nous</Link></li>
            <li className='hover:font-bold cursor-pointer'><Link to="/blog">Blog</Link></li>
            <li className='hover:font-bold cursor-pointer'><Link to="/">Contact</Link></li>
        </ul>
        <button className='bg-emerald-400 rounded-full text-white'>Contactez-nous</button>

    </nav>
  )
}

export default Header