import Video from "next-video";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import whatsapp_video_image from "@/assests/images/features-click-to-whatsapp.webp";
import Image from "next/image";

function Drive_5x_Leads_Section() {
  return (
    <div className="container mb-10 mt-32 flex justify-center items-center  lg:gap-x-16 md:gap-x-10 max-md:gap-x-8 max-md2:flex-col-reverse max-md2:gap-y-10 xl:pl-10 ">
      {/* Right Side */}
      <div className="flex-1  ">
        <Dialog>
          <DialogTrigger className="w-full">
            <div className="relative">
              <div className="flex justify-center items-center mx-auto ">
                <Image
                  src={whatsapp_video_image}
                  alt=""
                  className="object-contain   "
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center group">
                <div className="text-white relative bg-[rgba(84,187,255,0.8)]/[0.5] h-[80px] w-28 items-center flex justify-center transition-all duration-100 group-hover:w-full group-hover:h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-play h-10 w-10 fill-white"
                  >
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                  <div className="absolute mt-32  group-hover:block hidden text-white text-xl text-center  ">
                    0:54
                  </div>
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-[1400px]">
            <Video
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              autoPlay
              accentColor="#54BBFFCC"
            />
          </DialogContent>
        </Dialog>
      </div>
      {/* Left Side */}
      <div className="flex-1 ">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-3xl font-bold max-w-[350px] text-[#303030] !leading-snug">
            Drive 5x Leads with Click to WhatsApp
          </h2>
          <p className="text-[#3D3D3D]">Create Facebook/ Instagram Ads directly via Aisensy</p>
          {/* List */}
          <ul className="mt-2 w-fit text-[#3D3D3D] text-[16px]    font-medium space-y-1  max-md2:flex max-md2:flex-col md2:max-w-[380px] ">
            <li className="block items-center   ">
              <span className="w-1 h-1 mr-3  shrink-0 rounded-full bg-[#29c853] inline-block "></span>
              Drive 3-5X Leads Instantly
            </li>
            <li className="block items-center max-md2:text-center ">
              <span className="w-1 h-1 mr-3 shrink-0 rounded-full bg-[#29c853] inline-block"></span>
              Reduce Cost Per Lead by 60%
            </li>
            <li className="block items-center max-md2:text-center ">
              <span className="w-1 h-1 mr-3  shrink-0 rounded-full bg-[#29c853] inline-block"></span>
              Broadcast to Leads generated
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Drive_5x_Leads_Section;
