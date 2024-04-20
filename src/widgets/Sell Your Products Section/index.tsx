"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  sell_your_products_Interface,
  sell_your_products_data,
} from "@/assests/data/sell_your_products_data";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

function Sell_Products_Section() {
  const [selectedItem, setSelectedItem] =
    useState<sell_your_products_Interface | null>(sell_your_products_data[0]);

  const handleItemClick = (item: sell_your_products_Interface) => {
    setSelectedItem(item);
  };

  return (
    <div className="container mt-24 mb-10">
      {/* Heading And Text */}
      <div className="text-center flex flex-col justify-center items-center ">
        <h1 className="sm2:text-3xl text-2xl font-bold max-w-[350px] !leading-snug">
          Sell your Products on WhatsApp
        </h1>
        <p className="mt-4 mb-10">
          WhatsApp Catalog, Cart & Payments in One Place!
        </p>
      </div>

      {/* Main Div */}
      <div className="flex pt-10 w-full justify-center items-center gap-x-10 max-md2:hidden max-md2:flex-col max-md2:gap-y-10">
        {/* Left Side Image */}
        <div className="flex-1 relative !h-full w-full justify-center items-center   ">
          <PhotoProvider>
            <AnimatePresence >
              {sell_your_products_data.map((item) => {
                if (selectedItem?.id == item.id) {
                  return (
                    <PhotoView src={selectedItem?.image.src} key={item.id}>
                      <motion.div className="absolute lg:-top-[230px] md:-top-54 sm:-top-40 -top-32 mx-auto   " key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Image
                          src={selectedItem.image}
                          alt="image"
                          className="object-contain shadow-lg "
                          width={500}
                          height={500}
                        />
                      </motion.div>
                     </PhotoView>
                  );
                }
              })}
            </AnimatePresence>
          </PhotoProvider>
        </div>

        {/* Right Side Form */}
        <div className="flex-1">
          <ul className="flex flex-col gap-y-5 max-w-[420px]">
            {sell_your_products_data.map((item) => (
              <li
                key={item.id}
                className={
                  selectedItem === item
                    ? "selected-item cursor-pointer bg-[#E4FEEC] p-4 rounded"
                    : "cursor-pointer hover:bg-lime-50 p-4 rounded-sm"
                }
                onClick={() => handleItemClick(item)}
              >
                <h2 className="font-bold mb-2 text-[13px] text-[#303030]">
                  {item.title}
                </h2>
                <p className="text-base font-[410] text-[#3d3d3d] ">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile View Div */}
      <div className="md2:hidden">
        <ul className="flex flex-col gap-y-20  justify-center items-center ">
          {sell_your_products_data.map((item) => (
            <>
              <li
                key={item.id}
                className="max-w-[400px] p-4 rounded bg-green-100"
                onClick={() => handleItemClick(item)}
              >
                <h2 className="font-bold mb-2 text-[13px] text-[#303030]">
                  {item.title}
                </h2>
                <p className="text-base font-[500] text-[#303030] ">
                  {item.description}
                </p>
              </li>
              <div>
                <Image
                  src={item.image}
                  alt="image"
                  className="object-contain shadow-lg w-[700px] "
                />
              </div>
            </>
          ))}
        </ul>
      </div>
      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className="flex px-2.5 pr-5  py-1.5 bg-[#943bdc1f] rounded-full items-center  sm2:gap-x-2 max-sm2:gap-x-2 transition-all hover:bg-[rgba(148,59,220,0.185)] group">
          <span className="text-white text-[10px] font-bold whitespace-nowrap bg-[#943bdc] px-3 py-1 rounded-full">
            GET STARTED
          </span>
          <p className="text-[#943bdc] text-sm font-medium sm2:whitespace-nowrap">
            Start your 14-Day Free Trial
          </p>
          <svg
            className="sm2:w-4 sm2:h-4 w-3 h-3 group-hover:translate-x-1"
            viewBox="0 0 13 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.823 4.164L8.954.182a.592.592 0 0 0-.854 0 .635.635 0 0 0 0 .88l2.836 2.92H.604A.614.614 0 0 0 0 4.604c0 .344.27.622.604.622h10.332L8.1 8.146a.635.635 0 0 0 0 .88.594.594 0 0 0 .854 0l3.869-3.982a.635.635 0 0 0 0-.88z"
              fillRule="nonzero"
              fill="#943bdc"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Sell_Products_Section;
