'use client';

import { CategoryInfo } from '@/data/tools';
import { useSkillLevel } from '@/contexts/SkillLevelContext';
import Link from 'next/link';
import {
  Brain,
  Code2,
  ImageIcon,
  Cloud,
  Database,
  Zap,
  Palette,
  Globe,
  Blocks,
  Wrench,
  GitBranch,
  LucideIcon,
} from 'lucide-react';

// Map category IDs to Lucide icons (monochrome, dynamically colorable)
const categoryIconMap: Record<string, LucideIcon> = {
  llm: Brain,
  coding: Code2,
  image: ImageIcon,
  hosting: Cloud,
  database: Database,
  automation: Zap,
  design: Palette,
  languages: Globe,
  frameworks: Blocks,
  devtools: Wrench,
  opensource: GitBranch,
};

interface CategoryCardProps {
  category: CategoryInfo;
  toolCount: number;
}

export function CategoryCard({ category, toolCount }: CategoryCardProps) {
  const { colors } = useSkillLevel();
  const IconComponent = categoryIconMap[category.id] || Brain;

  return (
    <Link href={`/category/${category.id}`} className="group block">
      <article
        className="relative overflow-hidden rounded-2xl p-5 bg-stone-900 border border-stone-800 hover:border-stone-700 transition-all duration-200 hover:-translate-y-0.5"
      >
        {/* Background icon - large, faded */}
        <div
          className="absolute top-0 right-0 -mt-6 -mr-6 opacity-5 group-hover:opacity-10 transition-opacity"
          aria-hidden="true"
        >
          <IconComponent
            className="w-28 h-28 transition-colors"
            strokeWidth={1}
            style={{ color: colors.hex }}
          />
        </div>

        <div className="relative">
          {/* Main icon - colored by theme */}
          <div className="mb-3">
            <IconComponent
              className="w-8 h-8 transition-colors"
              strokeWidth={1.5}
              style={{ color: colors.hex }}
            />
          </div>
          <h3 className="text-lg font-bold mb-1 text-stone-100 transition-colors">
            <span className="group-hover:hidden">{category.name}</span>
            <span className="hidden group-hover:inline" style={{ color: colors.hex }}>{category.name}</span>
          </h3>
          <p className="text-stone-500 text-sm leading-snug mb-3 line-clamp-2">
            {category.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium bg-stone-800 text-stone-400 px-2.5 py-1 rounded-full">
              {toolCount} {toolCount === 1 ? 'herramienta' : 'herramientas'}
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
