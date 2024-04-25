import React, { MutableRefObject } from 'react';

export default function Contact({
  ContactRef,
}: {
  ContactRef: MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="h-screen w-full" ref={ContactRef}>
      Contact
    </div>
  );
}
