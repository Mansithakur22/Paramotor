import { ReviewBackground } from './reviewBackground';

export function ReviewSection() {
  return (
    <div className="w-full min-h-full relative bg-gray">
      <ReviewBackground />
      <div className="flex justify-between gap-72 py-20 h-full items-center flex-col">
        <div className="max-w-2xl flex flex-col gap-3 text-center">
          <h1 className="text-4xl font-semibold">
            What people say about our platform
          </h1>
          <p className="text-lg text-slate-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam
          </p>
        </div>
        <div className="relative text-center max-w-xl mx-auto p-10 bg-white w-full mt-8">
          <span className="absolute text-6xl top-10 left-6 font-serif text-slate-700/50">
            "
          </span>
          <h4 className="text-lg pt-10 text-center">
            Using a debit card makes my transactions easier and more practical."
          </h4>
          <h3 className="text-primary font-semibold text-lg pt-2">
            Alexander Gray
          </h3>
          <h3 className="font-semibold pt-1 text-slate-700">CEO and Founder</h3>
        </div>
      </div>
    </div>
  );
}
