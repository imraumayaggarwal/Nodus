"use client";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-neutral-50 selection:bg-neutral-200">
      
      {/* Dynamic Grid/Dot Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1.2px,transparent_1.75px)] [background-size:32px_32px] opacity-85" />

      <div className="z-10 flex flex-col items-center text-center px-4">
        
        {/* Title */}
        <h1 className="bitcount border border-gray-100 text-[150px] md:text-[160px] leading-none tracking-[-0.05em] text-neutral-900 select-none hover:tracking-[-0.02em] mt-10 hover:text-shadow-md hover:border-gray-400 hover:bg-gray-100 px-10 pt-5 hover:rounded-xl transition-all duration-700 ease-out">
          NODUS
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl text-xl md:text-2xl font-light text-neutral-600 tracking-tight leading-relaxed">
          Turn ideas into beautiful, <span className="text-neutral-900 font-normal">connected knowledge graphs</span>.
        </p>

        {/* Micro Tagline */}
        <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
          Think visually. Learn naturally.
        </p>

        {/* Minimalist Glassmorphic Button */}
        <button
          className="
            group
            relative
            mt-12
            mb-3
            px-8
            py-3.5
            text-sm
            font-medium
            tracking-wide
            text-neutral-900
            bg-white/80
            backdrop-blur-md
            border
            border-neutral-200/80
            rounded-2xl
            shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)]
            hover:border-neutral-400
            hover:shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)]
            hover:-translate-y-0.5
            active:scale-98
            transition-all
            duration-300
            ease-out
          "
        >
          <span className="flex items-center gap-2">
            Start Building
            <svg 
              className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all duration-300 ease-out" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>

      </div>

      {/* Reimagined Graph Node Scroll Indicator */}
      <div className="absolute bottom-12 flex flex-col items-center group cursor-pointer">
        
        {/* Node Pulse Effect */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-6 h-6 bg-neutral-900/5 rounded-full animate-ping group-hover:bg-neutral-900/10 duration-1000" />   
          <div className="h-2.5 w-2.5 rounded-full border border-neutral-400 bg-gray-500 group-hover:bg-neutral-900 group-hover:border-neutral-950 transition-all duration-300" />
        </div>

        {/* Connecting Edge (Line) */}
        <div className="mt-2 h-16 w-[1px] bg-gradient-to-b from-neutral-300 via-neutral-200 to-transparent group-hover:from-neutral-900 transition-all duration-500" />
        
      </div>

    </section>
  );
}