"use client";

import type { FC } from 'react';
import { Languages } from 'lucide-react';
import { Section } from './section';
import { Card, CardContent } from '@/components/ui/card';
import type { PortfolioData } from '@/lib/portfolio-data';
import { useApp } from '@/context/app-context';

type LanguagesSectionProps = {
  data: PortfolioData['languages'];
};

export const LanguagesSection: FC<LanguagesSectionProps> = ({ data }) => {
  const { language } = useApp();

  return (
    <Section titleEs="Idiomas" titleEn="Languages" icon={<Languages className="size-8" />}>
      <Card>
        <CardContent className="p-6">
          <ul className="space-y-2">
            {data.map((lang, i) => (
              <li key={i} className="text-sm">
                <span className="font-bold">{lang.lang[language]}:</span> {lang.level[language]}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Section>
  );
};
