"use client";

import type { FC } from 'react';
import { GraduationCap } from 'lucide-react';
import { Section } from './section';
import { Card, CardContent } from '@/components/ui/card';
import type { PortfolioData } from '@/lib/portfolio-data';
import { useApp } from '@/context/app-context';
import Image from 'next/image';

type EducationSectionProps = {
  data: PortfolioData['education'];
};

export const EducationSection: FC<EducationSectionProps> = ({ data }) => {
  const { language } = useApp();
  return (
    <Section titleEs="Educación" titleEn="Education" icon={<GraduationCap className="size-8" />}>
      <div className="grid md:grid-cols-2 gap-6">
        {data.map((edu, index) => (
          <Card key={index} className="flex flex-col">
            <Image src={edu.image} alt={edu.institution} width={600} height={300} className="rounded-t-lg object-cover w-full h-48" data-ai-hint="university campus" />
            <CardContent className="p-6 flex-grow">
              <h3 className="font-bold text-lg font-headline">{edu.degree[language]}</h3>
              <p className="text-muted-foreground">{edu.institution} | {edu.period}</p>
              {edu.description && (
                <p className="mt-2 text-sm text-muted-foreground">{edu.description[language]}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
