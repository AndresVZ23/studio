
"use client";

import type { FC } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { PortfolioData } from '@/lib/portfolio-data';
import { Github, Mail, MapPin, Phone, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/context/app-context';
import placeholderImages from '@/lib/placeholder-images.json';

type HeroSectionProps = {
  data: PortfolioData['personal'];
};

export const HeroSection: FC<HeroSectionProps> = ({ data }) => {
  const { language, setLanguage, theme, setTheme } = useApp();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="bg-card p-6 sm:p-8 rounded-xl shadow-lg border border-primary/50">
      <div className="relative">
        <div className="absolute top-0 right-0 flex items-center gap-1 sm:gap-2">
          <Button variant="outline" size="icon" onClick={toggleLanguage} className="size-8 sm:size-10 text-xs">
            {language === 'es' ? 'EN' : 'ES'}
            <span className="sr-only">Change language</span>
          </Button>
          <Button variant="outline" size="icon" onClick={toggleTheme} className="size-8 sm:size-10">
            <Sun className="h-[1.1rem] w-[1.1rem] sm:h-[1.2rem] sm:w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-accent-foreground" />
            <Moon className="absolute h-[1.1rem] w-[1.1rem] sm:h-[1.2rem] sm:w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-accent-foreground" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
        
        <div className="flex flex-col items-center md:flex-row md:items-start gap-8 mt-16 md:mt-0">
          <Avatar className="size-28 sm:size-32 border-4 border-primary flex-shrink-0">
            {/* Cambiar Imagen */}
            <AvatarImage src={placeholderImages.personal.profileImage} alt={data.name} data-ai-hint="professional headshot" />
            <AvatarFallback>{data.shortName.charAt(0)}{data.shortName.split(' ')[1]?.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className="text-center md:text-left flex-1 pt-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-foreground break-words">{data.name}</h1>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <a href={`mailto:${data.email}`} className="flex items-center gap-2 hover:text-primary transition-colors justify-center sm:justify-start">
                <Mail className="size-4" />
                <span>{data.email}</span>
              </a>
              <a href={`tel:${data.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-primary transition-colors justify-center sm:justify-start">
                <Phone className="size-4" />
                <span>{data.phone}</span>
              </a>
              <a href={`https://github.com/${data.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors justify-center sm:justify-start">
                <Github className="size-4" />
                <span>{data.github}</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start">
                <MapPin className="size-4" />
                <span>{data.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
