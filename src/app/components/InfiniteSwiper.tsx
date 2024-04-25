import React from 'react';
import Marquee from 'react-fast-marquee';

export default function InfiniteSwiper() {
  return (
    <Marquee
      className="absolute bottom-0"
      direction="right"
      speed={400}
      loop={0}
      pauseOnHover={true}
    >
      <div className="flex  items-center justify-between w-full gap-[10%]">
        <img src="/css-3.png" alt="" className="w-[80px]" />
        <img src="/git.png" alt="" className="w-[80px]" />
        <img src="/html.png" alt="" className="w-[80px]" />
        <img src="/js.png" alt="" className="w-[80px]" />
        <img src="/physics.png" alt="" className="w-[80px]" />
        <img src="/typescript.png" alt="" className="w-[80px]" />
        <img src="/typescript.png" alt="" className="w-[80px]" />
        <img src="/typescript.png" alt="" className="w-[80px]" />
        <img src="/typescript.png" alt="" className="w-[80px]" />
        <img src="/typescript.png" alt="" className="w-[80px]" />
        <img src="/typescript.png" alt="" className="w-[80px]" />
        <img src="/typescript.png" alt="" className="w-[80px]" />
      </div>
    </Marquee>
  );
}
