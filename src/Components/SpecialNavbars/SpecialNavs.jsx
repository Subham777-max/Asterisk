import { useState } from "react";

export function SpecialNav1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[30rem] max-w-full text-white backdrop-blur-md bg-white/10 border border-white/20 rounded-md shadow-lg flex justify-between items-center h-[12vh] p-2 md:p-4 relative">
      <div className="text-2xl font-bold cursor-pointer">GlassyNav</div>

      <ul className="hidden gap-5 text-sm font-semibold md:flex">
        <li className="transition cursor-pointer hover:text-blue-300">Home</li>
        <li className="transition cursor-pointer hover:text-blue-300">About</li>
        <li className="transition cursor-pointer hover:text-blue-300">Service</li>
      </ul>

      <button className="hidden px-3 py-2 text-sm text-white transition rounded-md bg-blue-500/70 backdrop-blur-sm md:block hover:bg-blue-400/70">
        Sign Up
      </button>

      <button
        className="text-2xl md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {isOpen && (
        <div className="absolute top-[12vh] left-0 w-full backdrop-blur-md bg-white/10 border-t border-white/20 rounded-b-md shadow-lg flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <a className="cursor-pointer hover:text-blue-300">Home</a>
          <a className="cursor-pointer hover:text-blue-300">About</a>
          <a className="cursor-pointer hover:text-blue-300">Service</a>
          <button className="px-4 py-2 text-sm text-white rounded-md bg-blue-500/70 backdrop-blur-sm hover:bg-blue-400/70">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}

export function SpecialNav2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[30rem] max-w-full text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-md shadow-lg flex justify-between items-center h-[12vh] p-2 md:p-4 relative">
      <div className="text-2xl font-extrabold tracking-wide cursor-pointer">GlowNav</div>

      <ul className="hidden gap-5 text-sm font-semibold md:flex">
        <li className="cursor-pointer hover:drop-shadow-[0_0_10px_#fff] transition">Home</li>
        <li className="cursor-pointer hover:drop-shadow-[0_0_10px_#fff] transition">About</li>
        <li className="cursor-pointer hover:drop-shadow-[0_0_10px_#fff] transition">Service</li>
      </ul>

      <button className="hidden px-4 py-2 text-sm text-white bg-black/30 border border-white/30 rounded-md md:block hover:bg-white/20 hover:drop-shadow-[0_0_5px_#fff] transition">
        Join Now
      </button>

      <button
        className="text-2xl md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {isOpen && (
        <div className="absolute top-[12vh] left-0 w-full bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 rounded-b-md shadow-lg flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <a className="cursor-pointer hover:drop-shadow-[0_0_10px_#fff]">Home</a>
          <a className="cursor-pointer hover:drop-shadow-[0_0_10px_#fff]">About</a>
          <a className="cursor-pointer hover:drop-shadow-[0_0_10px_#fff]">Service</a>
          <button className="px-4 py-2 text-sm text-white bg-black/30 border border-white/30 rounded-md hover:bg-white/20 hover:drop-shadow-[0_0_5px_#fff]">
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
}

export function SpecialNav3() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[30rem] max-w-full h-[12vh] px-4 flex items-center justify-between rounded-md shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white relative overflow-hidden">
      <div className="text-2xl font-bold tracking-wide cursor-pointer">Aurora</div>

      
      <ul className="hidden gap-4 font-medium md:flex">
        <li className="px-3 py-1 transition rounded-full cursor-pointer hover:bg-white hover:text-indigo-600">
          Home
        </li>
        <li className="px-3 py-1 transition rounded-full cursor-pointer hover:bg-white hover:text-indigo-600">
          Features
        </li>
        <li className="px-3 py-1 transition rounded-full cursor-pointer hover:bg-white hover:text-indigo-600">
          Contact
        </li>
      </ul>

      {/* Desktop Button */}
      <button className="hidden px-4 py-2 font-semibold text-indigo-600 transition bg-white rounded-full md:block hover:bg-indigo-100">
        Join Now
      </button>

      
      <button
        className="text-3xl md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/20 backdrop-blur-md shadow-lg text-white p-6 flex flex-col gap-6 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="self-end text-3xl"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>
        <a className="cursor-pointer hover:text-indigo-200">Home</a>
        <a className="cursor-pointer hover:text-indigo-200">Features</a>
        <a className="cursor-pointer hover:text-indigo-200">Contact</a>
        <button className="px-4 py-2 font-semibold text-indigo-600 transition bg-white rounded-full hover:bg-indigo-100">
          Join Now
        </button>
      </div>
    </nav>
  );
}


export function SpecialNav4() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[30rem] max-w-full text-white bg-[#222] font-mono rounded-md shadow-[0_0_0_3px_#ffcc00] flex justify-between items-center h-[12vh] p-2 md:p-4 relative">
      <div className="text-2xl font-bold tracking-tight cursor-pointer">PixelNav</div>

      <ul className="hidden gap-5 text-sm font-bold uppercase md:flex">
        <li className="cursor-pointer hover:bg-[#ffcc00] hover:text-black px-2 py-1 transition">Home</li>
        <li className="cursor-pointer hover:bg-[#ffcc00] hover:text-black px-2 py-1 transition">About</li>
        <li className="cursor-pointer hover:bg-[#ffcc00] hover:text-black px-2 py-1 transition">Service</li>
      </ul>

      <button className="hidden px-3 py-2 text-sm font-bold text-black bg-[#ffcc00] border-2 border-black rounded-none md:block hover:bg-yellow-400 transition">
        Play
      </button>

      <button
        className="text-2xl md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {isOpen && (
        <div className="absolute top-[12vh] left-0 w-full bg-[#222] rounded-b-md shadow-[0_0_0_3px_#ffcc00] flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <a className="cursor-pointer hover:bg-[#ffcc00] hover:text-black px-2 py-1">Home</a>
          <a className="cursor-pointer hover:bg-[#ffcc00] hover:text-black px-2 py-1">About</a>
          <a className="cursor-pointer hover:bg-[#ffcc00] hover:text-black px-2 py-1">Service</a>
          <button className="px-4 py-2 text-sm font-bold text-black bg-[#ffcc00] border-2 border-black rounded-none hover:bg-yellow-400">
            Play
          </button>
        </div>
      )}
    </nav>
  );
}
