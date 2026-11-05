import React from 'react';

export default function QrContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#f9f0ea] border border-[#0c3321]/20 rounded-xl shadow-2xl overflow-hidden transition-all my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera del Modal */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0c3321] text-[#f9f0ea]">
          <div className="flex items-center gap-2">
            <span className="text-[#a1a794] font-mono text-xs tracking-widest uppercase">最高峰追求</span>
            <span className="text-[10px] px-2 py-0.5 rounded border border-[#a1a794]/40 text-[#f9f0ea]">Canales Oficiales</span>
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

        {/* Cuerpo del Modal */}
        <div className="p-6 text-center space-y-6">
          <div>
            <h3 className="text-2xl font-serif text-[#0c3321] font-bold">Habla con nosotros</h3>
            <p className="text-xs text-[#0c3321]/70 mt-1 leading-relaxed">
              Escanea el código QR desde tu app preferida o pulsa el botón para abrir el chat oficial con nuestro equipo.
            </p>
          </div>

          {/* Grilla con los dos códigos QR */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* OPCIÓN 1: LINE (JAPÓN 🇯🇵) */}
            <div className="flex flex-col items-center p-5 rounded-xl border border-[#00B900]/30 bg-white shadow-sm hover:border-[#00B900]/60 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">🇯🇵</span>
                <span className="font-bold text-[#0c3321] text-sm">Sach'a Official LINE</span>
              </div>

              {/* Imagen del QR LINE */}
              <div className="p-3 bg-[#f9f0ea] rounded-lg border border-[#0c3321]/10 my-2 flex items-center justify-center">
                <img 
                  src="/assets/brand/qr-line.jpeg" 
                  alt="Código QR Oficial LINE Sach'a" 
                  className="w-40 h-40 object-contain rounded"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.parentElement.innerHTML = '<div class="w-40 h-40 flex items-center justify-center text-[10px] text-[#0c3321]/50 text-center font-mono p-2">qr-line.jpeg no encontrado en /public/assets/brand/</div>';
                  }}
                />
              </div>

              {/* Texto especificado para LINE */}
              <p className="text-[11px] text-[#0c3321]/70 my-2 min-h-[32px] flex items-center justify-center text-center">
                Atención en japonés sobre lotes activos, tueste y envíos.
              </p>

              <a 
                href="https://line.me/ti/p/lRXYvqbSM9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-[#00B900] hover:bg-[#009900] text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-2 cursor-pointer mt-auto"
              >
                <span>Abrir en LINE</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>

            {/* OPCIÓN 2: WHATSAPP (COLOMBIA 🇨🇴) */}
            <div className="flex flex-col items-center p-5 rounded-xl border border-[#25D366]/30 bg-white shadow-sm hover:border-[#25D366]/60 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">🇨🇴</span>
                <span className="font-bold text-[#0c3321] text-sm">Sach'a Official WhatsApp</span>
              </div>

              {/* Imagen del QR WhatsApp */}
              <div className="p-3 bg-[#f9f0ea] rounded-lg border border-[#0c3321]/10 my-2 flex items-center justify-center">
                <img 
                  src="/assets/brand/qr-wpp.png" 
                  alt="Código QR Oficial WhatsApp Sach'a" 
                  className="w-40 h-40 object-contain rounded"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.parentElement.innerHTML = '<div class="w-40 h-40 flex items-center justify-center text-[10px] text-[#0c3321]/50 text-center font-mono p-2">qr-wpp.png no encontrado en /public/assets/brand/</div>';
                  }}
                />
              </div>

              {/* Texto especificado para WhatsApp */}
              <p className="text-[11px] text-[#0c3321]/70 my-2 min-h-[32px] flex items-center justify-center text-center">
                Atención en español sobre lotes activos, tueste y envíos.
              </p>

              <a 
                href="https://wa.me/573143250714" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#1da851] text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-2 cursor-pointer mt-auto"
              >
                <span>Abrir en WhatsApp</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>

          </div>
        </div>

        {/* Footer del Modal */}
        <div className="px-6 py-3 bg-[#0c3321]/5 border-t border-[#0c3321]/10 text-center">
          <p className="text-[10px] text-[#0c3321]/60 font-mono">
            Soporte Directo: JST (Tokio) 09:00 - 18:00 | COT (Colombia) 08:00 - 17:00
          </p>
        </div>
      </div>
    </div>
  );
}