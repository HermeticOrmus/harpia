'use client';

import { useSkillLevel, SkillLevel } from '@/contexts/SkillLevelContext';
import { Sprout, Flower2, TreeDeciduous, LucideIcon } from 'lucide-react';

const levels: {
  value: SkillLevel;
  label: string;
  shortLabel: string;
  activeClass: string;
  hoverClass: string;
  Icon: LucideIcon;
}[] = [
  {
    value: 'beginner',
    label: 'Principiante',
    shortLabel: 'Nuevo',
    activeClass: 'bg-emerald-500 text-stone-950',
    hoverClass: 'hover:text-emerald-400',
    Icon: Sprout,
  },
  {
    value: 'intermediate',
    label: 'Intermedio',
    shortLabel: 'Algo',
    activeClass: 'bg-amber-500 text-stone-950',
    hoverClass: 'hover:text-amber-400',
    Icon: Flower2,
  },
  {
    value: 'advanced',
    label: 'Avanzado',
    shortLabel: 'Pro',
    activeClass: 'bg-violet-500 text-stone-950',
    hoverClass: 'hover:text-violet-400',
    Icon: TreeDeciduous,
  },
];

export function SkillToggle() {
  const { level, setLevel } = useSkillLevel();

  return (
    <div className="flex items-center gap-1 bg-stone-800 rounded-full p-1">
      {levels.map((l) => (
        <button
          key={l.value}
          onClick={() => setLevel(l.value)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            level === l.value
              ? l.activeClass
              : `text-stone-400 ${l.hoverClass}`
          }`}
          aria-pressed={level === l.value}
        >
          <l.Icon
            className="w-4 h-4 transition-all"
            strokeWidth={2}
          />
          <span className="hidden sm:inline">{l.label}</span>
          <span className="sm:hidden">{l.shortLabel}</span>
        </button>
      ))}
    </div>
  );
}
