'use client';

import Link from 'next/link';
import { Mascot } from './Mascot';
import { SkillToggle } from './SkillToggle';
import { tools } from '@/data/tools';

export function Header() {
  return (
    <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Inicio">
          <Mascot className="w-10 h-10" />
          <span className="font-bold text-stone-100 hidden sm:inline">IA sin misterios</span>
        </Link>

        <div className="flex items-center gap-4">
          <SkillToggle />
          <div className="hidden md:flex items-center gap-4 text-sm">
            <Link href="/glosario" className="text-stone-500 hover:text-stone-300 transition-colors">
              Glosario
            </Link>
            <span className="text-stone-600">|</span>
            <span className="text-stone-500">{tools.length} herramientas</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
