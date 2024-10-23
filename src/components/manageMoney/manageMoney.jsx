import Image from 'next/image';

export function ManageMoney() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">
          Manage your money with Paramotor
        </h2>
        <p className="text-gray-700 mb-4">
          Auctor urna nunc id cursus metus aliquam eleifend mi. Sit amet risus
          nullam eget. Ut lectus arcu bibendum at. Id interdum velit laoreet id
          donec ultrices tincidunt arcu. Mauris ultrices eros.
        </p>
        <p className="text-gray-700">
          Amet nisl purus in mollis nunc sed id. In hac habitasse platea
          dictumst quisque sagittis purus. Blandit cursus risus.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/images/mony-rcv.png"
          height={300}
          width={300}
          alt="Money Management Image"
          className="object-cover"
        />
      </div>
    </div>
  );
}
