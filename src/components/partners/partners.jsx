import { Marquee } from './marquee';

export function Partners() {
  return (
    <div className="flex max-w-7xl mx-auto py-20">
      <h1 className=" max-w-96 text-4xl">
        <span className="text-primary font-semibold">Paramotor</span> has been
        trusted by 500+ leading companies
        <hr className="text-slate-300 mt-8" />
      </h1>
      <div className='w-full ps-14'>
        <Marquee />
      </div>
    </div>
  );
}
