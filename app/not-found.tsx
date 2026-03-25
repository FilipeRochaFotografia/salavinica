export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-light p-6">
      <h2 className="font-serif text-3xl mb-4">Página Não Encontrada</h2>
      <p className="text-light/70 mb-8">A página que procura não existe.</p>
      <a href="/" className="bg-light text-background px-6 py-3 rounded-xl font-medium hover:bg-light/90 transition-colors">
        Voltar ao Início
      </a>
    </div>
  );
}