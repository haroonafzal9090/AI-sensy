import React from 'react'
import donut_img from "@/assests/images/donut.png"
import heart_img from "@/assests/images/heart.png"
import Image from 'next/image'
import { tier_section } from '@/assests/data/tier_section'
function TierSection() {
  return (
    <div className='container mb-10 mt-24'>
        <div className='flex flex-col gap-y-10'>
            {/* Zero Setup Free */}
            <div className='max-sm1:flex-col flex max-sm1:text-center max-sm1:gap-y-5  justify-center items-center gap-x-5 sm:px-8 sm2:px-6 sm1:px-4 '>
                <div className=''>
                    {/* Image */}
                    <Image src={donut_img} alt="donut" width={50} height={50} />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <h2 className='text-2xl font-bold'>Zero Setup Fee</h2>
                    <p className='max-w-[420px]'>Get Started with AiSensy Instantly. Pay only for the Messages</p>
                </div>
            </div>
            {/* The Friendliest Support */}
            <div className='max-sm1:flex-col flex max-sm1:text-center max-sm1:gap-y-5  justify-center items-center gap-x-5 sm:px-8 sm2:px-6 sm1:px-4 '>
                <div>
                    {/* Image */}
                    <Image src={heart_img} alt="heart" width={50} height={50} />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <h2 className='text-2xl font-bold'>The Friendliest Support</h2>
                    <p className='max-w-[420px]'>Our lovely support team is always happy to talk to you and help with any issues</p>
                </div>
            </div>
            {/* Tier Section */}
            <div className='flex flex-col justify-center'>
                <ul className='flex flex-wrap gap-y-8 justify-center items-center gap-x-16'>
                    {tier_section.map((item) => (
                        <li key={item.id}>
                            <Image src={item.imgSrc} alt={item.altText} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default TierSection