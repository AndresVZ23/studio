import type { FC } from 'react';
import { Award, Star } from 'lucide-react';
import { Section } from './section';
import { Card, CardContent } from '@/components/ui/card';
import type { PortfolioData } from '@/lib/portfolio-data';

type CertificationsSectionProps = {
  data: PortfolioData['certifications'];
};

export const CertificationsSection: FC<CertificationsSectionProps> = ({ data }) => {
  return (
    <Section titleEs="Certificaciones" titleEn="Certifications" icon={<Award className="size-8" />}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((cert, index) => (
          <Card key={index} className="hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="bg-secondary p-3 rounded-lg">
                <Star className="size-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="font-bold text-sm">{cert.name}</p>
                <p className="text-xs text-muted-foreground">{cert.issuer} - {cert.year}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
