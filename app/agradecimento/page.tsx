import Link from 'next/link';
import Image from 'next/image';
import { FloatingHeader } from '@/components/FloatingHeader';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';

export default function Agradecimento() {
  return (
    <main className="min-h-screen flex flex-col relative bg-background overflow-hidden selection:bg-primary selection:text-light">
      <FloatingHeader />

      {/* Premium ambient glows (manchas vinho) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <FadeIn delay={0.5}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-deep-wine)] opacity-15 rounded-full blur-[120px]" />
        </FadeIn>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-12">
        <StaggerContainer delay={0.1} className="text-center space-y-8 max-w-lg mx-auto mb-16">
          <StaggerItem className="space-y-4 flex flex-col items-center">
            <div className="relative w-16 h-10 mb-2 opacity-80">
              <Image
                src="/logo/logoprincipal.png"
                alt="Sala Vínica"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="font-serif text-3xl text-accent tracking-[0.1em] uppercase mb-4 mt-8">Obrigado</h1>
          </StaggerItem>

          <StaggerItem className="h-px w-16 bg-light/10 mx-auto" />

          <StaggerItem>
            <p className="text-light/70 text-base md:text-lg font-light leading-relaxed px-4">
              Esperamos que tenha desfrutado desta viagem sensorial. Uma simbiose perfeita entre vinho e gastronomia para criar memórias inesquecíveis.
            </p>
          </StaggerItem>
        </StaggerContainer>

        <FadeIn delay={0.6} className="w-full max-w-xs mx-auto text-center mt-8">
          <Link
            href="/"
            className="group relative w-full overflow-hidden rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 py-5 flex items-center justify-center transition-all hover:bg-primary/20 hover:border-primary/30 hover:-translate-y-1 active:scale-[0.98] shadow-2xl"
          >
            <span className="font-serif text-lg tracking-[0.1em] uppercase text-accent group-hover:text-accent/90 transition-colors">Voltar ao Início</span>
          </Link>
        </FadeIn>
      </div>
    </main>
  );
}
