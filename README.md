# Clinique Kerthan — Site web Next.js

Site vitrine de la **Clinique Kerthan** (Douala, Cameroun), construit avec **Next.js 16** (App Router) à partir du design system fourni.

## Structure du projet

```
kerthan/
├── design-system/          # Template DS original (référence)
│   ├── components/         # Composants JSX source
│   ├── tokens/             # Tokens CSS originaux
│   ├── templates/          # Page HTML prototype
│   ├── guidelines/         # Spécimens visuels
│   └── readme.md           # Guide de marque complet
├── public/
│   └── assets/             # Logos et visuels (remplacer par les fichiers officiels)
├── src/
│   ├── app/                # Routes Next.js (layout, page d'accueil)
│   ├── components/
│   │   ├── ui/             # Design system (core, forms, brand)
│   │   ├── layout/         # TopBar, Header, Footer
│   │   └── sections/       # Sections de la page d'accueil
│   ├── lib/                # Contenu, base Turso, auth admin
│   └── styles/
│       ├── tokens/         # Tokens CSS actifs
│       ├── components.css  # Styles des composants UI
│       └── website.css     # Styles de mise en page
└── package.json
```

## Démarrage

```bash
npm install
cp .env.example .env
npm run db:setup    # Crée la base locale et importe le contenu initial
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) — backoffice : [http://localhost:3000/admin](http://localhost:3000/admin).

### Backoffice (`/admin`)

Contenu administrable via Turso (SQLite distant) avec workflow **brouillon → Publier**.

| Page | Rôle |
|------|------|
| `/admin/contenu` | Textes, services, histoire, contact, footer, SEO |
| `/admin/slider` | Slides hero (ajout / suppression / ordre) |
| `/admin/blog` | Articles blog + texte de la section accueil |
| `/admin/equipe` | Fiches médecins |
| `/admin/demandes` | Historique formulaire contact |
| `/admin/parametres` | Maintenance + mentions légales |
| `/admin/preview` | Prévisualisation du brouillon |

**Images** : dans le backoffice, utilisez **Choisir une image** sur tous les champs photo (services, histoire, équipe, slider, SEO). Les fichiers sont enregistrés dans `public/assets/uploads/`.

### Base de données (Turso)

1. Créer un compte gratuit sur [turso.tech](https://turso.tech)
2. Créer une base et récupérer `TURSO_DATABASE_URL` + `TURSO_AUTH_TOKEN`
3. Les ajouter dans `.env` (local) et Vercel (production)
4. Déployer puis exécuter une fois en local contre la base distante :

```bash
npm run db:push
npm run db:seed
```

Sans Turso en local, la base fichier `./data/kerthan.db` est utilisée automatiquement.

### Compte admin

```bash
# Générer le hash du mot de passe
npm run admin:hash -- VotreMotDePasse

# Ajouter dans .env :
ADMIN_EMAIL=webmaster@kerthan.org
ADMIN_PASSWORD_HASH_B64=<valeur générée par npm run admin:hash>
SESSION_SECRET=<chaîne aléatoire 32+ caractères>
```

> **Note :** utilisez `ADMIN_PASSWORD_HASH_B64` (pas le hash brut) — Next.js interprète les `$` du bcrypt comme des variables d'environnement.

## Assets

Les fichiers dans `public/assets/` :

- `logo-seal.png` — logo officiel 20 ans (en-tête, pied de page)
- `logo-20-years.png` — même fichier, affiché en grand dans le hero
- `motif-heartbeat.svg` — motif décoratif (placeholder, à remplacer si besoin)

## Design system

Le guide de marque complet (voix, couleurs, typo, iconographie) se trouve dans [`design-system/readme.md`](design-system/readme.md).

Les composants React ont été migrés de `design-system/components/` vers `src/components/ui/` avec :

- **lucide-react** à la place de Lucide UMD
- **next/font** pour Plus Jakarta Sans, Lexend et Caveat
- CSS global consolidé (plus de `injectStyles()`)

## Déploiement sur Vercel

Le projet est prêt pour Vercel (Next.js App Router, page statique, optimisations images/fonts).

### 1. Importer le dépôt

1. [vercel.com/new](https://vercel.com/new) → importer le repo Git
2. Framework détecté automatiquement : **Next.js**
3. Build : `next build` · Output : défaut Vercel

### 2. Variables d'environnement

| Variable | Valeur | Environnement |
|----------|--------|---------------|
| `NEXT_PUBLIC_SITE_URL` | `https://www.kerthan.org` | Production |
| `TURSO_DATABASE_URL` | `libsql://...` | Production |
| `TURSO_AUTH_TOKEN` | *(token Turso)* | Production |
| `ADMIN_EMAIL` | `webmaster@kerthan.org` | Production |
| `ADMIN_PASSWORD_HASH_B64` | *(voir `npm run admin:hash`)* | Production |
| `SESSION_SECRET` | *(32+ caractères aléatoires)* | Production |
| `MAINTENANCE_MODE` | `true` ou `false` (fallback) | Tous |
| `SMTP_HOST` | `smtp.siteprotect.com` | Production |
| `SMTP_PORT` | `587` | Production |
| `SMTP_USER` | `webmaster@kerthan.org` | Production |
| `SMTP_PASSWORD` | *(mot de passe SMTP)* | Production |
| `SMTP_FROM` | `Clinique Kerthan <webmaster@kerthan.org>` | Production |
| `CONTACT_TO` | `webmaster@kerthan.org` | Production |

Sur les previews Vercel, l'URL est déduite de `VERCEL_URL` si la variable n'est pas définie.

### Formulaire de contact (SMTP)

Le formulaire envoie les demandes via `POST /api/contact` et Nodemailer.

1. Renseigner `SMTP_PASSWORD` dans `.env` (local) ou dans Vercel
2. Redémarrer `npm run dev`
3. Tester une demande depuis la section **Contact**

```env
SMTP_HOST=smtp.siteprotect.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=webmaster@kerthan.org
SMTP_PASSWORD=votre_mot_de_passe
CONTACT_TO=webmaster@kerthan.org
```

### Mode maintenance

Le mode maintenance se gère depuis **Admin → Paramètres** (interrupteur, sans redéployer).

La variable `MAINTENANCE_MODE=true` reste un **fallback** si la base est indisponible.

### 3. Domaine personnalisé

Dans Vercel → **Settings → Domains** : ajouter `www.kerthan.org` et configurer les DNS chez le registrar.

### 4. Fichiers exclus du déploiement

`.vercelignore` exclut `design-system/` et `uploads/` (référence locale uniquement).

### Optimisations incluses

- Images AVIF/WebP via `next/image`
- Polices auto-hébergées (`next/font`)
- `sitemap.xml` et `robots.txt` générés
- En-têtes de sécurité HTTP
- Cache long sur `/assets/*`
- Données structurées Schema.org (clinique médicale)
- Page d'accueil pré-rendue (statique)

## Scripts

| Commande           | Description              |
|--------------------|--------------------------|
| `npm run dev`      | Serveur de développement |
| `npm run build`    | Build de production      |
| `npm run start`    | Serveur de production    |
| `npm run lint`     | ESLint                   |
| `npm run typecheck`| Vérification TypeScript  |
| `npm run db:push`  | Appliquer le schéma DB     |
| `npm run db:seed`   | Importer le contenu initial|
| `npm run db:setup`  | `db:push` + `db:seed`      |
| `npm run admin:hash`| Hash bcrypt mot de passe   |
