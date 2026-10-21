# Examen Pratique N°1 - 21/10/2026

**Wahid Hamdi** • Oct 12 (Edited 9:40 AM)

**20 points** | Due 8:30 AM

---

**Épreuve pratique — Master DevOps & Cloud**

**Sujet** : Mise en place d'une chaîne CI/CD Jenkins et déploiement d'une application Web avec Docker, Vagrant et Ansible
**Durée** : 2 heures

**Travail demandé**

**1.** Créer un dépôt GitHub public nommé *garderie-devops* contenant une application Web composée d'un frontend Next.js et d'un backend Node.js/Express.

**2.** Développer une landing page responsive pour une garderie d'enfants, composée de trois composants :
- **Navbar** : logo, nom de la garderie et menu de navigation.
- **Hero** : image, titre de bienvenue et description.
- **Services** : affichage des services proposés par la garderie.

**3.** Développer un backend Express exposant les trois API REST suivantes :
- **GET /api/garderie** : informations générales de la garderie.
- **GET /api/services** : liste des services proposés.
- **GET /api/activites** : liste des activités de la garderie.

**4.** Connecter le frontend Next.js au backend Express pour afficher dynamiquement les informations et les services.

**5.** Créer un **test automatisé** simple vérifiant l'affichage du titre « Ma Garderie » dans le frontend.

**6.** Créer deux fichiers **Dockerfile** permettant de construire séparément les images Docker du frontend et du backend.

**7.** Créer un fichier **docker-compose.yml** permettant de démarrer les deux services et de les faire communiquer sur un réseau Docker.

**8.** Publier le code source sur GitHub et vérifier le fonctionnement de l'application avec Docker Compose.

**Partie 1 — Pipeline CI/CD avec Jenkins**

**9.** Créer un pipeline Jenkins de type Pipeline as Code, défini dans un fichier **Jenkinsfile** à la racine du projet.

**10.** Configurer les identifiants Docker Hub dans **Jenkins Credentials**.

**11.** Implémenter les étapes suivantes dans le pipeline Jenkins :
- **Checkout** : récupérer le code source depuis GitHub.
- **Install** : installer les dépendances nécessaires.
- **Test** : exécuter le test automatisé du frontend.
- **Build** Frontend : construire l'image Docker du frontend.
- **Build** Backend : construire l'image Docker du backend.
- **Push** Frontend : publier l'image du frontend sur Docker Hub.
- **Push** Backend : publier l'image du backend sur Docker Hub.

**12.** Configurer le pipeline pour interrompre son exécution en cas d'échec du test automatisé.

**13.** Exécuter le pipeline Jenkins et vérifier la réussite de toutes les étapes.

**14.** Vérifier la présence des deux images Docker dans les dépôts Docker Hub.

**Partie 2 — Création de la VM avec Vagrant**

**15.** Créer une branche Git *feature/vagrant* et ajouter un fichier **Vagrantfile** permettant de créer une machine virtuelle Linux Ubuntu.

**16.** Configurer la VM avec les caractéristiques suivantes :
- Système : Ubuntu Server.
- Mémoire RAM : 2 Go minimum.
- CPU : 2 vCPU.
- Réseau privé avec une adresse IP fixe, par exemple 192.168.56.10.

**17.** Démarrer la VM avec Vagrant et vérifier son accessibilité via SSH.

**18.** Effectuer un commit et fusionner *feature/vagrant* dans main.

**Partie 3 — Provisioning avec Ansible**

**19.** Créer une branche *feature/ansible* et préparer une structure Ansible contenant un inventaire, un playbook et un dossier *roles/*

**20.** Créer un **rôle Ansible** nommé docker chargé de :
- Installer Docker Engine.
- Installer le plugin Docker Compose.
- Démarrer et activer le service Docker.
- Autoriser l'utilisateur de déploiement à exécuter Docker.

**21.** Créer un playbook **site.yml** utilisant le rôle docker pour approvisionner automatiquement la VM Vagrant.

**22.** Configurer Vagrant pour exécuter le playbook Ansible lors du provisioning de la VM.

**23.** Exécuter le provisioning et vérifier l'installation de Docker et Docker Compose dans la VM.

**24.** Effectuer un commit et fusionner *feature/ansible* dans main.

**Partie 4 — Déploiement avec Docker Compose**

**25.** Créer une branche *feature/deployment* et préparer un fichier **docker-compose.yml** utilisant les deux images publiées sur Docker Hub.

**26.** Configurer les services frontend et backend, les variables d'environnement nécessaires, les ports et le réseau Docker.

**27.** Déployer l'application « Ma Garderie » dans la VM Vagrant avec Docker Compose, sans reconstruire les images localement.

**28.** Vérifier que les deux conteneurs sont démarrés et que les trois API REST fonctionnent correctement.

**29.** Effectuer un commit et fusionner *feature/deployment* dans main.

**Partie 5 — Tests d'accessibilité et documentation**

**30.** Depuis une autre machine du réseau, accéder à l'application « Ma Garderie » à l'aide d'un navigateur Web via l'adresse IP de la VM et le port exposé.

**31.** Vérifier l'affichage des trois composants Next.js et le chargement des données provenant du backend Express.

**32.** Créer une branche *docs/readme* et rédiger un fichier **README.md** détaillé contenant :
- Présentation de l'application et technologies utilisées.
- Architecture du projet et de la chaîne CI/CD.
- Instructions de création et de provisioning de la VM.
- Instructions d'exécution du pipeline Jenkins.
- Liens vers les images Docker Hub.
- Instructions de déploiement avec Docker Compose.
- Adresse d'accès à l'application déployée.

**33.** Ajouter dans un dossier **screenshots/** les captures d'écran suivantes :
- Pipeline Jenkins exécuté avec succès.
- Images publiées sur Docker Hub.
- VM démarrée avec Vagrant.
- Exécution réussie du playbook Ansible.
- Conteneurs Docker en cours d'exécution.
- Application accessible dans le navigateur depuis une autre machine.

**34.** Intégrer les captures d'écran dans le **README.md**, effectuer un commit et fusionner *docs/readme* dans main.

**35.** Vérifier la présence du code source, du Jenkinsfile, des Dockerfile, du Vagrantfile, du rôle Ansible, du playbook et des fichiers Docker Compose dans le dépôt GitHub.

**Livrables**

**36.** Fournir le **lien du dépôt GitHub** public contenant l'ensemble du projet, le pipeline Jenkins, la configuration Vagrant, les fichiers Ansible, les fichiers Docker et la documentation complète.

**37.** Fournir les **liens Docker Hub** des images frontend et backend.

**38.** Présenter une démonstration du pipeline Jenkins et de l'application déployée dans la VM, accessible depuis le navigateur d'une autre machine.

**Contraintes** : les identifiants Docker Hub doivent être gérés avec Jenkins Credentials. L'installation de Docker dans la VM doit obligatoirement être réalisée à l'aide d'un rôle Ansible. Le déploiement doit utiliser les images publiées sur Docker Hub et Docker Compose. Les fichiers de configuration et d'automatisation doivent être versionnés sur GitHub.