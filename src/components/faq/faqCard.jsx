import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export function FaqCard({ question, answer }) {
  return (
    <Disclosure>
      <div className="rounded-lg shadow-lg text-left px-12 py-6">
        <DisclosureButton className="group py-2 flex text-left font-semibold justify-between w-full items-center">
          <h2 className="text-xl">{question}</h2>
          <ChevronDownIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
        </DisclosureButton>
        <DisclosurePanel className="text-gray-500 text-left pt-5 transition">
          {answer}
        </DisclosurePanel>
      </div>
    </Disclosure>
  );
}
