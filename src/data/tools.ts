export type Category =
  | 'llm'
  | 'coding'
  | 'image'
  | 'hosting'
  | 'database'
  | 'automation'
  | 'design'
  | 'languages'
  | 'frameworks'
  | 'devtools'
  | 'opensource';

export type PricingTier = 'free' | 'freemium' | 'paid' | 'enterprise';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export interface SkillContent {
  beginner: string;
  intermediate: string;
  advanced: string;
}

export interface Tool {
  id: string;
  name: string;
  slug: string;
  category: Category;
  tagline: string | SkillContent;
  description: string | SkillContent;
  bestFor: string[];
  pricing: PricingTier;
  pricingDetails?: string;
  url: string;
  logoUrl?: string;
  turpiTake?: string | SkillContent;
  limitations?: SkillContent;
  lastUpdated: string;
}

// Helper function to get content for a specific skill level
export function getContentForLevel(
  content: string | SkillContent | undefined,
  level: SkillLevel
): string | undefined {
  if (content === undefined) return undefined;
  if (typeof content === 'string') return content;
  return content[level];
}

export interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
  icon: string; // SVG path or icon name
  color: string;
}

export const categories: CategoryInfo[] = [
  {
    id: 'llm',
    name: 'Asistentes IA',
    description: 'Inteligencias artificiales que entienden y generan texto. Tu compañero para pensar.',
    icon: 'brain',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'coding',
    name: 'Asistentes de Código',
    description: 'Herramientas que te ayudan a programar, aunque no sepas programar.',
    icon: 'terminal',
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'image',
    name: 'Generación de Imágenes',
    description: 'Crea imágenes describiendo lo que quieres. Diseña sin saber diseñar.',
    icon: 'image',
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 'hosting',
    name: 'Hosting y Deploy',
    description: 'Pon tus creaciones en internet. De idea a sitio web en minutos.',
    icon: 'cloud',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'database',
    name: 'Bases de Datos',
    description: 'Guarda y maneja información. La base de cualquier aplicación.',
    icon: 'database',
    color: 'from-orange-500 to-amber-600',
  },
  {
    id: 'automation',
    name: 'Automatización',
    description: 'Conecta herramientas y automatiza tareas. Trabaja más inteligente.',
    icon: 'zap',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    id: 'design',
    name: 'Diseño',
    description: 'Crea interfaces y gráficos profesionales sin ser diseñador.',
    icon: 'palette',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 'languages',
    name: 'Lenguajes',
    description: 'Los lenguajes de programación que más se usan con IA y en la industria.',
    icon: 'code',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'frameworks',
    name: 'Frameworks',
    description: 'Las bases sobre las que se construyen aplicaciones modernas.',
    icon: 'layers',
    color: 'from-indigo-500 to-violet-600',
  },
  {
    id: 'devtools',
    name: 'Herramientas Dev',
    description: 'Lo esencial que todo desarrollador necesita en su día a día.',
    icon: 'wrench',
    color: 'from-gray-500 to-slate-600',
  },
  {
    id: 'opensource',
    name: 'Open Source',
    description: 'Modelos y herramientas de código abierto. Control total, sin dependencias.',
    icon: 'heart',
    color: 'from-red-500 to-pink-600',
  },
];

