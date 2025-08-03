const glowingButtonStyles3 = [
  {
    primary: "bg-orange-600 text-white shadow-[0_0_14px_rgba(234,88,12,0.7)] hover:shadow-[0_0_26px_rgba(234,88,12,1)]",
    secondary: "bg-orange-100 text-orange-900 shadow-[0_0_10px_rgba(255,237,213,0.4)] hover:shadow-[0_0_20px_rgba(255,237,213,0.6)]",
  },
  {
    primary: "bg-teal-700 text-white shadow-[0_0_14px_rgba(15,118,110,0.7)] hover:shadow-[0_0_26px_rgba(15,118,110,1)]",
    secondary: "bg-teal-100 text-teal-900 shadow-[0_0_10px_rgba(204,251,241,0.4)] hover:shadow-[0_0_20px_rgba(204,251,241,0.6)]",
  },
  {
    primary: "bg-yellow-500 text-black shadow-[0_0_14px_rgba(234,179,8,0.6)] hover:shadow-[0_0_26px_rgba(234,179,8,0.95)]",
    secondary: "bg-yellow-100 text-yellow-900 shadow-[0_0_10px_rgba(254,249,195,0.4)] hover:shadow-[0_0_20px_rgba(254,249,195,0.7)]",
  },
  {
    primary: "bg-cyan-600 text-white shadow-[0_0_14px_rgba(8,145,178,0.6)] hover:shadow-[0_0_26px_rgba(8,145,178,0.95)]",
    secondary: "bg-cyan-100 text-cyan-900 shadow-[0_0_10px_rgba(207,250,254,0.4)] hover:shadow-[0_0_20px_rgba(207,250,254,0.7)]",
  },
  {
    primary: "bg-lime-600 text-white shadow-[0_0_14px_rgba(101,163,13,0.6)] hover:shadow-[0_0_26px_rgba(101,163,13,1)]",
    secondary: "bg-lime-100 text-lime-900 shadow-[0_0_10px_rgba(236,252,203,0.4)] hover:shadow-[0_0_20px_rgba(236,252,203,0.7)]",
  },
];
export const buttonArrGlow3 = glowingButtonStyles3.map((style, i) => (
  <div key={i} className="flex gap-4 mb-3">
    <button
      className={`${style.primary} font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-[2px]`}
    >
      Submit
    </button>
    <button
      className={`${style.secondary} font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-[2px]`}
    >
      Reset
    </button>
  </div>
));
