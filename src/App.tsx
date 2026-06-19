import React, { useState } from 'react';
import { DIAGNOSTICS, PROPOSALS, TEAM } from './data';
import { DiagnosticCard } from './components/DiagnosticCard';
import { TechPillarsDash } from './components/TechPillarsDash';
import { ProposalCard } from './components/ProposalCard';
import { CalculatorDash } from './components/CalculatorDash';
import { TeamCard } from './components/TeamCard';
import { 
  Download, 
  HelpCircle, 
  Sparkles, 
  Flame, 
  CheckCircle, 
  GraduationCap, 
  TrendingUp, 
  Cpu, 
  BookOpen, 
  Layers, 
  ArrowRight,
  ChevronRight,
  Users
} from 'lucide-react';

export default function App() {
  const [selectedProposalId, setSelectedProposalId] = useState<string | null>(null);

  // Smooth scroll and auto-expand proposal relative to diagnostic click
  const handleSelectSolution = (proposalId: string) => {
    setSelectedProposalId(proposalId);
    const element = document.getElementById(`proposal-${proposalId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Helper code to generate 100% self-contained HTML for offline launch
  const downloadStandaloneHTML = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grupo 5 - TCD El Espartano | UdeSA + Digital House</title>
    <!-- Tailwind CSS Play CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts Poppins / Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            darkBg: '#0A0A16',
                            cardBg: '#121226',
                            gold: '#c9a84c',
                            goldHover: '#e8d28a',
                            goldDark: '#9A7E30',
                            textMuted: '#94a3b8'
                        }
                    },
                    fontFamily: {
                        sans: ['Poppins', 'Inter', 'sans-serif'],
                        mono: ['Courier New', 'Courier', 'monospace']
                    }
                }
            }
        }
    </script>
    <style>
        body {
            background-color: #0A0A16;
            color: #ffffff;
            font-family: 'Poppins', 'Inter', sans-serif;
            scroll-behavior: smooth;
        }
    </style>
</head>
<body class="min-h-screen selection:bg-[#c9a84c] selection:text-[#0A0A16] relative overflow-x-hidden pb-16">
    <!-- Ambient radial glow spots -->
    <div class="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#c9a84c]/5 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>
    <div class="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-[#c9a84c]/5 rounded-full blur-[120px] pointer-events-none"></div>

    <!-- HEADER / NAVIGATION -->
    <header class="sticky top-0 z-[100] bg-[#0A0A16]/85 backdrop-blur-md border-b border-white/5">
        <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#c9a84c]/40 to-amber-400/10 border border-[#c9a84c]/40 flex items-center justify-center font-bold text-[#c9a84c] tracking-tighter">
                    G5
                </div>
                <div>
                    <h1 class="font-black text-white text-base tracking-tight leading-none">GRUPO 5 <span class="text-[#c9a84c]">⁃</span> TCD</h1>
                    <span class="text-[9px] text-[#c9a84c] tracking-widest font-mono uppercase bg-[#c9a84c]/5 px-1 rounded block mt-0.5">UdeSA + Digital House</span>
                </div>
            </div>
            
            <nav class="hidden lg:flex items-center gap-5 text-xs font-medium text-slate-400">
                <a href="#sobre-proyecto" class="hover:text-white transition-colors">Sobre el Proyecto</a>
                <a href="#diagnostico" class="hover:text-white transition-colors">Diagnóstico</a>
                <a href="#pilares" class="hover:text-white transition-colors">Pilares 4.0</a>
                <a href="#propuestas" class="hover:text-white transition-colors">Propuestas</a>
                <a href="#simulador" class="hover:text-white transition-colors">Simulador</a>
                <a href="#habilidades" class="hover:text-white transition-colors">Habilidades</a>
                <a href="#equipo" class="hover:text-white transition-colors">Equipo</a>
            </nav>
            
            <span class="bg-gradient-to-r from-[#c9a84c] to-amber-300 text-black text-xs font-bold px-3.5 py-1.5 rounded-lg font-sans">
                Entregable Offline
            </span>
        </div>
    </header>

    <!-- HERO SECTION -->
    <section class="max-w-7xl mx-auto px-6 pt-16 pb-12 text-center relative z-10">
        <span class="text-xs text-[#c9a84c] uppercase font-mono tracking-[0.25em] font-bold block mb-4 bg-[#c9a84c]/10 max-w-max mx-auto px-4 py-1.5 rounded-full border border-[#c9a84c]/15">
            Licenciatura en Negocios Digitales
        </span>
        <h1 class="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Tejiendo el Futuro Digital de <span class="bg-gradient-to-r from-[#c9a84c] via-[#e8d28a] to-white bg-clip-text text-transparent">El Espartano</span>
        </h1>
        <p class="text-base md:text-xl text-slate-400 mt-6 max-w-2xl mx-auto font-light leading-relaxed">
            Reporte de Consultoría de Transformación Digital (TCD). Propuestas de disrupción incremental diseñadas para modernizar los procesos operativos y canales directos de una marca textil con 80+ años de excelencia.
        </p>
        
        <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#propuestas" class="bg-gradient-to-r from-[#c9a84c] to-amber-500 hover:from-amber-500 hover:to-[#c9a84c] text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-[#c9a84c]/10 text-sm">
                Conocer Propuestas 
            </a>
            <a href="#diagnostico" class="bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/20 text-white font-medium px-6 py-3 rounded-xl transition-all text-sm">
                Ver Diagnóstico de Brechas
            </a>
        </div>

        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-left border-y border-white/5 py-8 max-w-5xl mx-auto">
            <div class="p-2">
                <span class="block text-[10px] text-[#c9a84c] font-mono tracking-wider uppercase">Industria Analizada</span>
                <span class="block text-white font-bold text-lg mt-0.5">Textil & Alfombras</span>
            </div>
            <div class="p-2">
                <span class="block text-[10px] text-[#c9a84c] font-mono tracking-wider uppercase">Fundado Hace</span>
                <span class="block text-white font-bold text-lg mt-0.5">80+ Años</span>
            </div>
            <div class="p-2">
                <span class="block text-[10px] text-[#c9a84c] font-mono tracking-wider uppercase">Fuerza Laboral</span>
                <span class="block text-white font-bold text-lg mt-0.5">~100 Empleados</span>
            </div>
            <div class="p-2">
                <span class="block text-[10px] text-[#c9a84c] font-mono tracking-wider uppercase">Ventas Canal Digital</span>
                <span class="block text-red-400 font-bold text-lg mt-0.5">Solo un 5%</span>
            </div>
        </div>
    </section>

    <!-- SOBRE EL PROYECTO -->
    <section id="sobre-proyecto" class="max-w-7xl mx-auto px-6 py-16 scroll-mt-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div class="lg:col-span-5 space-y-6">
                <div class="flex items-center gap-2">
                    <span class="w-1.5 h-6 bg-[#c9a84c] rounded-full"></span>
                    <h2 class="text-xs uppercase font-mono tracking-widest text-[#c9a84c] font-bold">Resumen de Consultoría</h2>
                </div>
                <h3 class="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                    El Desafío de Equilibrar Tradición y Agilidad
                </h3>
                <p class="text-sm text-slate-400 leading-relaxed font-sans">
                    Como consultora integrada por estudiantes de la <strong>Universidad de San Andrés y Digital House</strong> para la materia de Tecnología y Cultura Digital, nuestra misión radica en diagnosticar la brecha analógica de <strong>El Espartano</strong> y proponer innovaciones realistas que respeten el valioso legado industrial de la empresa.
                </p>
                <p class="text-sm text-slate-400 leading-relaxed font-sans">
                    El Espartano es reconocido por sus alfombras fotorrealistas de alta fidelidad, césped sintético deportivo de alto rendimiento, y pisos flotantes de calidad boutique. Sin embargo, su infraestructura padece asimetrías de gestión tradicionales que impiden liberar el potencial de captación directa e-commerce.
                </p>
            </div>
            
            <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="bg-[#121226] border border-white/5 p-6 rounded-2xl relative overflow-hidden group">
                    <div class="absolute top-0 left-0 w-2 h-full bg-blue-500 rounded-l-2xl"></div>
                    <h4 class="font-bold text-white text-lg">La Consultora</h4>
                    <span class="text-xs text-[#c9a84c] font-mono block mt-1">UdeSA + Digital House</span>
                    <p class="text-xs text-slate-400 mt-3 leading-relaxed font-sans">
                        Equipo multidisciplinario que une tecnología aplicada, visión comercial, agilidad, análisis de datos e infraestructura para entregar transformaciones accionables.
                    </p>
                </div>

                <div class="bg-[#121226] border border-white/5 p-6 rounded-2xl relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-2 h-full bg-[#c9a84c] rounded-l-2xl"></div>
                    <h4 class="font-bold text-white text-lg">El Cliente</h4>
                    <span class="text-xs text-[#c9a84c] font-mono block mt-1">El Espartano</span>
                    <p class="text-xs text-slate-400 mt-3 leading-relaxed font-sans">
                        Fábrica textil argentina líder con más de 80 años de trayectoria. Enfocada en revestimientos de alto estándar que necesita digitalizar la logística profunda y canal D2C.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- DIAGNÓSTICO ACTUAL -->
    <section id="diagnostico" class="max-w-7xl mx-auto px-6 py-16 scroll-mt-20">
        <div class="text-center max-w-3xl mx-auto mb-12">
            <span class="text-xs font-mono text-[#c9a84c] font-bold uppercase tracking-widest bg-[#c9a84c]/5 px-3 py-1 rounded">Análisis Interno</span>
            <h2 class="text-3xl font-black text-white tracking-tight mt-3">Diagnóstico de Brechas Analógicas</h2>
            <p class="text-xs text-slate-400 mt-2">
                Haga clic en cualquiera de las siguientes brechas del diagnóstico actual para examinar la ramificación técnica en las operaciones de El Espartano y su correspondencia con las soluciones del roadmap.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Diag 1 -->
            <div class="bg-[#121226] border border-white/5 rounded-xl transition-all duration-300 overflow-hidden cursor-pointer hover:border-white/20 hover:scale-[1.01]" onclick="toggleDiagnosis('diag-1')">
                <div class="p-6">
                    <div class="flex items-center justify-between mb-3"><span class="text-[10px] font-mono px-2 py-0.5 rounded border border-red-500/30 text-red-400 bg-red-500/10">Impacto: Crítico</span><span class="text-xs text-neutral-500">Brecha 01</span></div>
                    <h4 class="font-semibold text-white text-base">Nula Presencia Directa Online</h4>
                    <p class="text-xs text-[#c9a84c] font-mono mt-1">Solo el 5% de las ventas son de canal digital</p>
                    <div class="hidden-diag-content hidden id-diag-1 mt-4 pt-4 border-t border-white/5 text-xs text-slate-300 space-y-2">
                        <p><strong>Detalle:</strong> La gran mayoría de la comercialización se realiza a través de distribuidores tradicionales y visitas presenciales. Se desaprovecha el mercado de venta directa (D2C) tanto para consumidores como para arquitectos independientes.</p>
                        <p class="text-red-400"><strong>Consecuencia:</strong> Pérdida de penetración de mercado frente a competidores nativos digitales que capturan a las nuevas generaciones.</p>
                        <p class="text-[#c9a84c]"><strong>Solucionado por:</strong> Propuesta 1 (Visualizador AR)</p>
                    </div>
                </div>
            </div>

            <!-- Diag 2 -->
            <div class="bg-[#121226] border border-white/5 rounded-xl transition-all duration-300 overflow-hidden cursor-pointer hover:border-white/20 hover:scale-[1.01]" onclick="toggleDiagnosis('diag-2')">
                <div class="p-6">
                    <div class="flex items-center justify-between mb-3"><span class="text-[10px] font-mono px-2 py-0.5 rounded border border-red-500/30 text-red-400 bg-red-500/10">Impacto: Crítico</span><span class="text-xs text-neutral-500">Brecha 02</span></div>
                    <h4 class="font-semibold text-white text-base">Gestión de Stock Analógica</h4>
                    <p class="text-xs text-[#c9a84c] font-mono mt-1">Inventario y control de stock 100% manual</p>
                    <div class="hidden-diag-content hidden id-diag-2 mt-4 pt-4 border-t border-white/5 text-xs text-slate-300 space-y-2">
                        <p><strong>Detalle:</strong> La gestión de rollos, lotes de hilos y alfombras se realiza a través de planillas físicas y la memoria de operadores experimentados. El conocimiento crítico reside en personas, no en sistemas.</p>
                        <p class="text-red-400"><strong>Consecuencia:</strong> Efecto látigo, demoras severas en despachos, inconsistencia de existencias e imposibilidad de vender stock real por la web.</p>
                        <p class="text-[#c9a84c]"><strong>Solucionado por:</strong> Propuesta 2 (Inventario Real-Time)</p>
                    </div>
                </div>
            </div>

            <!-- Diag 3 -->
            <div class="bg-[#121226] border border-white/5 rounded-xl transition-all duration-300 overflow-hidden cursor-pointer hover:border-white/20 hover:scale-[1.01]" onclick="toggleDiagnosis('diag-3')">
                <div class="p-6">
                    <div class="flex items-center justify-between mb-3"><span class="text-[10px] font-mono px-2 py-0.5 rounded border border-red-500/30 text-red-400 bg-red-500/10">Impacto: Crítico</span><span class="text-xs text-neutral-500">Brecha 03</span></div>
                    <h4 class="font-semibold text-white text-base">Vulnerabilidades Críticas de Portal</h4>
                    <p class="text-xs text-[#c9a84c] font-mono mt-1">Sitio corporativo sin protocolo seguro HTTPS</p>
                    <div class="hidden-diag-content hidden id-diag-3 mt-4 pt-4 border-t border-white/5 text-xs text-slate-300 space-y-2">
                        <p><strong>Detalle:</strong> La navegación principal no posee certificados SSL obligatorios, lo que genera advertencias de "Sitio No Seguro" en la mayoría de los navegadores modernos y menoscaba la confianza de clientes de alta gama.</p>
                        <p class="text-red-400"><strong>Consecuencia:</strong> Penalización extrema del posicionamiento SEO en buscadores y exposición a ataques de interceptación de datos.</p>
                        <p class="text-[#c9a84c]"><strong>Solucionado por:</strong> Propuesta 3 (Seguridad HTTPS)</p>
                    </div>
                </div>
            </div>

            <!-- Diag 4 -->
            <div class="bg-[#121226] border border-white/5 rounded-xl transition-all duration-300 overflow-hidden cursor-pointer hover:border-white/20 hover:scale-[1.01]" onclick="toggleDiagnosis('diag-4')">
                <div class="p-6">
                    <div class="flex items-center justify-between mb-3"><span class="text-[10px] font-mono px-2 py-0.5 rounded border border-blue-500/30 text-blue-400 bg-blue-500/10">Impacto: Medio</span><span class="text-xs text-neutral-500">Brecha 04</span></div>
                    <h4 class="font-semibold text-white text-base">Falta de Procesos Ágiles</h4>
                    <p class="text-xs text-[#c9a84c] font-mono mt-1">Inexistencia de metodologías ágiles formales</p>
                    <div class="hidden-diag-content hidden id-diag-4 mt-4 pt-4 border-t border-white/5 text-xs text-slate-300 space-y-2">
                        <p><strong>Detalle:</strong> Los proyectos comerciales y de desarrollo de productos se organizan de forma jerárquica rígida sin ciclos rápidos de retroalimentación, dificultando la adaptación a cambios y nuevas modas del diseño.</p>
                        <p class="text-red-400"><strong>Consecuencia:</strong> Cuellos de botella interdepartamentales y baja proactividad para lanzar mejoras digitales rápidas.</p>
                        <p class="text-[#c9a84c]"><strong>Solucionado por:</strong> Propuesta 4 (Kanban Digital)</p>
                    </div>
                </div>
            </div>

            <!-- Diag 5 -->
            <div class="bg-[#121226] border border-white/5 rounded-xl transition-all duration-300 overflow-hidden cursor-pointer hover:border-white/20 hover:scale-[1.01]" onclick="toggleDiagnosis('diag-5')">
                <div class="p-6">
                    <div class="flex items-center justify-between mb-3"><span class="text-[10px] font-mono px-2 py-0.5 rounded border border-amber-500/30 text-amber-400 bg-amber-500/10">Impacto: Alto</span><span class="text-xs text-neutral-500">Brecha 05</span></div>
                    <h4 class="font-semibold text-white text-base">Operación Logística Desconectada</h4>
                    <p class="text-xs text-[#c9a84c] font-mono mt-1">Gestión y despacho de pedidos muy manuales</p>
                    <div class="hidden-diag-content hidden id-diag-5 mt-4 pt-4 border-t border-white/5 text-xs text-slate-300 space-y-2">
                        <p><strong>Detalle:</strong> El despacho de alfombras a medida y césped sintético requiere verificaciones telefónicas, remitos escritos a mano y coordinación fragmentada con las flotas externas.</p>
                        <p class="text-red-400"><strong>Consecuencia:</strong> Sobrecostos de entrega, incapacidad de proveer seguimiento (tracking) al cliente y reprocesamiento constante de errores.</p>
                        <p class="text-[#c9a84c]"><strong>Solucionado por:</strong> Propuesta 4 (Kanban Digital)</p>
                    </div>
                </div>
            </div>

            <!-- Diag 6 -->
            <div class="bg-[#121226] border border-white/5 rounded-xl transition-all duration-300 overflow-hidden cursor-pointer hover:border-white/20 hover:scale-[1.01]" onclick="toggleDiagnosis('diag-6')">
                <div class="p-6">
                    <div class="flex items-center justify-between mb-3"><span class="text-[10px] font-mono px-2 py-0.5 rounded border border-amber-500/30 text-amber-400 bg-amber-500/10">Impacto: Alto</span><span class="text-xs text-neutral-500">Brecha 06</span></div>
                    <h4 class="font-semibold text-white text-base">Silos de Información de Negocio</h4>
                    <p class="text-xs text-[#c9a84c] font-mono mt-1">Ausencia de analítica unificada de ventas</p>
                    <div class="hidden-diag-content hidden id-diag-6 mt-4 pt-4 border-t border-white/5 text-xs text-slate-300 space-y-2">
                        <p><strong>Detalle:</strong> La información comercial queda guardada de forma rígida en el ERP y en cuadernos de agentes individuales. No existe un dashboard consolidado para cruzar comportamiento del consumidor directo e industrial.</p>
                        <p class="text-red-400"><strong>Consecuencia:</strong> Decisiones estratégicas basadas puramente en la intuición histórica en lugar de análisis predictivo de datos.</p>
                        <p class="text-[#c9a84c]"><strong>Solucionado por:</strong> Propuesta 5 (Boutique Customizer Online)</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- PILARES TECNOLÓGICOS (4.0) -->
    <section id="pilares" class="max-w-7xl mx-auto px-6 py-16 scroll-mt-20">
        <div class="bg-[#121226]/60 border border-white/5 rounded-2xl p-6 md:p-8">
            <h3 class="text-2xl font-bold text-white tracking-tight flex items-center gap-2 mb-2">
                Inventario Tecnológico Activo
            </h3>
            <p class="text-xs text-slate-400 mb-8 max-w-2xl leading-relaxed">
                El Espartano no inicia su camino desde cero. Nuestro análisis identificó sólidas capacidades técnicas actuales que servirán como soporte e integradores directos del nuevo marco 4.0 propuesto.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Pilar 1 -->
                <div class="bg-[#0A0A16]/50 border border-white/5 p-5 rounded-xl">
                    <div class="flex items-center justify-between mb-2">
                        <h4 class="font-bold text-white text-base">Big Data en e-Commerce</h4>
                        <span class="text-[9px] font-mono text-amber-400 border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 rounded-full">Parcial</span>
                    </div>
                    <p class="text-xs text-slate-400 leading-relaxed mb-4">Análisis de comportamiento en el sitio web tradicional mediante la recopilación activa de carritos abandonados e historial de navegación básico.</p>
                    <div class="flex gap-1.5 flex-wrap"><span class="text-[9px] font-mono bg-white/5 text-white/70 px-2 py-0.5 rounded">Google Analytics</span></div>
                </div>

                <!-- Pilar 2 -->
                <div class="bg-[#0A0A16]/50 border border-white/5 p-5 rounded-xl">
                    <div class="flex items-center justify-between mb-2">
                        <h4 class="font-bold text-white text-base">Automatización de Planta</h4>
                        <span class="text-[9px] font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded-full">Implementado</span>
                    </div>
                    <p class="text-xs text-slate-400 leading-relaxed mb-4">Uso de maquinaria industrial semiautomatizada en planta para la costura, tejido, y calibración de densidad de alfombras de alta fidelidad y césped.</p>
                    <div class="flex gap-1.5 flex-wrap"><span class="text-[9px] font-mono bg-white/5 text-white/70 px-2 py-0.5 rounded">PLC Industrial</span><span class="text-[9px] font-mono bg-white/5 text-white/70 px-2 py-0.5 rounded">Scada</span></div>
                </div>

                <!-- Pilar 3 -->
                <div class="bg-[#0A0A16]/50 border border-white/5 p-5 rounded-xl">
                    <div class="flex items-center justify-between mb-2">
                        <h4 class="font-bold text-white text-base">IA Aplicada a Catálogo</h4>
                        <span class="text-[9px] font-mono text-amber-400 border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 rounded-full">Parcial</span>
                    </div>
                    <p class="text-xs text-slate-400 leading-relaxed mb-4">Procesamiento de imágenes mediante inteligencia artificial para la generación rápida de fondos y contextualización de alfombras en habitaciones.</p>
                    <div class="flex gap-1.5 flex-wrap"><span class="text-[9px] font-mono bg-white/5 text-white/70 px-2 py-0.5 rounded">Image Models</span></div>
                </div>

                <!-- Pilar 4 -->
                <div class="bg-[#0A0A16]/50 border border-white/5 p-5 rounded-xl md:col-span-1">
                    <div class="flex items-center justify-between mb-2">
                        <h4 class="font-bold text-white text-base">Cálculo de Lana Computado</h4>
                        <span class="text-[9px] font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded-full">Implementado</span>
                    </div>
                    <p class="text-xs text-slate-400 leading-relaxed mb-4">Aplicación interna desarrollada a la medida para calcular de forma milimétrica el consumo volumétrico de hilado de lana en base al patrón cargado.</p>
                    <div class="flex gap-1.5 flex-wrap"><span class="text-[9px] font-mono bg-white/5 text-white/70 px-2 py-0.5 rounded">Custom Algorithm</span><span class="text-[9px] font-mono bg-white/5 text-white/70 px-2 py-0.5 rounded">C++ Core</span></div>
                </div>

                <!-- Pilar 5 -->
                <div class="bg-[#0A0A16]/50 border border-white/5 p-5 rounded-xl md:col-span-2">
                    <div class="flex items-center justify-between mb-2">
                        <h4 class="font-bold text-white text-base">Ecosistema SaaS Corp</h4>
                        <span class="text-[9px] font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded-full">Implementado</span>
                    </div>
                    <p class="text-xs text-slate-400 leading-relaxed mb-4">Garantía del flujo operativo operativo mediante el uso centralizado de ERP Bejerman empresarial, Adobe Creative Cloud para modelado visual de patrones y almacenamiento en Dropbox.</p>
                    <div class="flex gap-1.5 flex-wrap"><span class="text-[9px] font-mono bg-white/5 text-white/70 px-2 py-0.5 rounded">ERP Bejerman</span><span class="text-[9px] font-mono bg-white/5 text-white/70 px-2 py-0.5 rounded">Adobe CC</span><span class="text-[9px] font-mono bg-white/5 text-white/70 px-2 py-0.5 rounded">Dropbox</span></div>
                </div>
            </div>
        </div>
    </section>

    <!-- PROPUESTAS DE TRANSFORMACIÓN DIGITAL -->
    <section id="propuestas" class="max-w-7xl mx-auto px-6 py-16 scroll-mt-20">
        <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs font-mono text-[#c9a84c] font-bold uppercase tracking-widest bg-[#c9a84c]/5 px-3 py-1 rounded">Estrategias Estrella</span>
            <h2 class="text-3xl font-black text-white tracking-tight mt-3">Propuestas de Transformación</h2>
            <p class="text-xs text-slate-400 mt-2">Nuestras 5 propuestas estrella para integrar los canales digitales de venta, potenciar la seguridad, estructurar el inventario físico y abrir la co-creación.</p>
        </div>

        <div class="space-y-4 max-w-5xl mx-auto">
            <!-- Propuesta 1 -->
            <div class="border border-white/5 bg-[#121226] rounded-2xl overflow-hidden transition-all" id="prop-1">
                <div class="p-6 cursor-pointer flex items-center justify-between" onclick="toggleProposal('prop-1-content')">
                    <div class="flex-1 min-w-0 pr-4">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="text-[10px] font-bold text-[#c9a84c] bg-[#c9a84c]/10 px-2 py-0.5 rounded uppercase font-mono">Propuesta 01</span>
                            <span class="text-[9px] font-mono px-2 py-0.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400">Esfuerzo: Medio</span>
                        </div>
                        <h3 class="text-lg font-bold text-white leading-snug">Visualizador Web de Espacios con Realidad Aumentada (AR)</h3>
                        <p class="text-xs text-[#c9a84c] font-mono mt-0.5">Canal Online Directo de Próxima Generación</p>
                    </div>
                    <span class="text-neutral-500 text-lg transition-transform" id="arrow-prop-1-content">▼</span>
                </div>
                <div class="hidden px-6 pb-6 pt-2 border-t border-white/5 bg-black/15" id="prop-1-content">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 text-xs">
                        <div class="space-y-4">
                            <p class="text-slate-300 text-sm leading-relaxed"><strong>Descripción:</strong> Integrar una herramienta WebAR interactiva en el sitio que permita renderizar fotorrealistamente las alfombras o césped fáctico sobre el piso del cliente usando la cámara móvil del navegador, facilitando decisiones de compra instantáneas.</p>
                            <div class="p-4 rounded-xl border border-white/10 bg-[#1f1f3a]/50">
                                <h4 class="font-bold text-[#c9a84c] mb-1">Impacto de Negocio Proyectado:</h4>
                                <p class="text-slate-200">Incrementa el porcentaje de conversión e-commerce en un 35% y desploma la porción de devoluciones por equivocación estética en un 25%.</p>
                            </div>
                        </div>
                        <div class="bg-black/20 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                            <div class="space-y-1">
                                <span class="text-[10px] text-white/40 font-mono block">PLAZO ESTIMADO</span>
                                <span class="text-base font-bold text-white block">8 a 10 semanas</span>
                                <span class="text-[10px] text-white/40 font-mono block mt-3">MÓDULOS DE TECNOLOGÍA</span>
                                <ul class="list-disc pl-4 text-[11px] text-slate-300 space-y-1 mt-1">
                                    <li>Formatos 3D glTF y WebXR API</li>
                                    <li>Librería Three.js para renderizado</li>
                                    <li>Botones de compra integrados en Canvas</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Propuesta 2 -->
            <div class="border border-white/5 bg-[#121226] rounded-2xl overflow-hidden transition-all" id="prop-2">
                <div class="p-6 cursor-pointer flex items-center justify-between" onclick="toggleProposal('prop-2-content')">
                    <div class="flex-1 min-w-0 pr-4">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="text-[10px] font-bold text-[#c9a84c] bg-[#c9a84c]/10 px-2 py-0.5 rounded uppercase font-mono">Propuesta 02</span>
                            <span class="text-[9px] font-mono px-2 py-0.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-400">Esfuerzo: Alto</span>
                        </div>
                        <h3 class="text-lg font-bold text-white leading-snug">Sistema de Inventario QR / RFID en Tiempo Real</h3>
                        <p class="text-xs text-[#c9a84c] font-mono mt-0.5">Logística Inteligente y Eficiencia Interna</p>
                    </div>
                    <span class="text-neutral-500 text-lg transition-transform" id="arrow-prop-2-content">▼</span>
                </div>
                <div class="hidden px-6 pb-6 pt-2 border-t border-white/5 bg-black/15" id="prop-2-content">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 text-xs">
                        <div class="space-y-4">
                            <p class="text-slate-300 text-sm leading-relaxed"><strong>Descripción:</strong> Digitalización transversal de la bodega de bobinas de lana e hilos a través de marcado unificado con códigos QR o etiquetas RFID integradas en tiempo real a la base del ERP Bejerman.</p>
                            <div class="p-4 rounded-xl border border-white/10 bg-[#1f1f3a]/50">
                                <h4 class="font-bold text-[#c9a84c] mb-1">Impacto de Negocio Proyectado:</h4>
                                <p class="text-slate-200">Reducción del 40% en demoras de alistamiento de pedidos, eliminación total del stock perdido y posibilidad de habilitar preventas automáticas online confiables.</p>
                            </div>
                        </div>
                        <div class="bg-black/20 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                            <div class="space-y-1">
                                <span class="text-[10px] text-white/40 font-mono block">PLAZO ESTIMADO</span>
                                <span class="text-base font-bold text-white block">12 semanas</span>
                                <span class="text-[10px] text-white/40 font-mono block mt-3">MÓDULOS DE TECNOLOGÍA</span>
                                <ul class="list-disc pl-4 text-[11px] text-slate-300 space-y-1 mt-1">
                                    <li>APP colectora sobre teléfonos fijos del operario</li>
                                    <li>Sincronización API con el ERP Bejerman</li>
                                    <li>Mapeo lógico de estanterías y bodegas</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Propuesta 3 -->
            <div class="border border-white/5 bg-[#121226] rounded-2xl overflow-hidden transition-all" id="prop-3">
                <div class="p-6 cursor-pointer flex items-center justify-between" onclick="toggleProposal('prop-3-content')">
                    <div class="flex-1 min-w-0 pr-4">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="text-[10px] font-bold text-[#c9a84c] bg-[#c9a84c]/10 px-2 py-0.5 rounded uppercase font-mono">Propuesta 03</span>
                            <span class="text-[9px] font-mono px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">Esfuerzo: Bajo</span>
                        </div>
                        <h3 class="text-lg font-bold text-white leading-snug">Blindaje de Navegación y Protocolos HTTPS</h3>
                        <p class="text-xs text-[#c9a84c] font-mono mt-0.5">Estándar de Seguridad y Privacidad</p>
                    </div>
                    <span class="text-neutral-500 text-lg transition-transform" id="arrow-prop-3-content">▼</span>
                </div>
                <div class="hidden px-6 pb-6 pt-2 border-t border-white/5 bg-black/15" id="prop-3-content">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 text-xs">
                        <div class="space-y-4">
                            <p class="text-slate-300 text-sm leading-relaxed"><strong>Descripción:</strong> Habilitación de certificados seguros Let's Encrypt o Cloudflare en la web, bloqueo de inyecciones y activación de acceso multifactor (MFA) para todo el personal autorizado sobre el ERP administrativo.</p>
                            <div class="p-4 rounded-xl border border-white/10 bg-[#1f1f3a]/50">
                                <h4 class="font-bold text-[#c9a84c] mb-1">Impacto de Negocio Proyectado:</h4>
                                <p class="text-slate-200">Mejora drástica del SEO, supresión de advertencias de sitio web inseguro e indemnización de filtración de datos contables corporativos.</p>
                            </div>
                        </div>
                        <div class="bg-black/20 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                            <div class="space-y-1">
                                <span class="text-[10px] text-white/40 font-mono block">PLAZO ESTIMADO</span>
                                <span class="text-base font-bold text-white block">2 semanas</span>
                                <span class="text-[10px] text-white/40 font-mono block mt-3">MÓDULOS DE TECNOLOGÍA</span>
                                <ul class="list-disc pl-4 text-[11px] text-slate-300 space-y-1 mt-1">
                                    <li>TLS 1.3 / SSL Certificates</li>
                                    <li>Firewall perimetral y mitigación de DDoS</li>
                                    <li>OTP / MFA de Google para accesos</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Propuesta 4 -->
            <div class="border border-white/5 bg-[#121226] rounded-2xl overflow-hidden transition-all" id="prop-4">
                <div class="p-6 cursor-pointer flex items-center justify-between" onclick="toggleProposal('prop-4-content')">
                    <div class="flex-1 min-w-0 pr-4">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="text-[10px] font-bold text-[#c9a84c] bg-[#c9a84c]/10 px-2 py-0.5 rounded uppercase font-mono">Propuesta 04</span>
                            <span class="text-[9px] font-mono px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">Esfuerzo: Bajo</span>
                        </div>
                        <h3 class="text-lg font-bold text-white leading-snug">Metodologías Ágiles y Kanban Digital</h3>
                        <p class="text-xs text-[#c9a84c] font-mono mt-0.5">Colaboración Interdepartamental Ágil</p>
                    </div>
                    <span class="text-neutral-500 text-lg transition-transform" id="arrow-prop-4-content">▼</span>
                </div>
                <div class="hidden px-6 pb-6 pt-2 border-t border-white/5 bg-black/15" id="prop-4-content">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 text-xs">
                        <div class="space-y-4">
                            <p class="text-slate-300 text-sm leading-relaxed"><strong>Descripción:</strong> Reestructurar el seguimiento comercial y los despachos especiales implementando tableros Kanban digitales para sincronizar ventas, diseño, planta e intermediarios finales de manera visual y clara.</p>
                            <div class="p-4 rounded-xl border border-white/10 bg-[#1f1f3a]/50">
                                <h4 class="font-bold text-[#c9a84c] mb-1">Impacto de Negocio Proyectado:</h4>
                                <p class="text-slate-200">Aumento del 20% en entrega a tiempo de productos personalizados, supresión de malentendidos logísticos e integración directa del equipo.</p>
                            </div>
                        </div>
                        <div class="bg-black/20 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                            <div class="space-y-1">
                                <span class="text-[10px] text-white/40 font-mono block">PLAZO ESTIMADO</span>
                                <span class="text-base font-bold text-white block">4 semanas</span>
                                <span class="text-[10px] text-white/40 font-mono block mt-3">MÓDULOS DE TECNOLOGÍA</span>
                                <ul class="list-disc pl-4 text-[11px] text-slate-300 space-y-1 mt-1">
                                    <li>Tableros Kanban digitales (Trello, Jira)</li>
                                    <li>Flujos automatizados de correos según estado</li>
                                    <li>Indicadores semanales de Lead Time de entrega</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Propuesta 5 -->
            <div class="border border-white/5 bg-[#121226] rounded-2xl overflow-hidden transition-all" id="prop-5">
                <div class="p-6 cursor-pointer flex items-center justify-between" onclick="toggleProposal('prop-5-content')">
                    <div class="flex-1 min-w-0 pr-4">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="text-[10px] font-bold text-[#c9a84c] bg-[#c9a84c]/10 px-2 py-0.5 rounded uppercase font-mono">Propuesta 05</span>
                            <span class="text-[9px] font-mono px-2 py-0.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-400">Esfuerzo: Alto</span>
                        </div>
                        <h3 class="text-lg font-bold text-white leading-snug">Estudio Cocreador Boutique de Alfombras</h3>
                        <p class="text-xs text-[#c9a84c] font-mono mt-0.5">Nuevos Modelos de Negocio Personalizados</p>
                    </div>
                    <span class="text-neutral-500 text-lg transition-transform" id="arrow-prop-5-content">▼</span>
                </div>
                <div class="hidden px-6 pb-6 pt-2 border-t border-white/5 bg-black/15" id="prop-5-content">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 text-xs">
                        <div class="space-y-4">
                            <p class="text-slate-300 text-sm leading-relaxed"><strong>Descripción:</strong> Habilitar un creador de diseño web interactivo en 2D que permita a los estudios de arquitectura diseñar, texturizar y cotizar instantáneamente sus propuestas uniendo el algoritmo interno del consumo de lana.</p>
                            <div class="p-4 rounded-xl border border-white/10 bg-[#1f1f3a]/50">
                                <h4 class="font-bold text-[#c9a84c] mb-1">Impacto de Negocio Proyectado:</h4>
                                <p class="text-slate-200">Acelera el ciclo de cotización y cierre del pedido boutique de días a apenas minutos, fidelizando a los arquitectos más modernos.</p>
                            </div>
                        </div>
                        <div class="bg-black/20 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                            <div class="space-y-1">
                                <span class="text-[10px] text-white/40 font-mono block">PLAZO ESTIMADO</span>
                                <span class="text-base font-bold text-white block">14 semanas</span>
                                <span class="text-[10px] text-white/40 font-mono block mt-3">MÓDULOS DE TECNOLOGÍA</span>
                                <ul class="list-disc pl-4 text-[11px] text-slate-300 space-y-1 mt-1">
                                    <li>Editor Web Canvas interactivo</li>
                                    <li>Sincronización de reglas en base al consumo de lana</li>
                                    <li>Exportación de diagramas CAD directamente a los telares</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SIMULADOR DINÁMICO CORE -->
    <section id="simulador" class="max-w-7xl mx-auto px-6 py-16 scroll-mt-20">
        <div class="bg-[#121226]/60 border border-white/5 rounded-2xl p-6 md:p-8">
            <h3 class="text-2xl font-bold text-white tracking-tight flex items-center gap-2 mb-2">
                Simulador Vial de Transformación Digital 2026
            </h3>
            <p class="text-xs text-slate-400 mb-8 max-w-2xl leading-relaxed">
                Interactúe con la viabilidad y priorización del proyecto. Seleccione los casilleros de abajo para calcular en tiempo real el potencial de facturación del e-commerce, el calendario unificado con overhead técnico y el grado de madurez digital.
            </p>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <!-- Checkboxes -->
                <div class="lg:col-span-7 space-y-3">
                    <span class="text-[10px] font-mono text-white/40 uppercase tracking-widest block mb-1">Estrategias Combinadas</span>
                    
                    <label class="flex items-center gap-3 p-4 rounded-xl bg-black/30 border border-white/5 cursor-pointer selection:bg-transparent">
                        <input type="checkbox" id="chk-1" checked onchange="recalculateSim()" class="w-4 h-4 rounded border-white/10 accent-[#c9a84c]">
                        <div>
                            <span class="block text-xs font-semibold text-white">Propuesta 01 - Visualizador AR (+15% ventas)</span>
                            <span class="block text-[10px] font-mono text-neutral-500">Esfuerzo: Medio | Plazo: 10 semanas</span>
                        </div>
                    </label>

                    <label class="flex items-center gap-3 p-4 rounded-xl bg-black/30 border border-white/5 cursor-pointer selection:bg-transparent">
                        <input type="checkbox" id="chk-2" checked onchange="recalculateSim()" class="w-4 h-4 rounded border-white/10 accent-[#c9a84c]">
                        <div>
                            <span class="block text-xs font-semibold text-white">Propuesta 02 - Inventario Conectado (+8% ventas)</span>
                            <span class="block text-[10px] font-mono text-neutral-500">Esfuerzo: Alto | Plazo: 12 semanas</span>
                        </div>
                    </label>

                    <label class="flex items-center gap-3 p-4 rounded-xl bg-black/30 border border-white/5 cursor-pointer selection:bg-transparent">
                        <input type="checkbox" id="chk-3" checked onchange="recalculateSim()" class="w-4 h-4 rounded border-white/10 accent-[#c9a84c]">
                        <div>
                            <span class="block text-xs font-semibold text-white">Propuesta 03 - Blindaje y HTTPS (+3% ventas)</span>
                            <span class="block text-[10px] font-mono text-neutral-500">Esfuerzo: Bajo | Plazo: 2 semanas</span>
                        </div>
                    </label>

                    <label class="flex items-center gap-3 p-4 rounded-xl bg-black/30 border border-white/5 cursor-pointer selection:bg-transparent">
                        <input type="checkbox" id="chk-4" checked onchange="recalculateSim()" class="w-4 h-4 rounded border-white/10 accent-[#c9a84c]">
                        <div>
                            <span class="block text-xs font-semibold text-white">Propuesta 04 - Kanban Digital (+2% ventas)</span>
                            <span class="block text-[10px] font-mono text-neutral-500">Esfuerzo: Bajo | Plazo: 4 semanas</span>
                        </div>
                    </label>

                    <label class="flex items-center gap-3 p-4 rounded-xl bg-black/30 border border-white/5 cursor-pointer selection:bg-transparent">
                        <input type="checkbox" id="chk-5" checked onchange="recalculateSim()" class="w-4 h-4 rounded border-white/10 accent-[#c9a84c]">
                        <div>
                            <span class="block text-xs font-semibold text-white">Propuesta 05 - Cocreador Boutique (+12% ventas)</span>
                            <span class="block text-[10px] font-mono text-neutral-500">Esfuerzo: Alto | Plazo: 14 semanas</span>
                        </div>
                    </label>
                </div>

                <!-- Sim Outputs -->
                <div class="lg:col-span-5 bg-black/50 border border-white/5 rounded-xl p-6 flex flex-col justify-between gap-5">
                    <div class="space-y-4">
                        <span class="text-[10px] font-mono text-white/40 uppercase block">INDICADORES INTEGRADOS</span>

                        <div class="p-4 bg-white/[0.02] border border-white/5 rounded-lg flex justify-between items-center">
                            <div>
                                <span class="text-[9px] font-mono text-white/40 uppercase block">Ventas Canal Digital</span>
                                <span class="text-3xl font-black text-white block mt-1" id="sim-sales">45%</span>
                                <span class="text-[9px] font-mono text-red-400">Base Histórica: 5%</span>
                            </div>
                        </div>

                        <div class="p-4 bg-white/[0.02] border border-white/5 rounded-lg flex justify-between items-center">
                            <div>
                                <span class="text-[9px] font-mono text-white/40 uppercase block">Plazo Estimado (Mitigador)</span>
                                <span class="text-2xl font-bold text-white block mt-1" id="sim-timeline">18 semanas</span>
                                <span class="text-[9px] font-mono text-neutral-500 leading-none block mt-1">Con traslape técnico paralelo</span>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between items-center mb-1">
                                <span class="text-[9px] font-mono text-white/40 uppercase">Índice Madurez Digital</span>
                                <span class="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded" id="sim-score-lbl">Excelente 4.0</span>
                            </div>
                            <span class="text-2xl font-black text-white" id="sim-score font-sans">98 / 100</span>
                        </div>
                    </div>

                    <div class="p-3.5 bg-[#181830] border border-[#c9a84c]/20 rounded-lg text-[11px] text-[#e8d28a] italic" id="sim-advice">
                        ¡Ruta Estratégica Ideada! Integra flujos de logística física robustas junto a excelentes interfaces inmersivas de alta gama.
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- HABILIDADES 4.0 DEL EQUIPO ESPARTANO -->
    <section id="habilidades" class="max-w-7xl mx-auto px-6 py-16 scroll-mt-20">
        <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs font-mono text-[#c9a84c] font-bold uppercase tracking-widest bg-[#c9a84c]/5 px-3 py-1 rounded">Talento Humano</span>
            <h2 class="text-3xl font-black text-white tracking-tight mt-3">Habilidades 4.0 de El Espartano</h2>
            <p class="text-xs text-slate-400 mt-2">La transformación digital requiere cultura y talento humano. Identificamos excelentes bases operativas preexistentes dentro de la firma.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div class="bg-[#121226]/50 border border-white/5 p-6 rounded-xl hover:border-white/15 transition-colors">
                <span class="text-2xl font-bold text-[#c9a84c] font-mono block mb-3">01</span>
                <h4 class="font-bold text-white text-base">Alfabetización de Datos</h4>
                <p class="text-xs text-slate-400 leading-relaxed mt-2">Personal capacitado en la interpretación de planillas contables, facturación y control primario de telas, listos para migrar a tableros Kanban interactivos.</p>
            </div>
            <div class="bg-[#121226]/50 border border-white/5 p-6 rounded-xl hover:border-white/15 transition-colors">
                <span class="text-2xl font-bold text-[#c9a84c] font-mono block mb-3">02</span>
                <h4 class="font-bold text-white text-base">Diseño Digital Aplicado</h4>
                <p class="text-xs text-slate-400 leading-relaxed mt-2">Excelente destreza en utilidades como Adobe Creative Suite y cargadores Net Graphics por el equipo creativo. Cuentan con el talento gráfico listo para el cocreador.</p>
            </div>
            <div class="bg-[#121226]/50 border border-white/5 p-6 rounded-xl hover:border-white/15 transition-colors">
                <span class="text-2xl font-bold text-[#c9a84c] font-mono block mb-3">03</span>
                <h4 class="font-bold text-white text-base">Adaptabilidad & Aprendizaje</h4>
                <p class="text-xs text-slate-400 leading-relaxed mt-2">Rápido acogimiento de herramientas de inteligencia artificial para modelamiento promocional en marketing, facilitando la capacitación del stock RFID y la agilidad.</p>
            </div>
        </div>
    </section>

    <!-- CONCLUSIÓN -->
    <section class="max-w-4xl mx-auto px-6 py-16 text-center scroll-mt-20">
        <div class="bg-gradient-to-tr from-[#121226] to-[#1a1a36] border border-[#c9a84c]/20 p-8 rounded-3xl relative">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c9a84c] text-black text-[10px] font-bold font-mono px-4 py-1 rounded-full uppercase">
                Veredicto Final de Consultora
            </div>
            <h3 class="text-2xl font-black text-white mt-2">Visión de Síntesis Estratégica</h3>
            <p class="text-xs md:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto mt-4 font-sans">
                El Espartano es una empresa <strong>innovadora tradicional</strong>, no disruptiva destructiva. A lo largo de sus 80 años de historia, ha demostrado resiliencia y adopción computarizada excepcional (diseños Net Graphics, cálculo milimétrico de lana). 
            </p>
            <p class="text-xs md:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto mt-3 font-sans">
                La implementación del roadmap propuesto por el <strong>Grupo 5</strong> no busca reemplazar su valiosa tradición, sino empoderarla: cerrando brechas críticas de seguridad web (HTTPS), destrabando ineficiencias de stock físico (RFID), y abriendo la venta interactiva de alta gama (AR + Co-creador). El salto digital está listo.
            </p>
        </div>
    </section>

    <!-- EQUIPO CONSULTOR -->
    <section id="equipo" class="max-w-7xl mx-auto px-6 py-16 scroll-mt-20">
        <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs font-mono text-[#c9a84c] font-bold uppercase tracking-widest bg-[#c9a84c]/5 px-3 py-1 rounded">Los Diseñadores del Hub</span>
            <h2 class="text-3xl font-black text-white tracking-tight mt-3">Equipo de Consultores</h2>
            <p class="text-xs text-slate-400 mt-2">Estudiantes de la Licenciatura en Negocios Digitales de la Universidad de San Andrés y Digital House.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
            <!-- EM -->
            <div class="bg-[#121226] border border-white/5 p-5 rounded-2xl flex flex-col justify-between">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 rounded bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center font-bold text-[#c9a84c] font-mono">EM</div>
                    <div><h4 class="font-bold text-white text-sm">Enrique Miles</h4><p class="text-[9px] text-[#c9a84c] font-semibold font-mono uppercase tracking-wider">Consultor TCD</p></div>
                </div>
                <div class="text-[11px] text-neutral-400 space-y-1 mt-2">
                    <p><strong>Rol:</strong> Consultor TCD</p>
                    <p><strong>Nexo:</strong> Contacto Estratégico Textil</p>
                </div>
            </div>

            <!-- SA -->
            <div class="bg-[#121226] border border-white/5 p-5 rounded-2xl flex flex-col justify-between">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 rounded bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center font-bold text-[#c9a84c] font-mono">SA</div>
                    <div><h4 class="font-bold text-white text-sm">Santino Andrelo</h4><p class="text-[9px] text-[#c9a84c] font-semibold font-mono uppercase tracking-wider">Consultor TCD</p></div>
                </div>
                <div class="text-[11px] text-neutral-400 space-y-1 mt-2">
                    <p><strong>Rol:</strong> Consultor TCD</p>
                    <p><strong>Foco:</strong> Diseño Inmersivo WebAR</p>
                </div>
            </div>

            <!-- DL -->
            <div class="bg-[#121226] border border-white/5 p-5 rounded-2xl flex flex-col justify-between">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 rounded bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center font-bold text-[#c9a84c] font-mono">DL</div>
                    <div><h4 class="font-bold text-white text-sm">Duncan Lear</h4><p class="text-[9px] text-[#c9a84c] font-semibold font-mono uppercase tracking-wider">Consultor TCD</p></div>
                </div>
                <div class="text-[11px] text-neutral-400 space-y-1 mt-2">
                    <p><strong>Rol:</strong> Consultor TCD</p>
                    <p><strong>Foco:</strong> Automatización de Depósito</p>
                </div>
            </div>

            <!-- GL -->
            <div class="bg-[#121226] border border-white/5 p-5 rounded-2xl flex flex-col justify-between">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 rounded bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center font-bold text-[#c9a84c] font-mono">GL</div>
                    <div><h4 class="font-bold text-white text-sm">Galo Llorente</h4><p class="text-[9px] text-[#c9a84c] font-semibold font-mono uppercase tracking-wider">Consultor TCD</p></div>
                </div>
                <div class="text-[11px] text-neutral-400 space-y-1 mt-2">
                    <p><strong>Rol:</strong> Consultor TCD</p>
                    <p><strong>Foco:</strong> Penetración e-Commerce</p>
                </div>
            </div>

            <!-- JN -->
            <div class="bg-[#121226] border border-white/5 p-5 rounded-2xl flex flex-col justify-between">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 rounded bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center font-bold text-[#c9a84c] font-mono">JN</div>
                    <div><h4 class="font-bold text-white text-sm">Juan Bautista Noble</h4><p class="text-[9px] text-[#c9a84c] font-semibold font-mono uppercase tracking-wider">Consultor TCD</p></div>
                </div>
                <div class="text-[11px] text-neutral-400 space-y-1 mt-2">
                    <p><strong>Rol:</strong> Consultor TCD</p>
                    <p><strong>Foco:</strong> Blindaje Cortafuegos / MFA</p>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="mt-20 border-t border-white/5 pt-8 text-center text-xs text-neutral-500 max-w-7xl mx-auto px-6">
        <p>© 2026 Grupo 5 - Tecnología y Cultura Digital. Licenciatura en Negocios Digitales.</p>
        <p class="text-[#c9a84c] mt-1.5 opacity-80 font-mono">Universidad de San Andrés + Digital House</p>
    </footer>

    <!-- INTERACTIVE SCRIPTS -->
    <script>
        // Toggle diagnosis content expander
        function toggleDiagnosis(id) {
            const el = document.querySelector('.id-' + id);
            if (el.classList.contains('hidden')) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        }

        // Toggle proposal items
        function toggleProposal(id) {
            const el = document.getElementById(id);
            const arrow = document.getElementById('arrow-' + id);
            if (el.classList.contains('hidden')) {
                el.classList.remove('hidden');
                arrow.textContent = '▲';
            } else {
                el.classList.add('hidden');
                arrow.textContent = '▼';
            }
        }

        // Recalculate Simulator Metrics
        function recalculateSim() {
            let sales = 5;
            let score = 25;
            let activeWeeks = [];
            let activeCount = 0;

            const chk1 = document.getElementById('chk-1').checked;
            const chk2 = document.getElementById('chk-2').checked;
            const chk3 = document.getElementById('chk-3').checked;
            const chk4 = document.getElementById('chk-4').checked;
            const chk5 = document.getElementById('chk-5').checked;

            if (chk1) { sales += 15; score += 15; activeWeeks.push(10); activeCount++; }
            if (chk2) { sales += 8; score += 18; activeWeeks.push(12); activeCount++; }
            if (chk3) { sales += 3; score += 12; activeWeeks.push(2); activeCount++; }
            if (chk4) { sales += 2; score += 10; activeWeeks.push(4); activeCount++; }
            if (chk5) { sales += 12; score += 18; activeWeeks.push(14); activeCount++; }

            // Math outputs
            let finalWeeks = 0;
            if (activeWeeks.length > 0) {
                const maxWeek = Math.max(...activeWeeks);
                const overhead = (activeWeeks.length - 1) * 1;
                finalWeeks = maxWeek + overhead;
            }

            // Bind values
            document.getElementById('sim-sales').textContent = sales + '%';
            document.getElementById('sim-timeline').textContent = finalWeeks === 0 ? 'Sin estimar' : finalWeeks + ' semanas';
            document.getElementById('sim-score').textContent = score + ' / 100';

            // Grade Label
            let lbl = 'Inicial / Analógico';
            let colorCls = 'text-rose-400 bg-rose-500/10 border border-rose-500/20';
            if (score >= 40 && score < 65) {
                lbl = 'Digitalización Parcial';
                colorCls = 'text-amber-400 bg-amber-500/10 border border-amber-500/20';
            } else if (score >= 65 && score < 85) {
                lbl = 'Ecosistema Conectado';
                colorCls = 'text-blue-400 bg-blue-500/10 border border-blue-500/20';
            } else if (score >= 85) {
                lbl = 'Excelente 4.0';
                colorCls = 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20';
            }

            const lblEl = document.getElementById('sim-score-lbl');
            lblEl.textContent = lbl;
            lblEl.className = 'text-[9px] font-mono px-2 py-0.5 rounded ' + colorCls;

            // Advice logic
            let advice = 'Sugerencia: Debes habilitar de forma urgente al menos la Propuesta 3 (HTTPS/Seguridad) para lanzar el portal.';
            if (score >= 30 && score < 60) {
                advice = 'Cuentas con un avance operativo básico, pero debes combinar la optimización de stock interno con la ampliación de ventas.';
            } else if (score >= 60) {
                advice = '¡Ruta Estratégica Ideada! Integra flujos de logística física robustas junto a excelentes interfaces inmersivas de alta gama.';
            }
            document.getElementById('sim-advice').textContent = advice;
        }

        // Run recruitment initially
        recalculateSim();
    </script>
</body>
</html>`;

    // Package the file contents as raw blob octet format to force download behavior in browser
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = 'grupo5_tcd_el_espartano.html';
    document.body.appendChild(link);
    link.click();
    
    // Clean up memory space
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 antialiased selection:bg-[#c9a84c] selection:text-[#0f172a] relative overflow-x-hidden flex flex-col font-sans">
      
      {/* Dynamic Background subtle ornaments */}
      <div className="absolute top-[5%] left-[-20%] w-[600px] h-[600px] bg-[#c9a84c]/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-[35%] right-[-10%] w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-[#c9a84c]/5 rounded-full blur-[140px] pointer-events-none"></div>

      {/* HEADER / NAVIGATION BAR */}
      <nav className="h-16 border-b border-white/10 flex items-center justify-between px-6 md:px-8 bg-[#1a1a2e] sticky top-0 z-[110] backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#c9a84c] rounded flex items-center justify-center font-extrabold text-[#1a1a2e] tracking-tight text-sm">G5</div>
          <span className="text-base font-bold tracking-tight text-white font-sans">Consultora TCD</span>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6 text-xs uppercase tracking-widest text-slate-300">
          <span className="text-[#c9a84c] font-black border-b border-[#c9a84c] pb-1 font-mono text-[10px] sm:text-xs">Dashboard Estratégico</span>
          <span className="opacity-60 hidden md:inline text-[10px] font-mono">UdeSA + Digital House</span>
          <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded font-mono text-[10px] text-white">2026</span>
        </div>
      </nav>

      {/* TWO-COLUMN LAYOUT WRAPPER */}
      <div className="flex-1 flex flex-col lg:flex-row relative z-10 w-full">
        
        {/* SIDEBAR: CONTEXT & TEAM (STATIC DESKTOP, STAYS TO THE LEFT) */}
        <aside className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#161628] p-6 flex flex-col gap-8 shrink-0 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] overflow-y-auto">
          
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-[#c9a84c] mb-3 font-mono font-black border-b border-white/5 pb-1">Navegación</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-200 font-medium font-sans">
              <a href="#sobre" className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#c9a84c]/40 hover:text-[#c9a84c] hover:bg-[#c9a84c]/5 hover:translate-x-1 transition-all font-semibold shadow-sm">
                <span>🎯</span> El Desafío
              </a>
              <a href="#diagnostico" className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#c9a84c]/40 hover:text-[#c9a84c] hover:bg-[#c9a84c]/5 hover:translate-x-1 transition-all font-semibold shadow-sm">
                <span>⚠️</span> Diagnósticos
              </a>
              <a href="#pilares" className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#c9a84c]/40 hover:text-[#c9a84c] hover:bg-[#c9a84c]/5 hover:translate-x-1 transition-all font-semibold shadow-sm">
                <span>⚙️</span> Pilares 4.0
              </a>
              <a href="#propuestas" className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#c9a84c]/40 hover:text-[#c9a84c] hover:bg-[#c9a84c]/5 hover:translate-x-1 transition-all font-semibold shadow-sm">
                <span>💡</span> Propuestas
              </a>
              <a href="#simulador" className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#c9a84c]/40 hover:text-[#c9a84c] hover:bg-[#c9a84c]/5 hover:translate-x-1 transition-all font-semibold shadow-sm">
                <span>🎛️</span> Simulador Vial
              </a>
              <a href="#habilidades" className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#c9a84c]/40 hover:text-[#c9a84c] hover:bg-[#c9a84c]/5 hover:translate-x-1 transition-all font-semibold shadow-sm">
                <span>👥</span> Habilidades
              </a>
              <a href="#equipo" className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#c9a84c]/40 hover:text-[#c9a84c] hover:bg-[#c9a84c]/5 hover:translate-x-1 transition-all font-semibold shadow-sm">
                <span>🎓</span> Equipo Consultor
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-[#c9a84c] mb-3 font-mono font-black border-b border-white/5 pb-1">Equipo Consultor</h3>
            <div className="space-y-2.5 font-sans">
              <div className="text-xs opacity-80 pl-3 leading-tight hover:text-[#c9a84c] transition-colors">Enrique Miles</div>
              <div className="text-xs opacity-80 pl-3 leading-tight hover:text-[#c9a84c] transition-colors">Santino Andrelo</div>
              <div className="text-xs opacity-80 pl-3 leading-tight hover:text-[#c9a84c] transition-colors">Duncan Lear</div>
              <div className="text-xs opacity-80 pl-3 leading-tight hover:text-[#c9a84c] transition-colors">Galo Llorente</div>
              <div className="text-xs opacity-80 pl-3 leading-tight hover:text-[#c9a84c] transition-colors">Juan Bautista Noble</div>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-[#c9a84c] mb-3 font-mono font-black border-b border-white/5 pb-1">Cliente</h3>
            <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 font-sans">
              <p className="text-xs font-bold text-white mb-1">El Espartano</p>
              <p className="text-[11px] leading-relaxed opacity-70">Textil con 80 años de trayectoria. Líder en alfombras y césped sintético.</p>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-[#c9a84c] mb-3 font-mono font-black border-b border-white/5 pb-1">Entregables</h3>
            <button 
              onClick={downloadStandaloneHTML}
              className="w-full py-2 bg-[#c9a84c] hover:bg-[#d4b96a] text-[#1a1a2e] font-bold text-xs rounded uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" /> Descargar .HTML
            </button>
          </div>

          <div className="mt-auto pt-4 border-t border-white/5 font-sans">
            <div className="text-[9px] text-white/30 uppercase tracking-wider font-mono font-bold">Institución</div>
            <p className="text-xs font-semibold text-slate-300">Lic. Negocios Digitales</p>
            <p className="text-[9px] text-slate-500 font-mono">UdeSA + Digital House</p>
          </div>
        </aside>

        {/* MAIN WORKSPACE / CONTENT COLUMN */}
        <div className="flex-grow bg-[#0f172a] p-6 lg:p-8 space-y-10 overflow-y-auto w-full">
          
          {/* HERO BANNER SECTION (POLISHED INTEGRATED THEME) */}
          <div className="bg-gradient-to-r from-[#1a1a2e] to-transparent p-6 md:p-8 rounded-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Transformación Digital: <span className="text-[#c9a84c]">El Espartano</span>
              </h1>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Modernizando una tradición de 80 años de diseño y confección textil para la era del e-commerce interactivo, controles inteligentes y ciberseguridad avanzada.
              </p>
            </div>
            <div className="flex shrink-0 gap-3 w-full sm:w-auto">
              <a 
                href="#propuestas" 
                className="flex-1 sm:flex-none px-6 py-2.5 bg-[#c9a84c] text-[#0f172a] font-bold text-xs rounded uppercase tracking-wider hover:bg-[#d4b96a] transition-all flex items-center justify-center text-center active:scale-95"
              >
                Ver Propuestas
              </a>
              <button 
                onClick={downloadStandaloneHTML}
                className="flex-1 sm:flex-none px-4 py-2.5 bg-white/5 border border-white/15 text-slate-300 hover:bg-white/10 font-bold text-xs rounded uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 active:scale-95"
              >
                <Download className="w-4 h-4" /> HTML Offline
              </button>
            </div>
          </div>

          {/* Rapid parameters row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pb-4">
            <div className="bg-[#1e1e35] border border-white/10 p-4 rounded-xl shadow-md">
              <span className="block text-[10px] text-[#c9a84c] font-mono tracking-wider uppercase font-bold">Industria Analizada</span>
              <span className="block text-white font-bold text-lg mt-0.5 font-sans">Textil & Alfombras</span>
            </div>
            <div className="bg-[#1e1e35] border border-white/10 p-4 rounded-xl shadow-md">
              <span className="block text-[10px] text-[#c9a84c] font-mono tracking-wider uppercase font-bold">Estatura Histórica</span>
              <span className="block text-white font-bold text-lg mt-0.5 font-sans">Líder (80+ Años)</span>
            </div>
            <div className="bg-[#1e1e35] border border-white/10 p-4 rounded-xl shadow-md">
              <span className="block text-[10px] text-[#c9a84c] font-mono tracking-wider uppercase font-bold">Fuerza Operativa</span>
              <span className="block text-white font-bold text-lg mt-0.5 font-sans">~100 Empleados</span>
            </div>
            <div className="bg-[#1e1e35] border border-white/10 p-4 rounded-xl shadow-md">
              <span className="block text-[10px] text-red-400 font-mono tracking-wider uppercase font-bold">Ventas Canal Online</span>
              <span className="block text-red-300 font-bold text-lg mt-0.5 font-sans">Solo un 5%</span>
            </div>
          </div>

          {/* EL DESAFÍO / REVISIÓN INICIAL */}
          <section id="sobre" className="scroll-mt-20">
            <div className="bg-[#1e1e35] border border-white/10 p-6 md:p-8 rounded-xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#c9a84c] rounded-full"></span>
                <h2 className="text-xs uppercase font-mono tracking-widest text-[#c9a84c] font-bold">El Desafío Estratégico</h2>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                Equilibrar la Calidad Artesanal con la Agilidad de Planta 4.0
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-4xl font-sans">
                Como consultores estudiantes de la <strong>Universidad de San Andrés & Digital House</strong>, formulamos un diagnóstico integral de El Espartano. El mayor reto de la compañía no es la manufacturación, rubro en el cual son indiscutidos líderes de calidad con tejido de alta gama, sino las asimetrías de control de stock manual, la desconexión del depósito, la ausencia de HTTPS corporativo, y su rezago en captación de venta directa e-commerce.
              </p>
            </div>
          </section>

          {/* DIAGNÓSTICO ACTUAL */}
          <section id="diagnostico" className="scroll-mt-20 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-6 bg-[#c9a84c] rounded-full"></span>
                <h2 className="text-xs uppercase font-mono tracking-widest text-[#c9a84c] font-bold">Diagnóstico de Madurez Actual</h2>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-white">Análisis Financiero y de Procesos</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-3xl leading-relaxed">
                Identificamos 6 brechas operativas críticas en El Espartano. Haga clic en los encabezados inferiores para abrir las implicancias técnicas y correspondencia estratégica del roadmap.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {DIAGNOSTICS.map((diag) => (
                <DiagnosticCard 
                  key={diag.id} 
                  item={diag} 
                  onSelectSolution={handleSelectSolution} 
                />
              ))}
            </div>
          </section>

          {/* PILARES TECNOLÓGICOS (4.0) */}
          <section id="pilares" className="scroll-mt-20">
            <TechPillarsDash />
          </section>

          {/* PROPUESTAS DE TRANSFORMACIÓN DIGITAL */}
          <section id="propuestas" className="scroll-mt-20 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-6 bg-[#c9a84c] rounded-full"></span>
                <h2 className="text-xs uppercase font-mono tracking-widest text-[#c9a84c] font-bold">Plan Maestro de Innovación</h2>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-white">Propuestas Estrella Recomendadas</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-3xl leading-relaxed">
                Haga clic para expandir y estudiar en detalle la justificación de retorno de inversión (ROI), plazos sugeridos de ejecución técnica y arquitectura de integración.
              </p>
            </div>

            <div className="space-y-4">
              {PROPOSALS.map((prop) => (
                <ProposalCard 
                  key={prop.id}
                  proposal={prop}
                  isExpanded={selectedProposalId === prop.id}
                  onToggle={() => setSelectedProposalId(selectedProposalId === prop.id ? null : prop.id)}
                />
              ))}
            </div>
          </section>

          {/* INTERACTIVE CALCULATOR */}
          <section id="simulador" className="scroll-mt-20">
            <CalculatorDash />
          </section>

          {/* HABILIDADES 4.0 DEL EQUIPO ESPARTANO */}
          <section id="habilidades" className="scroll-mt-20 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-6 bg-[#c9a84c] rounded-full"></span>
                <h2 className="text-xs uppercase font-mono tracking-widest text-[#c9a84c] font-bold">Cultura Organizacional</h2>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-white">Habilidades 4.0 del Equipo Humano</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-3xl leading-relaxed">
                La transición es más que sistemas. El Espartano ya dispone de excelentes bases y cultura técnica que sirven de asidero directo para el roadmap sugerido.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#1e1e35] border border-white/10 p-5 rounded-xl shadow-md hover:border-[#c9a84c]/20 transition-all font-sans">
                <span className="text-[10px] uppercase tracking-widest text-[#c9a84c] font-bold block mb-1 font-mono">Pilar 4.1</span>
                <h4 className="font-bold text-white text-base">Alfabetización de datos</h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                  Operadores habituados al cálculo matemático de hilos de lana, peso y densidad por lote, altamente calificados para migrar a controles semiautomatizados de inventario y ERP.
                </p>
              </div>

              <div className="bg-[#1e1e35] border border-white/10 p-5 rounded-xl shadow-md hover:border-[#c9a84c]/20 transition-all font-sans">
                <span className="text-[10px] uppercase tracking-widest text-[#c9a84c] font-bold block mb-1 font-mono">Pilar 4.2</span>
                <h4 className="font-bold text-white text-base">Diseño computarizado</h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                  Sólida asimilación de herramientas Adobe Creative por el núcleo del taller creativo de dibujo que facilita la integración inmediata con el Cocreador Boutique e-commerce.
                </p>
              </div>

              <div className="bg-[#1e1e35] border border-white/10 p-5 rounded-xl shadow-md hover:border-[#c9a84c]/20 transition-all font-sans">
                <span className="text-[10px] uppercase tracking-widest text-[#c9a84c] font-bold block mb-1 font-mono">Pilar 4.3</span>
                <h4 className="font-bold text-white text-base">Adaptabilidad e innovación</h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                  El equipo comercial adoptó rápidamente algoritmos de maquetación promocional automática a partir de catálogos planos, demostrando velocidad de adopción tecnológica.
                </p>
              </div>
            </div>
          </section>

          {/* STRATEGIC VISION/CONCLUTION CARD */}
          <section className="max-w-4xl mx-auto py-4">
            <div className="bg-gradient-to-br from-[#c9a84c] to-[#a68938] p-6 rounded-xl text-[#0f172a] shadow-xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 font-bold text-9xl translate-x-12 translate-y-12 select-none">
                G5
              </div>
              <h2 className="text-xs font-mono font-black uppercase tracking-widest mb-1 border-b border-[#0f172a]/20 pb-1">Visión Estratégica final</h2>
              <p className="text-sm md:text-base leading-snug font-medium italic mt-3 font-sans">
                "El Espartano es una empresa innovadora, no disruptiva destructiva. Con 80 años de impecable tradición, posee las bases tecnológicas e industriales para dar un salto de valor cualitativo hacia la optimización integral de sus depósitos y la conexión directa inmersiva del mercado digital."
              </p>
              <div className="mt-4 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider font-mono">
                <span>Tradición Textil Texturada</span>
                <span>→</span>
                <span>Excelencia Digital 4.0</span>
              </div>
            </div>
          </section>

          {/* EQUIPO CONSULTORA */}
          <section id="equipo" className="scroll-mt-20 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-6 bg-[#c9a84c] rounded-full"></span>
                <h2 className="text-xs uppercase font-mono tracking-widest text-[#c9a84c] font-bold">El Dream-Team TCD</h2>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-white">El Equipo De Consultoría</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">
                Estudiantes de la Licenciatura en Negocios Digitales de la Universidad de San Andrés junto a Digital House, impulsando valor real mediante tecnología.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {TEAM.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </section>

          {/* FOOTER */}
          <footer className="h-14 bg-black/30 border border-white/10 rounded-xl flex flex-col md:flex-row items-center justify-between px-6 text-[10px] tracking-wider uppercase opacity-80 gap-2 text-center md:text-left mt-8 font-sans font-medium text-slate-400">
            <div>Proyecto Académico: Lic. en Negocios Digitales</div>
            <div className="text-[#c9a84c] font-bold">© 2026 Universidad de San Andrés • Digital House</div>
            <div>Status: Propuesta de Transición Concluida</div>
          </footer>

        </div>
      </div>
    </div>
  );
}
