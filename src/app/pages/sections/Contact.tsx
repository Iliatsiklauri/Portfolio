import Socials from '@/app/components/Socials/Socials';
import Image from 'next/image';
import React, { MutableRefObject } from 'react';

export default function Contact({
  ContactRef,
}: {
  ContactRef: MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      className="h-screen w-full flex items-center justify-center gap-40 lg:gap-0 lg:justify-between flex-col lg:py-40"
      ref={ContactRef}
    >
      <div className="flex gap-20 flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-10">
          <Image
            alt="phone number"
            src={'/icons/phone-call (1).png'}
            width={40}
            height={40}
            className="s"
          />
          <p className="lg:text-xl text-white font-medium">+995 592 999 801</p>
        </div>
        <div className="flex items-center justify-center gap-10">
          <Image alt="mail" src={'/icons/gmail.png'} width={40} height={40} />
          <p className="text-white lg:text-xl">Tsiklauri.ilia26@gmail.com</p>
        </div>
      </div>
      <Socials />
    </div>
  );
}
