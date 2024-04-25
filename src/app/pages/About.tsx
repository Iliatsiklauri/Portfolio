import React, { MutableRefObject } from 'react';

export default function About({
  AboutRef,
}: {
  AboutRef: MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="h-screen bg-black w-full" ref={AboutRef}>
      About
    </div>
  );
}
