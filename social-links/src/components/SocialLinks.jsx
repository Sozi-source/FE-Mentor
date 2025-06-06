import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaCode, FaFacebook } from 'react-icons/fa';



function SocialLinks() {
  
  
  
   return (
    <div className='flex justify-center items-center mt-10 bg-gray-900 w-full min-h-screen'>
       <div className='p-4 bg-gray-500 rounded-2xl'>
         <div className='flex flex-col items-center space-y-4 p-6 rounded-xl shadow-2xl bg-gray-600 text-white w-72'> 
          
          {/* Image */}
          <img src="/assets/images/Passport.png" alt="wilfred-osozi"  
          className='w-32 h-32 rounded-full ring-4 ring-gray-500 shadow-lg object-cover'/>
         
          <p className='text-lg font-semibold'>Wilfred Osozi</p>
          <p className='text-sm text-yellow-400'>Nairobi, Kenya</p>
          <h2 className='text-base font-medium mt-1'>Front-end Developer</h2>
          <a href="https://github.com/Sozi-source" target='_blank' rel='noopener noreferrer' className='flex items-center space-x-2 border border-gray-300 w-48  py-2 rounded-md px-2 hover:bg-gray-700 transition '> <FaGithub/> <span>GitHub</span> </a>
          <a href="https://www.frontendmentor.io/profile/Sozi-source" target='_blank' rel='noopener noreferrer' className='flex items-center space-x-2 border border-gray-300 w-48 py-2 rounded-md px-2 hover:bg-gray-700 transition'><FaCode/> <span>Frontend Mentor</span></a>
          <a href="https://www.linkedin.com/in/wilfred-osozi/" target='_blank' rel='noopener noreferrer' className='flex items-center space-x-2 border border-gray-300 w-48 py-2 rounded-md px-2 hover:bg-gray-700 transition'><FaLinkedin/> <span>LinkedIn</span></a>
          <a href="https://x.com/OsoziWilfred" target='_blank' rel='noopener noreferrer' className='flex items-center space-x-2 border border-gray-300 w-48 py-2 rounded-md px-2 hover:bg-gray-700 transition'><FaTwitter/> <span>Twitter</span></a>
          <a href="https://www.instagram.com/wosozi/" target='_blank' rel='noopener noreferrer' className='flex items-center space-x-2 border border-gray-300 w-48 py-2 rounded-md px-2 hover:bg-gray-700 transition'><FaInstagram/> <span>Instagram</span></a>
          <a href="https://web.facebook.com/osozi.wilfred1" target='_blank' rel='noopener noreferrer' className='flex items-center space-x-2 border border-gray-300 w-48 py-2 rounded-md px-2 hover:bg-gray-700 transition '><FaFacebook/> <span>Facebook</span></a>
        </div>
       </div>

    </div>
  )
}

export default SocialLinks;


  
  
  
  