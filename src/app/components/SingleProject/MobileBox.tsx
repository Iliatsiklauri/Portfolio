import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function MobileBox({
  image,
  link,
  name,
}: {
  name: string;
  image: string;
  link: string;
}) {
  return (
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
  );
}
