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
  const firstRowData = portfolioData.slice(0, 2);
  const secondRowData = portfolioData.slice(2);
  useEffect(() => {
    if (isInView) {
      mainControls.start({ opacity: 1, x: 0 });
    }
  }, [isInView]);
  return (
    <motion.div
      className="w-full h-screen flex items-center justify-center  flex-col gap-10 lg:gap-0 pt-[10%]"
      ref={PortfolioRef}
      variants={{
        visible: { opacity: 1, x: 0 },
      }}
    >
      <h2 className="text-4xl font-semibold text-white">Projects</h2>
      <div className="w-full h-full flex-col justify-between gap-20">
        <div className="flex items-center justify-between gap-10 w-full h-1/2 flex-col lg:flex-row">
          {firstRowData.map((el, key) => (
            <ProjectBox
              image={`${el.image}`}
              link={`${el.url}`}
              mainControls={mainControls}
              name={`${el.title}`}
              key={key}
              role={el.role}
            />
          ))}
        </div>
        <div ref={animateRef}></div>
        {/* <div className="flex items-center justify-between  w-full h-1/2">
          {secondRowData.map((el, key) => (
            <ProjectBox
              image={`${el.image}`}
              link={`${el.url}`}
              mainControls={mainControls}
              name={`${el.title}`}
              key={key}
              role={el.role}
            />
          ))}
        </div> */}
      </div>
    </motion.div>
  );
}
