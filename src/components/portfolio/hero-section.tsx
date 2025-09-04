import type { FC } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { PortfolioData } from '@/lib/portfolio-data';
import { Github, Mail, MapPin, Phone } from 'lucide-react';

type HeroSectionProps = {
  data: PortfolioData['personal'];
};

export const HeroSection: FC<HeroSectionProps> = ({ data }) => {
  return (
    <header className="flex flex-col md:flex-row items-center gap-8 bg-card p-6 sm:p-8 rounded-xl shadow-sm">
      <Avatar className="size-32 border-4 border-primary">
        <AvatarImage src={data.profileImage} alt={data.name} data-ai-hint="professional headshot" />
        <AvatarFallback>{data.shortName.charAt(0)}{data.shortName.split(' ')[1]?.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="text-center md:text-left flex-1">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">{data.name}</h1>
        <p className="text-xl text-muted-foreground font-headline">{data.shortName}</p>
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
    </header>
  );
};
