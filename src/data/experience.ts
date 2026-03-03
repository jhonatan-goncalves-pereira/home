/**
 * =============================================================================
 * EXPERIENCE DATA - Work History
 * =============================================================================
 */

export interface Experience {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    id: 'exp-2',
    title: 'Desenvolvedor Full Stack',
    company: 'Universidade Regional do Cariri',
    location: 'Crato, Ceará, Brasil',
    type: 'full-time',
    startDate: '2024-08',
    current: true,
    description:
      'Desenvolvimento, manutenção e evolução de sistemas institucionais de média e alta complexidade, com atuação fullstack em backend e frontend, garantindo integração, segurança e performance.',
    achievements: [
      'Desenvolvimento e consumo de APIs RESTful integrando sistemas internos com plataformas externas',
      'Modelagem de dados em bancos relacionais com ênfase em integridade, performance e segurança',
      'Implementação de autenticação segura com tokens JWT e controle de acesso',
      'Revisões de código, testes funcionais e correção de bugs assegurando entregas estáveis',
      'Suporte técnico a sistemas internos e colaboração na resolução de incidentes',
    ],
    technologies: [
      'Node.js',
      'Express.js',
      'Java',
      'Spring Boot',
      'PHP',
      'JavaScript',
      'React',
      'PostgreSQL',
      'MySQL',
      'SQL Server',
      'Prisma ORM',
      'Bootstrap',
      'Chart.js',
      'JWT',
    ],
  },

  {
    id: 'exp-1',
    title: 'Monitor Bolsista',
    company: 'PET - Programa de Educação Tutorial (PET-Saúde/I&SD)',
    location: 'Juazeiro do Norte, Ceará, Brasil',
    type: 'part-time',
    startDate: '2025-08',
    current: true,
    description:
      'Monitor bolsista no projeto PET-Saúde Informação e Saúde Digital, no Eixo 2 da Secretaria Municipal de Saúde de Juazeiro do Norte, com foco em interoperabilidade dos sistemas de informação em saúde (DATASUS e e-SUS) e transformação digital do SUS.',
    achievements: [
      'Análise, organização e sistematização de dados em saúde para qualificar processos de trabalho',
      'Promoção do letramento digital entre profissionais de saúde',
      'Fortalecimento da integração entre universidade e serviço público de saúde',
      'Apoio à transformação digital do SUS no município',
    ],
    technologies: ['DATASUS', 'e-SUS', 'Power BI', 'Análise de Dados'],
  },

  {
    id: 'exp-3',
    title: 'QA Analyst',
    company: 'DBC Company',
    location: 'Porto Alegre, Rio Grande do Sul, Brasil',
    type: 'full-time',
    startDate: '2024-11',
    endDate: '2025-04',
    current: false,
    description:
      'Atuação com garantia da qualidade de produtos, realizando testes detalhados, colaborando com equipe de desenvolvimento e automatizando processos de QA.',
    achievements: [
      'Automação de testes de UI com Selenium WebDriver e Cypress',
      'Testes de API com Postman e REST Assured',
      'Implementação de testes de performance e cultura DevOps/CI/CD',
      'Testes funcionais e ágeis com metodologias Scrum',
    ],
    technologies: [
      'Java',
      'JavaScript',
      'Selenium WebDriver',
      'Cypress',
      'REST Assured',
      'Postman',
      'Docker',
      'Git',
      'Oracle DB',
      'CI/CD',
    ],
  },

  {
    id: 'exp-4',
    title: 'Mentor',
    company: 'Capacita Brasil',
    location: 'Brasil (Remoto)',
    type: 'part-time',
    startDate: '2024-08',
    endDate: '2025-04',
    current: false,
    description:
      'Mentoria de alunos no programa Capacita Brasil, apoiando o desenvolvimento de competências técnicas e profissionais em tecnologia.',
    achievements: [
      'Orientação e suporte a alunos em trilhas de tecnologia',
      'Compartilhamento de experiências práticas do mercado de TI',
    ],
    technologies: ['Mentoria', 'Educação em TI'],
  },

  {
    id: 'exp-5',
    title: 'Analista de Suporte de TI',
    company: 'Universidade Regional do Cariri',
    location: 'Crato, Ceará, Brasil',
    type: 'full-time',
    startDate: '2023-11',
    endDate: '2024-09',
    current: false,
    description:
      'Responsável por garantir o bom funcionamento e a eficiência dos sistemas de rede e hardware da instituição.',
    achievements: [
      'Configuração e manutenção de redes de computadores garantindo operação segura',
      'Diagnóstico e resolução de problemas de hardware e conectividade',
      'Monitoramento de desempenho de rede e identificação de gargalos',
      'Implementação de práticas de segurança para proteger a integridade da rede',
      'Documentação de procedimentos e soluções para problemas recorrentes',
    ],
    technologies: ['Redes', 'Hardware', 'Servidores', 'Segurança da Informação', 'Linux'],
  },

  {
    id: 'exp-6',
    title: 'Trainee',
    company: 'RNP (Rede Nacional de Ensino e Pesquisa)',
    location: 'Rio de Janeiro, Brasil',
    type: 'full-time',
    startDate: '2024-06',
    endDate: '2024-11',
    current: false,
    description:
      'Implementação e manutenção de ferramentas de monitoramento de rede, como perfSONAR, para medir e avaliar a qualidade e desempenho da rede.',
    achievements: [
      'Realização de testes de throughput, latência, RTT, traceroute, HTTP e DNS',
      'Geração de relatórios detalhados de desempenho de rede',
      'Desenvolvimento de automações para monitoramento',
      'Apresentação de soluções em eventos técnicos',
    ],
    technologies: ['perfSONAR', 'Linux', 'Docker', 'Virtualização', 'Análise de Dados de Rede'],
  },

  {
    id: 'exp-7',
    title: 'Estagiário de TI',
    company: 'Prefeitura Municipal de Juazeiro do Norte',
    location: 'Juazeiro do Norte, Ceará, Brasil',
    type: 'full-time',
    startDate: '2022-08',
    endDate: '2023-08',
    current: false,
    description:
      'Análise, projeção e implantação de ferramentas de propósito específico e análise de dados para o site da prefeitura, além de suporte técnico.',
    achievements: [
      'Implantação de ferramentas de análise de dados para o site institucional',
      'Suporte técnico e atendimento a usuários',
      'Resolução de problemas relacionados a sistemas e infraestrutura de TI',
    ],
    technologies: ['Análise de Dados', 'Suporte TI', 'Web'],
  },

  {
    id: 'exp-8',
    title: 'Bolsista',
    company: 'Compass UOL',
    location: 'Brasil (Remoto)',
    type: 'full-time',
    startDate: '2022-11',
    endDate: '2023-04',
    current: false,
    description:
      'Treinamento fullstack com JavaScript, Node.js e trilha de certificação AWS, com foco em desenvolvimento de soluções completas e integração de tecnologias.',
    achievements: [
      'Obtenção de certificação AWS durante o programa',
      'Desenvolvimento de APIs e integrações com AWS Lambda e API Gateway',
      'Auxílio na implementação de modelos de machine learning com AWS SageMaker',
      'Desenvolvimento de soluções escaláveis em sprints ágeis',
    ],
    technologies: ['JavaScript', 'Node.js', 'AWS', 'AWS SageMaker', 'AWS Lambda', 'API Gateway', 'Machine Learning'],
  },

  {
    id: 'exp-9',
    title: 'Empreendedor - Fundador de Startup',
    company: 'Cluster de Inovação (Integra Cariri)',
    location: 'Fortaleza, Ceará, Brasil',
    type: 'full-time',
    startDate: '2022-07',
    endDate: '2023-01',
    current: false,
    description:
      'Fundador da Integra Cariri, startup de tecnologia para mapeamento e informação de rotas de ônibus na região do Cariri, com sistema web responsivo e em tempo real.',
    achievements: [
      'Criação de plataforma web para mapeamento de rotas de ônibus',
      'Sistema de atualização de horários em tempo real',
      'Interface responsiva e compatível com dispositivos móveis',
      'Liderança de equipe de 3 pessoas',
    ],
    technologies: ['Web', 'JavaScript', 'Mapas', 'Tempo Real', 'Responsividade'],
  },

  {
    id: 'exp-10',
    title: 'Bolsista de Iniciação Científica',
    company: 'CNPq',
    location: 'Crato, Ceará, Brasil',
    type: 'part-time',
    startDate: '2021-09',
    endDate: '2022-09',
    current: false,
    description:
      'Pesquisa em Análise de Bases Nacionais Públicas e sua Influência no Fator Educacional, utilizando ferramentas estatísticas para identificar padrões e tendências na educação brasileira.',
    achievements: [
      'Análise de grandes conjuntos de dados educacionais com software R',
      'Identificação de padrões e tendências que impactam a educação no Brasil',
      'Contribuição para formulação de políticas educacionais mais eficazes',
    ],
    technologies: ['R', 'Estatística', 'Análise de Dados', 'Bases de Dados Públicas'],
  },

  {
    id: 'exp-11',
    title: 'Estagiário de TI - Técnico em Informática, Designer Gráfico e Social Media',
    company: 'JC Atacarejo',
    location: 'Mauriti, Ceará, Brasil',
    type: 'full-time',
    startDate: '2019-08',
    endDate: '2020-01',
    current: false,
    description:
      'Suporte técnico em informática, design gráfico e gestão de redes sociais para empresa do setor varejista.',
    achievements: [
      'Suporte técnico e manutenção de equipamentos de informática',
      'Criação de materiais gráficos para comunicação visual',
      'Gestão de redes sociais da empresa',
    ],
    technologies: ['Informática', 'Design Gráfico', 'Social Media'],
  },
];

