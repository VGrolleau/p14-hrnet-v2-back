# Projet 14 Titre Développeur d'Application JavaScript React : HRnet V2 - backend

Backend du projet [HRnet v2](https://github.com/VGrolleau/p14-hrnet-v2-front/). Ce projet utilise Sequelize, Express et nodejs avec un conteneur Docker pour la base de données MariaDB.

[Version anglaise](README.md)

## Sommaire

- [Prérequis](#prérequis)
- [Installation](#installation)
- [Création de la base de données](#création-de-la-base-de-données)
- [Lancement du backend](#lancement-du-backend)
- [Endpoints](#endpoints)

---

### Prérequis

* [NodeJS](https://nodejs.org/fr/) (**version recommandée**)
* [npm](https://www.npmjs.com/)
* [Docker](https://docs.docker.com/get-docker/)
* [Sequelize](https://sequelize.org/)
* [ExpressJS](https://expressjs.com/fr/)
* [MariaDB](https://mariadb.org/)

---

### Installation

- Clonez le dépôt: `git clone https://github.com/VGrolleau/p14-hrnet-v2-back.git`
- Dans le dossier du projet, installez les dépendances: `npm install`
- Lancez le conteneur Docker pour la base de données MariaDB: `docker run --name mariadb -e MYSQL_ROOT_PASSWORD=your_password -d mariadb:latest`

(*"your_password"* sera le mot de passe root, il se crée à ce moment-là)


### Création de la base de données

Pour créer la base de données :
- Connectez-vous au conteneur MariaDB : `docker exec -it mariadb mysql -u root -p`

(*"root"* correspond au nom de l'utilisateur root par défaut)

- Lorsque c'est demandé, renseignez le mot de passe créé précédemment
- Créez un nouvel utilisateur MariaDB : `CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';`

(*"newuser"* est le nom de l'utilisateur que vous voulez créer et *"password"* est le mot de passe que vous voulez utiliser pour cet utilisateur)

- Accordez les autorisations d'accès appropriés au nouvel utilisateur : `GRANT ALL PRIVILEGES ON HRnet.* TO 'newuser'@'localhost';`

(*"HRnet"* correspond au nom de la base de données)

- Créez la base de données *HRnet* : `CREATE DATABASE HRnet;`
- Quittez la console MariaDB : `exit`


### Lancement du backend

- Allez dans le fichier `./models/database.js` et modifiez les informations en fonction de ce que vous venez de créer juste avant
- (*Facultatif si vous souhaitez commencer le projet avec une liste d'employés vide*) Concernant les employés :
    - Allez sur le fichier `./models/Employee.js`
    - Décommentez le bloc de code lignes 58 à 68
- Concernant l'utilisateur qui se connecte :
    - Allez sur le fichier `./models/User.js`
    - Décommentez le bloc de code lignes 34 à 41
- Démarrez le serveur: `npm start`

**Quand le script est terminé, recommentez les blocs de code précédemment décommentés sinon les employés et utilisateurs se recréeront lorsque vous redémarrerez le serveur**

---

### Endpoints

Les différents endpoints utilisés dans le projet [HRnet v2](https://github.com/VGrolleau/p14-hrnet-v2-front/) se retrouvent dans le fichier `./routes/api.js`.
En voici la liste complète :
- `http://localhost:3001/api/login`
    - **POST** : Permet la connexion de l'utilisateur
- `http://localhost:3001/api/user`
    - **GET** : Récupère l'utilisateur connecté
    - **PUT** : Modifie les informations de l'utilisateur connecté
- `http://localhost:3001/api/user/:userId`
    - **GET** : Récupère l'utilisateur non connecté en fonction de l'ID précisé
- `http://localhost:3001/api/employee`
    - **POST** : Permet la création d'un employé
    - **GET** : Récupère la liste des employés
    - **PUT** : Modifie les informations de l'employé sélectionné
    - **DELETE** : Permet la suppression de l'employé sélectionné
