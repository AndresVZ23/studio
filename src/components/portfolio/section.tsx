"use client";

import type { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useApp } from '@/context/app-context';

interface SectionProps {
  titleEs: string;
  titleEn: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}

export const Section: FC<SectionProps> = ({ titleEs, titleEn, icon, children, className }) => {
  const { language } = useApp();
  const title = language === 'es' ? titleEs : titleEn;

  return (
    <section className={cn("space-y-6", className)}>
      <div className="flex items-center gap-4 border-b border-border pb-4">
        <div className="text-primary">{icon}</div>
        <h2 className="text-3xl font-bold font-headline text-foreground">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
};
