import Link from 'next/link';
import Image from 'next/image';
import { FloatingHeader } from '@/components/FloatingHeader';
import { dinnerSequence } from '@/lib/data/dinner-sequence';
import { ChevronRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';

export default function MenuOverview() {
  return (
    <main className="min-h-screen flex flex-col relative bg-background pb-24 selection:bg-primary selection:text-light">
      <FloatingHeader />

      {/* Premium ambient glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <FadeIn delay={0.3}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-deep-wine)] opacity-15 rounded-full blur-[120px]" />
        </FadeIn>
      </div>

      <div className="relative z-10 pt-28 px-6 max-w-md mx-auto w-full">
        <FadeIn delay={0.1} className="text-center mb-16 flex flex-col items-center">
          <div className="relative w-32 h-12 mb-6 opacity-70">
            <Image
              src="/logo/logoprincipal.png"
              alt="Sala Vínica"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="font-serif text-3xl text-accent tracking-[0.1em] uppercase mb-4">O Percurso</h1>
          <div className="h-px w-12 bg-primary/50 mx-auto" />
        </FadeIn>

        <StaggerContainer delay={0.3} className="space-y-8 relative before:absolute before:inset-y-2 before:left-[27px] before:w-px before:bg-light/10">
          {dinnerSequence.map((moment) => (
            <StaggerItem key={moment.id}>
              <Link
                href={`/moment/${moment.id}`}
                className="relative flex items-center gap-6 group block"
              >
                {/* Timeline dot */}
                <div className="w-14 h-14 shrink-0 rounded-full bg-[#1B1C26] border border-light/10 flex items-center justify-center text-light/40 font-serif z-10 group-hover:border-primary/50 group-hover:text-primary group-hover:bg-[#2A2C3D] transition-all duration-300">
                  <span className="text-2xl leading-none">{moment.momentOrder}</span>
                </div>

                {/* Card */}
                <div className="flex-1 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-2xl p-5 flex items-center shadow-2xl transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:-translate-y-1">
                  <div className="flex-1 pb-1">
                    <h3 className="font-serif text-[17px] text-accent mb-1.5 leading-tight whitespace-pre-line">{moment.wine.name}</h3>
                    <p className="text-[13px] text-light/60 font-light italic leading-snug">C/ {moment.dish.name}</p>
                  </div>
                  <ChevronRight size={18} className="text-light/20 group-hover:text-primary transition-colors ml-4 shrink-0" strokeWidth={1.5} />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </main>
  );
}
