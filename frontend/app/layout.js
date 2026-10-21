import './globals.css';

export const metadata = {
  title: 'Ma Garderie',
  description: 'Landing page de la garderie',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
