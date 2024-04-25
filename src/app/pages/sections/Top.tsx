import React, { MutableRefObject } from 'react';
import HomeText from '../../components/HomeText';
import { motion } from 'framer-motion';
import Profile from '@/app/components/Profile';

export default function Top({
  HomeRef,
}: {
  HomeRef: MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      className="Top h-screen w-full flex items-center justify-center md:justify-around  flex-col md:flex-row relative"
      ref={HomeRef}
    >
      <HomeText />
    </div>
  );
}
