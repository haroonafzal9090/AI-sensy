import Image from "next/image";
import React from "react";
import HeroImage from "@/assests/images/hero.png";

function Hero() {
  return (
    <div className="container pt-4 flex mt-20 max-lg:flex-col max-lg:justify-center max-lg:items-center max-sm2:px-5 ">
      {/* Right Section */}
      <div className=" lg:w-1/2 w-full max-lg:justify-center max-lg:items-center max-lg:flex max-lg:flex-col   ">
        <h1 className=" text-[45px] font-bold max-lg:text-center leading-snug max-md:text-4xl max-sm2:text-3xl max-sm2:leading-normal max-md:leading-normal text-[#303030] lg:max-w-[400px]   ">
          Your Complete WhatsApp Engagement Platform
        </h1>
        <h2 className="text-lg font-bold mt-5 max-lg:text-center text-[#303030] lg:max-w-[410px] ">
          Businesses drive 25-60% Revenues using AiSensy
        </h2>
        {/* List */}
        <ul className="mt-5  text-[#3d3d3d] text-[14.8px] max-lg:text-center font-medium space-y-1 max-lg:justify-center max-lg:items-center max-lg:flex max-lg:flex-col ">
          <li className="block items-center    ">
            <span className="w-1 h-1 mr-2 rounded-full bg-[#03cf65] inline-block"></span>
            Broadcast Promotional Offers to Unlimited Users
          </li>
          <li className="block items-center    ">
            <span className="w-1 h-1 mr-2 rounded-full bg-[#03cf65] inline-block"></span>
            Sell your Products on WhatsApp using Catalogs
          </li>
          <li className="block items-center   ">
            <span className="w-1 h-1 mr-2 rounded-full bg-[#03cf65] inline-block"></span>
            Automate Messages via Integrations
          </li>
          <li className="block items-center  ">
            <span className="w-1 h-1 mr-2 rounded-full bg-[#03cf65] inline-block"></span>
            Enable Multi-Agent Live Chat for Customer Support
          </li>
          <li className="block items-center     ">
            <span className="w-1 h-1 mr-2 rounded-full bg-[#03cf65] inline-block"></span>
            Build Chatbots & Solve for 24 x 7 Support & Engagement
          </li>
        </ul>

        <div className="gap-x-2 max-sm1:gap-x-3 flex mt-5 text-center ">
          <span className="text-[#303030] font-medium max-lg:text-center ">⚡️Powered by</span>
          <p className="font-bold text-[#3d3d3d] max-lg:text-center  ">Official WhatsApp Business API</p>
        </div>
        {/* Buttons */}
       <div className="flex max-sm2:flex-col max-sm2:gap-y-3 max-sm2:w-full gap-x-3 mt-10 mb-3 sm2:justify-center sm2:items-center lg:justify-start lg:items-start max-sm2:px-6">
       <button className="bg-[#03cf65] px-5 py-3 text-white rounded-sm font-semibold shadow-lg text-sm  transition-all duration-300 hover:bg-[#03b95a]  transform hover:-translate-y-0.5 ">
            Start 14-Day Free Trial
          </button>
          <button className="bg-white px-4 py-2.5 rounded-sm font-bold text-black border-black border-2 shadow-lg text-sm transition-all duration-300  hover:bg-opacity-95  transform hover:-translate-y-0.5 ">
            Join Live Demo
          </button>
       </div>
       <p className="text-[12.8px] text-[#828282] max-lg:text-center">
       No Credit Card Needed
       </p>
      </div>
      {/* Left Section */}
      <div className="lg:w-1/2 md:w-[70%] sm:w-[65%] max-sm:w-[80%] max-sm2:w-[100%] lg:pt-28 md:pt-24 sm:pt-20 pt-16 ">
        <div>
          <Image src={HeroImage} alt="hero image" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
