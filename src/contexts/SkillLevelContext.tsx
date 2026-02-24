'use client';

import { createContext, useContext, useState, useSyncExternalStore, useCallback, ReactNode } from 'react';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

const STORAGE_KEY = 'ai-tools-skill-level';

// Helper to safely read from localStorage (SSR-safe)
function getStoredLevel(): SkillLevel {
  if (typeof window === 'undefined') return 'beginner';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && ['beginner', 'intermediate', 'advanced'].includes(stored)) {
    return stored as SkillLevel;
  }
  return 'beginner';
}

// Subscribe to storage changes
function subscribeToStorage(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

// Server snapshot (SSR)
function getServerSnapshot(): SkillLevel {
  return 'beginner';
}

export interface ThemeColors {
  // Tailwind classes (use these directly in className)
  primary: string;
  primaryHover: string;
  text: string;
  textHover: string;
  border: string;
  bg: string;
  gradient: string;
  // Raw hex values for inline styles when needed
  hex: string;
  hexLight: string;
}

const themeColors: Record<SkillLevel, ThemeColors> = {
  beginner: {
    primary: 'bg-emerald-500',
    primaryHover: 'hover:bg-emerald-600',
    text: 'text-emerald-500',
    textHover: 'hover:text-emerald-400',
    border: 'border-emerald-500',
    bg: 'bg-emerald-500/20',
    gradient: 'from-emerald-500/20',
    hex: '#10b981',
    hexLight: '#34d399',
  },
  intermediate: {
    primary: 'bg-amber-500',
    primaryHover: 'hover:bg-amber-600',
    text: 'text-amber-500',
    textHover: 'hover:text-amber-400',
    border: 'border-amber-500',
    bg: 'bg-amber-500/20',
    gradient: 'from-amber-500/20',
    hex: '#f59e0b',
    hexLight: '#fbbf24',
  },
  advanced: {
    primary: 'bg-violet-500',
    primaryHover: 'hover:bg-violet-600',
    text: 'text-violet-500',
    textHover: 'hover:text-violet-400',
    border: 'border-violet-500',
    bg: 'bg-violet-500/20',
    gradient: 'from-violet-500/20',
    hex: '#8b5cf6',
    hexLight: '#a78bfa',
  },
};

interface SkillLevelContextType {
  level: SkillLevel;
  setLevel: (level: SkillLevel) => void;
  colors: ThemeColors;
}

const SkillLevelContext = createContext<SkillLevelContextType | undefined>(undefined);

export function SkillLevelProvider({ children }: { children: ReactNode }) {
  // Use useSyncExternalStore for SSR-safe localStorage sync
  const storedLevel = useSyncExternalStore(
    subscribeToStorage,
    getStoredLevel,
    getServerSnapshot
  );

  // Local state for immediate UI updates
  const [level, setLevelState] = useState<SkillLevel>(storedLevel);

  const setLevel = useCallback((newLevel: SkillLevel) => {
    setLevelState(newLevel);
    localStorage.setItem(STORAGE_KEY, newLevel);
    // Dispatch storage event for other tabs
    window.dispatchEvent(new Event('storage'));
  }, []);

  // Sync with stored level if changed externally
  const currentLevel = level;
  const colors = themeColors[currentLevel];

  return (
    <SkillLevelContext.Provider value={{ level: currentLevel, setLevel, colors }}>
      {children}
    </SkillLevelContext.Provider>
  );
}

export function useSkillLevel() {
  const context = useContext(SkillLevelContext);
  if (context === undefined) {
    throw new Error('useSkillLevel must be used within a SkillLevelProvider');
  }
  return context;
}
