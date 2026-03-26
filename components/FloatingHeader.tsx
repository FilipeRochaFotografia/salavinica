'use client';

import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

export function FloatingHeader() {
  const router = useRouter();
  const pathname = usePathname();

  const isHome = pathname === '/';

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/60 backdrop-blur-xl border-b border-light/5"
    >
      <div className="flex-1">
        {!isHome && (
          <button
            onClick={() => router.back()}
            className="w-10 h-10 rounded-full bg-light/5 flex items-center justify-center text-light/70 hover:bg-light/10 hover:text-light transition-all active:scale-95"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
        )}
      </div>

      <div className="flex-none text-center">
        <span className="font-serif tracking-[0.2em] uppercase text-light/90 text-sm block">
          Sala Vínica
        </span>
      </div>

      <div className="flex-1" />
    </motion.header>
  );
}
