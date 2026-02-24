import { Header } from '@/components/Header';
import { CategoryCard } from '@/components/CategoryCard';
import { GlossaryCard } from '@/components/GlossaryCard';
import { TurpiMascot } from '@/components/TurpiMascot';
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

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-stone-800 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <TurpiMascot className="w-8 h-8" />
            <span className="text-stone-500 text-sm">
              Hecho con Claude Code
            </span>
          </div>
          <div className="text-stone-600 text-sm">
            Diciembre 2025
          </div>
        </div>
      </footer>
    </div>
  );
}
