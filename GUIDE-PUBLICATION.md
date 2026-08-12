# Guide de publication

Pour toute personne de l'équipe amenée à écrire sur le site. Aucune compétence
technique n'est nécessaire : tout se fait depuis une interface web.

**À lire entièrement avant votre première publication.** Ce que nous publions
engage la société — un article maladroit coûte plus cher qu'un article absent.

---

## 1. Qui fait quoi

| Rôle | Responsabilité |
|---|---|
| **Auteur** | Écrit l'article, remplit tous les champs, le passe en relecture |
| **Relecteur** | Vérifie le fond, la forme et les règles ci-dessous, approuve ou renvoie |
| **Responsable éditorial** | Publie, arbitre les désaccords, tient le calendrier |

**Un auteur ne publie jamais son propre article.** Sans exception, y compris pour
le fondateur. C'est la même règle que pour les rapports client : la relecture par
un pair n'est pas une marque de défiance, c'est ce qui garantit la qualité.

---

## 2. Se connecter

1. Vous recevez une invitation par courriel. Cliquez et définissez votre mot de passe.
2. Allez sur **`/admin/`** (par exemple `https://nexshieldsec.netlify.app/admin/`).
3. Connectez-vous avec votre adresse et votre mot de passe.

Si l'invitation n'arrive pas, vérifiez les indésirables, puis demandez au
responsable du site de la renvoyer. **Ne créez jamais de compte partagé** :
chaque publication doit être attribuable à une personne.

---

## 3. Le circuit d'une publication

L'interface a trois colonnes, et un article les traverse de gauche à droite.

```
Brouillon  ──────→  En relecture  ──────→  Prêt  ──────→  Publié
(l'auteur écrit)    (un pair lit)          (validé)       (en ligne)
```

Concrètement :

1. **Créer** — bouton *New*, choisir la collection (voir §4).
2. **Écrire** — remplir tous les champs, y compris ceux marqués facultatifs quand
   ils sont pertinents. Enregistrer autant de fois que nécessaire : tant que
   l'article est en *Brouillon*, il n'est visible que de l'équipe.
3. **Passer en relecture** — faire glisser la carte en colonne *In review*, puis
   prévenir un relecteur. L'interface ne prévient personne toute seule.
4. **Relire** — le relecteur parcourt la liste du §7. Il approuve, ou il renvoie
   la carte en *Brouillon* avec ses remarques.
5. **Publier** — le responsable éditorial fait glisser en *Ready*, puis
   *Publish now*.

Chaque enregistrement crée une **pull request** sur GitHub : tout est tracé, tout
est réversible, et on peut toujours savoir qui a écrit quoi et quand.

Après publication, comptez **une à deux minutes** avant que l'article apparaisse
sur le site : il est reconstruit automatiquement.

---

## 4. Les quatre collections

Choisir la bonne collection compte : chacune a ses champs obligatoires et son
lecteur.

### Writeups

Résolution d'une machine, d'un défi ou d'un laboratoire. **Uniquement sur des
environnements d'entraînement** — HackTheBox, TryHackMe, VulnLab, CTF, ou un
programme de bug bounty dont les règles autorisent la publication.

Le formulaire contient une case **« Cible autorisée »**. La cocher est une
déclaration : vous affirmez que la cible était un environnement d'entraînement ou
un périmètre autorisé.

**Ne publiez jamais de writeup sur un système client, même anonymisé.** Un client
identifiable dans un writeup est une rupture de l'accord de confidentialité.

### Preuves de concept

Une vulnérabilité que nous avons trouvée, avec sa démonstration.

C'est la collection la plus risquée. Deux champs sont bloquants :

- **Statut de divulgation** — corrigé, divulgation coordonnée en cours, publié
  par l'éditeur, ou sans objet.
- **Éditeur prévenu et délai respecté** — à cocher pour toute vulnérabilité
  affectant un produit réel.

