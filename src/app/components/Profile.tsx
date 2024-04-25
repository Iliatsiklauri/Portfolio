import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export default function Profile() {
  return (
    <motion.div
      className="border-[3px] border-black px-3 rounded-full  overflow-hidden relative bg-white"
      animate={{
        y: [-6, 6, -6],
        x: [-6, 6, -6],
        rotate: [3, 1, -1, 3],
      }}
      transition={{ repeat: Infinity, duration: 4, type: 'tween' }}
    >
      <div className="w-[220px] h-[300px] relative">
        {/* <Image alt="profile" src={'/image00002-removebg.png'} fill /> */}
      </div>
    </motion.div>
  );
}
