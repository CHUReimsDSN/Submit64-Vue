---
title: Changelog
---

# Changelog


<br />


### 1.8.0

- Ajout d'une nouvelle option `displayLabelInsideInput` dans le `TFormSettings`.
- TODO compatibilité avec Quasar BigBang
- TODO màj doc pour ordre de prio surcharge
- TODO màj doc
- Mise à disposition des slots pour les champs à travers la balise `template`, et les props du composant `Submit64Form`.

<br />


### 1.7.5

- Correction d'un problème lié au `TSubmit64FieldApi.addBindings`.

<br />

### 1.7.4

- Changement des styles par défault.

<br />

### 1.7.3

- Correction d'un problème des bindings des champs Wysiwyg.

<br />

### 1.7.2

- Ajout de la ref `setupIsDone` dans le `TSubmit64FormApi`.

<br />

### 1.7.0

- Le bouton de soumission est désormais désactivé si le formulaire n'est pas valide.
- Ajout des fonctions `focus` et `unfocus` pour les `TSubmit64FormApi`, `TSubmit64SectionApi` et `TSubmit64FieldApi`.
- Ajout d'un paramètre permettant l'autofocus sur le premier champs disponible du formulaire
- Le téléchargement de fichier est désormais bien attendu avant de pouvoir soumettre le formulaire
- Remaniement des comportements et styles à travers la méthode `Submit64.registerGlobalFormBindings` et la props `formBindings` du composant `Submit64Form`.

<br />

### 1.6.0

- Ajout du `fieldFlat` dans les styles de formulaire

<br />

### 1.5.7

- Prise en charge des associations pour les champs `unlink`

<br />

### 1.5.6

- Ajout des images dans le champs de type `wysiwyg`

<br />

### 1.5.5

- Correction de la priorité des propriétés de configuration des formulaires locaux

<br />

### 1.5.4

- Correction du context ignoré dans les props

<br />

### 1.5.3

- Correction du FormApi.setContext

<br />

### 1.5.2
- Ajustements documentation
- Correction d'un problème où les champs de relations n'étaient pas envoyés à l'interopérabilité lors du clear

<br />

### 1.5.1
- Nouvelle documentation
- Correction des slots pour les sections

<br />

### 1.5.0
- Champ de pièces-jointes 
