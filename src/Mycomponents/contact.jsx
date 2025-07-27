import React from 'react'

export default function contact() {
   return (
      <div className='flex items-start justify-start   pt-36  '>
         <div className='p-12 flex flex-wrap  gap-10' >
            <div className=' relative'>
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019123456789!2d-122.419415484681!3d37.7749297797596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b0e6b1b%3A0x4a0b0b0b0b0b0b0b!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="900"
                  height="600"

                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                  className='rounded-xl'

               ></iframe>
               <div className='bg-[var(--bg-header)] flex flex-wrap ml-32 text-[var(--text)]   h-40 absolute  bottom-10   '>
                  <div className='   p-6  '>
                     <h1 className='text-lg font-semibold mb-3'>
                        Address
                     </h1>
                     <p className='text-lg  tracking-tighter'>
                        Photo booth tattooed prism, portland taiyaki hoodie <br />neutra typewriter
                     </p>
                  </div>
                  <div className='px-6 mt-5 '>
                     <h2 className='text-lg font-semibold text-gray-800'>Email</h2>
                     <a className='text-indigo-500 leading-relaxed'>example@email.com</a>
                     <h2 className='text-lg font-semibold text-gray-800'>
                        Phone
                     </h2>
                     <p>
                        123-456-7890
                     </p>
                  </div>
               </div>
           </div>
            
            <form className=' flex flex-col gap-10  text-[var(--text)] bg-[var(--card-bg)] px-7 w-[33rem] py-2 rounded-2xl'>
               <h2 className='text-2xl  font-semibold mt-3' >
                  Feedback
               </h2>
               
               <div className=''>
                  <label className='text-lg' htmlFor="name">Name</label>
                  <input type="text" className=' w-full h-12 bg-[var(--card-bg)] px-6 rounded border border-gray-300' />
               </div>
               <div className=''>
                  <label className='text-lg' htmlFor="email">Email</label>
                  <input type="text" className=' w-full h-12 bg-[var(--card-bg)] px-6 rounded border border-gray-300' />
               </div>
               <div className=''>
                  <label className='text-lg' htmlFor="message">Message</label>
                  <textarea name="message" className='w-full bg-[var(--card-bg)] px-6 py-3 rounded border border-gray-300' id="message" rows={5}></textarea>
                  
               </div>
               <button className='text-white bg-[var(--bg-header)] border-0 py-2 px-6 focus:outline-none hover:bg-[var(--hover-text)] rounded-xl text-lg w-44  '>Button</button>
              
            </form>
         </div>


      </div>
      
      
   )
}
