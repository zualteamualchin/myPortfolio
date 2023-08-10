import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import pp from '../assets/pp.jpg'

export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[black] ' >
      <div className='  h-full max-w-[1000px] flex justify-center text-[#ffffff]' >
        <div className=' h-full flex justify-center flex-col mx-auto px-8 '>
            <p className='text-2xl' >
              My name is
            </p>
            <h1 className='text-[#e38989] text-4xl sm:text-4xl lg:text-6xl font-extrabold ' >LALHMANGAIHZUALA</h1>
            <br/>
            <h2 className='text-2xl  font-bold' >FULL STACK DEVELOPER</h2>
            <h3>I do full stack development, MERN stack is my current technology.</h3>
        <div>
          <button className=' border-[1.5px] mt-3 group py-3 px-6 hover:bg-[#e38989] flex items-center' >
             About 
          <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300'/></button>
        </div>
            
        </div>
        <div className='hidden lg:{ max-h-[500px] self-center}' >
          <img className=' object-contain max-h-[500px] max-w-[500px]' src={pp} />
        </div>
      </div>
    </div>
  )
}
