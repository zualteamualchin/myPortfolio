import React from 'react'

export const Education = () => {
  return (
    <div name="education" className='text-[#ffffff] w-full h-screen bg-[black]' >
        <div className='p-4 max-w-[1000px] mx-auto flex flex-col justify-center h-full ' >
            <div className='' >
                <h1 className='text-5xl font-extrabold inline border-b-4 border-[#e38989] ' >Educations</h1>
            </div>
            <div className=' cursor-pointer hover:scale-105 duration-300 border-[1px] mt-10 p-4' >
                <h1 className='text-[#e38989] font-bold sm:text-2xl' >High School</h1>
                <p className='w-[250px]'>Presbyterian English School, Ramthar Veng, Aizawl, Mizoram</p>
            </div>
            <div className=' cursor-pointer hover:scale-105 duration-300 border-[1px] mt-10 p-4' >
                <h1 className='text-[#e38989] font-bold  sm:text-2xl ' >Plus Two</h1>
                <p className='w-[250px] sm:text-xm '>Govt. Mizo Higher Sec School, Ramthar Veng, Aizawl, Mizoram</p>
            </div>
            <div className=' cursor-pointer hover:scale-105 duration-300 border-[1px] mt-10 p-4' >
                <h1 className='text-[#e38989] font-bold sm:text-2xl' >Undergraduate Degree</h1>
                <p className='w-[250px] sm:text-xm font-bold'>Bachelor of Technology</p>
                <p className=' font-bold sm:text-xm'>(Computer Science and Engineering)</p>
                <p className='w-[250px] sm:text-xm'>Kerala Technological University, Thiruvananthapuram, kerala</p>
            </div>
        </div>
    </div>
  )
}
