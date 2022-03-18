import React from 'react'
import logo from '../images/metal-mtl-logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <header className='flex justify-between py-5 max-w-7xl mx-auto'>
            <div className='flex items-center'>
                <Link to="/">
                    <img className="relative left-50 h-12 object-contain cursor-pointer" src={logo} alt=""/>
                </Link>
                <Link to="/">
                    <div className="hidden md:inline-flex items-center space-x-5">
                        <h2 className='text-xl font-semibold text-white relative left-5'>Crypto Dashboard</h2>
                    </div>
                </Link>
                
            </div>
            <div className='flex items-center space-x-5 text-white'>
                <Link to="/sign-in"><h3 className="hover:opacity-80">Sign In</h3></Link>
                <Link to="/register"><h3 className='border px-4 py-1 rounded-full border-white hover:opacity-80'>Get Started</h3></Link>
            </div>
        </header>
  )
}

export default Navbar