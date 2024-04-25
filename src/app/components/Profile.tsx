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
      <div className="w-[170px] lg:w-[220px] h-[200px] lg:h-[270px] relative">
        {/* <Image alt="profile" src={'/ProfilePic/image00002-removebg.png'} fill /> */}
      </div>
    </motion.div>
  );
}
