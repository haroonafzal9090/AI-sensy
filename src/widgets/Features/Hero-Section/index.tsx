import Image from 'next/image'
import React from 'react'
import hero_image from "@/assests/images/brodcasting-meeting.png"

function Hero_Section() {
  return (
    <div className='container flex max-md2:flex-col max-md2:justify-center max-md2:items-center max-md2:gap-y-16 mt-24 '>
        {/* Right Side */}
        <div className='md2:w-1/2 flex flex-col lg:justify-center  gap-y-4 max-md2:text-center  '>
            <h2 className='md2:text-3xl text-[28px] text-[#303030] font-bold md2:max-w-[350px]  !leading-snug'>Import, Broadcast & Track</h2>
            <p className='max-w-[350px]'>Simply Import Broadcast Messages to thousands of your opted-in users in a single click using Smart Campaign Manager and AiSensy CRM. 🎉</p>
            <p className='max-w-[350px]'>Track the results in Real-time for each campaign.</p>
            <div className='flex max-sm2:flex-col md2:flex-wrap whitespace-nowrap gap-y-3 gap-x-4 mt-10'>
                <button className='bg-[#03CF65] text-white px-5 py-3 font-medium text-sm rounded-sm shadow-xl'>Start 14-Days FREE Trial</button>
                <button className='bg-[#F6F6F6] text-[#303030] border border-solid border-[#F6F6F6] px-4 py-3 font-bold text-sm rounded-sm shadow-xl'>Join Live Demo</button>
            </div>
        </div>
        {/* Left Side */}
        <div className='md2:w-1/2 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center'>
            <Image src={hero_image} alt='image'/>
        </div>
    </div>
  )
}

export default Hero_Section