const buttonStyles = [
  {
    primary: "bg-[#070709] hover:bg-[#1a1a1a]",
    secondary: "bg-[#161A20] hover:bg-[#2c2f36]",
  },
  {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-blue-300 text-blue-900 hover:bg-blue-400",
  },
  {
    primary: "bg-green-600 hover:bg-green-700",
    secondary: "bg-green-300 text-green-900 hover:bg-green-400",
  },
  {
    primary: "bg-purple-600 hover:bg-purple-700",
    secondary: "bg-purple-300 text-purple-900 hover:bg-purple-400",
  },
  {
    primary: "bg-pink-600 hover:bg-pink-700",
    secondary: "bg-pink-300 text-pink-900 hover:bg-pink-400",
  },
];


export const buttonArr1 = buttonStyles.map((style, i) => (
  <div key={i} className="flex gap-4 mb-3">
    <button
      className={`${style.primary} text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-[2px] hover:shadow-xl`}
    >
      Primary
    </button>
    <button
      className={`${style.secondary} text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-[2px] hover:shadow-xl`}
    >
      Secondary
    </button>
  </div>
));
