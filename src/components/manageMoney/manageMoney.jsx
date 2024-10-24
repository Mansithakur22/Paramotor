'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui';

/**
 * Renders the manage money section
 */
export function ManageMoney() {
  return (
    <section className="bg-gray py-20 mt-10">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="flex flex-col grow gap-6">
          <h2 className="text-5xl/tight font-bold mb-4">
            Manage your money with Paramotor
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            Auctor urna nunc id cursus metus aliquam eleifend mi. Sit amet risus
            nullam eget. Ut lectus arcu bibendum at. Id interdum velit laoreet
            id donec ultrices tincidunt arcu. Mauris ultrices eros.
            <br />
            Amet nisl purus in mollis nunc sed id. In hac habitasse platea
            dictumst quisque sagittis purus. Blandit cursus risus.
          </p>
          <div>
            <Button>Get Free Demo</Button>
          </div>
        </div>
        <div className="grow w-full flex justify-end">
          <div className="relative w-2/3">
            <Image
              src="/images/mony-rcv.png"
              height={2000}
              width={2000}
              alt="Money Management Image"
              className="object-cover"
            />
            <div className="absolute -left-36 bottom-10 flex gap-5 flex-col items-start">
              <div className="mb-2">
                <Image
                  src="/images/shape-1.png"
                  alt="Shape 1"
                  height={2000}
                  width={2000}
                  className="w-72 animate-wiggle"
                />
              </div>
              <div>
                <Image
                  src="/images/shape-2.png"
                  alt="Shape 2"
                  height={2000}
                  width={2000}
                  className="w-72"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
