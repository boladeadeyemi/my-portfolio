import React from 'react'

function Contact() {
  return (
    <div className='w-full bg-[#F9F9F9] py-16 px-4' id='contactMe'>
            <p className='md:ml-32 ml-5 font-Kaushan font-bold text-left md:text-3xl sm:text-2xl text-1xl mb-4'>Contact Me</p>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 md:grid-rows-2'>
            <div className='px-1 pb-5 ml-3 py-4'>
            <input className=' border-b-2 mx-auto  w-[95%] py-4 pl-2' placeholder='Name* ' />
            </div>
            <div className='px-1 pb-5 ml-3 py-4'>
            <input  className='border-b-2 mx-auto w-[95%] py-4 pl-2' placeholder='Phone*'/>
            </div>
            <div className='px-1 pb-5 ml-3 py-4'>
            <input  className='border-b-2 mx-autox w-[95%] py-4 pl-2' placeholder='Email*'/>
            </div>
            <div className='px-1 pb-5 ml-3 py-4'>
            <input  className='border-b-2 mx-autox w-[95%] py-4 pl-2' placeholder='Subject*'/>
            </div>
            <div className='px-1 pb-5 ml-3 py-4'>
             <input  className='border-b-2 mx-autox w-[95%] py-4 pl-2' placeholder='Message'/>
            </div>
            <div className='px-1 pb-5 ml-3 py-4'>
             <button className='py-2 text-center bg-[#49bc56] w-[40%] md:text-sm sm:text-[0.9em] text-[0.7em] text-white font-Poppins ml-2'>SEND MESSAGE</button>
            </div>
       </div>
       
    </div>
  )
}

export default Contact