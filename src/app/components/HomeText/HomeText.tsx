import { motion } from 'framer-motion';
import React from 'react';
import DownloadCV from '../DonwloadCV/DownloadCV'; // Corrected typo in "DownloadCV"

export default function HomeText() {
  return (
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 20 }}
      className="flex items-center justify-center flex-col gap-10"
    >
      <h1 className="text-xl lg:text-3xl w-[300px] lg:w-[500px] text-white font-light tracking-wide text-center">
        Hello 👋 <span className="font-semibold">I&apos;m Ilia</span> a skilled
        Full-Stack develope . Let&apos;s collaborate on exciting projects!
      </h1>
      <DownloadCV />
    </motion.div>
  );
}
