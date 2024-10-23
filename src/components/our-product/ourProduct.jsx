import clsx from 'clsx';
import { ProductCard } from '.';

export function OurProduct() {
  const cardData = [
    {
      title: 'Green',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/images/pems.png',
      keys: [
        'Only Your Curent to USD',
        'Only Valid on Your Country',
        'Unlimited Transaction',
      ],
    },
    {
      title: 'Silver',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/images/prepaidcard.png',
      keys: [
        'Your Curent to USD, EUR, CNY',
        'Valid in 5 Country',
        'Unlimited Transaction',
      ],
    },
    {
      title: 'Black',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/images/thirdcard.png',
      keys: [
        'Accept All Curency',
        'Valid in 10 Country',
        'Unlimited Transaction',
      ],
    },
  ];
  return (
    <div
      className={clsx(
        'py-40 px-8 flex justify-center items-center flex-col gap-8'
      )}
    >
      <h1 className="text-4xl font-bold">Our Products</h1>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi.</p>
      </div>
      <div className="grid gap-10 grid-cols-3 mt-24">
        {cardData.map((item, idx) => (
          <ProductCard key={item.title} active={idx === 1} data={item} />
        ))}
      </div>
    </div>
  );
}
