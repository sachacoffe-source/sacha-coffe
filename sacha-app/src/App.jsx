import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import QrContactModal from './components/ui/QrContactModal';
import ScrollToTop from './components/layout/ScrollToTop';

export default function App() {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'tokushoho'

  return (
    <div className="min-h-screen bg-[#f9f0ea] text-[#0c3321] flex flex-col font-sans selection:bg-[#0c3321] selection:text-[#f9f0ea]">
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#0c3321] text-[#f9f0ea] border-b border-[#a1a794]/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          
          {/* Logo Brand con el Isotipo Oficial de la Montaña */}
          <button 
            onClick={() => setCurrentView('home')}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
          >
            {/* Isotipo Oficial en SVG desde la ruta publica */}
            <img 
              src="/assets/brand/mountain-isotype.svg" 
              alt="Sach'a Isotipo Montaña y Tagline" 
              className="h-7 w-auto object-contain filter drop-shadow transition-transform group-hover:scale-105"
              onError={(e) => {
                // Fallback en caso de que aún no esté disponible el archivo SVG
                e.target.style.display = 'none';
              }}
            />

          </button>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wider uppercase">
            <button 
              onClick={() => setCurrentView('home')} 
              className={`hover:text-[#a1a794] transition-colors cursor-pointer ${currentView === 'home' ? 'text-[#a1a794] border-b border-[#a1a794]' : ''}`}
            >
              Inicio
            </button>
            <a href="#lotes" className="hover:text-[#a1a794] transition-colors">Lotes Activos</a>
            <button 
              onClick={() => setCurrentView('tokushoho')} 
              className={`hover:text-[#a1a794] transition-colors cursor-pointer ${currentView === 'tokushoho' ? 'text-[#a1a794] border-b border-[#a1a794]' : ''}`}
            >
              Legal Japón (特定商取引法)
            </button>
          </nav>

          {/* Botón Acción QR Modal */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => setIsQrModalOpen(true)}
              className="px-4 py-2 rounded border border-[#a1a794]/40 hover:bg-white/10 text-xs font-bold tracking-wide transition-all flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
              <span>Contacto QR</span>
            </button>
          </div>

          {/* Botón Menú Mobile */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#f9f0ea] focus:outline-none"
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desplegable Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0c3321] border-b border-[#a1a794]/20 px-4 py-4 space-y-3 text-sm">
            <button 
              onClick={() => { setCurrentView('home'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left py-1 text-[#f9f0ea]"
            >
              Inicio
            </button>
            <a 
              href="#lotes" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left py-1 text-[#f9f0ea]"
            >
              Lotes Activos
            </a>
            <button 
              onClick={() => { setCurrentView('tokushoho'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left py-1 text-[#f9f0ea]"
            >
              Legal Japón (特定商取引法)
            </button>
            <button 
              onClick={() => { setIsQrModalOpen(true); setIsMobileMenuOpen(false); }}
              className="w-full py-2.5 mt-2 bg-[#f9f0ea] text-[#0c3321] font-bold rounded text-xs text-center"
            >
              Contacto QR (LINE / WhatsApp)
            </button>
          </div>
        )}
      </header>

      {/* CONTENIDO DINÁMICO */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <HomePage onOpenContact={() => setIsQrModalOpen(true)} />
        )}

        {currentView === 'tokushoho' && (
          <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
            <div className="border-b border-[#0c3321]/10 pb-4">
              <span className="text-xs font-mono text-[#a1a794] uppercase">Compliance Japón</span>
              <h1 className="text-3xl font-serif font-bold text-[#0c3321]">特定商取引法に基づく表記 (Tokushoho)</h1>
              <p className="text-xs text-[#0c3321]/60 mt-1">
                Especificaciones legales para transacciones comerciales electrónicas en territorio japonés.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#0c3321]/10 shadow-sm space-y-4 text-xs leading-relaxed">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-b pb-2">
                <span className="font-bold">Vendedor / Distributor:</span>
                <span className="sm:col-span-2">Sach'a Coffee Specialty SAS / Sub-agencia Japón</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-b pb-2">
                <span className="font-bold">Dirección de Operación:</span>
                <span className="sm:col-span-2">Tokio, Chiyoda-ku / Fincas Aliadas Huila & Quindío, Colombia</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-b pb-2">
                <span className="font-bold">Métodos de Pago:</span>
                <span className="sm:col-span-2">Amazon Pay JPN, Tarjetas de Crédito (Visa, Mastercard, JCB), LINE Pay</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="font-bold">Soporte Directo:</span>
                <span className="sm:col-span-2">Disponible mediante QR oficial (LINE Official & WhatsApp)</span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0c3321] text-[#f9f0ea] border-t border-[#a1a794]/20 py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img 
                src="/assets/brand/logo-sacha.svg" 
                alt="Isotipo Sach'a" 
                className="h-6 w-auto object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <p className="text-xs text-[#f9f0ea]/70 leading-relaxed max-w-sm">
              Conectando la riqueza de las montañas colombianas con la filosofía japonesa Kaizen. Transparencia, origen y comunidad.
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-[#a1a794] uppercase tracking-wider mb-2">Navegación</h4>
            <p><button onClick={() => setCurrentView('home')} className="hover:underline cursor-pointer">Inicio</button></p>
            <p><a href="#lotes" className="hover:underline">Lotes Activos</a></p>
            <p><button onClick={() => setCurrentView('tokushoho')} className="hover:underline cursor-pointer">Cumplimiento Legal Japón</button></p>
          </div>

          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-[#a1a794] uppercase tracking-wider">Contacto Rápido</h4>
            <button 
              onClick={() => setIsQrModalOpen(true)}
              className="px-4 py-2 bg-[#f9f0ea] text-[#0c3321] rounded font-bold text-xs hover:bg-white transition-all cursor-pointer"
            >
              Escanear QR (LINE / WA)
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-[#f9f0ea]/10 mt-8 pt-6 text-center text-[10px] text-[#f9f0ea]/50 font-mono">
          © {new Date().getFullYear()} Sach'a Specialty Coffee. Colombia — Japón. Todos los derechos reservados.
        </div>
      </footer>

      {/* COMPONENTES GLOBALES DE INTERFAZ */}
      <QrContactModal isOpen={isQrModalOpen} onClose={() => setIsQrModalOpen(false)} />
      <ScrollToTop />
    </div>
  );
}