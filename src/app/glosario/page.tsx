'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { useSkillLevel } from '@/contexts/SkillLevelContext';
import { glossary, GlossaryCategory, GlossaryTerm } from '@/data/glossary';
import { Mascot } from '@/components/Mascot';

const categoryLabels: Record<GlossaryCategory, { label: string; icon: string }> = {
  development: { label: 'Desarrollo', icon: '🛠️' },
  ai: { label: 'Inteligencia Artificial', icon: '🤖' },
  web: { label: 'Web', icon: '🌐' },
  business: { label: 'Negocio', icon: '💼' },
};

const categoryOrder: GlossaryCategory[] = ['development', 'ai', 'web', 'business'];

export default function GlosarioPage() {
  const { level, colors } = useSkillLevel();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<GlossaryCategory | 'all'>('all');

  // Filter terms based on search and category
  const filteredTerms = glossary.filter((term) => {
    const matchesSearch =
      searchQuery === '' ||
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.aliases?.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
      term.definition[level].toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Group terms by category for display
  const termsByCategory = categoryOrder.reduce(
    (acc, category) => {
      acc[category] = filteredTerms.filter((t) => t.category === category);
      return acc;
    },
    {} as Record<GlossaryCategory, GlossaryTerm[]>
  );

  const totalTerms = glossary.length;
  const shownTerms = filteredTerms.length;

  return (
    <div className="min-h-screen bg-stone-950">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-stone-100 mb-2">Glosario</h1>
          <p className="text-stone-400">
            {totalTerms} términos explicados para tu nivel.
            <span className="text-stone-500 ml-2">
              Toca cualquier término subrayado en el sitio para ver su definición.
            </span>
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Buscar término..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:border-stone-700"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors
                ${selectedCategory === 'all'
                  ? `${colors.primary} text-stone-950`
                  : 'bg-stone-900 text-stone-400 hover:bg-stone-800'
                }`}
            >
              Todos
            </button>
            {categoryOrder.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors
                  ${selectedCategory === cat
                    ? `${colors.primary} text-stone-950`
                    : 'bg-stone-900 text-stone-400 hover:bg-stone-800'
                  }`}
              >
                {categoryLabels[cat].icon} {categoryLabels[cat].label}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        {searchQuery && (
          <p className="text-stone-500 text-sm mb-4">
            {shownTerms === 0
              ? 'No se encontraron términos'
              : `${shownTerms} término${shownTerms !== 1 ? 's' : ''} encontrado${shownTerms !== 1 ? 's' : ''}`}
          </p>
        )}

        {/* Terms by Category */}
        {shownTerms > 0 ? (
          <div className="space-y-8">
            {categoryOrder.map((category) => {
              const terms = termsByCategory[category];
              if (terms.length === 0) return null;

              return (
                <section key={category}>
                  <h2 className={`text-lg font-semibold ${colors.text} mb-4 flex items-center gap-2`}>
                    <span>{categoryLabels[category].icon}</span>
                    {categoryLabels[category].label}
                    <span className="text-stone-600 font-normal text-sm">({terms.length})</span>
                  </h2>

                  <div className="space-y-4">
                    {terms.map((term) => (
                      <article
                        key={term.id}
                        id={term.id}
                        className="p-4 bg-stone-900 border border-stone-800 rounded-lg scroll-mt-24"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-stone-100">
                              {term.term}
                            </h3>
                            {term.aliases && term.aliases.length > 0 && (
                              <p className="text-stone-600 text-sm mt-0.5">
                                También: {term.aliases.join(', ')}
                              </p>
                            )}
                          </div>
                        </div>

                        <p className="text-stone-300 mt-3 leading-relaxed">
                          {term.definition[level]}
                        </p>

                        {term.example && (
                          <p className="text-stone-500 text-sm mt-3 italic">
                            Ejemplo: {term.example}
                          </p>
                        )}

                        {term.relatedTerms && term.relatedTerms.length > 0 && (
                          <div className="mt-3 flex items-center gap-2 flex-wrap">
                            <span className="text-stone-600 text-sm">Relacionados:</span>
                            {term.relatedTerms.map((related) => {
                              const relatedTerm = glossary.find((t) => t.id === related);
                              if (!relatedTerm) return null;
                              return (
                                <a
                                  key={related}
                                  href={`#${related}`}
                                  className={`text-sm ${colors.text} ${colors.textHover} hover:underline`}
                                >
                                  {relatedTerm.term}
                                </a>
                              );
                            })}
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <Mascot className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-stone-500">
              No encontramos términos con &quot;{searchQuery}&quot;
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className={`mt-4 ${colors.text} hover:underline`}
            >
              Ver todos los términos
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-stone-800 mt-8">
        <p className="text-stone-600 text-sm text-center">
          ¿Falta algún término?{' '}
          <a
            href="https://github.com/HermeticOrmus/harpia/issues"
            target="_blank"
            rel="noopener noreferrer"
            className={`${colors.text} hover:underline`}
          >
            Sugiérelo en GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
