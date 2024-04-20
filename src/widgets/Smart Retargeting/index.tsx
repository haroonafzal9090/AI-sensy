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
import whatsapp_video_image from "@/assests/images/whatsapp-video-image.png";
import Image from "next/image";
function Smart_Retargeting_For_Sales() {
  return (
    <div className="container mt-24 mb-10 ">
      {/* Heading And Paragraph */}

      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="sm2:text-3xl text-2xl font-bold ">Smart Retargeting for 3X Sales</h1>
        <p className="mt-6 mb-12 max-w-[440px]">
          Segregate your Audiences Smartly and Re-Broadcast for Higher
          Conversions!
        </p>
      </div>
      {/* Main Container Of Both Right And Left */}
      <div className="flex mt-10 lg:gap-x-16 md:gap-x-10 max-md:gap-x-8 max-md2:flex-col max-md2:gap-y-10 xl:pl-10">
        {/* Right Video */}
        <div className="flex-1 flex justify-center items-center">
        <Dialog>
        <DialogTrigger className="w-full">
          <div className="relative">
            <div className="flex justify-center items-center mx-auto">
              <Image src={whatsapp_video_image} alt="" className="object-contain" />
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
                <div className="absolute md2:top-48 sm:top-56 sm3:top-52 max-sm3:top-48 max-sm2:top-44 max-sm1:top-[155px] max-xs:top-36 text-white text-xl max-sm2:text-lg text-center w-full h-full ">
                  0:54
                </div>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className='max-w-[1400px]'>
        <Video  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" autoPlay accentColor='#54BBFFCC' />
        </DialogContent>
      </Dialog>
        </div>

        {/* Left Section */}

        <div className="flex-1">
          {/* SVG And Text */}
          <div className="flex items-center gap-x-2">
            <svg
              className="feature__icon"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle fill="#e4feec" cx="20" cy="20" r="20"></circle>
              <g transform="translate(12 13)">
                <rect fill="#29c853" x="5" width="6" height="6" rx="3"></rect>
                <rect fill="#29c853" y="8" width="6" height="6" rx="3"></rect>
                <rect
                  fill="#076b00"
                  x="10"
                  y="8"
                  width="6"
                  height="6"
                  rx="3"
                ></rect>
              </g>
            </svg>

            <h2 className="text-sm font-bold"> SMART AUTO-SEGREGATION</h2>
          </div>

          {/* Text */}

          <p className="mt-4 text-base max-w-[480px] mb-8">
            AiSensy automatically segregates your broadcast audience by
            Delivered, Read, Replied Audiences. Run Retargeting Campaigns on the
            Basis of these filters.{" "}
          </p>
          {/* Div 2 */}
          <div className="flex items-center gap-x-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <circle
                  fill="#E9F1FF"
                  className="fill-[#e4feec]"
                  cx="20"
                  cy="20"
                  r="20"
                ></circle>
                <g fill-rule="nonzero">
                  <path
                    d="M23.723 18.901a.287.287 0 0 0-.26-.166h-3.398l3.354-5.295a.287.287 0 0 0-.242-.44h-4.589a.287.287 0 0 0-.256.159l-4.302 8.603a.286.286 0 0 0 .257.414h2.949l-3.214 7.632a.287.287 0 0 0 .484.296l9.177-10.897a.287.287 0 0 0 .04-.306z"
                    fill="#4D61FC"
                    className="fill-[#29c853]"
                  ></path>
                  <path
                    d="M26.973 18.901a.287.287 0 0 0-.26-.166h-3.398l3.354-5.295a.287.287 0 0 0-.242-.44h-4.589a.287.287 0 0 0-.256.159l-4.302 8.603a.286.286 0 0 0 .257.414h2.949l-3.214 7.632a.287.287 0 0 0 .484.296l9.177-10.897a.287.287 0 0 0 .04-.306z"
                    stroke="#E9F1FF"
                    className="stroke-light fill-[#076b00]"
                    fill="#00396B"
                  ></path>
                </g>
              </g>
            </svg>

            <h2 className="text-sm font-bold">DRIVE 3X SALES</h2>
          </div>

          {/* Text */}

          <p className="mt-4 text-base max-w-[480px] mb-8">
            Retargeting Campaigns have proven to Increase sales and engagement
            for Businesses
          </p>
          {/* Button */}
          <div className='group flex items-center'>
          <button className="flex items-center gap-x-2.5 mt-2 transition-all duration-300   transform group-hover:-translate-y-0.5">
            <span className="text-[#03cf65] font-bold text-sm">
              Get Started with AiSensy{" "}
            </span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1"
              viewBox="0 0 13 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.823 4.164L8.954.182a.592.592 0 0 0-.854 0 .635.635 0 0 0 0 .88l2.836 2.92H.604A.614.614 0 0 0 0 4.604c0 .344.27.622.604.622h10.332L8.1 8.146a.635.635 0 0 0 0 .88.594.594 0 0 0 .854 0l3.869-3.982a.635.635 0 0 0 0-.88z"
                fill-rule="nonzero"
                fill="#03cf65"
              ></path>
            </svg>
          </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Smart_Retargeting_For_Sales;
