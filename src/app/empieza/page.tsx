'use client';

import { useState } from 'react';
import Link from 'next/link';
import { tools, Tool, getContentForLevel } from '@/data/tools';
import { useSkillLevel } from '@/contexts/SkillLevelContext';

type Goal =
  | 'chat'
  | 'build'
  | 'images'
  | 'automate'
  | 'website';

interface Recommendation {
  primary: Tool;
  secondary?: Tool;
  tip: string;
}

const goalLabels: Record<Goal, { title: string; description: string; icon: string }> = {
  chat: {
    title: 'Hablar con una IA',
    description: 'Hacer preguntas, pensar ideas, resolver problemas',
    icon: '💬',
  },
  build: {
    title: 'Construir una app',
    description: 'Crear un sitio web, herramienta o aplicación',
    icon: '🛠️',
  },
  images: {
    title: 'Crear imágenes',
    description: 'Generar gráficos, arte o diseños',
    icon: '🎨',
  },
  automate: {
    title: 'Automatizar tareas',
    description: 'Conectar apps y ahorrar tiempo',
    icon: '⚡',
  },
  website: {
    title: 'Lanzar un sitio web',
    description: 'Poner algo en vivo en internet',
    icon: '🚀',
  },
};

function getRecommendation(goal: Goal): Recommendation {
  const claude = tools.find((t) => t.id === 'claude')!;
  const claudeCode = tools.find((t) => t.id === 'claude-code')!;
  const midjourney = tools.find((t) => t.id === 'midjourney')!;
  const ideogram = tools.find((t) => t.id === 'ideogram')!;
  const n8n = tools.find((t) => t.id === 'n8n')!;
  const vercel = tools.find((t) => t.id === 'vercel')!;
  const supabase = tools.find((t) => t.id === 'supabase')!;

  switch (goal) {
    case 'chat':
      return {
        primary: claude,
        tip: 'Empieza describiendo lo que quieres resolver. Claude es excelente para desglosar problemas complejos paso a paso.',
      };
    case 'build':
      return {
        primary: claudeCode,
        secondary: supabase,
        tip: 'Describe lo que quieres construir en lenguaje normal. Claude Code lo puede crear por ti. Usa Supabase para tu base de datos.',
      };
    case 'images':
      return {
        primary: midjourney,
        secondary: ideogram,
        tip: 'Midjourney para imágenes artísticas y hermosas. Ideogram si necesitas texto legible en tu imagen (logos, afiches).',
      };
    case 'automate':
      return {
        primary: n8n,
        tip: 'Empieza con una automatización simple: "Cuando pasa X, haz Y." n8n es poderoso y gratis si lo instalas tú mismo.',
      };
    case 'website':
      return {
        primary: vercel,
        secondary: claudeCode,
        tip: 'Usa Claude Code para construirlo, Vercel para publicarlo. Sube el código a GitHub, conecta con Vercel, listo.',
      };
  }
}

export default function EmpiezaPage() {
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
  const { level } = useSkillLevel();

  const recommendation = selectedGoal ? getRecommendation(selectedGoal) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/"
          className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors"
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
          Volver al inicio
        </Link>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Qué quieres hacer?
          </h1>
          <p className="text-gray-600 text-lg">
            Escoge uno y te digo exactamente por dónde empezar.
          </p>
        </div>

        {/* Goal Selection */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {(Object.keys(goalLabels) as Goal[]).map((goal) => (
            <button
              key={goal}
              onClick={() => setSelectedGoal(goal)}
              className={`p-6 rounded-2xl border-2 text-left transition-all ${
                selectedGoal === goal
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <span className="text-3xl mb-3 block">{goalLabels[goal].icon}</span>
              <h3 className="font-semibold text-gray-900 mb-1">
                {goalLabels[goal].title}
              </h3>
              <p className="text-sm text-gray-500">{goalLabels[goal].description}</p>
            </button>
          ))}
        </div>

        {/* Recommendation */}
        {recommendation && (
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg animate-in fade-in duration-300">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Esto es lo que te recomiendo
            </h2>

            {/* Primary Tool */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 mb-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-medium text-amber-600 uppercase tracking-wide">
                    Empieza con
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1">
                    {recommendation.primary.name}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {getContentForLevel(recommendation.primary.tagline, level)}
                  </p>
                </div>
                <Link
                  href={recommendation.primary.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-amber-500 text-white rounded-full text-sm font-medium hover:bg-amber-600 transition-colors"
                >
                  Abrir &rarr;
                </Link>
              </div>
            </div>

            {/* Secondary Tool */}
            {recommendation.secondary && (
              <div className="bg-gray-50 rounded-2xl p-6 mb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      También útil
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">
                      {recommendation.secondary.name}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {getContentForLevel(recommendation.secondary.tagline, level)}
                    </p>
                  </div>
                  <Link
                    href={recommendation.secondary.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    Abrir &rarr;
                  </Link>
                </div>
              </div>
            )}

            {/* Tip */}
            <div className="flex items-start gap-3 mt-6 p-4 bg-blue-50 rounded-xl">
              <span className="text-2xl">💡</span>
              <div>
                <h4 className="font-medium text-gray-900">Tip</h4>
                <p className="text-gray-700 text-sm mt-1">{recommendation.tip}</p>
              </div>
            </div>
          </div>
        )}

        {/* No selection prompt */}
        {!selectedGoal && (
          <div className="text-center py-12 text-gray-400">
            <span className="text-4xl mb-4 block">👆</span>
            <p>Selecciona un objetivo para comenzar</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-gray-500 text-sm">
          <p>
            ¿Todavía no estás seguro?{' '}
            <Link href="/#categorias" className="text-amber-600 hover:underline">
              Explora todas las categorías
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
