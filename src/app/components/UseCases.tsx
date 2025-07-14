'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import '../styles/Navbar.css'
import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";


const UseCases = () => {

    return (
        <div id="usecases" className="px-5 md:px-20 pt-30 text-center">
            <h1 style={{ fontFamily: "var(--font-funnel-display) !important" }} className="text-[#051912] font-bold text-3xl md:text-5xl mb-7 text-left">Why PalmBloc?
            </h1>

                
         <div className="grid  place-items-end md:flex md:justify-between mb-20">
            <div className="grid gap-8">
                <div className="flex gap-3 text-left place-items-start ">
                    <img src="/Tokenized.svg" alt="" className="w-15 h-15"/>
                    <div>
                    <h1
                    style={{ fontFamily: "var(--font-funnel-display) !important" }} 
                    className="text-2xl font-semibold text-[#051912] mb-1">Tokenized Growth</h1>
                    <h1
                       style={{ fontFamily: "var(--font-mona-sans) !important" }}
                     className="text-[#404040] hidden md:block">Access African T-bills, bonds, and stocks — digitally. Tap into high-yield fixed- <br />income assets through secure, on-chain investment vaults.</h1>
                                         <h1
                       style={{ fontFamily: "var(--font-mona-sans) !important" }}
                     className="text-[#404040] block md:hidden">Access African T-bills, bonds, and stocks — digitally. Tap into high-yield fixed-income assets through secure, on-chain investment vaults.</h1>
                </div>
                </div>
                <div className="flex gap-3 text-left place-items-start">
                    <img src="/Earnbtn.svg" alt="" className="w-15 h-15"/>
                    <div>
                    <h1
                    style={{ fontFamily: "var(--font-funnel-display) !important" }} 
                    className="text-2xl font-semibold text-[#051912] mb-1">Stable Wealth</h1>
                    <h1
                       style={{ fontFamily: "var(--font-mona-sans) !important" }}
                     className="text-[#404040] hidden md:block">Preserve value in trusted stablecoins. Protect your funds from inflation while <br /> earning consistent returns without a bank account.</h1>
                     <h1
                       style={{ fontFamily: "var(--font-mona-sans) !important" }}
                     className="text-[#404040] block md:hidden">Preserve value in trusted stablecoins. Protect your funds from inflation while earning consistent returns without a bank account.</h1>
                </div>
                </div>
                <div className="flex gap-3 text-left place-items-start ">
                    <img src="/wordwebbtn.svg" alt="" className="w-15 h-15"/>
                    <div>
                    <h1
                    style={{ fontFamily: "var(--font-funnel-display) !important" }} 
                    className="text-2xl font-semibold text-[#051912] mb-1">Borderless & Fast</h1>
                    <h1
                       style={{ fontFamily: "var(--font-mona-sans) !important" }}
                     className="text-[#404040] hidden md:block">Invest and hedge instantly, from anywhere. Send and receive stablecoins <br /> across borders in seconds, with ultra-low fees.</h1>
                     <h1
                       style={{ fontFamily: "var(--font-mona-sans) !important" }}
                     className="text-[#404040] block md:hidden">Invest and hedge instantly, from anywhere. Send and receive stablecoins across borders in seconds, with ultra-low fees.</h1>
                </div>
                </div>
                <div className="flex gap-3 text-left place-items-start">
                    <img src="/lockbtn.svg" alt="" className="w-15 h-15"/>
                    <div>
                    <h1
                    style={{ fontFamily: "var(--font-funnel-display) !important" }} 
                    className="text-2xl font-semibold text-[#051912] mb-1">Transparent & Self-Custodied by Design</h1>
                    <h1
                       style={{ fontFamily: "var(--font-mona-sans) !important" }}
                     className="text-[#404040] hidden md:block">Your assets stay in your control. All transactions are recorded on the <br /> blockchain, so there's no need to rely on banks or middlemen.</h1>
                     <h1
                       style={{ fontFamily: "var(--font-mona-sans) !important" }}
                     className="text-[#404040] block md:hidden">Your assets stay in your control. All transactions are recorded on the blockchain, so there's no need to rely on banks or middlemen.</h1>
                </div>
                </div>
                <div className="flex gap-3 text-left place-items-start ">
                    <img src="/languagebtn.svg" alt="" className="w-15 h-15"/>
                    <div>
                    <h1
                    style={{ fontFamily: "var(--font-funnel-display) !important" }} 
                    className="text-2xl font-semibold text-[#051912] mb-1">Multilingual and mobile-first</h1>
                    <h1
                       style={{ fontFamily: "var(--font-mona-sans) !important" }}
                     className="text-[#404040] hidden md:block">Designed for real-world use in Africa and beyond—PalmBloc supports low- <br />bandwidth access and local languages like Hausa, French, Swahili, and  <br /> Arabic.</h1>
                     <h1
                       style={{ fontFamily: "var(--font-mona-sans) !important" }}
                     className="text-[#404040] block md:hidden">Designed for real-world use in Africa and beyond—PalmBloc supports low-bandwidth access and local languages like Hausa, French, Swahili, and Arabic.</h1>
                </div>
                </div>
            </div>
            <div>
                <img src="/Rectangle4.svg" alt="" className="w-120 hidden md:block" />
            </div>
         </div>
         <div className="grid  place-items-end md:flex md:justify-between ">
         <div>
                <img src="/woman.png" alt="" className="womanImg hidden md:block" />
            </div>
            <div className="grid gap-4">
                <h1 style={{ fontFamily: "var(--font-funnel-display) !important" }} className="text-4xl text-left font-bold leading-snug">Who Is PalmBloc <br /> Built For?</h1>
                <div className="flex gap-3 text-left place-items-start md:items-center">
                    <img src="/Bagbtn.svg" alt="" className="w-13 h-13"/>
                    <div>
                    <h1
                    style={{ fontFamily: "var(--font-funnel-display) !important" }} 
                    className="text-xl font-medium text-[#051912] mb-1">Freelancers earning in stablecoins</h1>
                    </div>
                </div>
                <div className="flex gap-3 text-left place-items-start md:items-center">
                    <img src="/Diaspobtn.svg" alt="" className="w-13 h-13"/>
                    <div>
                    <h1
                    style={{ fontFamily: "var(--font-funnel-display) !important" }} 
                    className="text-xl font-medium text-[#051912] mb-1">Diaspora sending money to loved ones</h1>
                    </div>
                </div>
                <div className="flex gap-3 text-left place-items-start md:items-center">
                    <img src="/growthbtn.svg" alt="" className="w-13 h-13"/>
                    <div>
                    <h1
                    style={{ fontFamily: "var(--font-funnel-display) !important" }} 
                    className="text-xl font-medium text-[#051912] mb-1">Traders moving funds across borders</h1>
                     </div>
                </div>
                <div className="flex gap-3 text-left place-items-start md:items-center">
                    <img src="/Earnbtn.svg" alt="" className="w-13 h-13"/>
                    <div>
                    <h1
                    style={{ fontFamily: "var(--font-funnel-display) !important" }} 
                    className="text-xl font-medium text-[#051912] mb-1">Stablecoin holders looking to earn passive yield</h1>
                      </div>
                </div>
               
            </div>
            
         </div>




        </div>
    )

};

export default UseCases