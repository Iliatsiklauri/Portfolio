'use client';
import { motion } from 'framer-motion';
import React, { MutableRefObject } from 'react';

export default function Portfolio({
  PortfolioRef,
}: {
  PortfolioRef: MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <motion.div
      className="w-full h-screen  flex items-center justify-center overflow-hidden flex-col gap-20"
      ref={PortfolioRef}
    >
      <h2 className="text-4xl font-semibold text-white">Projects</h2>
      <div></div>
    </motion.div>
  );
}
