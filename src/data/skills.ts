/**
 * =============================================================================
 * SKILLS DATA - Technical & Professional Skills
 * =============================================================================
 */

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
  yearsOfExperience?: number;
}

export interface Language {
  name: string;
  level: 'Native' | 'Fluent' | 'Professional' | 'Intermediate' | 'Basic';
}

export const skillCategories: string[] = [
  'Linguagens',
  'Frontend',
  'Backend',
  'Banco de Dados',
  'QA & Testes',
  'Cloud & DevOps',
  'Dados & BI',
  'Metodologias',
];

export const skills: Skill[] = [
  // ---------------------------------------------------------------------------
  // LINGUAGENS
  // ---------------------------------------------------------------------------
  {
    name: 'JavaScript',
    level: 90,
    category: 'Linguagens',
    yearsOfExperience: 5,
  },
  {
    name: 'TypeScript',
    level: 75,
    category: 'Linguagens',
    yearsOfExperience: 2,
  },
  {
    name: 'Java',
    level: 80,
    category: 'Linguagens',
    yearsOfExperience: 3,
  },
  {
    name: 'PHP',
    level: 70,
    category: 'Linguagens',
    yearsOfExperience: 2,
  },
  {
    name: 'Python',
    level: 65,
    category: 'Linguagens',
    yearsOfExperience: 2,
  },
  {
    name: 'R',
    level: 60,
    category: 'Linguagens',
    yearsOfExperience: 1,
  },

  // ---------------------------------------------------------------------------
  // FRONTEND
  // ---------------------------------------------------------------------------
  {
    name: 'React',
    level: 88,
    category: 'Frontend',
    yearsOfExperience: 3,
  },
  {
    name: 'Next.js',
    level: 82,
    category: 'Frontend',
    yearsOfExperience: 2,
  },
  {
    name: 'Vue.js',
    level: 72,
    category: 'Frontend',
    yearsOfExperience: 1,
  },
  {
    name: 'HTML & CSS',
    level: 92,
    category: 'Frontend',
    yearsOfExperience: 5,
  },
  {
    name: 'Tailwind CSS',
    level: 85,
    category: 'Frontend',
    yearsOfExperience: 2,
  },
  {
    name: 'Bootstrap',
    level: 88,
    category: 'Frontend',
    yearsOfExperience: 3,
  },
  {
    name: 'Redux / Zustand',
    level: 75,
    category: 'Frontend',
    yearsOfExperience: 2,
  },
  {
    name: 'React Hook Form',
    level: 80,
    category: 'Frontend',
    yearsOfExperience: 2,
  },
  {
    name: 'Chart.js / Recharts',
    level: 78,
    category: 'Frontend',
    yearsOfExperience: 2,
  },
  {
    name: 'Framer Motion',
    level: 70,
    category: 'Frontend',
    yearsOfExperience: 1,
  },

  // ---------------------------------------------------------------------------
  // BACKEND
  // ---------------------------------------------------------------------------
  {
    name: 'Node.js',
    level: 90,
    category: 'Backend',
    yearsOfExperience: 4,
  },
  {
    name: 'Express.js',
    level: 88,
    category: 'Backend',
    yearsOfExperience: 3,
  },
  {
    name: 'NestJS',
    level: 75,
    category: 'Backend',
    yearsOfExperience: 1,
  },
  {
    name: 'Spring Boot',
    level: 78,
    category: 'Backend',
    yearsOfExperience: 2,
  },
  {
    name: 'API REST',
    level: 92,
    category: 'Backend',
    yearsOfExperience: 4,
  },
  {
    name: 'GraphQL',
    level: 68,
    category: 'Backend',
    yearsOfExperience: 1,
  },
  {
    name: 'JWT / OAuth2',
    level: 82,
    category: 'Backend',
    yearsOfExperience: 2,
  },
  {
    name: 'Prisma ORM',
    level: 78,
    category: 'Backend',
    yearsOfExperience: 1,
  },
  {
    name: 'Microserviços',
    level: 72,
    category: 'Backend',
    yearsOfExperience: 1,
  },

  // ---------------------------------------------------------------------------
  // BANCO DE DADOS
  // ---------------------------------------------------------------------------
  {
    name: 'PostgreSQL',
    level: 85,
    category: 'Banco de Dados',
    yearsOfExperience: 3,
  },
  {
    name: 'MySQL',
    level: 80,
    category: 'Banco de Dados',
    yearsOfExperience: 3,
  },
  {
    name: 'SQL Server',
    level: 70,
    category: 'Banco de Dados',
    yearsOfExperience: 2,
  },
  {
    name: 'Oracle DB',
    level: 65,
    category: 'Banco de Dados',
    yearsOfExperience: 1,
  },

  // ---------------------------------------------------------------------------
  // QA & TESTES
  // ---------------------------------------------------------------------------
  {
    name: 'REST Assured',
    level: 85,
    category: 'QA & Testes',
    yearsOfExperience: 1,
  },
  {
    name: 'Postman',
    level: 90,
    category: 'QA & Testes',
    yearsOfExperience: 2,
  },
  {
    name: 'Selenium WebDriver',
    level: 80,
    category: 'QA & Testes',
    yearsOfExperience: 1,
  },
  {
    name: 'Cypress',
    level: 75,
    category: 'QA & Testes',
    yearsOfExperience: 1,
  },
  {
    name: 'Testes Ágeis',
    level: 80,
    category: 'QA & Testes',
    yearsOfExperience: 1,
  },

  // ---------------------------------------------------------------------------
  // CLOUD & DEVOPS
  // ---------------------------------------------------------------------------
  {
    name: 'AWS',
    level: 75,
    category: 'Cloud & DevOps',
    yearsOfExperience: 2,
  },
  {
    name: 'Docker',
    level: 78,
    category: 'Cloud & DevOps',
    yearsOfExperience: 2,
  },
  {
    name: 'Git / GitHub',
    level: 90,
    category: 'Cloud & DevOps',
    yearsOfExperience: 4,
  },
  {
    name: 'GitHub Actions',
    level: 72,
    category: 'Cloud & DevOps',
    yearsOfExperience: 1,
  },
  {
    name: 'CI/CD Pipelines',
    level: 72,
    category: 'Cloud & DevOps',
    yearsOfExperience: 1,
  },
  {
    name: 'Linux',
    level: 78,
    category: 'Cloud & DevOps',
    yearsOfExperience: 3,
  },
  {
    name: 'Vercel / Netlify',
    level: 82,
    category: 'Cloud & DevOps',
    yearsOfExperience: 2,
  },

  // ---------------------------------------------------------------------------
  // METODOLOGIAS
  // ---------------------------------------------------------------------------
  {
    name: 'Scrum / Agile',
    level: 85,
    category: 'Metodologias',
    yearsOfExperience: 3,
  },
  {
    name: 'Kanban',
    level: 85,
    category: 'Metodologias',
    yearsOfExperience: 3,
  },
  {
    name: 'Clean Code',
    level: 80,
    category: 'Metodologias',
    yearsOfExperience: 2,
  },
  {
    name: 'SOLID',
    level: 78,
    category: 'Metodologias',
    yearsOfExperience: 2,
  },
  {
    name: 'Design Patterns',
    level: 75,
    category: 'Metodologias',
    yearsOfExperience: 2,
  },

  // ---------------------------------------------------------------------------
  // DADOS & BI
  // ---------------------------------------------------------------------------
  {
    name: 'Power BI',
    level: 80,
    category: 'Dados & BI',
    yearsOfExperience: 2,
  },
  {
    name: 'Análise de Dados',
    level: 80,
    category: 'Dados & BI',
    yearsOfExperience: 3,
  },
  {
    name: 'Estatística',
    level: 70,
    category: 'Dados & BI',
    yearsOfExperience: 2,
  },
];

