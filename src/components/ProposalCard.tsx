import React, { useState } from 'react';
import { Proposal } from '../types';
import { 
  Laptop, 
  Barcode, 
  ShieldCheck, 
  Workflow, 
  Palette, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  Award,
  Sparkles,
  Zap,
  Clock
} from 'lucide-react';

interface ProposalCardProps {
  proposal: Proposal;
  isExpanded: boolean;
  onToggle: () => void;
}

export const ProposalCard: React.FC<ProposalCardProps> = ({ proposal, isExpanded, onToggle }) => {
  // Map iconName from string data to React elements safely
  const renderIcon = (name: string) => {
    const cls = "w-6 h-6 text-[#c9a84c]";
    switch (name) {
      case 'View3d':
        return <Laptop className={cls} />;
      case 'Barcode':
        return <Barcode className={cls} />;
      case 'ShieldAlert':
        return <ShieldCheck className={cls} />;
      case 'Kanban':
        return <Workflow className={cls} />;
      case 'Palette':
        return <Palette className={cls} />;
      default:
        return <Sparkles className={cls} />;
    }
  };

  const getEffortColor = (effort: string) => {
    switch (effort) {
      case 'Bajo':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Medio':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      default:
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
    }
  };

  return (
    <div 
      className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
        isExpanded 
          ? 'bg-[#161628] border-[#c9a84c] shadow-[0_0_25px_rgba(201,168,76,0.2)] ring-1 ring-[#c9a84c]/20' 
          : 'bg-[#1e1e35] border-white/10 hover:border-[#c9a84c]/30 hover:shadow-lg'
      }`}
      id={`proposal-${proposal.id}`}
    >
      <div 
        className="p-6 cursor-pointer flex items-start gap-4 select-none"
        onClick={onToggle}
      >
        <div className="bg-[#1a1a36] p-3 rounded-xl border border-white/5 shrink-0 shadow-inner">
          {renderIcon(proposal.iconName)}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="font-mono text-xs text-[#c9a84c] font-bold tracking-widest bg-[#c9a84c]/10 px-2 py-0.5 rounded">
              PROPUESTA {proposal.number}
            </span>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getEffortColor(proposal.effort)}`}>
              Esfuerzo: {proposal.effort}
            </span>
            <span className="text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full">
              Impacto: {proposal.impactLevel}
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white leading-tight tracking-tight">
            {proposal.title}
          </h3>
          <p className="text-xs text-white/40 font-mono mt-0.5">{proposal.subtitle}</p>
          <p className="text-sm text-white/70 line-clamp-2 mt-2 leading-relaxed font-sans font-normal">
            {proposal.description}
          </p>
        </div>

        <div className="shrink-0 p-1 bg-white/5 rounded-lg text-white/40 self-start md:self-center">
          {isExpanded ? <ChevronUp className="w-5 h-5 text-[#c9a84c]" /> : <ChevronDown className="w-5 h-5 text-white/30" />}
        </div>
      </div>

      {isExpanded && (
        <div className="px-6 pb-6 pt-2 border-t border-white/5 bg-black/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
            
            {/* Business Impact Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-[#1f1f3a]/50 p-4 rounded-xl border border-white/10">
                <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-2 flex items-center gap-1.5 font-mono">
                  <Award className="w-4 h-4 text-[#c9a84c]" /> Impacto en el Negocio & ROI
                </h4>
                <p className="text-sm text-[#e8d28a] leading-relaxed font-sans font-medium">
                  {proposal.businessImpact}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-3 flex items-center gap-1.5 font-mono">
                  <Zap className="w-4 h-4 text-[#c9a84c]" /> Detalles de Implementación Técnica
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/75 font-sans">
                  {proposal.techDetails.map((tech, i) => (
                    <li key={i} className="flex items-start gap-2 bg-white/[0.02] p-2 rounded border border-white/5">
                      <span className="text-[#c9a84c] mt-0.5">•</span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Info Metrics Column */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4 bg-black/20 p-4 rounded-xl border border-white/5">
              <div className="space-y-4">
                <div>
                  <div className="text-[10px] text-white/40 uppercase font-mono tracking-wider mb-1 flex items-center gap-1">
                    <Clock className="w-3 px-0 py-0.5 h-3 text-white/40" /> Plazo Estimado de Entrega
                  </div>
                  <div className="text-lg font-bold text-white flex items-center gap-2 font-sans">
                    <Calendar className="w-5 h-5 text-[#c9a84c]" /> {proposal.estTimeline}
                  </div>
                  <p className="text-[11px] text-white/40 italic font-mono mt-0.5">Sujeto a priorización de requerimientos.</p>
                </div>

                <div className="pt-2 border-t border-white/5 space-y-1.5 text-xs text-white/60">
                  <div className="flex justify-between">
                    <span>Estado sugerido:</span>
                    <span className="font-mono text-[#c9a84c]">Alta Prioridad</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Integración de Datos:</span>
                    <span className="font-mono text-white/80">Bejerman API</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Alcance:</span>
                    <span className="font-mono text-white/80">Full-Stack Web</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/20 p-3 rounded-lg text-[11px] leading-relaxed font-sans text-center">
                Soluciona una brecha identificada en el diagnóstico del negocio.
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
