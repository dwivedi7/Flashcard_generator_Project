import React from 'react'
import DarkTheme from '../DarkTheme/DarkTheme'
import Logo from './logo.png'

const Navbar = () => {
    return (
        <div className='h-16 w-screen fixed z-50 bg-blue-200 dark:bg-[#1e2125] flex items-center space-between drop-shadow-md'>
            <div className='flex items-center font-medium text-3xl'>
                <img className='h-12 my-auto ml-4' src={Logo} alt="AlmaBetter" />
                <span className='dark:text-white text-5xl ml-2'>maBetter</span>
            </div>
            <DarkTheme />
        </div>
    )
}

export default Navbar
