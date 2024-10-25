import { Marquee } from './marquee';

export function Partners() {
  return (
    <div className="flex max-w-7xl mx-auto py-20">
      <h1 className=" max-w-sm text-3xl font-semibold">
        <span className="text-primary">Paramotor</span> has been
        trusted by 500+ leading companies
        <hr className="text-slate-300 mt-8" />
      </h1>
      <div className='w-full flex flex-col gap-3 ps-6'>
        <Marquee />
        <Marquee />
      </div>
    </div>
  );
}
