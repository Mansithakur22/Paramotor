'use client';

import Image from 'next/image';
import { Button } from '../ui';
import { AnimatePresence, motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="py-8 bg-gray">
      <div className="relative h-[680px] max-w-7xl mx-auto">
        <Image
          src="/images/bannerimg.png"
          width={2000}
          height={2000}
          alt="Banner Image"
          className="z-0 w-full h-full rounded-2xl"
        />
        <div className="absolute pl-20 w-1/2 inset-0 flex flex-col justify-center items-start text-left text-white z-10 rounded-2xl bg-gray/50">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              durat
              className="text-6xl font-bold mb-4"
            >
              Paramotor Prepaid Gift Card
            </motion.div>
          </AnimatePresence>
          <p className="text-lg max-w-md mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button>Know More</Button>
        </div>
      </div>
    </section>
  );
}
