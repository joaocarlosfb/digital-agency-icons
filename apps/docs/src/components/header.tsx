'use client';

import { LanguageToggle } from './language-toggle';
import { ThemeToggle } from './theme-toggle';

interface HeaderProps {
  children?: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="mb-12">
      <div className="flex justify-end gap-3 mb-4">
        <LanguageToggle />
        <ThemeToggle />
      </div>
      <div>{children}</div>
    </header>
  );
}
