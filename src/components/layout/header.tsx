import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="py-6 px-4 md:px-8 bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-primary">
            CollegeTips Gallery
          </h1>
        </div>
        <p className="text-sm text-muted-foreground hidden md:block">
          Showcasing our coolest moments! ✨
        </p>
      </div>
    </header>
  );
}