**Règle absolue : aucune publication avant que l'éditeur ait corrigé, ou ait
donné son accord.** Publier une faille non corrigée expose ses utilisateurs et
peut engager notre responsabilité. Le délai d'usage est de 90 jours après
signalement, et il se négocie avec l'éditeur, pas unilatéralement.

En cas de doute, la réponse est non. Demandez au responsable éditorial.

### Renseignement sur les menaces (CTI)

Analyse d'une campagne, d'un acteur, d'une tendance. Notre différenciateur quand
l'analyse porte sur le Togo et l'Afrique de l'Ouest — personne ne couvre
sérieusement cette zone.

Deux exigences :

- **Niveau de confiance** — confirmé, probable, possible, non vérifié. Une note
  sans niveau de confiance n'a aucune valeur pour un lecteur professionnel.
- **Sources** — au moins une, vérifiable. Pas de source, pas de publication.

N'attribuez jamais une attaque à un acteur nommé sur la base d'une seule source,
et n'écrivez jamais le nom d'une entreprise victime qui ne l'a pas rendu public.

### Actualités

Vie de la société : recrutement, certification, événement, publication. Format
court, cinq à dix lignes suffisent.

---

## 5. Ce qu'on ne publie jamais

Cette liste ne se discute pas au cas par cas.

- **Toute information sur un client**, même anonymisée, même ancienne, même
  « ça ne se reconnaît pas ». Nos accords de confidentialité survivent à la fin
  des missions.
- Une vulnérabilité **non corrigée** sur un produit réel sans accord de l'éditeur.
- Un **code d'exploitation prêt à l'emploi** contre un produit largement déployé.
  Expliquer le mécanisme, oui ; livrer l'arme, non.
- Des **identifiants, jetons, clés**, y compris expirés ou dans une capture.
- Une **capture d'écran non nettoyée** — vérifiez les onglets du navigateur, la
  barre des tâches, les noms d'hôte, les adresses IP, les notifications.
- Le **nom d'une entreprise victime** qui ne l'a pas rendu public.
- Une **critique nominative** d'un concurrent ou d'un confrère.
- Une **affirmation juridique** : « telle entreprise est en infraction » n'est pas
  à nous de l'écrire.

En cas de doute sur un de ces points : ne publiez pas, demandez.

---

## 6. Écrire

### Le fond

- **Une idée par article.** Un article qui traite trois sujets n'en traite aucun.
- **Le lecteur d'abord.** Avant d'écrire, répondez en une phrase : « après avoir
  lu ça, le lecteur saura faire quoi ? » Si vous ne savez pas, l'article n'est
  pas prêt.
- **Sourcez.** Toute affirmation technique ou factuelle renvoie à sa source. Les
  sources officielles priment sur les blogs : c'est la règle du dépôt interne
  (`REFERENCES.md`), elle vaut aussi ici.
- **Rattachez à ATT&CK** quand c'est pertinent. C'est notre langage commun, dans
  les rapports comme sur le site.

### La forme

- Français, vouvoiement, présent de l'indicatif, phrases courtes.
- Termes techniques anglais conservés quand ils sont consacrés : on écrit
  « spear phishing », pas « hameçonnage ciblé ».
- **Aucun emoji.**
- Pas de superlatif, pas de sensationnalisme. « Une faille critique dévastatrice
  qui menace des millions » n'apporte rien ; « une exécution de code à distance
  sans authentification » dit tout.
- Titres : descriptifs, pas racoleurs. Le lecteur doit savoir de quoi il s'agit
  avant de cliquer.

### Le résumé

Deux phrases maximum. C'est ce qui apparaît dans la liste des articles et dans
les aperçus de partage. **C'est le champ le plus lu du site** — soignez-le autant
que le titre.

---

## 7. Images et liens

### Images

- Bouton **Choose an image** dans le formulaire. Les fichiers sont déposés dans
  `public/uploads/`.
