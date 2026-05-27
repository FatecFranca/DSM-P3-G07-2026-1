import Link from 'next/link';
import { site } from '@/lib/site';

export function SiteHeader() {
  return (
    <header className="border-b border-white/60 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl font-bold text-academy-text"
        >
          {site.name}
        </Link>

        <nav className="flex items-center gap-4 text-sm text-slate-700">
          <Link
            href="/login"
            className="transition-colors hover:text-academy-primary"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="transition-colors hover:text-academy-primary"
          >
            Cadastro
          </Link>
        </nav>
      </div>
    </header>
  );
}
