import type { FC } from 'react';
import { BrainCircuit, BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { PortfolioData } from '@/lib/portfolio-data';

type SkillsSectionProps = {
  data: PortfolioData['skills'];
};

export const SkillsSection: FC<SkillsSectionProps> = ({ data }) => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="text-primary"><BrainCircuit className="size-8" /></div>
        <h2 className="text-3xl font-bold font-headline text-foreground">Habilidades / Skills</h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Conocimientos Técnicos / Technical Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {data.technical.map((category) => (
              <div key={category.category.es}>
                <h4 className="font-semibold mb-2 text-primary">{category.category.es} / {category.category.en}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.list.map(skill => <Badge key={skill} variant="secondary" className="transition-transform hover:scale-110 ease-in-out cursor-default">{skill}</Badge>)}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Habilidades Blandas / Soft Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              <ul className="space-y-2">
                {data.soft.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 transition-transform hover:scale-105 ease-in-out">
                    <BadgeCheck className="size-4 text-primary shrink-0" />
                    <span className="text-sm">{skill.es}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {data.soft.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 transition-transform hover:scale-105 ease-in-out">
                    <BadgeCheck className="size-4 text-primary shrink-0" />
                    <span className="text-sm">{skill.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
