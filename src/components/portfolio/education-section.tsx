import type { FC } from 'react';
import { GraduationCap } from 'lucide-react';
import { Section } from './section';
import { Card, CardContent } from '@/components/ui/card';
import type { PortfolioData } from '@/lib/portfolio-data';

type EducationSectionProps = {
  data: PortfolioData['education'];
};

export const EducationSection: FC<EducationSectionProps> = ({ data }) => {
  return (
    <Section titleEs="Educación" titleEn="Education" icon={<GraduationCap className="size-8" />}>
      <div className="space-y-4">
        {data.map((edu, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-x-8">
                <h3 className="font-bold text-lg font-headline">{edu.degree.es}</h3>
                <h3 className="font-bold text-lg font-headline">{edu.degree.en}</h3>
              </div>
              <p className="text-muted-foreground">{edu.institution} | {edu.period}</p>
              {edu.description && (
                <div className="grid md:grid-cols-2 gap-x-8 mt-2 text-sm text-muted-foreground">
                  <p>{edu.description.es}</p>
                  <p>{edu.description.en}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
