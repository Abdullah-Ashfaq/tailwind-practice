import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(true)
    const handleNavbar = () => {
        setNav(!nav)
    }
    return (
        <div className='text-white flex h-20 justify-between items-center p-4 max-w-[1240px] mx-auto border-b border-b-gray-800 '>
            <h1 className='text-3xl text-[#00df9a] font-bold'>Tailwind.</h1>
            <ul className='hidden md:flex uppercase text-1xl'>
                <li className='p-4 cursor-pointer'>Home</li>
                <li className='p-4 cursor-pointer'>About</li>
                <li className='p-4 cursor-pointer'>Company</li>
                <li className='p-4 cursor-pointer'>contact</li>

            </ul>
            <div onClick={handleNavbar} className='block md:hidden'>
                {
                    !nav ? <AiOutlineClose size={20}></AiOutlineClose> : <AiOutlineMenu size={20} className='cursor-pointer'></AiOutlineMenu> 
                }
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] bg-[#000300] h-full p-4 border-r border-gray-900 ease-in-out duration-500' : 'fixed left-[-100%] '}>
                <h1 className='text-3xl text-[#00df9a] font-bold p-3 pl-3'>Tailwind.</h1>
                <ul className=' uppercase text-1xl'>
                    <li className='p-4 cursor-pointer border-b border-gray-800'>Home</li>
                    <li className='p-4 cursor-pointer border-b border-gray-800'>About</li>
                    <li className='p-4 cursor-pointer border-b border-gray-800'>Company</li>
                    <li className='p-4 cursor-pointer border-b border-gray-800'>contact</li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar