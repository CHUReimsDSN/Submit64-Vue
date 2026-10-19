---
title: Installation
icon: download
---

# Installation

Ajoutez le package aux dépendances de votre projet, puis installez les dépendances avec npm.  


```json [package.json]
{
  "dependencies": {
    "submit64-vue": "https://github.com/CHUReimsDSN/Submit64-Vue.git",
  }
}
```

```sh
npm install
```

::: info
Le package n'est pas encore disponible sur le registre npm.  
En attendant sa publication, il doit être installé directement depuis le dépôt Git.
:::


## Cibler une branche spécifique

Si vous souhaitez utiliser une version du package provenant d'une branche spécifique, vous pouvez la référencer directement depuis le dépôt Git.

```json [package.json]
{
  "dependencies": {
    "submit64-vue": "https://github.com/CHUReimsDSN/Submit64-Vue.git#nom_de_la_branche",
  }
}
```

Remplacez `nom_de_la_branche` par le nom de la branche à utiliser.



## Liste des dépendances

Ces packages sont déclarés comme peer dependencies.   
Ils ne sont donc pas installés automatiquement avec le package et doivent être présents dans votre projet.  

```json
"vue": "^3.0.0"
"quasar": "^2.0.0"
```
