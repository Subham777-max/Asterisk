import { FaArrowRightLong,FaArrowDownLong  } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
function Hero(){
    const navigator=useNavigate();
    return (
        <>

            <section className="h-[100vh] w-[100vw] flex flex-col gap-6 items-center justify-center font-mono px-4 text-center bg-gradient-to-br from-[#1D232A] via-[#1A1F25] to-[#13171C]">
                <h1 className="text-lg font-semibold tracking-wider sm:text-xl md:text-2xl animate-floatY2">
                    Code. Create. Conquer.
                </h1>

                <h1 className="text-2xl font-bold leading-snug tracking-wide sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-md">
                    Elevate Every Element. Start with Asterisk
                </h1>

                <p className="max-w-2xl px-4 mt-2 text-sm text-gray-400 sm:text-base md:text-lg">
                    Welcome to <span className="font-semibold text-white">Asterisk</span> — your playground for clean code, beautiful UI, and boundless ideas. Build faster, smarter, and with style.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <button onClick={()=>navigator('/Buttons')} className="bg-[#070709] group flex items-center gap-2  text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:translate-y-[-2px] hover:shadow-xl transition duration-300 active:translate-y-[1px]">
                        <span>Get Started</span> <span className="group-hover:translate-x-2 transition-all ease duration-[0.5s]"><FaArrowRightLong /></span>
                    </button>
                    <button className="bg-[#161A20] text-white font-semibold px-6 py-3 rounded-md shadow-inner hover:shadow-md hover:translate-y-[-2px] border border-black transition duration-300 active:translate-y-[1px]">
                        Go to Docs 
                    </button>
                </div>

                <div className="absolute z-10 hidden p-4 md:block bottom-4 right-4">
                    <h1 className="text-xl text-white animate-floatY2"><FaArrowDownLong /></h1>
                </div>

            </section>



        </>
    );
}
export default Hero;