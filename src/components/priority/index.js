import Image from "next/image";

export default function Priority() {
  return (
    <div className="pt-90 pb-95 text-center bg-blue-950">
      <div className="flex flex-col items-center justify-center mx-auto">
        <Image src="/images/yoursecurityourpriority/security-priority.png" width={50} height={60} className="justify-center"/>
        <h2 className="mt-4 mb-3 text-white">Your security. Our priority. </h2>
        <p className="text-white">
          We always have your security in mind. Rest easy knowing your data is
          protected with 128-bit encryption.
          <span className="font-bold"> Learn more.</span>
        </p>
      </div>
    </div>
  );
}
