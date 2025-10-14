'use client';

import Link from 'next/link';
import {
  AddFill,
  AddLine,
  ArrowRightFill,
  ArrowRightLine,
  SearchFill,
  SearchLine,
  HouseFill,
  HouseLine,
  SmartphoneFill,
  SmartphoneLine,
} from '@imaimai17468/digital-agency-icons-react';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Digital Agency Icons</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            デジタル庁公式アイコンライブラリ - React / Vue / Svelte対応
          </p>
          <Link
            href="/icons"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <SearchFill size={20} />
            全アイコンを検索
          </Link>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Quick Demo</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { Fill: AddFill, Line: AddLine, name: 'Add' },
              { Fill: ArrowRightFill, Line: ArrowRightLine, name: 'Arrow Right' },
              { Fill: SearchFill, Line: SearchLine, name: 'Search' },
              { Fill: HouseFill, Line: HouseLine, name: 'House' },
              { Fill: SmartphoneFill, Line: SmartphoneLine, name: 'Smartphone' },
            ].map(({ Fill, Line, name }) => (
              <div key={name} className="border rounded-lg p-4">
                <div className="flex items-center gap-4 mb-2">
                  <Fill size={32} color="#1A1A1C" aria-label={`${name} Fill`} />
                  <Line size={32} color="#1A1A1C" aria-label={`${name} Line`} />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Installation</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-medium mb-2">React</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <code className="text-sm">
                  pnpm add @imaimai17468/digital-agency-icons-react
                </code>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Vue 3</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <code className="text-sm">
                  pnpm add @imaimai17468/digital-agency-icons-vue
                </code>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Svelte</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <code className="text-sm">
                  pnpm add @imaimai17468/digital-agency-icons-svelte
                </code>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Usage</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">React</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <pre className="text-sm overflow-x-auto">
{`import { AddFill, SearchLine } from '@imaimai17468/digital-agency-icons-react';

function App() {
  return (
    <div>
      <AddFill size={24} color="currentColor" />
      <SearchLine size={32} color="#1A1A1C" />
    </div>
  );
}`}
                </pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Vue 3</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <pre className="text-sm overflow-x-auto">
{`<script setup lang="ts">
import { AddFill, SearchLine } from '@imaimai17468/digital-agency-icons-vue';
</script>

<template>
  <div>
    <AddFill :size="24" color="currentColor" />
    <SearchLine :size="32" color="#1A1A1C" />
  </div>
</template>`}
                </pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Svelte</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <pre className="text-sm overflow-x-auto">
{`<script lang="ts">
  import { AddFill, SearchLine } from '@imaimai17468/digital-agency-icons-svelte';
</script>

<AddFill size={24} color="currentColor" />
<SearchLine size={32} color="#1A1A1C" />`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>120個のアイコン（Fill/Line バリアント）</li>
            <li>TypeScript完全対応</li>
            <li>Tree-shaking対応</li>
            <li>カスタマイズ可能なサイズ・カラー</li>
            <li>アクセシビリティ対応</li>
          </ul>
        </section>

        <section className="border-t border-gray-200 dark:border-gray-700 pt-12">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">すべてのアイコンを見る</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              検索機能で60種類のアイコン（Fill/Line）から簡単に探せます
            </p>
            <Link
              href="/icons"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-lg transition-colors"
            >
              <SearchFill size={24} />
              アイコンを検索
              <ArrowRightFill size={20} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
