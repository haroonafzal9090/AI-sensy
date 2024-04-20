import React from "react";
import Image from 'next/image';
import meta_image from "@/assests/images/footer_meta_image.png"
import youtube_logo from "@/assests/images/youtube.png"
import instagram_logo from "@/assests/images/instagram.png"
import facbook_logo from "@/assests/images/facebook.png"
import linkdien_logo from "@/assests/images/linkdien.png"
import twitter_logo from "@/assests/images/twitter-x.svg"

function Footer() {
  return (
    <div className='container mt-24 mb-10 xl:pl-20 xl3:pl-12'>
        {/* Main Footer */}
        <div className='grid xl1:grid-cols-4 sm:grid-cols-3 max-xl1:gap-y-5 max-sm:gap-y-10 sm1:grid-cols-2 grid-cols-1 max-xl1:px-6 max-md:px-5 max-sm:px-4 px-6   '>
            {/* Grid 1 */}
            <div className='flex flex-col gap-y-4'>
                {/* Logo */}
                <Image src={meta_image} alt='Meta-Logo' width={120} height={120} className="transition-opacity duration-200 ease-in-out hover:opacity-50 cursor-pointer" />
                <p className='text-sm max-w-[200px] !leading-normal'>Smartest WhatsApp Engagement Platform</p>
                <p className='text-sm'>Made with  ❤️️  in INDIA</p>
            </div>
            {/* Grid 2 */}
            <div>
                <h2 className='text-xl font-bold mb-5 text-[#3d3d3d]'>Platform</h2>
                <ul className='flex flex-col gap-y-3 text-sm cursor-pointer'>
                    <li className="transition-opacity duration-200 ease-in-out hover:opacity-50">Features</li>
                    <li className="transition-opacity duration-200 ease-in-out hover:opacity-50">Use cases</li>
                    <li className="transition-opacity duration-200 ease-in-out hover:opacity-50">Pricing</li>
                    <li className="transition-opacity duration-200 ease-in-out hover:opacity-50">Blog</li>
                    <li className="transition-opacity duration-200 ease-in-out hover:opacity-50">Contact Us</li>
                    <li className="transition-opacity duration-200 ease-in-out hover:opacity-50">Request A Demo</li>
                    <li className="transition-opacity duration-200 ease-in-out hover:opacity-50">Become a Partner</li>
                    <li className="transition-opacity duration-200 ease-in-out hover:opacity-50">Refund Policy</li>
                </ul>
            </div>
            {/* Grid 3 */}
            <div>
            <h2 className='text-xl font-bold mb-5 text-[#3d3d3d]'>Resources</h2>
                <ul className='flex flex-col gap-y-3 text-sm max-w-[200px] cursor-pointer'>
                    <li className="transition-opacity duration-200 ease-in-out hover:opacity-50">Learning Hub</li>
                    <li className="transition-opacity duration-200 ease-in-out hover:opacity-50">Whatsapp Business API</li>
                    <li className="transition-opacity duration-200 ease-in-out hover:opacity-50">Experience Notifications</li>
                    <li className="transition-opacity duration-200 ease-in-out hover:opacity-50">Create Whatsapp Link</li>
                    <li className="transition-opacity duration-200 ease-in-out hover:opacity-50">Whatsapp Button</li>
                    <li className="transition-opacity duration-200 ease-in-out hover:opacity-50">Learn Chatbot Development</li>
                    <li className="transition-opacity duration-200 ease-in-out hover:opacity-50">AiSensy vs Wati</li>
                    <li className="transition-opacity duration-200 ease-in-out hover:opacity-50">AiSensy vs Interakt</li>
                </ul>
            </div>
            {/* Grid 4 */}
            <div>
            <h2 className='text-xl font-bold mb-5 text-[#3d3d3d]'>Contact</h2>
            <ul className='flex gap-x-3 items-center '>
                <li className='flex items-center gap-x-2 transition-all duration-300 hover:bg-opacity-95  transform hover:-translate-y-0.5 cursor-pointer'>
                    <Image src={youtube_logo} alt='youtube-logo' width={20} height={20} />
                </li>
                <li className='flex items-center gap-x-2 transition-all duration-300 hover:bg-opacity-95  transform hover:-translate-y-0.5 cursor-pointer'>
                    <Image src={instagram_logo} alt='instagram-logo' width={20} height={20} />
                </li>
                <li className='flex items-center gap-x-2 transition-all duration-300 hover:bg-opacity-95  transform hover:-translate-y-0.5 cursor-pointer'>
                    <Image src={facbook_logo} alt='facebook-logo' width={20} height={20} />
                </li>
                <li className='flex items-center gap-x-2 transition-all duration-300 hover:bg-opacity-95  transform hover:-translate-y-0.5 cursor-pointer'>
                    <Image src={twitter_logo} alt='facebook-logo' width={20} height={20} />
                </li>
                <li className='flex items-center gap-x-2 transition-all duration-300 hover:bg-opacity-95  transform hover:-translate-y-0.5 cursor-pointer'>
                    <Image src={linkdien_logo} alt='linkdien_logo' width={20} height={20} />
                </li>
            </ul>
            </div>
        </div>
        {/* Line Divider */}
        <div className='mt-10'>
            <hr />
        </div>
        {/* Buttons */}
        <div className='sm2:flex max-sm2:flex-col group max-sm2:gap-y-8 max-sm2:flex justify-start max-sm2:items-start mt-10 gap-x-6 max-xl1:px-6 max-md:px-5 max-sm:px-4 px-6 max-w-[300px] '>
            <button className='text-[#303030] rounded text-sm font-bold border-2 border-solid border-[#303030] px-4 py-3 shadow-xl whitespace-nowrap w-full transition-all duration-300 hover:bg-opacity-95  transform hover:-translate-y-0.5 '>Apply for this API</button>
            <div className='!w-full max-sm2:text-center'>
            <button className='flex items-center gap-x-2 px-4 py-3 text-[#303030] text-sm font-bold max-sm2:w-[300px] max-sm2:justify-center transition-all duration-300 hover:bg-opacity-95  transform hover:-translate-y-0.5 '>
              <p>Login</p>
              <svg className='fill-[#303030] w-4 h-4 group-hover:translate-x-0.5 duration-200' viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg"><path d="M12.823 4.164L8.954.182a.592.592 0 0 0-.854 0 .635.635 0 0 0 0 .88l2.836 2.92H.604A.614.614 0 0 0 0 4.604c0 .344.27.622.604.622h10.332L8.1 8.146a.635.635 0 0 0 0 .88.594.594 0 0 0 .854 0l3.869-3.982a.635.635 0 0 0 0-.88z" fill-rule="nonzero" fill="#303030"></path></svg>
            </button> 
            </div>
        </div>
        {/* Copyright */}
        <div className='mt-10 container'>
            <ul className='flex flex-wrap gap-y-3 gap-x-3 items-center text-xs text-[#3D3D3D] cursor-pointer '>
                <li className='transition-opacity duration-200 ease-in-out hover:opacity-50'>support@aisensy.com</li>
                <li className='transition-opacity duration-200 ease-in-out hover:opacity-50'>Privacy Policy</li>
                <li className='transition-opacity duration-200 ease-in-out hover:opacity-50'>Terms Of Service</li>
                <li className='transition-opacity duration-200 ease-in-out hover:opacity-50'>
                  Copyright © AISENSY COMMUNICATIONS PRIVATE LIMITED. All Rights Reserved.
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer;
