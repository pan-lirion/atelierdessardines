---
name: project-atelierdessardines
description: Site vitrine + livret d'accueil L'Atelier des Sardines (Wimereux) — stack, structure, décisions clés
metadata:
  type: project
---

Site Next.js (v16) App Router pour la location saisonnière L'Atelier des Sardines, Wimereux (Côte d'Opale).

**Stack**: Next.js 16 App Router, TypeScript, Tailwind CSS, Framer Motion, next-intl (i18n), Lucide icons.

**Structure**:
- `src/app/[locale]/` — routing i18n (fr/en/de/nl), layout + page accueil + livret
- `src/components/home/` — sections page d'accueil (Hero, Logement, Couchages, Equipements, Exterieur, Localisation, Teletravail, CTAReservation)
- `src/components/livret/` — LivretHero, LivretNav, 14 sections (SectionBienvenue, SectionAcces, etc.)
- `src/components/shared/` — Header (sélecteur langue), Footer, FadeIn
- `src/i18n/` — routing.ts, request.ts, navigation.ts
- `src/proxy.ts` — next-intl middleware (Next.js 16 utilise "proxy" pas "middleware")
- `messages/` — fr.json, en.json, de.json, nl.json

**I18n** (next-intl):
- Langues : FR (défaut), EN, DE, NL
- URLs : /fr, /en, /de, /nl — redirection auto depuis /
- Sélecteur de langue dans le Header : drapeaux emoji + code 2 lettres, dropdown desktop + pills mobile
- Server components → `getTranslations()` (async)
- Client components → `useTranslations()` hook
- Navigation locale-aware via `@/i18n/navigation` (Link, useRouter, usePathname)

**Contenu livret** : sections avec instructions pour tous les appareils + règles + contacts d'urgence locaux + alentours. Les noms de lieux/restaurants restent en français dans toutes les langues.

**Why:** Site de location saisonnière avec cible internationale (touristes BE/NL/DE/EN)
**How to apply:** Toujours utiliser les composants de navigation de `@/i18n/navigation` plutôt que `next/link` directement. Pour ajouter du contenu traduit, ajouter dans les 4 fichiers messages/.
