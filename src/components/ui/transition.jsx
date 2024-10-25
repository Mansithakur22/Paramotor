'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export function Transition({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={twMerge("", className)}
    >
      {children}
    </motion.div>
  );
}
