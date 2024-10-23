'use client';

import { useState } from 'react';
import Link from 'next/link';

export function WhyChooseParamotor() {
  const [active, setActive] = useState(false);

  return (
    <section className="pt-36 pb-20 bg-blue-950 text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-col md:flex-row w-full">
            <div className="md:w-1/2 flex flex-col items-center md:items-start">
              <div className="text-title text-center md:text-left">
                <h6>Why Choose Paramotor</h6>
                <h3 className="text-2xl font-bold">
                  Choose Us for a Future-Ready Banking Experience
                </h3>
                <div className="about_btn mt-4">
                  <Link href="#">
                    <span className="inline-block bg-white text-blue-950 px-4 py-2 rounded-lg hover:bg-gray-200">
                      More About Us
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: '24/7 Accessibility',
                    description:
                      'Unlike traditional banks with limited operating hours, digital banking offers round-the-clock access.',
                  },
                  {
                    title: 'User-Friendly Interfaces',
                    description:
                      'Digital banking platforms typically feature intuitive and user-friendly interfaces.',
                  },
                  {
                    title: 'Cost Savings',
                    description:
                      'Digital banks often have lower operational costs than brick-and-mortar banks.',
                  },
                  {
                    title: 'Speedy Transactions',
                    description:
                      'Digital banking processes transactions faster than traditional methods, making it ideal for urgent needs.',
                  },
                ].map((feature, index) => (
                  <div className="w-full p-2" key={index}>
                    <div className="features_section flex items-start p-4 bg-blue-950 rounded-lg shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        className="mr-3"
                      >
                        <path
                          d="M8.5 16.5858L4.70711 12.7929C4.31658 12.4024 3.68342 12.4024 3.29289 12.7929C2.90237 13.1834 2.90237 13.8166 3.29289 14.2071L7.79289 18.7071C8.18342 19.0976 8.81658 19.0976 9.20711 18.7071L20.2071 7.70711C20.5976 7.31658 20.5976 6.68342 20.2071 6.29289C19.8166 5.90237 19.1834 5.90237 18.7929 6.29289L8.5 16.5858Z"
                          fill="white"
                        />
                      </svg>
                      <div>
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="blueseparator my-8" />

          <div className="flex flex-row items-center justify-center w-full">
            <div className="text-center mr-4">
              <h6 className="brand_title text-lg font-bold">
                Increase your brand’s revenue with Paramotor
              </h6>
            </div>

            <div className="flex flex-wrap justify-center">
              {['brand7.png', 'brand8.png', 'brand9.png', 'brand10.png'].map(
                (logo, index) => (
                  <div className="partner_sliderlogo p-2" key={index}>
                    <Link href="#">
                      <img
                        className="img-fluid"
                        src={`/images/${logo}`}
                        alt="logo"
                      />
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
