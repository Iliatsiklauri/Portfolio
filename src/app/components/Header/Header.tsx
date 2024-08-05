import { motion } from 'framer-motion';
import React, { MutableRefObject, useEffect, useState } from 'react';

export default function Header({
  PortfolioRef,
  AboutRef,
  ContactRef,
  HomeRef,
}: {
  PortfolioRef: MutableRefObject<HTMLDivElement | null>;
  AboutRef: MutableRefObject<HTMLDivElement | null>;
  ContactRef: MutableRefObject<HTMLDivElement | null>;
  HomeRef: MutableRefObject<HTMLDivElement | null>;
}) {
  const [isHomeInView, setIsHomeInView] = useState(false);
  const [isAboutInView, setIsAboutInView] = useState(false);
  const [isPortfolioInView, setIsPortfolioInView] = useState(false);
  const [isContactInView, setIsContactInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        switch (entry.target) {
          case HomeRef.current:
            setIsHomeInView(entry.isIntersecting);
            break;
          case AboutRef.current:
            setIsAboutInView(entry.isIntersecting);
            break;
          case PortfolioRef.current:
            setIsPortfolioInView(entry.isIntersecting);
            break;
          case ContactRef.current:
            setIsContactInView(entry.isIntersecting);
            break;
          default:
            break;
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (HomeRef.current) {
      observer.observe(HomeRef.current);
    }
    if (AboutRef.current) {
      observer.observe(AboutRef.current);
    }
    if (PortfolioRef.current) {
      observer.observe(PortfolioRef.current);
    }
    if (ContactRef.current) {
      observer.observe(ContactRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [HomeRef, AboutRef, PortfolioRef, ContactRef]);

  return (
    <motion.div
      className="fixed border border-white border-opacity-40 bg-white bg-opacity-70 shadow-lg 
    shadow-black/[0.1] backdrop-blur-[0.5rem] top-6 h-[3.25rem] w-[80%] sm:w-[60%]  lg:w-[50%] xl:w-[40%] rounded-full flex items-center justify-around z-10"
      initial={{ y: 150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 20 }}
    >
      <button
        className={`text-gray-900 ${
          isHomeInView ? 'text-opacity-100 font-medium  ' : 'text-opacity-50'
        } hover:text-opacity-80 cursor-pointer transition text-black font-base`}
        onClick={() =>
          HomeRef.current?.scrollIntoView({
            behavior: 'smooth',
          })
        }
      >
        Home
      </button>
      <button
        className={`text-gray-900 ${
          isAboutInView ? 'text-opacity-100 font-medium ' : 'text-opacity-50'
        } hover:text-opacity-80 cursor-pointer transition text-black font-base`}
        onClick={() =>
          AboutRef.current?.scrollIntoView({
            behavior: 'smooth',
          })
        }
      >
        About
      </button>
      <button
        className={`text-gray-900 ${
          isPortfolioInView
            ? 'text-opacity-100 font-medium '
            : 'text-opacity-50'
        } hover:text-opacity-80 cursor-pointer transition text-black font-base`}
        onClick={() =>
          PortfolioRef.current?.scrollIntoView({
            behavior: 'smooth',
          })
        }
      >
        Portfolio
      </button>
      <button
        className={`text-gray-900 ${
          isContactInView ? 'text-opacity-100 font-medium ' : 'text-opacity-50'
        } hover:text-opacity-80 cursor-pointer transition text-black font-base`}
        onClick={() =>
          ContactRef.current?.scrollIntoView({
            behavior: 'smooth',
          })
        }
      >
        Contact
      </button>
    </motion.div>
  );
}
