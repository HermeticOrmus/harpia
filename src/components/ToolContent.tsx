'use client';

import { Tool, getContentForLevel, getCategoryInfo } from '@/data/tools';
import { useSkillLevel } from '@/contexts/SkillLevelContext';
import { pricingColorsWithBorder, pricingLabels } from '@/utils/pricing';
import { GlossaryText } from './GlossaryText';
import { Mascot } from './Mascot';
import Link from 'next/link';

interface ToolContentProps {
  tool: Tool;
}

function AlertIcon({ className = 'w-6 h-6', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

export function ToolContent({ tool }: ToolContentProps) {
  const { level, colors } = useSkillLevel();
  const category = getCategoryInfo(tool.category);

  const tagline = getContentForLevel(tool.tagline, level);
  const description = getContentForLevel(tool.description, level);
  const turpiTake = getContentForLevel(tool.turpiTake, level);
  const limitations = getContentForLevel(tool.limitations, level);

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-3xl p-8 md:p-12">
      {/* Title & Pricing */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-100 mb-2">
            {tool.name}
          </h1>
          <p className="text-xl" style={{ color: colors.hex }}>{tagline}</p>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-2">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${pricingColorsWithBorder[tool.pricing]}`}
          >
            {pricingLabels[tool.pricing]}
          </span>
          {tool.pricingDetails && (
            <span className="text-sm text-stone-500">{tool.pricingDetails}</span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-stone-400 text-lg leading-relaxed mb-8">
        <GlossaryText>{description}</GlossaryText>
      </p>

      {/* Best For */}
      <div className="mb-8">
        <h2 className="text-sm font-medium text-stone-500 uppercase tracking-wide mb-3">
          Ideal para
        </h2>
        <div className="flex flex-wrap gap-2">
          {tool.bestFor.map((use) => (
            <span
              key={use}
              className="px-3 py-1.5 bg-stone-800 text-stone-300 rounded-lg text-sm"
            >
              {use}
            </span>
          ))}
        </div>
      </div>

      {/* HarpIA's Take */}
      {turpiTake && (
        <div className="bg-stone-950 border border-stone-800 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <Mascot className="w-10 h-10" />
            <span className="font-medium" style={{ color: colors.hex }}>HarpIA opina</span>
          </div>
          <p className="text-stone-300 text-lg italic leading-relaxed">
            &ldquo;<GlossaryText>{turpiTake}</GlossaryText>&rdquo;
          </p>
        </div>
      )}

      {/* Limitations */}
      {limitations && (
        <div
          className="bg-stone-950 rounded-2xl p-6 mb-8"
          style={{ borderWidth: 1, borderStyle: 'solid', borderColor: `${colors.hex}4d` }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${colors.hex}33` }}
            >
              <AlertIcon className="w-6 h-6" color={colors.hex} />
            </div>
            <span className="font-medium" style={{ color: colors.hex }}>Limitaciones importantes</span>
          </div>
          <p className="text-stone-400 leading-relaxed">
            <GlossaryText>{limitations}</GlossaryText>
          </p>
        </div>
      )}

      {/* Last Updated */}
      <div className="flex items-center gap-2 mb-8 text-sm text-stone-500">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Información actualizada: {new Date(tool.lastUpdated).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full text-stone-950 font-semibold transition-colors"
          style={{ backgroundColor: colors.hex }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.hexLight}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.hex}
        >
          Visitar {tool.name}
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Link>
        <Link
          href={`/category/${tool.category}`}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-stone-700 text-stone-300 font-medium hover:border-stone-600 hover:bg-stone-800 transition-colors"
        >
          Ver mas en {category?.name}
        </Link>
      </div>
    </div>
  );
}
