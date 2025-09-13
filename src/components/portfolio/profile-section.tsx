"use client";

import type { FC } from 'react';
import { User } from 'lucide-react';
import { Section } from './section';
import { Card, CardContent } from '@/components/ui/card';
import type { PortfolioData } from '@/lib/portfolio-data';
import { useApp } from '@/context/app-context';

type ProfileSectionProps = {
  data: PortfolioData['profile'];
};

export const ProfileSection: FC<ProfileSectionProps> = ({ data }) => {
  const { language } = useApp();
  const currentProfile = language === 'es' ? data.es : data.en;
  
  return (
    <Section titleEs="Perfil" titleEn="Profile" icon={<User className="size-8" />}>
      <Card>
        <CardContent className="p-6">
          <div>
            <p className="text-muted-foreground leading-relaxed text-justify">{currentProfile}</p>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
};
