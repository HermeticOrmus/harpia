'use client';

import { Tool, getContentForLevel } from '@/data/tools';
import { useSkillLevel } from '@/contexts/SkillLevelContext';
import { pricingColors, pricingLabels } from '@/utils/pricing';
import { Mascot } from './Mascot';
import Link from 'next/link';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const { level, colors } = useSkillLevel();

  const tagline = getContentForLevel(tool.tagline, level);
  const turpiTake = getContentForLevel(tool.turpiTake, level);

  return (
    <Link
      href={`/tool/${tool.slug}`}
      className="group block"
      style={{ '--theme-color': colors.hex, '--theme-color-light': colors.hexLight } as React.CSSProperties}
    >
      <article className="relative bg-stone-900 rounded-2xl border border-stone-800 p-6 hover:border-stone-700 transition-all duration-200">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3
              className="text-xl font-semibold text-stone-100 transition-colors"
              style={{ color: 'inherit' }}
            >
              <span className="group-hover:hidden">{tool.name}</span>
              <span className="hidden group-hover:inline" style={{ color: colors.hex }}>{tool.name}</span>
            </h3>
            <span
              className={`inline-block mt-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${pricingColors[tool.pricing]}`}
            >
              {pricingLabels[tool.pricing]}
            </span>
          </div>
          <span
            className="text-stone-600 transition-colors p-1 -m-1 group-hover:scale-105"
            style={{ color: undefined }}
            aria-hidden="true"
          >
            <svg
              className="w-5 h-5 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ stroke: 'currentColor' }}
            >
              <style>{`.group:hover & { stroke: var(--theme-color); }`}</style>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>

        <p className="text-stone-400 text-sm mb-4 leading-relaxed">{tagline}</p>

        <div className="mb-4">
          <p className="text-xs font-medium text-stone-500 uppercase tracking-wide mb-2">
            Ideal para
          </p>
          <div className="flex flex-wrap gap-1.5">
            {tool.bestFor.slice(0, 3).map((use) => (
              <span
                key={use}
                className="px-2 py-1 bg-stone-800 text-stone-400 rounded-lg text-xs"
              >
                {use}
              </span>
            ))}
          </div>
        </div>

        {tool.pricingDetails && (
          <p className="text-xs text-stone-500 mb-4">{tool.pricingDetails}</p>
        )}

        {turpiTake && (
          <div className="pt-4 border-t border-stone-800">
            <div className="flex items-center gap-2 mb-2">
              <Mascot className="w-6 h-6" />
              <span className="text-xs font-medium" style={{ color: colors.hex }}>HarpIA opina</span>
            </div>
            <p className="text-sm text-stone-400 italic leading-relaxed">
              &ldquo;{turpiTake}&rdquo;
            </p>
          </div>
        )}

        {/* Last Updated - subtle footer */}
        <div className="mt-4 pt-3 border-t border-stone-800/50 flex items-center justify-end text-xs text-stone-600">
          <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {new Date(tool.lastUpdated).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}
        </div>
      </article>
    </Link>
  );
}
