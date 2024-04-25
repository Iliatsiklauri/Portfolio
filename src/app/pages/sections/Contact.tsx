import React, { MutableRefObject } from 'react';

export default function Contact({
  ContactRef,
}: {
  ContactRef: MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="h-screen w-full flex items-center justify-center" ref={ContactRef}>
      <h2 className="text-white text-4xl">Contact</h2>
    </div>
  );
}
