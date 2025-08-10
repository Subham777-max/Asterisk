import { useState } from "react";

export function GlowCard1(){
    const [isInspired,setIsInspired]=useState(false);
    function handleClick(){
        setIsInspired(true);
        setTimeout(()=>{
            setIsInspired(false);
        },3000);
    }
    return(
        <>
            <div
                className={`w-[16rem] h-[18rem] flex flex-col items-center justify-center text-white text-center text-sm font-medium rounded-xl 
                border 
                px-4 py-6 gap-4 transition-all duration-300 
                ${
                    isInspired
                        ? "bg-red-700 border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.7)]"
                        : "bg-transparent border-[#6D28D9] hover:bg-[#6D28D9] shadow-[0_0_20px_rgba(109,40,217,0.4)] hover:shadow-[0_0_40px_rgba(109,40,217,0.9)]"
                }`}
            >
                <h2
                    className={`text-lg font-bold ${
                        isInspired ? "text-red-100" : "text-purple-200"
                    }`}
                >
                    {isInspired ? "🔥 Awakened 🔥" : '"Hover to Awaken"'}
                </h2>

                <p className={isInspired ? "text-red-200" : "text-purple-300"}>
                    {isInspired
                        ? "Believe in yourself so fiercely that even doubt surrenders."
                        : "The future belongs to those who dare to imagine the impossible — and build it anyway."}
                </p>

                <button
                    onClick={handleClick}
                    className={`mt-2 px-4 py-1 rounded-full text-xs font-bold shadow transition duration-200 ${
                        isInspired
                            ? "bg-white text-red-600 hover:brightness-110"
                            : "bg-white text-[#6D28D9] hover:brightness-110"
                    }`}
                >
                    Inspire Me
                </button>
            </div>

        </>
    );
}

export function GlowCard2() {
  return (
        <div className="relative w-[18rem] h-[20rem] flex items-center justify-center overflow-hidden rounded-md">

            <div className="absolute  w-[30rem]  rounded-xl overflow-hidden p-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-spin-slow z-0">
                <div className="w-[100rem] h-[100rem]"></div>
            </div>

            
            <div className="relative z-10 w-[calc(100%-6px)] h-[calc(100%-6px)] flex flex-col items-center justify-center gap-4 px-4 py-6 text-center text-white bg-gray-900 rounded-lg">
                <h2 className="text-lg font-bold">Magic In Border</h2>
                <p className="text-sm text-gray-300">
                    You may have tried to made it now here it is.
                </p>
            </div>
        </div>
  );
}

export function GlowCard3(){
    return (
        <>
            
                <div class="flex items-center justify-center flex-col text-center relative p-6 rounded-xl bg-white/10 backdrop-blur-md border w-[18rem] h-[20rem] border-white/20 text-white transition-all duration-500 hover:shadow-[0_0_30px_5px] hover:shadow-[rgba(109,40,217,0.5)]">
                    <h2 class="text-xl font-semibold mb-2">Glassy Card</h2>
                    <p class="text-sm opacity-80">This is a modern glassy card with a glowing gradient shadow on hover.</p>
                </div>
            
        </> 
    )
}
