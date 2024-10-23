'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui';

/**
 * Renders the manage money section
 */
export function ManageMoney() {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">
          Manage your money with Paramotor
        </h2>
        <p className="text-gray-700 mb-4">
          Auctor urna nunc id cursus metus aliquam eleifend mi. Sit amet risus
          nullam eget. Ut lectus arcu bibendum at. Id interdum velit laoreet id
          donec ultrices tincidunt arcu. Mauris ultrices eros.
        </p>
        <p className="text-gray-700 mb-4">
          Amet nisl purus in mollis nunc sed id. In hac habitasse platea
          dictumst quisque sagittis purus. Blandit cursus risus.
        </p>
        <Button
          className={`px-6 py-2 ${
            active
              ? 'bg-white text-black font-semibold hover:text-white'
              : 'bg-gray-500 text-white font-semibold hover:bg-gray-600'
          }`}
          onClick={() => setActive(!active)}
        >
          Get Free Demo
        </Button>
      </div>
      <div className="md:w-1/2 relative flex justify-center mt-6 md:mt-0">
        <Image
          src="/images/mony-rcv.png"
          height={300}
          width={300}
          alt="Money Management Image"
          className="object-cover"
        />
        <div className="absolute left-0 bottom-0 flex flex-col items-start">
          <div className="mb-2">
            <Image
              src="/images/shape-1.png"
              alt="Shape 1"
              height={150}
              width={150}
            />
          </div>
          <div>
            <Image
              src="/images/shape-2.png"
              alt="Shape 2"
              height={150}
              width={150}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
