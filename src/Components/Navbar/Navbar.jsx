import { SiDocsdotrs } from "react-icons/si";
import { SlDocs } from "react-icons/sl";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [on, seton] = useState(false);
    const navigator = useNavigate();

    return (
        <>
            <nav className="z-50 bg-gradient-to-b from-[#1D232A] via-[#1A1F25] to-[#1A1F25] flex justify-between items-center px-4 sm:px-6 md:px-12 h-[13vh] fixed w-full top-0 left-0 backdrop-blur-md border-b border-gray-700">
                
                {/* Logo */}
                <div
                    onClick={() => navigator("/")}
                    className="flex items-center font-mono text-2xl font-extrabold tracking-widest text-transparent cursor-pointer md:text-4xl lg:text-5xl bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 animate-pulse hover:scale-[1.03] transition-all duration-300"
                >
                    <span className="inline-block animate-floatY">**</span>
                    ASTERISK
                    <span className="inline-block animate-floatY">**</span>
                </div>

                {/* Menu Items */}
                <div className="relative">
                    <ul className="relative flex items-center gap-3 font-mono text-sm font-semibold text-white md:gap-6 md:text-lg">
                        
                        {/* Components Dropdown */}
                        <li
                            className="flex items-center gap-1 transition-all duration-200 cursor-pointer md:gap-2 hover:text-pink-400 hover:scale-105"
                            onClick={() => seton(!on)}
                        >
                            <span className="hidden text-lg md:block"><SiDocsdotrs /></span>
                            <span>Components</span>
                            <span className="text-lg">
                                {on ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </span>
                        </li>

                        {/* Docs Link */}
                        <li
                            className="flex items-center gap-1 transition-all duration-200 cursor-pointer md:gap-2 hover:text-indigo-400 hover:scale-105"
                            onClick={() => navigator("/Docs")}
                        >
                            <span className="hidden text-lg font-bold md:block"><SlDocs /></span>
                            <span>Docs</span>
                        </li>

                        {/* Dropdown Menu */}
                        {on && (
                            <ul className="absolute top-[3.5rem] left-0 md:left-[-1rem] bg-[#1F2630] border border-gray-700 shadow-[0_0_15px_rgba(99,102,241,0.4)] rounded-xl px-6 py-4 flex flex-col gap-3 w-44 z-40 backdrop-blur-md transition-all duration-300">
                                <li
                                    onClick={() => navigator("/Buttons")}
                                    className="transition-all duration-200 cursor-pointer hover:text-pink-400 hover:translate-x-1"
                                >
                                    Buttons
                                </li>
                                <li className="transition-all duration-200 cursor-pointer hover:text-pink-400 hover:translate-x-1">
                                    Navbars
                                </li>
                                <li className="transition-all duration-200 cursor-pointer hover:text-pink-400 hover:translate-x-1">
                                    Cards
                                </li>
                            </ul>
                        )}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
