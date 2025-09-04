import type { FC } from 'react';
import { User } from 'lucide-react';
import { Section } from './section';
import { Card, CardContent } from '@/components/ui/card';
import type { PortfolioData } from '@/lib/portfolio-data';

type ProfileSectionProps = {
  data: PortfolioData['profile'];
};

export const ProfileSection: FC<ProfileSectionProps> = ({ data }) => {
  return (
    <Section titleEs="Perfil" titleEn="Profile" icon={<User className="size-8" />}>
      <Card>
        <CardContent className="p-6 grid md:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <h3 className="font-bold text-lg mb-2 font-headline text-primary">Español</h3>
            <p className="text-muted-foreground leading-relaxed">{data.es}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2 font-headline text-primary">English</h3>
            <p className="text-muted-foreground leading-relaxed">{data.en}</p>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
};
