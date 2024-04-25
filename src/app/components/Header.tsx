'use client';
import { motion } from 'framer-motion';
import React, { MutableRefObject } from 'react';
export default function Header({
  PortfolioRef,
  AboutRef,
  ContactRef,
  HomeRef,
}: {
  PortfolioRef: MutableRefObject<HTMLDivElement | null>;
  AboutRef: MutableRefObject<HTMLDivElement | null>;
  ContactRef: MutableRefObject<HTMLDivElement | null>;
  HomeRef: MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <motion.div
      className="fixed border border-white border-opacity-40 bg-white bg-opacity-75 shadow-lg 
    shadow-black/[0.1] backdrop-blur-[0.5rem] top-6 h-[3.25rem] w-[36rem] rounded-full flex items-center justify-around z-10"
      initial={{ y: 75, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <button
        className="text-gray-900 text-opacity-50 hover:text-opacity-80 cursor-pointer transition"
        onClick={() =>
          HomeRef.current?.scrollIntoView({
            behavior: 'smooth',
          })
        }
      >
        Home
      </button>
      <a
        className="text-gray-900 text-opacity-50 hover:text-opacity-80 cursor-pointer transition"
        onClick={() =>
          AboutRef.current?.scrollIntoView({
            behavior: 'smooth',
          })
        }
      >
        About
      </a>
      <a
        className="text-gray-900 text-opacity-50 hover:text-opacity-80 cursor-pointer transition"
        onClick={() =>
          PortfolioRef.current?.scrollIntoView({
            behavior: 'smooth',
          })
        }
      >
        Portfolio
      </a>
      <a
        className="text-gray-900 text-opacity-50 hover:text-opacity-80 cursor-pointer transition"
        onClick={() =>
          ContactRef.current?.scrollIntoView({
            behavior: 'smooth',
          })
        }
      >
        Contact
      </a>
    </motion.div>
  );
}
