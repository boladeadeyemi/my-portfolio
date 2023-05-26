import React, { useState } from 'react'
import logo from "../asset/logo.png"
import { CloseRounded, MenuRounded } from '@mui/icons-material'


function Header() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className = 'bg-white flex justify-between items-center h-20  mx-auto px-1 md:px-8' >
      <div className=' lg:px-40 p-4'><img src={logo} alt="logo" className='h-10 inline'/></div>
      <div>
        <ul className='hidden md:flex '>
          <li className='p-4'>ABOUT</li>
          <li className='p-4'>WHAT I DO</li>
          <li className='p-4'>WORK</li>
          <li className='p-4'>CONTACT</li>
        </ul>
      </div>
      <div onClick={handleNav} className='block md:hidden pr-4'>
        {!nav ? <CloseRounded/> : <MenuRounded/>}
        </div>
      <div className={!nav ? 'fixed right-0 top-0 h-[70%] w-60 bg-white md:z-auto z-[-1] ease-in-out duration-500' : 'fixed right-[-100%]'}>
        <ul className='pt-24 '>
          <li className='p-4'>ABOUT</li>
          <li className='p-4'>WHAT I DO</li>
          <li className='p-4'>WORK</li>
          <li className='p-4'>CONTACT</li>
        </ul>
      </div>
    </div>
  )
}

export default Header