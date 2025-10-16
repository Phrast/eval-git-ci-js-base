Nicolas Caron / Killian Doizelet

Petite description :

application de gestion de taches


Les commande que nous avons utiliser sont :

- git clone 
- git init
- git checkout -b
- git switch
- git add
- git commit -m
- git push -u origin
- git branch
- git rm -r --cached .  
- git rebase
- git pull

Description :

- switch : pour ce deplacer sur une branche existante
- checkout : pour cree une branche et ce deplacer dedans direct

- pull : c'est comme un fetch mais avec une integration automatique dans ma branche courante
- fetch : recupere les nouveaux commit et ca met a jour mes references locals sans que ca touche a ma branche de travail

- rebase : ca refait tout les commit sur une autre base ce qui permet dee reecrire l'historique
- revert : ca crée un nouveau commit qui annule un commit existant mais ca ne reecrit pas l'historique

Recherche :

- tag : ca marque un commit avec un nom, c'est souvent utilise pour marque v1.0.1, v1.0.2 ect...
- stash : met de coté nos modifs non commit pour revenir a un etat propre
- release : version de mon logiciel ou app basé sur un tag (avec optionnelement des fichiers a telechargé)


Lien des PR :
- https://github.com/Phrast/eval-git-ci-js-base/pull/5 : ajout des docs et confli sur tasks.test.js on a accepte les incoming change pour resoudre
- https://github.com/Phrast/eval-git-ci-js-base/pull/4 : fonctionnalité 3
- https://github.com/Phrast/eval-git-ci-js-base/pull/3 : fonctionnalité 2
- https://github.com/Phrast/eval-git-ci-js-base/pull/2 : fonctionnalité 1, confli sur junit.xml on a accepte les previous change pour resoudre
- https://github.com/Phrast/eval-git-ci-js-base/pull/1 : les CI