import React from 'react'

function CustomersAreOnWhatsapp() {
  return (
    <div className='bg-[#ebfde8] mb-10 xs:h-[380px] h-[430px] sm2:p-16 p-8 '>
        <div className='container border border-[#03cf65] rounded-lg flex justify-center items-center flex-col gap-y-10 p-10 sm2:max-w-[900px] '>
            <h1 className='sm2:text-[1.8rem] text-2xl  text-center font-bold sm2:max-w-[360px] sm2:!leading-snug'>Your Customers are on WhatsApp! Are You?</h1>
            <div className='flex max-sm2:flex-col items-center gap-x-3 max-sm2:gap-y-3 max-sm2:w-full '>
                <button className='bg-[#03cf65] text-white px-4 py-3.5 font-bold text-sm rounded shadow-lg whitespace-nowrap max-sm2:w-full transition-all duration-300 hover:bg-[#03b95a]  transform hover:-translate-y-0.5 '>Get Started Now</button>
                <button className='bg-[#303030] text-white px-4 py-3.5 font-bold text-sm rounded shadow-lg whitespace-nowrap max-sm2:w-full transition-all duration-300 hover:bg-black  transform hover:-translate-y-0.5'>Talk To Sales</button>
            </div>
        </div>
    </div>
  )
}

export default CustomersAreOnWhatsapp