export function getTotalYearsOfExperience(): number {
  if (experience.length === 0) return 0;

  const sortedByDate = [...experience].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );

  const earliestStart = new Date(sortedByDate[0].startDate);
  const latestEnd = sortedByDate.some((exp) => exp.current)
    ? new Date()
    : new Date(
        Math.max(
          ...sortedByDate.map((exp) =>
            exp.endDate ? new Date(exp.endDate).getTime() : 0
          )
        )
      );

  const years = Math.floor(
    (latestEnd.getTime() - earliestStart.getTime()) / (1000 * 60 * 60 * 24 * 365)
  );
  return years;
}

export function getCurrentPosition(): Experience | undefined {
  return experience.find((exp) => exp.current);
}

export function getAllTechnologies(): string[] {
  const techSet = new Set<string>();
  experience.forEach((exp) => {
    exp.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

export function formatExperienceDate(dateString: string): string {
  const date = new Date(dateString + '-01');
  return date.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });
}

export function getExperienceDuration(exp: Experience): string {
  const start = new Date(exp.startDate);
  const end = exp.current ? new Date() : new Date((exp.endDate ?? '') + '-01');

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} mo`;
  } else if (remainingMonths === 0) {
    return `${years} yr`;
  } else {
    return `${years} yr ${remainingMonths} mo`;
  }
}
