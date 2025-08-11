import { useState } from "react";

export function DarkNav1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[30rem] max-w-full text-white bg-[#1E1E1E] rounded-md shadow-md flex justify-between items-center h-[12vh] p-2 md:p-4 relative">
      <div className="text-2xl font-bold">
        <h1 className="cursor-pointer select-none">Logo</h1>
      </div>

      <ul className="hidden gap-5 text-sm font-semibold md:flex">
        <li className="transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4">Home</li>
        <li className="transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4">About</li>
        <li className="transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4">Service</li>
      </ul>

      <button className="hidden px-3 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-md shadow-md bg-gradient-to-r from-blue-500 to-purple-500 md:block hover:from-blue-600 hover:to-purple-600">
        Sign Up / Login
      </button>

      <button
        className="text-2xl md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {isOpen && (
        <div className="absolute top-[12vh] left-0 w-full bg-[#1E1E1E] rounded-b-md shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <a className="transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4">Home</a>
          <a className="transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4">About</a>
          <a className="transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4">Service</a>
          <button className="px-4 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-md shadow-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
            Sign Up / Login
          </button>
        </div>
      )}
    </nav>
  );
}

export function DarkNav2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[30rem] max-w-full text-white bg-[#1E1E1E] rounded-md shadow-md flex justify-between items-center h-[12vh] p-2 md:p-4 relative">
      <div className="text-2xl font-bold">
        <h1 className="cursor-pointer select-none">Logo</h1>
      </div>

      <div className="flex items-center gap-1">
        <ul className="hidden gap-5 text-sm font-semibold md:flex">
          <li className="transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4">Home</li>
          <li className="transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4">About</li>
          <li className="transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4">Service</li>
        </ul>

        <button className="hidden px-3 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-md shadow-md bg-gradient-to-r from-blue-500 to-purple-500 md:block hover:from-blue-600 hover:to-purple-600">
          Sign Up / Login
        </button>
      </div>

      <button
        className="text-2xl md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {isOpen && (
        <div className="absolute top-[12vh] left-0 w-full bg-[#1E1E1E] rounded-b-md shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <a className="transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4">Home</a>
          <a className="transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4">About</a>
          <a className="transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4">Service</a>
          <button className="px-4 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-md shadow-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
            Sign Up / Login
          </button>
        </div>
      )}
    </nav>
  );
}

export function DarkNav3() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[30rem] max-w-full text-white bg-[#1E1E1E] rounded-md shadow-md flex justify-between items-center h-[12vh] p-2 md:p-4 relative">
      <div className="flex items-center gap-2 text-2xl font-bold">
        <h1 className="cursor-pointer select-none">Logo</h1>
        <ul className="hidden gap-5 text-sm font-semibold md:flex">
          <li className="transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4">Home</li>
          <li className="transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4">About</li>
          <li className="transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4">Service</li>
        </ul>
      </div>

      <button className="hidden px-3 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-md shadow-md bg-gradient-to-r from-blue-500 to-purple-500 md:block hover:from-blue-600 hover:to-purple-600">
        Sign Up / Login
      </button>

      <button
        className="text-2xl md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {isOpen && (
        <div className="absolute top-[12vh] left-0 w-full bg-[#1E1E1E] rounded-b-md shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <a className="transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4">Home</a>
          <a className="transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4">About</a>
          <a className="transition-colors duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-4">Service</a>
          <button className="px-4 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-md shadow-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
            Sign Up / Login
          </button>
        </div>
      )}
    </nav>
  );
}
