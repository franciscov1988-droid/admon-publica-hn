const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Construye una ruta respetando la base del sitio (p. ej. /admon-publica-hn). */
export function url(path = '/'): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${p}`;
}

/** Convierte un título a slug para URLs. */
export function slugify(texto: string): string {
  return texto
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim().replace(/\s+/g, '-').replace(/-+/g, '-');
}

/** Formatea una fecha en español: "20 de julio de 2020". */
export function fechaLarga(fecha: Date): string {
  return new Intl.DateTimeFormat('es-HN', {
    day: 'numeric', month: 'long', year: 'numeric',
  }).format(fecha);
}

/** Mapea la categoría a su slug de ruta. */
export function categoriaSlug(categoria: string): string {
  return slugify(categoria);
}
