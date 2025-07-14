'use client';
import React, { useState } from 'react';

import { FaSearch } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState('home');


  return (
    <nav  className="homebagk bg-[#051912] text-black px-5 py-3  top-0 left-0 w-full ">
      <div className="container mx-auto flex justify-between items-center ">
        <a href="#Home" className="anchor-link" onClick={() => setMenu('home')}>
          <div className="flex gap-3 items-center">
            <img src="/Logo.svg" alt="" className="ToroGlogo h-9" />
            <h1
              style={{ fontFamily: "var(--font-funnel-display) !important" }}
              className="font-[var(--font-funnel-display)] text-sm sm:text-xl font-bold text-white">
              PalmBloc
            </h1>



          </div>
        </a>



        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hamburgerBg sm:hidden text-[#D4F100] hover:text-white p-2 rounded-[12px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w- h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className="hidden sm:flex space-x-6 font-[inter]">
          <a
            href="#home"
            onClick={() => setMenu("home")}
            style={{ fontFamily: "var(--font-mona-sans) !important" }}
            className={`cursor-pointer ${menu === "home" ? "text-[#D4F100]" : "text-[#ffffff]"}`}
          >
            Home
          </a>
          <a
            href="#features"
            onClick={() => setMenu("features")}
            style={{ fontFamily: "var(--font-mona-sans) !important" }}
            className={`cursor -pointer ${menu === "features" ? "text-[#D4F100]" : "text-[#ffffff]"}`}
          >
            Features
          </a>

          <a
            href="#howitworks"
            onClick={() => setMenu("howitworks")}
            style={{ fontFamily: "var(--font-mona-sans) !important" }}
            className={`cursor-pointer ${menu === "howitworks" ? "text-[#D4F100]" : "text-[#ffffff]"}`}
          >
            How It Works
          </a>

          <a
            href="#usecases"
            onClick={() => setMenu("usecases")}
            style={{ fontFamily: "var(--font-mona-sans) !important" }}
            className={`cursor-pointer ${menu === "usecases" ? "text-[#D4F100]" : "text-[#ffffff]"}`}
          >
            Use Cases
          </a>

          <a
            href="#faqs"
            onClick={() => setMenu("faqs")}
            style={{ fontFamily: "var(--font-mona-sans) !important" }}
            className={`cursor-pointer ${menu === "faqs" ? "text-[#D4F100]" : "text-[#ffffff]"}`}
          >
            FAQs
          </a>




        </div>

        <div className="hidden sm:flex gap-4 z-10 relative">

          <button
            style={{ fontFamily: "var(--font-funnel-display) !important" }}
            className="text-black text-sm py-2 px-3 rounded-lg  bg-[#D4F100]"

          >
            Join Waitlist
          </button>

        </div>


      </div>

      {isOpen && (
        <div className="sm:hidden bg-transparent grid gap-3 pt-3">
          <a
            href="#home"
            onClick={() => {
              setMenu("home");
              setIsOpen(false);
            }}
            style={{ fontFamily: "var(--font-mona-sans) !important" }}
            className={`cursor-pointer ${menu === "home" ? "text-[#D4F100]" : "text-[#ffffff]"}`}
          >
            Home
          </a>

          <a
            href="#features"
            onClick={() => {
              setMenu("features");
              setIsOpen(false);
            }}
            style={{ fontFamily: "var(--font-mona-sans) !important" }}
            className={`cursor -pointer ${menu === "features" ? "text-[#D4F100]" : "text-[#ffffff]"}`}
          >
            Features
          </a>

          <a
            href="#howitworks"
            onClick={() => {
              setMenu("howitworks");
              setIsOpen(false);
            }}
            style={{ fontFamily: "var(--font-mona-sans) !important" }}
            className={`cursor-pointer ${menu === "howitworks" ? "text-[#D4F100]" : "text-[#ffffff]"}`}
          >
            How It Works
          </a>
          <a
            href="#usecases"
            onClick={() => {
              setMenu("usecases");
              setIsOpen(false);
            }}
            style={{ fontFamily: "var(--font-mona-sans) !important" }}
            className={`cursor-pointer ${menu === "usecases" ? "text-[#D4F100]" : "text-[#ffffff]"}`}
          >
            Use Cases
          </a>

          <a
            href="#faqs"
            onClick={() => {
              setMenu("faqs");
              setIsOpen(false);
            }}
            style={{ fontFamily: "var(--font-mona-sans) !important" }}
            className={`cursor-pointer ${menu === "faqs" ? "text-[#D4F100]" : "text-[#ffffff]"}`}
          >
            FAQs
          </a>


          <div className="flex gap-2">
            <button
              style={{ fontFamily: "var(--font-funnel-display) !important" }}
              className="text-black text-medium py-2 px-4 rounded-lg  bg-[#D4F100]"

            >
              Join Waitlist
            </button>

          </div>
        </div>

      )}

    </nav>
  )

};

export default Navbar;
