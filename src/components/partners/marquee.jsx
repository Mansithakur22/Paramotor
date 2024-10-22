'use client';

import { motion } from 'framer-motion';

export function Marquee() {
  return (
    <motion.div className='flex gap-6 overflow-hidden'>
      <p className='w-full text-nowrap'>This is a Marquee Text</p>
      <p className='w-full text-nowrap'>This is a Marquee Text</p>
      <p className='w-full text-nowrap'>This is a Marquee Text</p>
      <p className='w-full text-nowrap'>This is a Marquee Text</p>
      <p className='w-full text-nowrap'>This is a Marquee Text</p>
      <p className='w-full text-nowrap'>This is a Marquee Text</p>
      <p className='w-full text-nowrap'>This is a Marquee Text</p>
      <p className='w-full text-nowrap'>This is a Marquee Text</p>
      <p className='w-full text-nowrap'>This is a Marquee Text</p>
      <p className='w-full text-nowrap'>This is a Marquee Text</p>
      <p className='w-full text-nowrap'>This is a Marquee Text</p>
    </motion.div>
  );
}
