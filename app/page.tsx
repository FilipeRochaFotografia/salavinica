import Link from 'next/link';
import { FloatingHeader } from '@/components/FloatingHeader';
import { Utensils, Wine } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative bg-background">
      <FloatingHeader />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-12">
        <div className="text-center mb-16 space-y-6">
          <div className="flex justify-center mb-4">
            <Image 
              src="https://i.ibb.co/1WQRpKT/Design-sem-nome.png" 
              alt="Sala Vínica Logo" 
              width={56} 
              height={56} 
              className="object-contain opacity-90"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-light tracking-wide">
            Sala Vínica
          </h1>
          <p className="text-light/70 text-lg md:text-xl font-light max-w-xs mx-auto">
            Como prefere escolher o seu vinho?
          </p>
        </div>

        <div className="w-full max-w-md space-y-4 flex flex-col mt-auto mb-8">
          <Link 
            href="/pratos"
            className="group relative overflow-hidden rounded-2xl bg-[#141414] border border-light/5 p-6 flex items-center gap-6 transition-all hover:bg-[#1A1A1A] active:scale-[0.98]"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-light transition-colors">
              <Utensils size={24} strokeWidth={1.5} />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-serif text-xl text-light mb-1">Escolher por prato</h3>
              <p className="text-sm text-light/50 font-light">Encontre a harmonização perfeita</p>
            </div>
          </Link>

          <Link 
            href="/vinhos"
            className="group relative overflow-hidden rounded-2xl bg-[#141414] border border-light/5 p-6 flex items-center gap-6 transition-all hover:bg-[#1A1A1A] active:scale-[0.98]"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-light transition-colors">
              <Wine size={24} strokeWidth={1.5} />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-serif text-xl text-light mb-1">Explorar vinhos</h3>
              <p className="text-sm text-light/50 font-light">Navegue pela nossa garrafeira</p>
            </div>
          </Link>
        </div>
        
        <div className="mt-auto text-center">
          <p className="text-[10px] text-light/30 uppercase tracking-[0.2em]">Armazém do Peixe</p>
        </div>
      </div>
    </main>
  );
}
