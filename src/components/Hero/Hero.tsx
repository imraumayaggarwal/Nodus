"use client";
import Container from "../Container";

export default function Hero() {
  return (
    <section 
      id="hero"
      className="relative min-h-screen w-full pt-32 overflow-hidden bg-background selection:bg-neutral-200"
    >
      <Container className="relative flex flex-col items-center text-center px-6">
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div style={{animationDelay: '-2s'}} className="absolute h-[180px] w-[380px] rounded-full bg-[#f8d7da] nodus-blob-pulse -translate-x-[500px] -translate-y-[100px]" />
          <div style={{animationDelay: '-5s'}} className="absolute h-[90px] w-[220px] rounded-full bg-[#e2d5f8] nodus-blob-pulse translate-x-[180px] -translate-y-[150px]" />
          <div style={{animationDelay: '-7s'}} className="absolute h-[350px] w-[350px] rounded-full bg-[#f5d9ea] nodus-blob-pulse translate-x-[550px] -translate-y-[50px]" />
          <div style={{animationDelay: '-9s'}} className="absolute h-[220px] w-[220px] rounded-sm bg-[#bcd6fb] nodus-blob-pulse -translate-x-[250px] translate-y-[220px]" />
          <div style={{animationDelay: '-11s'}} className="absolute h-[100px] w-[220px] rounded-full bg-[#fae5c8] nodus-blob-pulse translate-x-[250px] translate-y-[280px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="font-bitcount border border-gray-300 text-6xl sm:text-8xl md:text-[120px] lg:text-[150px] xl:text-[160px] leading-none tracking-[-0.05em] text-neutral-700 select-none hover:tracking-[-0.02em] hover:text-shadow-md hover:border-gray-400 hover:text-black/80 px-6 py-4 md:px-10 md:pt-5 hover:rounded-xl transition-all duration-700 ease-out">
            NODUS
          </h1>

          <p className="font-saira mt-6 max-w-xl text-lg sm:text-2xl md:text-3xl font-light text-neutral-600 tracking-tight leading-relaxed">
            Every topic, <span className="text-neutral-900 font-normal">starts with one node.</span>
          </p>

          <p className="font-saira mt-4 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            Think visually. Learn naturally.
          </p>

          <button
            className="
              group
              relative
              mt-10 md:mt-12
              mb-3
              px-8
              py-3.5
              text-sm
              font-medium
              tracking-wide
              text-neutral-900
              bg-blue-200/20
              backdrop-blur-md
              border
              border-dashed
              border-neutral-500
              rounded-2xl
              shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)]
              hover:border-black
              hover:shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)]
              hover:-translate-y-1
              hover:bg-blue-400/20
              active:scale-[0.98]
              transition-all
              duration-300
              ease-out
            "
          >
            <span className="flex items-center gap-2">
              Ask Now
            </span>
          </button>
        </div>

      </Container>
    </section>
  );
}