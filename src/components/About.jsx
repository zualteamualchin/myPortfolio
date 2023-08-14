import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-scroll';

export const About = () => {
  return (
    <div  name='about' className='w-full h-screen bg-[black] text-white'> 
        <div className=' flex flex-col p-4 justify-center items-center w-full h-full' >
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8' >
                <div className=' text-5xl pl-4 font-extrabold inline text-left md:text-right '>
                    <h1 className=' border-b-4 border-[#e38989] inline '>About</h1>
                </div>
            </div>
            <br/>
            <div className='max-w-[1000px] px-4  w-full grid sm:grid-cols-2 text-left gap-8 '>
                <div className=' inline text-left  font-bold text-2xl  md:text-right '>
                    <p>Hello! I am Zualtea.</p> 
                    <Link to='contact' smooth={true} duration={500} >
                        <button className=' group border-[1.5px] w-[200px] mt-[10%] float-left md:float-right items-center flex justify-center hover:bg-[#e38989]'>
                            Let's Talk<HiArrowNarrowRight className='mx-3 group-hover:rotate-90 duration-300 my-3 font-bold text-2xl '/>
                        </button>
                    </Link>
                    
                </div>
                <div className='' >
                <p>Hello, my name is Lalhmangaihzuala. All I do as a tech is frontend development with reactJS as my current tech stack. I believe I could help you out on your projects as I'm giving my best effort wherever i worked. So, if you trust me and want to collaborate for some projects, I am ready to help you.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
