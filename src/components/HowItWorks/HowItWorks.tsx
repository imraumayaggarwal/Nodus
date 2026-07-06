"use client";
import React, { useState, useEffect, useRef } from 'react';
import Container from '../Container';
import VoicePill from '../VoicePill/VoicePill';

export default function HowItWorks() {
  return (
    <section className='mt-15 ml-10'>
      <Container>
        {/* Header Block */}
        <span className='text-xs uppercase tracking-[0.2em] text-neutral-400'>THE WORKFLOW</span>
        <div className='w-fit group text-5xl font-saira font-medium select-none'>
          <span>How does it </span> 
          <span className='group-hover:text-blue-400 text-neutral-600/70 duration-300'>work?</span>
        </div>

        {/* Step Container */}
        <div className='mt-2 w-fit flex flex-col'>
          <div className='flex justify-start'>
            <VoicePill />
          </div>
        </div>
      </Container>
    </section>
  );
}