import Link from 'next/link';
import { FloatingHeader } from '@/components/FloatingHeader';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative bg-background overflow-hidden selection:bg-primary selection:text-light">
      <FloatingHeader />

      {/* Deep burgundy glow effect */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--color-deep-wine)_0%,_transparent_60%)] opacity-40 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom,_var(--color-primary)_0%,_transparent_40%)] opacity-10 pointer-events-none" />
      
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-12">
        <div className="text-center space-y-8 max-w-lg mx-auto mb-8">
          <div className="space-y-4 flex flex-col items-center">
            <div className="relative w-16 h-10 mb-2 opacity-80">
              <Image 
                src="/logo/logoprincipal.png" 
                alt="Sala Vínica" 
                fill
                className="object-contain"
              />
            </div>
            <h2 className="font-serif text-[11px] text-accent/80 font-semibold uppercase tracking-[0.4em]">Menu Exclusivo</h2>
            <div className="relative w-64 h-32 md:w-80 md:h-40 mt-6">
              <Image 
                src="/logo/jantarvinico.png" 
                alt="Jantar Vínico Logo" 
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          
          <div className="h-px w-16 bg-light/10 mx-auto" />

          <p className="text-light/70 text-base md:text-lg font-light leading-relaxed px-4">
            Uma viagem sensorial guiada. Seis momentos pensados ao detalhe, onde vinho e gastronomia se encontram numa experiência perfeitamente harmonizada.
          </p>
        </div>

        <div className="w-full max-w-xs mx-auto text-center">
          <Link 
            href="/menu"
            className="group relative w-full overflow-hidden rounded-full bg-light/5 border border-light/10 py-5 flex items-center justify-center transition-all hover:bg-light/10 hover:border-light/20 hover:-translate-y-1 active:scale-[0.98] shadow-2xl"
          >
            <span className="font-serif text-lg tracking-[0.1em] uppercase text-light group-hover:text-white transition-colors">Iniciar percurso</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
