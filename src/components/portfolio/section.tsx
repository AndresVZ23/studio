import type { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  titleEs: string;
  titleEn: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}

export const Section: FC<SectionProps> = ({ titleEs, titleEn, icon, children, className }) => {
  return (
    <section className={cn("space-y-6", className)}>
      <div className="flex items-center gap-4">
        <div className="text-primary">{icon}</div>
        <h2 className="text-3xl font-bold font-headline text-foreground">
          {titleEs} / {titleEn}
        </h2>
      </div>
      {children}
    </section>
  );
};
