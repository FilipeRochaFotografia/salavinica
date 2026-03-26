import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const felix = localFont({
  src: './fonts/felix.ttf',
  variable: '--font-felix',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jantar Vínico',
  description: 'Uma experiência guiada',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${inter.variable} ${felix.variable}`} suppressHydrationWarning>
      <body className="bg-background text-light antialiased selection:bg-primary selection:text-light" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
