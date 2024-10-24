'use client';

import { FaqCard } from './faqCard';

const cardData = [
  {
    question: 'Can I pay off my loan early?',
    answer:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
  },
  {
    question: 'How much can I paramotor?',
    answer:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
  },
  {
    question: 'Do you offer refinancing?',
    answer:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
  },
  {
    question: 'Can I do all of my banking with you?',
    answer:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
  },
  {
    question: 'When should I apply?',
    answer:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
  },
];

export function Faq() {

  return (
    <section className="py-12 bg-gray-100 max-w-7xl mx-auto">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {cardData.map(({ question, answer }, index) => (
            <FaqCard
              key={index}
              question={question}
              answer={answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
