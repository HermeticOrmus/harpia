import { Header } from '@/components/Header';
import { ToolContent } from '@/components/ToolContent';
import {
  tools,
  getToolBySlug,
  getCategoryInfo,
} from '@/data/tools';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const category = getCategoryInfo(tool.category);

  return (
    <div className="min-h-screen bg-stone-950">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/category/${tool.category}`}
          className="inline-flex items-center text-stone-500 hover:text-amber-500 transition-colors"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {category?.name}
        </Link>
      </div>

      {/* Tool Info */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ToolContent tool={tool} />

        {/* Meta */}
        <div className="mt-6 text-center text-sm text-stone-600">
          Actualizado: {tool.lastUpdated}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-stone-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-stone-500 hover:text-amber-500 transition-colors">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al inicio
            </span>
          </Link>
          <div className="text-stone-600 text-sm">Diciembre 2025</div>
        </div>
      </footer>
    </div>
  );
}
