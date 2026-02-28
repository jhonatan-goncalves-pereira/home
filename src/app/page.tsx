import { Container } from '@/components/ui';
import {
  ProfileHeader,
  Summary,
  ExperienceTimeline,
  SkillsSection,
  CertificationsSection,
  LanguagesSection,
} from '@/components/resume';
import { EducationSectionContent } from '@/components/resume/EducationSection';
import { ContactSection } from '@/components/contact';
import { ProjectGrid } from '@/components/portfolio';
import { Section } from '@/components/ui';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="hero-mesh min-h-screen">
      <Container size="lg" className="py-10">
        {/* About Section */}
        <section id="about" className="mb-4">
          <ProfileHeader />
          <Summary />
        </section>

        {/* Experience Section */}
        <ExperienceTimeline />

        {/* Skills Section */}
        <SkillsSection />

        {/* Education + Languages row */}
        <Section id="education" title="Educação" subtitle="Formação acadêmica e qualificações">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <EducationSectionContent />
            </div>
            <div className="lg:col-span-1">
              <LanguagesSection />
            </div>
          </div>
        </Section>

        {/* Certifications Section */}
        <CertificationsSection />

        {/* Featured Projects */}
        <Section
          id="portfolio-preview"
          title="Projetos em Destaque"
          subtitle="Uma seleção dos meus trabalhos recentes"
        >
          <ProjectGrid featuredOnly limit={3} showFilters={false} />
          <div className="text-center mt-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/50 hover:bg-indigo-100 dark:hover:bg-indigo-950/50 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-200 hover:-translate-y-0.5"
            >
              Ver Todos os Projetos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Section>

        {/* Contact Section */}
        <ContactSection />
      </Container>
    </div>
  );
}
