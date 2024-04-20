"use client"
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";


function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showMenu, setShowMenu] = useState(false); // State variable for hamburger menu
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (dropdown:any) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Function to close dropdown when clicking outside
  const handleClickOutside = (event:any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);
    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
    className={`bg-white sticky top-0 py-3 z-30  ${
      showMenu ? "" : " shadow-lg shadow-gray-100 "
    }`}
  >
    <div className="flex items-center justify-evenly container max-xl3:justify-start max-xl3:gap-x-6 max-xl3:py-2 xl3:gap-x-4 max-xl1:justify-between">
      {/* logo */}
      <div className="shrink-0 transition-opacity duration-200 ease-in-out hover:opacity-50 cursor-pointer">
        <Image src={"/Logo.png"} alt="Logo" width={200} height={200} className=" object-contain shrink-0" />
      </div>
      <div className="xl3:flex items-center max-xl3:gap-x-10 gap-x-5 max-xl3:space-y-3 max-xl1:hidden w-full  ">
        {/* links */}
        <div className="relative w-full ">
          <ul className="flex xl3:justify-evenly xl3:pl-14 xl3:pr-4 gap-x-16  items-center font-bold text-[13.5px] text-[#303030]">
            <Link href="/pricing">
              <li className="transition-all duration-300 hover:bg-opacity-95  transform hover:-translate-y-0.5 cursor-pointer">Pricing</li>
            </Link>
            <li>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("resources")}
                  className="flex items-center gap-x-2 justify-center transition-all duration-300 hover:bg-opacity-95  transform hover:-translate-y-0.5 cursor-pointer "
                >
                  Resources
                  <span
                    className="dropdown-icon"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {openDropdown === "resources" ? (
                      <span>&#9668;</span>
                    ) : (
                      <span>&#9660;</span>
                    )}
                  </span>
                </button>
                {openDropdown === "resources" && (
                  <ul className="absolute z-30 -left-20 top-9 bg-white shadow-md rounded px-4 py-6 gap-y-7 text-center flex flex-col w-52 justify-center items-center text-[14.5px] font-[700]">
                    <Link href="/learning-hub">
                      <li>Learning Hub</li>
                    </Link>
                    <Link href="/blog">
                      <li>Blog</li>
                    </Link>
                    <Link href="/whatsapp-business api">
                      <li>Whatsapp Bussiness API</li>
                    </Link>
                    <Link href="/whatsapp-marketing">
                      <li>Whatsapp Marketing</li>
                    </Link>
                    <Link href="/chatbot-development">
                      <li>Learn Chatbot Development</li>
                    </Link>
                    <Link href="/api-docs">
                      <li>API Docs</li>
                    </Link>
                    <Link href="/chatbot-templates">
                      <li>Chatbot Templates</li>
                    </Link>
                    <Link href="/platform-tutorials">
                      <li>Platform Tutorials</li>
                    </Link>
                    <Link href="/template-message-library">
                      <li>Template Message Library</li>
                    </Link>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("product")}
                  className="flex items-center gap-x-2 justify-center transition-all duration-300 hover:bg-opacity-95  transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Product
                  <span
                    className="dropdown-icon"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {openDropdown === "product" ? (
                      <span>&#9668;</span>
                    ) : (
                      <span>&#9660;</span>
                    )}
                  </span>
                </button>
                {openDropdown === "product" && (
                  <ul className="absolute z-30 -left-10 top-9 bg-white shadow-md rounded px-4 py-6 gap-y-4 flex flex-col w-36 justify-center items-center font-bold">
                    <Link href="/features">
                      <li>Features</li>
                    </Link>
                    <Link href="/use-cases">
                      <li>Use-Cases</li>
                    </Link>
                    <Link href="/case-studies">
                      <li>Case Studies</li>
                    </Link>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("integrations")}
                  className="flex items-center gap-x-2 justify-center transition-all duration-300 hover:bg-opacity-95  transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Integrations
                  <span
                    className="dropdown-icon"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {openDropdown === "integrations" ? (
                      <span>&#9668;</span>
                    ) : (
                      <span>&#9660;</span>
                    )}
                  </span>
                </button>
                {openDropdown === "integrations" && (
                  <ul className="absolute -left-10 z-30 top-9 bg-white shadow-md rounded px-4 py-6 text-center gap-y-4 flex flex-col w-44 justify-center items-center font-bold">
                    <Link href="/whatsapp-links">
                      <li>
                        Whatspp Links
                      </li>
                    </Link>
                    <Link href="/whatsapp-buttons">
                      <li>
                        Whatsapp Buttons
                      </li>
                    </Link>
                    <Link href="/app-marketplace">
                      <li>
                        App Marketplace
                      </li>
                    </Link>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </div>
        {/* buttons */}
        <div className="flex gap-x-3  ">
          <button className="bg-[#03cf65] px-5 py-2.5 text-white rounded-sm font-bold shadow-lg text-sm whitespace-nowrap transition-all duration-300 hover:bg-[#03b95a]  transform hover:-translate-y-0.5 ">
            Start 14-Day Free Trial
          </button>
          <button className="bg-white px-9 py-2.5 rounded-sm font-bold text-[#303030] border-black border-2 shadow-lg text-sm transition-all duration-300  hover:bg-opacity-95  transform hover:-translate-y-0.5 ">
            Login
          </button>
        </div>
      </div>

      {/* Mobile menu */}

      {/* hamburger menu */}
      <div className="xl1:hidden">
        <button
          onClick={toggleMenu}
          className="relative z-10 shadow-xl rounded-full w-12 h-12 bg-white flex items-center justify-center"
        >
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold">
            {showMenu ? "✕" : "☰"}
          </span>
        </button>
      </div>
    </div>
    {showMenu && (
      <div className="bg-white h-full w-full overflow-hidden fixed py-8  flex flex-col items-center justify-start  xl1:hidden">
        <div className="relative">
          <ul className="flex flex-col gap-y-8 font-bold text-[13.4px] text-[#303030]  ">
            <Link href="/pricing">
              <li className="text-center">Pricing</li>
            </Link>
            <li>
              <div className="relative">
                <li
                  onClick={() => toggleDropdown("resources")}
                  className="flex items-center gap-x-2 justify-center text-left"
                >
                  Resources
                  <span
                    className="dropdown-icon "
                    style={{ fontSize: "0.6rem" }}
                  >
                    {openDropdown === "resources" ? (
                      <span>&#9668;</span>
                    ) : (
                      <span>&#9660;</span>
                    )}
                  </span>
                </li>
                {openDropdown === "resources" && (
                  <ul className="absolute z-30 -left-20 top-9 bg-white shadow-md rounded px-4 py-6 gap-y-7 text-center flex flex-col w-52 justify-center items-center text-[14.5px] font-[700]">
                    <Link href="/learning-hub">
                      <li>Learning Hub</li>
                    </Link>
                    <Link href="/blog">
                      <li>Blog</li>
                    </Link>
                    <Link href="/whatsapp-business api">
                      <li>Whatsapp Bussiness API</li>
                    </Link>
                    <Link href="/whatsapp-marketing">
                      <li>Whatsapp Marketing</li>
                    </Link>
                    <Link href="/chatbot-development">
                      <li>Learn Chatbot Development</li>
                    </Link>
                    <Link href="/api-docs">
                      <li>API Docs</li>
                    </Link>
                    <Link href="/chatbot-templates">
                      <li>Chatbot Templates</li>
                    </Link>
                    <Link href="/platform-tutorials">
                      <li>Platform Tutorials</li>
                    </Link>
                    <Link href="/template-message-library">
                      <li>Template Message Library</li>
                    </Link>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <div className="relative">
                <li
                  onClick={() => toggleDropdown("product")}
                  className="flex items-center gap-x-2 justify-center text-center "
                >
                  Product
                  <span
                    className="dropdown-icon"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {openDropdown === "product" ? (
                      <span>&#9668;</span>
                    ) : (
                      <span>&#9660;</span>
                    )}
                  </span>
                </li>
                {openDropdown === "product" && (
                  <ul className="absolute z-30 text-center -left-10 top-9 bg-white shadow-md rounded px-4 py-6 gap-y-4 flex flex-col w-36 justify-center items-center font-bold">
                    <Link href="/features">
                      <li>Features</li>
                    </Link>
                    <Link href="/use-cases">
                      <li>Use-Cases</li>
                    </Link>
                    <Link href="/case-studies">
                      <li>Case Studies</li>
                    </Link>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("integrations")}
                  className="flex items-center gap-x-2 justify-center"
                >
                  Integrations
                  <span
                    className="dropdown-icon"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {openDropdown === "integrations" ? (
                      <span>&#9668;</span>
                    ) : (
                      <span>&#9660;</span>
                    )}
                  </span>
                </button>
                {openDropdown === "integrations" && (
                  <ul className="absolute -left-10 z-30 top-9 bg-white shadow-md rounded px-4 py-6 text-center gap-y-4 flex flex-col w-44 justify-center items-center font-bold">
                    <Link href="/whatsapp-links">
                      <li>
                        Whatspp Links
                      </li>
                    </Link>
                    <Link href="/whatsapp-buttons">
                      <li>
                        Whatsapp Buttons
                      </li>
                    </Link>
                    <Link href="/app-marketplace">
                      <li>
                        App Marketplace
                      </li>
                    </Link>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-4 justify-center items-center mt-6 w-full ">
          <button className="bg-[#03cf65] w-52 py-3 text-white rounded-sm font-semibold shadow-lg text-sm ">
            Start 14-Day Free Trial
          </button>
          <button className="bg-white w-32 py-3 rounded-sm font-bold shadow-lg text-sm text-[#303030] border-black border-2">
            Login
          </button>
        </div>
      </div>
    )}
  </div>
  );
}

export default Header;
