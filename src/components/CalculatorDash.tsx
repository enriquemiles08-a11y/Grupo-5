import React, { useState } from 'react';
import { PROPOSALS } from '../data';
import { Sliders, CheckCircle, Flame, Sparkles, TrendingUp, Calendar, Zap, RefreshCw } from 'lucide-react';

export const CalculatorDash: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>(['prop-seguridad', 'prop-kanban']);

  const toggleProposal = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(item => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectAll = () => {
    setSelectedIds(PROPOSALS.map(p => p.id));
  };

  const clearAll = () => {
    setSelectedIds([]);
  };

  // Calculate parameters dynamically based on selected consulting components
  // Base online sales = 5%.
  // Prop 1 (AR View) = +15% online sales growth potential
  // Prop 2 (Realtime stock) = +8% online sales potential
  // Prop 3 (HTTPS) = +3% security validation trust booster
  // Prop 4 (Kanban) = +2% organizational throughput
  // Prop 5 (Design Customizer) = +12% boutique custom conversion
  const getSimulatedSales = () => {
    let sales = 5;
    if (selectedIds.includes('prop-ar')) sales += 15;
    if (selectedIds.includes('prop-inventario')) sales += 8;
    if (selectedIds.includes('prop-seguridad')) sales += 3;
    if (selectedIds.includes('prop-kanban')) sales += 2;
    if (selectedIds.includes('prop-diseno')) sales += 12;
    return sales;
  };

  // Timeline model: parallelized execution.
  // Take the maximum duration of selected proposals + 1 week coordination overhead per other active proposal.
  const getSimulatedTimeline = () => {
    if (selectedIds.length === 0) return 0;
    
    const durationsMap: Record<string, number> = {
      'prop-ar': 10,
      'prop-inventario': 12,
      'prop-seguridad': 2,
      'prop-kanban': 4,
      'prop-diseno': 14
    };

    const activeWeeks = selectedIds.map(id => durationsMap[id] || 0);
    const maxWeeks = Math.max(...activeWeeks);
    const overhead = (selectedIds.length - 1) * 1; // 1 week overhead for each parallel project
    return maxWeeks + Math.max(0, overhead);
  };

  // Maturity score. Starts at 25 (base level with existings SaaS + custom LANA calculo code).
  // Max score = 98
  const getMaturityScore = () => {
    let score = 25;
    if (selectedIds.includes('prop-ar')) score += 15;
    if (selectedIds.includes('prop-inventario')) score += 18;
    if (selectedIds.includes('prop-seguridad')) score += 12;
    if (selectedIds.includes('prop-kanban')) score += 10;
    if (selectedIds.includes('prop-diseno')) score += 18;
    return score;
  };

  const getMaturityLabel = (score: number) => {
    if (score < 40) return { label: 'Inicial / Analógico', color: 'text-rose-400 bg-rose-500/10 border-rose-500/20' };
    if (score < 65) return { label: 'Digitalización Parcial', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' };
    if (score < 85) return { label: 'Ecosistema Conectado', color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' };
    return { label: 'Madurez Digital 4.0 Líder', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' };
  };

  const getStrategicAdvice = (score: number) => {
    if (score < 30) return "Sugerencia: Debes habilitar de forma urgente al menos la Propuesta 3 (HTTPS/Seguridad) para sentar bases mínimas de navegación confiable.";
    if (score < 60) return "Sugerencia: Cuentas con un avance operativo básico, pero debes combinar la optimización de stock interno con la ampliación de ventas para de verdad ver el impacto financiero.";
    return "¡Análisis Óptimo! Este roadmap combina armónicamente la agilidad interna (Kanban + Inventario) con una experiencia web inmersiva de cara al cliente boutique (AR + Cocreador).";
  };

  return (
    <div className="bg-[#1e1e35] border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <Sliders className="w-5 h-5 text-[#c9a84c]" />
        <h3 className="text-xl font-bold text-white tracking-tight">Simulador Vial TCD 2026</h3>
      </div>
      <p className="text-xs text-white/50 leading-relaxed mb-6 font-sans">
        Interactúa con el modelo de transformación. Marca y desmarca las propuestas de consultoría para ver el impacto estimado en la facturación digital, el plazo del proyecto paralelo y la madurez corporativa de <strong>El Espartano</strong>.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Selection column */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest">PROPUESTAS DISPONIBLES</span>
            <div className="flex gap-2">
              <button 
                onClick={selectAll}
                className="text-[10px] font-mono text-[#c9a84c] hover:underline"
              >
                [Seleccionar Todo]
              </button>
              <button 
                onClick={clearAll}
                className="text-[10px] font-mono text-white/40 hover:underline hover:text-white"
              >
                [Limpiar]
              </button>
            </div>
          </div>

          {PROPOSALS.map((p) => {
            const isActive = selectedIds.includes(p.id);
            return (
              <div 
                key={p.id}
                onClick={() => toggleProposal(p.id)}
                className={`p-4 rounded-xl border cursor-pointer select-none transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#161628] border-[#c9a84c] shadow-[0_0_15px_rgba(201,168,76,0.1)]' 
                    : 'bg-black/20 border-white/5 hover:border-white/10 opacity-80'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-all ${
                    isActive ? 'bg-[#c9a84c] border-[#c9a84c] text-[#121226]' : 'border-white/20'
                  }`}>
                    {isActive && <span className="text-[10px] uppercase font-bold text-black font-sans">✓</span>}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      Propuesta {p.number} ⁃ {p.title.split('(')[0]}
                    </h4>
                    <p className="text-[10px] font-mono text-white/40 mt-0.5">
                      Complejidad: {p.effort} • Impacto: {p.impactLevel}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic ROI displays */}
        <div className="lg:col-span-5 bg-black/40 border border-white/5 p-5 rounded-xl flex flex-col justify-between gap-6">
          <div className="space-y-5">
            <h4 className="text-[11px] font-mono text-white/40 uppercase tracking-widest">INDICADORES DE TRANSFORMACIÓN</h4>
            
            {/* Sales graph projection */}
            <div className="bg-white/[0.02] border border-white/5 p-4 rounded-lg flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono text-white/40">Ventas Canal Digital</span>
                <div className="text-3xl font-extrabold text-white mt-1 flex items-baseline gap-1 font-sans">
                  {getSimulatedSales()}% <span className="text-xs text-[#c9a84c] font-mono font-normal">proyectado</span>
                </div>
                <div className="text-[10px] text-white/30 font-mono mt-0.5 mt-1.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Base Inicial: 5%
                </div>
              </div>
              <div className="bg-[#c9a84c]/10 text-[#c9a84c] p-2.5 rounded-full border border-[#c9a84c]/20 shadow-inner">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>

            {/* Timeline estimator */}
            <div className="bg-white/[0.02] border border-white/5 p-4 rounded-lg flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono text-white/40">Duración del Roadmap</span>
                <div className="text-2xl font-bold text-white mt-1 font-sans flex items-baseline gap-1">
                  {getSimulatedTimeline() === 0 ? 'Sin estimar' : `${getSimulatedTimeline()} semanas`}
                </div>
                <p className="text-[10px] text-white/30 font-mono mt-1.5 leading-tight">
                  Modelo de ruta paralela optimizada + overhead
                </p>
              </div>
              <div className="bg-blue-500/10 text-blue-400 p-2.5 rounded-full border border-blue-500/20 shadow-inner">
                <Calendar className="w-6 h-6" />
              </div>
            </div>

            {/* Maturity Score bar */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-mono text-white/40">Madurez Digital</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getMaturityLabel(getMaturityScore()).color}`}>
                  {getMaturityLabel(getMaturityScore()).label}
                </span>
              </div>
              <div className="text-3xl font-black text-white font-sans tracking-tight mb-2">
                {getMaturityScore()} / 100
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden border border-white/5">
                <div 
                  className="bg-gradient-to-r from-[#c9a84c] to-amber-300 h-full transition-all duration-500"
                  style={{ width: `${getMaturityScore()}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-[#181830] border border-[#c9a84c]/20 p-3 rounded-lg text-[11px] leading-relaxed text-white/70 italic font-sans font-medium flex items-start gap-1.5">
            <Zap className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
            <span>{getStrategicAdvice(getMaturityScore())}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
