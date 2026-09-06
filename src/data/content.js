// ---------------------------------------------------------------------------
// Todo el texto del portfolio vive acá adentro. Editá estos valores con tu
// info real: son placeholders para que puedas ver la estética funcionando.
// Cuando quieras traducir el sitio, este archivo es el que hay que duplicar
// (por ej. content.en.js) y pasar por un traductor.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Daiana Soria Piola',
  role: 'Full Stack Developer & AI Specialist',
  location: 'Argentina',
  email: 'daianaaylensoria@gmail.com',
  badge: 'Inteligencia Aplicada 2.0',
}

export const nav = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Estudios', href: '#estudios' },
  { label: 'Contacto', href: '#contacto' },
]

export const hero = {
  eyebrow: profile.badge,
  headline: ['Construyendo el', 'Futuro', 'del Software'],
  highlightWord: 'Futuro',
  description:
    'Desarrolladora Full Stack especializada en IA, creando experiencias digitales prolijas que combinan precisión técnica con un diseño editorial cuidado.',
  ctaPrimary: { label: 'Ver Proyectos', href: '#proyectos' },
  ctaSecondary: { label: 'Stack Técnico', href: '#stack' },
  panel: {
    title: 'NEURAL_CORE_2.0',
  },
}

export const sections = {
  stack: {
    eyebrow: 'Matriz de Expertise',
    title: 'Capacidades Técnicas',
    description:
      'Las herramientas y tecnologías con las que construyo, entrenadas y afinadas con el uso diario.',
  },
  experience: {
    eyebrow: 'Cronología Profesional',
    title: 'Experiencia Laboral',
    description: 'El camino recorrido hasta acá: roles, equipos y lo que construí en cada uno.',
  },
  education: {
    eyebrow: 'Formación',
    title: 'Estudios y Certificaciones',
    description:
      'Base académica formal, más los cursos y certificaciones con los que sigo actualizándome.',
    universityHeading: 'Formación Universitaria',
    coursesHeading: 'Certificaciones Técnicas',
    coursesSubheading: 'Experiencia Validada',
  },
  projects: {
    eyebrow: 'Galería de Proyectos',
    title: 'Trabajo Seleccionado',
    description: 'Una muestra de proyectos donde combino rigor técnico con una mirada editorial.',
  },
}

export const stats = [
  { value: '12+', label: 'Proyectos Entregados' },
  { value: '99.9', label: 'Uptime Precisión %' },
  { value: '8k+', label: 'Commits en GitHub' },
  { value: '05', label: 'Años de Experiencia' },
]

export const stackCategories = [
  {
    icon: 'layers',
    title: 'Arquitectura & Frontend',
    skills: [
      { label: 'React & Next.js', value: 95 },
      { label: 'Node.js & sistemas distribuidos', value: 88 },
      { label: 'Arquitectura Cloud Native', value: 85 },
    ],
    tags: ['TypeScript', 'Docker', 'Kubernetes', 'AWS'],
  },
  {
    icon: 'brain',
    title: 'IA & Datos',
    skills: [
      { label: 'Redes neuronales & PyTorch', value: 80 },
      { label: 'LLM tuning & RAG', value: 85 },
      { label: 'Visión por computadora', value: 70 },
    ],
    tags: ['LangChain', 'HuggingFace', 'Vector DBs', 'NLP'],
  },
]

export const experience = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Nombre de tu Empresa',
    period: '2023 — Presente',
    bullets: [
      'Diseñé y desplegué pipelines de datos escalables, reduciendo los tiempos de procesamiento en un 40%.',
      'Implementé un sistema RAG para búsqueda semántica de documentos internos.',
      'Lideré un equipo de desarrollo en la migración de una arquitectura monolítica a microservicios.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Nombre de tu Empresa Anterior',
    period: '2021 — 2023',
    bullets: [
      'Desarrollé interfaces de usuario con React, GSAP y animaciones a medida.',
      'Optimicé consultas en PostgreSQL, reduciendo el tiempo de respuesta del servidor en 200ms.',
      'Construí un CMS headless a medida para actualizar contenido de forma ágil.',
    ],
  },
  {
    role: 'Desarrolladora Junior',
    company: 'Tu Primer Trabajo o Freelance',
    period: '2019 — 2021',
    bullets: [
      'Colaboré en el desarrollo de sitios web para distintos clientes.',
      'Aprendí buenas prácticas de control de versiones y trabajo en equipo.',
    ],
  },
]

