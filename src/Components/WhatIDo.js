import React from 'react'

function WhatIDo() {
  return (
    <div className='w-full bg-[#F9F9F9] py-16 px-4' id='whatIdo'>
            <p className='md:ml-32 ml-5 font-Kaushan font-bold text-left md:text-3xl sm:text-2xl text-1xl mb-4'>What I do</p>
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 md:grid-rows-2'>
            <div className='px-3'>
            <ion-icon className=' text-[2em] text-[#49bc56]' name="logo-javascript"></ion-icon>
            <h1 className='font-[Poppins]'>JAVASCRIPT</h1>
            <p className='text-[#999999] font-[Poppins] font-extralight mb-4 text-justify'>JavaScript is primarily used for enhancing the interactivity and functionality of websites. I use it to create dynamic web pages, handle user interactions, and manipulate the content of a webpage. It is often used in conjunction with HTML and CSS to build the front-end of web applications.</p>
            </div>
            <div className='px-3'>
            <ion-icon className='text-xl' name="logo-html5"></ion-icon>
            <h1 className='font-[Poppins]'>HTML</h1>
            <p className='text-[#999999] font-[Poppins] font-extralight mb-4 text-justify'>HTML is a fundamental technology for web development. It provides the structure and content of a webpage, while CSS handles the presentation, and JavaScript adds interactivity and dynamic functionality</p>
            </div>
            <div className='px-3'>
            <ion-icon className=' text-[2em] text-[#49bc56] ' name="logo-css3"></ion-icon>
            <h1 className='font-[Poppins]'>CSS</h1>
            <p className='text-[#999999] font-[Poppins] font-extralight mb-4 text-justify'>JavaScript is primarily used for enhancing the interactivity and functionality of websites. I use it to create dynamic web pages, handle user interactions, and manipulate the content of a webpage. It is often used in conjunction with HTML and CSS to build the front-end of web applications.</p>
            </div>
            <div className='px-3'>
            <ion-icon name="logo-python"></ion-icon>
            <h1 className='font-[Poppins]'>PYTHON</h1>
            <p className='text-[#999999] font-[Poppins] font-extralight mb-4 text-justify'>Python is a versatile and widely-used programming language that is used for a variety of purposes. Such as, Web Development, Data Science, Scripting and Automation, Scientific Computing, Game Development etc.</p>
            </div>
            <div className='px-3'>
            <ion-icon name="analytics-outline"></ion-icon>
            <h1 className='font-[Poppins]'>SQL</h1>
            <p className='text-[#999999] font-[Poppins] font-extralight mb-4 text-justify'>JavaScript is primarily used for enhancing the interactivity and functionality of websites. I use it to create dynamic web pages, handle user interactions, and manipulate the content of a webpage. It is often used in conjunction with HTML and CSS to build the front-end of web applications.</p>
            </div>
            <div className='px-3'>
            <ion-icon name="analytics-outline"></ion-icon>
            <h1 className='font-[Poppins]'>DATA-STRUCTURE AND ALGORITHM</h1>
            <p className='text-[#999999] font-[Poppins] font-extralight mb-4 text-justify'>A data structure is a way of organizing and storing data in a computer to efficiently perform operations on that data. It provides a means of representing, manipulating, and organizing data elements in a structured manner. Some common data structures include, array, linked list, stacks, queues, trees, Graphs, Hash Tables etc.</p>
            </div>


       </div>
    </div>
  )
}

export default WhatIDo