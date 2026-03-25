import { notFound } from 'next/navigation';
import { ArrowLeft, ChefHat } from 'lucide-react';
import Link from 'next/link';
import { WineCard } from '@/components/WineCard';
import { dishes, wines } from '@/lib/data';

export default async function DishDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const dish = dishes.find(d => d.id === resolvedParams.id);
  if (!dish) return notFound();

  const recommendedWines = dish.recommendedWineIds
    .map(id => wines.find(w => w.id === id))
    .filter(w => w !== undefined);

  return (
    <main className="min-h-screen bg-background pb-32">
      {/* Header */}
      <div className="pt-12 px-6 pb-8 bg-[#141414] border-b border-light/5 relative">
        <Link 
          href="/pratos" 
          className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center rounded-full bg-light/5 border border-light/10 text-light hover:bg-light/10 transition-colors"
        >
          <ArrowLeft size={20} strokeWidth={1.5} />
        </Link>
        
        <div className="mt-12">
          <span className="text-accent text-[10px] uppercase tracking-[0.2em] font-medium mb-3 block">
            {dish.category}
          </span>
          <h1 className="font-serif text-4xl text-light mb-4 leading-tight">
            {dish.name}
          </h1>
          {dish.description && (
            <p className="text-light/60 font-light leading-relaxed">
              {dish.description}
            </p>
          )}
        </div>
      </div>

      <div className="px-6 pt-12">
        <div className="flex items-center gap-3 mb-8">
          <ChefHat className="text-primary" size={24} strokeWidth={1.5} />
          <h2 className="font-serif text-2xl text-light">Sugestões do Sommelier</h2>
        </div>

        {recommendedWines.length > 0 && (
          <div className="mb-10">
            <div className="p-5 rounded-2xl bg-light/5 border border-light/5 mb-8">
              <p className="text-sm text-light/70 font-light leading-relaxed italic">
                "{dish.pairingReason}"
              </p>
            </div>
            
            <div className="space-y-4">
              {recommendedWines.map((wine, i) => (
                <WineCard key={i} wine={wine!} />
              ))}
            </div>
          </div>
        )}

        {recommendedWines.length === 0 && (
          <div className="p-8 text-center rounded-2xl bg-[#141414] border border-light/5">
            <p className="text-light/50 font-light">Ainda não temos sugestões específicas para este prato. Fale com o nosso sommelier.</p>
          </div>
        )}
      </div>
    </main>
  );
}
