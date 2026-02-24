'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useSkillLevel } from '@/contexts/SkillLevelContext';
import { GlossaryTerm as GlossaryTermType } from '@/data/glossary';

interface GlossaryTermProps {
  term: GlossaryTermType;
  children: React.ReactNode;
}

// Compute tooltip position based on available space
function computeTooltipPosition(element: HTMLElement | null): 'top' | 'bottom' {
  if (!element) return 'top';
  const rect = element.getBoundingClientRect();
  const spaceAbove = rect.top;
  const spaceBelow = window.innerHeight - rect.bottom;
  // Show tooltip below if not enough space above
  return spaceAbove < 150 && spaceBelow > spaceAbove ? 'bottom' : 'top';
}

export function GlossaryTerm({ term, children }: GlossaryTermProps) {
  const { level, colors } = useSkillLevel();
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<'top' | 'bottom'>('top');
  const termRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const definition = term.definition[level];

  // Handle showing tooltip with position calculation
  const handleShowTooltip = useCallback((show: boolean) => {
    if (show && termRef.current) {
      setTooltipPosition(computeTooltipPosition(termRef.current));
    }
    setShowTooltip(show);
  }, []);

  // Close tooltip when clicking outside
  useEffect(() => {
    if (!showTooltip) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        termRef.current &&
        !termRef.current.contains(event.target as Node)
      ) {
        setShowTooltip(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showTooltip]);

  return (
    <span className="relative inline">
      <span
        ref={termRef}
        className={`cursor-help border-b border-dotted ${colors.border} ${colors.textHover} transition-colors`}
        onMouseEnter={() => handleShowTooltip(true)}
        onMouseLeave={() => handleShowTooltip(false)}
        onClick={() => handleShowTooltip(!showTooltip)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleShowTooltip(!showTooltip);
          }
        }}
        aria-describedby={`tooltip-${term.id}`}
      >
        {children}
      </span>

      {showTooltip && (
        <div
          ref={tooltipRef}
          id={`tooltip-${term.id}`}
          role="tooltip"
          className={`absolute z-50 w-72 sm:w-80 p-3 rounded-lg bg-stone-800 border border-stone-700 shadow-xl
            ${tooltipPosition === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'}
            left-1/2 -translate-x-1/2
            animate-in fade-in-0 zoom-in-95 duration-200`}
          onMouseEnter={() => handleShowTooltip(true)}
          onMouseLeave={() => handleShowTooltip(false)}
        >
          {/* Arrow */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-0 h-0
              border-l-8 border-r-8 border-transparent
              ${tooltipPosition === 'top'
                ? 'top-full border-t-8 border-t-stone-800'
                : 'bottom-full border-b-8 border-b-stone-800'
              }`}
          />

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className={`font-semibold ${colors.text}`}>
                {term.term}
              </span>
              <span className="text-xs text-stone-500 uppercase">
                {term.category === 'development' && 'Desarrollo'}
                {term.category === 'ai' && 'IA'}
                {term.category === 'web' && 'Web'}
                {term.category === 'business' && 'Negocio'}
              </span>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed">
              {definition}
            </p>

            {term.example && (
              <p className="text-xs text-stone-500 italic">
                Ej: {term.example}
              </p>
            )}

            <Link
              href={`/glosario#${term.id}`}
              className={`inline-block text-xs ${colors.text} ${colors.textHover} mt-1`}
              onClick={(e) => e.stopPropagation()}
            >
              Ver en glosario →
            </Link>
          </div>
        </div>
      )}
    </span>
  );
}
