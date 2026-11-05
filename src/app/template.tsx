'use client';

import { motion } from 'framer-motion';

// Re-mounts on every route change: page fade-in (was the PT wrapper in App.tsx).
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  );
}
