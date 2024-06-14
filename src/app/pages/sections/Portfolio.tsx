'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { MutableRefObject, useEffect, useRef } from 'react';

export default function Portfolio({
  PortfolioRef,
}: {
  PortfolioRef: MutableRefObject<HTMLDivElement | null>;
}) {
  const animateRef = useRef(null);
  const isInView = useInView(animateRef, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start({ opacity: 1, x: 0 });
    }
  }, [isInView]);
  return (
    <motion.div
      className="w-full h-screen  flex items-center justify-center  flex-col pt-[10%] "
      ref={PortfolioRef}
      variants={{
        visible: { opacity: 1, x: 0 },
      }}
    >
      <h2 className="text-4xl font-semibold text-white">Projects</h2>
      <div className="w-full h-full flex-col justify-between gap-20">
        <div className="flex items-center justify-center gap-10 w-full h-1/2">
          <motion.div
            className="h-2/3 w-1/2 bg-white"
            initial={{ opacity: 0, x: -300 }}
            animate={mainControls}
            transition={{ type: 'spring', damping: 20 }}
          ></motion.div>
          <motion.div
            className="h-2/3 w-1/2 bg-white"
            initial={{ opacity: 0, x: 300 }}
            animate={mainControls}
            transition={{ type: 'spring', damping: 20 }}
          ></motion.div>
        </div>
        <div ref={animateRef}></div>
        <div className="flex items-center justify-center gap-10 w-full h-1/2">
          <motion.div
            className="h-2/3 w-1/2 bg-white"
            initial={{ opacity: 0, x: -300 }}
            animate={mainControls}
            transition={{ type: 'spring', damping: 20 }}
          ></motion.div>
          <motion.div
            className="h-2/3 w-1/2 bg-white"
            initial={{ opacity: 0, x: 300 }}
            animate={mainControls}
            transition={{ type: 'spring', damping: 20 }}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
}
