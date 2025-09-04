import type { FC } from 'react';
import { Languages } from 'lucide-react';
import { Section } from './section';
import { Card, CardContent } from '@/components/ui/card';
import type { PortfolioData } from '@/lib/portfolio-data';

type LanguagesSectionProps = {
  data: PortfolioData['languages'];
};

export const LanguagesSection: FC<LanguagesSectionProps> = ({ data }) => {
  return (
    <Section titleEs="Idiomas" titleEn="Languages" icon={<Languages className="size-8" />}>
      <Card>
        <CardContent className="p-6 grid md:grid-cols-2 gap-8">
          <ul className="space-y-2">
            {data.map((lang, i) => (
              <li key={i} className="text-sm">
                <span className="font-bold">{lang.lang.es}:</span> {lang.level.es}
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {data.map((lang, i) => (
              <li key={i} className="text-sm">
                <span className="font-bold">{lang.lang.en}:</span> {lang.level.en}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Section>
  );
};
