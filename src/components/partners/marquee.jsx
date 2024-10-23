export function Marquee({ children }) {
  return (
    <marquee className="overflow-hidden">
      <div className="flex gap-8">
        <p className="text-nowrap">This is a Marquee Text</p>
        <p className="text-nowrap">This is a Marquee Text</p>
        <p className="text-nowrap">This is a Marquee Text</p>
        <p className="text-nowrap">This is a Marquee Text</p>
      </div>
    </marquee>
  );
}
