import type { FC } from 'react';
import { Briefcase } from 'lucide-react';
import { Section } from './section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { PortfolioData } from '@/lib/portfolio-data';

type ExperienceSectionProps = {
  data: PortfolioData['experience'];
};

export const ExperienceSection: FC<ExperienceSectionProps> = ({ data }) => {
  return (
    <Section titleEs="Experiencia Profesional" titleEn="Professional Experience" icon={<Briefcase className="size-8" />}>
      <div className="space-y-8">
        {data.map((exp, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader>
              <div className="grid md:grid-cols-2 gap-x-8">
                <CardTitle className="font-headline text-xl">{exp.role.es}</CardTitle>
                <CardTitle className="font-headline text-xl">{exp.role.en}</CardTitle>
              </div>
              <p className="text-muted-foreground pt-1">{exp.company} | {exp.period}</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.tasks.map((task, i) => <li key={i}>{task.es}</li>)}
                </ul>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.tasks.map((task, i) => <li key={i}>{task.en}</li>)}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
