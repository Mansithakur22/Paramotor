import { Marquee } from "./marquee";

export function Partners() {
  return (
    <div className="flex">
      <h1 className=" max-w-96 text-4xl">
        <span className="text-primary font-semibold">Paramotor</span> has been trusted by 500+
        leading companies
      </h1>
      <Marquee />
    </div>
  );
}
