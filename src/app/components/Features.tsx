'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import '../styles/Navbar.css'
import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";


const Features = () => {

    return (
        <div id="features" className="grid md:flex gap-3 px-5 md:px-20 py-30">
            <div>
           
                <h1 
                style={{ fontFamily: "var(--font-mona-sans) !important" }}
                className="text-9xl leading-1 text-gray-100 font-extrabold">01</h1>
                <h1 
                style={{ fontFamily: "var(--font-mona-sans) !important" }}
                className="font-thin text-[#404040] mb-5">FEATURES</h1>
                <h1 
                style={{ fontFamily: "var(--font-funnel-display) !important" }}
                className="text-5xl md:text-6xl font-semibold text-[#051912] leading-[4rem] mb-5">Built for Borderless Finance</h1>
                <h1 
                style={{ fontFamily: "var(--font-mona-sans) !important" }}
                className="text-[#404040] mb-3">PalmBloc empowers you to earn, send, and <br /> grow with tokenized assets and instant <br /> stablecoin transfers—no banks, no borders.</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
               
                <div className="grid grid-rows-2 gap-4">
                    <div className="flex-1  bg-gray-100 p-8 text-center items-center justify-items-center rounded-3xl h-full grid gap-3">
                        <img src="/paddlockBtn.svg" alt="" />
                        <h1 
                         style={{ fontFamily: "var(--font-funnel-display) !important" }}
                        className="text-xl font-semibold text-[#404040]">Tokenized Yield Vaults</h1>
                        <p 
                        style={{ fontFamily: "var(--font-mona-sans) !important" }}
                        className="font-extralight text-sm text-[#404040]">
                            Grow your money with real-world assets. <br /> Invest in tokenized Treasury Bills and earn <br /> passive income — backed 1:1 by licensed <br /> custodians.
                        </p>
                    </div>
                    <div className=" flex-1 bg-gray-100 p-8 text-center items-center justify-items-center rounded-3xl h-full grid gap-3">
                        <img src="/House.svg" alt="" />
                        <h1 
                        style={{ fontFamily: "var(--font-funnel-display) !important" }}
                        className="text-xl font-semibold text-[#404040]">Local Cash-Out</h1>
                        <p 
                        style={{ fontFamily: "var(--font-mona-sans) !important" }}
                        className="font-extralight text-sm text-[#404040] hidden md:block">
                            Convert to local currency, anytime. Withdraw <br /> to NGN, KES, GHS, and more via Flutterwave, <br /> M-Pesa, Chipper & other local partners.
                        </p>
                        <p 
                        style={{ fontFamily: "var(--font-mona-sans) !important" }}
                        className="font-extralight text-sm text-[#404040] block md:hidden">
                            Convert to local currency, anytime. Withdraw  to NGN, KES, GHS, and more via Flutterwave, M-Pesa, Chipper & other local partners.
                        </p>
                    </div>
                </div>

                
                <div className="grid grid-rows-2 gap-4">
                    <div className="flex-1 bg-gray-100 p-8 text-center items-center justify-items-center rounded-3xl h-full grid gap-3">
                        <img src="/Worldweb.svg" alt="" />
                        <h1 
                        style={{ fontFamily: "var(--font-funnel-display) !important" }}
                        className="text-xl font-semibold text-[#404040]">Instant Remittances</h1>
                        <p 
                        style={{ fontFamily: "var(--font-mona-sans) !important" }}
                        className="font-extralight text-sm text-[#404040]">
                            Send money across borders in 10 seconds. <br /> Transfer USDT or USDC with near-zero fees, <br /> no bank accounts required.
                        </p>
                    </div>
                    <div className="flex-1 bg-gray-100 p-8 text-center items-center justify-items-center rounded-3xl h-full grid gap-3">
                        <img src="/wallet.svg" alt="" />
                        <h1 
                        style={{ fontFamily: "var(--font-funnel-display) !important" }}
                        className="text-xl font-semibold text-[#404040]">Wallet-Free Transfers</h1>
                        <p 
                        style={{ fontFamily: "var(--font-mona-sans) !important" }}
                        className="font-extralight text-sm text-[#404040]">
                            No wallet? No stress. Send funds via SMS or <br /> QR. Recipients without a wallet can claim instantly — powered by smart payment links.
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )

}

export default Features