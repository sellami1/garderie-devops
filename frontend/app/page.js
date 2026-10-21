'use client';

import { useEffect, useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

const defaultGarderie = {
  nom: 'Ma Garderie',
  slogan: 'Un lieu sûr, bienveillant et joyeux pour chaque enfant.',
  adresse: '12 rue des Étoiles, Paris',
  telephone: '+33 1 84 00 00 12',
  email: 'contact@magarderie.fr',
  horaires: 'Lundi - Vendredi : 7h30 - 18h30',
};

const defaultServices = [
  {
    id: 1,
    titre: 'Accueil périscolaire',
    description: 'Un espace sécurisé et stimulant pour les enfants avant et après l’école.',
  },
  {
    id: 2,
    titre: 'Activités ludiques',
    description: 'Des ateliers créatifs et sportifs pour développer l’autonomie.',
  },
  {
    id: 3,
    titre: 'Aide aux devoirs',
    description: 'Un accompagnement sur mesure pour consolider les apprentissages.',
  },
];

export default function HomePage() {
  const [garderie, setGarderie] = useState(defaultGarderie);
  const [services, setServices] = useState(defaultServices);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [garderieResponse, servicesResponse] = await Promise.all([
          fetch(`${API_URL}/api/garderie`),
          fetch(`${API_URL}/api/services`),
        ]);

        const garderieData = await garderieResponse.json();
        const servicesData = await servicesResponse.json();

        setGarderie(garderieData);
        setServices(servicesData);
      } catch (error) {
        console.error('Erreur de chargement des données:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="page-shell">
      <nav className="navbar">
        <div className="brand">
          <div className="brand-mark">MG</div>
          <span>Ma Garderie</span>
        </div>
        <div className="nav-links">
          <a href="#accueil">Accueil</a>
          <a href="#services">Services</a>
          <a href="#activites">Activités</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="accueil" className="hero">
        <div className="hero-content">
          <p className="eyebrow">Éducation • Bien-être • Éveil</p>
          <h1>Ma Garderie</h1>
          <p className="lead">{garderie.slogan}</p>
          <div className="hero-actions">
            <button type="button">Réserver</button>
            <button type="button" className="secondary">En savoir plus</button>
          </div>
          <ul className="meta-list">
            <li>{garderie.horaires}</li>
            <li>{garderie.telephone}</li>
            <li>{garderie.adresse}</li>
          </ul>
        </div>

        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80"
            alt="Enfants jouant dans une garderie"
          />
        </div>
      </section>

      <section id="services" className="services">
        <div className="section-heading">
          <p className="eyebrow">Nos services</p>
          <h2>Un environnement stimulant et rassurant</h2>
        </div>

        <div className="card-grid">
          {(services || defaultServices).map((service) => (
            <article key={service.id} className="service-card">
              <h3>{service.titre}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-strip">
        <div>
          <p className="eyebrow">Contact</p>
          <h3>{garderie.email}</h3>
        </div>
        <button type="button">Nous contacter</button>
      </section>

      {loading && <p className="status">Chargement en cours…</p>}
    </main>
  );
}
