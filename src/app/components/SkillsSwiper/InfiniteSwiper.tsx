import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

export default function InfiniteSwiper() {
  return (
    <Marquee className="" direction="right" speed={100} loop={0} autoFill={true}>
      <div className="flex  items-center justify-between w-full gap-[100px]">
        {/* <div className="w-[60px] h-full"></div> */}
        <Image alt="logo" width={60} height={60} src={'/icons8-git.svg'} />
        <Image alt="logo" width={60} height={60} src={'/icons8-html.svg'} />
        <Image alt="logo" width={60} height={60} src={'/icons8-js.svg'} />
        <Image alt="logo" width={60} height={60} src={'icons8-nextjs.svg'} />
        <Image alt="logo" width={60} height={60} src={'icons8-node-js.svg'} />
        <Image alt="logo" width={60} height={60} src={'/icons8-react-native.svg'} />
        <Image alt="logo" width={60} height={60} src={'/icons8-tailwind-css.svg'} />
        <Image alt="logo" width={60} height={60} src={'/icons8-typescript.svg'} />
        <Image alt="logo" width={60} height={60} src={'/icons8-css.svg'} />
        {/* <div className="w-[60px] h-full"></div> */}
      </div>
    </Marquee>
  );
}
