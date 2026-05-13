# ZKS — Zagrebački konjički savez

## Stack
- **Astro.js v5**, statički build (`output: 'static'`)
- **Cloudflare Pages**, GitHub repo: `benkoivor96/zgkonjitest`
- Produkcijska domena: `https://zgkonji.hr`
- `astro.config.mjs`: `site: 'https://zgkonji.hr'`

## Git workflow
```bash
git pull origin main   # uvijek prvo ovo
git add [datoteke]
git commit -m "Opis"
git push origin main
```
Sve direktno na `main`. Ne koristiti worktreeove.

## CMS
- Decap CMS na `/admin`, GitHub backend
- Service account: `zks-cms-admin` (email: `zks.cms.admin@gmail.com`)
- Collections: `vijesti`, `kalendar`, `sponzori`, `rezultati`, `dokumenti`, `stranice`

## Kritične konvencije

### Content collections (Astro v5)
`vijest.id` uključuje `.md` ekstenziju — **uvijek** koristiti:
```js
vijest.id.replace(/\.md$/, '')
```

### URL struktura
- Vijesti: `/slug` (root level) — slug = originalni WordPress slug
- Vijesti arhiva: `/vijesti/`
- Discipline: `/preponsko-jahanje`, `/dresurno-jahanje`, `/daljinsko-jahanje`
- Natjecanja: `/natjecanja` (redirect s `/prvenstvo-zagreba`)

### discipline enum
```
'preponsko' | 'dresurno' | 'daljinsko' | 'vise'
```
Ne koristiti `'višeboj'` — uzrokuje build error.

### og:image za vijesti
U `src/pages/[...slug].astro` — koristiti `https://zgkonji.hr${vijest.data.image}`.

## Ključne datoteke
| Datoteka | Opis |
|---|---|
| `src/layouts/BaseLayout.astro` | Glavni layout, canonical, OG tagovi |
| `src/components/Nav.astro` | Sva navigacija (desktop + mobile) |
| `src/pages/[...slug].astro` | Dinamička ruta za vijesti |
| `src/pages/vijesti/index.astro` | Arhiva vijesti |
| `public/admin/config.yml` | CMS konfiguracija |
| `public/_redirects` | Cloudflare 301 redirecti |
| `src/content.config.ts` | Schema za content collections |

## Build i provjera
```bash
npm run build   # mora proći bez grešaka
```
Generira `dist/sitemap-index.xml` automatski.
