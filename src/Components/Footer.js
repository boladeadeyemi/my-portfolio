import { Copyright, FacebookOutlined, GitHub, LinkedIn, Twitter, YouTube } from '@mui/icons-material'
import React from 'react'

function Footer() {
  return (
    <div className='bg-white h-40 text-center justify-center py-24' id='footer'> 
            <div className='md:mx-auto mx-[35%] my-auto w-[15%] flex flex-row justify-between mb-4'>
                <a href="https://github.com/boladeadeyemi?tab=repositories" target='_blank'><GitHub/></a>
                <a href="https://www.facebook.com/Boleegin" target='_blank'><FacebookOutlined /></a>
                <a href="https://twitter.com/boladeadeyemi" target='_blank'><Twitter/></a>
                <a href="https://www.linkedin.com/in/bolade-adeyemi-8b254680/" target='_blank'><LinkedIn/></a>
                <a href="https://www.youtube.com/channel/UC3vQUIV9EOTwD7vARo5ViiA" target='_blank'><YouTube/></a>
            </div>
            <div className='font-Poppins font-light md:text-xs text-xs text-[#999999]'> <Copyright className=''/> 2023 Bolade, all rights reserved</div>
    </div>
  )
}

export default Footer