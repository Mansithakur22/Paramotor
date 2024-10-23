import Image from 'next/image';

export function ServiceCard({data}) {
  const { image, heading, description } = data;
  return (
    <div className="flex items-start gap-4 bg-white p-6 rounded-xl hover:shadow-xl">
      <div>
        <Image
          src={image}
          width={20}
          height={20}
          className="rounded-full p-2 bg-black object-contain w-12 aspect-square"
          alt="Chart Graph"
        />
      </div>

      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-bold text-black">{heading}</h2>
        <p className="text-base text-gray-600">{description} </p>
      </div>
    </div>
  );
}
