"use client";
import React from 'react';
import { useState } from 'react';
import Container from '../Container';

export default function Navbar() {
    const [selected, setSelected] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 selection:bg-neutral-200">

            <Container className="flex justify-center pointer-events-auto"> 
                <div
                    onClick={() => setSelected(!selected)} 
                    className={`flex border border-dotted bg-white/50 backdrop-blur-md hover:border-blue-400 mx-auto px-10 py-5 justify-between items-center transition-all duration-500 overflow-hidden shadow-md shadow-black/10 whitespace-nowrap ${
                        selected
                            ? "w-44 px-4 py-5 rounded-xl"
                            : "w-[850px] px-10 py-5 justify-between rounded-3xl"
                    }`}
                >
                    <a  
                        href='/'
                        onClick={(e) => e.stopPropagation()}
                        className='font-bitcount font-semibold select-none text-xl tracking-[0.9] shrink-0'
                    >
                        Nodus
                    </a>
                    
                    <div 
                        onClick={(e) => e.stopPropagation()}
                        className={`flex items-center gap-7 transition-all duration-300 ${
                            selected 
                                ? "opacity-0 scale-0 pointer-events-none" 
                                : "opacity-100 scale-100"
                        }`}
                    >
                        <a href="/login" className="text-sm font-semibold px-3 py-1 border rounded-md text-neutral-600 hover:bg-neutral-100 transition duration-200 cursor-pointer">
                            Log In
                        </a>
                        <a href="/signup" className="text-sm font-semibold px-3 py-1 border text-white rounded-md bg-neutral-800 hover:bg-neutral-700 transition duration-200">
                            Sign Up
                        </a>
                    </div>
                    
                    <div 
                        onClick={(e) => {
                            e.stopPropagation();
                            setDarkMode(!darkMode);
                        }}
                        className={`h-8 w-8 rounded-full transition-all duration-250 border shadow-md shadow-black/30 cursor-pointer ${
                            darkMode ? "bg-gray-200" : "bg-gray-900"  
                        } hover:border-blue-500 ${
                            selected ? "opacity-0 scale-0 w-0 h-0 pointer-events-none" : "opacity-100 scale-100"
                        }`}
                    />
                </div>         
            </Container>
        </nav>
    );
}