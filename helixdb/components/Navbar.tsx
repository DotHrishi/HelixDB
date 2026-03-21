import React from 'react'

const Navbar = () => {
  return (
    <nav className='p-5 bg-black border-b border-blue-900 shadow-[0_5px_20px_rgba(37,99,235,0.05)]'>
        <ul className='flex justify-between items-center'>
            <li className='text-3xl font-extralight text-blue-600 tracking-wide'>
               <span className='font-extrabold'>Helix</span>
               <span className='text-red-500'>DB</span>
            </li>
            <div className='flex gap-10 text-gray-300 font-mono text-sm uppercase tracking-wider'>
               <li className='pt-2 hover:text-red-500 transition-colors cursor-pointer'>Learn More</li>
               <li className='pt-2 hover:text-red-500 transition-colors cursor-pointer'>Login</li>
               <li className='pt-2 hover:text-red-500 transition-colors cursor-pointer'>SignUp</li>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar