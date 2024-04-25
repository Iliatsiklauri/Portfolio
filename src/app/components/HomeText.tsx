import { motion } from 'framer-motion';
import React from 'react';
import DownloadCV from './DonwloadCV/DownloadCV';

export default function HomeText() {
  return (
    <motion.div
      initial={{ y: 75, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-center flex-col gap-10"
    >
      <h1 className="text-xl lg:text-3xl w-[300px] lg:w-[500px] text-white font-light tracking-wide text-center">
        Hello 👋, <span className="font-semibold">I'm Ilia ,</span> a skilled frontend
        developer expanding into fullstack. Let's collaborate on exciting projects!
      </h1>
      <DownloadCV />
    </motion.div>
  );
}
