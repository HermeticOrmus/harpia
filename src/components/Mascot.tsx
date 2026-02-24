import Image from 'next/image';

export function Mascot({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <Image
      src="/assets/turpi_pixel_16bit_transparent.png"
      alt="HarpIA - Mascota de IA sin misterios"
      width={48}
      height={48}
      className={className}
    />
  );
}
