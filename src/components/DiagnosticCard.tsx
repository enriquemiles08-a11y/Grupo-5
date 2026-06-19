import React, { useState } from 'react';
import { DiagnosticItem } from '../types';
import { ChevronDown, ChevronUp, AlertCircle, ShieldAlert, ArrowRight, Ban } from 'lucide-react';

interface DiagnosticCardProps {
  item: DiagnosticItem;
  onSelectSolution: (proposalId: string) => void;
}

export const DiagnosticCard: React.FC<DiagnosticCardProps> = ({ item, onSelectSolution }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getImpactStyles = (impact: string) => {
    switch (impact) {
      case 'Crítico':
        return 'bg-red-500/10 text-red-400 border-red-500/30';
      case 'Alto':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      default:
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    }
  };

  return (
    <div 
      className={`border rounded-xl transition-all duration-300 overflow-hidden ${
        isOpen 
          ? 'bg-[#161628] border-[#c9a84c] shadow-[0_0_20px_rgba(201,168,76,0.15)] ring-1 ring-[#c9a84c]/20' 
          : 'bg-[#1e1e35] border-white/10 hover:border-[#c9a84c]/40'
      }`}
      id={`diag-card-${item.id}`}
    >
      <div 
        className="p-5 cursor-pointer flex items-start justify-between gap-4 select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`text-xs px-2.5 py-0.5 rounded-full border font-mono font-medium ${getImpactStyles(item.impact)}`}>
              Impacto: {item.impact}
            </span>
            <span className="text-xs text-white/40 font-mono">El Espartano ⁃ Core Tech</span>
          </div>
          <h3 className="text-lg font-semibold text-white tracking-tight">{item.title}</h3>
          <p className="text-sm font-medium text-[#c9a84c] mt-1">{item.finding}</p>
        </div>
        <div className="mt-1 text-white/50 bg-white/5 p-1.5 rounded-lg">
          {isOpen ? <ChevronUp className="w-5 h-5 text-[#c9a84c]" /> : <ChevronDown className="w-5 h-5 text-white/40" />}
        </div>
      </div>

      {isOpen && (
        <div className="px-5 pb-5 pt-2 border-t border-white/5 bg-black/25">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-white/80">
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest flex items-center gap-1">
                <AlertCircle className="w-3 px-0 py-0.5 h-3 text-[#c9a84c]" /> Brecha Identificada
              </h4>
              <p className="text-sm text-white/70 leading-relaxed font-sans">{item.description}</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-red-400/60 uppercase tracking-widest flex items-center gap-1">
                <Ban className="w-3 h-3 text-red-400" /> Impacto en el Negocio (Riesgo)
              </h4>
              <p className="text-sm text-red-200/70 leading-relaxed font-sans">{item.consequence}</p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/5 flex justify-end">
            <button
              onClick={() => onSelectSolution(item.solutionRef)}
              className="text-xs font-medium text-[#c9a84c] hover:text-[#e8d28a] flex items-center gap-1 group transition-colors"
            >
              Ver Propuesta de Solución <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
