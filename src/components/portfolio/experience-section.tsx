"use client";

import type { FC } from 'react';
import { Briefcase } from 'lucide-react';
import { Section } from './section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { PortfolioData } from '@/lib/portfolio-data';
import { useApp } from '@/context/app-context';
import Image from 'next/image';

type ExperienceSectionProps = {
  data: PortfolioData['experience'];
};

export const ExperienceSection: FC<ExperienceSectionProps> = ({ data }) => {
  const { language } = useApp();

  return (
    <Section titleEs="Experiencia Profesional" titleEn="Professional Experience" icon={<Briefcase className="size-8" />}>
      <div className="space-y-8">
        {data.map((exp, index) => (
          <div key={index} className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-1">
              {/* Cambiar Imagen */}
              <Image src={exp.image} alt={exp.company} width={600} height={400} className="rounded-lg object-cover aspect-[3/2]" data-ai-hint="office building" />
            </div>
            <div className="md:col-span-2">
              <Card className="overflow-hidden h-full">
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
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
