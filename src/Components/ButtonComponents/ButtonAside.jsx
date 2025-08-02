import { ImCross } from "react-icons/im";
function ButtonAside({menue,setMenue,setButtonType}){
    return (
        <>
            <aside className={`h-[100vh] font-mono lg:p-4 transition-all duration-[0.5s] ease ${menue?'w-[30vh] p-4':'w-0'} lg:w-[30vh] bg-[#2A303C] fixed inset-0`}>
                {menue && <>
                    <button onClick={()=>setMenue(false)} className={`text-2xl mt-[14vh] lg:hidden`}><ImCross /></button>
                    <div className="flex flex-col items-center justify-between w-full lg:hidden h-[70vh] ">
                        <ul className="flex flex-col items-center w-full gap-4 mt-4 font-semibold lg:hidden">
                            <li onClick={()=>setButtonType('normal')} className="px-4 py-2 rounded-md transition-all duration-300 cursor-pointer hover:bg-[#3B4451] hover:pl-6">
                                Normal Button
                            </li>
                            <li onClick={()=>setButtonType('glow')} className="px-4 py-2 rounded-md transition-all duration-300 cursor-pointer hover:bg-[#3B4451] hover:pl-6">
                                Glowing Button
                            </li>
                            <li onClick={()=>setButtonType('animate')} className="px-4 py-2 rounded-md transition-all duration-300 cursor-pointer hover:bg-[#3B4451] hover:pl-6">
                                Animated Button
                            </li>
                        </ul>
                        <div className="flex items-center font-mono text-xl font-extrabold tracking-widest text-transparent cursor-pointer bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
                            <span className="inline-block text-transparent animate-floatY bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">**</span>ASTERISK
                            <span className="inline-block text-transparent animate-floatY bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">**</span>
                        </div>
                    </div>
                </>}

                <div className="hidden w-full lg:flex mt-[16vh] h-[70vh] flex-col items-center justify-between">
                    <ul className="flex flex-col items-center w-full gap-4 mt-4 font-semibold">
                        <li onClick={()=>setButtonType('normal')} className="px-4 py-2 rounded-md transition-all duration-300 cursor-pointer hover:bg-[#3B4451] hover:pl-6">
                                Normal Button
                        </li>
                        <li onClick={()=>setButtonType('glow')} className="px-4 py-2 rounded-md transition-all duration-300 cursor-pointer hover:bg-[#3B4451] hover:pl-6">
                                Glowing Button
                        </li>
                        <li onClick={()=>setButtonType('animate')} className="px-4 py-2 rounded-md transition-all duration-300 cursor-pointer hover:bg-[#3B4451] hover:pl-6">
                                Animated Button
                        </li>
                    </ul>
                    <div className="flex items-center font-mono text-xl font-extrabold tracking-widest text-transparent cursor-pointer bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
                        <span className="inline-block text-transparent animate-floatY bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">**</span>ASTERISK
                        <span className="inline-block text-transparent animate-floatY bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">**</span>
                    </div>
                </div>
            </aside>
        </>
    );
}
export default ButtonAside;