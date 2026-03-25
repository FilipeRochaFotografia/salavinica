import { FloatingHeader } from '@/components/FloatingHeader';
import Link from 'next/link';
import { WineCard } from '@/components/WineCard';
import { wines } from '@/lib/data';

export default async function VinhosPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams;
  const typeFilter = resolvedSearchParams.tipo as string;

  let filteredWines = wines;
  
  if (typeFilter) {
    filteredWines = wines.filter(w => w.category.toLowerCase() === typeFilter.toLowerCase());
  }

  const types = ['Branco', 'Tinto', 'Rosé', 'Champagne'];

  return (
    <main className="min-h-screen bg-background pb-24">
      <FloatingHeader />
      
      <div className="pt-28 px-6">
        <h1 className="font-serif text-4xl text-light mb-8">A Garrafeira</h1>
        
        {/* Elegant Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link 
            href="/vinhos"
            className={`px-4 py-2 rounded-lg text-xs tracking-widest uppercase transition-colors ${!typeFilter ? 'bg-light text-background font-medium' : 'bg-[#141414] text-light/70 border border-light/5 hover:bg-[#1A1A1A]'}`}
          >
            Todos
          </Link>
          {types.map(type => (
            <Link 
              key={type}
              href={`/vinhos?tipo=${type.toLowerCase()}`}
              className={`px-4 py-2 rounded-lg text-xs tracking-widest uppercase transition-colors ${typeFilter === type.toLowerCase() ? 'bg-light text-background font-medium' : 'bg-[#141414] text-light/70 border border-light/5 hover:bg-[#1A1A1A]'}`}
            >
              {type}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWines.map(wine => (
            <WineCard key={wine.id} wine={wine} />
          ))}
          
          {filteredWines.length === 0 && (
            <div className="col-span-full py-12 text-center text-light/50 font-light">
              Nenhum vinho encontrado com estes filtros.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
