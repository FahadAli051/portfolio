import React from 'react'
import image from '../Myimages/logo\.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import {FaLinkedin  } from "react-icons/fa";

export default function footer() {
  return (
     <div className='bg-[var(--bg-header)] text-[var(--text)] '>
        <div className='grid grid-cols-3 px-32 justify-items-center'> 
           <div className='py-4'>
              <h2 className='text-xl font-semibold font-mono py-2'>
                 Categories
              </h2>
              <ul className='text-base font-thin'>
                 <a href=""> <li>First link</li> </a> 
                  <a href=""><li>Second link</li></a>
                  <a href=""><li>Third link</li></a>
                  <a href=""><li>Fourth link</li></a>
              </ul>
           </div>
           <div className='py-4'>
              <h2 className='text-xl font-semibold font-mono py-2'>
                 Categories
              </h2>
              <ul className=' text-base font-thin'>
                  <a href=""><li>First link</li></a>
                  <a href=""><li>Second link</li></a>
                  <a href=""><li>Third link</li></a>
                  <a href=""><li>Fourth link</li></a>
              </ul>
           </div>
           <div className='py-4'>
              <div className='flex gap-3 py-2 '>
                 <img className='w-12 h-12' src={image} alt="loho image" />
                 <h2 className='text-xl font-semibold  py-2'>
                    Fahad Ali
                 </h2>
              </div>
              <p  className='text-base font-thin' >
                 Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Vel, eveniet!
              </p>
           </div>
          
             

         
        </div>
        <div className='flex justify-between bg-[var(--card-bg)] py-9'>
           <div className='px-4 '>
              © 2025 Fahad Ali ---- @gmail.com
           </div>
              <div className='flex gap-10 px-5'>
                 <span>
                 <FaFacebook className='size-7 ' color="#3161d7" />
              </span>
              <span>
                 <FaTwitter className='size-7 ' color="#282f23" />
              </span>
                 <span>
                 <FaInstagram className='size-7 ' color="#da328f" />
                 </span>
                 
                 <span>
                 <FaLinkedin className='size-7 ' color="#4024b4" />
                 </span>

              </div>
           
       </div>
    </div>
  )
}
