"use client";
import React from 'react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [selected, setSelected] = useState(false);
    const [darkMode, setDarkMode]= useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 selection:bg-neutral-200">
            <div
                onClick={() => setSelected(!selected)} 
                className={`max-w-7xl flex border border-dotted backdrop-blur-md hover:border-blue-400  mx-auto px-10 py-5 justify-between items-center shadow-black/10 transition-all duration-500 overflow-hidden shadow-md ${
                    selected
                        ? "w-44 px-2 py-5 rounded-xl"
                        : "w-[850px] px-10 py-5 justify-between rounded-3xl"
                    }
                    
                    `}
            >
                <div className='font-semibold select-none text-xl'>
                    Nodus
                </div>
                <div 
                    onClick={(e) => {
                        e.stopPropagation();
                        setDarkMode(!darkMode);
                    }}
                    className={`h-8 w-8 rounded-full transition-all duration-250 border shadow-md shadow-black/30 ${
                    darkMode
                        ? "bg-gray-200 hover:border-blue-500"
                        : "bg-gray-900 hover:border-blue-500"  
                    } ${
                    selected 
                        ? "opacity-0 scale-0" 
                        : "opacity-100 scale-100"
                    }`}
                />
            </div>         
        </nav>

    );
}