import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono' 
        role='navigation'>
            <Link to='/' className='pl-8 font-black'>WTP</Link>
            <div className='pr-8'>
                <a href="https://kotbanditsky.github.io/" className='p-4 font-black' rel="noreferrer" target="_blank">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar