import Link from 'next/link';
import { Wine as WineIcon, Star } from 'lucide-react';
import { Wine } from '@/lib/data';

export function WineCard({ wine }: { wine: Wine }) {
  return (
    <Link 
      href={`/vinhos/${wine.id}`}
      className="group flex flex-col p-5 rounded-2xl bg-[#141414] border border-light/5 hover:bg-[#1A1A1A] transition-all"
    >
      <div className="flex gap-5">
        {/* Placeholder / Image Area */}
        <div className={`w-20 h-28 rounded-xl overflow-hidden relative flex-shrink-0 flex items-center justify-center ${wine.imagePlaceholder}`}>
          {wine.image ? (
            <img 
              src={wine.image} 
              alt={wine.imageAlt} 
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <WineIcon className="w-6 h-6 text-light/20" strokeWidth={1.5} />
          )}
        </div>
        
        <div className="flex flex-col py-1 flex-1">
          <div className="flex items-start justify-between mb-1">
            <div className="text-[10px] text-accent uppercase tracking-widest font-medium">
              {wine.category} • {wine.region}
            </div>
            {wine.isPremium && (
              <Star className="w-3.5 h-3.5 text-accent fill-accent/20" />
            )}
          </div>
          
          <h3 className="font-serif text-lg text-light leading-tight mb-2">{wine.name}</h3>
          
          <p className="text-xs text-light/50 font-light line-clamp-2 mb-auto leading-relaxed">
            {wine.summary}
          </p>
        </div>
      </div>
      
      {/* Keywords / Style */}
      <div className="mt-4 pt-4 border-t border-light/5 flex flex-wrap gap-2">
        {wine.keywords.slice(0, 3).map((keyword, idx) => (
          <span key={idx} className="text-[10px] text-light/40 uppercase tracking-wider px-2 py-1 bg-light/5 rounded-sm">
            {keyword}
          </span>
        ))}
      </div>
    </Link>
  );
}
