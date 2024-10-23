export function ContactUs() {
  return (
    <div className="pt-20 pb-20 text-center bg-blue-950">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div>
          <h2 className="mt-4 mb-3 text-white text-2xl md:text-3xl font-semibold">
            Have any questions?
          </h2>
          <p className="text-white text-lg md:text-xl">
            Ask us anything. Do you have a question you want us to answer?
          </p>
        </div>
        <div>
          <button className="mt-4 px-6 py-2 bg-white text-blue-950 font-bold rounded-lg hover:bg-blue-200">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
