import { ArrowDownward, FacebookOutlined, GitHub, LinkedIn, Twitter} from '@mui/icons-material'
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

function Banner() {
  const [text] = useTypewriter({
      words:["Developer", "Coder", "Freelancer"],
      loop:true,
      typeSpeed:20,
      deleteSpeed:20,
      delaySpeed:4000,
  });
  return (
    <div className='h-full'>
        <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
            <p  className='text-white font-[Poppins] font-bold md:text-8xl sm:text-6xl text-4xl' >{text}</p>
            <div  className=' text-white py-2 flex-row justify-between w-auto'>
                <FacebookOutlined />
                <GitHub/>
                <Twitter/>
                <LinkedIn/>
            </div>
           
        </div>
       <a href="#footer"> <ArrowDownward className='text-white animate-bounce w-6 h-6 mx-[50%]'/></a>
    </div>
  )
}

export default Banner