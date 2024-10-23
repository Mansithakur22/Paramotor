"use client";
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui';

export function HeroSection() {
  const [active, setActive] = useState(false);

  return (
    <section>
      <div className="relative w-full h-[500px]">
        <Image
          src="/images/bannerimg.png"
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left text-white z-10 bg-black bg-opacity-50 pl-10 pr-10">
          <h2 className="text-3xl font-bold mb-4">
            Paramotor Prepaid Gift Card
          </h2>
          <p className="text-lg max-w-md mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button
            className={`px-6 py-2 ${
              active
                ? 'bg-white text-black font-semibold hover:text-white'
                : 'bg-gray-500 text-white font-semibold hover:bg-gray-600'
            }`}
            onClick={() => setActive(!active)}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
