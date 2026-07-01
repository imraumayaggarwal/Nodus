"use client";
import React from 'react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [selected, setSelected] = useState(false);
    const [darkMode, setDarkMode]= useState(false);

    return (
        <nav>
            <div
                onClick={() => setSelected(!selected)} 
                className={`max-w-7xl flex border border-dotted hover:border-solid mt-5 mx-auto px-10 py-5 justify-between items-center shadow-black/10 transition-all duration-400 overflow-hidden hover:shadow-xl ${
                    selected
                        ? "w-44 px-2 py-5 shadow-md rounded-xl"
                        : "w-[550px] px-10 py-5 justify-between shadow-md rounded-3xl"
                    }
                    
                    `}
            >
                <div className='font-semibold select-none text-xl'>Listify</div>
                <div 
                    onClick={(e) => {
                        e.stopPropagation();
                        setDarkMode(!darkMode);
                    }}
                    className={`h-8 w-8 rounded-full transition-all duration-250 border shadow-md shadow-black/30 ${
                    darkMode
                        ? "bg-gray-200 bg-[#F5F5DC]"
                        : "bg-gray-800"  
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