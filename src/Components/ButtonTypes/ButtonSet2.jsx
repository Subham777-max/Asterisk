const buttonStyles = [
  {
    primary: "bg-[#070709] hover:bg-[#1a1a1a]",
    secondary: "border border-gray-400 text-gray-200 hover:bg-[#1a1a1a]",
  },
  {
    primary: "bg-indigo-600 hover:bg-indigo-700",
    secondary: "border border-indigo-600 text-indigo-600 bg-white hover:bg-indigo-50",
  },
  {
    primary: "bg-emerald-600 hover:bg-emerald-700",
    secondary: "border border-emerald-600 text-emerald-600 bg-white hover:bg-emerald-50",
  },
  {
    primary: "bg-rose-600 hover:bg-rose-700",
    secondary: "border border-rose-600 text-rose-600 bg-white hover:bg-rose-50",
  },
  {
    primary: "bg-orange-600 hover:bg-orange-700",
    secondary: "border border-orange-600 text-orange-600 bg-white hover:bg-orange-50",
  },
];

export const buttonArr2 = buttonStyles.map((style, i) => (
  <div key={i} className="flex gap-4 mb-3">
    <button
      className={`${style.primary} text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-[2px] hover:shadow-xl`}
    >
      Sign Up
    </button>
    <button
      className={`${style.secondary} font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-[2px] hover:shadow-lg`}
    >
      Sign In
    </button>
  </div>
));
