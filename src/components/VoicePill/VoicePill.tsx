"use client";
import React, { useState, useEffect, useRef } from 'react';
import Container from '../Container';
import { Mic } from 'lucide-react';

export default function VoicePill() {
  const [isListening, setIsListening] = useState(false);
  const [textInput, setTextInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null); // Points cleanly to textarea
  const isWPressedRef = useRef(false);

  // 1. Push-To-Talk: Global 'W' Key Listeners (Stays Hold-To-Talk)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement === textInputRef.current) return;

      if (e.key.toLowerCase() === 'w' && !isWPressedRef.current) {
        e.preventDefault();
        isWPressedRef.current = true;
        setIsListening(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'w') {
        isWPressedRef.current = false;
        setIsListening(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // 2. ChatGPT-Style Auto-Growing Textarea Logic (Max 5 rows)
  useEffect(() => {
    const textarea = textInputRef.current;
    if (textarea && !isListening) {
      textarea.style.height = '24px'; // Base height of 1 text row
      const scrollHeight = textarea.scrollHeight;
      
      // 140px aligns perfectly to roughly 5 text rows with standard leading space
      if (scrollHeight <= 140) {
        textarea.style.height = `${scrollHeight}px`;
        textarea.style.overflowY = 'hidden';
      } else {
        textarea.style.height = '140px';
        textarea.style.overflowY = 'auto'; // Show inner scroll only past 5 lines
      }
    }
  }, [textInput, isListening]);

  const handleMicClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsListening((prev) => !prev);
  };

  const handlePlusClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      console.log("Attached file:", files[0].name);
    }
  };

  return (
    <section className='mt-15 ml-10'>
      <Container>
        {/* Main Voice Module Container */}
        <div className="w-fit relative select-none group/pill">
          
          {/* 4-Color Ambient Blurred Backdrop Glow */}
          <div className={`absolute inset-0 rounded-[120px_35px_120px_35px] bg-gradient-to-r from-blue-400/40 via-purple-400/30 via-pink-400/40 to-amber-300/40 blur-xl transition-all duration-700 ${
            isListening ? 'animate-pulse scale-110 opacity-100' : 'opacity-0 scale-95'
          }`} />
          {/* The Main Long Elliptical Curve Frame (Changed h-[72px] to dynamic min-h-[72px] + transition) */}
          <div className="relative w-[540px] min-h-[72px] p-[1.2px] rounded-[120px_35px_120px_35px] bg-gradient-to-r from-blue-300 via-purple-300 via-pink-300 to-amber-200 transition-all duration-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-6px_rgba(0,0,0,0.08)] flex flex-col justify-center">
            
            {/* Inside Layer (Added py-3 to ensure spacing stays aligned as text scales vertically) */}
            <div className="w-full h-full min-h-[70px] bg-white rounded-[119px_34px_119px_34px] flex items-center justify-between pl-6 pr-4 py-3 box-border">
              
              {/* Left Parameter Section */}
              <div className="flex items-center gap-4 flex-1 min-w-0 h-full">
                
                {/* Plus Icon: File Upload Trigger with Tooltip Box */}
                <div className="relative group/plus flex items-center justify-center flex-shrink-0 self-center">
                  <button 
                    onClick={handlePlusClick}
                    className='w-8 h-8 flex items-center justify-center text-2xl font-light text-neutral-400 hover:text-neutral-700 hover:bg-neutral-50 rounded-full transition-colors duration-200 outline-none pb-1'
                  >
                    +
                  </button>
                  
                  {/* Tooltip Popup Elements */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/plus:opacity-100 bg-neutral-900 text-white text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-md shadow-md transition-opacity duration-200 whitespace-nowrap pointer-events-none z-30">
                    Add Files
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-990" />
                  </div>
                </div>
                {/* Swap Panel Frame Layout */}
                <div className="flex-1 flex items-center min-w-0 h-full">
                  {isListening ? (
                    /* Soundwave layout only */
                    <div className="flex items-center gap-[5px] h-6">
                      {[...Array(15)].map((_, i) => (
                        <div
                          key={i}
                          className="w-[1.7px] bg-gradient-to-t from-blue-500 via-purple-500 to-pink-400 rounded-full animate-[voiceWave_1s_ease-in-out_infinite]"
                          style={{
                            animationDelay: `${i * 0.08}s`,
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    /* ChatGPT Auto-Growing text block */
                    <textarea
                      ref={textInputRef}
                      rows={1}
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      placeholder="Type message or hold W key..."
                      className="w-full bg-transparent text-sm text-neutral-700 placeholder-neutral-400 outline-none font-saira font-light tracking-wide resize-none leading-relaxed scrollbar-none self-center block overflow-hidden py-0.5"
                      style={{ height: '24px' }}
                    />
                  )}
                </div>
              </div>
              {/* Right Side hardware node: Voice toggle on click */}
              <div 
                onClick={handleMicClick}
                className="relative flex items-center justify-center w-12 h-12 flex-shrink-0 cursor-pointer group/mic self-center"
              >
                {/* Radial ripple element expansion parameters */}
                {isListening && (
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-ping scale-75" />
                )}
                
                <div className={`w-11 h-11 border rounded-full shadow-sm flex items-center justify-center z-10 transition-all duration-200 ${
                  isListening 
                    ? 'bg-blue-50/50 border-blue-300 scale-105' 
                    : 'bg-neutral-50 border-neutral-200 group-hover/mic:scale-105 group-hover/mic:bg-white group-hover/mic:border-neutral-300'
                }`}>
                  <Mic 
                    size={16} 
                    strokeWidth={2.5}
                    className={`transition-colors duration-300 ${
                      isListening ? 'text-blue-500' : 'text-neutral-400'
                    }`} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}