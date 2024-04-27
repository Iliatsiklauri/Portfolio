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
        <div className="flex flex-col text-white gap-2 text-base font-light text-center">
          <p>
            I&apos;m all about making websites perfect. Whether it&apos;s coding or
            crafting, attention to detail is my thing. I find joy in the process of
            creating something exceptional from scratch.
          </p>

          <p>
            Outside of work, I&apos;m often keeping active and staying healthy. I believe
            in taking on challenges and always looking for ways to improve. Whether
            it&apos;s hitting the gym or going for a run, staying fit is essential to me.
          </p>

          <p>
            My big dream? To be one of the best web developers out there. But for me,
            honesty and responsibility come first. I believe in doing what&apos;s right,
            even when no one is watching.
          </p>

          <p>
            Interested in teaming up and creating something amazing together? Let&apos;s
            collaborate and bring our ideas to life!
          </p>
        </div>
      </div>
    </div>
  );
}
