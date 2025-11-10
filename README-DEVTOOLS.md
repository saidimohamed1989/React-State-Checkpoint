## Guide React Developer Tools

Ce document explique comment installer et utiliser React Developer Tools pour analyser et optimiser vos composants React dans ce projet.

### 1. Introduction
React Developer Tools est une extension (Chrome/Firefox) qui ajoute un onglet "⚛ React" dans les DevTools du navigateur. Elle permet de :
- Inspecter l'arbre des composants (y compris les composants parents/enfants).
- Voir props, state, hooks, contexte et clés.
- Profiler les performances et mesurer le temps de rendu.
- Mettre en évidence les composants qui se re-rendent.

### 2. Installation
#### Option A : Extension Navigateur
Chrome : Ouvrir le Chrome Web Store et chercher "React Developer Tools" puis Installer.
Firefox : Aller sur addons.mozilla.org et chercher "React Developer Tools" puis Ajouter.
Redémarrer le navigateur si l'onglet n'apparaît pas.

#### Option B : Outil autonome (Standalone)
Utile si vous utilisez un navigateur sans extension ou une application React Native / Electron.

```powershell
npx react-devtools
```
Ensuite une fenêtre s'ouvre et se connecte automatiquement à une app React (CRA) en local (port 3000). Gardez la fenêtre ouverte pendant le développement.

### 3. Utilisation de l'Onglet Components
1. Ouvrir les DevTools (F12 ou Ctrl+Shift+I).
2. Sélectionner l'onglet "⚛ Components".
3. Naviguer dans l'arbre des composants. Les composants personnalisés (ex: `App`) apparaissent avec leur nom.
4. En cliquant sur un composant, le panneau droit affiche :
	- Props
	- State (pour composants class) ou Hooks (pour fonctionnels)
	- Context, Keys, Rendered by / Owners
5. Vous pouvez modifier une valeur de state (si DevTools le permet) pour tester rapidement des comportements.
6. Le bouton "Highlight Updates" (ou un toggle similaire) colore les composants qui se re-rendent — utile pour détecter des re-rendus excessifs.

### 4. Onglet Profiler
Le Profiler aide à mesurer le temps de rendu des composants.

Étapes :
1. Aller à l'onglet "Profiler".
2. Cliquer sur "Start profiling".
3. Interagir avec l'application (cliquer sur boutons, changer l'état).
4. Cliquer sur "Stop profiling".
5. Examiner :
	- Liste des commits (chaque commit = cycle de rendu).
	- Durée de rendu par composant.
	- Diagramme de flamme (Flamegraph) et tableau des composants.

Objectif : Identifier les composants lents ou qui se re-rendent inutilement. Ensuite, optimiser (mémoïsation, découpage, évitement de props instables, etc.).

### 5. Bonnes Pratiques
- Utiliser des noms de composants explicites pour faciliter l'inspection (`App`, `UserCard`, etc.).
- Limiter la profondeur excessive du state et préférer une structure claire.
- Utiliser `React.memo` ou `useMemo` / `useCallback` pour éviter des re-rendus inutiles dans des composants lourds.
- Vérifier régulièrement les re-rendus en activant le surlignage des updates.
- Éviter de stocker dans le state des dérivés calculables à la volée.

### 6. Dépannage (Troubleshooting)
| L'onglet React n'apparaît pas | App non détectée, build minifié, extension pas chargée | Assurez-vous d'être en mode développement (CRA `npm start`), rechargez la page, vérifiez l'installation de l'extension. |
| Les Hooks ne s'affichent pas | Version React trop ancienne | Mettre à jour React (>=16.8 pour hooks, vous avez React 19). |
| Profiling vide | Pas d'interactions enregistrées | Recommencer en cliquant sur Start avant les actions. |
| Composants non nommés | Définitions anonymes | Donner un nom aux composants (ex: `function Header(){}` plutôt que `export default () => {}`). |
| Re-rendus trop fréquents | Props ou state changent trop | Mémoïsation, lifting state, découper composants. |


### 7. Astuces Performance Simples
- Regrouper les setState successifs dans un même callback.
- Passer des fonctions stables aux composants enfants (`useCallback`).
- Éviter de recréer des objets/arrays dans props à chaque rendu (utiliser `useMemo`).
- Charger les images de façon optimisée (dimensions explicites, format adapté). 

---
Dernière mise à jour : 2025-11-10

