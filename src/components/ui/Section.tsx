import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function Section({ children, id, title, subtitle, className }: SectionProps) {
  return (
    <section id={id} className={cn('py-16', className)}>
      {(title || subtitle) && (
        <div className="mb-10">
          {title && (
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px flex-1 max-w-8 bg-gradient-to-r from-indigo-500 to-transparent" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                {title}
              </h2>
            </div>
          )}
          {subtitle && (
            <p className="text-base text-gray-500 dark:text-gray-400 ml-12">{subtitle}</p>
          )}
          <div className="mt-4 h-px bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-transparent" />
        </div>
      )}
      {children}
    </section>
  );
}
