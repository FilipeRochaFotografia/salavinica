import { FloatingHeader } from '@/components/FloatingHeader';
import { dinnerSequence } from '@/lib/data/dinner-sequence';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ChevronLeft, Wine, UtensilsCrossed } from 'lucide-react';

export function generateStaticParams() {
  return dinnerSequence.map((moment) => ({
    id: moment.id,
  }));
}

export default async function MomentDetail(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const currentIndex = dinnerSequence.findIndex(m => m.id === params.id);
  
  if (currentIndex === -1) {
    notFound();
  }

  const moment = dinnerSequence[currentIndex];
  const prevMoment = currentIndex > 0 ? dinnerSequence[currentIndex - 1] : null;
  const nextMoment = currentIndex < dinnerSequence.length - 1 ? dinnerSequence[currentIndex + 1] : null;

  return (
    <main className="min-h-screen flex flex-col relative bg-background pb-24 selection:bg-primary selection:text-light">
      <FloatingHeader />
      
      {/* Glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_var(--color-primary)_0%,_transparent_50%)] opacity-10 pointer-events-none" />

      <div className="relative z-10 pt-28 px-6 max-w-lg mx-auto w-full">
        {/* Moment Header */}
        <div className="text-center mb-12">
          <p className="font-serif text-[10px] text-accent/80 font-semibold uppercase tracking-[0.4em] mb-4">
            Momento {moment.momentOrder} de 6
          </p>
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-light/10" />
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <div className="h-px flex-1 bg-light/10" />
          </div>
        </div>

        {/* Pairing Visuals */}
        <div className="flex flex-col gap-8 mb-16">
          {/* Wine */}
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-64 mb-6 drop-shadow-lg">
              <Image 
                src={moment.wine.image} 
                alt={moment.wine.name}
                fill
                className="object-contain"
              />
            </div>
            <h2 className="font-serif text-2xl text-light text-center mb-2 leading-tight">{moment.wine.name}</h2>
            <p className="text-sm font-light text-light/50 text-center px-4 mb-4 leading-relaxed">{moment.wine.shortDescription}</p>
            
            <div className="flex items-center gap-2 font-serif text-xs text-primary/80 uppercase tracking-widest">
              <Wine size={14} />
              <span>{moment.wine.region} · {moment.wine.type}</span>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
          </div>

          {/* Dish */}
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-48 mb-6 drop-shadow-xl rounded-2xl overflow-hidden bg-light/5 border border-light/10 flex items-center justify-center">
              <Image 
                src={moment.dish.image} 
                alt={moment.dish.name}
                fill
                className="object-cover opacity-80"
              />
            </div>
            <h3 className="font-serif text-xl text-light text-center mb-2 leading-tight">{moment.dish.name}</h3>
            <p className="text-sm font-light text-light/50 text-center px-4 mb-4 leading-relaxed">{moment.dish.shortDescription}</p>
            
            <div className="flex items-center gap-2 font-serif text-xs text-accent/80 uppercase tracking-widest">
              <UtensilsCrossed size={14} />
              <span>{moment.dish.type}</span>
            </div>
          </div>
        </div>

        {/* Editorial Text */}
        <div className="bg-[#141414]/80 border border-light/5 rounded-3xl p-8 mb-16 relative shadow-2xl">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-4">
            <span className="font-serif text-[10px] uppercase tracking-[0.3em] text-light/40">A Harmonização</span>
          </div>
          <p className="text-lg text-light/90 leading-relaxed text-center italic">
            "{moment.editorialPairing}"
          </p>
        </div>

        {/* Profiles Details */}
        <div className="space-y-12 mb-16 px-2">
          <section>
            <h4 className="text-xl border-b border-light/10 pb-4 mb-4 text-light/80">O Vinho em Detalhe</h4>
            <div className="space-y-4 font-light text-sm text-light/60">
              <p className="leading-relaxed">{moment.wine.longDescription}</p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <span className="block font-serif text-[11px] font-medium uppercase tracking-widest text-light/30 mb-2">Estrutura</span>
                  <ul className="space-y-1.5">
                    <li>Acidez: <span className="text-light/80">{moment.wine.sensoryProfile.acidity}</span></li>
                    <li>Corpo: <span className="text-light/80">{moment.wine.sensoryProfile.body}</span></li>
                    <li>Final: <span className="text-light/80">{moment.wine.sensoryProfile.finish}</span></li>
                  </ul>
                </div>
                <div>
                  <span className="block font-serif text-[11px] font-medium uppercase tracking-widest text-light/30 mb-2">Serviço</span>
                  <ul className="space-y-1.5">
                    <li>Temp: <span className="text-light/80">{moment.wine.serviceTemperature}</span></li>
                    <li>Copo: <span className="text-light/80">{moment.wine.recommendedGlass}</span></li>
                    <li>Decantação: <span className="text-light/80">{moment.wine.decanting}</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h4 className="text-xl border-b border-light/10 pb-4 mb-4 text-light/80">O Prato em Detalhe</h4>
            <div className="space-y-4 font-light text-sm text-light/60">
              <p className="leading-relaxed">{moment.dish.longDescription}</p>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-light/10 pt-8 mt-12 pb-8">
          {prevMoment ? (
            <Link href={`/moment/${prevMoment.id}`} className="flex items-center gap-3 text-light/50 hover:text-light transition-colors group">
              <ChevronLeft size={20} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform" />
              <div className="text-left w-24">
                <span className="block font-serif text-[10px] uppercase tracking-[0.3em] mb-1 text-light/30">Anterior</span>
                <span className="font-serif text-xs truncate block">{prevMoment.wine.name}</span>
              </div>
            </Link>
          ) : (
            <div className="w-32" />
          )}

          {nextMoment ? (
            <Link href={`/moment/${nextMoment.id}`} className="flex items-center gap-3 text-light/50 hover:text-light transition-colors group text-right justify-end">
              <div className="text-right w-24">
                <span className="block font-serif text-[10px] uppercase tracking-[0.3em] mb-1 text-light/30">Próximo</span>
                <span className="font-serif text-xs truncate block">{nextMoment.wine.name}</span>
              </div>
              <ChevronRight size={20} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div className="text-right">
              <Link href="/menu" className="inline-block border border-primary/50 text-primary px-6 py-2 rounded-full text-xs tracking-widest uppercase hover:bg-primary/10 transition-colors">
                Finalizar
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
