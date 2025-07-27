import React from 'react'
import Image from 'react'
import image from '../Myimages/pic.jpg'

export default function hero() {
   return (
      <div className='text-white w-full flex justify-between text-start p-10   items-center h-[90dvh]'>
         <div className='w 2/4 pt-20 px-10'>
            <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
              Hello' I am Fahad ali
            </h1>
            <p className='text-sm md:text-2xl  tracking-tight pt-2 '>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Voluptatibus tempora, quibusdam, officiis odio quisquam aspernatur 
            </p>
            <div className='flex gap-4 mt-10'>
               <button className='  text-white  hover:opacity-85
            duration-300 hover:scale-105 font-bold bg-slate-900 rounded-3xl px-3 py-2  text-lg'>Contact me</button>

               <button
                  class="cursor-pointer flex justify-between bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 text-xl font-mono w-[150px]"
               >
                  Resume
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="2"
                     stroke="currentColor"
                     class="w-5 h-5 animate-bounce"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                     ></path>
                  </svg>
               </button>
            </div>

            

         </div>
         <div className=''>
            <img className='w-96 h-96 mx-44 rounded-full shadow-xl shadow-slate-950' src={image} alt="" />
         </div>
      </div>
   )
}
