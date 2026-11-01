import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HomePage from './pages/HomePage';
import QrContactModal from './components/ui/QrContactModal';
import ScrollToTop from './components/layout/ScrollToTop';
import LanguageSelector from './components/ui/LanguageSelector';

export default function App() {
  const { t } = useTranslation();
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="min-h-screen bg-[#f9f0ea] text-[#0c3321] flex flex-col font-sans selection:bg-[#0c3321] selection:text-[#f9f0ea]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#0c3321] text-[#f9f0ea] border-b border-[#a1a794]/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          
          <button 
            onClick={() => setCurrentView('home')}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
          >
            <img 
              src="/assets/brand/mountain-isotype.svg" 
              alt="Sach'a Isotipo Montaña" 
              className="h-7 w-auto object-contain filter drop-shadow transition-transform group-hover:scale-105"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </button>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wider uppercase">
            <button 
              onClick={() => setCurrentView('home')} 
              className={`hover:text-[#a1a794] transition-colors cursor-pointer ${currentView === 'home' ? 'text-[#a1a794] border-b border-[#a1a794]' : ''}`}
            >
              {t('nav.home')}
            </button>
            <a href="#lotes" className="hover:text-[#a1a794] transition-colors">
              {t('nav.lots')}
            </a>
            <button 
              onClick={() => setCurrentView('tokushoho')} 
              className={`hover:text-[#a1a794] transition-colors cursor-pointer ${currentView === 'tokushoho' ? 'text-[#a1a794] border-b border-[#a1a794]' : ''}`}
            >
              {t('nav.legal')}
            </button>
          </nav>

          {/* Acciones de Cabecera: Selector i18n + LINE Chat */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector />
            <button 
              onClick={() => setIsQrModalOpen(true)}
              className="px-4 py-2 rounded border border-[#a1a794]/40 hover:bg-white/10 text-xs font-bold tracking-wide transition-all flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              <span>{t('nav.contact')}</span>
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <LanguageSelector />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#f9f0ea] focus:outline-none"
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
        </div>

        {/* Menú Desplegable Móvil */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0c3321] border-b border-[#a1a794]/20 px-4 py-4 space-y-3 text-sm">
            <button 
              onClick={() => { setCurrentView('home'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left py-1 text-[#f9f0ea]"
            >
              {t('nav.home')}
            </button>
            <a 
              href="#lotes" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left py-1 text-[#f9f0ea]"
            >
              {t('nav.lots')}
            </a>
            <button 
              onClick={() => { setCurrentView('tokushoho'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left py-1 text-[#f9f0ea]"
            >
              {t('nav.legal')}
            </button>
            <button 
              onClick={() => { setIsQrModalOpen(true); setIsMobileMenuOpen(false); }}
              className="w-full py-2.5 mt-2 bg-[#f9f0ea] text-[#0c3321] font-bold rounded text-xs text-center"
            >
              {t('nav.contact')}
            </button>
          </div>
        )}
      </header>

      {/* CONTENIDO VISTA PRINCIPAL / COMPLIANCE */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <HomePage onOpenContact={() => setIsQrModalOpen(true)} />
        )}

        {currentView === 'tokushoho' && (
          <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
            <div className="border-b border-[#0c3321]/10 pb-4">
              <span className="text-xs font-mono text-[#a1a794] uppercase">Compliance Japón</span>
              <h1 className="text-3xl font-serif font-bold text-[#0c3321]">特定商取引法に基づく表記 (Tokushoho)</h1>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#0c3321]/10 shadow-sm space-y-4 text-xs leading-relaxed">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-b pb-2">
                <span className="font-bold">Vendedor:</span>
                <span className="sm:col-span-2">Sach'a Coffee Specialty SAS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-b pb-2">
                <span className="font-bold">Origen & Operación:</span>
                <span className="sm:col-span-2">Tapartó, Antioquia, Colombia / Tokio, Japón</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="font-bold">Contacto Directo:</span>
                <span className="sm:col-span-2">LINE Official Japan (@sachacoffee)</span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0c3321] text-[#f9f0ea] border-t border-[#a1a794]/20 py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <img 
                src="/assets/brand/logo-sacha.svg" 
                alt="Isotipo Sach'a" 
                className="h-6 w-auto object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <p className="text-xs text-[#f9f0ea]/70 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-[#a1a794] uppercase tracking-wider mb-2">{t('footer.nav_title')}</h4>
            <p><button onClick={() => setCurrentView('home')} className="hover:underline cursor-pointer">{t('nav.home')}</button></p>
            <p><a href="#lotes" className="hover:underline">{t('nav.lots')}</a></p>
            <p><button onClick={() => setCurrentView('tokushoho')} className="hover:underline cursor-pointer">{t('nav.legal')}</button></p>
          </div>

          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-[#a1a794] uppercase tracking-wider">{t('footer.contact_title')}</h4>
            <button 
              onClick={() => setIsQrModalOpen(true)}
              className="px-4 py-2 bg-[#f9f0ea] text-[#0c3321] rounded font-bold text-xs hover:bg-white transition-all cursor-pointer"
            >
              {t('footer.scan_qr')}
            </button>
          </div>

          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-[#a1a794] uppercase tracking-wider">{t('footer.social_title')}</h4>
            <div>
              <a 
                href="https://instagram.com/sachashopcol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-[#a1a794]/30 text-[#f9f0ea] hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-[#a1a794]" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@sachashopcol</span>
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-6xl mx-auto border-t border-[#f9f0ea]/10 mt-8 pt-6 text-center text-[10px] text-[#f9f0ea]/50 font-mono">
          © {new Date().getFullYear()} Sach'a Specialty Coffee. Colombia — Japón. {t('footer.rights')}
        </div>
      </footer>

      <QrContactModal isOpen={isQrModalOpen} onClose={() => setIsQrModalOpen(false)} />
      <ScrollToTop />
    </div>
  );
}