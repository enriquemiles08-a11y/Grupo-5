import React from 'react';
import { TECH_PILLARS } from '../data';
import { Cpu, CheckCircle, Flame, Hammer } from 'lucide-react';

export const TechPillarsDash: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Implementado':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Parcial':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      default:
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#1e1e35] border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#c9a84c]" /> Inventario Tecnológico Activo
            </h3>
            <p className="text-sm text-white/50 mt-1">
              Capacidades y herramientas 4.0 ya presentes en El Espartano que sirven como base para la transformación digital.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-black/40 px-4 py-2 rounded-xl border border-white/10 font-mono text-xs text-white/60">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Implementadas: 3
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Parciales: 2
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TECH_PILLARS.map((pillar) => (
            <div 
              key={pillar.id}
              className="bg-black/20 border border-white/5 hover:border-[#c9a84c]/30 rounded-xl p-5 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-white truncate text-base">{pillar.title}</h4>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getStatusColor(pillar.status)}`}>
                    {pillar.status}
                  </span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-sans mb-4">
                  {pillar.description}
                </p>
                <div className="bg-white/[0.02] border border-white/[0.05] p-3 rounded-lg text-[11px] text-white/50 leading-relaxed italic mb-4 font-sans">
                  "{pillar.details}"
                </div>
              </div>
              
              <div>
                <div className="text-[10px] text-white/40 uppercase font-mono tracking-wider mb-2">Herramientas / Stack</div>
                <div className="flex flex-wrap gap-1.5">
                  {pillar.tools.map((tool) => (
                    <span 
                      key={tool} 
                      className="bg-white/5 border border-white/10 text-white/80 font-mono text-[10px] px-2 py-0.5 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
