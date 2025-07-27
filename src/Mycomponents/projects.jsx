import React from 'react'

import image from '../Myimages/project\.png'

export default function projects() {
  return (
    <div className='  text-white h-auto pb-12'>
        <div className='flex flex-wrap  py-16'>
           <h2 className='text-4xl font-bold p-6 px-16'>
              Projects
           </h2>
        </div>
        <div className='grid grid-cols-3 px-48 gap-20 '>
           <div className='bg-[var(--card-bg)] p-8 w-96 h-auto leading-normal '>
              <div>
                 <img className='w-full h-auto' src={image} alt="project image" />
              </div>
              <div className='flex flex-wrap py-3' >
                 <h2 className='text-2xl font-bold py-4 '>
                    Blogging Website
                 </h2>
                 <p className='text-lg tracking-tight' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum delectus dolorem commodi ?
                 </p>
              </div>
              <div className='pt-20 flex flex-wrap justify-around'>
                 <button className='text-xl font-semibold bg-[#2f3236] hover:bg-[var(--hover-text)] w-20 h-12 rounded-3xl '>Demo</button>
                 <button className='text-xl font-semibold bg-[#2f3236] hover:bg-[var(--hover-text)] w-36 h-12 rounded-3xl '>Source Code</button>
              </div>
             
           </div>
           <div className='bg-[var(--card-bg)] p-8 w-96 h-auto leading-normal '>
              <div>
                 <img className='w-full h-auto' src={image} alt="project image" />
              </div>
              <div className='flex flex-wrap py-3' >
                 <h2 className='text-2xl font-bold py-4 '>
                    Blogging Website
                 </h2>
                 <p className='text-lg tracking-tight' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum delectus dolorem commodi ?
                 </p>
              </div>
              <div className='pt-20 flex flex-wrap justify-around'>
                 <button className='text-xl font-semibold bg-[#2f3236]  hover:bg-[var(--hover-text)] w-20 h-12 rounded-3xl '>Demo</button>
                 <button className='text-xl font-semibold bg-[#2f3236] hover:bg-[var(--hover-text)] w-36 h-12 rounded-3xl '>Source Code</button>
              </div>
             
           </div>
           <div className='bg-[var(--card-bg)] p-8 w-96 h-auto leading-normal '>
              <div>
                 <img className='w-full h-auto' src={image} alt="project image" />
              </div>
              <div className='flex flex-wrap py-3' >
                 <h2 className='text-2xl font-bold py-4 '>
                    Blogging Website
                 </h2>
                 <p className='text-lg tracking-tight' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum delectus dolorem commodi ?
                 </p>
              </div>
              <div className='pt-20 flex flex-wrap justify-around'>
                 <button className='text-xl font-semibold bg-[#2f3236]  hover:bg-[var(--hover-text)] w-20 h-12 rounded-3xl '>Demo</button>
                 <button className='text-xl font-semibold bg-[#2f3236]  hover:bg-[var(--hover-text)] w-36 h-12 rounded-3xl '>Source Code</button>
              </div>
             
           </div>
           
        </div>
    </div>
  )
}
