'use client';

import { ToolCard } from '@/components/ToolCard';
import { Icon } from '@/components/Icon';
import { useSkillLevel } from '@/contexts/SkillLevelContext';
import { Tool } from '@/data/tools';
import Link from 'next/link';

interface CategoryPageContentProps {
  category: {
    id: string;
    name: string;
    description: string;
    icon: string;
  };
  tools: Tool[];
  recommendation: string;
}

function MascotIcon({ className = 'w-6 h-6', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={color}>
      <ellipse cx="10" cy="15" rx="6" ry="5" />
      <ellipse cx="8" cy="14" rx="4" ry="3" fill="#1c1917" />
      <ellipse cx="7" cy="14" rx="2.5" ry="2" fill="white" />
      <circle cx="16" cy="9" r="5" fill="#1c1917" />
      <path d="M14 7 Q16 5 19 7 Q20 9 19 11 Q16 12 14 11 Q12 9 14 7" fill={color} />
      <circle cx="17" cy="8" r="1.5" fill="white" />
      <circle cx="17.3" cy="7.7" r="0.5" fill="#1c1917" />
      <path d="M20 9 L23 8.5 L20 10 Z" fill="#78716c" />
    </svg>
  );
}

export function CategoryPageContent({ category, tools, recommendation }: CategoryPageContentProps) {
  const { colors } = useSkillLevel();

  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-stone-500 transition-colors"
          style={{ ['--hover-color' as string]: colors.hex }}
          onMouseOver={(e) => e.currentTarget.style.color = colors.hex}
          onMouseOut={(e) => e.currentTarget.style.color = ''}
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Todas las categorias
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-8 md:p-12">
          <div className="mb-4" style={{ color: colors.hex }}>
            <Icon name={category.icon} className="w-16 h-16" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-stone-100">{category.name}</h1>
          <p className="text-stone-400 text-lg max-w-2xl">{category.description}</p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-stone-100 mb-8">
          {tools.length} {tools.length === 1 ? 'herramienta' : 'herramientas'} en esta categoria
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Quick Recommendation */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${colors.hex}33` }}
            >
              <MascotIcon className="w-6 h-6" color={colors.hex} />
            </div>
            <h3 className="text-xl font-bold text-stone-100">
              La recomendacion de HarpIA
            </h3>
          </div>
          <p className="text-stone-400 pl-13">
            {recommendation}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-stone-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link
            href="/"
            className="text-stone-500 transition-colors"
            onMouseOver={(e) => e.currentTarget.style.color = colors.hex}
            onMouseOut={(e) => e.currentTarget.style.color = ''}
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al inicio
            </span>
          </Link>
          <div className="text-stone-600 text-sm">Febrero 2026</div>
        </div>
      </footer>
    </>
  );
}
