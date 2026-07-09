# Clinique Kerthan — Site web Next.js

Site vitrine de la **Clinique Kerthan** (Douala, Cameroun), construit avec **Next.js 16** (App Router).

## Démarrage local

```bash
npm install
cp .env.example .env
# Renseigner DATABASE_URL (PostgreSQL local ou distante)
npm run db:setup
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) — backoffice : [http://localhost:3000/admin](http://localhost:3000/admin).

## Backoffice (`/admin`)

Contenu administrable via **PostgreSQL** avec workflow **brouillon → Publier**.

| Page | Rôle |
|------|------|
| `/admin/contenu` | Textes, services, histoire, contact, footer, SEO |
| `/admin/slider` | Slides hero |
| `/admin/blog` | Articles blog |
| `/admin/equipe` | Fiches médecins |
| `/admin/demandes` | Historique formulaire contact |
| `/admin/parametres` | Maintenance + mentions légales |
| `/admin/preview` | Prévisualisation du brouillon |

## Base de données (PostgreSQL)

Le projet utilise **uniquement PostgreSQL** via `DATABASE_URL`.

```bash
npm run db:push   # Appliquer le schéma
npm run db:seed   # Importer le contenu initial
npm run db:setup  # Les deux
```

### Compte admin

```bash
npm run admin:hash -- VotreMotDePasse
```

Ajouter dans `.env` :

```env
ADMIN_EMAIL=webmaster@kerthan.org
ADMIN_PASSWORD_HASH_B64=<valeur générée>
SESSION_SECRET=<chaîne aléatoire 32+ caractères>
```

## Déploiement sur Coolify

### 1. Créer PostgreSQL dans Coolify

1. **+ New Resource** → **Database** → **PostgreSQL**
2. Nom : `kerthan-db`
3. Notez user, mot de passe, nom de base

### 2. Créer l'application

1. **+ New Resource** → **Application**
2. Source : GitHub → `yarabyte/kerthan`
3. Build pack : **Dockerfile** (fichier `Dockerfile` à la racine)
4. Port : **3000**

### 3. Lier PostgreSQL à l'application

Dans l'application → **Environment Variables** :

| Variable | Valeur |
|----------|--------|
| `DATABASE_URL` | URL interne Coolify du Postgres (ex. `postgresql://user:pass@kerthan-db:5432/kerthan`) |
| `NEXT_PUBLIC_SITE_URL` | `https://www.kerthan.org` |
| `ADMIN_EMAIL` | `webmaster@kerthan.org` |
| `ADMIN_PASSWORD_HASH_B64` | *(voir `npm run admin:hash`)* |
| `SESSION_SECRET` | *(32+ caractères aléatoires)* |
| `SMTP_HOST` | `smtp.siteprotect.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | `webmaster@kerthan.org` |
| `SMTP_PASSWORD` | *(mot de passe SMTP)* |
| `SMTP_FROM` | `Clinique Kerthan <webmaster@kerthan.org>` |
| `CONTACT_TO` | `webmaster@kerthan.org` |
| `MAINTENANCE_MODE` | `false` |

Coolify peut injecter `DATABASE_URL` automatiquement si vous **liez** le service PostgreSQL à l'application (bouton **Connect to Database**).

### 4. Volume persistant pour les images uploadées

Dans l'application Coolify → **Storages** (Volumes) :

| Chemin conteneur | Description |
|------------------|-------------|
| `/app/public/assets/uploads` | Photos uploadées via le backoffice |

Sans ce volume, les images uploadées disparaissent au redéploiement.

### 5. Initialiser la base (une fois)

Depuis **votre Mac** (avec l’URL Postgres de Coolify — souvent visible dans le service PostgreSQL → **Connection Details**) :

```bash
DATABASE_URL="postgresql://user:pass@IP-DU-SERVEUR:5432/kerthan" npm run db:setup
```

> L’image Docker de production ne contient pas les outils de migration — l’initialisation se fait une fois en local ou via SSH sur le serveur avec le repo cloné.

### 6. Domaine

Coolify → application → **Domains** → ajouter `www.kerthan.org` et configurer les DNS.

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run db:setup` | Schéma + contenu initial |
| `npm run admin:hash` | Hash bcrypt mot de passe |
