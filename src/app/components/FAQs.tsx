'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import '../styles/Navbar.css'
import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";


const FAQs = () => {

    return (
        <div id="faqs" className="grid px-5 md:px-20 py-30 text-center">
            <h1
                style={{ fontFamily: "var(--font-funnel-display) !important" }}
                className="text-[#051912] font-bold text-3xl md:text-5xl mb-5">Frequently Asked Questions</h1>

                
<div className="grid md:flex gap-5 mb-5">
  <div className="flex-1 text-left bg-gray-100 p-6 rounded-2xl">
    <h1
      style={{ fontFamily: "var(--font-funnel-display) !important" }}
      className="text-[#051912] text-lg font-medium  mb-2"
    >
      1. What is PalmBloc?
    </h1>
    <h1
      style={{ fontFamily: "var(--font-mona-sans) !important" }}
      className="text-[#404040] border-l-5 border-[#D9D9D9] pl-2 hidden md:block"
    >
      A platform that lets you invest in yield-generating assets and <br />
      send money across Africa using stablecoins.
    </h1>
    <h1
      style={{ fontFamily: "var(--font-mona-sans) !important" }}
      className="text-[#404040] border-l-5 border-[#D9D9D9] pl-2 block md:hidden"
    >
      A platform that lets you invest in yield-generating assets and 
      send money across Africa using stablecoins.
    </h1>
  </div>
  <div className="flex-1 text-left bg-gray-100 p-6 rounded-2xl">
    <h1
      style={{ fontFamily: "var(--font-funnel-display) !important" }}
      className="text-[#051912] text-lg font-medium mb-2"
    >
      2. Are my funds safe?
    </h1>
    <h1
      style={{ fontFamily: "var(--font-mona-sans) !important" }}
      className="text-[#404040] border-l-5 border-[#D9D9D9] pl-2 hidden md:block"
    >
      Yes. All yield tokens are backed 1:1 by real-world assets held by <br />
      licensed custodians.
    </h1>
    <h1
      style={{ fontFamily: "var(--font-mona-sans) !important" }}
      className="text-[#404040] border-l-5 border-[#D9D9D9] pl-2 block md:hidden"
    >
      Yes. All yield tokens are backed 1:1 by real-world assets held by
      licensed custodians.
    </h1>
  </div>
</div>

<div className="grid md:flex gap-5 mb-5">
  <div className="flex-1 text-left bg-gray-100 p-6 rounded-2xl">
    <h1
      style={{ fontFamily: "var(--font-funnel-display) !important" }}
      className="text-[#051912] text-lg font-medium mb-2"
    >
      3. How does PalmBloc make money?
    </h1>
    <h1
      style={{ fontFamily: "var(--font-mona-sans) !important" }}
      className="text-[#404040] border-l-5 border-[#D9D9D9] pl-2 hidden md:block"
    >
      A small platform fee is applied to yield earned — no hidden <br />
      charges or remittance fees.
    </h1>
    <h1
      style={{ fontFamily: "var(--font-mona-sans) !important" }}
      className="text-[#404040] border-l-5 border-[#D9D9D9] pl-2 block md:hidden"
    >
      A small platform fee is applied to yield earned — no hidden
      charges or remittance fees.
    </h1>
  </div>
  <div className="flex-1 text-left bg-gray-100 p-6 rounded-2xl">
    <h1
      style={{ fontFamily: "var(--font-funnel-display) !important" }}
      className="text-[#051912] text-lg font-medium mb-2"
    >
      4. Do I need a crypto wallet?
    </h1>
    <h1
      style={{ fontFamily: "var(--font-mona-sans) !important" }}
      className="text-[#404040] border-l-5 border-[#D9D9D9] pl-2 hidden md:block"
    >
      No. You can receive money via SMS or QR, and we’ll create a <br />
      wallet for you on the fly.
    </h1>
    <h1
      style={{ fontFamily: "var(--font-mona-sans) !important" }}
      className="text-[#404040] border-l-5 border-[#D9D9D9] pl-2 block md:hidden"
    >
      No. You can receive money via SMS or QR, and we’ll create a 
      wallet for you on the fly.
    </h1>
  </div>
</div>

<div className="grid md:flex gap-5 mb-5">
  <div className="flex-1 text-left bg-gray-100 p-6 rounded-2xl">
    <h1
      style={{ fontFamily: "var(--font-funnel-display) !important" }}
      className="text-[#051912] text-lg font-medium mb-2"
    >
      5. What blockchain is this on?
    </h1>
    <h1
      style={{ fontFamily: "var(--font-mona-sans) !important" }}
      className="text-[#404040] border-l-5 border-[#D9D9D9] pl-2 hidden md:block"
    >
      PalmBloc runs on Arbitrum and Solana for fast, low-cost <br />
      transactions.
    </h1>
    <h1
      style={{ fontFamily: "var(--font-mona-sans) !important" }}
      className="text-[#404040] border-l-5 border-[#D9D9D9] pl-2 block md:hidden"
    >
      PalmBloc runs on Arbitrum and Solana for fast, low-cost
      transactions.
    </h1>
  </div>
  <div className="flex-1 text-left  p-6 rounded-2xl">
   
  </div>
</div>





        </div>
    )

};

export default FAQs