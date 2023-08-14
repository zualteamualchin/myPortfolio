import React, { useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaSnapchat } from 'react-icons/fa'
import { Link } from 'react-scroll'
import {BiLogoGmail} from 'react-icons/bi'

export const Contact = () => {

    return (
    <div name="contact"  className='h-screen w-full items-center flex-col flex justify-center bg-black text-white'>
            <form method='post' action="https://getform.io/f/db88c83e-9ad0-40f5-932e-885368413c86"  className='p-8 flex flex-col h-full max-w-[600px] w-full justify-center gap-4' >
                <div className='pb-5' >
                  <h1 className='border-b-4 inline border-[#e38989] font-extrabold text-5xl' >Contact</h1>
                  <p className='mt-4' >// Your response is appreciated, I will respond in a short time.</p>
                  <p>Thank you</p>
                </div>
                <input type="text" name="name" id="" placeholder='Name' className='p-2 text-black '/>
                <input type="text" name="email" id="" placeholder='Email' className='p-3 text-black' />
                <textarea cols={30} rows={10} type="text" name="message" id="" placeholder='Description' className='p-3 text-black' />
                <button type='submit' className=' border-[1px] hover:bg-[#e38989] p-4 w-[200px] mx-auto hover:scale-105 duration-300 '>Submit</button>
            </form>
            <div className='h-[50px] flex items-center justify-center ' >
              <ul className='flex' >
                <a href='mailto:ztamchin@gmail.com' > <li><BiLogoGmail  className=' hover:scale-150  duration-500' /></li> </a>
                <a href='https://github.com/zualteamualchin' > <li><FaGithub className=' hover:scale-150 duration-500' /></li> </a>
                <a href='https://github.com/zualteamualchin' > <li><FaLinkedin className=' hover:scale-150 duration-500' /></li> </a>
                <a href='https://github.com/zualteamualchin' > <li><FaInstagram className=' hover:scale-150 duration-500' /></li> </a>
                <a href='https://github.com/zualteamualchin' > <li><FaSnapchat className=' hover:scale-150 duration-500' /></li> </a>
              </ul>
            </div>
    </div>
  )
}
