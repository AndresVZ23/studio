"use client";

import type { FC } from 'react';
import { BrainCircuit, BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { PortfolioData } from '@/lib/portfolio-data';
import { useApp } from '@/context/app-context';
import { Section } from './section';

type SkillsSectionProps = {
  data: PortfolioData['skills'];
};

export const SkillsSection: FC<SkillsSectionProps> = ({ data }) => {
  const { language } = useApp();

  return (
    <Section
      titleEs="Habilidades"
      titleEn="Skills"
      icon={<BrainCircuit className="size-8" />}
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">
              {language === 'es' ? 'Conocimientos Técnicos' : 'Technical Skills'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {data.technical.map((category) => (
              <div key={category.category.es}>
                <h4 className="font-semibold mb-2 text-primary">{category.category[language]}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.list.map(skill => <Badge key={skill} variant="secondary" className="transition-transform hover:scale-110 ease-in-out cursor-default">{skill}</Badge>)}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">
              {language === 'es' ? 'Habilidades Blandas' : 'Soft Skills'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {data.soft.map((skill, i) => (
                <li key={i} className="flex items-center gap-2 transition-transform hover:scale-105 ease-in-out">
                  <BadgeCheck className="size-4 text-primary shrink-0" />
                  <span className="text-sm">{skill[language]}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};
