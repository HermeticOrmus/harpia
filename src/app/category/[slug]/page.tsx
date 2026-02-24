import { Header } from '@/components/Header';
import { CategoryPageContent } from '@/components/CategoryPageContent';
import {
  categories,
  getToolsByCategory,
  getCategoryInfo,
  Category,
} from '@/data/tools';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.id }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const categoryRecommendations: Record<Category, string> = {
  llm: 'Empieza con Claude para pensar y construir. Usa Grok para verificar e info en tiempo real. ChatGPT para preguntas rápidas y generar imágenes.',
  coding: 'Si te sientes cómodo con el terminal, Claude Code no tiene rival. Si prefieres un editor visual, empieza con Cursor.',
  image: 'Midjourney para la mejor calidad. DALL-E (vía ChatGPT) por conveniencia. Ideogram cuando necesites texto en tus imágenes.',
  hosting: 'Vercel para la mayoría de proyectos web - es mágico. Railway cuando necesites más flexibilidad (bases de datos, procesos).',
  database: 'Supabase. Tier gratis generoso, auth incluido, fácil de usar. La elección obvia para la mayoría de proyectos.',
  automation: 'n8n si puedes self-hostear y quieres poder. Zapier si prefieres simplicidad y no te importa pagar.',
  design: 'Canva para gráficos rápidos y buenos. Figma si vas a hacer diseño UI en serio.',
  languages: 'Python para IA y automatización. TypeScript para web. Go o Rust si necesitas rendimiento.',
  frameworks: 'Next.js es el estándar para web moderna. FastAPI para APIs en Python. Tailwind para estilos sin sufrir.',
  devtools: 'VS Code + Git + GitHub son obligatorios. Docker cuando necesites consistencia entre máquinas.',
  opensource: 'Ollama para correr modelos localmente. Hugging Face para encontrar lo que necesites. Stable Diffusion para imágenes sin límites.',
};

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryInfo(slug as Category);

  if (!category) {
    notFound();
  }

  const categoryTools = getToolsByCategory(slug as Category);

  return (
    <div className="min-h-screen bg-stone-950">
      <Header />
      <CategoryPageContent
        category={category}
        tools={categoryTools}
        recommendation={categoryRecommendations[category.id as Category]}
      />
    </div>
  );
}
