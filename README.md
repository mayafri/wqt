**Texte en français juste en dessous.**

# wqt: personal links agregator

You put interesting links in a text file and they will appear
ordered by date desc with tags filtering feature. Useful to
share things found on the web.

Inspired by these systems:
[HN](https://news.ycombinator.com/),
[JdH / Lobster](https://gitlab.com/journalduhacker/journalduhacker),
[Shaarli](https://shaarli.readthedocs.io/en/master/)...

Online [here](http://hyakosm.net/wqt/).

## How it works

First you clone the repo. After, create a `links.txt` file and put
links inside. File syntax uses 3-lines or 4-lines blocks
depending if you want to use tags.

Example:

```
2021-03-12
The History of Unix, Rob Pike
https://www.youtube.com/watch?v=_2NI6t2r_Hs
os unix video

2021-04-05
Timeline of Mathematics
https://mathigon.org/timeline

2021-05-20
How to Design Programs, Second Edition
https://htdp.org/2020-8-1/Book/index.html
book programming
```

## Hack

### How to change language?

Comment or uncomment lines in `index.html`.

### How to invert sorting?

In file `insert.js`, function `sortEntriesByDateDesc(a, b)`
invert `1` and `-1` in return values.

## Miscellaneous

The [wqt](https://lecoeurasesraisons.fandom.com/fr/wiki/WQT)
(pronounce *waqueteu* in french) is a noctural aquatic animal
sharing its natural habitat with the ffifffu.

---

# wqt : agrégateur de liens personnel

tu mets les pages qui t'intéressent dans un fichier texte et
l'agrégateur va les afficher en bon ordre, par date, avec la
possibilité de filtrer par étiquettes. Pratique pour partager
ce qu'on a trouvé sur le web.

Inspiré des systèmes suivants :
[HN](https://news.ycombinator.com/),
[JdH / Lobster](https://gitlab.com/journalduhacker/journalduhacker),
[Shaarli](https://shaarli.readthedocs.io/en/master/)...

En ligne [ici](http://hyakosm.net/wqt/).

## Comment ça marche

D'abord il faut cloner le dépôt. Ensuite, crée un fichier `links.txt`
et mets tes liens à partager à l'intérieur. La syntaxe utilise
des blocs de trois ou quatre lignes selon que tu veuilles utiliser
les étiquettes ou non.

Exemple :

```
2021-03-12
The History of Unix, Rob Pike
https://www.youtube.com/watch?v=_2NI6t2r_Hs
os unix vidéo

2021-04-05
Timeline of Mathematics
https://mathigon.org/timeline

2021-05-20
How to Design Programs, Second Edition
https://htdp.org/2020-8-1/Book/index.html
livre programmation
```

## Hack

### Comment changer la langue ?

Commente et décommente les lignes dans `index.html`.

### Comment inverser le tri ?

Fichier `insert.js`, dans la fonction `sortEntriesByDateDesc(a, b)`
inverse `1` et `-1` dans les valeurs de retour.

## À savoir

Le [wqt](https://lecoeurasesraisons.fandom.com/fr/wiki/WQT)
(prononcer *waqueteu*) est un animal aquatique nocturne,
il partage son habitat naturel avec le ffifffu.

