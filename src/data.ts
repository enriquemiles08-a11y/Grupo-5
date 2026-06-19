import { DiagnosticItem, TechPillar, Proposal, TeamMember } from './types';

export const DIAGNOSTICS: DiagnosticItem[] = [
  {
    id: 'diag-ventas',
    title: 'Nula Presencia Directa Online',
    finding: 'Solo el 5% de las ventas son de canal digital',
    impact: 'Crítico',
    description: 'La gran mayoría de la comercialización se realiza a través de distribuidores tradicionales y visitas presenciales. Se desaprovecha el mercado de venta directa (D2C) tanto para consumidores como para arquitectos independientes.',
    consequence: 'Pérdida de penetración de mercado frente a competidores nativos digitales que capturan a las nuevas generaciones.',
    solutionRef: 'prop-ar'
  },
  {
    id: 'diag-inventario',
    title: 'Gestión de Stock Analógica',
    finding: 'Inventario y control de stock 100% manual',
    impact: 'Crítico',
    description: 'La gestión de rollos, lotes de hilos y alfombras se realiza a través de planillas físicas y la memoria de operadores experimentados. El conocimiento crítico reside en personas, no en sistemas.',
    consequence: 'Efecto látigo, demoras severas en despachos, inconsistencia de existencias e imposibilidad de vender stock real por la web.',
    solutionRef: 'prop-inventario'
  },
  {
    id: 'diag-seguridad',
    title: 'Vulnerabilidades Críticas de Portal',
    finding: 'Sitio corporativo sin protocolo seguro HTTPS',
    impact: 'Crítico',
    description: 'La navegación principal no posee certificados SSL obligatorios, lo que genera advertencias de "Sitio No Seguro" en la mayoría de los navegadores modernos y menoscaba la confianza de clientes de alta gama.',
    consequence: 'Penalización extrema del posicionamiento SEO en buscadores y exposición a ataques de interceptación de datos.',
    solutionRef: 'prop-seguridad'
  },
  {
    id: 'diag-metodologia',
    title: 'Falta de Procesos Ágiles',
    finding: 'Inexistencia de metodologías ágiles formales',
    impact: 'Medio',
    description: 'Los proyectos comerciales y de desarrollo de productos se organizan de forma jerárquica rígida sin ciclos rápidos de retroalimentación, dificultando la adaptación a cambios y nuevas modas del diseño.',
    consequence: 'Cuellos de botella interdepartamentales y baja proactividad para lanzar mejoras digitales rápidas.',
    solutionRef: 'prop-kanban'
  },
  {
    id: 'diag-logistica',
    title: 'Operación Logística Desconectada',
    finding: 'Gestión y despacho de pedidos muy manuales',
    impact: 'Alto',
    description: 'El despacho de alfombras a medida y césped sintético requiere verificaciones telefónicas, remitos escritos a mano y coordinación fragmentada con las flotas externas.',
    consequence: 'Sobrecostos de entrega, incapacidad de proveer seguimiento (tracking) al cliente y reprocesamiento constante de errores.',
    solutionRef: 'prop-kanban'
  },
  {
    id: 'diag-datos',
    title: 'Silos de Información de Negocio',
    finding: 'Ausencia de analítica unificada de ventas',
    impact: 'Alto',
    description: 'La información comercial queda guardada de forma rígida en el ERP y en cuadernos de agentes individuales. No existe un dashboard consolidado para cruzar comportamiento del consumidor directo e industrial.',
    consequence: 'Decisiones estratégicas basadas puramente en la intuición histórica en lugar de análisis predictivo de datos.',
    solutionRef: 'prop-diseno'
  }
];

