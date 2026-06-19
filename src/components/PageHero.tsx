import { motion } from 'motion/react';
import { cn } from './Layout';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  className?: string;
}

export default function PageHero({ title, subtitle, image, className }: PageHeroProps) {
  return (
    <section className={cn("relative h-[50vh] min-h-[400px] pt-[136px] flex items-center justify-center overflow-hidden", className)}>
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-navy/50 mix-blend-multiply" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 leading-tight"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base text-white/80 uppercase tracking-[0.2em] font-medium"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
