'use client';

import { useState } from 'react';
import { Wine, Utensils, LogOut } from 'lucide-react';
import { wines as staticWines, dishes as staticDishes } from '@/lib/data';

export default function AdminPage() {
  const [session, setSession] = useState<any>({ user: { email: 'admin@salavinica.pt' } }); // Mock session for static demo
  const [activeTab, setActiveTab] = useState<'wines' | 'dishes'>('wines');

  const handleLogout = () => {
    setSession(null);
  };

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-md p-8 rounded-3xl bg-[#141414] border border-light/5">
          <h1 className="font-serif text-3xl text-center mb-8">Admin Login</h1>
          <form onSubmit={(e) => { e.preventDefault(); setSession({ user: { email: 'admin@salavinica.pt' } }); }} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-light/50 mb-2">Email</label>
              <input 
                type="email" 
                defaultValue="admin@salavinica.pt"
                className="w-full bg-background border border-light/10 rounded-xl px-4 py-3 text-light focus:outline-none focus:border-light/30 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-light/50 mb-2">Password</label>
              <input 
                type="password" 
                defaultValue="password"
                className="w-full bg-background border border-light/10 rounded-xl px-4 py-3 text-light focus:outline-none focus:border-light/30 transition-colors"
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-light text-background rounded-xl px-4 py-3 font-medium hover:bg-light/90 transition-colors mt-6"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto pb-32">
      <header className="flex items-center justify-between mb-12 py-4 border-b border-light/5">
        <h1 className="font-serif text-2xl">Sala Vínica Admin</h1>
        <button onClick={handleLogout} className="flex items-center gap-2 text-light/50 hover:text-light transition-colors text-sm">
          <LogOut size={16} /> Sair
        </button>
      </header>

      <div className="flex gap-2 mb-8">
        <button 
          onClick={() => setActiveTab('wines')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm transition-colors ${activeTab === 'wines' ? 'bg-light text-background font-medium' : 'bg-[#141414] text-light/70 border border-light/5 hover:bg-[#1A1A1A]'}`}
        >
          <Wine size={16} /> Vinhos
        </button>
        <button 
          onClick={() => setActiveTab('dishes')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm transition-colors ${activeTab === 'dishes' ? 'bg-light text-background font-medium' : 'bg-[#141414] text-light/70 border border-light/5 hover:bg-[#1A1A1A]'}`}
        >
          <Utensils size={16} /> Pratos
        </button>
      </div>

      {activeTab === 'wines' ? <AdminWines /> : <AdminDishes />}
    </div>
  );
}

function AdminWines() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-serif text-xl">Gestão de Vinhos</h2>
        <button className="bg-light text-background px-4 py-2 rounded-lg text-xs tracking-widest uppercase font-medium hover:bg-light/90 transition-colors">
          + Novo Vinho
        </button>
      </div>

      <div className="bg-[#141414] rounded-2xl border border-light/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-light/5 text-light/50 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">Nome</th>
                <th className="px-6 py-4 font-medium">Categoria</th>
                <th className="px-6 py-4 font-medium">Região</th>
                <th className="px-6 py-4 font-medium">Estilo</th>
                <th className="px-6 py-4 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-light/5">
              {staticWines.map(wine => (
                <tr key={wine.id} className="hover:bg-[#1A1A1A] transition-colors">
                  <td className="px-6 py-4 font-medium text-light">{wine.name}</td>
                  <td className="px-6 py-4 text-light/70">{wine.category}</td>
                  <td className="px-6 py-4 text-light/70">{wine.region}</td>
                  <td className="px-6 py-4 text-light/70">{wine.style}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-accent hover:text-accent/80 text-sm transition-colors">Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function AdminDishes() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-serif text-xl">Gestão de Pratos</h2>
        <button className="bg-light text-background px-4 py-2 rounded-lg text-xs tracking-widest uppercase font-medium hover:bg-light/90 transition-colors">
          + Novo Prato
        </button>
      </div>

      <div className="bg-[#141414] rounded-2xl border border-light/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-light/5 text-light/50 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">Nome</th>
                <th className="px-6 py-4 font-medium">Categoria</th>
                <th className="px-6 py-4 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-light/5">
              {staticDishes.map(dish => (
                <tr key={dish.id} className="hover:bg-[#1A1A1A] transition-colors">
                  <td className="px-6 py-4 font-medium text-light">{dish.name}</td>
                  <td className="px-6 py-4 text-light/70">{dish.category}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-accent hover:text-accent/80 text-sm transition-colors">Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
