/**
 * =============================================================================
 * EDUCATION DATA - Academic History & Certifications
 * =============================================================================
 */

export interface Education {
  id: string;
  degree: string;
  field: string;
  school: string;
  schoolLogo?: string;
  location: string;
  startYear: number;
  endYear: number;
  gpa?: string;
  honors?: string[];
  relevantCourses?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuerLogo?: string;
  date: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: 'edu-1',
    degree: 'Bacharelado',
    field: 'Sistemas de Informação',
    school: 'IFCE - Instituto Federal de Educação, Ciência e Tecnologia do Ceará (Crato)',
    location: 'Crato, Ceará, Brasil',
    startYear: 2021,
    endYear: 2024,
    relevantCourses: [
      'Lógica de Programação',
      'Estrutura de Dados',
      'Banco de Dados',
      'Engenharia de Software',
      'Redes de Computadores',
      'Inteligência Artificial',
    ],
  },

  {
    id: 'edu-2',
    degree: 'Curso Técnico Integrado',
    field: 'Informática',
    school: 'EEEP Padre João Bosco de Lima',
    location: 'Ceará, Brasil',
    startYear: 2016,
    endYear: 2019,
  },

  {
    id: 'edu-3',
    degree: 'Residência em TIC',
    field: 'Tecnologia da Informação e Comunicação',
    school: 'Universidade Federal do Cariri - UFCA',
    location: 'Juazeiro do Norte, Ceará, Brasil',
    startYear: 2023,
    endYear: 2023,
    relevantCourses: [
      'Lógica de Programação',
      'Organização de Computadores',
      'Estatística',
      'Modelagem de Banco de Dados',
      'Noções de Inteligência Artificial',
      'Noções de Big Data',
      'Noções de Blockchain',
      'Noções de IoT',
      'Empreendedorismo',
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    date: '2024-01',
    credentialUrl: 'https://cursos.alura.com.br/user/jhonatangoncalves-pereira',
  },
  {
    id: 'cert-2',
    name: 'Fundamentos do Desenvolvimento de Sistemas',
    issuer: 'EV Bradesco (Escola Virtual Bradesco)',
    date: '2023-01',
  },
  {
    id: 'cert-3',
    name: 'Escola Virtual Gov',
    issuer: 'Escola Virtual Gov',
    date: '2023-01',
  },
  {
    id: 'cert-4',
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2023-04',
  },
];

export const awards: Award[] = [
  {
    id: 'award-1',
    title: 'Premiação Notebook - Aprender Pra Valer',
    issuer: 'Programa Aprender Pra Valer',
    date: '2022',
    description: 'Premiação por desempenho e dedicação no programa educacional',
  },
  {
    id: 'award-2',
    title: 'Honra ao Mérito',
    issuer: 'Instituição Educacional',
    date: '2019',
    description: 'Reconhecimento por excelência acadêmica',
  },
];

export function getLatestEducation(): Education | undefined {
  return education.length > 0 ? education[0] : undefined;
}

export function getActiveCertifications(): Certification[] {
  const now = new Date();
  return certifications.filter((cert) => {
    if (!cert.expirationDate) return true;
    const expDate = new Date(cert.expirationDate + '-01');
    return expDate > now;
  });
}

export function getExpiredCertifications(): Certification[] {
  const now = new Date();
  return certifications.filter((cert) => {
    if (!cert.expirationDate) return false;
    const expDate = new Date(cert.expirationDate + '-01');
    return expDate <= now;
  });
}

export function hasCertifications(): boolean {
  return certifications.length > 0;
}

export function hasAwards(): boolean {
  return awards.length > 0;
}

export function formatEducation(edu: Education): string {
  return `${edu.degree} em ${edu.field} - ${edu.school} (${edu.endYear})`;
}

export function isCertificationExpiringSoon(cert: Certification): boolean {
  if (!cert.expirationDate) return false;

  const now = new Date();
  const expDate = new Date(cert.expirationDate + '-01');
  const sixMonthsFromNow = new Date(now.getTime() + 180 * 24 * 60 * 60 * 1000);

  return expDate <= sixMonthsFromNow && expDate > now;
}
