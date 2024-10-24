import Image from 'next/image';
import { Button } from '../ui';

export function OurGoal() {
  return (
    <section className="flex items-center justify-center min-h-[500px] py-10 max-w-7xl mx-auto">
      <div className="flex items-center">
        <div className="grow-1 w-full">
          <div className="max-w-md relative">
            <Image
              src="/images/men-left.jpg"
              alt="Men Left"
              width={2000}
              height={2000}
              className="object-cover rounded-lg w-full h-full"
            />
            <div className="absolute animate-wiggle -bottom-36 -right-52">
              <Image
                src="/images/card1.png"
                alt="Visa Card"
                width={300}
                height={300}
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>
        <div className="ml-6 grow-1 w-full">
          <h2 className="text-5xl/tight font-bold mb-4">
            Our goal is to make online payment easy for everyone.
          </h2>
          <p className="mb-4 text-lg">
            Ornare lectus sit amet est placerat in egestas erat for imperdiet.
            Adipiscing at in tellus integer feugiat.
          </p>
          <Button>
            Get Free Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
