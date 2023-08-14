import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

export const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-black text-[#ffffff] text-[10px] sm:text-[15px] '>
        <div className='max-w-[1000px] mx-auto px-4 p-4 flex flex-col justify-center w-full h-full'>
            <div className='px-4'>
                <h1 className='text-5xl font-extrabold border-b-4 border-[#e38989] inline'>Skills</h1>
                <p className='mt-4 text-1xl'>//  The current Technologies I'm working with...</p>
            </div>
            <div className='grid mt-10 p-4 grid-cols-2 sm:grid-cols-4 w-full gap-10'>
                <div className='shadow-md shadow-[#e38989] p-4 flex flex-col items-center justify-center gap-4 hover:scale-110 cursor-pointer duration-300 '><img className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]' src={HTML} alt="" />HTML</div>
                <div className='shadow-md shadow-[#e38989] p-4 flex flex-col items-center justify-center gap-4 hover:scale-110 cursor-pointer duration-300 '><img className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]' src={ReactImg} alt="" />REACT.JS</div>
                <div className='shadow-md shadow-[#e38989] p-4 flex flex-col items-center justify-center gap-4 hover:scale-110 cursor-pointer duration-300'><img className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]' src={JavaScript} alt="" />JAVASCRIPT</div>
                <div className='shadow-md shadow-[#e38989] p-4 flex flex-col items-center justify-center gap-4 hover:scale-110 cursor-pointer duration-300'><img className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]' src={CSS} alt="" />CSS</div>
            </div>
            <br/>
            <div className='grid p-4 w-full grid-cols-2 sm:grid-cols-4 gap-8' >
                <div className='shadow-md shadow-[#e38989] p-4 flex flex-col items-center justify-center gap-4 hover:scale-110 cursor-pointer duration-300'><img className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]' src={Node} alt="" />NODE.JS</div>
                <div className='shadow-md shadow-[#e38989] p-4 flex flex-col items-center justify-center gap-4 hover:scale-110 cursor-pointer duration-300'><img className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]' src={FireBase} alt="" />FIREBASE</div>
                <div className='shadow-md shadow-[#e38989] p-4 flex flex-col items-center justify-center gap-4 hover:scale-110 cursor-pointer duration-300'><img className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]'  src={GitHub} alt="" />GITHUB</div>
                <div className='shadow-md shadow-[#e38989] p-4 flex flex-col items-center justify-center gap-4 hover:scale-110 cursor-pointer duration-300'><img className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]' src={Tailwind} alt="" />TAILWIND</div>
            </div>
        </div>
    </div>
  )
}
