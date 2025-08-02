import { SiDocsdotrs } from "react-icons/si";
import { SlDocs } from "react-icons/sl";
import { IoIosArrowUp,IoIosArrowDown  } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar(){
    const [on,seton]=useState(false);
    const navigator=useNavigate();
    return(
        <>
            <nav className="z-10 bg-gradient-to-b from-[#1D232A] via-[#1A1F25] to-[#1A1F25] flex justify-between items-center px-2 sm:px-5 md:p-8 md:px-20 h-[13vh] fixed w-full top-0 left-0 backdrop-blur-md">
                <div onClick={()=>navigator("/")} className="flex items-center font-mono text-2xl font-extrabold tracking-widest text-transparent cursor-pointer md:text-4xl lg:text-5xl bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
                    <span className="inline-block text-transparent animate-floatY bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">**</span>ASTERISK
                    <span className="inline-block text-transparent animate-floatY bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">**</span>
                </div>

                <div>
                    <ul className="relative flex gap-4 font-mono font-semibold transition-all md:gap-7 md:text-xl ease ">
                        <li className="flex items-center gap-2 transition-all cursor-pointer hover:text-gray-400 ease" onClick={()=>seton(!on)}>
                            <span className="hidden md:block"><SiDocsdotrs /></span><span>Components</span><span>{on ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                        </li>
                        <li className="flex items-center gap-2 transition-all cursor-pointer hover:text-gray-400 ease">
                            <span className="hidden font-bold md:block"><SlDocs /></span><span>Docs</span>
                        </li>
                        {on && <ul className="absolute flex flex-col left-0 top-7 bg-gray-900 rounded-lg md:w-[10rem] text-center p-4 gap-4">
                            <li onClick={()=>navigator('/Buttons')} className="transition-all cursor-pointer hover:text-gray-400 ease">Buttons</li>
                            <li className="transition-all cursor-pointer hover:text-gray-400 ease">Navbars</li>
                            <li className="transition-all cursor-pointer hover:text-gray-400 ease">Cards</li>
                        </ul>}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;