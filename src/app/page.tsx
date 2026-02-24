import Link from 'next/link';
import { Header } from '@/components/Header';
import { CategoryCard } from '@/components/CategoryCard';
import { GlossaryCard } from '@/components/GlossaryCard';
import { Mascot } from '@/components/Mascot';
import { categories, getToolsByCategory } from '@/data/tools';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950">
      <Header />

      {/* Categories */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              toolCount={getToolsByCategory(category.id).length}
            />
          ))}
          <GlossaryCard />
        </div>
      </main>

      {/* Emprende CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <Link
          href="/emprende"
          className="block rounded-2xl border border-stone-800 bg-stone-900 p-6 sm:p-8 hover:border-stone-700 transition-colors group"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-stone-100 mb-1">
                ¿Tienes un negocio?
              </h2>
              <p className="text-stone-400 text-sm">
                Descubre cómo usar IA para crear contenido, automatizar tareas y gestionar clientes.
              </p>
            </div>
            <span className="text-stone-500 group-hover:text-stone-300 transition-colors text-sm font-medium shrink-0">
              Ver guía →
            </span>
          </div>
        </Link>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-stone-800 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Mascot className="w-8 h-8" />
            <span className="text-stone-500 text-sm">
              Hecho con Claude Code
            </span>
          </div>
          <div className="text-stone-600 text-sm">
            Febrero 2026
          </div>
        </div>
      </footer>
    </div>
  );
}
