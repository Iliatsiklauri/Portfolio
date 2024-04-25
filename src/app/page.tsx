'use client';

import { useRef } from 'react';
import Header from './components/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Top from './pages/Top';
import Contact from './pages/Contact';

export default function Home() {
  const HomeRef = useRef<HTMLDivElement | null>(null);
  const PortfolioRef = useRef<HTMLDivElement | null>(null);
  const AboutRef = useRef<HTMLDivElement | null>(null);
  const ContactRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="App relative flex items-center justify-center flex-col w-full bg-[#CADCFC]">
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
