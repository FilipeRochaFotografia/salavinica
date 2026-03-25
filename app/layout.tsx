import type { Metadata } from 'next';
import { Inter, Marcellus } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-felix', // Using Marcellus as the closest Google Font to Felix Titling
});

export const metadata: Metadata = {
  title: 'Sala Vínica — Armazém do Peixe',
  description: 'Premium digital wine menu experience',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${inter.variable} ${marcellus.variable}`}>
      <body className="bg-background text-light antialiased selection:bg-primary selection:text-light">
        {children}
      </body>
    </html>
  );
}
