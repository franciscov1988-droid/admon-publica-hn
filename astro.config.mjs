// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ─────────────────────────────────────────────────────────────
//  AJUSTA ESTAS DOS LÍNEAS SI CAMBIAS EL NOMBRE DEL REPOSITORIO
//  - SITE:  https://TU-USUARIO.github.io
//  - BASE:  /NOMBRE-DEL-REPOSITORIO
//  (Por defecto: usuario franciscov1988-droid, repo admon-publica-hn)
// ─────────────────────────────────────────────────────────────
const SITE = 'https://franciscov1988-droid.github.io';
const BASE = '/admon-publica-hn';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
