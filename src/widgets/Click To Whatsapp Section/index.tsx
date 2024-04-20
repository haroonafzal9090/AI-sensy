import React from 'react'
import Image from 'next/image'
import whatsapp_image from "@/assests/images/whatsapp-section.png"

function Click_To_Whatsapp() {
  return (
    <div className='container flex max-md2:flex-col max-md2:gap-y-16 pt-8 max-md2:justify-center  max-md2:items-center mb-10 '>

      {/* Right Section */}

      <div className='md2:w-1/2 md2:mt-10 w-full max-md2:justify-center max-md2:items-center max-md2:flex max-md2:flex-col '>
      
        {/* Heading And Paragraph */}
        
        <h1 className='text-3xl max-sm2:text-2xl font-bold leading-snug mb-5 max-w-[400px] text-[#303030] max-md2:text-center max-md2:max-w-[440px]'>Run Click to WhatsApp Ads for 5X Leads</h1>
        <p className='max-w-[380px] mb-5 text-[#3d3d3d] font-medium max-md2:text-center'>
            Run Ads on Facebook & Instagram that land on WhatsApp. 5X Your lead generations & 2-3 Conversions Instantly!
        </p>
        
        {/* List */}
        
        <ul className="mt-5 w-fit text-[#3d3d3d] text-[14.8px] max-md2:text-center   font-medium space-y-1 max-md2:justify-center max-md2:items-center max-md2:flex max-md2:flex-col md2:max-w-[380px] ">
          <li className="block items-center  max-md2:text-center max-md2:max-w-[350px]  ">
            <span className="w-1 h-1 mr-3  shrink-0 rounded-full bg-[#29c853] inline-block "></span>
            Build Click to WhatsApp Ads from AiSensy Platform
          </li>
          <li className="block items-center max-md2:text-center max-md2:max-w-[350px]">
            <span className="w-1 h-1 mr-3 shrink-0 rounded-full bg-[#29c853] inline-block"></span>
            Get all your Leads Segregated according to Ad Campaigns
          </li>
          <li className="block items-center max-md2:text-center max-md2:max-w-[350px] ">
            <span className="w-1 h-1 mr-3  shrink-0 rounded-full bg-[#29c853] inline-block"></span>
            Build Chatbot Flows based on Ads or Retarget via Broadcast
          </li>
        </ul>

       

        {/* Button */}

        <div className='mt-10 group'>
          <button className='flex items-center gap-x-2.5 transition-all duration-300   transform group-hover:-translate-y-0.5'>
            <span className='text-[#03cf65] font-bold text-sm'>Start Your 14-Day Free Trial</span>
            <svg className='w-4 h-4 group-hover:translate-x-1' viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg"><path d="M12.823 4.164L8.954.182a.592.592 0 0 0-.854 0 .635.635 0 0 0 0 .88l2.836 2.92H.604A.614.614 0 0 0 0 4.604c0 .344.27.622.604.622h10.332L8.1 8.146a.635.635 0 0 0 0 .88.594.594 0 0 0 .854 0l3.869-3.982a.635.635 0 0 0 0-.88z" fill-rule="nonzero" fill="#03cf65"></path></svg>
          </button>
        </div>
      </div>

      {/* Left Section */}

      <div className='md2:w-1/2 md2:pt-20 pt-10  max-md2:w-[80%] max-sm:w-[90%] max-sm2:w-[95%]  max-md2:justify-center max-md2:items-center'>
        <div>
          <Image src={whatsapp_image} alt='whatsapp' width={700} height={700} className='object-contain' />
        </div>
      </div>
    </div>
  )
}

export default Click_To_Whatsapp
