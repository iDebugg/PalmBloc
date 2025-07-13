'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import '../styles/Navbar.css'
import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";


const Footer = () => {

    return (
        <div id="faqs" className=" pt-10 text-center bg-[#051912] text-white">
            <div className="grid gap-5 md:flex md:justify-between px-5 md:px-20 mb-10">
            <div className="grid gap-2 text-left">
                <img src="/Logo.svg" alt="" className="ToroGlogo h-9" />
                <h1 style={{ fontFamily: "var(--font-funnel-display) !important" }} className="font-semibold text-lg">Powering Borderless Finance <br /> Through Tokenized Assets.</h1>
                <h1 style={{ fontFamily: "var(--font-mona-sans) !important" }} >PalmBloc, {new Date().getFullYear()}.</h1>
            </div>
            <div style={{ fontFamily: "var(--font-mona-sans) !important" }} className="text-left gap-3 grid">
                <h1 className="font-semibold">Platform</h1>
                <h1 className="font-medium">Vaults & Yields</h1>
                <h1 className="font-medium">Stablecoin Transfers</h1>
                <h1 className="font-medium">How It Works</h1>
            </div>
            <div style={{ fontFamily: "var(--font-mona-sans) !important" }} className="text-left gap-3 grid">
                <h1 className="font-semibold">Company</h1>
                <h1 className="font-medium">About Us</h1>
                <h1 className="font-medium">Careers</h1>
                <h1 className="font-medium">Blog</h1>
            </div>
            <div style={{ fontFamily: "var(--font-mona-sans) !important" }} className="text-left gap-3 grid">
                <h1 className="font-semibold">Resources</h1>
                <h1 className="font-medium">Documentation</h1>
                <h1 className="font-medium">Whitepapers</h1>
                <h1 className="font-medium">FAQs</h1>
            </div>
            <div style={{ fontFamily: "var(--font-mona-sans) !important" }} className="text-left gap-3 grid">
                <h1 className="font-semibold">Get the App</h1>
                <img src="/android.svg" alt="" />
                <img src="/IOS.svg" alt="" />
            </div>
            </div>

            <div style={{ fontFamily: "var(--font-mona-sans) !important" }} className="bg-[#D4F100] text-[#051912] flex justify-between px-5 md:px-20 py-5">
                <div>
                    <h1>© {new Date().getFullYear()} PalmBloc Inc. All rights reserved.</h1>
                </div>
                <div>
                    <h1>Terms of Service   |   Privacy Policy   |   Cookies
                    </h1>
                    <h1></h1>
                    <h1></h1>
                </div>
            </div>


        </div>
    )

};

export default Footer