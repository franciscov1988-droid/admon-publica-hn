# Administración Pública HN

Sitio web estático (Astro) para publicar análisis y opiniones sobre administración
y políticas públicas en Honduras. Se publica **gratis en GitHub Pages**, se actualiza
solo con **GitHub Actions** y se administra con un **CMS web** (PagesCMS) para crear
entradas sin tocar código.

Incluye:

- 🎨 Diseño institucional azul marino + dorado (tomado de tu logo).
- 🗞️ Las **6 entradas** migradas desde tu blog de Blogger.
- 💬 **Slider de frases aleatorias** (editable).
- ✉️ **Cuadro de suscripción por correo** (vía follow.it, el reemplazo del correo de Blogger).
- 📊 **Cloudflare Web Analytics** (solo pega tu token).
- 📘 Enlace a tu página de **Facebook** y feed **RSS**.
- 🛠️ **CMS** para crear/editar entradas, frases y ajustes.

---

## 1) Subirlo a GitHub (una sola vez)

1. Entra a <https://github.com/new> y crea un repositorio **vacío** (sin README).
   - Nombre recomendado: **`admon-publica-hn`** (si usas otro nombre, mira el punto 5).
   - Visibilidad: **Public**.
2. Sube **todo el contenido de esta carpeta** al repositorio. Dos formas:
   - **Fácil (web):** en el repo → *Add file* → *Upload files* → arrastra todos los
     archivos y carpetas → *Commit*.
   - **Con Git:**
     ```bash
     cd admon-publica-hn
     git init
     git add .
     git commit -m "Primer commit"
     git branch -M main
     git remote add origin https://github.com/franciscov1988-droid/admon-publica-hn.git
     git push -u origin main
     ```

## 2) Activar GitHub Pages

1. En el repo → **Settings** → **Pages**.
2. En **Build and deployment → Source**, elige **GitHub Actions** (no "Deploy from a branch").
3. Listo. Cada vez que hagas un cambio, el sitio se reconstruye solo en 1–2 minutos.
   La dirección será:
   **`https://franciscov1988-droid.github.io/admon-publica-hn/`**

> La primera publicación se dispara sola al subir los archivos. Puedes ver el progreso
> en la pestaña **Actions** del repo.

## 3) Activar el CMS (para crear entradas fácilmente)

1. Entra a **<https://app.pagescms.org>** e inicia sesión con tu cuenta de GitHub.
2. Autoriza el repositorio `admon-publica-hn`.
3. Ya puedes:
   - **Publicaciones** → *Añadir* una nueva entrada (título, categoría, portada, contenido…).
   - **Frases del slider** → agregar o editar las frases que rotan en la portada.
   - **Ajustes del sitio** → cambiar Facebook, token de Cloudflare, suscripción, etc.
4. Al guardar, PagesCMS hace un *commit* y el sitio se actualiza solo.

> El CMS funciona porque el repo incluye el archivo `.pages.yml`. No necesitas instalar nada.

## 4) Conectar los extras

### a) Cloudflare Web Analytics
1. Entra a Cloudflare → **Analytics & Logs → Web Analytics → Add a site**.
2. Pon la URL `franciscov1988-droid.github.io/admon-publica-hn`.
3. Copia el **token** (el valor de `data-cf-beacon`).
4. Pégalo en el CMS → **Ajustes del sitio → Token de Cloudflare**, o directamente en
   `src/data/site.json` (campo `cloudflare_token`).

### b) Suscripción por correo (follow.it)
Un sitio estático no envía correos por sí mismo; follow.it convierte tu **RSS** en
suscripción por correo (igual que FeedBurner hacía en Blogger):
1. Entra a **<https://follow.it>** y registra tu feed:
   `https://franciscov1988-droid.github.io/admon-publica-hn/rss.xml`
2. En follow.it, crea un **formulario** y copia su URL de acción
   (algo como `https://api.follow.it/subscription-form/XXXX/9`).
3. Pégala en el CMS → **Ajustes → URL del formulario de suscripción**
   (campo `suscripcion_form` en `src/data/site.json`).

> Si prefieres otro servicio (MailerLite, Buttondown, Beehiiv…), solo cambia la URL del
> formulario por la que ellos te den.

## 5) Si cambias el nombre del repositorio

Edita **`astro.config.mjs`** y ajusta estas dos líneas, y también la línea `output`
de `.pages.yml`:

```js
const SITE = 'https://TU-USUARIO.github.io';
const BASE = '/NOMBRE-DEL-REPOSITORIO';
```

---

## Editar sin el CMS (opcional, para desarrollo local)

Necesitas Node 18+.

```bash
npm install     # instala dependencias
npm run dev     # vista previa en http://localhost:4321/admon-publica-hn/
npm run build   # genera el sitio en dist/
```

### Estructura
```
src/
  content/posts/     ← las entradas (.md). Añade más aquí o desde el CMS.
  data/frases.json   ← frases del slider.
  data/site.json     ← ajustes: Facebook, Cloudflare, suscripción…
  components/         ← cabecera, pie, slider, tarjetas, suscripción.
  pages/             ← inicio, archivo, categorías, acerca, RSS.
  layouts/           ← plantilla base.
public/images/        ← logo.jpg y banner.jpg (tu logo de Facebook).
.pages.yml            ← configuración del CMS.
.github/workflows/    ← despliegue automático a GitHub Pages.
```

### Crear una entrada a mano
Crea un archivo `src/content/posts/mi-entrada.md`:
```markdown
---
titulo: "Título de la entrada"
descripcion: "Resumen corto que aparece en las tarjetas."
fecha: 2026-10-19
categoria: "Opiniones"            # u "Políticas públicas"
autor: "Administración Pública HN"
portada: "https://.../imagen.jpg" # opcional
destacado: false                  # true = aparece como destacada en portada
borrador: false                   # true = no se publica
---

Aquí va el contenido en Markdown…
```
