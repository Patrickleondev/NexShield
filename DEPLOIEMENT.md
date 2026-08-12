# Déploiement et configuration

## Architecture

```
Navigateur
    │
    ├── Site statique (Vite + React)         → Netlify CDN
    │
    ├── POST /api/contact  ──→ fonction Netlify ──→ Resend ──→ boîte courriel
    │
    ├── POST /api/chat     ──→ fonction Netlify ──→ OpenRouter (Nemotron 3 Ultra)
    │
    └── /admin/            ──→ Decap CMS ──→ pull request GitHub ──→ rebuild
```

Aucune base de données. Les articles sont des fichiers Markdown dans `content/`,
les demandes de contact partent en courriel, et **aucune clé API n'atteint le
navigateur** : tout passe par les fonctions.

---

## 1. Variables d'environnement

À saisir dans **Netlify → Site settings → Environment variables**. Ne jamais les
mettre dans le dépôt ; `.env` est ignoré par Git, `.env.example` sert de modèle.

| Variable | Requise par | Où l'obtenir |
|---|---|---|
| `OPENROUTER_API_KEY` | `/api/chat` | [openrouter.ai/settings/keys](https://openrouter.ai/settings/keys) |
| `OPENROUTER_MODELE` | `/api/chat` | Défaut : `nvidia/nemotron-3-ultra-550b-a55b:free` |
| `RESEND_API_KEY` | `/api/contact` | [resend.com/api-keys](https://resend.com/api-keys) |
| `CONTACT_TO` | `/api/contact` | Une ou plusieurs adresses, séparées par des virgules |
| `CONTACT_FROM` | `/api/contact` | Adresse expéditrice **vérifiée chez Resend** |
| `SITE_URL` | les deux | URL publique du site |

**Format du fichier `.env` local** : une variable par ligne, `CLE=valeur`, sans
espace autour du `=`. Une valeur seule sur une ligne serait interprétée comme une
commande par les outils qui chargent le fichier — c'est un incident déjà survenu
sur ce projet.

---

## 2. Courriel — Resend

Le plan gratuit couvre 3 000 courriels par mois, largement suffisant.

1. Créer un compte sur [resend.com](https://resend.com).
2. Créer une clé API → `RESEND_API_KEY`.

### Sans nom de domaine (pour tester tout de suite)

```
CONTACT_FROM=onboarding@resend.dev
CONTACT_TO=<l'adresse de votre compte Resend>
```

`onboarding@resend.dev` est l'expéditeur de test de Resend. **Il n'envoie qu'à
l'adresse du compte Resend** — inutile d'y mettre les adresses de l'équipe, elles
seraient rejetées. C'est suffisant pour valider que la chaîne fonctionne.

### Avec un nom de domaine (production)

1. Resend → *Domains* → ajouter votre domaine.
2. Publier les enregistrements DNS demandés : **SPF**, **DKIM**, et de préférence
   **DMARC**. Attendre la vérification.
3. `CONTACT_FROM` doit appartenir à ce domaine, par exemple `site@nexshield.tg`.

### Plusieurs destinataires

`CONTACT_TO` accepte une liste séparée par des virgules, sans espace obligatoire :

```
CONTACT_TO=patrick@nexshield.tg,dora@nexshield.tg,contact@nexshield.tg
```

Toute l'équipe reçoit la demande en même temps — personne n'attend que quelqu'un
d'autre fasse suivre. Les adresses invalides sont ignorées silencieusement ;
si aucune n'est valide, la fonction renvoie une erreur de configuration.

Alternative une fois le domaine en place : créer un **alias de groupe**
(`contact@nexshield.tg` redistribuant vers l'équipe) et ne mettre que celui-ci.
Plus propre à long terme, car la liste se gère côté messagerie et non dans une
variable d'environnement.

> Sans SPF et DKIM correctement publiés, vos courriels partent en indésirables.
> Pour une société de sécurité, c'est le genre de détail qu'un prospect remarque.

### Pourquoi pas Netlify Forms

Netlify propose un traitement de formulaires intégré, sans code. Nous ne
l'utilisons pas : le plan gratuit est plafonné à **100 soumissions par mois**, les
données sont stockées chez Netlify, et le filtrage anti-robots est moins fin que
le nôtre. Notre fonction n'a pas de plafond et garde la maîtrise des données.

Ne pas activer la détection automatique de formulaires : elle ferait doublon.

---

## 3. Administration des articles — Decap CMS

L'interface est sur `/admin/`. Elle publie en ouvrant une **pull request** sur
GitHub : rien ne part en ligne sans relecture, ce qui reste cohérent avec le
processus de revue de la société.

### Activation, une seule fois

1. Netlify → **Identity** → *Enable Identity*.
2. Identity → *Registration* → **Invite only** — impératif, sinon n'importe qui
   peut créer un compte sur votre administration.
3. Identity → *Services* → **Enable Git Gateway**.
4. Identity → *Invite users* → inviter les membres de l'équipe.
5. Chaque membre accepte l'invitation et définit son mot de passe.

Activer aussi l'**authentification à deux facteurs** sur les comptes GitHub ayant
accès au dépôt : Git Gateway agit en leur nom.

### Collections disponibles

| Collection | Dossier | Champs notables |
|---|---|---|
| Writeups | `content/writeups/` | Plateforme, difficulté, techniques ATT&CK, **case « cible autorisée »** |
| Preuves de concept | `content/poc/` | CVE, CWE, sévérité, CVSS, **statut de divulgation**, **éditeur prévenu** |
| Renseignement CTI | `content/cti/` | Niveau de confiance, secteurs, zones, acteurs, **sources obligatoires** |
| Actualités | `content/actualites/` | Catégorie |

Trois garde-fous sont intégrés au formulaire, délibérément :

- Un **writeup** exige de confirmer que la cible était un environnement
  d'entraînement ou un périmètre autorisé.
- Une **preuve de concept** exige un statut de divulgation et la confirmation que
  l'éditeur a été prévenu. Publier une faille non corrigée sur un produit réel
  vous expose et nuit à des tiers.
- Une **note CTI** exige ses sources. Sans source, une note de renseignement n'a
  aucune valeur et engage votre crédibilité.

### Supprimer la dépendance au CDN

L'administration charge Decap CMS depuis unpkg. C'est le montage documenté, mais
c'est une dépendance de chaîne d'approvisionnement dans une interface qui a les
droits d'écriture sur le dépôt. Pour la supprimer :

```sh
npm i decap-cms-app
```
puis servir le bundle depuis `/admin/` et resserrer la CSP `/admin/*` de
`netlify.toml` à `script-src 'self'`.

---

## 4. Sécurité du site

`netlify.toml` définit, pour toutes les pages publiques : CSP stricte
(`script-src 'self'`), HSTS avec preload, `X-Frame-Options: DENY`,
`X-Content-Type-Options: nosniff`, `Referrer-Policy` et `Permissions-Policy`.

`/admin/*` a sa propre politique, plus permissive mais isolée, et
`X-Robots-Tag: noindex`.

**Si vous ajoutez un script tiers** (analytique, widget), la CSP le bloquera.
C'est voulu : ajoutez l'origine explicitement plutôt que d'affaiblir la règle.

### Protections des fonctions

| Fonction | Mesures |
|---|---|
| `/api/contact` | Limite de 3 envois par IP et par 10 min, piège à robots, délai minimal de remplissage, bornage et nettoyage des champs, neutralisation des injections d'en-tête, échappement HTML |
| `/api/chat` | Limite de 15 messages par IP et par 5 min, historique borné à 20 messages et 2 000 caractères, **rôle `system` refusé côté client**, délai d'attente de 30 s, consigne résistante à l'injection de prompt |

Les compteurs sont en mémoire d'instance : ce sont des ralentisseurs, pas une
protection forte. Pour du sérieux, ajouter une règle de limitation au niveau du
WAF (Cloudflare est déjà dans vos compétences).

---

## 5. Développement local

```sh
npm install
npx netlify dev        # sert le site ET les fonctions sur /api/*
```

Sans `netlify dev`, `npm run dev` ne sert pas les fonctions et les appels
`/api/*` échoueront.

### Bug connu

`npm run build` peut échouer sur `Cannot find module '@rollup/rollup-linux-x64-gnu'`
— bug npm de dépendance optionnelle. Correctif :

```sh
npm i @rollup/rollup-linux-x64-gnu --no-save
```

---

## 6. Reste à faire

- [ ] Brancher `ChatWidget` sur `/api/chat` (il simule encore les réponses)
- [ ] Brancher le formulaire de `Contact` sur `/api/contact`
- [ ] Page Blog : lecture des Markdown de `content/`, filtres par collection
- [ ] Flux CTI automatique : CISA KEV et NVD, via une fonction planifiée
- [ ] Fond animé de type globe
- [ ] Nom de domaine et messagerie d'entreprise
- [ ] Vendoriser Decap CMS pour supprimer la dépendance CDN
