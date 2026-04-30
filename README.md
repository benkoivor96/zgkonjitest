# ZKS Website — Zagrebački konjički savez

## Što je Astro?

Astro je alat koji ti omogućava da pišeš komponente (header, nav, footer) JEDNOM,
a onda ih svaka stranica koristi. Kad buildaš, generira čiste HTML fajlove —
Cloudflare vidi isti rezultat kao i prije, ali ti imaš puno čišći kod.

## Struktura projekta

```
zks-astro/
├── public/                    ← Statički fajlovi (slike, fontovi)
│   ├── images/
│   │   ├── logo.png
│   │   ├── preponsko.jpg
│   │   ├── dresurno.jpg
│   │   └── daljinsko.jpg
│   └── admin/                 ← Decap CMS admin panel (za kasnije)
│       └── index.html
│
├── src/
│   ├── components/            ← DIJELJENE KOMPONENTE
│   │   ├── TopBar.astro       ← Novosti traka (1 fajl → sve stranice)
│   │   ├── Header.astro       ← Logo + naziv (1 fajl → sve stranice)
│   │   ├── Nav.astro          ← Navigacija (1 fajl → sve stranice)
│   │   ├── Footer.astro       ← Podnožje (1 fajl → sve stranice)
│   │   └── ScrollReveal.astro ← Scroll animacije
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro   ← GLAVNI LAYOUT — spaja sve komponente
│   │
│   ├── pages/                 ← STRANICE (svaka = jedna URL ruta)
│   │   ├── index.astro        ← zgkonji.hr/
│   │   ├── konjicki-sport.astro ← zgkonji.hr/konjicki-sport
│   │   └── o-nama.astro       ← zgkonji.hr/o-nama
│   │
│   ├── content/               ← CMS sadržaj (za kasnije)
│   │   └── vijesti/
│   │
│   └── styles/
│       └── global.css         ← GLOBALNI CSS (boje, fontovi, tipografija)
│
├── astro.config.mjs           ← Astro konfiguracija
├── package.json
└── tsconfig.json
```

## Kako radi?

### PRIJE (plain HTML):
```
index.html      → 800+ linija (header + nav + sadržaj + footer + CSS)
konjicki-sport.html → 600+ linija (ISTI header + nav + DRUGI sadržaj + ISTI footer + CSS)
o-nama.html     → 700+ linija (ISTI header + nav + TREĆI sadržaj + ISTI footer + CSS)
```
Promjena headera = otvoriti SVE fajlove i mijenjati

### SADA (Astro):
```
Header.astro    → 20 linija (jednom napisano)
Nav.astro       → 50 linija (jednom napisano)
Footer.astro    → 40 linija (jednom napisano)
BaseLayout.astro → Spaja header + nav + [sadržaj stranice] + footer

index.astro         → SAMO sadržaj naslovnice
konjicki-sport.astro → SAMO sadržaj discipline stranice  
o-nama.astro        → SAMO sadržaj o nama stranice
```
Promjena headera = otvoriti JEDAN fajl (Header.astro)

### Kad buildaš (`npm run build`):
Astro generira iste čiste HTML fajlove u `dist/` folder.
Cloudflare Pages ih servira isto kao i prije.

## Kako pokrenuti lokalno?

```bash
npm install
npm run dev        # lokalni server na localhost:4321
npm run build      # generira dist/ folder za deploy
```

## Cloudflare Pages setup

1. Poveži GitHub repo s Cloudflare Pages
2. Build command: `npm run build`
3. Output directory: `dist`
4. Gotovo! Svaki push na main automatski rebuilda site.
