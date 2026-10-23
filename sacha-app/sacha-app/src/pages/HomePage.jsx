import React, { useState, useEffect, useRef } from 'react';

// Custom Hook para detectar cuando un elemento entra al viewport al hacer scroll
function useOnScreen(ref, rootMargin = "-80px") {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);
  return isIntersecting;
}

export default function HomePage({ onOpenContact }) {
  const [selectedLot, setSelectedLot] = useState(null);

  // Referencias para la revelación reactiva al hacer scroll
  const philosophyRef = useRef(null);
  const lotsRef = useRef(null);
  const timerRef = useRef(null);
  const testimonialsRef = useRef(null);

  const isPhilosophyVisible = useOnScreen(philosophyRef);
  const isLotsVisible = useOnScreen(lotsRef);
  const isTimerVisible = useOnScreen(timerRef);
  const isTestimonialsVisible = useOnScreen(testimonialsRef);

  // Estado del Temporizador V60 Interactivo
  const [timerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    if (timerRunning) {
      interval = setInterval(() => setSeconds((sec) => sec + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  // Datos de lotes activos (Ejemplo Lote 202601 - Finca La Esperanza)
  const activeLots = [
    {
      id: "LOTE 202601",
      farm: "Finca La Esperanza",
      region: "Huila, Colombia",
      altitude: "1,850 m.s.n.m.",
      process: "Lavado Anaeróbico",
      variety: "Geisha",
      score: "88.5 SCA",
      notes: ["Flor de Jazmín", "Mandarina", "Miel de Abeja"],
      image: "/assets/images/coffee-bag-geisha.png",
    },
    {
      id: "LOTE 202602",
      farm: "El Mirador",
      region: "Quindío, Colombia",
      altitude: "1,900 m.s.n.m.",
      process: "Natural Fermentado",
      variety: "Pink Bourbon",
      score: "89.0 SCA",
      notes: ["Cereza Madura", "Cacao 70%", "Vino Rosado"],
      image: "/assets/images/coffee-bag-geisha.png",
    }
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION CON FOTO REINANTE Y FOG ATMOSPHERE */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0c3321] text-[#f9f0ea] px-4 sm:px-8 py-20 overflow-hidden">
        {/* Imagen de fondo de la finca en Huila con neblina */}
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay">
          <img 
            src="/assets/images/finca-huila-fog.jpg" 
            alt="Finca La Esperanza Huila con Neblina" 
            className="w-full h-full object-cover filter contrast-105"
          />
        </div>

        {/* Gradiente radial sutil para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c3321]/80 via-[#0c3321]/60 to-[#0c3321] z-0"></div>

        <div className="max-w-4xl mx-auto text-center z-10 space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#a1a794]/40 bg-[#a1a794]/10 text-xs text-[#a1a794] uppercase tracking-widest font-mono">
            <span>最高峰追求</span>
            <span>•</span>
            <span>Origen Colombiano x Filosofía Japonesa</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-[#f9f0ea] leading-tight">
            Café de Especialidad <br/>
            <span className="italic font-normal text-[#a1a794]">Sin Rodeos ni Artificios</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#f9f0ea]/85 leading-relaxed font-light">
            Sach'a conecta la riqueza de las montañas andinas a 1,850 m.s.n.m. con la precisión del principio japonés <strong>Kaizen</strong> (改善). Trazabilidad total y contacto directo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#f9f0ea] text-[#0c3321] font-bold text-sm tracking-wide hover:bg-white transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Acceso Directo QR (LINE / WA)</span>
            </button>
            <a 
              href="#lotes"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-[#f9f0ea]/30 text-[#f9f0ea] hover:bg-white/10 text-sm font-medium text-center transition-all"
            >
              Explorar Lotes Activos
            </a>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY KAIZEN SECTION (SCROLL REVEAL) */}
      <section 
        ref={philosophyRef} 
        className={`py-20 px-4 sm:px-8 bg-[#f9f0ea] transition-all duration-1000 ${isPhilosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-white border border-[#0c3321]/10 space-y-3 shadow-sm hover:border-[#0c3321]/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#0c3321]/5 flex items-center justify-center text-[#0c3321] font-mono font-bold">01</div>
            <h3 className="text-xl font-bold font-serif text-[#0c3321]">Transparencia Verificable</h3>
            <p className="text-sm text-[#0c3321]/70 leading-relaxed">
              Cada lote cuenta con altitud exacta, método de beneficio anaeróbico y nota de cata certificada por catadores Q-Grader.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-[#0c3321]/10 space-y-3 shadow-sm hover:border-[#0c3321]/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#0c3321]/5 flex items-center justify-center text-[#0c3321] font-mono font-bold">02</div>
            <h3 className="text-xl font-bold font-serif text-[#0c3321]">Mejora Continua (改善)</h3>
            <p className="text-sm text-[#0c3321]/70 leading-relaxed">
              Optimizamos el perfil de tueste y empaque hermético para asegurar la máxima frescura desde Huila hasta Tokio.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-[#0c3321]/10 space-y-3 shadow-sm hover:border-[#0c3321]/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#0c3321]/5 flex items-center justify-center text-[#0c3321] font-mono font-bold">03</div>
            <h3 className="text-xl font-bold font-serif text-[#0c3321]">Comunidad de Co-creación</h3>
            <p className="text-sm text-[#0c3321]/70 leading-relaxed">
              El consumidor en Japón vota y participa en la selección de los próximos micro-lotes a importar desde Colombia.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ACTIVE LOTS SECTION CON TARJETAS DE MOCKUPS 3D */}
      <section 
        id="lotes" 
        ref={lotsRef} 
        className={`py-20 px-4 sm:px-8 bg-white border-t border-b border-[#0c3321]/10 transition-all duration-1000 ${isLotsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#a1a794] uppercase tracking-widest">Microlotes Disponibles</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0c3321] mt-1">Lotes en Circulación</h2>
            </div>
            <button 
              onClick={onOpenContact}
              className="text-sm font-bold text-[#0c3321] underline underline-offset-4 hover:text-[#164830] cursor-pointer"
            >
              Consultar disponibilidad vía QR &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeLots.map((lot) => (
              <div 
                key={lot.id}
                className="rounded-xl border border-[#0c3321]/15 p-6 bg-[#f9f0ea]/50 hover:bg-[#f9f0ea] transition-all flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md"
              >
                <div className="space-y-4">
                  {/* Vista previa del empaque físico 3D */}
                  <div className="w-full h-52 bg-[#0c3321]/5 rounded-lg overflow-hidden flex items-center justify-center p-4 border border-[#0c3321]/5">
                    <img 
                      src={lot.image} 
                      alt={`Bolsa de Café ${lot.farm}`} 
                      className="h-full object-contain filter drop-shadow-md hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#0c3321] text-[#f9f0ea] font-medium">{lot.id}</span>
                    <span className="text-xs font-bold text-[#0c3321] bg-[#a1a794]/20 px-2.5 py-1 rounded-full">{lot.score}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#0c3321]">{lot.farm}</h3>
                    <p className="text-xs text-[#0c3321]/60 mt-0.5">{lot.region} • {lot.altitude}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div className="p-2 rounded bg-white border border-[#0c3321]/10">
                      <span className="block text-[#0c3321]/50 text-[10px]">PROCESO</span>
                      <span className="font-semibold text-[#0c3321]">{lot.process}</span>
                    </div>
                    <div className="p-2 rounded bg-white border border-[#0c3321]/10">
                      <span className="block text-[#0c3321]/50 text-[10px]">VARIEDAD</span>
                      <span className="font-semibold text-[#0c3321]">{lot.variety}</span>
                    </div>
                  </div>

                  <div>
                    <span className="block text-[10px] text-[#0c3321]/50 mb-1.5 uppercase tracking-wider">Notas de Cata</span>
                    <div className="flex flex-wrap gap-1.5">
                      {lot.notes.map((note, idx) => (
                        <span key={idx} className="text-xs px-2.5 py-1 rounded-full bg-white text-[#0c3321] border border-[#0c3321]/10 font-medium">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedLot(lot)}
                  className="w-full py-2.5 rounded bg-[#0c3321] text-[#f9f0ea] text-xs font-bold hover:bg-[#164830] transition-colors cursor-pointer"
                >
                  Ver Ficha de Trazabilidad
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN INTERACTIVA: RITUAL TIMER V60 CON FOTO RITUAL */}
      <section 
        ref={timerRef}
        className={`py-20 px-4 sm:px-8 bg-[#0c3321] text-[#f9f0ea] transition-all duration-1000 ${isTimerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-mono text-[#a1a794] uppercase tracking-widest">Ritual de Extracción</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f9f0ea]">Guía & Temporizador V60</h2>
            <p className="text-sm text-[#f9f0ea]/80 leading-relaxed font-light">
              La extracción precisa resalta la flor de jazmín y acidez cítrica del Lote 202601. Acompaña tu preparación con nuestro temporizador de vertido recomendado.
            </p>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-4">
              <div className="text-center">
                <span className="text-5xl font-mono font-bold tracking-wider text-[#f9f0ea]">
                  {Math.floor(seconds / 60).toString().padStart(2, '0')}:{(seconds % 60).toString().padStart(2, '0')}
                </span>
                <span className="block text-xs font-mono text-[#a1a794] uppercase tracking-widest mt-2">
                  {seconds < 30 ? '01. Pre-infusión / Blooming (40g agua)' : seconds < 90 ? '02. Primer Vertido Circular (120g agua)' : '03. Extracción Final (250g agua)'}
                </span>
              </div>

              <div className="flex gap-3 pt-2">
                <button 
                  onClick={() => setTimerRunning(!timerRunning)}
                  className="flex-1 py-3 rounded bg-[#f9f0ea] text-[#0c3321] font-bold text-xs hover:bg-white transition-colors cursor-pointer"
                >
                  {timerRunning ? 'Pausar' : 'Iniciar Ritual'}
                </button>
                <button 
                  onClick={() => { setTimerRunning(false); setSeconds(0); }}
                  className="px-4 py-3 rounded border border-[#f9f0ea]/30 text-[#f9f0ea] font-bold text-xs hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Reiniciar
                </button>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-[#a1a794]/20 shadow-2xl h-80 sm:h-96">
            <img 
              src="/assets/images/brew-v60-pour.jpg" 
              alt="Ritual de Extracción V60 Sach'a" 
              className="w-full h-full object-cover filter contrast-105"
            />
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION (SCROLL REVEAL) */}
      <section 
        ref={testimonialsRef}
        className={`py-20 px-4 sm:px-8 bg-[#f9f0ea] transition-all duration-1000 ${isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-[#a1a794] uppercase tracking-widest">Experiencias Verificadas</span>
            <h2 className="text-3xl font-serif font-bold text-[#0c3321]">Voces de nuestra comunidad</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-white border border-[#0c3321]/10 space-y-4 shadow-sm">
              <p className="text-sm text-[#0c3321]/80 italic">
                "La claridad del perfil de sabor del Geisha de Huila es impresionante. Escanear el QR y poder hablar directamente sobre el tostado me da total seguridad."
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div className="w-8 h-8 rounded-full bg-[#0c3321] text-[#f9f0ea] flex items-center justify-center font-bold text-xs">KT</div>
                <div>
                  <p className="text-xs font-bold text-[#0c3321]">Kenji Takahashi</p>
                  <p className="text-[10px] text-[#0c3321]/50">Barista & Designer — Tokio, Japón</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#0c3321]/10 space-y-4 shadow-sm">
              <p className="text-sm text-[#0c3321]/80 italic">
                "Saber exactamente de qué finca viene el lote y el puntaje SCA real sin rodeos comerciales marca la diferencia para quienes amamos el filtro V60."
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div className="w-8 h-8 rounded-full bg-[#0c3321] text-[#f9f0ea] flex items-center justify-center font-bold text-xs">SL</div>
                <div>
                  <p className="text-xs font-bold text-[#0c3321]">Sofia López</p>
                  <p className="text-[10px] text-[#0c3321]/50">Coffee Enthusiast — Medellín, Colombia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL DETALLE DE TRAZABILIDAD */}
      {selectedLot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#f9f0ea] max-w-lg w-full rounded-xl p-6 border border-[#0c3321]/20 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#0c3321]/10 pb-3">
              <h3 className="font-serif font-bold text-xl text-[#0c3321]">{selectedLot.farm}</h3>
              <button onClick={() => setSelectedLot(null)} className="text-sm font-bold text-[#0c3321] p-1 cursor-pointer">✕</button>
            </div>
            <p className="text-xs text-[#0c3321]/80">
              Lote importado con registro unificado y cadena de custodia desde {selectedLot.region}. Cumple con todas las normativas internacionales de inocuidad y la regulación Tokushoho.
            </p>
            <div className="p-4 bg-white rounded-lg border border-[#0c3321]/10 text-xs space-y-2">
              <div className="flex justify-between"><span>Puntaje SCA:</span><span className="font-bold">{selectedLot.score}</span></div>
              <div className="flex justify-between"><span>Proceso:</span><span className="font-bold">{selectedLot.process}</span></div>
              <div className="flex justify-between"><span>Variedad:</span><span className="font-bold">{selectedLot.variety}</span></div>
              <div className="flex justify-between"><span>Altitud:</span><span className="font-bold">{selectedLot.altitude}</span></div>
            </div>
            <button 
              onClick={() => { setSelectedLot(null); onOpenContact(); }}
              className="w-full py-2.5 bg-[#0c3321] text-[#f9f0ea] rounded font-bold text-xs cursor-pointer hover:bg-[#164830] transition-colors"
            >
              Pedir este Lote por WhatsApp / LINE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}