const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const garderie = {
  nom: 'Ma Garderie',
  slogan: 'Un lieu sûr, bienveillant et joyeux pour chaque enfant.',
  adresse: '12 rue des Étoiles, Paris',
  telephone: '+33 1 84 00 00 12',
  email: 'contact@magarderie.fr',
  horaires: 'Lundi - Vendredi : 7h30 - 18h30',
};

const services = [
  {
    id: 1,
    titre: 'Accueil périscolaire',
    description: 'Un espace sécurisé et stimulant pour les enfants avant et après l’école.',
  },
  {
    id: 2,
    titre: 'Mise en place de l’accueil',
    description: 'Des activités ludiques et pédagogiques pour favoriser l’autonomie et la confiance.',
  },
  {
    id: 3,
    titre: 'Atelier gourmand',
    description: 'Une expérience culinaire amusante avec des recettes simples et équilibrées.',
  },
  {
    id: 4,
    titre: 'Aide aux devoirs',
    description: 'Un accompagnement adapté pour consolider les apprentissages du jour.',
  },
];

const activites = [
  {
    id: 1,
    nom: 'Jeux créatifs',
    description: 'Peinture, collage et activités manuelles pour stimuler l’imagination.',
  },
  {
    id: 2,
    nom: 'Éveil musical',
    description: 'Découverte des rythmes, chansons et instruments pour développer l’écoute.',
  },
  {
    id: 3,
    nom: 'Sport et mouvement',
    description: 'Jeux collectifs et exercices doux pour renforcer la motricité.',
  },
  {
    id: 4,
    nom: 'Lecture et histoire',
    description: 'Séances de contes inspirantes pour développer le langage et l’imagination.',
  },
];

app.get('/api/garderie', (req, res) => {
  res.json(garderie);
});

app.get('/api/services', (req, res) => {
  res.json(services);
});

app.get('/api/activites', (req, res) => {
  res.json(activites);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route non trouvée' });
});

app.listen(PORT, () => {
  console.log(`Garderie backend running on http://localhost:${PORT}`);
});

module.exports = app;
