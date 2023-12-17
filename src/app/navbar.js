'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    
    const toggleMenu = ()=>{
        setIsMenuOpen(prev => !prev);
    }

    const pathName = usePathname();
    console.log(pathName);

    return <main className='flex justify-between pt-5 md:mt-0 xl:mt-14 ml-8 items-center z-50 relative'>
        <div className='flex items-center justify-between w-full mr-8 md:w-fit'
            onClick={toggleMenu}
        >
            <img src="/assets/shared/logo.svg"/>
            <img src="/assets/shared/icon-hamburger.svg" className="sm:hidden"/>
        </div>

        <div 
            className={`absolute md:relative right-0 top-0 w-2/3 h-screen md:h-auto pt-28 md:pt-8 gap-8 flex-col flex md:flex-row md:gap-12 menu md:justify-center md:items-center p-8 md:w-1/2 ${isMenuOpen ? 'block' : 'hidden'} md:flex min-w-fit`}
            >
            <div
                className='fixed top-8 right-8 md:hidden'
                onClick={toggleMenu}
            >
                <img src='/assets/shared/icon-close.svg' alt="close icon"/>
            </div>
            <span className={`flex items-center ${pathName === '/' ? 'sm:navSelected' : 'sm:navNotSelected'} relative`}>
                <p className={`font-bold mr-3`}>00</p>
                <Link href='/'>HOME</Link>
            </span>
            <span className={`flex items-center ${pathName === '/destination' ? 'sm:navSelected' : 'sm:navNotSelected'} relative`}>
                <p className={`font-bold  mr-3`}>01</p>
                <Link href='/destination'>DESTINATION</Link>
            </span>
            <span className={`flex items-center ${pathName === '/crew' ? 'sm:navSelected' : 'sm:navNotSelected'} relative`}>
                <p className={`font-bold  mr-3`}>02</p>
                <Link href='/crew'>CREW</Link>
            </span>
            <span className={`flex items-center ${pathName === '/technology' ? 'sm:navSelected' : 'sm:navNotSelected'} relative`}>
                <p className={`font-bold  mr-3`}>03</p>
                <Link href='/technology'>TECHNOLOGY</Link>
            </span>
        </div>
    </main>
}