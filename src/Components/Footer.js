import { Copyright, FacebookOutlined, GitHub, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'

function Footer() {
  return (
    <div className='bg-white h-40 text-center justify-center py-24' id='footer'> 
            <div className='md:mx-auto mx-[35%] my-auto w-[10%] flex flex-row justify-between'>
                <FacebookOutlined/>
                <GitHub/>
                <Twitter/>
                <LinkedIn/>
            </div>
            <div className='font-Poppins font-light md:text-xs text-xs text-[#999999]'> <Copyright className=''/> Bolade Adeyemi, all rights reserved</div>
    </div>
  )
}

export default Footer