export const languages: Language[] = [
  { name: 'Português', level: 'Native' },
  { name: 'Inglês', level: 'Intermediate' },
];

export function getSkillsByCategory(category: string): Skill[] {
  return skills.filter((skill) => skill.category === category);
}

export function getTopSkills(count: number = 6): Skill[] {
  return [...skills].sort((a, b) => b.level - a.level).slice(0, count);
}

export function getUsedCategories(): string[] {
  const categories = new Set(skills.map((skill) => skill.category));
  return skillCategories.filter((cat) => categories.has(cat));
}

export function getSkillsGroupedByCategory(): Record<string, Skill[]> {
  const grouped: Record<string, Skill[]> = {};

  skillCategories.forEach((category) => {
    const categorySkills = getSkillsByCategory(category);
    if (categorySkills.length > 0) {
      grouped[category] = categorySkills;
    }
  });

  return grouped;
}

export function getAverageSkillLevel(): number {
  if (skills.length === 0) return 0;
  const total = skills.reduce((sum, skill) => sum + skill.level, 0);
  return Math.round(total / skills.length);
}

export function getSkillProficiencyLabel(level: number): string {
  if (level >= 90) return 'Expert';
  if (level >= 70) return 'Avançado';
  if (level >= 50) return 'Intermediário';
  if (level >= 30) return 'Básico';
  return 'Iniciante';
}
