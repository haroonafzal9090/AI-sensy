import Video from 'next-video';
import React from "react";


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import video_image from "@/assests/images/video-image.png";

function Video_Section() {
  return (
    <div className="container mt-14 mb-16">
      {/* Video Section */}
      <Dialog>
        <DialogTrigger className="w-full">
          <div className="relative">
            <div className="flex justify-center items-center mx-auto">
              <Image
                src={video_image}
                alt="Webinar Image"
                className="object-contain h-[500px]"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center group">
              <div className="text-white relative bg-[rgba(84,187,255,0.8)]/[0.5] h-[85px] w-32 items-center flex justify-center transition-all duration-100 group-hover:w-[890px] group-hover:h-[500px]">
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
                <div className="absolute top-72 text-white text-xl text-center w-full ">
                  2:44
                </div>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className='max-w-[1400px]'>
        <Video  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" autoPlay accentColor='#54BBFFCC'  />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Video_Section;
