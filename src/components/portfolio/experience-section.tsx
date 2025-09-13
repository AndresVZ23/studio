
"use client";

import type { FC } from 'react';
import { Briefcase } from 'lucide-react';
import { Section } from './section';
import { Card, CardContent } from '@/components/ui/card';
import type { PortfolioData } from '@/lib/portfolio-data';
import { useApp } from '@/context/app-context';
import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';

type ExperienceSectionProps = {
  data: PortfolioData['experience'];
};

export const ExperienceSection: FC<ExperienceSectionProps> = ({ data }) => {
  const { language } = useApp();

  return (
    <Section titleEs="Experiencia Profesional" titleEn="Professional Experience" icon={<Briefcase className="size-8" />}>
      <div className="grid md:grid-cols-2 gap-6">
        {data.map((exp, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <div className="bg-muted rounded-t-lg">
              <Image 
                src={placeholderImages.experience[index].image} 
                alt={exp.company} 
                width={600} 
                height={300} 
                className="rounded-t-lg object-contain w-full h-48"
                data-ai-hint="company office"
              />
            </div>
            <CardContent className="p-6 flex-grow flex flex-col">
              <div className="flex-grow">
                <h3 className="font-bold text-lg font-headline">{exp.role[language]}</h3>
                <p className="text-muted-foreground">{exp.company} | {exp.period}</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                  {exp.tasks.map((task, i) => <li key={i}>{task[language]}</li>)}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
