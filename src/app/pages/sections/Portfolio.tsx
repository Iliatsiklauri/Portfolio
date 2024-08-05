import ProjectBox from '@/app/components/SingleProject/ProjectBox';
import { portfolioData } from '@/app/data';
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { MutableRefObject, useEffect, useRef } from 'react';

export default function Portfolio({
  PortfolioRef,
}: {
  PortfolioRef: MutableRefObject<HTMLDivElement | null>;
}) {
  const animateRef = useRef(null);
  const isInView = useInView(animateRef, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start({ opacity: 1, x: 0 });
    }
  }, [isInView]);
  return (
    <motion.div
      className="w-full h-screen flex items-center justify-center flex-col md:pt-20 gap-5 md:gap-10 lg:gap-0"
      ref={PortfolioRef}
      variants={{
        visible: { opacity: 1, x: 0 },
      }}
    >
      <h2 className="text-2xl lg:text-4xl font-semibold text-white">
        Projects
      </h2>
      <div className="flex flex-col items-center md:items-start w-full px-5 md:px-10 lg:px-0 lg:gap-0 gap-6">
        {portfolioData.map((el, key) => (
          <ProjectBox
            image={`${el.image}`}
            link={`${el.url}`}
            mainControls={mainControls}
            name={`${el.title}`}
            key={key}
            role={el.role}
            main={el.main}
            top={el.top}
            tools={el.tools}
          />
        ))}
      </div>
      <div ref={animateRef}></div>
    </motion.div>
  );
}
