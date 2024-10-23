import { Button as UIButton } from '@headlessui/react';
import clsx from 'clsx';

export function Button({ children, className }) {
  return (
    <UIButton
      className={clsx(
        `px-6 py-3 bg-primary rounded-full text-white hover:bg-secondary 
         disabled:text-gray-500 text-lg`,
        className
      )}
    >
      {children}
    </UIButton>
  );
}
