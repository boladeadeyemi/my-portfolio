import React from 'react'
import tekstor from '../asset/tekstor.jpg'
import amazon from '../asset/amazon-clone.png'
import clock from '../asset/digital-clock.png'

function RecentWork() {
  return (
    <div className='w-full bg-white py-16 px-4' id='recentWorks'>
            <p className='md:ml-32 ml-5 font-Kaushan font-bold text-left md:text-3xl sm:text-2xl text-1xl mb-4'>Recent Works</p>
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 md:grid-rows-2'>
            <div className='px-3 border-solid border-2 border-light-blue-500 rounded-2xl mr-2 mb-2'>
            <img src={tekstor}alt="" className='mb-4' />
            <h1 className='font-[Poppins]'>TEKSTOR ECOMMERCE</h1>
            </div>
            <div className='px-3 rounded-2xl mr-2 mb-2'>
            <img src={amazon}alt="" className='mb-4 h-[19.5em] mx-auto pt-3' />
            <h1 className='font-[Poppins]'>AMAZON CLONE</h1>
            </div>
            <div className='px-3 border-solid border-2 border-light-blue-500 rounded-2xl mb-2'>
            <img src={clock}alt="" className='mb-4 h-[19.5em] mx-auto pt-3'/>
            <h1 className='font-[Poppins]'>DIGITAL CLOCK</h1>
            </div>
            <div className='px-3 border-solid border-2 border-light-blue-500 rounded-2xl'>
            <img src={tekstor}alt="" className='mb-4' />
            <h1 className='font-[Poppins]'>TEKSTOR ECOMMERCE</h1>
            </div>
            

       </div>
    </div>
  )
}

export default RecentWork