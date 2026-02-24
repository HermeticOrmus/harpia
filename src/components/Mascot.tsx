import Image from 'next/image';

export function Mascot({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <Image
      src="/assets/harpia_mascot_1024.png"
      alt="HarpIA - Mascota de IA sin misterios"
      width={64}
      height={64}
      className={`${className} animate-mascot-idle`}
    />
  );
}
