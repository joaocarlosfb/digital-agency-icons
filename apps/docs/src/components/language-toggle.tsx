'use client';

import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Replace the locale in the pathname
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <button
        onClick={() => switchLocale('ja')}
        className={`px-3 py-2 rounded-md transition-colors text-sm font-medium ${
          locale === 'ja'
            ? 'bg-white dark:bg-gray-900 shadow-sm'
            : 'hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
        aria-label="日本語"
        title="日本語"
      >
        🇯🇵 JA
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-2 rounded-md transition-colors text-sm font-medium ${
          locale === 'en'
            ? 'bg-white dark:bg-gray-900 shadow-sm'
            : 'hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
        aria-label="English"
        title="English"
      >
        🇺🇸 EN
      </button>
    </div>
  );
}
