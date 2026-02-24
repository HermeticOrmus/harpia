export type GlossaryCategory = 'development' | 'ai' | 'web' | 'business';

export interface GlossaryTerm {
  id: string;
  term: string;
  aliases?: string[];
  definition: {
    beginner: string;
    intermediate: string;
    advanced: string;
  };
  example?: string;
  relatedTerms?: string[];
  category: GlossaryCategory;
}

export const glossary: GlossaryTerm[] = [
  // Development terms
  {
    id: 'framework',
    term: 'Framework',
    aliases: ['frameworks'],
    definition: {
      beginner: 'Un conjunto de herramientas pre-hechas que te ayudan a construir aplicaciones más rápido. Como un kit de LEGO con piezas que ya encajan entre sí.',
      intermediate: 'Estructura de código base que proporciona funcionalidad común (routing, estado, build) para no empezar de cero.',
      advanced: 'Abstracción opinionada que impone arquitectura y convenciones a cambio de productividad y patrones probados.',
    },
    example: 'Next.js, React, Django, Rails',
    relatedTerms: ['library', 'runtime'],
    category: 'development',
  },
  {
    id: 'api',
    term: 'API',
    aliases: ['APIs'],
    definition: {
      beginner: 'Una forma de que dos programas hablen entre sí. Como un mesero que lleva tu pedido a la cocina y te trae la comida.',
      intermediate: 'Interfaz que permite a aplicaciones comunicarse. Define qué datos puedes pedir y cómo pedirlos.',
      advanced: 'Application Programming Interface. Contrato que define endpoints, métodos HTTP, formatos de request/response, y autenticación.',
    },
    example: 'La API de OpenAI te permite enviar texto y recibir respuestas de GPT',
    relatedTerms: ['endpoint', 'rest', 'sdk'],
    category: 'development',
  },
  {
    id: 'backend',
    term: 'Backend',
    definition: {
      beginner: 'La parte de una aplicación que no ves. Donde se guardan los datos y se procesan las cosas. Como la cocina de un restaurante.',
      intermediate: 'Servidor y base de datos que procesan lógica de negocio, almacenan datos, y responden a peticiones del frontend.',
      advanced: 'Capa server-side: APIs, bases de datos, autenticación, colas, workers, y servicios que soportan la aplicación.',
    },
    relatedTerms: ['frontend', 'api', 'database'],
    category: 'development',
  },
  {
    id: 'frontend',
    term: 'Frontend',
    definition: {
      beginner: 'La parte de una aplicación que sí ves y tocas. Los botones, colores, y todo lo visual. Como el comedor de un restaurante.',
      intermediate: 'Interfaz de usuario que corre en el navegador o app móvil. HTML, CSS, JavaScript, y frameworks como React.',
      advanced: 'Capa client-side: renderizado, estado local, interacciones, y comunicación con APIs backend.',
    },
    relatedTerms: ['backend', 'ui', 'ux'],
    category: 'development',
  },
  {
    id: 'deploy',
    term: 'Deploy',
    aliases: ['deployment', 'desplegar', 'despliegue'],
    definition: {
      beginner: 'Poner tu aplicación en internet para que otros la puedan usar. Como abrir las puertas de tu tienda al público.',
      intermediate: 'Proceso de subir tu código a un servidor donde estará disponible para usuarios. Incluye build, tests, y configuración.',
      advanced: 'Pipeline de CI/CD que compila, prueba, y despliega código a ambientes (staging, production) con rollback y monitoreo.',
    },
    example: 'Hacer deploy en Vercel sube tu sitio a internet en segundos',
    relatedTerms: ['hosting', 'ci-cd'],
    category: 'development',
  },
  {
    id: 'hosting',
    term: 'Hosting',
    definition: {
      beginner: 'El lugar donde vive tu sitio web o aplicación en internet. Como alquilar un local para tu negocio.',
      intermediate: 'Servicio que proporciona servidores donde corren tus aplicaciones. Puede ser compartido, VPS, o cloud.',
      advanced: 'Infraestructura de servidores (compute), almacenamiento, y red que sirve tu aplicación. Modelos: IaaS, PaaS, serverless.',
    },
    example: 'Vercel, Netlify, Railway, AWS',
    relatedTerms: ['deploy', 'serverless', 'cloud'],
    category: 'web',
  },
  {
    id: 'database',
    term: 'Database',
    aliases: ['base de datos', 'bases de datos', 'db'],
    definition: {
      beginner: 'Donde se guardan todos los datos de una aplicación. Como un archivero gigante muy organizado.',
      intermediate: 'Sistema para almacenar y consultar datos estructurados. SQL (PostgreSQL, MySQL) o NoSQL (MongoDB, Redis).',
      advanced: 'Motor de almacenamiento con ACID, índices, queries, replicación, y escalamiento. Relacional vs documento vs key-value vs grafo.',
    },
    example: 'Supabase usa PostgreSQL, Firebase usa una base de datos NoSQL',
    relatedTerms: ['sql', 'backend'],
    category: 'development',
  },
  {
    id: 'repository',
    term: 'Repositorio',
    aliases: ['repo', 'repos', 'repositorios'],
    definition: {
      beginner: 'Una carpeta especial donde guardas tu código con todo su historial de cambios. Como un Google Docs para código.',
      intermediate: 'Almacén de código versionado con Git. Permite colaboración, branches, y historial completo de cambios.',
      advanced: 'Estructura de datos Git que trackea snapshots del proyecto. Incluye branches, commits, tags, y remote origins.',
    },
    example: 'Un repo en GitHub donde guardas el código de tu proyecto',
    relatedTerms: ['git', 'branch'],
    category: 'development',
  },
  {
    id: 'open-source',
    term: 'Open Source',
    aliases: ['código abierto', 'opensource'],
    definition: {
      beginner: 'Software cuyo código cualquiera puede ver, usar, y modificar gratis. Como una receta de cocina que todos pueden copiar.',
      intermediate: 'Código público con licencia que permite uso, modificación, y distribución. Comunidad contribuye mejoras.',
      advanced: 'Modelo de desarrollo colaborativo con licencias (MIT, Apache, GPL) que definen derechos de uso, modificación, y distribución.',
    },
    example: 'Linux, React, y Python son open source',
    relatedTerms: ['git', 'license'],
    category: 'development',
  },
  {
    id: 'runtime',
    term: 'Runtime',
    definition: {
      beginner: 'El programa que hace que tu código funcione. Como el motor que hace que un carro se mueva.',
      intermediate: 'Ambiente de ejecución que interpreta o ejecuta tu código. Node.js para JavaScript, Python interpreter, JVM para Java.',
      advanced: 'Motor de ejecución que maneja memoria, I/O, event loop, y APIs del sistema. Incluye garbage collection y optimizaciones JIT.',
    },
    example: 'Node.js es el runtime que permite correr JavaScript fuera del navegador',
    relatedTerms: ['framework', 'compiler'],
    category: 'development',
  },
  {
    id: 'cli',
    term: 'CLI',
    aliases: ['línea de comandos', 'terminal', 'consola'],
    definition: {
      beginner: 'Una forma de controlar tu computadora escribiendo comandos en vez de hacer clic. Como hablarle a la computadora en vez de señalar.',
      intermediate: 'Command Line Interface. Herramienta que se usa escribiendo comandos en la terminal. Más rápido y automatizable que interfaces gráficas.',
      advanced: 'Interfaz de texto para interactuar con programas. Permite scripting, piping, y automatización. Shells: bash, zsh, PowerShell.',
    },
    example: 'git commit, npm install, vercel deploy son comandos de CLI',
    relatedTerms: ['terminal', 'bash'],
    category: 'development',
  },
  {
    id: 'sdk',
    term: 'SDK',
    aliases: ['SDKs'],
    definition: {
      beginner: 'Un paquete de herramientas que te ayuda a usar un servicio específico. Como un kit de herramientas para un trabajo específico.',
      intermediate: 'Software Development Kit. Librería oficial de un servicio que simplifica la integración en tu código.',
      advanced: 'Kit que incluye librerías, documentación, ejemplos, y herramientas para integrar con una plataforma o API específica.',
    },
    example: 'El SDK de OpenAI te da funciones listas para llamar a GPT desde tu código',
    relatedTerms: ['api', 'library'],
    category: 'development',
  },
  {
    id: 'library',
    term: 'Librería',
    aliases: ['librerías', 'library', 'libraries', 'biblioteca'],
    definition: {
      beginner: 'Código que alguien más escribió y puedes usar en tu proyecto. Como comprar ingredientes pre-cortados en vez de cortar todo tú.',
      intermediate: 'Colección de funciones reutilizables que importas en tu proyecto. Tú controlas cuándo y cómo usarlas.',
      advanced: 'Módulo de código empaquetado (npm, pip, cargo) que provee funcionalidad específica. Diferencia con framework: tú llamas a la librería, el framework te llama a ti.',
    },
    example: 'Lodash, Axios, Pandas son librerías populares',
    relatedTerms: ['framework', 'package'],
    category: 'development',
  },

  // AI-specific terms
  {
    id: 'llm',
    term: 'LLM',
    aliases: ['modelo de lenguaje', 'large language model'],
    definition: {
      beginner: 'Un programa de inteligencia artificial que entiende y genera texto, como ChatGPT o Claude. Aprendió leyendo muchísimo texto de internet.',
      intermediate: 'Large Language Model. Red neuronal entrenada en texto masivo que predice la siguiente palabra. Base de chatbots y asistentes de IA.',
      advanced: 'Transformer-based model con billones de parámetros entrenado en corpus de texto. Capacidades emergentes de razonamiento, coding, y seguimiento de instrucciones.',
    },
    example: 'GPT-4, Claude, Gemini, Llama son LLMs',
    relatedTerms: ['token', 'prompt', 'context'],
    category: 'ai',
  },
  {
    id: 'token',
    term: 'Token',
    aliases: ['tokens'],
    definition: {
      beginner: 'Un pedacito de texto que la IA procesa. Puede ser una palabra, parte de una palabra, o un signo de puntuación. La IA cobra por tokens.',
      intermediate: 'Unidad de texto que procesa el LLM. Una palabra común = 1 token, palabras largas = 2-3 tokens. Límites de contexto y precios se miden en tokens.',
      advanced: 'Unidad de tokenización (BPE, SentencePiece). Aproximadamente 4 caracteres en inglés, menos en otros idiomas. Context windows y costos se definen en tokens.',
    },
    example: '"Hola mundo" son aproximadamente 3 tokens',
    relatedTerms: ['context', 'llm'],
    category: 'ai',
  },
  {
    id: 'context',
    term: 'Contexto',
    aliases: ['context window', 'ventana de contexto'],
    definition: {
      beginner: 'Todo lo que la IA puede "recordar" en una conversación. Tiene un límite - si la conversación es muy larga, olvida el principio.',
      intermediate: 'La cantidad de texto (en tokens) que el modelo puede procesar a la vez. GPT-4: 128k tokens, Claude: 200k tokens.',
      advanced: 'Context window define el máximo de tokens de input + output. Afecta costo, latencia, y capacidad de razonamiento sobre documentos largos.',
    },
    example: 'Con 200k tokens de contexto, puedes pegar un libro entero y preguntar sobre él',
    relatedTerms: ['token', 'llm'],
    category: 'ai',
  },
  {
    id: 'prompt',
    term: 'Prompt',
    aliases: ['prompts'],
    definition: {
      beginner: 'Las instrucciones que le das a la IA. Mientras mejor expliques lo que quieres, mejor resultado obtienes.',
      intermediate: 'Input de texto que guía al modelo. Incluye instrucciones, contexto, y ejemplos. La calidad del prompt afecta dramáticamente el resultado.',
      advanced: 'Engineering de prompts incluye system prompts, few-shot examples, chain-of-thought, y estructuración para maximizar calidad y consistencia de outputs.',
    },
    example: '"Explica la fotosíntesis como si tuviera 5 años" es un prompt',
    relatedTerms: ['llm', 'context'],
    category: 'ai',
  },
  {
    id: 'fine-tuning',
    term: 'Fine-tuning',
    aliases: ['fine tuning', 'ajuste fino'],
    definition: {
      beginner: 'Entrenar una IA que ya existe para que sea experta en algo específico. Como enseñarle a un chef general a hacer solo comida mexicana.',
      intermediate: 'Proceso de entrenar un modelo pre-existente con datos específicos para mejorar su desempeño en tareas particulares.',
      advanced: 'Continued training de un modelo base con dataset curado. Técnicas: full fine-tuning, LoRA, QLoRA. Trade-off entre especialización y generalización.',
    },
    example: 'Fine-tunear GPT-3.5 con emails de tu empresa para que escriba en tu estilo',
    relatedTerms: ['llm', 'training'],
    category: 'ai',
  },
  {
    id: 'hallucination',
    term: 'Alucinación',
    aliases: ['hallucinations', 'alucinaciones', 'alucinar'],
    definition: {
      beginner: 'Cuando la IA inventa información que suena real pero es falsa. Por eso siempre hay que verificar datos importantes.',
      intermediate: 'Outputs que parecen plausibles pero son incorrectos. Los LLMs no "saben" verdad - predicen texto probable. Verificación humana es esencial.',
      advanced: 'Confabulación de información no fundamentada. Causas: distribución de training data, objective de next-token prediction, falta de grounding. Mitigación: RAG, citations, temperature baja.',
    },
    example: 'La IA puede inventar una cita de un libro que no existe',
    relatedTerms: ['llm', 'rag'],
    category: 'ai',
  },
  {
    id: 'inference',
    term: 'Inferencia',
    aliases: ['inference'],
    definition: {
      beginner: 'El momento en que la IA genera una respuesta a tu pregunta. Cada vez que ChatGPT te responde, está haciendo inferencia.',
      intermediate: 'Proceso de usar un modelo entrenado para generar outputs. Es lo que pagas cuando usas APIs de IA - cada request es una inferencia.',
      advanced: 'Forward pass del modelo para generar tokens. Costos incluyen compute (GPU), memoria, y latencia. Optimizaciones: batching, quantization, speculative decoding.',
    },
    relatedTerms: ['llm', 'token'],
    category: 'ai',
  },

  // Web terms
  {
    id: 'serverless',
    term: 'Serverless',
    definition: {
      beginner: 'Una forma de correr código sin preocuparte por servidores. Solo pagas cuando tu código se usa. Como pagar luz solo cuando prendes el foco.',
      intermediate: 'Modelo donde el proveedor maneja la infraestructura. Tu código corre en funciones que escalan automáticamente y cobran por ejecución.',
      advanced: 'FaaS (Functions as a Service) con cold starts, límites de ejecución, y pricing por invocación. Ejemplos: Lambda, Vercel Functions, Cloudflare Workers.',
    },
    example: 'Vercel y Netlify usan serverless - tu sitio escala solo',
    relatedTerms: ['hosting', 'cloud', 'edge'],
    category: 'web',
  },
  {
    id: 'edge',
    term: 'Edge',
    aliases: ['edge computing', 'edge functions'],
    definition: {
      beginner: 'Servidores ubicados cerca de los usuarios en todo el mundo. Hace que tu sitio cargue más rápido porque los datos viajan menos.',
      intermediate: 'Computación distribuida en servidores cercanos al usuario. Reduce latencia ejecutando código en la ubicación más cercana al visitante.',
      advanced: 'CDN con capacidad de compute (edge functions). Runtime limitado (V8 isolates), cold starts mínimos, ideal para personalización y routing.',
    },
    example: 'Cloudflare Workers y Vercel Edge Functions corren en el edge',
    relatedTerms: ['serverless', 'cdn'],
    category: 'web',
  },
  {
    id: 'cdn',
    term: 'CDN',
    definition: {
      beginner: 'Una red de servidores en todo el mundo que guarda copias de tu sitio. Así carga rápido no importa desde dónde lo visiten.',
      intermediate: 'Content Delivery Network. Cachea archivos estáticos (imágenes, CSS, JS) en servidores globales para reducir latencia.',
      advanced: 'Red distribuida con PoPs globales que cachea y sirve contenido. Features: cache invalidation, edge compute, DDoS protection, SSL termination.',
    },
    example: 'Cloudflare, Fastly, y AWS CloudFront son CDNs populares',
    relatedTerms: ['edge', 'hosting'],
    category: 'web',
  },

  // Business terms
  {
    id: 'tier',
    term: 'Tier',
    aliases: ['tiers', 'nivel', 'niveles', 'plan', 'planes'],
    definition: {
      beginner: 'Los diferentes planes de precio de un servicio. Normalmente: gratis, básico, y pro. Cada uno tiene más funciones.',
      intermediate: 'Nivel de servicio con diferentes límites y features. Free tier para probar, paid tiers para uso serio.',
      advanced: 'Estrategia de pricing por segmento. Free tier para adquisición, mid-tier para conversión, enterprise para grandes clientes.',
    },
    example: 'ChatGPT tiene tier gratis, Plus ($20), y Pro ($200)',
    relatedTerms: ['freemium', 'rate-limit'],
    category: 'business',
  },
  {
    id: 'freemium',
    term: 'Freemium',
    definition: {
      beginner: 'Un servicio que puedes usar gratis con límites, pero pagas para tener más. La versión gratis te deja probarlo.',
      intermediate: 'Modelo de negocio: producto gratis con features limitadas, usuarios pagan por más capacidad o funcionalidad premium.',
      advanced: 'Estrategia de adquisición donde free tier demuestra valor antes de conversión. Métricas clave: free-to-paid conversion, LTV/CAC.',
    },
    example: 'Claude, ChatGPT, y Spotify son freemium',
    relatedTerms: ['tier'],
    category: 'business',
  },
  {
    id: 'rate-limit',
    term: 'Rate Limit',
    aliases: ['rate limiting', 'límite de uso', 'rate limits'],
    definition: {
      beginner: 'Un límite de cuántas veces puedes usar algo en un período de tiempo. Como un buffet que limita cuántas veces puedes repetir.',
      intermediate: 'Restricción de requests por tiempo (ej: 100 requests/minuto). Protege el servicio de abuso y diferencia tiers.',
      advanced: 'Throttling basado en tokens, requests, o compute. Implementaciones: sliding window, token bucket, leaky bucket. Headers: X-RateLimit-Remaining.',
    },
    example: 'GPT-4 gratis te limita a ~10-60 mensajes cada 5 horas',
    relatedTerms: ['tier', 'api'],
    category: 'business',
  },
];

// Helper functions
export function getTermById(id: string): GlossaryTerm | undefined {
  return glossary.find(t => t.id === id);
}

export function getTermByText(text: string): GlossaryTerm | undefined {
  const lowerText = text.toLowerCase();
  return glossary.find(t =>
    t.term.toLowerCase() === lowerText ||
    t.aliases?.some(a => a.toLowerCase() === lowerText)
  );
}

export function getAllTermsAndAliases(): string[] {
  const terms: string[] = [];
  glossary.forEach(t => {
    terms.push(t.term);
    if (t.aliases) {
      terms.push(...t.aliases);
    }
  });
  return terms;
}

export function getTermsByCategory(category: GlossaryCategory): GlossaryTerm[] {
  return glossary.filter(t => t.category === category);
}