export const tools: Tool[] = [
  // LLMs
  {
    id: 'claude',
    name: 'Claude',
    slug: 'claude',
    category: 'llm',
    tagline: {
      beginner: 'Un asistente inteligente que te ayuda a pensar',
      intermediate: 'La IA que razona paso a paso',
      advanced: 'Claude 4.5 con 200k-1M tokens y razonamiento estructurado',
    },
    description: {
      beginner: 'Imagina tener un amigo muy inteligente disponible 24/7. Claude puede ayudarte a escribir, resolver problemas, y explicar cosas difíciles en palabras simples. Es como tener un tutor paciente que nunca se cansa.',
      intermediate: 'Conocido por su razonamiento cuidadoso, honestidad sobre sus límites, y excelente escritura. Claude 4.5 (Opus, Sonnet, Haiku) son los modelos actuales. Ideal para problemas complejos.',
      advanced: 'Claude 4.5 series: Opus (más inteligente, 80.9% SWE-bench), Sonnet (mejor coding), Haiku (económico). 200k tokens estándar, 1M beta para Sonnet. API con streaming. Baja tendencia a alucinaciones vs GPT.',
    },
    bestFor: ['Razonamiento complejo', 'Escritura', 'Explicar código', 'Documentos largos'],
    pricing: 'freemium',
    pricingDetails: 'Gratis (~40 msgs/día). Pro $20/mes. Max $100-200/mes',
    url: 'https://claude.ai',
    turpiTake: {
      beginner: 'Conocido por explicaciones claras y admitir cuando no sabe algo. Buena opción para aprender conceptos nuevos.',
      intermediate: 'Claude 4.5 Sonnet destaca en código y razonamiento. Pro ($20) suficiente para la mayoría de usos.',
      advanced: 'Fuerte en razonamiento y contexto largo (200k tokens). Opus 4.5 para tareas complejas, Sonnet para coding diario. System prompts bien diseñados maximizan resultados.',
    },
    limitations: {
      beginner: 'Claude no tiene acceso a internet y no sabe qué pasó después de enero 2025. La versión gratis limita a ~40 mensajes por día. Siempre verifica datos importantes.',
      intermediate: 'Conocimiento hasta enero 2025. Sin acceso web. Free tier: ~40 msgs/día en ventanas de 5 horas. Puede alucinar en datos específicos. No ejecuta código realmente.',
      advanced: 'Corte enero 2025. Sin browser/code interpreter nativos. Free tier ~40 msgs rolling 5hrs. 200k context estándar (1M beta Sonnet). Alucinaciones en datos específicos. Max tiers necesarios para uso heavy.',
    },
    lastUpdated: '2025-12-09',
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    slug: 'chatgpt',
    category: 'llm',
    tagline: {
      beginner: 'El asistente de IA más famoso del mundo',
      intermediate: 'El que empezó todo esto',
      advanced: 'GPT-5, o1 reasoning, DALL-E 3, y Sora video integrados',
    },
    description: {
      beginner: 'ChatGPT es como hablar con alguien que sabe de todo. Puedes preguntarle cualquier cosa: desde recetas de cocina hasta ayuda con tareas. También puede crear imágenes y videos cortos.',
      intermediate: 'El asistente IA más usado del mundo. Ahora con GPT-5, modelos de razonamiento o1, DALL-E para imágenes, y Sora para video. Tiene memoria entre conversaciones.',
      advanced: 'Ecosistema completo con GPT-5, o1/o1-mini reasoning, DALL-E 3, Sora video, browsing, code interpreter, y custom GPTs. Deep Research y Agent mode. Pro ($200) da acceso ilimitado a o1.',
    },
    bestFor: ['Preguntas generales', 'Generar imágenes', 'Razonamiento (o1)', 'Custom GPTs'],
    pricing: 'freemium',
    pricingDetails: 'Gratis limitado. Plus $20/mes. Pro $200/mes',
    url: 'https://chat.openai.com',
    turpiTake: {
      beginner: 'El más fácil para empezar porque todo el mundo lo conoce. Pregúntale lo que sea y te responde.',
      intermediate: 'El más usado mundialmente. GPT-5 y o1 destacan en razonamiento. Pro ($200) solo si necesitas uso intensivo.',
      advanced: 'Mejor ecosistema de herramientas integradas. o1 para razonamiento complejo compite con Claude. Pro tier caro pero da acceso ilimitado. Custom GPTs útiles para workflows.',
    },
    limitations: {
      beginner: 'A veces dice cosas que suenan muy seguras pero están equivocadas. El tier gratis limita a 10-60 mensajes cada 5 horas según demanda.',
      intermediate: 'Tendencia a ser excesivamente servicial. Free tier: 10-60 msgs GPT-4o/5hrs, 2-3 imágenes DALL-E/día, 3 archivos/24hrs. Context 16k (vs 128k en Plus).',
      advanced: 'Sycophancy persistente. Free tier muy dinámico según carga. Context 16k gratis vs 128k Plus. Rate limits en API. Pro ($200) necesario para o1 ilimitado. Alucinaciones en datos específicos.',
    },
    lastUpdated: '2025-12-09',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    slug: 'gemini',
    category: 'llm',
    tagline: {
      beginner: 'La IA de Google que busca en internet',
      intermediate: 'Google con esteroides',
      advanced: 'LLM multimodal con 1M tokens (API/Pro) y grounding en tiempo real',
    },
    description: {
      beginner: 'Gemini es la IA de Google. Lo especial es que puede buscar información actual en internet mientras te responde, así que siempre tiene datos frescos. También puede leer documentos muy largos de una vez.',
      intermediate: 'Integrado con Google Search para información en tiempo real. Gemini 3.0 Pro disponible. Ventana de 1M tokens en planes pagos y API. Multimodal nativo.',
      advanced: 'Gemini 3.0 Pro con grounding en Google Search. Context: 32k web gratis, 1M en API/Pro. API con streaming, function calling, embeddings. Deep Think para razonamiento avanzado (Ultra).',
    },
    bestFor: ['Información actual', 'Documentos grandes', 'Integración Google', 'Investigación'],
    pricing: 'freemium',
    pricingDetails: 'Gratis (32k context). AI Pro $20/mes. Ultra $250/mes',
    url: 'https://gemini.google.com',
    turpiTake: {
      beginner: 'Úsalo cuando necesites información de hoy. Los otros no saben qué pasó ayer, Gemini sí.',
      intermediate: 'Excelente para documentos largos con Pro ($20). Free tier limitado a 32k tokens. Gemini 3.0 mejoró significativamente.',
      advanced: 'Context de 1M tokens en Pro/API. Deep Think (Ultra) para razonamiento avanzado. Ideal para análisis extensos con información actualizada.',
    },
    limitations: {
      beginner: 'A veces se confunde cuando le preguntas cosas muy específicas. La versión gratis tiene contexto limitado (32k vs 1M en Pro).',
      intermediate: 'Free tier web: solo 32k tokens (1M en Pro/API). Razonamiento menos profundo que Claude. Puede confiar demasiado en info online.',
      advanced: 'Web gratis: 32k tokens (vs 1M Pro). Grounding puede introducir info incorrecta. API gratis: 5 req/min, 100 req/día. Data collection extensiva. Deep Think solo en Ultra ($250/mes).',
    },
    lastUpdated: '2025-12-09',
  },
  {
    id: 'grok',
    name: 'Grok',
    slug: 'grok',
    category: 'llm',
    tagline: {
      beginner: 'La IA que sabe qué está pasando ahora',
      intermediate: 'IA con acceso a X en tiempo real',
      advanced: 'Grok 4.1 de xAI con 2M context, acceso a X, y API independiente',
    },
    description: {
      beginner: 'Grok es la IA de Elon Musk. Lo especial es que lee todo lo que pasa en X (Twitter) en tiempo real. Si quieres saber qué está pasando ahora mismo en el mundo, este es el indicado. Ahora tiene versión gratuita limitada.',
      intermediate: 'Hecho por xAI, integrado con X. Información en tiempo real de redes sociales. Ahora disponible en grok.com y via API independiente. Tiene modos Fun y Unhinged.',
      advanced: 'Grok 4.1 con 2M tokens de contexto. Acceso al firehose de X. API independiente disponible (x.ai/api). Modo Fun con menos restricciones. SuperGrok Heavy ($300/mes) para máximo acceso.',
    },
    bestFor: ['Noticias en vivo', 'Sentimiento social', 'Eventos actuales', 'Sin censura'],
    pricing: 'freemium',
    pricingDetails: 'Gratis (muy limitado). X Premium+ $50/mes. API disponible',
    url: 'https://grok.com',
    turpiTake: {
      beginner: 'Ahora puedes probarlo gratis (aunque muy limitado). Cuando quieras saber qué está pasando ahora mismo en el mundo.',
      intermediate: 'Ojo: X Premium+ subió a $50/mes (era $16). Pero ahora hay API independiente y tier gratis limitado.',
      advanced: 'Grok 4.1 ofrece 2M context. API independiente disponible. Premium+ caro ($50). SuperGrok Heavy ($300) para power users.',
    },
    limitations: {
      beginner: 'El tier gratis es muy limitado (2 prompts cada 2 horas). X Premium+ ahora cuesta $50/mes (subió mucho). No disponible en EU/UK via web.',
      intermediate: 'Free tier: solo 2 prompts cada 2 horas. X Premium+ aumentó de $16 a $50/mes en 2025. No disponible en Europa. Info de X tiene mucho ruido.',
      advanced: 'Free tier casi inútil. Premium+ triplicó precio ($16→$50). No disponible EU/UK via web. Fuente X tiene sesgo y desinformación. Menos robusto que Claude/GPT para tareas técnicas. SuperGrok Heavy $300/mes es excesivo.',
    },
    lastUpdated: '2025-12-09',
  },

  // Coding Assistants
  {
    id: 'claude-code',
    name: 'Claude Code',
    slug: 'claude-code',
    category: 'coding',
    tagline: {
      beginner: 'Un robot que programa por ti',
      intermediate: 'Agente de código que vive en tu terminal',
      advanced: 'Agente autónomo con ejecución de código, filesystem access, y context de 200k tokens',
    },
    description: {
      beginner: 'Claude Code es como tener un programador experto que trabaja en tu computadora. Le dices lo que quieres construir y él escribe el código, crea archivos, y hasta prueba que funcione. Tú solo describes tu idea.',
      intermediate: 'Un agente autónomo que lee, escribe y ejecuta código directamente en tu entorno de desarrollo. Trabaja en tu terminal, ve tu proyecto completo, y puede completar tareas complejas sin supervisión.',
      advanced: 'Agente agentic basado en Claude con acceso completo al filesystem, terminal, y herramientas de desarrollo. Context window de 200k tokens permite entender proyectos completos. Ideal para refactoring masivo, nuevas features, y debugging.',
    },
    bestFor: ['Construir apps', 'Terminal', 'Autonomía total', 'Proyectos grandes'],
    pricing: 'paid',
    pricingDetails: 'Por uso vía API de Anthropic',
    url: 'https://claude.ai/code',
    turpiTake: {
      beginner: 'Lo más cercano a tener un programador trabajando para ti. Le describes lo que quieres y él lo construye.',
      intermediate: 'Con esto construí este sitio. Lo dejas trabajando y vuelves cuando terminó. Magia negra.',
      advanced: 'El más capaz para tareas autónomas complejas. El context de 200k tokens le permite entender proyectos enteros. Cursor es más interactivo, esto es más autónomo.',
    },
    limitations: {
      beginner: 'Necesitas tener algo de conocimiento técnico para configurarlo y entender qué está haciendo. Si algo sale mal, necesitas saber cómo arreglarlo.',
      intermediate: 'Requiere familiaridad con terminal. Puede cometer errores en proyectos muy complejos. Los costos se acumulan con uso intensivo.',
      advanced: 'Sin GUI - requiere comfort con CLI. Puede hacer cambios destructivos si no se supervisa. Costos API pueden escalar. Context degradation en proyectos muy grandes a pesar del window de 200k.',
    },
    lastUpdated: '2025-12-08',
  },
  {
    id: 'cursor',
    name: 'Cursor',
    slug: 'cursor',
    category: 'coding',
    tagline: {
      beginner: 'Un editor de código que te ayuda a programar',
      intermediate: 'El editor que programa contigo',
      advanced: 'Fork de VS Code con Claude 4/GPT-4.1/Gemini, embeddings, y modelo Composer',
    },
    description: {
      beginner: 'Cursor es como un editor de texto para programadores, pero con un asistente de IA incorporado. Puedes escribir en español lo que quieres hacer y te ayuda a escribir el código. No necesitas ser experto para empezar.',
      intermediate: 'Fork de VS Code con IA integrada. Habla con tu código, autocomplete inteligente, refactorización fácil. Usa sistema de créditos - Pro incluye $20 de uso al mes.',
      advanced: 'Fork de VS Code con Claude 4, GPT-4.1, Gemini 2.5 Pro, y o3-pro. Composer es modelo propietario para coding. Context-aware completions via embeddings. Cmd+K inline, Agent Mode multi-archivo. Reglas custom via .cursor/rules/*.mdc.',
    },
    bestFor: ['Edición visual', 'Chat con código', 'Principiantes', 'Multi-file refactoring'],
    pricing: 'freemium',
    pricingDetails: 'Gratis limitado. Pro $20/mes. Pro+ $60/mes. Ultra $200/mes',
    url: 'https://cursor.sh',
    turpiTake: {
      beginner: 'Perfecto para empezar a programar. Escribe lo que quieres hacer en español y te ayuda a hacerlo. Es visual y amigable.',
      intermediate: 'Si prefieres ver las cosas en lugar de usar terminal, este es tu amigo. Pro ($20) da $20 en créditos de IA, suficiente para la mayoría.',
      advanced: 'Mejor experiencia para proyectos medianos. Composer + embeddings = magia. Pro suficiente para mayoría. Pro+ ($60) si necesitas 3x. Para proyectos gigantes, Claude Code ofrece más autonomía.',
    },
    limitations: {
      beginner: 'Todavía necesitas entender algo de programación para usarlo bien. La IA te ayuda pero no hace magia - a veces sugiere código que no funciona.',
      intermediate: 'Sistema de créditos puede confundir (antes eran requests fijos). El autocomplete a veces agresivo. Consume bastante RAM vs VS Code vanilla.',
      advanced: 'Context window limitado vs Claude Code. No ejecución autónoma completa. Codebase indexing lento en monorepos. Privacy concerns - código va a múltiples providers. Pro+ o Ultra necesarios para uso intensivo.',
    },
    lastUpdated: '2025-12-09',
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    slug: 'github-copilot',
    category: 'coding',
    tagline: {
      beginner: 'Tu editor te sugiere código mientras escribes',
      intermediate: 'Autocomplete que entiende tu código',
      advanced: 'AI coding assistant con Agent Mode autónomo y múltiples modelos',
    },
    description: {
      beginner: 'GitHub Copilot es como tener un asistente que te sugiere qué escribir mientras programas. Ahora tiene modo gratuito y un Agent Mode que puede hacer tareas completas por ti.',
      intermediate: 'Sugerencias de código mientras escribes. Agent Mode puede completar tareas enteras de forma autónoma. Funciona en VS Code, JetBrains, Eclipse, Xcode. Estudiantes y profes lo tienen gratis.',
      advanced: 'AI coding con GPT-4, Claude Opus 4, o3 (en Pro+). Agent Mode completamente liberado - lee archivos, propone cambios, ejecuta tests, corrige errores en loop. Background execution con GitHub Actions.',
    },
    bestFor: ['Autocomplete', 'Agent autónomo', 'Múltiples editores', 'Código repetitivo'],
    pricing: 'freemium',
    pricingDetails: 'Gratis (2k completions/mes). Pro $10/mes. Pro+ $39/mes',
    url: 'https://github.com/features/copilot',
    turpiTake: {
      beginner: 'Ahora tiene plan gratis para probar. El Agent Mode te permite describir qué quieres hacer y lo completa automáticamente. Estudiantes y profes tienen acceso gratis completo.',
      intermediate: 'El Agent Mode ya salió de beta y funciona bien. Pro+ ($39) con Claude Opus 4 es tentador. Para autocomplete sigue siendo sólido.',
      advanced: 'Agent Mode compite con Cursor y Claude Code. Pro+ da acceso a múltiples modelos top. Los 5 tiers dan flexibilidad. Para contexto masivo, Claude Code sigue ganando.',
    },
    limitations: {
      beginner: 'El tier gratis es muy limitado (2,000 completions/mes). Las sugerencias no siempre correctas. Agent Mode es nuevo - a veces comete errores.',
      intermediate: 'Free tier insuficiente para uso real. Agent Mode tiene límites. Pro+ es $39/mes. Privacy concerns sobre código enviado a servidores persisten.',
      advanced: 'Free tier muy limitado. Agent Mode menos maduro que Claude Code para tareas complejas. Pro+ pricing alto. Copyright concerns (entrenamiento en repos públicos). Premium requests $0.04 c/u si excedes.',
    },
    lastUpdated: '2025-12-09',
  },

  // Image Generation
  {
    id: 'midjourney',
    name: 'Midjourney',
    slug: 'midjourney',
    category: 'image',
    tagline: {
      beginner: 'Crea imágenes hermosas describiendo lo que quieres',
      intermediate: 'El más artístico de todos',
      advanced: 'Modelo de difusión optimizado para estética y coherencia artística',
    },
    description: {
      beginner: 'Midjourney genera imágenes de alta calidad artística. Le describes lo que quieres ver ("un dragón volando sobre montañas al atardecer") y genera una imagen. Es como tener un artista que dibuja lo que imaginas.',
      intermediate: 'Enfocado en calidad artística y estética. Funciona a través de Discord (raro, pero funciona). Ampliamente usado en la industria para imágenes de alta calidad.',
      advanced: 'Modelo de difusión propietario con fine-tuning extensivo para coherencia artística. V6 soporta texto en imágenes y estilos consistentes. Interfaz via Discord o web app. Excelente para concept art y visualización.',
    },
    bestFor: ['Arte', 'Concept art', 'Ilustraciones', 'Estética'],
    pricing: 'paid',
    pricingDetails: 'Desde $10/mes',
    url: 'https://midjourney.com',
    turpiTake: {
      beginner: 'Enfocado en calidad artística. Describe lo que quieres y genera imágenes con estilo definido.',
      intermediate: 'Alta calidad estética. La interfaz de Discord es rara pero te acostumbras.',
      advanced: 'Fuerte en estética y coherencia artística. V6 mejoró significativamente coherencia y texto. Para control preciso, Stable Diffusion ofrece más flexibilidad.',
    },
    limitations: {
      beginner: 'No hay plan gratis - tienes que pagar para usarlo. La interfaz por Discord puede ser confusa al principio.',
      intermediate: 'Sin tier gratis. La interfaz de Discord tiene curva de aprendizaje. Poco control sobre detalles específicos. No puedes correrlo localmente.',
      advanced: 'No hay API oficial (hay wrappers no oficiales). Modelo cerrado sin fine-tuning. Control limitado comparado con Stable Diffusion. Discord-based workflow puede ser lento para producción.',
    },
    lastUpdated: '2025-12-08',
  },
  {
    id: 'dalle',
    name: 'DALL-E',
    slug: 'dalle',
    category: 'image',
    tagline: {
      beginner: 'Crea imágenes directamente en ChatGPT',
      intermediate: 'Generación de imágenes dentro de ChatGPT',
      advanced: 'DALL-E 3 integrado en GPT-4 con understanding semántico mejorado',
    },
    description: {
      beginner: 'DALL-E es el generador de imágenes de ChatGPT. Lo escribes lo que quieres ver y te crea una imagen. Lo bueno es que está integrado - no tienes que ir a otro sitio.',
      intermediate: 'Integrado en ChatGPT. Conveniente para generar imágenes sin salir de tu chat. ChatGPT puede ayudarte a mejorar tu prompt antes de generar.',
      advanced: 'DALL-E 3 integrado nativamente en GPT-4. ChatGPT actúa como prompt engineer automático, mejorando tus descripciones. API disponible por separado. Buena coherencia de texto.',
    },
    bestFor: ['Generación rápida', 'Integración ChatGPT', 'Iterar ideas', 'Texto en imágenes'],
    pricing: 'freemium',
    pricingDetails: 'Incluido con ChatGPT Plus',
    url: 'https://openai.com/dall-e',
    turpiTake: {
      beginner: 'La forma más fácil de empezar a crear imágenes con IA - ya está dentro de ChatGPT.',
      intermediate: 'Lo más conveniente porque ya está en ChatGPT. Para iterar rápido está bien.',
      advanced: 'Convenience factor es alto. El prompt rewriting automático ayuda pero también puede frustar cuando quieres control preciso.',
    },
    limitations: {
      beginner: 'Las imágenes no son tan bonitas como Midjourney. Tiene límites de cuántas puedes crear por hora.',
      intermediate: 'Calidad inferior a Midjourney en estética. Rate limits incluso con Plus. El prompt rewriting a veces ignora lo que pediste.',
      advanced: 'Calidad artística inferior a Midjourney. Prompt rewriting automático puede ser frustrante. API pricing es alto. Rate limits restrictivos. Sin inpainting avanzado como Stable Diffusion.',
    },
    lastUpdated: '2025-12-08',
  },
  {
    id: 'ideogram',
    name: 'Ideogram',
    slug: 'ideogram',
    category: 'image',
    tagline: {
      beginner: 'Crea imágenes con texto que se puede leer',
      intermediate: 'El único que hace texto legible',
      advanced: 'Modelo especializado en text rendering con arquitectura novel',
    },
    description: {
      beginner: 'Ideogram es especial porque puede escribir texto dentro de las imágenes que se lee bien. Otros generadores hacen letras raras, este no. Perfecto para hacer carteles, logos, o cualquier cosa con palabras.',
      intermediate: 'Especializado en imágenes con texto legible - logos, afiches, carteles. Donde otros generadores fallan con el texto, Ideogram brilla. También buena calidad general.',
      advanced: 'Arquitectura novel optimizada para text rendering coherente. Ideogram 2.0 mejoró significativamente calidad general. API disponible. Excelente para assets de marketing que requieren tipografía.',
    },
    bestFor: ['Texto en imágenes', 'Logos', 'Afiches', 'Marketing'],
    pricing: 'freemium',
    pricingDetails: 'Gratis limitado. Plus desde $7/mes',
    url: 'https://ideogram.ai',
    turpiTake: {
      beginner: 'El único que escribe bien. Si quieres hacer un cartel o logo con texto, usa este.',
      intermediate: 'Cuando necesitas texto en la imagen, no hay otro. Los demás escriben como borrachos.',
      advanced: 'Unmatched para text rendering. La calidad general mejoró mucho con 2.0. Para imágenes sin texto, Midjourney sigue siendo superior en estética.',
    },
    limitations: {
      beginner: 'El tier gratis tiene límites. Para imágenes sin texto, Midjourney se ve mejor.',
      intermediate: 'Calidad artística general inferior a Midjourney. El tier gratis es limitado. Menos estilos artísticos disponibles.',
      advanced: 'Estética general inferior a Midjourney para imágenes artísticas. Menos control sobre estilo. Community y recursos más limitados. API documentation básica.',
    },
    lastUpdated: '2025-12-08',
  },

  // Hosting
  {
    id: 'vercel',
    name: 'Vercel',
    slug: 'vercel',
    category: 'hosting',
    tagline: {
      beginner: 'Pon tu sitio web en internet gratis',
      intermediate: 'Deploy en segundos',
      advanced: 'Edge runtime con ISR, serverless functions, y analytics integrado',
    },
    description: {
      beginner: 'Vercel es como una casa para tu sitio web en internet. Subes tu código y automáticamente lo pone disponible para que cualquiera pueda verlo. Es gratis para empezar y muy fácil de usar.',
      intermediate: 'La forma más fácil de poner tu app en internet. Conecta GitHub, haz push, listo. Cada vez que cambias tu código, automáticamente actualiza tu sitio.',
      advanced: 'Plataforma serverless con edge runtime global. ISR (Incremental Static Regeneration), edge functions, image optimization, y analytics built-in. Integración nativa con Next.js (son los creadores). Preview deployments por PR.',
    },
    bestFor: ['Next.js', 'Sitios estáticos', 'Deploys rápidos', 'Previews'],
    pricing: 'freemium',
    pricingDetails: 'Gratis generoso. Pro $20/mes',
    url: 'https://vercel.com',
    turpiTake: {
      beginner: 'La forma más fácil de poner algo en internet. Conecta tu cuenta de GitHub y tu sitio está online en minutos.',
      intermediate: 'Mi hosting por defecto. Conectas GitHub, subes código, está en vivo. Así de simple.',
      advanced: 'Best-in-class para Next.js. Edge functions y ISR son killer features. Para proyectos que necesitan más control, Railway ofrece más flexibilidad.',
    },
    limitations: {
      beginner: 'El tier gratis tiene límites de cuántas veces puede cargarse tu sitio por mes. Para sitios pequeños está bien, pero si se hace muy popular necesitarás pagar.',
      intermediate: 'Serverless functions tienen límites de tiempo de ejecución (hasta 60s hobby, hasta 300s pro con Fluid Compute). Sin bases de datos incluidas. Vendor lock-in con features específicas de Vercel.',
      advanced: 'Cold starts en serverless pueden afectar TTFB. Hobby: hasta 60s configurable. Pro: hasta 300s con Fluid Compute. Sin persistent connections. Costos pueden escalar rápido con mucho tráfico. Framework-agnostic en teoría, optimizado para Next.js en práctica.',
    },
    lastUpdated: '2025-12-09',
  },
  {
    id: 'netlify',
    name: 'Netlify',
    slug: 'netlify',
    category: 'hosting',
    tagline: {
      beginner: 'Otra forma fácil de poner tu sitio en internet',
      intermediate: 'Hosting con superpoderes',
      advanced: 'Plataforma JAMstack con edge functions, forms, y identity built-in',
    },
    description: {
      beginner: 'Netlify es muy parecido a Vercel - pones tu código y tu sitio aparece en internet. Lo especial es que tiene formularios incluidos - puedes agregar formularios a tu sitio sin programar nada.',
      intermediate: 'Similar a Vercel con excelente manejo de formularios y funciones serverless. Muy bueno para sitios JAMstack. Deploy desde Git automático.',
      advanced: 'Plataforma JAMstack con edge functions (Deno-based), form handling built-in, identity/auth, y split testing nativo. Build plugins ecosystem. Funciona bien con cualquier framework.',
    },
    bestFor: ['Sitios estáticos', 'Formularios', 'Funciones serverless', 'JAMstack'],
    pricing: 'freemium',
    pricingDetails: 'Gratis. Pro $19/mes',
    url: 'https://netlify.com',
    turpiTake: {
      beginner: 'Si Vercel no te convence, prueba este. Muy fácil de usar y los formularios son magia.',
      intermediate: 'Buena alternativa a Vercel. Mejor manejo de formularios sin configurar nada.',
      advanced: 'Form handling y identity son ventajas sobre Vercel. Para Next.js, Vercel tiene mejor integración. Para otros frameworks, Netlify es comparable.',
    },
    limitations: {
      beginner: 'El tier gratis tiene límites parecidos a Vercel. Si tu sitio crece mucho, tendrás que pagar.',
      intermediate: 'Build times pueden ser lentos en tier gratis. Edge functions son más nuevas que Vercel. Menos integración con Next.js específicamente.',
      advanced: 'Edge functions son Deno-based (diferente a Node). Build times lentos comparado con Vercel en tier gratis. Next.js ISR support es experimental. Less integrated experience para Next.js.',
    },
    lastUpdated: '2025-12-09',
  },
  {
    id: 'railway',
    name: 'Railway',
    slug: 'railway',
    category: 'hosting',
    tagline: {
      beginner: 'Hosting que puede hacer de todo',
      intermediate: 'Despliega lo que sea',
      advanced: 'PaaS con soporte para cualquier workload: containers, DBs, cron jobs, y más',
    },
    description: {
      beginner: 'Railway es como un hosting más poderoso. Además de tu sitio web, puede correr bases de datos, tareas programadas, y cosas que Vercel no puede. Es como tener tu propio servidor pero fácil de usar.',
      intermediate: 'Más flexible que Vercel. Puede correr bases de datos, trabajos en segundo plano, cualquier container Docker. Pago por uso real.',
      advanced: 'PaaS que soporta cualquier workload containerizado. Postgres, Redis, MongoDB con un click. Cron jobs, workers, y procesos de larga duración. Networking privado entre servicios. Modelo de pricing por recursos consumidos.',
    },
    bestFor: ['Apps full-stack', 'Bases de datos', 'Background jobs', 'Docker'],
    pricing: 'paid',
    pricingDetails: 'Hobby $5/mes. Pro $20/mes. Crédito único de $5 para probar',
    url: 'https://railway.app',
    turpiTake: {
      beginner: 'Cuando necesitas más que solo un sitio web. Si tu app necesita base de datos o tareas en segundo plano. Ojo: ya no hay tier gratis.',
      intermediate: 'Cuando Vercel no alcanza. Para apps que necesitan base de datos o procesos en segundo plano. Mínimo $5/mes.',
      advanced: 'Excelente DX con flexibilidad de un VPS. Ideal para full-stack apps con múltiples servicios. Para sitios estáticos/Next.js puros, Vercel es más optimizado y tiene tier gratis.',
    },
    limitations: {
      beginner: 'Ya no hay tier gratis - mínimo $5/mes. Solo dan $5 de crédito una vez para probar. Para empezar gratis, usa Vercel o Cloudflare Pages.',
      intermediate: 'Eliminaron el free tier en agosto 2023. Mínimo $5/mes (Hobby) o $20/mes (Pro). No tiene edge network como Vercel/Cloudflare.',
      advanced: 'Free tier discontinuado agosto 2023. Solo crédito único de $5 para trial. No tiene edge network como Vercel/Cloudflare. Resource-based pricing puede escalar rápido con múltiples servicios.',
    },
    lastUpdated: '2025-12-09',
  },
  {
    id: 'cloudflare-pages',
    name: 'Cloudflare Pages',
    slug: 'cloudflare-pages',
    category: 'hosting',
    tagline: {
      beginner: 'Hosting gratis que nunca te cobra',
      intermediate: 'Rápido y gratis de verdad',
      advanced: 'Edge hosting en 300+ PoPs con Workers integration y bandwidth ilimitado',
    },
    description: {
      beginner: 'Cloudflare Pages es hosting completamente gratis. No hay límites de visitas, no hay costos sorpresa. Tu sitio se carga muy rápido porque Cloudflare tiene servidores en todo el mundo.',
      intermediate: 'CDN global con hosting gratuito ilimitado. Build automático desde Git. Tu sitio se sirve desde el servidor más cercano al usuario. Velocidad excepcional.',
      advanced: 'Edge hosting en 300+ Points of Presence globales. Bandwidth ilimitado gratis. Workers integration para SSR y funciones. Full-stack framework support con adaptors. Analytics y Web Vitals incluidos.',
    },
    bestFor: ['Sitios estáticos', 'Velocidad', 'Gratis ilimitado', 'CDN global'],
    pricing: 'free',
    pricingDetails: 'Gratis ilimitado',
    url: 'https://pages.cloudflare.com',
    turpiTake: {
      beginner: 'El más generoso de todos - gratis de verdad, sin límites. Si tu sitio no necesita servidor, usa este.',
      intermediate: 'Gratis de verdad, sin trucos. Si tu sitio es estático, no hay razón para pagar.',
      advanced: 'Best-in-class para performance con edge network masivo. Workers son poderosos pero tienen learning curve. Para Next.js complejo, Vercel tiene mejor DX.',
    },
    limitations: {
      beginner: 'Funciona mejor con sitios simples. Si tu app necesita mucha lógica de servidor, otros son más fáciles.',
      intermediate: 'Workers tienen límites de ejecución y memoria. Full-stack frameworks requieren adaptors. Menos features que Vercel para Next.js específicamente. Límite de 100k requests/día en tier gratis.',
      advanced: 'Workers tienen límites de CPU de 10ms en tier gratis (sin variación). Memory limitada a 128MB. Límite de 100k requests/día gratis. No hay persistent storage nativo. Next.js support es via adaptor, no nativo. Build output limits (20k files, 25MB).',
    },
    lastUpdated: '2025-12-09',
  },

  // Databases
  {
    id: 'supabase',
    name: 'Supabase',
    slug: 'supabase',
    category: 'database',
    tagline: {
      beginner: 'Guarda los datos de tu app fácilmente',
      intermediate: 'Firebase pero open source',
      advanced: 'Postgres managed con auth, storage, realtime, y edge functions',
    },
    description: {
      beginner: 'Supabase es donde tu app guarda información. Como si fuera una hoja de Excel súper poderosa en la nube. También maneja quién puede entrar a tu app (usuarios y contraseñas) y guarda archivos como imágenes.',
      intermediate: 'Postgres con auth, storage y real-time incluido. Todo lo que necesitas para un backend. Puedes usarlo sin escribir código de servidor.',
      advanced: 'Postgres managed con PostgREST para API REST automática. Includes GoTrue para auth (email, OAuth, magic links), S3-compatible storage, realtime subscriptions via websockets, edge functions (Deno), y pg_graphql. Row Level Security para autorización.',
    },
    bestFor: ['Backend completo', 'Auth', 'Tiempo real', 'Storage'],
    pricing: 'freemium',
    pricingDetails: 'Gratis generoso. Pro $25/mes',
    url: 'https://supabase.com',
    turpiTake: {
      beginner: 'Todo lo que necesitas para que tu app funcione, sin tener que ser experto en servidores. El plan gratis es muy generoso para empezar.',
      intermediate: 'Mi base de datos favorita. Auth, storage y base de datos en uno. El tier gratis es absurdamente generoso.',
      advanced: 'Excelente DX con cliente tipado. RLS es poderoso pero tiene curva de aprendizaje. Para casos complejos, considera si necesitas un backend custom.',
    },
    limitations: {
      beginner: 'Si tu app se vuelve muy popular, eventualmente tendrás que pagar. El plan gratis tiene límites de cuántos usuarios y datos puedes tener.',
      intermediate: 'El tier gratis pausa proyectos inactivos después de 1 semana. Límites en conexiones simultáneas. RLS puede ser confuso al principio.',
      advanced: 'Postgres connection pooling limitado (PgBouncer). Sin persistent connections desde serverless. RLS performance overhead en queries complejas. Edge functions tienen cold starts. Vendor-specific features (realtime, storage) no son portables.',
    },
    lastUpdated: '2025-12-09',
  },
  {
    id: 'firebase',
    name: 'Firebase',
    slug: 'firebase',
    category: 'database',
    tagline: {
      beginner: 'Todo lo que necesita tu app, de Google',
      intermediate: 'La plataforma de Google',
      advanced: 'BaaS con Firestore, Auth, Cloud Functions, y hosting en GCP',
    },
    description: {
      beginner: 'Firebase es de Google y tiene todo lo que tu app necesita: donde guardar datos, cómo manejar usuarios, y donde ponerla en internet. Es como un kit completo para hacer apps.',
      intermediate: 'Base de datos en tiempo real, auth, hosting y más. Profundamente integrado con Google Cloud. SDK para todas las plataformas.',
      advanced: 'BaaS completo con Firestore (NoSQL document DB), Realtime Database, Authentication, Cloud Functions (Node.js), hosting con CDN, y analytics. Deep integration con GCP para escalar.',
    },
    bestFor: ['Apps en tiempo real', 'Apps móviles', 'Ecosistema Google', 'Prototipos'],
    pricing: 'freemium',
    pricingDetails: 'Gratis. Pagas según creces',
    url: 'https://firebase.google.com',
    turpiTake: {
      beginner: 'Tiene todo incluido y los tutoriales de Google son buenos. Buena opción para empezar con apps móviles.',
      intermediate: 'Bueno si ya estás metido con Google. Supabase es más abierto y flexible.',
      advanced: 'SDK mature y bien documentado. Para SQL y control, Supabase es mejor. Para NoSQL y mobile-first, Firebase es solid. Cloud Functions pueden ser lentas (cold starts).',
    },
    limitations: {
      beginner: 'Los costos pueden subir rápido si tu app se hace popular. No es SQL tradicional, es diferente a lo que enseñan en cursos.',
      intermediate: 'Firestore no es SQL - tiene curva de aprendizaje. Costos escalan de forma impredecible. Vendor lock-in significativo con Google. Cloud Storage requerirá plan Blaze a partir de febrero 2026.',
      advanced: 'NoSQL tiene limitaciones para queries complejas (no JOINs). Pricing puede escalar exponencialmente. Cloud Functions 2nd gen tienen cold starts de 1-2s (mejor que 1st gen). Vendor lock-in alto - difícil migrar. Security rules tienen learning curve.',
    },
    lastUpdated: '2025-12-09',
  },
  {
    id: 'planetscale',
    name: 'PlanetScale',
    slug: 'planetscale',
    category: 'database',
    tagline: {
      beginner: 'Base de datos que no se cae cuando creces',
      intermediate: 'MySQL serverless con branching',
      advanced: 'MySQL-compatible serverless DB basada en Vitess con schema branching',
    },
    description: {
      beginner: 'PlanetScale es una base de datos que crece contigo. No tienes que preocuparte por "va a aguantar si tengo muchos usuarios?" - ella se encarga. Es como MySQL pero más moderno.',
      intermediate: 'Base de datos MySQL que escala automáticamente. Branches como Git para tu esquema - prueba cambios sin romper producción.',
      advanced: 'Built on Vitess (tecnología de YouTube). MySQL-compatible con horizontal sharding automático. Schema branching para safe migrations. Connection pooling nativo. Serverless pricing.',
    },
    bestFor: ['MySQL', 'Escala automática', 'Branching', 'Producción seria'],
    pricing: 'paid',
    pricingDetails: '$5/mes (nodo único). Scaler Pro $39/mes',
    url: 'https://planetscale.com',
    turpiTake: {
      beginner: 'Si tu proyecto crece mucho, esta no te va a fallar. Pero para empezar, Supabase es más fácil y tiene tier gratis.',
      intermediate: 'Si necesitas MySQL en serio. El branching es útil para no romper producción. Ahora hay un tier de $5/mes para empezar.',
      advanced: 'Diseñado para MySQL que necesita escalar. El branching workflow funciona bien para equipos. Foreign keys ahora soportados en bases de datos sin sharding.',
    },
    limitations: {
      beginner: 'Es más técnico que Supabase. No hay tier gratis - el mínimo es $5/mes. Supabase es mejor para principiantes.',
      intermediate: 'Eliminaron el free tier en abril 2024. No tiene auth ni storage incluido como Supabase. Foreign keys solo funcionan en bases de datos sin sharding.',
      advanced: 'Sin free tier desde abril 2024. Scaler deprecado, ahora Scaler Pro a $39/mes. Foreign keys soportados solo en unsharded databases (limitación de Vitess). Sin features de BaaS - solo database.',
    },
    lastUpdated: '2025-12-09',
  },

  // Automation
  {
    id: 'n8n',
    name: 'n8n',
    slug: 'n8n',
    category: 'automation',
    tagline: {
      beginner: 'Conecta tus apps para que trabajen solas',
      intermediate: 'Automatización que puedes hostear tú',
      advanced: 'Workflow automation open source con ejecución de código y self-hosting',
    },
    description: {
      beginner: 'n8n te permite conectar diferentes apps para que hagan cosas automáticamente. Por ejemplo: "cuando llegue un email con factura, guardala en Google Drive y avisame por Slack". Construyes estos flujos arrastrando cajitas.',
      intermediate: 'Constructor visual de workflows que conecta apps. Puedes self-hostear para control total y sin límites. Más flexible que Zapier para lógica compleja.',
      advanced: 'Workflow automation open source (fair-code license). Self-hosteable con Docker. Soporta código custom (JavaScript/Python), webhooks, cron, y 400+ integraciones. Ideal para workflows que requieren lógica compleja.',
    },
    bestFor: ['Workflows complejos', 'Self-hosting', 'APIs', 'Lógica custom'],
    pricing: 'freemium',
    pricingDetails: 'Gratis self-hosted. Cloud desde $20/mes',
    url: 'https://n8n.io',
    turpiTake: {
      beginner: 'Si puedes instalarlo (o que alguien te ayude), es gratis y sin límites. Más difícil que Zapier pero más poderoso.',
      intermediate: 'Más poderoso que Zapier y puedes hostearlo tú. Mi elección para automatización seria.',
      advanced: 'Best-in-class para workflows complejos. Self-hosting elimina costos recurrentes y límites. La comunidad es activa y hay muchos templates.',
    },
    limitations: {
      beginner: 'Necesitas saber instalar cosas (Docker) para la versión gratis. La interfaz puede ser confusa al principio.',
      intermediate: 'Self-hosting requiere mantener infraestructura. La versión cloud es más cara que Zapier para uso básico. Documentación a veces desactualizada.',
      advanced: 'Fair-code license tiene restricciones comerciales. Self-hosting requiere mantenimiento (updates, backups). Algunas integraciones son menos pulidas que Zapier. Error handling puede ser complejo en workflows grandes.',
    },
    lastUpdated: '2025-12-08',
  },
  {
    id: 'zapier',
    name: 'Zapier',
    slug: 'zapier',
    category: 'automation',
    tagline: {
      beginner: 'Conecta tus apps sin saber programar',
      intermediate: 'Conecta tus apps sin código',
      advanced: 'iPaaS líder con 6000+ integraciones y paths condicionales',
    },
    description: {
      beginner: 'Zapier es la forma más fácil de hacer que tus apps hablen entre sí. "Cuando reciba un email con adjunto, guardarlo en Dropbox" - ese tipo de cosas. Todo se hace con clicks, sin programar.',
      intermediate: 'La herramienta de automatización más popular. Conecta 6000+ apps con interfaz simple. Ideal para automatizaciones que no requieren lógica compleja.',
      advanced: 'iPaaS (Integration Platform as a Service) con el catálogo de integraciones más grande. Paths condicionales, filters, formatters, y webhooks. Pricing por "tasks" ejecutadas.',
    },
    bestFor: ['Automatizaciones simples', 'Integraciones', 'No-code', 'Setup rápido'],
    pricing: 'freemium',
    pricingDetails: 'Gratis limitado. Starter $19.99/mes',
    url: 'https://zapier.com',
    turpiTake: {
      beginner: 'El más fácil de usar. Si nunca has automatizado nada, empieza aquí.',
      intermediate: 'Más fácil que n8n para empezar, pero más limitado y caro cuando creces.',
      advanced: 'Catálogo de integraciones imbatible. Para lógica compleja o alto volumen, n8n o Make son más cost-effective.',
    },
    limitations: {
      beginner: 'El plan gratis solo permite 100 tareas al mes - se acaba rápido. Cada acción cuenta como una tarea.',
      intermediate: 'Pricing por tasks se vuelve caro rápido. Lógica compleja es difícil de implementar. Sin self-hosting option.',
      advanced: 'Task-based pricing escala muy mal para alto volumen. Paths y loops tienen limitaciones. No hay code execution real (solo formatters). Imposible self-hostear. Latencia entre steps.',
    },
    lastUpdated: '2025-12-08',
  },
  {
    id: 'make',
    name: 'Make',
    slug: 'make',
    category: 'automation',
    tagline: {
      beginner: 'Automatiza con diagramas visuales',
      intermediate: 'Automatización visual potente',
      advanced: 'iPaaS visual con branching complejo y mejor pricing que Zapier',
    },
    description: {
      beginner: 'Make (antes llamado Integromat) te permite crear automatizaciones dibujando diagramas. Ves exactamente cómo fluye la información de una app a otra. Es muy visual y más barato que Zapier.',
      intermediate: 'Antes Integromat. Workflows visuales con más control que Zapier a mejor precio. Permite lógica más compleja con branches y loops.',
      advanced: 'iPaaS con interfaz visual de nodos. Permite branching complejo, iterators, aggregators, y routers. Pricing por operations más favorable que Zapier para volumen medio-alto.',
    },
    bestFor: ['Workflows visuales', 'Precio/valor', 'Lógica compleja', 'Alternativa Zapier'],
    pricing: 'freemium',
    pricingDetails: 'Gratis limitado. Core $9/mes',
    url: 'https://make.com',
    turpiTake: {
      beginner: 'Más barato que Zapier y más fácil de entender porque ves el diagrama. Buena opción para empezar.',
      intermediate: 'Mejor precio que Zapier para lo mismo. La interfaz visual es muy clara.',
      advanced: 'Sweet spot entre Zapier (simple) y n8n (complejo). El pricing por operations es más predecible. Excelente para workflows medianos.',
    },
    limitations: {
      beginner: 'El plan gratis es más limitado que antes. Puede sentirse complejo si nunca has visto diagramas de flujo.',
      intermediate: 'Catálogo de integraciones menor que Zapier. Learning curve más alta que Zapier. Operations counting puede ser confuso.',
      advanced: 'Menos integraciones que Zapier. Sin self-hosting. Interfaz puede ser laggy con workflows muy grandes. Error handling menos intuitivo que n8n.',
    },
    lastUpdated: '2025-12-08',
  },

  // Design
  {
    id: 'figma',
    name: 'Figma',
    slug: 'figma',
    category: 'design',
    tagline: 'El estándar de la industria',
    description: 'Diseño de interfaces colaborativo en tiempo real. Prototipos y sistemas de diseño.',
    bestFor: ['Diseño UI', 'Prototipos', 'Colaboración', 'Sistemas de diseño'],
    pricing: 'freemium',
    pricingDetails: 'Gratis. Pro $12/mes',
    url: 'https://figma.com',
    turpiTake: 'Es el estándar por algo. Aunque no seas diseñador, vale saber que existe.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'canva',
    name: 'Canva',
    slug: 'canva',
    category: 'design',
    tagline: 'Diseña sin saber diseñar',
    description: 'Templates para todo - redes sociales, presentaciones, videos. Perfecto para no-diseñadores.',
    bestFor: ['Gráficos rápidos', 'Redes sociales', 'Presentaciones', 'Templates'],
    pricing: 'freemium',
    pricingDetails: 'Gratis. Pro $12.99/mes',
    url: 'https://canva.com',
    turpiTake: 'Para cuando necesitas algo rápido y que se vea bien. Los templates ahorran horas.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'framer',
    name: 'Framer',
    slug: 'framer',
    category: 'design',
    tagline: 'Diseña y publica sitios web',
    description: 'Diseño visual que genera sitios web reales. Sin código, con animaciones profesionales.',
    bestFor: ['Landing pages', 'Sin código', 'Animaciones', 'Sitios de marketing'],
    pricing: 'freemium',
    pricingDetails: 'Gratis limitado. Basic $5/mes',
    url: 'https://framer.com',
    turpiTake: 'Si necesitas un sitio sin tocar código. Conocido por sus capacidades de animación.',
    lastUpdated: '2025-12-08',
  },

  // Languages
  {
    id: 'python',
    name: 'Python',
    slug: 'python',
    category: 'languages',
    tagline: 'El lenguaje de la IA',
    description: 'El lenguaje más usado en IA, data science, y automatización. Fácil de aprender, infinitamente útil.',
    bestFor: ['IA/ML', 'Data science', 'Automatización', 'Principiantes'],
    pricing: 'free',
    pricingDetails: 'Open source',
    url: 'https://python.org',
    turpiTake: 'Si vas a aprender un lenguaje, empieza aquí. Todo el mundo de IA habla Python.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    slug: 'javascript',
    category: 'languages',
    tagline: 'El lenguaje de la web',
    description: 'Corre en todos los navegadores. Esencial para desarrollo web frontend y backend con Node.js.',
    bestFor: ['Web frontend', 'Web backend', 'Apps móviles', 'Fullstack'],
    pricing: 'free',
    pricingDetails: 'Viene con tu navegador',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    turpiTake: 'Si quieres hacer cosas en la web, no hay escape. Es raro pero funciona.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    slug: 'typescript',
    category: 'languages',
    tagline: 'JavaScript pero que no explota',
    description: 'JavaScript con tipos. Detecta errores antes de ejecutar. El estándar para proyectos serios.',
    bestFor: ['Proyectos grandes', 'Trabajo en equipo', 'Menos bugs', 'Mejor autocomplete'],
    pricing: 'free',
    pricingDetails: 'Open source de Microsoft',
    url: 'https://typescriptlang.org',
    turpiTake: 'JavaScript para adultos. Una vez que lo pruebas no vuelves atrás.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'rust',
    name: 'Rust',
    slug: 'rust',
    category: 'languages',
    tagline: 'Rápido y seguro',
    description: 'Rendimiento de C++ sin los crashes. Cada vez más usado en herramientas de desarrollo.',
    bestFor: ['Rendimiento', 'Sistemas', 'WebAssembly', 'CLIs'],
    pricing: 'free',
    pricingDetails: 'Open source',
    url: 'https://rust-lang.org',
    turpiTake: 'Difícil de aprender pero vale la pena. Muchas herramientas nuevas están escritas en Rust.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'go',
    name: 'Go',
    slug: 'go',
    category: 'languages',
    tagline: 'Simple y concurrente',
    description: 'Hecho por Google. Simple, rápido, excelente para servidores y microservicios.',
    bestFor: ['Servidores', 'Microservicios', 'DevOps', 'CLIs'],
    pricing: 'free',
    pricingDetails: 'Open source de Google',
    url: 'https://go.dev',
    turpiTake: 'Menos complicado que Rust, más rendimiento que Python. El punto medio perfecto.',
    lastUpdated: '2025-12-08',
  },

  // Frameworks
  {
    id: 'nextjs',
    name: 'Next.js',
    slug: 'nextjs',
    category: 'frameworks',
    tagline: 'React pero con todo incluido',
    description: 'El framework React más popular. Routing, SSR, API routes, todo listo para producción.',
    bestFor: ['Apps React', 'SSR', 'Producción', 'SEO'],
    pricing: 'free',
    pricingDetails: 'Open source de Vercel',
    url: 'https://nextjs.org',
    turpiTake: 'Mi framework por defecto. Este sitio está hecho con Next.js. Funciona y ya.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'react',
    name: 'React',
    slug: 'react',
    category: 'frameworks',
    tagline: 'La librería UI más popular',
    description: 'Librería de Facebook para construir interfaces. Base de Next.js y miles de apps.',
    bestFor: ['Interfaces', 'Componentes', 'Ecosistema grande', 'Trabajo'],
    pricing: 'free',
    pricingDetails: 'Open source de Meta',
    url: 'https://react.dev',
    turpiTake: 'Lo que todo el mundo usa. Aprenderlo abre muchas puertas laborales.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    slug: 'fastapi',
    category: 'frameworks',
    tagline: 'APIs en Python, rápido',
    description: 'Framework Python moderno para APIs. Rápido de escribir, rápido de ejecutar, documentación automática.',
    bestFor: ['APIs', 'Python', 'ML deployment', 'Documentación auto'],
    pricing: 'free',
    pricingDetails: 'Open source',
    url: 'https://fastapi.tiangolo.com',
    turpiTake: 'Framework moderno para APIs en Python. Documentación automática incluida.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    slug: 'tailwind',
    category: 'frameworks',
    tagline: 'CSS sin dolor de cabeza',
    description: 'Clases de utilidad para estilos. No más archivos CSS gigantes. Diseña directo en tu HTML.',
    bestFor: ['Estilos rápidos', 'Consistencia', 'Producción', 'Componentes'],
    pricing: 'free',
    pricingDetails: 'Open source',
    url: 'https://tailwindcss.com',
    turpiTake: 'CSS que no da ganas de llorar. Una vez que entiendes la lógica, no vuelves atrás.',
    lastUpdated: '2025-12-08',
  },

  // Dev Tools
  {
    id: 'git',
    name: 'Git',
    slug: 'git',
    category: 'devtools',
    tagline: 'Control de versiones que todos usan',
    description: 'Guarda el historial de tu código. Trabaja en equipo sin pisar el trabajo de otros.',
    bestFor: ['Versiones', 'Colaboración', 'Backup', 'Historial'],
    pricing: 'free',
    pricingDetails: 'Open source',
    url: 'https://git-scm.com',
    turpiTake: 'No opcional. Sin Git estás programando en modo difícil. Aprende los básicos.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'github',
    name: 'GitHub',
    slug: 'github',
    category: 'devtools',
    tagline: 'Donde vive el código del mundo',
    description: 'Hosting de repositorios Git. Issues, PRs, Actions, y donde todo el open source está.',
    bestFor: ['Hosting código', 'Open source', 'Colaboración', 'CI/CD'],
    pricing: 'freemium',
    pricingDetails: 'Gratis ilimitado. Team $4/mes',
    url: 'https://github.com',
    turpiTake: 'Tu portafolio como programador. Sube tus proyectos, contribuye a otros.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'vscode',
    name: 'VS Code',
    slug: 'vscode',
    category: 'devtools',
    tagline: 'El editor que todos usan',
    description: 'Editor de código de Microsoft. Miles de extensiones. Gratis y poderoso.',
    bestFor: ['Editar código', 'Extensiones', 'Terminal integrada', 'Todo'],
    pricing: 'free',
    pricingDetails: 'Gratis de Microsoft',
    url: 'https://code.visualstudio.com',
    turpiTake: 'El estándar. Gratis, potente, extensible. No hay razón para usar otra cosa.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'docker',
    name: 'Docker',
    slug: 'docker',
    category: 'devtools',
    tagline: 'Empaqueta tu app para que funcione en cualquier lado',
    description: 'Containers que garantizan que tu código corre igual en tu máquina y en producción.',
    bestFor: ['Consistencia', 'Deploy', 'Microservicios', 'DevOps'],
    pricing: 'freemium',
    pricingDetails: 'Personal gratis. Pro $5/mes',
    url: 'https://docker.com',
    turpiTake: 'Evita el "en mi máquina funciona". Aprende lo básico, te va a salvar.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'warp',
    name: 'Warp',
    slug: 'warp',
    category: 'devtools',
    tagline: 'Terminal del futuro',
    description: 'Terminal moderna con IA integrada, autocompletado, y colaboración en tiempo real.',
    bestFor: ['Terminal', 'Productividad', 'IA integrada', 'macOS'],
    pricing: 'freemium',
    pricingDetails: 'Gratis. Team $15/mes',
    url: 'https://warp.dev',
    turpiTake: 'La terminal que debería venir con tu Mac. El autocomplete con IA es adictivo.',
    lastUpdated: '2025-12-08',
  },

  // Open Source
  {
    id: 'ollama',
    name: 'Ollama',
    slug: 'ollama',
    category: 'opensource',
    tagline: 'Corre modelos de IA en tu máquina',
    description: 'Ejecuta LLMs localmente sin internet. Llama, Mistral, CodeLlama y más. Privacidad total.',
    bestFor: ['Privacidad', 'Sin internet', 'Modelos locales', 'Desarrollo'],
    pricing: 'free',
    pricingDetails: 'Gratis y open source',
    url: 'https://ollama.ai',
    turpiTake: 'La forma más fácil de correr IA en tu propia máquina. Un comando y listo.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'llama',
    name: 'Llama',
    slug: 'llama',
    category: 'opensource',
    tagline: 'El modelo open source de Meta',
    description: 'Familia de modelos de Meta. Desde 7B hasta 70B parámetros. Base de muchos otros proyectos.',
    bestFor: ['Base para otros', 'Investigación', 'Fine-tuning', 'Self-hosting'],
    pricing: 'free',
    pricingDetails: 'Open source de Meta',
    url: 'https://llama.meta.com',
    turpiTake: 'El modelo que democratizó la IA open source. Llama 3 compite con GPT-4 en muchas tareas.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'mistral',
    name: 'Mistral',
    slug: 'mistral',
    category: 'opensource',
    tagline: 'El modelo europeo eficiente',
    description: 'Modelos franceses que rinden más de lo que pesan. Mistral 7B supera a modelos más grandes.',
    bestFor: ['Eficiencia', 'Hardware limitado', 'Código', 'Multilingüe'],
    pricing: 'free',
    pricingDetails: 'Open source (Apache 2.0)',
    url: 'https://mistral.ai',
    turpiTake: 'Buena relación calidad/tamaño. Opción viable para GPUs modestas.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    slug: 'huggingface',
    category: 'opensource',
    tagline: 'El GitHub de los modelos de IA',
    description: 'Hub de modelos, datasets, y espacios para probar. Todo el open source de IA vive aquí.',
    bestFor: ['Encontrar modelos', 'Datasets', 'Comunidad', 'Probar demos'],
    pricing: 'freemium',
    pricingDetails: 'Gratis. Pro $9/mes para más recursos',
    url: 'https://huggingface.co',
    turpiTake: 'Si buscas un modelo para algo específico, empieza aquí. Es el centro del universo open source.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    slug: 'stable-diffusion',
    category: 'opensource',
    tagline: 'Generación de imágenes open source',
    description: 'El modelo de imágenes que puedes correr en tu máquina. SDXL genera imágenes de alta calidad.',
    bestFor: ['Imágenes locales', 'Sin censura', 'Personalización', 'Fine-tuning'],
    pricing: 'free',
    pricingDetails: 'Open source',
    url: 'https://stability.ai/stable-diffusion',
    turpiTake: 'Midjourney en tu máquina. Necesitas GPU pero los resultados valen la pena.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'comfyui',
    name: 'ComfyUI',
    slug: 'comfyui',
    category: 'opensource',
    tagline: 'Stable Diffusion con nodos visuales',
    description: 'Interfaz de nodos para Stable Diffusion. Control total sobre cada paso de la generación.',
    bestFor: ['Control avanzado', 'Workflows', 'Experimentación', 'Producción'],
    pricing: 'free',
    pricingDetails: 'Open source',
    url: 'https://github.com/comfyanonymous/ComfyUI',
    turpiTake: 'Para los que quieren control total. La curva de aprendizaje vale la flexibilidad.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'localai',
    name: 'LocalAI',
    slug: 'localai',
    category: 'opensource',
    tagline: 'OpenAI API pero local',
    description: 'Drop-in replacement de la API de OpenAI que corre en tu máquina. Compatible con herramientas existentes.',
    bestFor: ['API compatible', 'Self-hosting', 'Privacidad', 'Sin costos'],
    pricing: 'free',
    pricingDetails: 'Open source',
    url: 'https://localai.io',
    turpiTake: 'Cambia tu endpoint de OpenAI a LocalAI y todo sigue funcionando. Magia.',
    lastUpdated: '2025-12-08',
  },
  {
    id: 'whisper',
    name: 'Whisper',
    slug: 'whisper',
    category: 'opensource',
    tagline: 'Transcripción de audio de OpenAI',
    description: 'Modelo de transcripción de audio a texto. Soporta múltiples idiomas y traduce.',
    bestFor: ['Transcripción', 'Subtítulos', 'Traducción', 'Podcasts'],
    pricing: 'free',
    pricingDetails: 'Open source de OpenAI',
    url: 'https://github.com/openai/whisper',
    turpiTake: 'Transcripción automática de código abierto. Buen soporte para español.',
    lastUpdated: '2025-12-08',
  },
];

export function getToolsByCategory(category: Category): Tool[] {
  return tools.filter((t) => t.category === category);
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getCategoryInfo(id: Category): CategoryInfo | undefined {
  return categories.find((c) => c.id === id);
}
