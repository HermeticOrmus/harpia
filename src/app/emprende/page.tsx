'use client';

import { useState } from 'react';
import Link from 'next/link';
import { tools, Tool, getContentForLevel } from '@/data/tools';
import { useSkillLevel } from '@/contexts/SkillLevelContext';
import { Header } from '@/components/Header';
import {
  Megaphone,
  Globe,
  Zap,
  Users,
  Palette,
  BarChart3,
  LucideIcon,
} from 'lucide-react';

type Path =
  | 'contenido'
  | 'sitio-web'
  | 'automatizar'
  | 'clientes'
  | 'marca'
  | 'datos';

interface Step {
  title: string;
  description: string;
}

interface PathRecommendation {
  primary: Tool;
  secondary: Tool;
  tip: string;
  steps: Step[];
}

const pathLabels: Record<Path, { title: string; description: string; icon: LucideIcon }> = {
  contenido: {
    title: 'Crear contenido para redes',
    description: 'Posts, imágenes y textos para Instagram, TikTok, LinkedIn',
    icon: Megaphone,
  },
  'sitio-web': {
    title: 'Lanzar un sitio web',
    description: 'Tu página profesional en internet, funcionando hoy',
    icon: Globe,
  },
  automatizar: {
    title: 'Automatizar tareas repetitivas',
    description: 'Deja que las máquinas hagan el trabajo aburrido',
    icon: Zap,
  },
  clientes: {
    title: 'Gestionar clientes',
    description: 'Organiza contactos, seguimiento y comunicación',
    icon: Users,
  },
  marca: {
    title: 'Crear una marca visual',
    description: 'Logo, colores y estilo visual para tu negocio',
    icon: Palette,
  },
  datos: {
    title: 'Analizar datos de mi negocio',
    description: 'Entiende tus números, ventas y tendencias',
    icon: BarChart3,
  },
};

