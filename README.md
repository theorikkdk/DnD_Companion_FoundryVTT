# DnD Companion FoundryVTT (Phase 1)

Application web compagnon **mobile-first** pour les joueurs D&D 5e sur Foundry VTT.

> Cette première version utilise uniquement des **fausses données locales**.
> Il n'y a **aucune intégration Foundry** pour le moment.

## Objectif du projet

Offrir une interface plus pratique que Foundry en jeu, surtout sur téléphone :
- rapide à lire,
- simple à manipuler,
- pensée tactile,
- en mode sombre.

## Stack technique

- React
- Vite
- TypeScript
- Tailwind CSS
- PWA (manifest + service worker)

## Installation

```bash
npm install
```

## Lancement en développement

```bash
npm run dev
```

## Build production

```bash
npm run build
npm run preview
```

## Écrans disponibles (phase 1)

1. Connexion (interface visuelle fictive)
2. Favoris
3. Fiche personnage
4. Actions
5. Sorts
6. Inventaire
7. Lanceur de dés

## Structure simple du projet

```text
src/
  components/      # composants réutilisables (Layout, Card, Nav, etc.)
  data/            # fausses données locales du personnage
  pages/           # écrans de l'application
  types/           # types TypeScript du domaine D&D
  App.tsx          # logique principale + navigation
  main.tsx         # point d'entrée React + enregistrement SW
  styles.css       # styles globaux et Tailwind
public/
  manifest.webmanifest
  sw.js
```

## Données fictives incluses

Le personnage local contient :
- nom, classe, niveau, portrait,
- PV, CA, vitesse,
- bonus d'attaque de sort, DD de sort,
- ressources, conditions,
- actions,
- sorts,
- inventaire,
- armes équipées,
- favoris multi-types (actions, sorts, objets, armes).

## Notes pour débuter facilement

- Le code est volontairement simple, avec une navigation par état local dans `App.tsx`.
- Chaque écran est isolé dans `src/pages` pour être plus lisible.
- Les composants UI communs sont dans `src/components` pour éviter les duplications.

## Astuce si ton outil refuse l'extraction

Si tu vois le message **"Les fichiers binaires ne sont pas pris en charge"**, c'est souvent lié à des images `.png` dans le commit.

Dans cette version, les icônes PWA sont passées en **SVG texte** (`public/icon.svg`, `public/maskable-icon.svg`) pour éviter ce blocage.
