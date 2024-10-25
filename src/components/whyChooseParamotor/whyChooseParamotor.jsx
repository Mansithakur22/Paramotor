import Link from 'next/link';
import { Button, Transition } from '../ui';
import { RightIcon } from '@/icons';
import Image from 'next/image';

export function WhyChooseParamotor() {
  return (
    <section className="py-28 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-14 flex-wrap justify-center">
          <div className="flex flex-col md:flex-row w-full">
            <div className="md:w-1/2 flex flex-col items-center gap-6 md:items-start">
              <div className="text-title text-center md:text-left">
                <h6 className="uppercase font-semibold">
                  Why Choose Paramotor
                </h6>
                <h3 className="text-4xl font-bold">
                  Choose Us for a Future-Ready Banking Experience
                </h3>
              </div>
              <div className="about_btn mt-4">
                <Button className="bg-primary border border-white hover:text-primary hover:bg-white text-base uppercase font-semibold">
                  More About Us
                </Button>
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
                  <div className="w-full gap-3 p-2 flex" key={index}>
                    <div className="w-10 pt-1">
                      <RightIcon />
                    </div>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr className="text-gray" />

          <div className="flex gap-4 justify-between w-full px-4">
            <h6 className="text-3xl max-w-md font-bold">
              Increase your brand’s revenue with Paramotor
            </h6>

            <div className="flex max-w-2xl w-full justify-between">
              {['brand7.png', 'brand8.png', 'brand9.png', 'brand10.png'].map(
                (logo) => (
                  <Transition key={logo}>
                    <Image
                      className="h-7 object-contain"
                      height={150}
                      width={150}
                      src={`/images/${logo}`}
                      alt="logo"
                    />
                  </Transition>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
