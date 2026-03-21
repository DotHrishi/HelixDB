import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black p-5 border-t border-blue-900 text-gray-400 font-mono shadow-[0_-5px_20px_rgba(37,99,235,0.05)]'>
        <h1 className='flex justify-start text-3xl font-extralight text-blue-600 tracking-wide'>
           <span className='font-extrabold'>Helix</span>
           <span className='text-red-500'>DB</span>
        </h1>
        <div className='flex justify-end'>
            <ul className='flex flex-row gap-5 mr-7 p-5 text-sm uppercase tracking-wider'>
                <li className='hover:text-red-500 transition-colors cursor-pointer'>About Us</li>
                <li className='hover:text-red-500 transition-colors cursor-pointer'>Contact</li>
                <li className='hover:text-red-500 transition-colors cursor-pointer'>Privacy Policy</li>
            </ul>
        </div>
        <p className='flex pt-2 justify-center text-xs tracking-widest text-blue-900'>© 2023 HELIXDB. ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer