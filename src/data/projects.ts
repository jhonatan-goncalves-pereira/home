/**
 * =============================================================================
 * PROJECTS DATA - Portfolio Projects
 * =============================================================================
 */

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  category: string;
  role: string;
  duration: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights: string[];
}

export const projectCategories: string[] = [
  'All',
  'Web Development',
  'Sistema Institucional',
  'Startup',
  'QA & Automação',
  'Dados & BI',
];

export const projects: Project[] = [
  // Novos projetos de Web Development
  {
    id: 'proj-0',
    slug: 'sistema-eventos-universitario',
    title: 'Sistema de Eventos Universitários',
    description:
      'Plataforma completa para gestão de eventos acadêmicos e institucionais com criação, inscrição e certificação.',
    longDescription: `Sistema web completo para gerenciamento de eventos universitários, permitindo a criação de eventos, 
    inscrição de participantes, emissão de certificados e geração de relatórios. Inclui painel administrativo para 
    gerenciamento de usuários, eventos e certificados. Interface responsiva e intuitiva para melhor experiência 
    dos usuários.`,
    thumbnail: '/projects/eventos-thumb.jpg',
    images: [],
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'TypeScript', 'JWT', 'Prisma', 'Docker'],
    category: 'Web Development',
    role: 'Desenvolvedor Full Stack',
    duration: '4 meses',
    featured: true,
    highlights: [
      'Sistema completo de gestão de eventos e inscrições',
      'Emissão automática de certificados em PDF',
      'Painel administrativo com dashboards e relatórios',
      'API RESTful com documentação Swagger',
    ],
  },
  {
    id: 'proj-00',
    slug: 'api-restaurante-universitario',
    title: 'API Restaurante Universitário',
    description:
      'API RESTful para gestão de um Restaurante Universitário com controle de estoque, pedidos e relatórios.',
    longDescription: `API RESTful completa para automação das operações do Restaurante Universitário, incluindo 
    controle de estoque de ingredientes, gerenciamento de pedidos, cardápio diário e relatórios gerenciais. 
    Sistema desenvolvido com foco em escalabilidade, segurança e performance.`,
    thumbnail: '/projects/ru-api-thumb.jpg',
    images: [],
    technologies: ['Node.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM', 'Docker', 'JWT', 'Swagger'],
    category: 'Web Development',
    role: 'Desenvolvedor Backend',
    duration: '3 meses',
    featured: true,
    highlights: [
      'API RESTful completa com NestJS',
      'Controle de estoque e inventário',
      'Sistema de pedidos e cardápio',
      'Documentação automática com Swagger',
    ],
  },
  {
    id: 'proj-1',
    slug: 'sistemas-institucionais-urca',
    title: 'Sistemas Institucionais - URCA',
    description:
      'Desenvolvimento e manutenção de sistemas institucionais de média e alta complexidade para a Universidade Regional do Cariri.',
    longDescription: `Atuação fullstack no desenvolvimento, manutenção e evolução de sistemas institucionais da URCA. 
    Responsável por criar e consumir APIs RESTful, modelar bancos de dados relacionais, implementar autenticação JWT 
    e garantir a segurança e performance das aplicações. Trabalho com tecnologias como Node.js, Express.js, Java, 
    Spring Boot, PHP, React e PostgreSQL.`,
    thumbnail: '/projects/urca-thumb.jpg',
    images: [],
    technologies: ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'PHP', 'React', 'PostgreSQL', 'MySQL', 'Prisma ORM', 'JWT'],
    category: 'Sistema Institucional',
    role: 'Desenvolvedor Full Stack',
    duration: 'Em andamento (desde ago/2024)',
    featured: true,
    highlights: [
      'Sistemas de média e alta complexidade em produção',
      'APIs RESTful integradas com plataformas externas',
      'Autenticação segura com JWT e controle de acesso',
      'Modelagem de dados com foco em integridade e performance',
    ],
  },

  {
    id: 'proj-2',
    slug: 'integra-cariri',
    title: 'Integra Cariri - Startup de Transporte',
    description:
      'Plataforma web para mapeamento e informação de rotas de ônibus na região do Cariri, com atualização de horários em tempo real.',
    longDescription: `Como fundador da Integra Cariri, criei uma solução tecnológica para revolucionar o transporte público 
    na região do Cariri. O sistema web mapeia e informa as rotas dos ônibus, detalhando onde e quando cada ônibus passará. 
    Trabalhei com uma equipe de 3 pessoas para entender as necessidades dos usuários e as complexidades do sistema de 
    transporte público local.`,
    thumbnail: '/projects/integra-cariri-thumb.jpg',
    images: [],
    technologies: ['JavaScript', 'Web', 'Mapas', 'Responsividade'],
    category: 'Startup',
    role: 'Fundador & Desenvolvedor',
    duration: '7 meses',
    featured: true,
    highlights: [
      'Mapeamento completo de rotas de ônibus da região do Cariri',
      'Atualização de horários em tempo real',
      'Interface responsiva para dispositivos móveis',
      'Liderança de equipe de 3 pessoas',
    ],
  },

  {
    id: 'proj-3',
    slug: 'monitoramento-rede-rnp',
    title: 'Monitoramento de Rede - RNP',
    description:
      'Implementação e manutenção de ferramentas de monitoramento de rede com perfSONAR para a Rede Nacional de Ensino e Pesquisa.',
    longDescription: `Responsável pela implementação e manutenção de ferramentas de monitoramento de rede como perfSONAR 
    para medir e avaliar a qualidade e desempenho da rede da RNP. Realizei testes de throughput, latência, RTT, traceroute, 
    HTTP e DNS, gerando relatórios detalhados. Desenvolvi automações e apresentei soluções em eventos técnicos.`,
    thumbnail: '/projects/rnp-thumb.jpg',
    images: [],
    technologies: ['perfSONAR', 'Linux', 'Docker', 'Virtualização', 'Shell Script'],
    category: 'Sistema Institucional',
    role: 'Trainee',
    duration: '6 meses',
    featured: false,
    highlights: [
      'Testes de throughput, latência, RTT e traceroute',
      'Geração de relatórios detalhados de desempenho',
      'Desenvolvimento de automações para monitoramento',
      'Apresentação de soluções em eventos técnicos',
    ],
  },

  {
    id: 'proj-4',
    slug: 'qa-automacao-dbc',
    title: 'QA & Automação de Testes - DBC Company',
    description:
      'Garantia de qualidade com automação de testes de UI e API, utilizando Selenium, Cypress e REST Assured.',
    longDescription: `Atuação como QA Analyst na DBC Company, responsável pela garantia da qualidade de produtos através 
    de testes detalhados e automação de processos. Trabalhei com testes de UI usando Selenium WebDriver e Cypress, 
    testes de API com Postman e REST Assured, e implementação de cultura DevOps/CI/CD.`,
    thumbnail: '/projects/qa-thumb.jpg',
    images: [],
    technologies: ['Java', 'JavaScript', 'Selenium WebDriver', 'Cypress', 'REST Assured', 'Postman', 'Docker', 'CI/CD'],
    category: 'QA & Automação',
    role: 'QA Analyst',
    duration: '6 meses',
    featured: true,
    highlights: [
      'Automação de testes de UI com Selenium e Cypress',
      'Testes de API com REST Assured e Postman',
      'Implementação de CI/CD e cultura DevOps',
      'Testes de performance e ágeis',
    ],
  },

  {
    id: 'proj-5',
    slug: 'analise-dados-educacionais-cnpq',
    title: 'Análise de Bases Educacionais - CNPq',
    description:
      'Pesquisa de iniciação científica em análise de bases nacionais públicas e sua influência no fator educacional.',
    longDescription: `Bolsista de Iniciação Científica pelo CNPq, na área de Análise de Bases Nacionais Públicas e sua 
    Influência no Fator Educacional. Utilizei ferramentas como o software R para analisar grandes conjuntos de dados, 
    identificando padrões, tendências e fatores que impactam a educação no Brasil.`,
    thumbnail: '/projects/cnpq-thumb.jpg',
    images: [],
    technologies: ['R', 'Estatística', 'Análise de Dados', 'Bases de Dados Públicas'],
    category: 'Dados & BI',
    role: 'Pesquisador (Bolsista CNPq)',
    duration: '1 ano',
    featured: false,
    highlights: [
      'Análise de grandes conjuntos de dados educacionais',
      'Identificação de padrões e tendências na educação brasileira',
      'Contribuição para formulação de políticas educacionais',
      'Uso de software R para análise estatística',
    ],
  },

  {
    id: 'proj-6',
    slug: 'pet-saude-digital',
    title: 'PET-Saúde: Transformação Digital do SUS',
    description:
      'Projeto de interoperabilidade dos sistemas de informação em saúde (DATASUS e e-SUS) para transformação digital do SUS em Juazeiro do Norte.',
    longDescription: `Atuação como monitor bolsista no projeto PET-Saúde Informação e Saúde Digital, com foco na 
    articulação entre ensino, serviço e comunidade na interoperabilidade dos sistemas de informação em saúde. 
    Análise, organização e sistematização de dados em saúde para qualificar processos de trabalho e promover 
    o letramento digital.`,
    thumbnail: '/projects/pet-saude-thumb.jpg',
    images: [],
    technologies: ['DATASUS', 'e-SUS', 'Power BI', 'Análise de Dados em Saúde'],
    category: 'Dados & BI',
    role: 'Monitor Bolsista',
    duration: 'Em andamento (desde ago/2025)',
    featured: false,
    highlights: [
      'Interoperabilidade entre DATASUS e e-SUS',
      'Análise e sistematização de dados em saúde',
      'Promoção do letramento digital em saúde',
      'Apoio à transformação digital do SUS',
    ],
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects;
  return projects.filter((project) => project.category === category);
}

export function getAllProjectTechnologies(): string[] {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

export function getProjectCountByCategory(): Record<string, number> {
  const counts: Record<string, number> = { All: projects.length };

  projectCategories.slice(1).forEach((category) => {
    counts[category] = projects.filter((p) => p.category === category).length;
  });

  return counts;
}

export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase();
  return projects.filter(
    (project) =>
      project.title.toLowerCase().includes(lowerQuery) ||
      project.description.toLowerCase().includes(lowerQuery) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(lowerQuery)
      )
  );
}

export function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): Project[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return [];

  return projects
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}