- **Nommez les fichiers avant de les téléverser** :
  `2026-08-12-injection-sql-schema.png`, pas `Capture d'écran 2026-08-12.png`.
  Un nom propre se retrouve, un nom par défaut se perd.
- **Compressez** : au-delà de 300 Ko, une image ralentit le site. Un outil comme
  Squoosh suffit.
- **Nettoyez toute capture** avant de la téléverser. Onglets, barre des tâches,
  noms d'hôte, adresses IP, notifications. Une capture révèle presque toujours
  plus que ce qu'on croit.
- Décrivez l'image dans le texte qui l'entoure : le lecteur doit comprendre sans
  la voir.

### Liens

- Les liens externes s'écrivent avec un libellé parlant : « la documentation
  d'OWASP », jamais « cliquez ici » ni l'URL brute.
- **Vérifiez chaque lien avant de passer en relecture.** Un lien mort dans un
  article de sécurité fait douter du reste.
- Privilégiez la source officielle plutôt qu'un article qui la commente.
- Ne liez jamais vers un site hébergeant des maliciels ou des données volées,
  même à titre d'illustration.

---

## 8. Liste de relecture

Le relecteur passe chaque point. Un seul « non » renvoie l'article en brouillon.

**Sécurité et confidentialité**

- [ ] Aucune information sur un client, même indirecte
- [ ] Aucun identifiant, jeton ou clé, y compris dans les captures
- [ ] Captures nettoyées : onglets, hôtes, adresses IP, notifications
- [ ] Pour une preuve de concept : éditeur prévenu, délai respecté, statut renseigné
- [ ] Pour un writeup : cible d'entraînement ou périmètre autorisé confirmé
- [ ] Aucun code d'exploitation prêt à l'emploi sur un produit largement déployé

**Fond**

- [ ] Une seule idée, claire dès le titre
- [ ] Toute affirmation est sourcée, de préférence à la source officielle
- [ ] Les liens fonctionnent, tous
- [ ] Identifiants techniques exacts : CVE, CWE, ATT&CK, CVSS
- [ ] Pour une note CTI : niveau de confiance et sources renseignés

**Forme**

- [ ] Résumé en deux phrases, soigné
- [ ] Aucun emoji, aucun superlatif
- [ ] Orthographe et grammaire relues
- [ ] Images nommées correctement et compressées
- [ ] Tous les champs obligatoires remplis

---

## 9. Rythme et calendrier

Mieux vaut **un bon article par mois que quatre médiocres**. Un blog irrégulier
mais solide vaut mieux qu'un blog régulier et creux.

Objectif de départ, à ajuster après trois mois :

| Collection | Rythme visé |
|---|---|
| Writeups | 1 à 2 par mois |
| Preuves de concept | quand il y en a — jamais forcé |
| CTI | 1 par mois, orienté Afrique de l'Ouest |
| Actualités | au fil des événements |

Le responsable éditorial tient le calendrier et relance. Un article annoncé et
jamais publié se remarque plus qu'un article jamais annoncé.

---

## 10. En cas de problème

| Situation | Quoi faire |
|---|---|
| Erreur publiée | Prévenir le responsable éditorial **immédiatement**. On corrige, on ne dissimule pas. |
| Fuite d'information client | Dépublier tout de suite, puis prévenir la direction. Traité comme un incident de sécurité. |
| Désaccord auteur / relecteur | Le responsable éditorial arbitre. |
| Interface inaccessible | Voir `DEPLOIEMENT.md` §3, ou demander au responsable du site. |
| Doute sur une publication | Ne publiez pas. Demandez. C'est toujours la bonne réponse. |

---

## 11. Une dernière chose

Ce blog est notre vitrine technique. Un prospect qui hésite entre nous et un
concurrent lira nos articles avant de nous appeler — c'est souvent ce qui décide.

Écrivez comme si le client que vous voulez le plus allait vous lire. Parce que
c'est exactement ce qui va se passer.
