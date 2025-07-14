'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import '../styles/Navbar.css'
import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";


const HowItWorks = () => {

    return (
        <div id="howitworks" className="grid px-5 md:px-20 pt-5 md:pt-30 text-center">
            <h1
                style={{ fontFamily: "var(--font-funnel-display) !important" }}
                className="text-[#051912] font-bold text-3xl md:text-5xl mb-5">How PalmBloc Works</h1>

                <div className="text-right">   <h1 
                style={{ fontFamily: "var(--font-mona-sans) !important" }}
                className="text-9xl leading-10 text-gray-100 font-extrabold pr-10">02</h1></div>
            <div className="grid md:flex gap-5 mb-5">
                
                <div className="w-full md:w-7/12 bg-[#051912] py-18 text-left pl-10 bg-[position:top_right] bg-[length:120px] sm:bg-[length:160px]  bg-no-repeat rounded-3xl"
                    style={{ backgroundImage: "url('/USDT.svg')"}}>
                    <h1 className="text-gray-400 font-bold text-xl">01.</h1>
                    <h1 className="text-white text-2xl md:text-4xl font-bold">Deposit USDC or <br /> USDT</h1>
                </div>
                
                <div className="w-full md:w-5/12 bg-[#051912] py-18 text-left pl-10 bg-[position:bottom_right] bg-[length:180px] sm:bg-[length:180px] bg-no-repeat rounded-3xl"
                    style={{
                        backgroundImage: "url('/VaultDoor.svg')" }}
                >
                    <h1 className="text-gray-400 font-bold text-xl">02.</h1>
                    <h1 className="text-white text-2xl md:text-4xl font-bold">
                        Choose a <br /> vault
                    </h1>
                </div>

            </div>

            <div className="grid md:flex gap-5">
                <div className="w-full md:w-6/12 bg-[#051912] py-18 text-left pl-10 bg-[position:bottom_right] bg-[length:150px] sm:bg-[length:190px] bg-no-repeat rounded-3xl"
                    style={{ backgroundImage: "url('/WalletBg.svg')" }}>
                    <h1 className="text-gray-400 font-bold text-xl">03.</h1>
                    <h1 className="text-white text-2xl md:text-4xl font-bold">Receive  <br /> eYieldTokens <br />in your wallet</h1>
                </div>
                <div className="w-full md:w-6/12 bg-[#051912] py-18 text-left pl-10 bg-[position:top_right] bg-[length:150px] sm:bg-[length:200px] bg-no-repeat rounded-3xl"
                    style={{ backgroundImage: "url('/Track.svg')" }}>
                    <h1 className="text-gray-400 font-bold text-xl">04.</h1>
                    <h1 className="text-white text-2xl md:text-4xl font-bold">Track your <br /> yield. Redeem <br />anytime.</h1>
                </div>

            </div>




        </div>
    )

};

export default HowItWorks