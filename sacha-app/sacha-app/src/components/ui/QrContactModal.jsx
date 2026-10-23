import React, { useState } from 'react';

export default function QrContactModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('all');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fade-in">
      {/* Contenedor del Modal */}
      <div 
        className="relative w-full max-w-2xl bg-marfil border border-verde-montana/20 rounded-xl shadow-2xl overflow-hidden transition-all my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera del Modal */}
        <div className="flex items-center justify-between px-6 py-4 bg-verde-montana text-marfil">
          <div className="flex items-center gap-3">
            <span className="text-musgo font-mono text-sm tracking-widest uppercase">最高峰追求</span>
            <span className="text-xs px-2 py-0.5 rounded border border-musgo/40 text-marfil">Sistemas de Contacto</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/10 text-marfil transition-colors focus:outline-none"
            aria-label="Cerrar modal"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cuerpo del Modal */}
        <div className="p-6 sm:p-8">
          <div className="text-center max-w-md mx-auto mb-6">
            <h3 className="text-2xl font-serif text-verde-montana font-bold">Conexión Directa</h3>
            <p className="text-sm text-verde-montana/70 mt-1">
              Escríbenos directamente a nuestras líneas de atención oficial en Japón y Colombia. Escanea el código QR o pulsa sobre él.
            </p>
          </div>

          {/* Selector para Mobile */}
          <div className="flex sm:hidden justify-center gap-2 mb-6 bg-verde-montana/5 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab === 'all' ? 'bg-verde-montana text-marfil' : 'text-verde-montana/70'}`}
            >
              Todos
            </button>
            <button
              onClick={() => setActiveTab('line')}
              className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab === 'line' ? 'bg-[#00B900] text-white' : 'text-verde-montana/70'}`}
            >
              LINE (JP)
            </button>
            <button
              onClick={() => setActiveTab('whatsapp')}
              className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab === 'whatsapp' ? 'bg-[#25D366] text-white' : 'text-verde-montana/70'}`}
            >
              WhatsApp
            </button>
          </div>

          {/* Rejilla de Códigos QR */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Opción LINE */}
            {(activeTab === 'all' || activeTab === 'line') && (
              <div className="flex flex-col items-center p-5 rounded-xl border border-verde-montana/10 bg-white shadow-sm hover:border-[#00B900]/50 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-[#00B900]"></div>
                  <span className="font-bold text-verde-montana text-sm">LINE Japan Official</span>
                  <span className="text-[10px] bg-verde-montana/5 text-verde-montana px-1.5 py-0.5 rounded font-mono">JPN</span>
                </div>
                
                {/* QR SVG LINE */}
                <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-inner my-2">
                  <svg className="w-36 h-36" viewBox="0 0 100 100">
                    <rect width="100" height="100" fill="#ffffff" />
                    <rect x="10" y="10" width="80" height="80" rx="12" fill="#00B900" />
                    <path d="M30 35h40v20H45l-10 8v-8h-5z" fill="#ffffff" />
                    <text x="50" y="48" fontSize="10" fontWeight="bold" fill="#00B900" textAnchor="middle">LINE QR</text>
                  </svg>
                </div>

                <p className="text-xs text-center text-verde-montana/70 mt-2 mb-4">
                  Atención preferencial para clientes en Tokio, Kioto y Osaka.
                </p>

                <a 
                  href="https://line.me" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 rounded-lg bg-[#00B900] hover:bg-[#009900] text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-2"
                >
                  <span>Abrir en LINE</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
              </div>
            )}

            {/* Opción WhatsApp */}
            {(activeTab === 'all' || activeTab === 'whatsapp') && (
              <div className="flex flex-col items-center p-5 rounded-xl border border-verde-montana/10 bg-white shadow-sm hover:border-[#25D366]/50 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-[#25D366]"></div>
                  <span className="font-bold text-verde-montana text-sm">WhatsApp Directo</span>
                  <span className="text-[10px] bg-verde-montana/5 text-verde-montana px-1.5 py-0.5 rounded font-mono">COL / INT</span>
                </div>
                
                {/* QR SVG WhatsApp */}
                <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-inner my-2">
                  <svg className="w-36 h-36" viewBox="0 0 100 100">
                    <rect width="100" height="100" fill="#ffffff" />
                    <rect x="10" y="10" width="80" height="80" rx="12" fill="#25D366" />
                    <path d="M35 30h30v30H50l-8 8v-8h-7z" fill="#ffffff" />
                    <text x="50" y="48" fontSize="9" fontWeight="bold" fill="#25D366" textAnchor="middle">WA QR</text>
                  </svg>
                </div>

                <p className="text-xs text-center text-verde-montana/70 mt-2 mb-4">
                  Contacto directo con el equipo de origen y ventas globales.
                </p>

                <a 
                  href="https://wa.me/573000000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 rounded-lg bg-[#25D366] hover:bg-[#1da851] text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-2"
                >
                  <span>Abrir en WhatsApp</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Pie del Modal */}
        <div className="px-6 py-3 bg-verde-montana/5 border-t border-verde-montana/10 text-center">
          <p className="text-[11px] text-verde-montana/60 font-mono">
            Horarios de atención: JST (Tokio) 09:00 - 18:00 | COT (Colombia) 08:00 - 17:00
          </p>
        </div>
      </div>
    </div>
  );
}