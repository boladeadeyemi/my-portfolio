import React from 'react'
import Bolade from '../asset/bolade.jpg'

function About() {
  
    // File URL
    const fileUrl = 'https://drive.google.com/file/d/1HEC-DQrTUoChCJ49sndjnUZ4j3Nn2pv6/view?usp=sharing';
    const fileName = 'Resume.pdf';

    const downloadFile = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    // Set the "download" attribute to specify the filename
    link.download = fileName;
    // Trigger a click event on the anchor element
    link.click();
  };


  return (
    <div className='w-full bg-white py-16 px-4 overflow-x-hidden' id='about'>
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-80 mx-auto my-4' src={Bolade} alt="bolade" />
        <div className='flex flex-col justify-center mx-auto h-96'>
          <h1 className='font-Kaushan md:text-4xl sm:text-3xl text-2xl text-black font-bold mb-6 md:mx-0 px-2 text-justify' >
            I am Bolade Adeyemi, <br></br>
            Web Designer & Developer <br/>  
            From Lagos State, Nigeria.
          </h1>
          <p className=' md:text-lg sm:text-sm text-[0.8em]  px-2 mb-6 font-Poppins text-[#999999] mx-auto'>I have rich experience in web site design & building and customization. Also I am good at html, css, javascript, wordpress, php, jquery, bootstrap. I love to talk with you about our unique approach. Feel free to contact me writing an email with your project idea.</p>
          <button className='py-2 text-center bg-[#49bc56] w-[40%] md:text-sm sm:text-[0.9em] text-[0.7em] text-white font-Poppins ml-2' onClick={downloadFile}> DOWNLOAD RESUME</button>
        </div>
       </div>
    </div>
  )
}

export default About