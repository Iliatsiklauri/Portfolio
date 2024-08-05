import { AnimationControls, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProjectBox({
  mainControls,
  image,
  link,
  role,
  name,
}: {
  mainControls: AnimationControls;
  name: string;
  image: string;
  link: string;
  role: boolean;
}) {
  return (
    <div className="h-full max-h-[200px] lg:max-w-[1000px] lg:max-h-[1000px] lg:h-[80%] lg:w-2/5 w-[80%] max-w-[400px]">
      <motion.div
        className="relative h-full w-full items-center justify-center gap-5 rounded-xl overflow-hidden hidden lg:flex"
        initial={{ opacity: 0, x: !role ? 300 : -300 }}
        animate={mainControls}
        transition={{ type: 'spring', damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        <Image
          alt="project photo"
          src={image}
          style={{ objectFit: 'cover' }}
          fill
        />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-semibold transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <Link
            className="relative w-full h-full flex items-center justify-center"
            target="_blank"
            href={link}
          >
            {name}
          </Link>
        </motion.div>
      </motion.div>
      <div className="relative h-full w-full items-center justify-center gap-5 rounded-xl overflow-hidden flex lg:hidden">
        <Image
          alt="project photo"
          src={image}
          style={{ objectFit: 'cover' }}
          fill
        />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-semibold transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <Link
            className="relative w-full h-full flex items-center justify-center"
            target="_blank"
            href={link}
          >
            {name}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
