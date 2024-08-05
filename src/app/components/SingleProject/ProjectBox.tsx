import { AnimationControls, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MobileBox from './MobileBox';

export default function ProjectBox({
  mainControls,
  image,
  link,
  role,
  name,
  main,
  top,
  tools,
}: {
  mainControls: AnimationControls;
  name: string;
  image: string;
  link: string;
  role: boolean;
  main: boolean;
  top: boolean;
  tools: string[];
}) {
  return (
    <div
      className={`h-[170px] md:h-[220px] w-[340px] md:w-[380px] lg:w-[800px] ${
        role ? 'md:self-end' : ''
      }`}
    >
      <motion.div
        className={`${
          role ? 'flex-row-reverse' : 'flex-row'
        } h-full w-full items-center justify-center gap-5 hidden lg:flex`}
        initial={{ opacity: 0, x: role ? 300 : -300 }}
        animate={mainControls}
        transition={{ type: 'spring', damping: 30 }}
      >
        <motion.div
          className={`relative w-1/2 h-full rounded-xl overflow-hidden`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', damping: 20 }}
        >
          <Image
            alt="project photo"
            src={image}
            style={{ objectFit: 'cover' }}
            fill
          />
          <motion.div
            className="absolute inset-0 bg-opacity-50 flex items-center bg-black
            justify-center text-white text-2xl font-semibold transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 50 }}
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
        <div className="flex items-center justify-center gap-4 w-2/5 h-full p-10">
          <div
            className={`h-full w-full flex ${
              role ? 'justify-end' : 'justify-start'
            } items-center gap-6 flex-wrap rounded text-2xl `}
          >
            {tools.map((el, key) => (
              <Image
                key={key}
                src={`${el}`}
                alt={`${el}`}
                width={55}
                height={55}
              />
            ))}
          </div>
        </div>
      </motion.div>
      <MobileBox image={`${image}`} name={`${name}`} link={`${link}`} />
    </div>
  );
}