export const education = {
  universidad: [
    {
      title: 'Nombre de tu Carrera',
      institution: 'Nombre de tu Universidad',
      period: '2018 — 2023',
      badge: 'Promedio 9.50',
      description: 'Descripción breve de tu formación, enfoque y proyecto final.',
      tags: ['Estructuras de Datos', 'Bases de Datos', 'Algoritmos'],
    },
  ],
  thesis: {
    label: 'Destacado de Tesis',
    title: 'Título de tu Tesis o Proyecto Final',
    description:
      'Resumen breve de tu trabajo final: el problema que abordaste, el enfoque que elegiste y el resultado que obtuviste.',
    advisor: 'Director/a: Nombre del Director',
    achievement: 'Resultado o distinción destacada obtenida con este trabajo.',
  },
  cursos: [
    {
      icon: 'cloud',
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      description: 'Nivel profesional.',
    },
    {
      icon: 'brain',
      name: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      year: '2023',
      description: 'Validación del ecosistema de IA de Google.',
    },
    {
      icon: 'network',
      name: 'Google Cloud Professional ML Engineer',
      issuer: 'Google Cloud',
      year: '2022',
      description: 'Arquitectura de IA en producción.',
    },
    {
      icon: 'shield',
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      year: '2022',
      description: 'Integridad de sistemas y criptografía.',
    },
    {
      icon: 'sparkles',
      name: 'DeepLearning.AI Specialization',
      issuer: 'Andrew Ng',
      year: '2021',
      description: 'Secuencia de modelos y redes neuronales.',
    },
    {
      icon: 'code',
      name: 'CKAD: Kubernetes Application Developer',
      issuer: 'Cloud Native Computing Foundation',
      year: '2021',
      description: 'Desarrollo de aplicaciones cloud native.',
    },
  ],
  continuousEvolution: {
    title: 'Evolución Continua',
    description:
      'La búsqueda de conocimiento no es lineal. Dedico varias horas por semana a investigar nuevas arquitecturas de modelos y patrones de infraestructura distribuida.',
    publicationsLabel: 'Publicaciones',
    honorsLabel: 'Reconocimientos',
  },
  publications: [
    { source: 'Fuente · 2022', title: 'Título de tu publicación o paper.' },
    { source: 'Fuente · 2021', title: 'Título de otra publicación o paper.' },
  ],
  honors: ['Reconocimiento académico 1', 'Reconocimiento académico 2', 'Reconocimiento académico 3'],
}

export const projects = [
  {
    icon: 'sparkles',
    category: '01. Proyecto Destacado',
    title: 'Nombre del Proyecto',
    description: 'Descripción corta del proyecto destacado y qué problema resuelve.',
    tags: ['React', 'Node.js'],
    featured: true,
    gradient: 'from-secondary via-primary-container to-tertiary-container',
    link: '#',
  },
  {
    icon: 'network',
    category: 'API',
    title: 'Nombre del Proyecto 2',
    description: 'Capa API de baja latencia para sistemas distribuidos.',
    tags: ['GraphQL'],
    link: '#',
  },
  {
    icon: 'shield',
    category: 'Seguridad',
    title: 'Nombre del Proyecto 3',
    description: 'Sistema de autenticación biométrica con protocolos zero-knowledge.',
    tags: ['Auth'],
    link: '#',
  },
  {
    icon: 'sparkles',
    category: 'IA / ML',
    title: 'Nombre del Proyecto 4',
    description: 'Modelo ajustado especializado en un dominio específico.',
    tags: ['LLaMA-3', 'Vector DB'],
    link: '#',
  },
  {
    icon: 'chart',
    category: 'Data Science',
    title: 'Nombre del Proyecto 5',
    description: 'Pipeline de NLP en tiempo real para análisis predictivo.',
    tags: ['Kafka', 'Streaming'],
    link: '#',
  },
]

export const contact = {
  headline: ['Iniciemos', 'una', 'Conversación'],
  highlightWord: 'Conversación',
  description:
    'Explorando la sinergia entre diseño cuidado y precisión técnica. Escribime para hablar de una oportunidad o colaboración.',
  form: {
    nameLabel: 'Tu Nombre',
    namePlaceholder: 'Nombre y apellido',
    emailLabel: 'Tu Email',
    emailPlaceholder: 'nombre@email.com',
    messageLabel: 'Mensaje',
    messagePlaceholder: 'Contame en qué estás pensando...',
    submit: 'Enviar Mensaje',
  },
  status: {
    label: 'Disponible para nuevos proyectos',
    lines: ['Respuesta: < 24 hs', 'Zona horaria: GMT-3'],
  },
  socials: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
    { label: 'Twitter', href: 'https://twitter.com/' },
  ],
}

export const footer = {
  brand: 'DAIANA SORIA PIOLA',
  tagline: `© ${new Date().getFullYear()} — Diseñado por ${profile.name}.`,
}
