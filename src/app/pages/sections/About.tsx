import Profile from '@/app/components/ProfilePic/Profile';
import { motion } from 'framer-motion';
import React, { MutableRefObject } from 'react';

export default function About({
  AboutRef,
}: {
  AboutRef: MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="h-screen w-full flex items-center justify-between" ref={AboutRef}>
      <motion.div initial={{ y: 75, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Profile />
      </motion.div>
      <div className="w-3/5 flex flex-col items-center justify-center gap-10">
        <h2 className="text-white text-4xl">About Me</h2>
        <div className="flex flex-col text-slate-300 gap-6 text-base font-light text-center">
          <p className="text-xl">
            I&apos;m all about making websites
            <span className="text-white font-medium"> perfect. </span>
            Whether it&apos;s coding or crafting, attention to detail is my thing. I find
            joy in the process of creating something exceptional from scratch.
          </p>

          <p className="text-xl">
            Outside of work, I&apos;m often keeping
            <span className="font-medium text-white"> active </span>
            and staying healthy. I believe in taking on challenges and always looking for
            ways to
            <span className="text-white font-medium"> improve. </span>
            Whether it&apos;s hitting the gym or going for a run, staying fit is essential
            to me.
          </p>

          <p className="text-xl">
            My big dream? To be one of the
            <span className="font-medium text-white"> best web developers </span>
            out there. But for me,
            <span className="text-white font-medium"> honesty </span>
            and
            <span className="text-white font-medium"> responsibility </span>
            come first. I believe in doing what&apos;s right, even when no one is
            watching.
          </p>

          <p className="text-xl">
            Interested in teaming up and creating something amazing together? Let&apos;s
            <span className="text-white font-medium"> collaborate </span>
            and bring our ideas to life!
          </p>
        </div>
      </div>
    </div>
  );
}
