'use client';
import React, { useRef } from 'react';
import Top from './sections/Top';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Header from '../components/Header/Header';

export default function Main() {
  const HomeRef = useRef<HTMLDivElement | null>(null);
  const PortfolioRef = useRef<HTMLDivElement | null>(null);
  const AboutRef = useRef<HTMLDivElement | null>(null);
  const ContactRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="flex items-center justify-center flex-col w-full overflow-hidden main xl:px-[10%]">
      <Header
        PortfolioRef={PortfolioRef}
        AboutRef={AboutRef}
        ContactRef={ContactRef}
        HomeRef={HomeRef}
      />
      <Top HomeRef={HomeRef} />
      <About AboutRef={AboutRef} />
      <Portfolio PortfolioRef={PortfolioRef} />
      <Contact ContactRef={ContactRef} />
    </div>
  );
}
