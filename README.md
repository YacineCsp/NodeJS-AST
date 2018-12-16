# NodeJS-AST TP01 


## Installation :
 
  La distribution sur la machine de développement est macOS Mojave.
  Nous avons donc download sur mac via le lien suivant: 

        " https://nodejs.org/en/download/"

  Une fois ceci fais, sur le terminal mac j'ai rentré la commande suivante: 
  
        "npm install -g nodemon".

  Cette commande installe nodemon, cet outil nous permettra de relancer automatiquement le server après la modification du fichier .js.


## Utilisation :

Pour lancer le serveur, il faut se placer dans le dossier du projet et utiliser la commande :

    nodemon index.js

Ensuite via le navigateur web, nous pouvons acceder au port 8080 du localhost:

    http://localhost:8080

Mettre le lien dans la forme:

     http://localhost:8080/hello?name=[Name] 
     
Permettra l'affichage de hello + [Name].
     
Mettre le lien dans la forme:

    http://localhost:8080/hello?name=Yacine ou 
    http://localhost:8080/hello?name=YACINE ou 
    http://localhost:8080/hello?name=yacine

Affichera une breve description de moi.

Toute autre réponse, constituera une erreur 404.

# NodeJS-AST TP02

## Installation :
 
  Dans ce TP nous devons nous munir du framwork express:

        npm install express
        npm install ejs

Pour ce TP nous nous sommes muni de Bootstrap ainsi que de JQuery.

Afin de tester notre application nous avons installé MochaJS via la commande suivante:

        npm install --save-dev mocha

Nous avons ensuite crée le répértoire test et implémenté test.js.
Il nous suffi maintenant de rentrer le script que nous voulons tester dans le fichier package.json:

        "scripts": {
            "test": "mocha"
        }

Il suffit ensuite de rentrer la commande:

        npm test
        
Afin de lancer le test.

## Utilisation :

Pour lancer le serveur, il faut se placer dans le dossier du projet et utiliser la commande :

    nodemon index.js

Ensuite via le navigateur web, nous pouvons acceder au port 8080 du localhost:

    http://localhost:8080

Mettre le lien dans la forme:

     http://localhost:8080/hello/[Name] 
     
Permettra l'affichage de:
        Hello [Name]
        Welcome to our humble application.
     
# NodeJS-AST TP03

## Installation :
 
  Dans ce TP nous devons nous munir de TypeScipt, (à la racine du projet):

        npm install typescript
        npm install ts-node
        npm init




## Utilisation :

Pour lancer le serveur, il faut se placer dans le dossier du projet et utiliser la commande :

    nodemon start

Ensuite via le navigateur web, nous pouvons acceder au port 8080 du localhost:

    http://localhost:8080

Mettre le lien dans la forme:

     http://localhost:8080/hello/[Name] 
     
Permettra l'affichage de:
        Hello [Name]
        Welcome to our humble application.

# NodeJS-AST TP04

## Installation :
 
  Dans ce TP nous devons nous munir du module del ainsi que créer un fichier .travis.yml :

        npm i --save del




## Utilisation :

Pour lancer le serveur, il faut se placer dans le dossier du projet et utiliser la commande :

    nodemon start

Ensuite via le navigateur web, nous pouvons acceder au port 8080 du localhost:

    http://localhost:8080

Mettre le lien dans la forme:

     http://localhost:8080/hello/[Name] 
     
Permettra l'affichage de:
        Hello [Name]
        Welcome to our humble application.



# NodeJS-AST Projet 

## Installation :
 

Un problème est survenu lors du push de ce dernier TP, me trouvant un cran au dessus dans l'arborescence j'ai Malencontreusement push un tout nouveau dossier, pour une raison que je ne comprend pas, cela à reintialiser mon git à 0 et je n'ai que 3 commits d'enregistrer alors que j'ai fais au mieux possible le suivi. 
Je ne sais pas s'il est possible de récupérer des logs afin de prouver ma bonne foi.

## Utilisation :

Pour lancer le serveur, il faut se placer dans le dossier du projet et utiliser la commande :

    nodemon start

Ensuite via le navigateur web, nous pouvons acceder au port 8080 du localhost:

    http://localhost:8080

Mettre le lien dans la forme:

     http://localhost:8080/signup 
     
Il sera donc possible de créer un compte, malheuresement à l'heure actuelle la page login ne permet pas de se connecter mais les fonctionnalités sont présentes, c'est juste un bug que je n'arrive pas à régler.

## Contributeur :

**ZIDI Yacine**
