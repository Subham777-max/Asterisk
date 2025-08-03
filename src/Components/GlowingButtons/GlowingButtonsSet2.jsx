const glowingButtonStyles2 = [ 
  {
    primary: "bg-indigo-700 text-white shadow-[0_0_12px_rgba(79,70,229,0.6)] hover:shadow-[0_0_20px_rgba(79,70,229,0.9)]",
    secondary: "bg-indigo-200 text-indigo-900 shadow-[0_0_12px_rgba(199,210,254,0.4)] hover:shadow-[0_0_20px_rgba(199,210,254,0.7)]",
  },
  {
    primary: "bg-rose-600 text-white shadow-[0_0_12px_rgba(225,29,72,0.6)] hover:shadow-[0_0_20px_rgba(225,29,72,0.9)]",
    secondary: "bg-rose-200 text-rose-900 shadow-[0_0_12px_rgba(251,207,232,0.4)] hover:shadow-[0_0_20px_rgba(251,207,232,0.7)]",
  },
  {
    primary: "bg-emerald-600 text-white shadow-[0_0_12px_rgba(5,150,105,0.6)] hover:shadow-[0_0_20px_rgba(5,150,105,0.9)]",
    secondary: "bg-emerald-200 text-emerald-900 shadow-[0_0_12px_rgba(209,250,229,0.4)] hover:shadow-[0_0_20px_rgba(209,250,229,0.7)]",
  },
  {
    primary: "bg-sky-600 text-white shadow-[0_0_12px_rgba(2,132,199,0.6)] hover:shadow-[0_0_20px_rgba(2,132,199,0.9)]",
    secondary: "bg-sky-200 text-sky-900 shadow-[0_0_12px_rgba(186,230,253,0.4)] hover:shadow-[0_0_20px_rgba(186,230,253,0.7)]",
  },
  {
    primary: "bg-fuchsia-700 text-white shadow-[0_0_12px_rgba(162,28,175,0.6)] hover:shadow-[0_0_20px_rgba(162,28,175,0.9)]",
    secondary: "bg-fuchsia-200 text-fuchsia-900 shadow-[0_0_12px_rgba(245,208,254,0.4)] hover:shadow-[0_0_20px_rgba(245,208,254,0.7)]",
  },
];

export const buttonArrGlow2 = glowingButtonStyles2.map((style, i) => (
  <div key={i} className="flex gap-4 mb-3">
    <button
      className={`${style.primary} font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-[2px]`}
    >
      Sign Up
    </button>
    <button
      className={`${style.secondary} font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-[2px]`}
    >
      Sign In
    </button>
  </div>
));
