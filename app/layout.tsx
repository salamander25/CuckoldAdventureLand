import './globals.css';
import { Nav } from '@/components/nav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto max-w-5xl p-4 md:p-8 space-y-6">
          <header className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <h1 className="text-2xl font-bold text-gold">Hotwife Circle</h1>
            <Nav />
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
