'use client';

import { useSkillLevel } from '@/contexts/SkillLevelContext';
import { glossary } from '@/data/glossary';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export function GlossaryCard() {
  const { colors } = useSkillLevel();
  const termCount = glossary.length;

  return (
    <Link href="/glosario" className="group block">
      <article
        className="relative overflow-hidden rounded-2xl p-5 bg-stone-900 border border-stone-800 hover:border-stone-700 transition-all duration-200 hover:-translate-y-0.5"
      >
        {/* Background icon - large, faded */}
        <div
          className="absolute top-0 right-0 -mt-6 -mr-6 opacity-5 group-hover:opacity-10 transition-opacity"
          aria-hidden="true"
        >
          <BookOpen
            className="w-28 h-28 transition-colors"
            strokeWidth={1}
            style={{ color: colors.hex }}
          />
        </div>

        <div className="relative">
          {/* Main icon - colored by theme */}
          <div className="mb-3">
            <BookOpen
              className="w-8 h-8 transition-colors"
              strokeWidth={1.5}
              style={{ color: colors.hex }}
            />
          </div>
          <h3 className="text-lg font-bold mb-1 text-stone-100 transition-colors">
            <span className="group-hover:hidden">Glosario</span>
            <span className="hidden group-hover:inline" style={{ color: colors.hex }}>Glosario</span>
          </h3>
          <p className="text-stone-500 text-sm leading-snug mb-3 line-clamp-2">
            Términos técnicos explicados para tu nivel
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium bg-stone-800 text-stone-400 px-2.5 py-1 rounded-full">
              {termCount} términos
            </span>
            <span
              className="text-stone-600 group-hover:translate-x-0.5 transition-all"
              aria-hidden="true"
            >
              <svg className="w-4 h-4 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <style>{`.group:hover & { stroke: ${colors.hex}; }`}</style>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
