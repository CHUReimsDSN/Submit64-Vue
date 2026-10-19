---
title: Introduction
icon: menu_book
---

# Introduction

*Submit64 Vue* est une librairie *Vue* permettant de construire et de gérer des formulaires dynamiques à partir de métadonnées et de données fournies par votre application.

L'objectif de *Submit64* est de prendre en charge la logique commune d'un formulaire tout en laissant à votre application la responsabilité de fournir les données.

## Fonctionnement
Le composant principal de la bibliothèque est `Submit64Form`.

Il reçoit les informations nécessaires à la construction du formulaire et se charge ensuite de gérer son cycle de vie : affichage des champs, gestion des sections, validation, événements, soumission et interactions avec l'API du formulaire.

Votre application reste responsable de la manière dont sont manipulées données.

Cette séparation permet de garder une distinction claire entre :

- Votre application : fournit les données, et définit votre logique métier
- Submit64 : construit et gère le formulaire à partir des informations fournies

Ces métadonnées permettent notamment de définir les sections, les champs, leurs types et les différentes propriétés nécessaires à leur affichage et à leur comportement.  
Le formulaire peut ainsi être construit dynamiquement sans avoir à définir manuellement chaque champ dans le template *Vue*.

## Configuration multiple

*Submit64* propose plusieurs niveaux de configuration afin de s'adapter aux besoins de votre application.

Vous pouvez notamment configurer :

- les paramètres et comportements des formulaires
- les bindings, permettant de personnaliser les propriétés des composants
- les slots, permettant de personnaliser leur rendu
- le contexte, permettant de faire transiter vos propres données.

## API Vue & TypeScript

Chaque instance de `Submit64Form` expose une API permettant d'interagir directement avec le formulaire.

Cette API permet notamment de :

- accéder au formulaire, à ses sections et à ses champs
- modifier leur état
- modifier leur configuration
- déclencher certaines actions
- accéder et modifier le contexte
- réagir aux différents événements du formulaire

Il est ainsi possible de contrôler dynamiquement un formulaire depuis votre code Vue, sans avoir à reproduire sa logique interne.

## *Submit64 Rails*

*Submit64 Rails* est la version Ruby on Rails de la bibliothèque.  
Elle permet de centraliser non seulement la définition des formulaires, mais aussi la préparation des données transmises à *Submit64 Vue* pour leur affichage et leur manipulation.

Les deux bibliothèques sont complémentaires : Submit64 - Rails prend en charge la génération des métadonnées, tandis que *Submit64 Vue* assure le rendu et la gestion interactive du formulaire.  

::: info
Documentation de [Submit64 Rails](https://chureimsdsn.github.io/Submit64-Rails/)
:::
