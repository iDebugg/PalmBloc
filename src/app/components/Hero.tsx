'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import '../styles/Navbar.css'
import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";


const Hero = () => {


    return (

        <div id="home" className=" bg-[#051912] rounded-b-[100px] h-screen bg-cover bg-center relative font-funnel"
            style={{ backgroundImage: "url('/Clip.svg')" }} >
            <Navbar />
            <div className="homebagk text-gray-500 pt-10 md:pt-20 px-5 md:px-20">
                <div className="grid md:flex justify-between mb-30">
                    <div><h1
                        style={{ fontFamily: "var(--font-funnel-display) !important" }}
                        className="text-6xl font-semibold text-white leading-[4rem]	hidden md:block">Own Emerging <br /> Markets. Hedge Your <br /> <span className="text-[#D4F100]">Wealth</span>.</h1>
                        <h1
                            style={{ fontFamily: "var(--font-funnel-display) !important" }}
                            className="text-4xl font-semibold text-white leading-[3rem]	block md:hidden mb-3">Own Emerging <br /> Markets. Hedge Your  <span className="text-[#D4F100]">Wealth</span>.</h1>
                    </div>
                    <div
                        style={{ fontFamily: "var(--font-mona-sans) !important" }}
                        className="grid gap-2">
                        <h1 className="text-white text-2xl hidden md:block">PalmBloc tokenizes access to high-growth <br /> African and emerging market investments, <br /> while protecting your wealth from currency <br /> volatility with stablecoins.</h1>
                        <h1 className="text-white text-xl block md:hidden">PalmBloc tokenizes access to high-growth African and emerging market investments, while protecting your wealth from currency  volatility with stablecoins.</h1>
                        <div className="flex gap-4">
                            <button
                                style={{ fontFamily: "var(--font-funnel-display) !important" }}
                                className="text-black text-sm py-2 px-6 rounded-lg font-bold bg-[#D4F100] font-funnel">
                                Start Investing Today
                            </button>
                            <button className="bg-white rounded-lg p-1"><img src="/arrow_downward_alt.svg" alt="" className="w-8 h-6" /></button>

                        </div>
                    </div>
                </div>

                <div className="hidden md:flex absolute bottom-0 left-0 w-full  justify-center">
                    <div className="grid gap-1 place-content-center">
                        <img src="/image5.svg" alt="" className="w-15 justify-self-end" />
                        <img src="/image4.svg" alt="" className="w-35" />
                    </div>

                    <img src="/Groupimage.png" alt="" className="w-90 z-10" />

                    <div className="grid gap-1 place-content-center">
                        <img src="/image3.svg" alt="" className="w-35 " />
                        <img src="/image2.svg" alt="" className="w-35" />
                    </div>
                </div>
                <div className="flex md:hidden absolute bottom-0 left-0 w-full  justify-center">
                    <div className="-mr- grid gap-1 place-content-center ">
                        <img src="/image5.svg" alt="" className="w-12 justify-self-end" />
                        <img src="/image4.svg" alt="" className="w-35" />
                    </div>

                    <img src="/Groupimage.png" alt="" className="w-60 z-10" />

                    <div className="-ml- grid gap-1 place-content-center">
                        <img src="/image3.svg" alt="" className="w-35" />
                        <img src="/image2.svg" alt="" className="w-35" />
                    </div>
                </div>







            </div>
        </div>
    );
}

export default Hero