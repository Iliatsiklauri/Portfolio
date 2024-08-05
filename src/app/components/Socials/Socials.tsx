import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Socials() {
  return (
    <div className="w-[70%] flex items-center justify-between max-w-[400px]">
      <Link
        href={'https://www.facebook.com/ilia.tsiklauri.54/'}
        target="_blank"
      >
        <Image
          alt="facebook"
          src={'/icons/facebook.png'}
          width={40}
          height={40}
        />
      </Link>
      <Link href={'https://www.instagram.com/ilia_tsiklauri/'} target="_blank">
        <Image
          alt="instagram"
          src={'/icons/instagram.png'}
          width={40}
          height={40}
        />
      </Link>
      <Link href={'https://github.com/Iliatsiklauri'} target="_blank">
        <Image alt="github" src={'/icons/github.png'} width={40} height={40} />
      </Link>
      <Link
        href={'https://www.linkedin.com/in/ilia-tsiklauri-7005962a1/'}
        target="_blank"
      >
        <Image
          alt="linkenIn"
          src={'/icons/linkedin.png'}
          width={40}
          height={40}
        />
      </Link>
    </div>
  );
}
