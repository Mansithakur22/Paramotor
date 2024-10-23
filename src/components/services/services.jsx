import { ServiceCard } from './serviceCard';

const serviceCardsData = [
  {
    image: '/images/coins.png',
    heading: 'Payment Solution',
    description:
      'Volutpat id molestie quisque lorem tristique nibh consectetur fringilla habitant odio urna.',
  },
  {
    image: '/images/chart_graph.png',
    heading: 'Growth Business',
    description:
      'Volutpat id molestie quisque lorem tristique nibh consectetur fringilla habitant odio urna.',
  },
  {
    image: '/images/ui-user-group.png',
    heading: 'Connected People',
    description:
      'Volutpat id molestie quisque lorem tristique nibh consectetur fringilla habitant odio urna.',
  },
];

export function Services() {
  return (
    <div className="bg-gray py-20">
      <div className="grid grid-cols-2 pb-10 max-w-7xl mx-auto">
        <h2 className="text-4xl max-w-md font-bold text-gray-900">
          Pay without worry, trust we wont make you sorry
        </h2>
        <div>
          <p className="text-gray-500 mb-10 grow w-full">
            Sem morbi non arcu primis porttitor mollis sodales maecenas. Ac nibh
            Sem morbi non arcu primis porttitor mollis sodales maecenas. Ac nibh
            Sem morbi non arcu primis porttitor mollis sodales maecenas. Ac nibh
            sapien senectus sagittis amet porta enim.
          </p>
          <hr className='text-slate-400' />
        </div>
      </div>
      <div className="flex gap-12 max-w-7xl mx-auto">
        {serviceCardsData.map((item) => (
          <ServiceCard key={item.image} data={item} />
        ))}
      </div>
    </div>
  );
}