function getRecommendation(path: Path): PathRecommendation {
  const claude = tools.find((t) => t.id === 'claude')!;
  const chatgpt = tools.find((t) => t.id === 'chatgpt')!;
  const claudeCode = tools.find((t) => t.id === 'claude-code')!;
  const midjourney = tools.find((t) => t.id === 'midjourney')!;
  const n8n = tools.find((t) => t.id === 'n8n')!;
  const make = tools.find((t) => t.id === 'make')!;
  const vercel = tools.find((t) => t.id === 'vercel')!;
  const supabase = tools.find((t) => t.id === 'supabase')!;
  const canva = tools.find((t) => t.id === 'canva')!;

  switch (path) {
    case 'contenido':
      return {
        primary: chatgpt,
        secondary: midjourney,
        tip: 'Crea un "banco de contenido" semanal: genera 7 textos de una vez con ChatGPT, luego las imágenes con Midjourney. Programar en lote ahorra horas.',
        steps: [
          {
            title: 'Paso 1: Define tu voz',
            description: 'Dile a ChatGPT: "Eres mi community manager. Mi negocio es [X]. Mi tono es [profesional/casual/inspirador]. Dame 7 ideas de posts para esta semana."',
          },
          {
            title: 'Paso 2: Genera las imágenes',
            description: 'Usa Midjourney para crear imágenes que acompañen cada post. Describe el estilo visual de tu marca para mantener consistencia.',
          },
          {
            title: 'Paso 3: Programa y publica',
            description: 'Sube todo a tu programador de redes (Meta Business Suite es gratis). Revisa que el tono sea auténtico antes de publicar.',
          },
        ],
      };
    case 'sitio-web':
      return {
        primary: claudeCode,
        secondary: vercel,
        tip: 'No necesitas saber programar. Describe tu negocio a Claude Code y te genera el sitio completo. Vercel lo pone en internet gratis.',
        steps: [
          {
            title: 'Paso 1: Describe tu sitio',
            description: 'Abre Claude Code y dile: "Crea un sitio web para [mi negocio]. Necesito página de inicio, servicios, contacto y WhatsApp." Él escribe todo el código.',
          },
          {
            title: 'Paso 2: Personaliza',
            description: 'Pide ajustes: "Cambia el color principal a azul", "Agrega mis horarios", "Pon mi logo aquí". Claude Code hace los cambios al instante.',
          },
          {
            title: 'Paso 3: Publica gratis',
            description: 'Sube el código a GitHub y conecta con Vercel. Tu sitio estará en vivo en minutos con un dominio gratuito. Después puedes agregar tu dominio propio.',
          },
        ],
      };
    case 'automatizar':
      return {
        primary: n8n,
        secondary: make,
        tip: 'Empieza con UNA automatización simple que te ahorre tiempo cada día. Ejemplo: "Cuando llegue un pedido por email, crear una fila en mi hoja de cálculo."',
        steps: [
          {
            title: 'Paso 1: Identifica lo repetitivo',
            description: 'Haz una lista de tareas que haces igual cada día. Copiar datos entre apps, enviar el mismo email, actualizar hojas de cálculo. Elige la más frecuente.',
          },
          {
            title: 'Paso 2: Arma el flujo',
            description: 'En n8n (gratis si lo instalas tú) o Make (más visual), conecta las apps: "Cuando pase X en App A, haz Y en App B". Arrastra cajitas y conéctalas.',
          },
          {
            title: 'Paso 3: Prueba y activa',
            description: 'Ejecuta el flujo manualmente primero para verificar. Cuando funcione, actívalo en automático. Revisa una vez por semana que todo siga corriendo bien.',
          },
        ],
      };
    case 'clientes':
      return {
        primary: claude,
        secondary: supabase,
        tip: 'Antes de construir un sistema complejo, usa Claude para organizar tu proceso actual. Muchos negocios solo necesitan una hoja de cálculo bien estructurada.',
        steps: [
          {
            title: 'Paso 1: Organiza tu proceso',
            description: 'Dile a Claude: "Tengo un negocio de [X] con [N] clientes. Ayúdame a crear un sistema para dar seguimiento a cada uno." Te dará una estructura clara.',
          },
          {
            title: 'Paso 2: Elige tu herramienta',
            description: 'Para pocos clientes, una hoja de cálculo basta. Si necesitas algo más robusto, Supabase te da una base de datos real con formularios, gratis para empezar.',
          },
          {
            title: 'Paso 3: Establece rutinas',
            description: 'Define cuándo revisas tus clientes: seguimiento semanal, recordatorios de pago, check-ins mensuales. La herramienta solo funciona si la usas consistentemente.',
          },
        ],
      };
    case 'marca':
      return {
        primary: midjourney,
        secondary: canva,
        tip: 'Define 3 palabras que describan tu marca antes de generar nada. Esas palabras guían todo: colores, tipografía, estilo de imágenes.',
        steps: [
          {
            title: 'Paso 1: Define tu identidad',
            description: 'Escribe 3 palabras que describan tu marca (ej: "moderno, confiable, cálido"). Usa Midjourney para explorar estilos visuales: "logo minimalista para [negocio], estilo [tus 3 palabras]".',
          },
          {
            title: 'Paso 2: Crea tu kit visual',
            description: 'Con Canva, arma tu Brand Kit: sube tu logo, define tus colores (2-3 máximo), elige tipografías. Canva los guarda para que todo sea consistente.',
          },
          {
            title: 'Paso 3: Aplica en todo',
            description: 'Usa las plantillas de Canva con tu Brand Kit para tarjetas, posts de redes, facturas y presentaciones. Mantén la consistencia en cada punto de contacto.',
          },
        ],
      };
    case 'datos':
      return {
        primary: claude,
        secondary: chatgpt,
        tip: 'No necesitas saber estadística. Sube tu archivo de ventas o datos a Claude y pregúntale: "¿Qué patrones ves? ¿Qué debería preocuparme?"',
        steps: [
          {
            title: 'Paso 1: Reúne tus datos',
            description: 'Exporta tus ventas, gastos o métricas a un CSV o Excel. Si no tienes datos organizados, empieza hoy con una hoja simple: fecha, producto, monto, cliente.',
          },
          {
            title: 'Paso 2: Pregunta a la IA',
            description: 'Sube el archivo a Claude y pregunta: "Analiza mis ventas del último trimestre. ¿Cuáles son mis productos estrella? ¿Hay tendencias que deba conocer?"',
          },
          {
            title: 'Paso 3: Toma decisiones',
            description: 'Pide recomendaciones concretas: "Basado en estos datos, ¿dónde debería enfocar mi inversión? ¿Qué producto debería promocionar más?" Usa ChatGPT para una segunda opinión.',
          },
        ],
      };
  }
}

