import { render, screen } from '@testing-library/react';
import HomePage from '../app/page';

describe('HomePage', () => {
  beforeEach(() => {
    global.fetch = jest.fn((url) => {
      const responseMap = {
        'http://localhost:4000/api/garderie': {
          nom: 'Ma Garderie',
          slogan: 'Un lieu sûr, bienveillant et joyeux pour chaque enfant.',
          adresse: '12 rue des Étoiles, Paris',
          telephone: '+33 1 84 00 00 12',
          email: 'contact@magarderie.fr',
          horaires: 'Lundi - Vendredi : 7h30 - 18h30',
        },
        'http://localhost:4000/api/services': [
          { id: 1, titre: 'Accueil périscolaire', description: 'Service de qualité.' },
          { id: 2, titre: 'Aide aux devoirs', description: 'Accompagnement éducatif.' },
        ],
      };

      const data = responseMap[url];

      return Promise.resolve({
        json: () => Promise.resolve(data),
      });
    });
  });

  it('affiche le titre Ma Garderie', async () => {
    render(<HomePage />);

    expect(await screen.findByRole('heading', { name: /ma garderie/i })).toBeInTheDocument();
  });
});
