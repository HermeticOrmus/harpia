# Asset Specifications - Construye con IA

## General Requirements

All assets must:
- Have **transparent backgrounds** (PNG or WebP with alpha channel)
- Use **no solid background shapes** (no circles, hexagons, or rectangles behind the icon)
- Be optimized for web (WebP preferred, <100KB)
- Work on dark backgrounds (stone-950: #0c0a09)

---

## Mascot: turpi_mascot.webp

**Current Issue**: Has non-transparent background elements

**Required**:
- Transparent background
- Just the bird character, no background shapes
- Recommended size: 200x200px or larger (will be scaled down)
- Style: The orange/black bird with headphones - keep the character design

---

## Category Icons

**Current Issues**:
- Solid hexagon/circle backgrounds
- Cannot be recolored dynamically
- Look jarring on dark UI

**Required for each**:
- Transparent background
- Line art or flat icon style (single color)
- **Monochrome** - single color that can be tinted via CSS
- Size: 128x128px minimum
- No background shapes (no hexagons, circles, squares)

### Icons Needed:

| File | Category | Suggested Icon |
|------|----------|----------------|
| `icon_llm.webp` | Asistentes IA | Brain with speech bubble or neural network |
| `icon_coding.webp` | Asistentes de Código | Code brackets `</>` or terminal window |
| `icon_images.webp` | Generación de Imágenes | Image frame or paintbrush |
| `icon_hosting.webp` | Hosting y Deploy | Cloud with up arrow |
| `icon_database.webp` | Bases de Datos | Database cylinder or data stack |
| `icon_automation.webp` | Automatización | Gears, lightning bolt, or flow arrows |
| `icon_design.webp` | Diseño | Palette, pen tool, or layers |

**Color Note**: Export as white (#FFFFFF) or very light gray. The UI will apply color tinting via CSS filter or SVG colorization.

---

## Skill Level Badges

**Current Issues**:
- Have solid hexagon backgrounds
- Cannot integrate with the pill-button UI

**Required**:
- Transparent background
- Just the icon/symbol, no background shape
- Size: 64x64px minimum
- Monochrome (white or light gray for tinting)

### Badges Needed:

| File | Level | Color Theme | Suggested Icon |
|------|-------|-------------|----------------|
| `skill_principiante.webp` | Principiante | Emerald (#10b981) | Seedling/sprout |
| `skill_intermedio.webp` | Intermedio | Amber (#f59e0b) | Growing plant |
| `skill_avanzado.webp` | Avanzado | Violet (#8b5cf6) | Full tree or flower |

---

## Hero Banner: hero_banner.png

**Status**: Works well as-is (dark abstract design)

**Notes**:
- Current design with orange/blue neural network waves works
- Opacity is controlled in CSS (30%)
- No changes needed unless you want to update the style

---

## OG Image: og_image.png

**Required**:
- Dimensions: 1200x630px (standard OG image size)
- Can have solid background (this is for social sharing)
- Should include:
  - Site title: "Construye con IA"
  - Tagline: "Las herramientas para salir adelante"
  - Turpi mascot (optional)
  - Dark theme consistent with site

---

## Technical Notes

### For Transparent WebP Export:
- Photoshop: File > Export > Save for Web > WebP with transparency
- Figma: Export with "Include background" unchecked
- GIMP: Export as WebP with "Save alpha channel" checked
- Canva: Download as PNG (transparent), convert to WebP

### For Monochrome Icons:
Best practice is to create icons in pure white (#FFFFFF) on transparent background. This allows CSS to apply any color via:
```css
filter: brightness(0) saturate(100%) invert(X%) sepia(X%) ...
```

Or use SVG format for perfect color control:
```html
<svg fill="currentColor">...</svg>
```

---

## File Checklist

### Original (v1) - Have white/solid backgrounds
- [ ] turpi_mascot.webp - Has hexagon background
- [ ] icon_llm.webp - Has hexagon background
- [ ] icon_coding.webp - Has circle background
- [ ] icon_images.webp - Has background shape
- [ ] icon_hosting.webp - Has background shape
- [ ] icon_database.webp - Has hexagon background
- [ ] icon_automation.webp - Has background shape
- [ ] icon_design.webp - Has background shape
- [ ] skill_principiante.webp - Has hexagon background
- [ ] skill_intermedio.webp - Has hexagon background
- [ ] skill_avanzado.webp - Has hexagon background
- [x] hero_banner.png - OK as-is
- [ ] og_image.png - Replaced by v2

### V2 Assets - Currently in use (FIXED)
- [x] turpi_mascot_v2.png - Cute bird character (transparent background)
- [x] icon_llm_v2.svg - Detailed illustration (transparent background)
- [x] icon_coding_v2.svg - Detailed illustration (transparent background)
- [x] icon_images_v2.svg - Detailed illustration (transparent background)
- [x] icon_hosting_v2.svg - Detailed illustration (transparent background)
- [x] icon_database_v2.svg - Detailed illustration (transparent background)
- [x] icon_automation_v2.svg - Detailed illustration (transparent background)
- [x] icon_design_v2.svg - Detailed illustration (transparent background)
- [x] skill_principiante_v2.svg - Seedling illustration (transparent background)
- [x] skill_intermedio_v2.svg - Plant illustration (transparent background)
- [x] skill_avanzado_v2.svg - Tree illustration (transparent background)
- [x] og_image_v2.png - Dark background with title and bird head (for social sharing)

---

## Status: All v2 Assets Fixed (2024-12-09)

All v2 SVG assets now have transparent backgrounds. The white rectangle paths have been removed from the SVG files.
