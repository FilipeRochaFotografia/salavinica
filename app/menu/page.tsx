import Link from 'next/link';
import Image from 'next/image';
import { FloatingHeader } from '@/components/FloatingHeader';
import { dinnerSequence } from '@/lib/data/dinner-sequence';
import { ChevronRight } from 'lucide-react';

export default function MenuOverview() {
  return (
    <main className="min-h-screen flex flex-col relative bg-background pb-24 selection:bg-primary selection:text-light">
      <FloatingHeader />
      
      {/* Subtle background glow */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,_var(--color-deep-wine)_0%,_transparent_40%)] opacity-20 pointer-events-none" />

      <div className="relative z-10 pt-28 px-6 max-w-md mx-auto w-full">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="relative w-32 h-12 mb-6 opacity-70">
            <Image 
              src="/logo/logoprincipal.png" 
              alt="Sala Vínica" 
              fill
              className="object-contain"
            />
          </div>
          <h1 className="font-serif text-3xl text-light tracking-[0.1em] uppercase mb-4">O Percurso</h1>
          <div className="h-px w-12 bg-primary/50 mx-auto" />
        </div>

        <div className="space-y-8 relative before:absolute before:inset-y-2 before:left-[27px] before:w-px before:bg-light/10">
          {dinnerSequence.map((moment) => (
            <Link 
              key={moment.id} 
              href={`/moment/${moment.id}`}
              className="relative flex items-center gap-6 group"
            >
              {/* Timeline dot */}
              <div className="w-14 h-14 shrink-0 rounded-full bg-[#0D0D0D] border border-light/10 flex items-center justify-center text-light/40 font-serif z-10 group-hover:border-primary/50 group-hover:text-primary group-hover:bg-[#1A1A1A] transition-all duration-300">
                <span className="text-2xl leading-none">{moment.momentOrder}</span>
              </div>
              
              {/* Card */}
              <div className="flex-1 bg-[#141414] border border-light/5 rounded-2xl p-5 flex items-center shadow-lg transition-all duration-300 group-hover:bg-[#1A1A1A] group-hover:border-light/15 group-hover:-translate-y-1">
                <div className="flex-1">
                  <h3 className="font-serif text-base text-light mb-1.5 leading-tight">{moment.wine.name}</h3>
                  <p className="text-sm text-primary/80 font-light leading-snug">{moment.dish.name}</p>
                </div>
                <ChevronRight size={18} className="text-light/20 group-hover:text-primary transition-colors ml-4 shrink-0" strokeWidth={1.5} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
