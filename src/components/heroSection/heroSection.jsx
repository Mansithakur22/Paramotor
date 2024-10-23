'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui';

export function HeroSection() {
  const [active, setActive] = useState(false);

  return (
    <section>
      <div className="relative h-[680px] py-8">
        <Image
          src="/images/bannerimg.png"
          width={2000}
          height={2000}
          alt="Banner Image"
          objectFit="cover"
          className="z-0 w-full h-full rounded-2xl"
        />
        <div className="absolute pl-20 w-1/2 inset-0 flex flex-col justify-center items-start text-left text-white z-10 rounded-2xl bg-gray/50">
          <h2 className="text-6xl font-bold mb-4">
            Paramotor Prepaid Gift Card
          </h2>
          <p className="text-lg max-w-md mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button
            className={`${
              active
                ? 'bg-white text-black font-semibold hover:text-white'
                : 'bg-gray-500 text-white font-semibold hover:bg-gray-600'
            }`}
            onClick={() => setActive(!active)}
          >
           Know More
          </Button>
        </div>
      </div>
    </section>
  );
}
