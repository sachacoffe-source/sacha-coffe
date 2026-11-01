import React, { useState, useEffect, useRef } from 'react';
import DripBoxCanvas from '../components/ui/DripBoxCanvas';

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

  const philosophyRef = useRef(null);
  const lotsRef = useRef(null);
  const timerRef = useRef(null);

  const isPhilosophyVisible = useOnScreen(philosophyRef);
  const isLotsVisible = useOnScreen(lotsRef);
  const isTimerVisible = useOnScreen(timerRef);

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

  const activeLots = [
    {
      id: "LOTE SL-28",
      farm: "Finca Villa Sol",
      producer: "Juan Serna",
      region: "Tapartó, Antioquia, Colombia",
      process: "Natural",
      variety: "SL-28",
      format: "Box of 7 Drip Coffee Bags",
      score: "Especialidad Tapartó",
      notes: ["Sweet Chocolate", "Tropical Fruits", "Red Fruits", "Yellow Fruits"],
    }
  ];

  return (
    <div className="w-full font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0c3321] text-[#f9f0ea] px-4 sm:px-8 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay pointer-events-none">
          <img 
            src="/assets/images/finca-huila-fog.jpg" 
            alt="Montañas Cafeteras de Colombia con Neblina" 
            className="w-full h-full object-cover filter contrast-105"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0c3321]/80 via-[#0c3321]/60 to-[#0c3321] z-0"></div>

        <div className="max-w-4xl mx-auto text-center z-10 space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#a1a794]/40 bg-[#a1a794]/10 text-xs text-[#a1a794] uppercase tracking-widest font-mono">
            <span>改善</span>
            <span>•</span>
            <span>De las montañas colombianas a tu taza en Tokio</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-[#f9f0ea] leading-tight">
            Café de Especialidad <br/>
            <span className="italic font-normal text-[#a1a794]">El Primer Acto de Maestría del Día</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#f9f0ea]/85 leading-relaxed font-light">
            Sach'a es el vínculo honesto entre quien cultiva con rigor en las montañas de Colombia y quien prepara con presencia e intención en Tokio. Una cadena justa, transparente y sin atajos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#f9f0ea] text-[#0c3321] font-bold text-sm tracking-wide hover:bg-white transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Acceso Directo QR (LINE Official)</span>
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

      {/* 2. PHILOSOPHY SECTION */}
      <section 
        ref={philosophyRef} 
        className={`py-20 px-4 sm:px-8 bg-[#f9f0ea] transition-all duration-1000 ${isPhilosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-white border border-[#0c3321]/10 space-y-3 shadow-sm hover:border-[#0c3321]/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#0c3321]/5 flex items-center justify-center text-[#0c3321] font-mono font-bold">01</div>
            <h3 className="text-xl font-bold font-serif text-[#0c3321]">Kaizen en Taza (改善)</h3>
            <p className="text-sm text-[#0c3321]/70 leading-relaxed">
              La maestría personal se construye con pequeñas decisiones conscientes repetidas cada mañana con disciplina y paciencia.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-[#0c3321]/10 space-y-3 shadow-sm hover:border-[#0c3321]/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#0c3321]/5 flex items-center justify-center text-[#0c3321] font-mono font-bold">02</div>
            <h3 className="text-xl font-bold font-serif text-[#0c3321]">Cadena Honesta & Trazable</h3>
            <p className="text-sm text-[#0c3321]/70 leading-relaxed">
              Transparencia técnica total. Cada empaque identifica la finca, la variedad, el método de beneficio y el nombre del caficultor.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-[#0c3321]/10 space-y-3 shadow-sm hover:border-[#0c3321]/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#0c3321]/5 flex items-center justify-center text-[#0c3321] font-mono font-bold">03</div>
            <h3 className="text-xl font-bold font-serif text-[#0c3321]">Comunidad de Co-creación</h3>
            <p className="text-sm text-[#0c3321]/70 leading-relaxed">
              Nuestra comunidad en Japón participa activamente opinando y eligiendo los próximos micro-lotes a importar.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ACTIVE LOTS SECTION */}
      <section 
        id="lotes" 
        ref={lotsRef} 
        className={`py-20 px-4 sm:px-8 bg-white border-t border-b border-[#0c3321]/10 transition-all duration-1000 ${isLotsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#a1a794] uppercase tracking-widest">Microlotes en Circulación</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0c3321] mt-1">Lotes de Origen Verificables</h2>
            </div>
            <button 
              onClick={onOpenContact}
              className="text-sm font-bold text-[#0c3321] underline underline-offset-4 hover:text-[#164830] cursor-pointer"
            >
              Consultar disponibilidad vía LINE &rarr;
            </button>
          </div>

          <div className="rounded-xl border border-[#0c3321]/15 p-6 bg-[#f9f0ea]/50 hover:bg-[#f9f0ea] transition-all shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* COLUMNA IZQUIERDA: INFORMACIÓN DE LOTE */}
              <div className="md:col-span-7 space-y-4 order-2 md:order-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#0c3321] text-[#f9f0ea] font-medium">{activeLots[0].id}</span>
                  <span className="text-xs font-bold text-[#0c3321] bg-[#a1a794]/20 px-2.5 py-1 rounded-full">{activeLots[0].format}</span>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#0c3321]">{activeLots[0].farm}</h3>
                  <p className="text-xs text-[#0c3321]/70 mt-0.5">
                    Productor: <strong>{activeLots[0].producer}</strong> • {activeLots[0].region}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2.5 rounded bg-white border border-[#0c3321]/10">
                    <span className="block text-[#0c3321]/50 text-[10px] font-mono uppercase">Proceso</span>
                    <span className="font-semibold text-[#0c3321]">{activeLots[0].process}</span>
                  </div>
                  <div className="p-2.5 rounded bg-white border border-[#0c3321]/10">
                    <span className="block text-[#0c3321]/50 text-[10px] font-mono uppercase">Variedad</span>
                    <span className="font-semibold text-[#0c3321]">{activeLots[0].variety}</span>
                  </div>
                </div>

                <div>
                  <span className="block text-[10px] text-[#0c3321]/50 mb-1.5 uppercase tracking-wider font-mono">Notas de Cata</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeLots[0].notes.map((note, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 rounded-full bg-white text-[#0c3321] border border-[#0c3321]/10 font-medium">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedLot(activeLots[0])}
                  className="w-full py-2.5 rounded bg-[#0c3321] text-[#f9f0ea] text-xs font-bold hover:bg-[#164830] transition-colors cursor-pointer"
                >
                  Ver Ficha de Trazabilidad
                </button>
              </div>

              {/* COLUMNA DERECHA: VISOR 3D */}
              <div className="md:col-span-5 order-1 md:order-2">
                <DripBoxCanvas />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. RITUAL TIMER SECTION */}
      <section 
        ref={timerRef}
        className={`py-20 px-4 sm:px-8 bg-[#0c3321] text-[#f9f0ea] transition-all duration-1000 ${isTimerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-mono text-[#a1a794] uppercase tracking-widest">Ritual Consciente</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f9f0ea]">Guía & Temporizador V60</h2>
            <p className="text-sm text-[#f9f0ea]/80 leading-relaxed font-light">
              La preparación precisa del Lote SL-28 resalta sus notas de chocolate dulce, frutos rojos y frutas amarillas. Acompaña tu vertido a 93°C con este temporizador.
            </p>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-4">
              <div className="text-center">
                <span className="text-5xl font-mono font-bold tracking-wider text-[#f9f0ea]">
                  {Math.floor(seconds / 60).toString().padStart(2, '0')}:{(seconds % 60).toString().padStart(2, '0')}
                </span>
                <span className="block text-xs font-mono text-[#a1a794] uppercase tracking-widest mt-2">
                  {seconds < 30 ? '01. Blooming / Pre-infusión (40g agua)' : seconds < 90 ? '02. Primer Vertido Circular (120g agua)' : '03. Extracción Final (250g agua)'}
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
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>
      </section>

      {/* MODAL TRAZABILIDAD */}
      {selectedLot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#f9f0ea] max-w-lg w-full rounded-xl p-6 border border-[#0c3321]/20 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#0c3321]/10 pb-3">
              <h3 className="font-serif font-bold text-xl text-[#0c3321]">{selectedLot.farm}</h3>
              <button onClick={() => setSelectedLot(null)} className="text-sm font-bold text-[#0c3321] p-1 cursor-pointer">✕</button>
            </div>
            <p className="text-xs text-[#0c3321]/80 leading-relaxed">
              Ficha técnica unificada de origen. Cultivado por <strong>{selectedLot.producer}</strong> en {selectedLot.region} y procesado bajo el método {selectedLot.process}.
            </p>
            <div className="p-4 bg-white rounded-lg border border-[#0c3321]/10 text-xs space-y-2">
              <div className="flex justify-between"><span>Productor:</span><span className="font-bold">{selectedLot.producer}</span></div>
              <div className="flex justify-between"><span>Origen:</span><span className="font-bold">{selectedLot.region}</span></div>
              <div className="flex justify-between"><span>Variedad:</span><span className="font-bold">{selectedLot.variety}</span></div>
              <div className="flex justify-between"><span>Proceso:</span><span className="font-bold">{selectedLot.process}</span></div>
              <div className="flex justify-between"><span>Presentación:</span><span className="font-bold">{selectedLot.format}</span></div>
            </div>
            <button 
              onClick={() => { setSelectedLot(null); onOpenContact(); }}
              className="w-full py-2.5 bg-[#00B900] text-white rounded font-bold text-xs cursor-pointer hover:bg-[#009900] transition-colors flex items-center justify-center gap-2"
            >
              <span>Consultar este Lote por LINE Official</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}