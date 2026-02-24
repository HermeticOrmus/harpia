'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const IDLE_FRAMES = Array.from({ length: 16 }, (_, i) =>
  `/assets/animation/harpia_idle_${String(i + 1).padStart(2, '0')}.png`
);

const BLINK_FRAMES = Array.from({ length: 16 }, (_, i) =>
  `/assets/animation/harpia_blink_${String(i + 1).padStart(2, '0')}.png`
);

const FRAME_MS = 150;
const BLINK_INTERVAL_MS = 4000;

export function Mascot({ className = 'w-12 h-12', animated = true }: { className?: string; animated?: boolean }) {
  const [frame, setFrame] = useState(0);
  const [isBlinking, setIsBlinking] = useState(false);

  const frames = isBlinking ? BLINK_FRAMES : IDLE_FRAMES;

  // Cycle through frames
  useEffect(() => {
    if (!animated) return;
    const id = setInterval(() => {
      setFrame((f) => (f + 1) % 16);
    }, FRAME_MS);
    return () => clearInterval(id);
  }, [animated]);

  // Trigger blink every ~4s
  useEffect(() => {
    if (!animated) return;
    const id = setInterval(() => {
      setIsBlinking(true);
      setFrame(0);
      setTimeout(() => {
        setIsBlinking(false);
        setFrame(0);
      }, FRAME_MS * 16);
    }, BLINK_INTERVAL_MS);
    return () => clearInterval(id);
  }, [animated]);

  const src = animated ? frames[frame] : '/assets/harpia_mascot_1024.png';

  return (
    <Image
      src={src}
      alt="HarpIA - Mascota de IA sin misterios"
      width={64}
      height={64}
      className={className}
      unoptimized
    />
  );
}
