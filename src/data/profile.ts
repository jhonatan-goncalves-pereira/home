/**
 * =============================================================================
 * PROFILE DATA - Personal Information
 * =============================================================================
 */

export interface Profile {
  name: string;
  title: string;
  photo: string;
  email: string;
  phone?: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  summary: string;
  highlights: string[];
}

export const profile: Profile = {
  name: 'Jhonatan Gonçalves',
  title: 'FullStack Developer | QA | Analista Power BI',
  photo: '/images/profile.jpg',
  email: 'jhonatangoncalves2002@gmail.com',
  location: 'Juazeiro do Norte, CE, Brasil',

  linkedin: 'https://www.linkedin.com/in/jhonatangoncalves-pereira',
  github: 'https://github.com/jhonatan-goncalvespereira',
  website: 'https://jhonatan-goncalvespereira.github.io/residencia-iuul/',

  summary: `Graduando em Sistemas de Informação com sólida experiência em TI, desenvolvimento Full Stack, QA e análise de dados com Power BI. Atuei em projetos desafiadores nas áreas pública e privada, acumulando competências técnicas e visão estratégica para soluções de software, automação de processos e transformação digital. Sempre aberto a novos desafios como Desenvolvedor Full Stack ou Analista de Dados, com foco em inovação, colaboração em equipe e impacto social através da tecnologia.`,

  highlights: [
    'Desenvolvedor Full Stack na Universidade Regional do Cariri há mais de 1 ano',
    'Experiência em QA com Selenium, Cypress, REST Assured e Postman',
    'Atuação em projetos de transformação digital no setor público',
    'Fundador de startup de transporte público (Integra Cariri)',
    'Bolsista de Iniciação Científica CNPq em Análise de Bases Educacionais',
  ],
};

export function getProfileSocialLinks(): Array<{ platform: string; url: string }> {
  const links: Array<{ platform: string; url: string }> = [];

  if (profile.github) links.push({ platform: 'github', url: profile.github });
  if (profile.linkedin) links.push({ platform: 'linkedin', url: profile.linkedin });
  if (profile.website) links.push({ platform: 'website', url: profile.website });

  return links;
}

export function hasProfilePhoto(): boolean {
  return Boolean(profile.photo && profile.photo.length > 0);
}

export function getProfileInitials(): string {
  return profile.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}
