import React, { MutableRefObject } from 'react';
import Profile from '../components/Profile';
import HomeText from './HomeText';
import { motion } from 'framer-motion';

export default function Top({
  HomeRef,
}: {
  HomeRef: MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="h-screen w-full flex items-center justify-around" ref={HomeRef}>
      <HomeText />
      <motion.div initial={{ y: 75, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Profile />
      </motion.div>
    </div>
  );
}
