# Projet Foundry Companion

## Objectif
Créer une application web compagnon pour Foundry VTT, orientée joueurs D&D 5e.

L'application doit être pensée pour une utilisation rapide et confortable en partie, principalement sur téléphone, mais aussi sur tablette.

## Vision produit
L'application n'est pas un remplacement complet de Foundry VTT.
C'est une interface compagnon dédiée aux joueurs, plus lisible, plus ergonomique et plus adaptée au tactile que l'interface Foundry classique.

## Contraintes produit
- Interface responsive téléphone et tablette
- Design moderne, sombre, ergonomique et dynamique
- Navigation simple et tactile
- Application PWA installable
- Première phase avec fausses données uniquement
- Pas d'intégration Foundry dans cette première phase
- Le code doit rester simple et compréhensible pour un débutant

## Contraintes techniques
- Utiliser React
- Utiliser Vite
- Utiliser TypeScript
- Utiliser Tailwind CSS
- Organiser le projet avec des composants réutilisables
- Éviter les dépendances inutiles
- Garder une structure claire et propre
- Écrire un code lisible et facile à faire évoluer

## Langue
- Les explications doivent être en français simple
- Les commentaires importants peuvent être en français
- Les noms de fichiers et composants peuvent rester en anglais si c'est plus logique techniquement

## Design UI
- Dark mode par défaut
- Interface moderne et propre
- Cartes arrondies
- Bonne lisibilité
- Gros boutons adaptés au tactile
- Animations légères et discrètes
- Hiérarchie visuelle claire
- Navigation fluide
- Design pensé mobile-first

## Écrans à créer dans la phase 1
- Connexion (interface uniquement, sans vraie authentification)
- Favoris
- Fiche personnage
- Actions
- Sorts
- Inventaire
- Lanceur de dés

## Navigation
- Sur mobile : barre de navigation en bas
- Sur tablette : disposition adaptée, plus aérée, avec possibilité de navigation latérale ou présentation optimisée
- L'application doit être agréable et claire sur téléphone comme sur tablette

## Données
Créer un personnage D&D 5e fictif stocké localement dans le projet.

Le personnage doit contenir au minimum :
- nom
- classe
- niveau
- portrait
- points de vie
- classe d’armure
- vitesse
- bonus d’attaque de sort
- DD de sauvegarde des sorts
- ressources
- conditions
- actions
- sorts
- inventaire
- armes équipées
- favoris

## Règles de structure des données
- Les armes équipées doivent apparaître dans la page Actions
- Les favoris doivent pouvoir regrouper différents types d’éléments :
  - actions
  - sorts
  - objets
  - armes
- La page Favoris doit servir d’accès rapide en partie
- Les pages doivent être pensées pour un usage pratique et immédiat en jeu

## Contenu attendu dans la phase 1
### Connexion
- écran visuel uniquement
- design propre
- sélection fictive de personnage possible si nécessaire

### Favoris
- regrouper des raccourcis utiles
- afficher des sorts favoris
- afficher des objets favoris
- afficher des actions favorites
- afficher des armes favorites ou équipées si pertinent

### Fiche personnage
- portrait
- nom
- classe / niveau
- PV actuels / max / temporaires
- CA
- vitesse
- ressources
- conditions
- concentration
- inspiration si pertinent

### Actions
- actions générales
- attaques
- armes équipées
- compétences principales ou accès rapide pertinent

### Sorts
- tri par niveau
- affichage lisible
- concentration si applicable
- emplacements de sorts si pertinent

### Inventaire
- armes
- équipements
- consommables
- objets divers
- argent si utile

### Lanceur de dés
- boutons rapides d20, d12, d10, d8, d6, d4
- avantage / désavantage
- modificateur
- historique simple des derniers jets

## Style de développement
- Avancer progressivement
- Faire des changements propres et limités
- Expliquer simplement les choix importants
- Ne pas surcomplexifier l’architecture
- Préférer une bonne base propre plutôt qu’une grosse usine à gaz

## README
Mettre à jour le README avec :
- présentation du projet
- stack utilisée
- instructions d’installation
- instructions de lancement
- structure simple du projet
