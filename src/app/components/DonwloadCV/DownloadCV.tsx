import Image from 'next/image';
import React from 'react';

export default function DownloadCV() {
  return (
    <a
      className="py-4 px-8  rounded-[30px] donwload flex items-center justify-center gap-2"
      href="/CV.pdf"
      download
    >
      <Image alt="donwload" src={'/download.png'} height={20} width={20} />
      <p className="text-black text-opacity-40">download my cv</p>
    </a>
  );
}
