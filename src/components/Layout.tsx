import { ReactNode } from 'react';

type LayoutProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Layout({ title, subtitle, children }: LayoutProps) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-5xl px-4 pb-28 pt-6 md:px-8 md:pb-8">
      <header className="mb-6 rounded-2xl border border-zinc-800 bg-zinc-900/90 p-4 shadow-card">
        <h1 className="text-xl font-bold text-zinc-100 md:text-2xl">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-zinc-400">{subtitle}</p>}
      </header>
      <main className="space-y-4">{children}</main>
    </div>
  );
}
