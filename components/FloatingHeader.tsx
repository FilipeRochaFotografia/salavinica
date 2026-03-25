'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { Wine, Menu, X, Utensils, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function FloatingHeader() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150 && !menuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-xl border-b border-light/5"
      >
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-light/5 flex items-center justify-center text-light group-hover:bg-light/10 transition-colors">
            <Wine size={16} strokeWidth={1.5} />
          </div>
          <span className="font-serif text-sm tracking-[0.2em] uppercase text-light/90">Sala Vínica</span>
        </Link>

        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-light/70 hover:text-light transition-colors p-2 -mr-2 relative z-50"
        >
          {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[73px] right-6 w-56 bg-[#141414] border border-light/10 rounded-2xl shadow-2xl z-40 overflow-hidden"
          >
            <div className="py-2">
              <Link 
                href="/vinhos" 
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-5 py-3 text-sm transition-colors ${pathname === '/vinhos' ? 'bg-light/10 text-light' : 'text-light/70 hover:bg-light/5 hover:text-light'}`}
              >
                <Wine size={16} strokeWidth={1.5} />
                Carta de Vinhos
              </Link>
              <Link 
                href="/pratos" 
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-5 py-3 text-sm transition-colors ${pathname === '/pratos' ? 'bg-light/10 text-light' : 'text-light/70 hover:bg-light/5 hover:text-light'}`}
              >
                <Utensils size={16} strokeWidth={1.5} />
                O Menu
              </Link>
              <div className="h-px bg-light/5 my-2 mx-4" />
              <Link 
                href="/admin" 
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-5 py-3 text-sm transition-colors ${pathname === '/admin' ? 'bg-light/10 text-light' : 'text-light/70 hover:bg-light/5 hover:text-light'}`}
              >
                <Settings size={16} strokeWidth={1.5} />
                Administração
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-30 bg-background/50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </>
  );
}
