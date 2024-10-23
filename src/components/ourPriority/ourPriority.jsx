import Image from 'next/image';

export function OurPriority() {
  return (
    <section className="py-20 bg-primary">
      <div className="flex flex-col items-center mx-auto max-w-2xl text-center">
        <Image
          src="/images/yoursecurityourpriority/security-priority.png"
          alt="Security Priority"
          width={50}
          height={50}
          className="mb-4"
        />
        <h2 className="mt-4 mb-3 text-white text-4xl font-semibold">
          Your security. Our priority.
        </h2>
        <p className="text-white text-lg">
          We always have your security in mind. Rest easy knowing your data is
          protected with 128-bit encryption. <strong> Learn more.</strong>
        </p>
      </div>
    </section>
  );
}
