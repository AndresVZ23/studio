import type { FC } from 'react';
import { Briefcase } from 'lucide-react';
import { Section } from './section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { PortfolioData } from '@/lib/portfolio-data';
import { useApp } from '@/context/app-context';

type ExperienceSectionProps = {
  data: PortfolioData['experience'];
};

export const ExperienceSection: FC<ExperienceSectionProps> = ({ data }) => {
  const { language } = useApp();

  return (
    <Section titleEs="Experiencia Profesional" titleEn="Professional Experience" icon={<Briefcase className="size-8" />}>
      <div className="space-y-8">
        {data.map((exp, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader>
              <CardTitle className="font-headline text-xl">{exp.role[language]}</CardTitle>
              <p className="text-muted-foreground pt-1">{exp.company} | {exp.period}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {exp.tasks.map((task, i) => <li key={i}>{task[language]}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
