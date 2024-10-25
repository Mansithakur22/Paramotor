'use client';

import Image from 'next/image';
import { useRef } from 'react';

export function Marquee({ children }) {

  const marquee= useRef(0);
  return (
    <div className="flex gap-8 overflow-hidden w-full">
      <Image
        width={200}
        height={200}
        src="/images/partnerlogo/logo1.png"
        className="w-48 object-contain"
        alt="logo1"
      />
      <Image
        width={200}
        height={200}
        src="/images/partnerlogo/logo2.png"
        className="w-48 object-contain"
        alt="logo1"
      />
      <Image
        width={200}
        height={200}
        src="/images/partnerlogo/logo3.png"
        className="w-48 object-contain"
        alt="logo1"
      />
      <Image
        width={200}
        height={200}
        src="/images/partnerlogo/logo4.png"
        className="w-48 object-contain"
        alt="logo1"
      />
    </div>
  );
}
