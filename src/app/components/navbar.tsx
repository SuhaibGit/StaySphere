"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react'; // Added useEffect
import { Inter } from "next/font/google";
import { TbWorld } from "react-icons/tb";
import { BiMessageDetail } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import Sidebar from "./sidebar";

const inter = Inter({ subsets: ['latin'] });

const Navbar1 = () => {
    const [showNav, setShowNav] = useState(false);

    // Disable body scroll when sidebar is open
    useEffect(() => {
        if (showNav) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling
        }

        // Cleanup function to re-enable scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showNav]);

    const navItems = [
        { name: "English", icons: <TbWorld className='text-xl' />, link: "/products" },
        { name: "List your property", link: "/products" },
        { name: "Support", link: "/products" },
        { name: "Trips", link: "/products" },
        { icons: <BiMessageDetail className='text-2xl' />, link: "/products" },
        { name: "Sign In", link: "/products" },
    ];

    return (
        <>
            {/* Navbar */}
            <div className='h-[60px] bg-white text-blue-900 flex border border-b-[#696e728f] relative z-50'>
                {/* Logo Section */}
                <div className='flex items-center w-full md:w-[35%] md:justify-center'>
                    <h1 className='font-extrabold text-[24px] md:text-[28px] text-black tracking-widest pl-4'>
                        <span className="text-[#f7451dfe]">S</span>taySphere
                    </h1>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center w-[65%] justify-end pr-40'>
                    <ul className='flex gap-6 lg:gap-12 text-[#f7451dfe]'>
                        {navItems.map((item, i) => (
                            <li key={i} className='flex hover:text-black text-[14px] lg:text-[15px]'>
                                <Link href={item.link} className='flex items-center gap-2'>
                                    {item.icons}
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Navigation */}
                <div className='flex md:hidden items-center pr-4'>
                    <IoMenu onClick={() => setShowNav(!showNav)} className="cursor-pointer text-2xl text-[#f7451fde]" />
                </div>
            </div>

            {/* Sidebar */}
            <Sidebar show={showNav} onClose={() => setShowNav(false)} />
        </>
    );
};

export default Navbar1;