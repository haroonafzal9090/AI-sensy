import { whyChooseWhatsappData } from "@/assests/data/why_choose_whatsapp_data";
import Image from "next/image";
import React from "react";

function Why_Choose_Whatsapp() {
  return (
    <div className="container mt-24 mb-10">
        {/* Heading And Paragraph */}
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="sm2:text-3xl text-2xl font-bold ">
        Why Choose WhatsApp?
        </h1>
        <p className="mt-6 mb-4 max-w-[440px]">
        Whatsapp is the One Platform that brings together Actionable Notifications & Customer Support!         </p>
      </div>
      {/* Card */}
      <div className=" container flex flex-wrap items-center justify-center mt-10 shadow-2xl rounded-xl gap-x-5 max-w-[900px] mx-auto ">
        {whyChooseWhatsappData.map((data) => (
            <div className="flex flex-col justify-center items-center mb-6  pt-8 pb-6 mt-6 px-8 hover:bg-[#ebfde8] rounded lg:w-[250px]" key={data.id}>
                <Image src={data.imageSrc} alt="image" height={70} width={70}/>
                <h1 className="font-bold text-2xl max-w-[150px] text-center">{data.heading}</h1>
            </div>
        ))}
      </div>
       {/* Button */}
       <div className="flex justify-center mt-14 group">
        <button className="flex px-2.5  pr-5 py-1.5 bg-[#943bdc1f] rounded-full items-center  sm2:gap-x-2 max-sm2:gap-x-2 transition-all hover:bg-[rgba(148,59,220,0.185)] group">
          <span className="text-white text-[10px] font-bold whitespace-nowrap bg-[#943bdc] px-3 py-1 rounded-full">
            EXCITED?
          </span>
          <p className="text-[#943bdc] text-base font-medium sm2:whitespace-nowrap">
            Get Started Now
          </p>
          <svg
            className="sm2:w-4 sm2:h-4 w-3 h-3 group-hover:translate-x-1 "
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

export default Why_Choose_Whatsapp;
