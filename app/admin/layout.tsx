import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin - Sala Vínica',
  robots: 'noindex, nofollow',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-light">
      {children}
    </div>
  );
}
