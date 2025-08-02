const buttonStyles = [
  {
    primary: "bg-[#070709]/90 hover:bg-[#1a1a1a]/90 ring-1 ring-white/10",
    secondary:
      "bg-white/10 text-gray-200 border border-white/20 backdrop-blur-md hover:bg-white/20",
  },
  {
    primary:
      "bg-indigo-600/90 hover:bg-indigo-700/90 ring-1 ring-indigo-300/30",
    secondary:
      "bg-indigo-50/20 text-indigo-700 border border-indigo-300/30 backdrop-blur-md hover:bg-indigo-100/30",
  },
  {
    primary:
      "bg-emerald-600/90 hover:bg-emerald-700/90 ring-1 ring-emerald-300/30",
    secondary:
      "bg-emerald-50/20 text-emerald-700 border border-emerald-300/30 backdrop-blur-md hover:bg-emerald-100/30",
  },
  {
    primary:
      "bg-rose-600/90 hover:bg-rose-700/90 ring-1 ring-rose-300/30",
    secondary:
      "bg-rose-50/20 text-rose-700 border border-rose-300/30 backdrop-blur-md hover:bg-rose-100/30",
  },
  {
    primary:
      "bg-orange-600/90 hover:bg-orange-700/90 ring-1 ring-orange-300/30",
    secondary:
      "bg-orange-50/20 text-orange-700 border border-orange-300/30 backdrop-blur-md hover:bg-orange-100/30",
  },
];

export const buttonArr3 = buttonStyles.map((style, i) => (
  <div key={i} className="flex gap-4 mb-3">
    <button
      className={`${style.primary} text-white font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-[2px] hover:shadow-xl`}
    >
      Submit
    </button>
    <button
      className={`${style.secondary} font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-[2px] hover:shadow-lg`}
    >
      Reset
    </button>
  </div>
));
