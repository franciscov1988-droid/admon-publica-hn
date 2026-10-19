import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import site from '../data/site.json';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export async function GET(context) {
  const posts = (await getCollection('posts'))
    .filter((p) => !p.data.borrador)
    .sort((a, b) => b.data.fecha.valueOf() - a.data.fecha.valueOf());

  return rss({
    title: site.nombre,
    description: site.descripcion,
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.titulo,
      pubDate: p.data.fecha,
      description: p.data.descripcion,
      author: p.data.autor,
      categories: [p.data.categoria],
      link: `${BASE}/posts/${p.id}/`,
    })),
    customData: `<language>es-hn</language>`,
  });
}
