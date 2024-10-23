'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

export function Marquee({speed, threshold, wheelFactor, dragFactor, children}) {
    const marqueeRef = useRef(null);
    const slowDown = useRef(false);
    const isScrolling = useRef(null);
    const constrainsRef = useRef(null);
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
