"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { whatsappPlateformData, whatsappPlateformDataInterface } from '@/assests/data/whatsapp_plateform_data';
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { motion, AnimatePresence } from "framer-motion";

function Whatsapp_Plateform_Section() {
  const [activeTab, setActiveTab] = useState<whatsappPlateformDataInterface>(whatsappPlateformData[0]); // State to track active tab index

  const handleItemClick = (item: whatsappPlateformDataInterface) => {
    setActiveTab(item);
  };

  return (
    <div className='container mt-24 mb-10'>
      {/* Heading And Text */}
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold max-w-[350px] !leading-normal">The Most 'Complete' WhatsApp Platform</h1>
        <p className="mt-4 mb-10 max-w-[420px] !leading-relaxed">Everything you need to notify, chat & engage your users All in one place</p>
      </div>

      {/* Tabs Section */}
      <div className='container mb-20 max-sm3:hidden'>
        {/* Tabs */}
        <ul className='flex flex-wrap justify-center items-center text-[11.5px] font-bold gap-x-6 gap-y-2'>
          {whatsappPlateformData.map((data, index) => (
            <li key={data.id} onClick={() => handleItemClick(data)} className={activeTab === data ? 'bg-[#e4feec] hover:bg-lime-50 p-2 cursor-pointer' : 'cursor-pointer hover:bg-lime-50 p-2'}>
              {data.tab_heading.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Section */}
      <div className='flex max-sm3:hidden max-xl4:flex-col-reverse max-xl4:gap-y-16 pb-28 pt-12 max-xl4:pb-72  items-center xl4:justify-between justify-center  !w-full xl3:pl-14 xl4:gap-x-8 xl:pl-10 '>
        {/* Left Side */}
        <div className=' relative w-full  max-xl4:w-screen max-xl4:pl-6 max-xl4:mr-6 '>
          {/* Image */}
          {/* <Image src={whatsappPlateformData[activeTab].imageSrc} alt={whatsappPlateformData[activeTab].altText} width={550} height={550} className='object-contain max-xl4:w-full' /> */}
          <PhotoProvider className='max-xl4:w-screen'>
            <AnimatePresence >
              {whatsappPlateformData.map((item) => {
                if (activeTab?.id == item.id) {
                  return (
                    <PhotoView src={activeTab.imageSrc.src} key={item.id}>
                      <motion.div className="absolute xl4:-top-44" key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Image
                          src={activeTab.imageSrc}
                          alt="image"
                          className="object-contain shadow xl4:w-[550px]   "
                         
                          
      
                        />
                      </motion.div>
                     </PhotoView>
                  );
                }
              })}
            </AnimatePresence>
          </PhotoProvider>
        </div>
        {/* Right Side */}
        <div className='  '>
          {/* Content */}
          {whatsappPlateformData.map((data, index) => {
            
            if (activeTab?.id == data.id) {
              return (
                <div className='flex flex-col gap-y-5 w-full max-xl4:text-start max-xl4:justify-center max-xl4:items-start  ' key={data.id}>
                <h1 className='text-2xl font-bold '>{activeTab.heading}</h1>
                <p className='max-xl4:max-w-[420px]'>{activeTab.paragraph}</p>
                <p className='max-xl4:max-w-[420px]'>{activeTab.description}</p>
                <div className='mt-2 '>
                <button className='text-[#03cf65] border rounded border-b-2 border-solid border-[#03cf65] px-4 py-3 shadow-lg hover:shadow-xl text-sm font-bold whitespace-nowrap transition-all duration-300   transform hover:-translate-y-0.5'>{activeTab.buttonText}</button>
                </div>
              </div>
              )
            }})}
        </div>
      </div>

      {/* Mobile View */}
      <div className='sm3:hidden max-sm3:mt-10'>
        <ul>
          {whatsappPlateformData.map((data, index) => (
            <li className='flex flex-col gap-y-5 justify-center items-center ' key={data.id}>
            <div className='flex flex-col gap-y-5'>
              <h1 className='text-2xl font-bold '>{data.heading}</h1>
              <p className='max-w-[420px]'>{data.paragraph}</p>
              <p className='max-w-[420px]'>{data.description}</p>
              <div className='max-sm2:w-full '>
              <button className='text-[#03cf65] border rounded border-b-2 border-solid border-[#03cf65] px-4 py-3 shadow-lg text-sm font-bold max-sm2:w-full whitespace-nowrap transition-all duration-300 hover:bg-[#03b95a]  transform hover:-translate-y-0.5 '>{data.buttonText}</button>
              </div>
            </div>
         
            <div className='mt-10 mb-14'>
              <Image src={data.imageSrc} alt={data.altText} width={550} height={550}/>
            </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div className="flex justify-center xl4:mt-48 max-xl4:mt-[400px] max-sm3:mt-2 group">
        <button className="flex px-2.5 pr-5 py-1.5 bg-[#943bdc1f] rounded-full items-center  sm2:gap-x-2 max-sm2:gap-x-2 transition-all hover:bg-[rgba(148,59,220,0.185)]">
          <span className="text-white text-[10px] font-bold whitespace-nowrap bg-[#943bdc] px-3 py-1 rounded-full">
            EXPLORE MORE
          </span>
          <p className="text-[#943bdc] text-sm font-medium sm2:whitespace-nowrap">
            See ALL Features
          </p>
          <svg
            className="sm2:w-4 sm2:h-4 w-3 h-3 group-hover:translate-x-1"
            viewBox="0 0 13 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.823 4.164L8.954.182a.592.592 0 0 0-.854 0 .635.635 0 0 0 0 .88l2.836 2.92H.604A.614.614 0 0 0 0 4.604c0 .344.27.622.604.622h10.332L8.1 8.146a.635.635 0 0 0 0 .88.594.594 0 0 0 .854 0l3.869-3.982a.635.635 0 0 0 0-.88z"
              fill-rule="nonzero"
              fill="#943bdc"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Whatsapp_Plateform_Section;