export default function EmprendePage() {
  const [selectedPath, setSelectedPath] = useState<Path | null>(null);
  const { level, colors } = useSkillLevel();

  const recommendation = selectedPath ? getRecommendation(selectedPath) : null;

  return (
    <div className="min-h-screen bg-stone-950">
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-100 mb-3">
            IA para tu negocio
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Selecciona lo que necesita tu negocio y te damos las herramientas + un plan de 3 pasos para empezar hoy.
          </p>
        </div>

        {/* Path Selection */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {(Object.keys(pathLabels) as Path[]).map((path) => {
            const { title, description, icon: Icon } = pathLabels[path];
            const isSelected = selectedPath === path;
            return (
              <button
                key={path}
                onClick={() => setSelectedPath(path)}
                className={`p-5 rounded-2xl border-2 text-left transition-all ${
                  isSelected
                    ? 'bg-stone-900'
                    : 'border-stone-800 hover:border-stone-700 bg-stone-900/50'
                }`}
                style={
                  isSelected
                    ? { borderColor: colors.hex, backgroundColor: `${colors.hex}10` }
                    : undefined
                }
              >
                <Icon
                  className="w-7 h-7 mb-3"
                  style={{ color: isSelected ? colors.hex : undefined }}
                  strokeWidth={1.5}
                />
                <h3 className="font-semibold text-stone-100 mb-1">{title}</h3>
                <p className="text-sm text-stone-500">{description}</p>
              </button>
            );
          })}
        </div>

        {/* Recommendation */}
        {recommendation && (
          <div className="bg-stone-900 rounded-3xl border border-stone-800 p-6 sm:p-8 animate-in fade-in duration-300">
            <h2 className="text-xl font-bold text-stone-100 mb-6">
              Tu plan de acción
            </h2>

            {/* Primary Tool */}
            <div
              className="rounded-2xl p-5 sm:p-6 mb-4"
              style={{ backgroundColor: `${colors.hex}15` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <span
                    className="text-xs font-medium uppercase tracking-wide"
                    style={{ color: colors.hex }}
                  >
                    Herramienta principal
                  </span>
                  <h3 className="text-2xl font-bold text-stone-100 mt-1">
                    <Link
                      href={`/tool/${recommendation.primary.slug}`}
                      className="hover:underline"
                      style={{ textDecorationColor: colors.hex }}
                    >
                      {recommendation.primary.name}
                    </Link>
                  </h3>
                  <p className="text-stone-400 mt-2">
                    {getContentForLevel(recommendation.primary.tagline, level)}
                  </p>
                </div>
                <Link
                  href={`/tool/${recommendation.primary.slug}`}
                  className="px-4 py-2 rounded-full text-sm font-medium text-white shrink-0"
                  style={{ backgroundColor: colors.hex }}
                >
                  Ver herramienta
                </Link>
              </div>
            </div>

            {/* Secondary Tool */}
            <div className="bg-stone-800/50 rounded-2xl p-5 sm:p-6 mb-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <span className="text-xs font-medium text-stone-500 uppercase tracking-wide">
                    Complementa con
                  </span>
                  <h3 className="text-xl font-bold text-stone-100 mt-1">
                    <Link
                      href={`/tool/${recommendation.secondary.slug}`}
                      className="hover:underline"
                      style={{ textDecorationColor: colors.hex }}
                    >
                      {recommendation.secondary.name}
                    </Link>
                  </h3>
                  <p className="text-stone-400 mt-2">
                    {getContentForLevel(recommendation.secondary.tagline, level)}
                  </p>
                </div>
                <Link
                  href={`/tool/${recommendation.secondary.slug}`}
                  className="px-4 py-2 border border-stone-700 text-stone-300 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors shrink-0"
                >
                  Ver herramienta
                </Link>
              </div>
            </div>

            {/* 3-Step Workflow */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-stone-100 mb-4">
                Cómo empezar
              </h3>
              <div className="space-y-4">
                {recommendation.steps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white shrink-0 mt-0.5"
                      style={{ backgroundColor: colors.hex }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-200">{step.title}</h4>
                      <p className="text-sm text-stone-400 mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tip */}
            <div
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{ backgroundColor: `${colors.hex}10` }}
            >
              <span className="text-2xl shrink-0">💡</span>
              <div>
                <h4 className="font-medium text-stone-200">Tip</h4>
                <p className="text-stone-400 text-sm mt-1">{recommendation.tip}</p>
              </div>
            </div>
          </div>
        )}

        {/* No selection prompt */}
        {!selectedPath && (
          <div className="text-center py-12 text-stone-600">
            <span className="text-4xl mb-4 block">👆</span>
            <p>Selecciona una necesidad de tu negocio</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-stone-500 text-sm space-y-2">
          <p>
            ¿Apenas empezando con IA?{' '}
            <Link href="/empieza" className="hover:underline" style={{ color: colors.hex }}>
              Empieza aquí
            </Link>
          </p>
          <p>
            <Link href="/#categorias" className="hover:underline" style={{ color: colors.hex }}>
              Explora todas las categorías
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
