'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IconSearch } from '@/components/IconSearch';
import { IconGrid } from '@/components/IconGrid';
import { ThemeToggle } from '@/components/theme-toggle';
import { searchIcons, iconMetadata, type Category } from '@/lib/icons';

export default function IconsPage() {
  const [filteredIcons, setFilteredIcons] = useState(iconMetadata);

  const handleSearch = (query: string, category: Category) => {
    const results = searchIcons(query, category);
    setFilteredIcons(results);
  };

  return (
    <main className="min-h-screen">
      {/* ヘッダー */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link
                href="/"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                ← ホームに戻る
              </Link>
              <h1 className="text-3xl font-bold mt-2">アイコン一覧</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                デジタル庁公式アイコン全60種類（Fill/Line）
              </p>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* 検索セクション */}
          <section>
            <IconSearch onSearch={handleSearch} />
          </section>

          {/* アイコングリッドセクション */}
          <section>
            <IconGrid icons={filteredIcons} />
          </section>
        </div>
      </div>
    </main>
  );
}
