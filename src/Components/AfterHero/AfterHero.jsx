import { useNavigate } from "react-router-dom";
import CssTypewriter from "./CSStypeWriter";

function AfterHero(){
    const navigate=useNavigate();
    return (
        <>
            <section className="md:h-[70vh] h-[100vh]  w-[100vw] md:p-8 p-4 flex flex-col items-center md:items-start md:text-left md:flex-row gap-6  justify-between font-mono px-4 bg-gradient-to-br from-[#1D232A] via-[#1A1F25] to-[#13171C]">
            <div className="basis-[47%] text-gray-300 text-sm sm:text-base leading-relaxed space-y-5 relative md:top-[10%]">
                <h2 className="text-3xl font-semibold text-white">
                    Build Smarter, Not Harder
                </h2>

                <p>
                    Stop reinventing the wheel. Asterisk gives you clean, ready-made components built with HTML CSS and JS — fast to use, easy to customize.
                </p>

                <ul className="pl-1 space-y-1 text-sm text-gray-400 list-disc list-inside">
                    <li>Plug-and-play code</li>
                    <li>Clean, consistent UI</li>
                    <li>Fully responsive out of the box</li>
                    <li>Dark mode ready</li>
                </ul>

                <p className="text-xs text-gray-400">
                    Just grab what you need — adapt it, remix it, and move on.
                </p>
                <p className="flex-wrap items-center hidden w-full gap-4 sm:flex">
                    Go check our :
                    <span onClick={()=>navigate('/Buttons')} className="px-4 py-2 font-bold text-white transition-all duration-300 bg-red-500 rounded-lg shadow-lg cursor-pointer hover:shadow-red-500/50 animate-glowRed hover:translate-y-[-2px] inline-block">
                        {"</"}Buttons{">"}
                    </span>
                    <span onClick={()=>navigate('/Cards')} className="px-4 py-2 font-bold text-white transition-all hover:translate-y-[-2px] inline-block duration-300 bg-blue-600 rounded-lg shadow-lg cursor-pointer animate-glow hover:shadow-blue-500/50">
                        {"</"}Cards{">"}
                    </span>
                    <span className="px-4 py-2 font-bold text-white transition-all hover:translate-y-[-2px] inline-block duration-300 bg-green-500 rounded-lg shadow-lg cursor-pointer hover:shadow-green-500/50 animate-glowGreen">
                        {"</"}Navbars{">"}
                    </span>
                </p>
            </div>



                <div className="basis-[47%] ">
                    <div className="bg-[#191E24] h-[300px] md:h-[400px] w-[100vw] md:w-full p-2 md:p-4 rounded-3xl">
                        <div className="flex gap-2">
                            <div className="h-[1.23rem] w-[1.23rem] md:h-[2.23rem] md:w-[2.23rem] rounded-[50%] bg-red-500" ></div>
                            <div className="h-[1.23rem] w-[1.23rem] md:h-[2.23rem] md:w-[2.23rem] rounded-[50%] bg-yellow-500" ></div>
                            <div className="h-[1.23rem] w-[1.23rem] md:h-[2.23rem] md:w-[2.23rem] rounded-[50%] bg-green-500" ></div>
                        </div>
                        <div className="mt-5">
                            <CssTypewriter />
                        </div>
                    </div>
                    
                </div>    
                     
            </section>
        </>
    );
}
export default AfterHero;