"use client";

import type { FC } from 'react';
import { Trophy, Star } from 'lucide-react';
import { Section } from './section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { PortfolioData } from '@/lib/portfolio-data';

type CertificationsSectionProps = {
  data: PortfolioData['certifications'];
};

export const CertificationsSection: FC<CertificationsSectionProps> = ({ data }) => {
  return (
    <Section titleEs="Salón de la Fama" titleEn="Hall of Fame" icon={<Trophy className="size-8" />}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((cert, index) => (
          <Card key={index} className="group bg-card border-primary/20 hover:border-primary/60 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
            <CardHeader className="items-center">
              <div className="p-4 bg-primary/10 rounded-full mb-2">
                <Trophy className="size-8 text-primary" />
              </div>
              <CardTitle className="text-base font-bold leading-tight">{cert.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground">{cert.year}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
