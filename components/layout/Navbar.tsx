'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menus = [
        "Services",
        "Solutions",
        "Virtual team",
        "Company",
        "About us",
    ];

    return (
        <>
            <nav className="bg-transparent mt-4 sm:mt-6 md:mt-10 absolute top-0 left-0 z-40 w-full px-6 md:px-12 lg:px-16">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center w-full justify-between gap-4">
                        <img
                            src="/images/Intersmart_logo.png"
                            alt="Inter Smart"
                            className="w-36 sm:w-48 md:w-60 h-8 sm:h-10 md:h-11 object-contain"
                        />

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8 lg:gap-10">
                            <ul className="flex items-center gap-6 lg:gap-8">
                                {menus.map((menu) => (
                                    <li key={menu}>
                                        <a
                                            href="#"
                                            className="text-gray-300 text-sm lg:text-base hover:text-white transition-colors duration-200 cursor-pointer"
                                        >
                                            {menu}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#"
                                className="inline-block border border-white text-white text-sm px-6 py-3 rounded-full hover:bg-white hover:text-[#0D1117] transition-colors duration-200 whitespace-nowrap"
                            >
                                Get in touch
                            </a>
                        </div>

                        {/* Mobile Hamburger Button */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="md:hidden text-white p-2 focus:outline-none"
                            aria-label="Open Navigation Menu"
                        >
                            <Menu className="w-7 h-7" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Right Side Drawer Menu */}
            {isOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    {/* Backdrop Blur Overlay */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Drawer Container (Slides from Right) */}
                    <div className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#03010575] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300">
                        {/* Drawer Header */}
                        <div>
                            <div className="flex items-center justify-between pb-6 border-b border-white/10">
                                <img
                                    src="/images/Intersmart_logo.png"
                                    alt="Inter Smart"
                                    className="w-36 h-8 object-contain"
                                />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white p-2 focus:outline-none hover:text-gray-300 transition-colors"
                                    aria-label="Close Menu"
                                >
                                    <X className="w-7 h-7" />
                                </button>
                            </div>

                            {/* Menu Items */}
                            <ul className="flex flex-col gap-6 mt-8">
                                {menus.map((menu) => (
                                    <li key={menu}>
                                        <a
                                            href="#"
                                            onClick={() => setIsOpen(false)}
                                            className="text-gray-200 text-lg font-medium hover:text-white transition-colors duration-200 block"
                                        >
                                            {menu}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Bottom CTA Button */}
                        <div className="pt-6 border-t border-white/10">
                            <a
                                href="#"
                                onClick={() => setIsOpen(false)}
                                className="block text-center border border-white text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-white hover:text-[#0D1117] transition-colors duration-200"
                            >
                                Get in touch
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
