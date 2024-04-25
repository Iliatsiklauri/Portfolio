import { motion } from 'framer-motion';
import React from 'react';

export default function HomeText() {
  return (
    <motion.div initial={{ y: 75, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <h1 className="text-3xl">Hello , i am Ilia Tsiklauri </h1>
    </motion.div>
  );
}