export const TECH_PILLARS: TechPillar[] = [
  {
    id: 'pillar-bigdata',
    title: 'Big Data en e-Commerce',
    status: 'Parcial',
    description: 'Análisis de comportamiento en el sitio web tradicional mediante la recopilación activa de carritos abandonados e historial de navegación básico.',
    details: 'Permite identificar flujos de abandono e intereses latentes por categoría de producto, aunque actualmente no se explota comercialmente al máximo.',
    tools: ['Google Analytics', 'E-commerce Trackers']
  },
  {
    id: 'pillar-auto',
    title: 'Automatización de Producción',
    status: 'Implementado',
    description: 'Uso de maquinaria industrial semiautomatizada en planta para la costura, tejido, y calibración de densidad de alfombras de alta fidelidad y césped.',
    details: 'Garantiza calidad de fabricación homogénea, bajo margen de error técnico e informes inmediatos del estado de los telares.',
    tools: ['PLC Industrial', 'Scada System']
  },
  {
    id: 'pillar-ia',
    title: 'IA Aplicada a Catálogo',
    status: 'Parcial',
    description: 'Procesamiento de imágenes mediante inteligencia artificial para la generación rápida de fondos y contextualización de alfombras en habitaciones variadas.',
    details: 'Reduce costos de modelado 3D de ambientes reales y acelera el desarrollo de portfolios interactivos para el departamento creativo.',
    tools: ['Custom Image Generators', 'Enhancement Tools']
  },
  {
    id: 'pillar-lana',
    title: 'Software de Cubicaje Líder',
    status: 'Implementado',
    description: 'Aplicación interna desarrollada a la medida para calcular de forma milimétrica el consumo volumétrico de hilado de lana en base al patrón cargado.',
    details: 'Un valioso activo estratégico que previene el desperdicio de materia prima importada y optimiza los plazos de abastecimiento.',
    tools: ['Custom Cálculo Lana App', 'C++ Calculation Core']
  },
  {
    id: 'pillar-saas',
    title: 'Ecosistema SaaS Tradicional',
    status: 'Implementado',
    description: 'Garantía del flujo operativo mediante el uso coordinado de plataformas administrativas probadas en la industria.',
    details: 'Se cuenta con el robusto ERP Bejerman para la facturación centralizada, Adobe Suite para las tareas creativas y Dropbox para el almacenamiento remoto.',
    tools: ['ERP Bejerman', 'Adobe Creative Cloud', 'Dropbox']
  }
];

