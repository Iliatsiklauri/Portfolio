'use client';
import { motion, useInView } from 'framer-motion';
import React, { MutableRefObject, useEffect, useRef } from 'react';

export default function Portfolio({
  PortfolioRef,
}: {
  PortfolioRef: MutableRefObject<HTMLDivElement | null>;
}) {
  const blackRed = useRef(null);
  const isInView = useInView(blackRed, { once: true });
  useEffect(() => {
    console.log(isInView);
  }, [isInView]);
  return (
    <motion.div
      className="w-full h-screen bg-red-500 flex items-center justify-around overflow-hidden"
      ref={PortfolioRef}
    >
      <motion.div
        ref={blackRed}
        className="w-1/4 h-1/2 border-[1px] border-black"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -200 }}
        transition={{ type: 'spring', damping: 20 }}
      >
        <p className="font-bold text-3xl text-center">
          dsdgsjkdgkgsdngdk gdsjngdskgdsj kjsgdbdgs kjbngsdk gsdkgsdkjsgdkgsdjbdsg
        </p>
      </motion.div>
      <motion.div
        ref={blackRed}
        className="w-1/4 h-1/2 border-[1px] border-black"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 200 }}
        transition={{ type: 'spring', damping: 20 }}
      ></motion.div>
    </motion.div>
  );
}
