import clsx from 'clsx';
import Image from 'next/image';
import { Button } from '../ui';

export function ProductCard({ active, data }) {
  const { title, description, keys, image } = data;
  return (
    <div
      className={clsx(
        `
          relative rounded-lg gap-4 shadow-2xl flex flex-col min-h-96
          justify-center items-center p-8 pb-14 pt-[50%] max-w-sm`,
        active ? 'bg-primary -translate-y-6 text-white' : null
      )}
    >
      <div className="w-full absolute -top-8 left-0">
        <Image
          src={image}
          alt=""
          width={400}
          height={400}
          className="w-10/12 mx-auto rounded-lg peer-hover:shadow-lg"
        />
      </div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-center px-10 text-wrap">{description}</p>
      <hr className="bg-slate-300 border-none h-px w-full" />
      <div className="flex flex-col items-center gap-2">
        {keys.map((item) => (
          <h4 key={item}>{item}</h4>
        ))}
      </div>
      <div className="absolute flex justify-center -bottom-6 w-full">
        <Button className={active ? 'bg-white text-primary font-semibold hover:bg-white'  : null}>
          Get Started
        </Button>
      </div>
    </div>
  );
}
