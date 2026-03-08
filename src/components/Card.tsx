import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: CardProps) {
  return <section className={`rounded-2xl border border-zinc-800 bg-zinc-900/90 p-4 ${className}`}>{children}</section>;
}
