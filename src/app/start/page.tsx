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
    title: 'Talk to an AI',
    description: 'Ask questions, brainstorm, get help thinking',
    icon: '💬',
  },
  build: {
    title: 'Build an app',
    description: 'Create a website, tool, or application',
    icon: '🛠️',
  },
  images: {
    title: 'Create images',
    description: 'Generate graphics, art, or designs',
    icon: '🎨',
  },
  automate: {
    title: 'Automate tasks',
    description: 'Connect apps and save time',
    icon: '⚡',
  },
  website: {
    title: 'Launch a website',
    description: 'Get something live on the internet',
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
        tip: 'Start by describing what you want to figure out. Claude is great at breaking down complex problems step by step.',
      };
    case 'build':
      return {
        primary: claudeCode,
        secondary: supabase,
        tip: 'Describe what you want to build in plain language. Claude Code can create it for you. Use Supabase for your database.',
      };
    case 'images':
      return {
        primary: midjourney,
        secondary: ideogram,
        tip: 'Midjourney for beautiful, artistic images. Ideogram if you need readable text in your image (logos, posters).',
      };
    case 'automate':
      return {
        primary: n8n,
        tip: 'Start with one simple automation: "When X happens, do Y." n8n is powerful and free to self-host.',
      };
    case 'website':
      return {
        primary: vercel,
        secondary: claudeCode,
        tip: 'Use Claude Code to build it, Vercel to deploy it. Push code to GitHub, connect to Vercel, done.',
      };
  }
}

export default function StartPage() {
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
  const { level } = useSkillLevel();

  const recommendation = selectedGoal ? getRecommendation(selectedGoal) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
          Back to home
        </Link>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What do you want to do?
          </h1>
          <p className="text-gray-600 text-lg">
            Pick one and I&apos;ll tell you exactly where to start.
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
                  ? 'border-indigo-600 bg-indigo-50'
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
              Here&apos;s what I recommend
            </h2>

            {/* Primary Tool */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-medium text-indigo-600 uppercase tracking-wide">
                    Start with
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
                  className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors"
                >
                  Open &rarr;
                </Link>
              </div>
            </div>

            {/* Secondary Tool */}
            {recommendation.secondary && (
              <div className="bg-gray-50 rounded-2xl p-6 mb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Also useful
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
                    Open &rarr;
                  </Link>
                </div>
              </div>
            )}

            {/* Tip */}
            <div className="flex items-start gap-3 mt-6 p-4 bg-amber-50 rounded-xl">
              <span className="text-2xl">💡</span>
              <div>
                <h4 className="font-medium text-gray-900">Pro tip</h4>
                <p className="text-gray-700 text-sm mt-1">{recommendation.tip}</p>
              </div>
            </div>
          </div>
        )}

        {/* No selection prompt */}
        {!selectedGoal && (
          <div className="text-center py-12 text-gray-400">
            <span className="text-4xl mb-4 block">👆</span>
            <p>Select a goal to get started</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-gray-500 text-sm">
          <p>
            Still not sure?{' '}
            <Link href="/#categories" className="text-indigo-600 hover:underline">
              Browse all categories
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
