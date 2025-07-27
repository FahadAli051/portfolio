import React from 'react'
import { FaCss3, FaFigma, FaHtml5, FaJs } from "react-icons/fa";
import { SiRadstudio } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
export default function experience() {
   return (
      <div>
         <div id='Experience' className='px-32 pt-4'>
            <h1 className='text-4xl font-bold text-white'>
               Experience
            </h1>
            <div className='flex flex-wrap justify-around items-center'>
               <div className='flex flex-wrap w-1/3 gap-20 py-6'>
                  <span className='bg-[var(--card-bg)] flex items-center rounded-2xl p-3' >
                     <FaHtml5 className='size-14' color="#e34c26" />
                  </span>
                  <span className='bg-[var(--card-bg)] flex items-center rounded-2xl p-3' >
                     <FaCss3 className='size-14' color="#264de4" />
                  </span>
                  <span className='bg-[var(--card-bg)] flex items-center rounded-2xl p-3' >
                     <SiMongodb className='size-14' color="#47A248" />
                  </span>
                  <span className='bg-[var(--card-bg)] flex items-center rounded-2xl p-3' >
                     <FaGoogle className='size-14' color="#2865b4" />
                  </span>
                  <span className='bg-[var(--card-bg)] flex items-center rounded-2xl p-3' >
                     <SiRadstudio className='size-14' color="#E60028" />
                  </span>
                  <span className='bg-[var(--card-bg)] flex items-center rounded-2xl p-3' >
                     <RiNetflixFill className='size-14' color="#E50914" />
                  </span>
                  <span className='bg-[var(--card-bg)] flex items-center rounded-2xl p-3' >
                     <FaAmazon className='size-14' color="#FF9900" />
                  </span>
                  <span className='bg-[var(--card-bg)] flex items-center rounded-2xl p-3' >
                     <FaReact className='size-14' color="#FF9900" />
                  </span>
               </div>
               <div className='py-12'>
                  <div className='flex gap-10 items-center p-6 px-12 bg-[var(--card-bg)] rounded-xl bg-opacity-45  mb-6 '>
                     <FaGoogle className='size-12' color='#2865b4' />
                     <span className='text-white'>
                        <h2 className='leading-tight text-2xl py-2'>
                           Software Engineer , google
                        </h2>
                        <p className='text-lg leading-tight font-thin mb-2'>
                           Sept 2023 - Present
                        </p>
                        
                           <li className='text-sm p-2'>Work as Software developer</li>
                        <li className='text-sm p-2'>Senior SDE-developer</li>
                        


                     </span>
                  </div>
                  <div className='flex gap-10 items-center p-6 px-12 bg-[var(--card-bg)] rounded-xl  bg-opacity-45  mb-6 '>
                     <RiNetflixFill className='size-12' color='#E50914' />
                     <span className='text-white'>
                        <h2 className='leading-tight text-2xl py-2'>
                           Software Engineer , netflix
                        </h2>
                        <p className='text-lg leading-tight font-thin mb-2'>
                           Sept 2023 - Present
                        </p>
                        
                        <li className='text-sm p-2'> Work as Software developer</li>
                        <li className='text-sm p-2'>Senior SDE-developer</li>
                        


                     </span>
                  </div>
                  <div className='flex gap-10 items-center px-12 p-6  bg-[var(--card-bg)] rounded-xl    bg-opacity-45  mb-6'>
                     <FaAmazon className='size-12' color='#FF9900' />
                     <span className='text-white'>
                        <h2 className='leading-tight text-2xl py-2'>
                           Software Engineer , amazon
                        </h2>
                        <p className='text-lg leading-tight font-thin mb-2'>
                           Sept 2023 - Present
                        </p>
                           <li className='text-sm p-2'>Work as Software developer</li>
                           <li className='text-sm p-2'>Senior SDE-developer</li>


                     </span>
                  </div>
            </div>

            </div>

         </div>

      </div>
   )
}
