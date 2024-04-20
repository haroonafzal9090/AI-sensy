import Image from 'next/image'
import React from 'react'
import whatsapp_business from "@/assests/images/whatsapp-business.png"

function Get_Whatsapp_Business() {
  return (
    <div className='container mt-36 flex gap-x-14 mb-10 max-md2:flex-col-reverse max-md2:gap-y-16 items-center'>
        {/* Right SIde */}
        <div className='md2:w-1/2 w-full'>
            <Image src={whatsapp_business} alt="image" height={700} width={700}/>
        </div>

        {/* Left SIde */}
        <div className='md2:w-1/2  mt-20 flex flex-col gap-y-6 max-md2:text-center'>
            <h2 className='sm2:text-3xl text-2xl font-bold max-w-[360px] !leading-snug'>Get WhatsApp Business API in 10 Minutes</h2>
            <p className='max-w-[360px]'>AiSensy Platform is powered by Official Whatsapp Business APIs and is in alignment with all Whatsapp Rules</p>
            <ul className="mt-1 w-fit text-[#3d3d3d] text-[14.8px] max-md2:text-center   font-medium space-y-1 max-md2:justify-center max-md2:items-center max-md2:flex max-md2:flex-col md2:max-w-[380px] ">
          <li className="block items-center  max-md2:text-center max-md2:max-w-[350px]  ">
            <span className="w-1 h-1 mr-3  shrink-0 rounded-full bg-[#29c853] inline-block "></span>
            Get Verified Green Tick on your Whatsapp  
          </li>
          <li className="block items-center max-md2:text-center max-md2:max-w-[350px]">
            <span className="w-1 h-1 mr-3 shrink-0 rounded-full bg-[#29c853] inline-block"></span>
            Broadcast Unlimited Notifications everyday</li>
          <li className="block items-center max-md2:text-center max-md2:max-w-[350px] ">
            <span className="w-1 h-1 mr-3  shrink-0 rounded-full bg-[#29c853] inline-block"></span>
            24x7 Chat Support by AiSensy Team
          </li>
        </ul>
            <div className='mt-5 max-sm2:w-full'>
            <button className='text-white border-[#03CF65] border-2 px-4 py-3 rounded font-bold text-[12px] bg-[#03CF65] shadow-xl max-sm2:w-full transition-all duration-300 hover:bg-[#03b95a]  transform hover:-translate-y-0.5 '>
                Apply for Whatsapp Business API FREE
            </button>
            </div>
        </div>
    </div>
  )
}

export default Get_Whatsapp_Business