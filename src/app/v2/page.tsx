export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#0A0A0A] flex flex-col">

      {/* Navbar */}
      <header className="w-full border-b border-[#0A0A0A]/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">Logo</div>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li>Produto</li>
            <li>Preços</li>
            <li>Sobre</li>
          </ul>
          <div className="flex items-center gap-3">
            <button className="text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#0A0A0A]/5 transition-colors">
              Entrar
            </button>
            <button className="text-sm font-medium px-4 py-2 rounded-lg bg-[#0A0A0A] text-[#F5EFE6] hover:bg-[#0A0A0A]/80 transition-colors">
              Começar
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex-1 flex items-center justify-center">
        <section className="max-w-4xl mx-auto px-6 py-24 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border border-[#0A0A0A]/20 mb-6">
            Novidade
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
            Título principal
            <br />
            <span className="opacity-40">da sua proposta</span>
          </h1>
          <p className="text-lg md:text-xl text-[#0A0A0A]/60 max-w-2xl mx-auto mb-10">
            Subtítulo que descreve brevemente o produto e o valor entregue ao
            usuário em uma ou duas linhas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto text-base font-semibold px-8 py-3 rounded-xl bg-[#0A0A0A] text-[#F5EFE6] hover:bg-[#0A0A0A]/80 transition-colors">
              Comece grátis
            </button>
            <button className="w-full sm:w-auto text-base font-semibold px-8 py-3 rounded-xl border border-[#0A0A0A]/20 hover:bg-[#0A0A0A]/5 transition-colors">
              Ver demo
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#0A0A0A]/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#0A0A0A]/50">
          <span>© 2026 Nome do Produto. Todos os direitos reservados.</span>
          <ul className="flex items-center gap-6">
            <li>Privacidade</li>
            <li>Termos</li>
            <li>Contato</li>
          </ul>
        </div>
      </footer>

    </div>
  );
}
