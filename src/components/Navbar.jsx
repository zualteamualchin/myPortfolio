import React, { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaSnapchat} from 'react-icons/fa'

import * as Scroll from 'react-scroll';
var Link = Scroll.Link;
export const Navbar = () => {
    const [nav, setNav] = useState(true);
    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div className='fixed w-full 
    h-[80px]
    flex
    justify-between
    items-center  bg-black px-4 text-gray-300 
    '
    >
        {/* //LOGO */}
        <div>
            <h1 className=' cursor-pointer select-none text-[#E38989] text-[1.3rem] font-extrabold'> &lt; ZUALTEA MUALCHIN /&gt;</h1>
        </div>
        {/* //MENU BAR */}
        <ul className='hidden md:flex '>
            <li><Link to='home' duration={500} smooth={true} >Home</Link></li>
            <li><Link to='skills' duration={500} smooth={true} >Skills</Link></li>
            <li><Link to='education' duration={500} smooth={true} >Education</Link></li>
            <li><Link to='about' duration={500} smooth={true} >About</Link></li>
            <li><Link to='contact' duration={500} smooth={true} >Contact</Link></li>
        </ul>
        {/* //HAMBURGER */}
        <div onClick={handleNav} className='md:hidden z-10' >
            {nav?(<FaBars/>):(<FaTimes/>)}
        </div>
            <ul className={nav ? 'hidden':'absolute w-full flex flex-col items-center justify-center h-screen top-0 left-0 bg-[#282828]'}>
            <li className='py-6 text-4xl'><li><Link onClick={handleNav} to='about' duration={500} smooth={true} >About</Link></li></li>
            <li className='py-6 text-4xl'><li><Link onClick={handleNav} to='education' duration={500} smooth={true} >Education</Link></li></li>
            <li className='py-6 text-4xl'><li><Link onClick={handleNav} to='skills' duration={500} smooth={true} >Skills</Link></li></li>
            <li className='py-6 text-4xl'><li><Link onClick={handleNav} to='contact' duration={500} smooth={true} >Contact</Link></li></li>
        </ul>
        <div className={nav?' hidden lg:flex fixed  flex-col top-[35%] left-0 text-slate-100 ':' hidden lg:flex fixed  flex-col top-[35%] left-0 text-slate-100 '}>
            <ul>
                <li className='w-[150px] h-[60px] items-center flex justify-between ml-[-100px] hover:ml-[-10px] duration-500 bg-gray-700 ' >
                    <a href='https://github.com/zualteamualchin'  className='flex justify-between items-center w-full' >
                        Github<FaGithub/>
                    </a>
                </li>
                <li className='w-[150px] h-[60px] items-center flex justify-between ml-[-100px] hover:ml-[-10px] duration-500 bg-[#5795ff] ' >
                    <a href='https://www.linkedin.com/in/lalhmangaihzuala/' className='flex justify-between items-center w-full' >
                        Linkedin<FaLinkedin/>
                    </a>
                </li>
                <li className='w-[150px] h-[60px] items-center flex justify-between ml-[-100px] hover:ml-[-10px] duration-500 bg-[#ff6f6f] ' >
                    <a href='https://www.instagram.com/502zz.zz._______/' className='flex justify-between items-center w-full' >
                        Instagram<FaInstagram/>
                    </a>
                </li>
                <li className='w-[150px] h-[60px] items-center flex justify-between ml-[-100px] hover:ml-[-10px] duration-500 bg-[#a2a227] ' >
                    <a href='https://www.snapchat.com/add/choco_bytee?share_id=U3v0V4LEjpM&locale=en-GB' className='flex justify-between items-center w-full' >
                        Snapchat<FaSnapchat/>
                    </a>
                </li>     
            </ul>
        </div>
    </div>
  ) 
}
