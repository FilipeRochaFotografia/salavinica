import { notFound } from 'next/navigation';
import { ArrowLeft, Wine as WineIcon, Star } from 'lucide-react';
import Link from 'next/link';
import { wines, dishes } from '@/lib/data';

export default async function WineDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const wine = wines.find(w => w.id === resolvedParams.id);
  if (!wine) return notFound();

  const pairingDishes = dishes.filter(d => d.recommendedWineIds.includes(wine.id));

  return (
    <main className="min-h-screen bg-background pb-32">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden bg-[#141414]">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
        
        {/* Blurred Background */}
        <div className={`absolute inset-0 ${wine.imagePlaceholder} opacity-30`} />

        {/* Back Button */}
        <Link 
          href="/vinhos" 
          className="absolute top-6 left-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-background/40 backdrop-blur-md border border-light/10 text-light hover:bg-light/10 transition-colors"
        >
          <ArrowLeft size={20} strokeWidth={1.5} />
        </Link>

        {/* Bottle Image */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pt-12 pb-8">
          {wine.image ? (
            <img 
              src={wine.image} 
              alt={wine.imageAlt} 
              className="h-full object-contain drop-shadow-2xl"
            />
          ) : (
            <WineIcon className="w-24 h-24 text-light/10" strokeWidth={1} />
          )}
        </div>
      </div>

      <div className="px-6 relative z-30 -mt-8">
        {/* Info Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] text-accent uppercase tracking-[0.2em] font-medium">
              {wine.category}
            </span>
            <span className="text-light/30">•</span>
            <span className="text-[10px] text-light/50 uppercase tracking-widest">{wine.region}</span>
            {wine.subcategory && (
              <>
                <span className="text-light/30">•</span>
                <span className="text-[10px] text-light/50 uppercase tracking-widest">{wine.subcategory}</span>
              </>
            )}
            {wine.isPremium && (
              <Star className="w-4 h-4 text-accent fill-accent/20 ml-auto" />
            )}
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl text-light mb-3 leading-tight">
            {wine.name}
          </h1>
          <p className="text-lg text-light/60 font-light">
            {wine.style}
          </p>
        </div>

        {/* Story */}
        <div className="mb-12">
          <p className="text-light/80 leading-relaxed font-light text-lg">
            {wine.summary}
          </p>
        </div>

        {/* Keywords */}
        <div className="mb-12 flex flex-wrap gap-2">
          {wine.keywords.map((keyword, i) => (
            <span key={i} className="px-4 py-2 rounded-lg bg-[#141414] border border-light/5 text-xs text-light/70 tracking-wider uppercase">
              {keyword}
            </span>
          ))}
        </div>

        {/* Pairings */}
        {pairingDishes.length > 0 && (
          <div className="mb-12">
            <h3 className="text-[10px] text-accent uppercase tracking-[0.2em] font-medium mb-6">Harmonizações Sugeridas</h3>
            
            <div className="p-5 rounded-2xl bg-light/5 border border-light/5 mb-6">
              <p className="text-sm text-light/70 font-light leading-relaxed italic">
                "{wine.pairing}"
              </p>
            </div>

            <div className="space-y-3">
              {pairingDishes.map((dish, i) => (
                <Link 
                  key={i}
                  href={`/pratos/${dish.id}`}
                  className="block p-5 rounded-xl bg-[#141414] border border-light/5 hover:bg-[#1A1A1A] transition-colors"
                >
                  <p className="font-serif text-xl text-light mb-1">{dish.name}</p>
                  <p className="text-xs text-light/50 font-light">{dish.category}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
