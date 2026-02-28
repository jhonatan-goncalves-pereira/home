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
  title: 'Desenvolvedor FullStack Pleno | React · Node.js · Java | QA & Power BI',
  photo: '/images/profile.jpg',
  email: 'jhonatangoncalves2002@gmail.com',
  location: 'Juazeiro do Norte, CE, Brasil',

  linkedin: 'https://www.linkedin.com/in/jhonatangoncalves-pereira',
  github: 'https://github.com/jhonatan-goncalvespereira',
  website: 'https://jhonatan-goncalvespereira.github.io/residencia-iuul/',

  summary: `Desenvolvedor FullStack Pleno com sólida experiência em React, Next.js, Node.js, Java e Spring Boot. Atuo no desenvolvimento de aplicações web completas — do design de interfaces responsivas com Tailwind CSS e React até APIs RESTful robustas com Node.js/Express e Spring Boot, integradas a bancos de dados relacionais (PostgreSQL, MySQL) e não-relacionais. Tenho experiência em QA (Selenium, Cypress, REST Assured), análise de dados com Power BI e atuação em projetos de transformação digital no setor público e privado. Fundador da startup Integra Cariri e bolsista CNPq, com foco em código limpo, boas práticas (SOLID, Clean Code) e entrega de valor real através da tecnologia.`,

  highlights: [
    'FullStack com React, Next.js, Node.js, Express, Spring Boot e TypeScript',
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
