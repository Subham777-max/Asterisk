import { useState } from "react";

export function Nav1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[30rem] max-w-full text-black bg-white rounded-md shadow-md flex justify-between items-center h-[12vh] p-2 md:p-4 relative">
      <div className="text-2xl font-bold">
        <h1 className="cursor-pointer select-none">Logo</h1>
      </div>

      
      <ul className="hidden gap-5 text-sm font-semibold md:flex">
        <li className="cursor-pointer hover:text-blue-600">Home</li>
        <li className="cursor-pointer hover:text-blue-600">About</li>
        <li className="cursor-pointer hover:text-blue-600">Service</li>
      </ul>

      
      <button className="hidden px-1 py-2 text-sm text-white bg-blue-500 rounded-md md:block hover:bg-blue-600">
        Sign Up / Login
      </button>

      
      <button
        className="text-2xl md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      
      {isOpen && (
        <div className="absolute top-[12vh] left-0 w-full bg-white rounded-b-md shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <a className="cursor-pointer hover:text-blue-600">Home</a>
          <a className="cursor-pointer hover:text-blue-600">About</a>
          <a className="cursor-pointer hover:text-blue-600">Service</a>
          <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Sign Up / Login
          </button>
        </div>
      )}
    </nav>
  );
}
export function Nav2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[30rem] max-w-full text-black bg-white rounded-md shadow-md flex justify-between items-center h-[12vh] p-2 md:p-4 relative">
      <div className="text-2xl font-bold">
        <h1 className="cursor-pointer select-none">Logo</h1>
      </div>

      
      <div className="flex items-center gap-1">
        <ul className="hidden gap-5 text-sm font-semibold md:flex">
            <li className="cursor-pointer hover:text-blue-600">Home</li>
            <li className="cursor-pointer hover:text-blue-600">About</li>
            <li className="cursor-pointer hover:text-blue-600">Service</li>
        </ul>

        
        <button className="hidden px-1 py-2 text-sm text-white bg-blue-500 rounded-md md:block hover:bg-blue-600">
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
        <div className="absolute top-[12vh] left-0 w-full bg-white rounded-b-md shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <a className="cursor-pointer hover:text-blue-600">Home</a>
          <a className="cursor-pointer hover:text-blue-600">About</a>
          <a className="cursor-pointer hover:text-blue-600">Service</a>
          <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Sign Up / Login
          </button>
        </div>
      )}
    </nav>
  );
}
export function Nav3() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[30rem] max-w-full text-black bg-white rounded-md shadow-md flex justify-between items-center h-[12vh] p-2 md:p-4 relative">
      <div className="flex items-center gap-2 text-2xl font-bold">
        <h1 className="cursor-pointer select-none">Logo</h1>
        <ul className="hidden gap-5 text-sm font-semibold md:flex">
            <li className="cursor-pointer hover:text-blue-600">Home</li>
            <li className="cursor-pointer hover:text-blue-600">About</li>
            <li className="cursor-pointer hover:text-blue-600">Service</li>
        </ul>
      </div>

      
    
        <button className="hidden px-1 py-2 text-sm text-white bg-blue-500 rounded-md md:block hover:bg-blue-600">
            Sign Up / Login
        </button>
      

      
      <button
        className="text-2xl md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      
      {isOpen && (
        <div className="absolute top-[12vh] left-0 w-full bg-white rounded-b-md shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <a className="cursor-pointer hover:text-blue-600">Home</a>
          <a className="cursor-pointer hover:text-blue-600">About</a>
          <a className="cursor-pointer hover:text-blue-600">Service</a>
          <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Sign Up / Login
          </button>
        </div>
      )}
    </nav>
  );
}