export const PROPOSALS: Proposal[] = [
  {
    id: 'prop-ar',
    number: 1,
    title: 'Visualizador de Espacios con Realidad Aumentada (AR)',
    subtitle: 'Canal Online Directo de Próxima Generación',
    description: 'Integrar una herramienta web AR sin descargas (WebAR) en la tienda virtual que permita proyectar de manera fotorrealista cualquier alfombra, baldosas de césped sintético o piso flotante directamente en el suelo de la sala o habitación del cliente usando la cámara de su celular.',
    businessImpact: 'Aumento proyectado del 35% en conversión de carritos de compras y reducción drástica (hasta de un 25%) en las devoluciones por descontento de tonos o texturas.',
    effort: 'Medio',
    impactLevel: 'Muy Alto',
    estTimeline: '8 a 10 semanas',
    iconName: 'View3d',
    techDetails: [
      'Modelos 3D optimizados en formato glTF/USDZ',
      'Librerías WebXR (Three.js o babylon.js)',
      'Detector de planos horizontal automático en navegador',
      'Integración con botones directos "Añadir al Carrito" desde el visualizador'
    ]
  },
  {
    id: 'prop-inventario',
    number: 2,
    title: 'Inventario Conectado en Tiempo Real',
    subtitle: 'Logística Inteligente y Eficiencia Interna',
    description: 'Sustituir el conteo analógico mediante la colocación de códigos de barra bidimensionales (códigos QR) o tags RFID de bajo costo en cada bobina textil, sincronizando los pasillos del depósito con una interfaz de escaneo móvil en tiempo real integrada bidireccionalmente al ERP Bejerman.',
    businessImpact: 'Eliminación completa de pérdidas de stock físico, reducción del 40% en tiempos de preparación de despachos y publicación de stock exacto disponible para preventas online.',
    effort: 'Alto',
    impactLevel: 'Muy Alto',
    estTimeline: '12 semanas',
    iconName: 'Barcode',
    techDetails: [
      'Dispositivos móviles Android robustos para operarios',
      'API REST personalizada sobre el ERP Bejerman',
      'Módulo de alertas por stock mínimo o demoras de bobinado',
      'Mapeo digital visual del layout físico del depósito'
    ]
  },
  {
    id: 'prop-seguridad',
    number: 3,
    title: 'Blindaje de Infraestructura y HTTPS',
    subtitle: 'Confianza de Marca y Criterios ESG',
    description: 'Migración y reestructuración de dominios a protocolo HTTPS seguro con certificados de validación extendida SSL, habilitación de Firewalls perimetrales (WAF) contra ataques maliciosos, y requerimiento de autenticación doble factor (MFA) obligatoria para el acceso al core de datos del ERP Bejerman.',
    businessImpact: 'Cumplimiento legal de protección de datos, incremento sustancial de posicionamiento en Google (SEO), y resguardo total de la reputación corporativa ante posibles brechas informáticas.',
    effort: 'Bajo',
    impactLevel: 'Revolucionario',
    estTimeline: '2 semanas',
    iconName: 'ShieldAlert',
    techDetails: [
      'Certificados SSL TLS 1.3 Let\'s Encrypt / Cloudflare',
      'Consolidación de políticas CORS e inyección de encabezados de seguridad',
      'Configuración de MFA (Google Authenticator) sobre portal administrativo',
      'Scans automatizados periódicos de vulnerabilidades de red'
    ]
  },
  {
    id: 'prop-kanban',
    number: 4,
    title: 'Flujos Operativos Mediante Kanban Digital',
    subtitle: 'Colaboración Interdepartamental Ágil',
    description: 'Implementar un tablero visual sincronizado (usando software abierto o plataformas existentes) para coordinar las etapas de venta, aprobación técnica de planos de alfombra, fabricación especial, embalaje y despacho, logrando visibilizar los cuellos de botella en tiempo real.',
    businessImpact: 'Mejora de la cohesión del equipo humano, descentralización de la toma de decisiones, e incremento de un 20% en puntualidad de entregas de productos personalizados.',
    effort: 'Bajo',
    impactLevel: 'Alto',
    estTimeline: '4 semanas (incluye capacitación)',
    iconName: 'Kanban',
    techDetails: [
      'Migración de tableros físicos a herramientas en la nube (Trello/ClickUp/Jira)',
      'Definición unificada de estados (Pendiente, Planos, Producción, Logística, Listo)',
      'Automatizaciones con notificaciones directas por correo/Slack ante atrasos',
      'Métricas de tiempo de ciclo (Lead Time) por tipo de producto textil'
    ]
  },
  {
    id: 'prop-diseno',
    number: 5,
    title: 'Cocreador Boutique de Alfombras Online',
    subtitle: 'Nuevos Modelos de Negocio Personalizados',
    description: 'Lanzar un estudio interactivo de diseño web con canvas 2D personalizable que permita a diseñadores de interiores y arquitectos elegir colores de hilados, texturas y subir sus propios patrones vectoriales, cotizando automáticamente el pedido mediante algoritmos conectados con el software propio de consumo de lana.',
    businessImpact: 'Posiciona a El Espartano como la opción predilecta y moderna para estudios de arquitectura, acelerando de días a minutos el proceso de cotización y cierre del pedido personalizado.',
    effort: 'Alto',
    impactLevel: 'Revolucionario',
    estTimeline: '14 semanas',
    iconName: 'Palette',
    techDetails: [
      'Editor gráfico desarrollado sobre HTML5 Canvas interactivo',
      'Motor de renders vectoriales fotorrealistas con texturas simuladas de lana',
      'Sincronización con el algoritmo histórico de cálculo de m² de lana',
      'Exportación automática de fichas de corte técnicas a la planta robotizada'
    ]
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Enrique Miles',
    role: 'Consultor TCD',
    specialty: 'Estrategia Tecnológica y Nexo con Empresa',
    email: 'enrique.miles@udesa.edu.ar',
    initials: 'EM'
  },
  {
    name: 'Santino Andrelo',
    role: 'Consultor TCD',
    specialty: 'WebAR y Tecnologías de Inmersión Visual',
    email: 'santino.andrelo@udesa.edu.ar',
    initials: 'SA'
  },
  {
    name: 'Duncan Lear',
    role: 'Consultor TCD',
    specialty: 'Integración ERP, RFID y Automatización de Depósitos',
    email: 'duncan.lear@udesa.edu.ar',
    initials: 'DL'
  },
  {
    name: 'Galo Llorente',
    role: 'Consultor TCD',
    specialty: 'Modelado Financiero y Crecimiento de Canal e-Commerce',
    email: 'galo.llorente@udesa.edu.ar',
    initials: 'GL'
  },
  {
    name: 'Juan Bautista Noble',
    role: 'Consultor TCD',
    specialty: 'Cifrado de Comunicaciones, SSL/MFA y Redes Seguras',
    email: 'bautista.noble@udesa.edu.ar',
    initials: 'JN'
  }
];
