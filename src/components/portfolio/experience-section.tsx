
"use client";

import type { FC } from 'react';
import { Briefcase } from 'lucide-react';
import { Section } from './section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
      <div className="space-y-8">
        {data.map((exp, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                <div className="bg-white p-2 rounded-md border flex-shrink-0">
                  {/* Cambiar Imagen */}
                  <Image 
                    src={placeholderImages.experience[index].image} 
                    alt={`${exp.company} logo`} 
                    width={80} 
                    height={80} 
                    className="object-contain"
                    data-ai-hint="company logo"
                  />
                </div>
                <div className="flex-grow">
                  <CardTitle className="font-headline text-xl">{exp.role[language]}</CardTitle>
                  <p className="text-muted-foreground pt-1">{exp.company} | {exp.period}</p>
                </div>
              </div>
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
