import { PricingTier } from '@/data/tools';

export const pricingColors: Record<PricingTier, string> = {
  free: 'bg-emerald-900/50 text-emerald-400',
  freemium: 'bg-sky-900/50 text-sky-400',
  paid: 'bg-amber-900/50 text-amber-400',
  enterprise: 'bg-violet-900/50 text-violet-400',
};

export const pricingColorsWithBorder: Record<PricingTier, string> = {
  free: 'bg-emerald-900/50 text-emerald-400 border-emerald-800',
  freemium: 'bg-sky-900/50 text-sky-400 border-sky-800',
  paid: 'bg-amber-900/50 text-amber-400 border-amber-800',
  enterprise: 'bg-violet-900/50 text-violet-400 border-violet-800',
};

export const pricingLabels: Record<PricingTier, string> = {
  free: 'Gratis',
  freemium: 'Tier gratis',
  paid: 'Pago',
  enterprise: 'Enterprise',
};
