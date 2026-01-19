# Cahier des Charges : Panel de Gestion Clients, RDV & Installations

## 1. Contexte et Objectifs
L'objectif est de développer un **Panel Administrateur** (Back-office) intégré à l'application actuelle. Ce panel permettra à l'équipe de gérer le cycle de vie des clients après la captation du lead, spécifiquement pour :
1.  Suivre les rendez-vous (commerciaux et techniques).
2.  Gérer le planning des installations.
3.  Comptabiliser le matériel installé (nombre de LEDs) pour chaque client.

## 2. Fonctionnalités Principales

### 2.1 Gestion des Clients (CRM)
- **Tableau de Bord Clients (Liste)** :
  - Affichage sous forme de tableau interactif.
  - Colonnes : Nom, Entreprise, Ville, Statut (Prospect, Signé, Installé), Date de contact.
  - Filtres : Par statut, par ville.
  - Recherche : Par nom ou entreprise.
- **Fiche Client Détaillée** :
  - Informations générales (Coordonnées, Adresse).
  - Historique des notes et commentaires.

### 2.2 Gestion des Rendez-vous (RDV)
Pour chaque client, permettre la gestion des RDV :
- **Ajout de RDV** : Formulaire simple (Date, Heure, Type de RDV, Intervenant).
- **Types de RDV** : "Audit Technique", "Signature", "Installation", "SAV".
- **Statut du RDV** : "Prévu", "Confirmé", "Réalisé", "Annulé".
- **Modification/Suppression** : Édition rapide en cas de changement d'agenda.

### 2.3 Gestion des Installations & Matériel (LEDs)
Module spécifique pour la phase technique :
- **Date d'Installation** : Champ dédié pour la planification des travaux.
- **Suivi du Matériel (LEDs)** :
  - Champ numérique : **"Nombre de LEDs à installer"** (Estimé).
  - Champ numérique : **"Nombre de LEDs installées"** (Réel).
  - (Optionnel) Détail par type de luminaire si besoin (Tubes, Dalles, Projecteurs).
- **Validation Fin de Chantier** : Case à cocher ou statut "Installation Terminée".

## 3. Structure de Données (Supabase)

Le modèle de données devra s'appuyer sur (ou étendre) la base existante :

### Table `clients` (Mise à jour)
- Ajout de champs de suivi si manquants :
  - `status`: enum ('new', 'audit', 'signed', 'installed')
  - `nb_leds_estimated`: integer
  - `nb_leds_installed`: integer
  - `installation_date`: timestamp

### Table `appointments` (Nouvelle ou Mise à jour)
- `id`: uuid
- `client_id`: uuid (foreign key)
- `date`: timestamp
- `type`: text (audit, install, etc.)
- `status`: text
- `notes`: text

## 4. Interface Utilisateur (UX/UI)

### Design System
- Utilisation de la charte graphique actuelle (TailwindCSS).
- Interface "Admin" épurée, fond clair, visibilité maximale des données.

### Arborescence
1.  **/admin** : Dashboard global (KPIs rapides).
2.  **/admin/clients** : Liste des clients.
3.  **/admin/clients/:id** : Vue détail client (avec onglets : "Infos", "RDV", "Installation").

## 5. Étapes de Développement

1.  **Base de données** : Création/Mise à jour des tables Supabase.
2.  **Routing** : Création des routes protégées (ou cachées) pour le panel.
3.  **Composants UI** :
    - Création des cartes de statistiques.
    - Création du tableau de liste clients.
    - Création des formulaires (Modal) pour Ajouter un RDV / Modifier le nb de LEDs.
4.  **Intégration** : Connexion logique entre le Front et Supabase.

## 6. Sécurité (Points d'attention)
- Accès restreint au Panel (Authentification requise ou protection basique par mot de passe dans un premier temps si pas d'auth complète).
