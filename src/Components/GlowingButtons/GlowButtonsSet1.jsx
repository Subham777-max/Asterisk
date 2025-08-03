const glowingButtonStyles = [
  {
    primary: "bg-red-700 text-white shadow-[0_0_10px_rgba(185,28,28,0.6)] hover:shadow-[0_0_18px_rgba(185,28,28,0.9)]",
    secondary: "bg-red-200 text-red-900 shadow-[0_0_10px_rgba(254,202,202,0.4)] hover:shadow-[0_0_18px_rgba(254,202,202,0.7)]",
  },
  {
    primary: "bg-orange-600 text-white shadow-[0_0_10px_rgba(234,88,12,0.6)] hover:shadow-[0_0_18px_rgba(234,88,12,0.9)]",
    secondary: "bg-orange-200 text-orange-900 shadow-[0_0_10px_rgba(254,215,170,0.4)] hover:shadow-[0_0_18px_rgba(254,215,170,0.7)]",
  },
  {
    primary: "bg-yellow-500 text-black shadow-[0_0_10px_rgba(234,179,8,0.6)] hover:shadow-[0_0_18px_rgba(234,179,8,0.9)]",
    secondary: "bg-yellow-100 text-yellow-900 shadow-[0_0_10px_rgba(254,243,199,0.4)] hover:shadow-[0_0_18px_rgba(254,243,199,0.7)]",
  },
  {
    primary: "bg-teal-600 text-white shadow-[0_0_10px_rgba(13,148,136,0.6)] hover:shadow-[0_0_18px_rgba(13,148,136,0.9)]",
    secondary: "bg-teal-200 text-teal-900 shadow-[0_0_10px_rgba(153,246,228,0.4)] hover:shadow-[0_0_18px_rgba(153,246,228,0.7)]",
  },
  {
    primary: "bg-amber-700 text-white shadow-[0_0_10px_rgba(180,83,9,0.6)] hover:shadow-[0_0_18px_rgba(180,83,9,0.9)]",
    secondary: "bg-amber-200 text-amber-900 shadow-[0_0_10px_rgba(254,243,199,0.4)] hover:shadow-[0_0_18px_rgba(254,243,199,0.7)]",
  },
];


export const buttonArrGlow1 = glowingButtonStyles.map((style, i) => (
  <div key={i} className="flex gap-4 mb-3">
    <button
      className={`${style.primary} font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-[2px]`}
    >
      Primary
    </button>
    <button
      className={`${style.secondary} font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-[2px]`}
    >
      Secondary
    </button>
  </div>
));
