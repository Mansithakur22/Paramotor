import { Button as UIButton } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

export function Button({ children, className }) {
  return (
    <UIButton
      className={twMerge(
        `px-6 py-3 bg-primary rounded-full text-white hover:bg-red-600 
         disabled:text-gray-500 text-lg`,
        className
      )}
    >
      {children}
    </UIButton>
  );
}
