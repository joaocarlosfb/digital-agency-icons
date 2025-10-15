'use client';

import * as React from 'react';
import { useChangeLocale, useCurrentLocale } from '@/locales/client';

export function LanguageToggle() {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <div className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <button
        onClick={() => changeLocale('ja')}
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
        onClick={() => changeLocale('en')}
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
