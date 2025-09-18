import React from 'react'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = () => {

  return (
    <nav className='w-full flex items-center justify-between'>
        <Image 
          src="/logo.png" 
          alt="Webshop Logo" 
          height={130} 
          width={130}
        />

        <LanguageSwitcher />
    </nav>
  )
}

export default Navbar