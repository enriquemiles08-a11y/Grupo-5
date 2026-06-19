import React from 'react';
import { TeamMember } from '../types';
import { Mail, Briefcase, Award } from 'lucide-react';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div 
      className="bg-[#1e1e35] border border-white/10 hover:border-[#c9a84c]/30 rounded-xl p-5 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden shadow-md"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#c9a84c]/5 to-transparent rounded-bl-full pointer-events-none group-hover:from-[#c9a84c]/15 transition-all"></div>
      
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#c9a84c]/30 to-[#c9a84c]/10 border border-[#c9a84c]/40 flex items-center justify-center font-mono font-bold text-[#e8d28a] text-sm shrink-0 shadow-inner group-hover:scale-105 duration-300 transition-transform">
            {member.initials}
          </div>
          <div>
            <h4 className="font-bold text-white tracking-tight text-base leading-tight group-hover:text-[#c9a84c] transition-colors">
              {member.name}
            </h4>
            <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono mt-0.5">Consultor TCD</p>
          </div>
        </div>

        <div className="space-y-2 mt-4 text-xs font-sans text-white/70">
          <div className="flex items-start gap-2 bg-white/[0.02] p-2.5 rounded border border-white/[0.03]">
            <Briefcase className="w-3.5 h-3.5 text-[#c9a84c] shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] text-white/30 uppercase font-mono leading-none mb-1">Responsabilidad Principal</p>
              <p className="font-medium text-white/80 leading-snug">{member.role}</p>
            </div>
          </div>

          <div className="flex items-start gap-2 bg-white/[0.02] p-2.5 rounded border border-white/[0.03]">
            <Award className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] text-white/30 uppercase font-mono leading-none mb-1">Especialidad Digital</p>
              <p className="text-white/80 leading-snug">{member.specialty}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40 group-hover:text-white/60 transition-colors">
        <span className="text-[10px]">Universidad de San Andrés</span>
        <a 
          href={`mailto:${member.email}`}
          className="text-white/30 hover:text-[#c9a84c] transition-all hover:scale-105 p-1 rounded hover:bg-white/5"
          title={`Enviar correo a ${member.name}`}
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
