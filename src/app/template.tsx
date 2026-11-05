'use client';

import { MotionConfig, motion } from 'framer-motion';

// Re-mounts on every route change: page fade-in. reducedMotion="user" honours the OS "reduce motion" setting.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
        {children}
      </motion.div>
    </MotionConfig>
  );
}
