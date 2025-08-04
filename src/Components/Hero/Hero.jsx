import { FaArrowRightLong, FaArrowDownLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigator = useNavigate();

  return (
    <>
      <section className="h-screen  w-screen flex flex-col gap-6 items-center justify-center font-mono px-4 text-center bg-gradient-to-br from-[#1D232A] via-[#1A1F25] to-[#13171C] relative overflow-hidden">

        <h1 className="text-lg font-semibold tracking-wider text-gray-300 sm:text-xl md:text-2xl animate-floatY2">
          Code. Create. Conquer.
        </h1>

        <h1 className="text-2xl font-bold leading-snug tracking-wide sm:text-3xl md:text-4xl lg:text-5xl text-white drop-shadow-[0_3px_15px_rgba(255,255,255,0.05)]">
          Elevate Every Element. Start with Asterisk
        </h1>

        <p className="max-w-2xl px-4 mt-2 text-sm text-gray-400 sm:text-base md:text-lg">
          Welcome to <span className="font-semibold text-white">Asterisk</span> — your playground for clean code, beautiful UI, and boundless ideas. Build faster, smarter, and with style.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button
            onClick={() => navigator("/Buttons")}
            className="bg-[#0D0D0D] group flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg shadow-[0_4px_12px_rgba(255,255,255,0.05)] hover:shadow-[0_6px_18px_rgba(255,255,255,0.1)] hover:translate-y-[-3px] transition duration-300 active:translate-y-[1px] border border-[#2A2F36]"
          >
            <span>Get Started</span>
            <span className="group-hover:translate-x-2 transition-all ease duration-[0.5s]">
              <FaArrowRightLong />
            </span>
          </button>

          <button onClick={() => navigator("/Docs")} className="bg-[#161A20] text-white font-semibold px-6 py-3 rounded-lg border border-[#2A2F36] shadow-inner hover:shadow-[inset_0_0_10px_rgba(255,255,255,0.06)] hover:translate-y-[-3px] transition duration-300 active:translate-y-[1px]">
            Go to Docs
          </button>
        </div>

        <div className="absolute z-10 hidden p-4 md:block bottom-4 right-4">
          <h1 className="text-xl text-white animate-floatY">
            <FaArrowDownLong />
          </h1>
        </div>
      </section>
    </>
  );
}

export default Hero;
