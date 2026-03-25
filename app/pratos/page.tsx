import { FloatingHeader } from '@/components/FloatingHeader';
import Link from 'next/link';
import { dishes } from '@/lib/data';

export default function PratosPage() {
  const categories = Array.from(new Set(dishes.map(d => d.category)));

  return (
    <main className="min-h-screen bg-background pb-24">
      <FloatingHeader />
      
      <div className="pt-28 px-6">
        <h1 className="font-serif text-4xl text-light mb-4">O Menu</h1>
        <p className="text-light/60 font-light mb-12">
          Escolha um prato para descobrir as nossas sugestões de harmonização.
        </p>

        <div className="space-y-12">
          {categories.map(category => {
            const categoryDishes = dishes.filter(d => d.category === category);
            
            return (
              <section key={category}>
                <h2 className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-6 flex items-center gap-4">
                  {category}
                  <span className="h-px flex-1 bg-accent/20" />
                </h2>
                
                <div className="space-y-4">
                  {categoryDishes.map(dish => (
                    <Link 
                      key={dish.id}
                      href={`/pratos/${dish.id}`}
                      className="block p-5 rounded-xl bg-[#141414] border border-light/5 hover:bg-[#1A1A1A] transition-colors"
                    >
                      <h3 className="font-serif text-xl text-light mb-2">{dish.name}</h3>
                      <p className="text-sm text-light/60 font-light leading-relaxed line-clamp-2">
                        {dish.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}

