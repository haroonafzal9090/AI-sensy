import Image from 'next/image'
import React from 'react'
import Brodcast_Image from "@/assests/images/brodcast-section.png"

function Brodcast_Section() {
  return (
    <div className='container flex max-md2:flex-col max-md2:gap-y-16 pt-8 max-md2:justify-center  max-md2:items-center mb-20 '>
        {/* Right Section */}
        <div className='md2:w-1/2 md2:mt-10 w-full max-md2:justify-center max-md2:items-center max-md2:flex max-md2:flex-col lg:pt-12 '>
            <h1 className='text-3xl max-sm2:text-2xl font-bold leading-snug mb-5 max-w-[400px] text-[#303030] max-md2:text-center max-md2:max-w-[600px]'>Broadcast Promotional Messages (Officially)</h1>
            <p className='max-w-[380px] mb-5 text-[#3d3d3d] font-normal text-base max-md2:text-center'>Well, WhatsApp recently allowed Businesses to Broadcast and Automate Promotional Messages via WhatsApp Business API</p>
            <p className='max-w-[380px] text-[#3d3d3d] font-normal text-base max-md2:text-center'>You can Now Send Exciting Offers, Discount Coupon Code and Festival Wishes without getting your Number blocked!</p>
            <div className='mt-5'>
                <button className='flex px-2.5 pr-5  py-1.5 bg-[#943bdc1f] rounded-full items-center  gap-x-2 transition-all hover:bg-[rgba(148,59,220,0.185)] group'>
                    <span className='text-white text-[10px] font-bold bg-[#943bdc] px-3 py-1 rounded-full'>INTRESTING?</span>
                    <p className='text-[#943bdc] text-[15px] font-medium sm2:whitespace-nowrap'>Start Now for FREE</p>
                    <svg className='sm2:w-4 sm2:h-4 h-3 w-3 group-hover:translate-x-1' viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg"><path d="M12.823 4.164L8.954.182a.592.592 0 0 0-.854 0 .635.635 0 0 0 0 .88l2.836 2.92H.604A.614.614 0 0 0 0 4.604c0 .344.27.622.604.622h10.332L8.1 8.146a.635.635 0 0 0 0 .88.594.594 0 0 0 .854 0l3.869-3.982a.635.635 0 0 0 0-.88z" fill-rule="nonzero" fill="#943bdc"></path></svg>
                </button>
            </div>
        </div>
        {/* Left Section */}
        <div className='md2:w-1/2  max-md2:w-[80%] max-sm:w-[90%] max-sm2:w-[95%]  max-md2:justify-center max-md2:items-center'>
            <div>
                <Image src={Brodcast_Image} alt='Brodcast' width={700} height={700} className='object-contain' />
            </div>
        </div>
    </div>
  )
}

export default Brodcast_Section