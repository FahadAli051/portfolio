import React from 'react'
import { Outlet, Link } from "react-router-dom";
// import Header from './MyComponents/Header';

export default function Header(props) {
   function scrollToAbout() {
      const about = document.getElementById('about');
      if (about) {
         about.scrollIntoView({ behavior: 'smooth' });
      }
      else {
         console.log('about not found')
      }
   }
   return (
     <>
     <nav className='flex justify-between md:items-center text-white px-10 pt-10
     md:px-20 md:p-6 bg-[var(--bg-header)] sticky top-0 z-40'  >
        <span className='text-3xl font-bold tracking-wide '>
           Portfolio
        </span>
        <ul className='mx-10 py-2 mt-4 font-semibold md:mt-5 bg-black rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md-static md:flex gap-16 text-xl '>
          
               <li className='text-md transition-all duration-300 p-1 md:p-0'>
                  <Link to="/"> Home  </Link></li>
           <a onClick={scrollToAbout}><li className='text-md transition-all duration-300 p-1 md:p-0 cursor-pointer'>
                  About</li></a>
           
         
           <li className='text-md transition-all duration-300 p-1 md:p-0'>
                  <Link to="/experience"> Experience  </Link>  </li>
          
         
           <li className='text-md transition-all duration-300 p-1 md:p-0'>
                  <Link to="/projects" > Projects </Link> </li>
           
           
           <li className='text-md transition-all duration-300 p- md:p-0'>
              <Link to="/contact">Contact</Link></li>
           
        </ul>
     </nav>
         <Outlet />
      </>
  )
}
