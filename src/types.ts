export interface DiagnosticItem {
  id: string;
  title: string;
  finding: string;
  impact: 'Alto' | 'Medio' | 'Crítico';
  description: string;
  consequence: string;
  solutionRef: string; // References which proposal solves this
}

export interface TechPillar {
  id: string;
  title: string;
  status: 'Implementado' | 'Parcial' | 'En Desarrollo';
  description: string;
  details: string;
  tools: string[];
}

export interface Proposal {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  businessImpact: string;
  effort: 'Bajo' | 'Medio' | 'Alto';
  impactLevel: 'Alto' | 'Muy Alto' | 'Revolucionario';
  estTimeline: string;
  iconName: string;
  techDetails: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  email: string;
  initials: string;
}

export interface CalculatorState {
  selectedProposals: string[]; // ids of proposals
  marketingBoost: boolean;
}
