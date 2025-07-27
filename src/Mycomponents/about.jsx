import React from 'react'
import aboutImage from '../Myimages/about.avif'
import { FaArrowRight} from 'react-icons/fa' // Import the forward icon
export default function about() {
  return (
     <div className='py-8' id='about'>
        <div className='bg-[var(--card-bg)] h-auto text-white py-10  mx-12 rounded-2xl my-54  text-center justify-center ' >
           <div className='flex flex-col justify-center items-start gap-24 mx-28'>
              <h1 className=' text-2xl md:text-4xl font-bold px-15'>About</h1>
              <div className='grid grid-cols-2 grid-rows-3 gap-x-24'>
                 <div className='row-span-2 w-[35rem] h-[20rem]'>
                    <img className='w-[100%] h-[20rem]    rounded-3xl' src={aboutImage} alt=" About Image" />

                 </div>
                 <div className='flex gap-6 pb-12 px-11'>
                    <FaArrowRight size={24} className='mt-10' /> {/* Forward icon here */}
                    <span className='w-96'>

                       <h1 className='text-2xl font-bold py-4'>
                          Fronted Develpor
                       </h1>
                       <p className=' tracking-tighter'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita quas, sapiente impedit deleniti excepturi dolorum eum aliquam corrupti laudantium?
                       </p>

                    </span>

                 </div>
                 <div className='flex gap-6 pb-12 px-11'>
                    <FaArrowRight size={24} className='mt-10' /> {/* Forward icon here */}
                    <span className='w-96'>

                       <h1 className='text-2xl font-bold py-4'>
                          Fronted Develpor
                       </h1>
                       <p className=' tracking-tighter'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita quas, sapiente impedit deleniti excepturi dolorum eum aliquam corrupti laudantium?
                       </p>

                    </span>

                 </div>
                 <div className='flex gap-6 pb-12 px-11'>
                    <FaArrowRight size={24} className='mt-10' /> {/* Forward icon here */}
                    <span className='w-96'>

                       <h1 className='text-2xl font-bold py-4'>
                          Fronted Develpor
                       </h1>
                       <p className=' tracking-tighter'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita quas, sapiente impedit deleniti excepturi dolorum eum aliquam corrupti laudantium?
                       </p>

                    </span>

                 </div>
                 <div className='flex gap-6 pb-12 px-11'>
                    <FaArrowRight size={24} className='mt-10' /> {/* Forward icon here */}
                    <span className='w-96'>

                       <h1 className='text-2xl font-bold py-4'>
                          Fronted Develpor
                       </h1>
                       <p className=' tracking-tighter'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita quas, sapiente impedit deleniti excepturi dolorum eum aliquam corrupti laudantium?
                       </p>

                    </span>

                 </div>


              </div>

           </div>

        </div>
    </div>
  )
}
