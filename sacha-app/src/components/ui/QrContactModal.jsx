import React from 'react';
import { useTranslation } from 'react-i18next';

export default function QrContactModal({ isOpen, onClose }) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-[#f9f0ea] border border-[#0c3321]/20 rounded-xl shadow-2xl overflow-hidden transition-all my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 bg-[#0c3321] text-[#f9f0ea]">
          <div className="flex items-center gap-2">
            <span className="text-[#a1a794] font-mono text-xs tracking-widest uppercase">最高峰追求</span>
            <span className="text-[10px] px-2 py-0.5 rounded border border-[#a1a794]/40 text-[#f9f0ea]">LINE Official</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/10 text-[#f9f0ea] transition-colors focus:outline-none cursor-pointer"
            aria-label="Cerrar modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 text-center space-y-4">
          <div>
            <h3 className="text-2xl font-serif text-[#0c3321] font-bold">¿Hablamos directamente?</h3>
            <p className="text-xs text-[#0c3321]/70 mt-1 leading-relaxed">
              Escanea el código QR o pulsa el botón para abrir el chat oficial en LINE con nuestro equipo.
            </p>
          </div>

          <div className="flex flex-col items-center p-5 rounded-xl border border-[#00B900]/30 bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00B900]"></div>
              <span className="font-bold text-[#0c3321] text-sm">Sach'a Official LINE</span>
              <span className="text-[9px] bg-[#00B900]/10 text-[#00B900] px-1.5 py-0.5 rounded font-mono font-bold">JPN / COL</span>
            </div>

            <div className="p-3 bg-[#f9f0ea] rounded-lg border border-[#0c3321]/10 my-2 flex items-center justify-center">
              <img 
                src="/assets/brand/qr-line.jpg" 
                alt="Código QR Oficial LINE Sach'a" 
                className="w-40 h-40 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.parentElement.innerHTML = `
                    <div class="w-40 h-40 bg-white p-2 rounded flex flex-col items-center justify-center border border-[#00B900]/40 text-center">
                      <svg class="w-20 h-20 text-[#00B900]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 5.58 2 10c0 2.5 1.5 4.7 3.8 6.1L5 19l3.4-1.1c1.1.4 2.3.6 3.6.6 5.52 0 10-3.58 10-8s-4.48-8-10-8z"/>
                      </svg>
                      <span class="text-[9px] font-mono text-[#0c3321]/70 mt-1">Sach'a LINE Official</span>
                    </div>
                  `;
                }}
              />
            </div>

            <p className="text-[11px] text-[#0c3321]/60 mb-3">
              Atención en español y japonés sobre lotes activos, tueste y envíos.
            </p>

            <a 
              href="https://line.me/ti/p/lRXYvqbSM9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-lg bg-[#00B900] hover:bg-[#009900] text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t('hero.cta_line')}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="px-6 py-3 bg-[#0c3321]/5 border-t border-[#0c3321]/10 text-center">
          <p className="text-[10px] text-[#0c3321]/60 font-mono">
            Soporte Directo: JST (Tokio) 09:00 - 18:00 | COT (Colombia) 08:00 - 17:00
          </p>
        </div>
      </div>
    </div>
  );
}