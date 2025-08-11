export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#0F1115]">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-transparent rounded-full border-t-blue-500 border-r-purple-500 animate-spin"></div>
        <div className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg top-1/2 left-1/2 bg-gradient-to-r from-blue-500 to-purple-500 shadow-blue-500/50 animate-pulse"></div>
      </div>
    </div>
  );
}
