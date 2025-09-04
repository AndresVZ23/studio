import { CertificationsSection } from '@/components/portfolio/certifications-section';
import { EducationSection } from '@/components/portfolio/education-section';
import { ExperienceSection } from '@/components/portfolio/experience-section';
import { HeroSection } from '@/components/portfolio/hero-section';
import { LanguagesSection } from '@/components/portfolio/languages-section';
import { ProfileSection } from '@/components/portfolio/profile-section';
import { SkillsSection } from '@/components/portfolio/skills-section';
import { portfolioData } from '@/lib/portfolio-data';

export default function Home() {
  return (
    <main className="bg-background font-body text-foreground min-h-screen p-4 sm:p-8 md:p-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <HeroSection data={portfolioData.personal} />
        <ProfileSection data={portfolioData.profile} />
        <ExperienceSection data={portfolioData.experience} />
        <EducationSection data={portfolioData.education} />
        <CertificationsSection data={portfolioData.certifications} />
        <SkillsSection data={portfolioData.skills} />
        <LanguagesSection data={portfolioData.languages} />

        <footer className="text-center text-sm text-muted-foreground py-8">
          <p>&copy; {new Date().getFullYear()} Abel Andrés Valle Zuta. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
