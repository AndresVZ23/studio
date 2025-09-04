"use client";

import type { FC } from 'react';
import { Trophy } from 'lucide-react';
import { Section } from './section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { PortfolioData } from '@/lib/portfolio-data';
import Image from 'next/image';

type CertificationsSectionProps = {
  data: PortfolioData['certifications'];
};

export const CertificationsSection: FC<CertificationsSectionProps> = ({ data }) => {
  return (
    <Section titleEs="Certificaciones" titleEn="Certifications" icon={<Trophy className="size-8" />}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((cert, index) => (
          <Card key={index} className="group bg-card border-primary/20 hover:border-primary/60 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center shadow-lg hover:shadow-primary/20">
            <CardHeader className="items-center">
              <div className="p-2 bg-primary/10 rounded-full mb-2 group-hover:bg-primary/20 transition-colors flex items-center justify-center size-24">
                <Image src={cert.logo} alt={`${cert.issuer} logo`} width={80} height={80} className="rounded-full object-contain" data-ai-hint="company logo" />
              </div>
              <CardTitle className="text-base font-bold leading-tight">{cert.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
