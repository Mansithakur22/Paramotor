import Image from "next/image";

export function OurPriority() {
  return (
    <section>
      <div className="py-24 text-center bg-blue-950">
        <div className="flex flex-col items-center mx-auto">
          <Image 
            src="/images/yoursecurityourpriority/security-priority.png" 
            alt="Security Priority"
            width={50} 
            height={50} 
            className="mb-4"
          />
          <h2 className="mt-4 mb-3 text-white text-4xl font-semibold">Your security. Our priority.</h2> 
          <p className="text-white">
            We always have your security in mind. Rest easy knowing your data is
            protected with 128-bit encryption.
            <span className="font-bold"> Learn more.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
