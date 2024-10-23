"use client"

import Image from "next/image";
import { useState } from "react";
import { Button } from '../ui';

export function OurGoal() {
  const [active, setActive] = useState(false); 

  return (
    <section className="flex items-center justify-center h-[500px]"> 
      <div className="flex items-center goal-container relative"> 
        <div className="flex-shrink-0 relative"> 
          <Image
            src="/images/men-left.jpg"
            alt="Men Left"
            width={300} 
            height={300} 
            className="object-cover" 
          />
          <div className="absolute -bottom-20 -right-20"> 
            <Image 
              src="/images/card1.png" 
              alt="Visa Card" 
              width={180} 
              height={90} 
              className="object-cover" 
            />
          </div>
        </div>
        <div className="ml-6">
          <h2 className="text-2xl font-bold mb-4">
            Our goal is to make online payment easy for everyone.
          </h2>
          <p className="mb-4">
            Ornare lectus sit amet est placerat in egestas erat for imperdiet.
            Adipiscing at in tellus integer feugiat.
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
      </div>
    </section>
  );
}

