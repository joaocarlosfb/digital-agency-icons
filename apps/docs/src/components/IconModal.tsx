'use client';

import { useEffect, useState } from 'react';
import * as Icons from '@digital-agency-icons/react';
import type { IconInfo } from '@/lib/icons';

interface IconModalProps {
  icon: IconInfo | null;
  variant: 'fill' | 'line';
  onClose: () => void;
}

export function IconModal({ icon, variant, onClose }: IconModalProps) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (icon) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [icon, onClose]);

  if (!icon) return null;

  const componentName = variant === 'fill' ? icon.fillComponent : icon.lineComponent;
  const IconComponent = (Icons as any)[componentName];

  const importStatement = `import { ${componentName} } from '@digital-agency-icons/react';`;
  const usageExample = `<${componentName} size={24} color="currentColor" />`;
  const usageExampleWithProps = `<${componentName}
  size={32}
  color="#1A1A1C"
  className="my-icon"
  aria-label="${icon.name}"
/>`;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ヘッダー */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {IconComponent && (
              <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <IconComponent size={32} color="currentColor" />
              </div>
            )}
            <div>
              <h2 className="text-2xl font-bold">{icon.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {componentName} ({variant})
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="閉じる"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* コンテンツ */}
        <div className="p-6 space-y-6">
          {/* インポート文 */}
          <section>
            <h3 className="text-lg font-semibold mb-3">インポート</h3>
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 pr-24 overflow-x-auto text-sm">
                <code>{importStatement}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(importStatement, 'import')}
                className="absolute top-3 right-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                {copiedItem === 'import' ? '✓ コピー完了' : 'コピー'}
              </button>
            </div>
          </section>

          {/* 基本的な使い方 */}
          <section>
            <h3 className="text-lg font-semibold mb-3">基本的な使い方</h3>
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 pr-24 overflow-x-auto text-sm">
                <code>{usageExample}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(usageExample, 'basic')}
                className="absolute top-3 right-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                {copiedItem === 'basic' ? '✓ コピー完了' : 'コピー'}
              </button>
            </div>
          </section>

          {/* プロパティ付きの使い方 */}
          <section>
            <h3 className="text-lg font-semibold mb-3">カスタマイズ例</h3>
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 pr-24 overflow-x-auto text-sm">
                <code>{usageExampleWithProps}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(usageExampleWithProps, 'advanced')}
                className="absolute top-3 right-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                {copiedItem === 'advanced' ? '✓ コピー完了' : 'コピー'}
              </button>
            </div>
          </section>

          {/* プレビュー */}
          <section>
            <h3 className="text-lg font-semibold mb-3">プレビュー</h3>
            <div className="grid grid-cols-3 gap-4">
              {[16, 24, 32, 48, 64, 96].map((size) => (
                <div
                  key={size}
                  className="flex flex-col items-center justify-center gap-2 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                >
                  {IconComponent && <IconComponent size={size} color="currentColor" />}
                  <span className="text-xs text-gray-500">{size}px</span>
                </div>
              ))}
            </div>
          </section>

          {/* Props */}
          <section>
            <h3 className="text-lg font-semibold mb-3">利用可能なProps</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold">Prop</th>
                    <th className="px-4 py-2 text-left font-semibold">型</th>
                    <th className="px-4 py-2 text-left font-semibold">デフォルト</th>
                    <th className="px-4 py-2 text-left font-semibold">説明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">size</td>
                    <td className="px-4 py-2 font-mono text-xs">number | string</td>
                    <td className="px-4 py-2 font-mono text-xs">24</td>
                    <td className="px-4 py-2">アイコンのサイズ（px）</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">color</td>
                    <td className="px-4 py-2 font-mono text-xs">string</td>
                    <td className="px-4 py-2 font-mono text-xs">currentColor</td>
                    <td className="px-4 py-2">アイコンの色</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">className</td>
                    <td className="px-4 py-2 font-mono text-xs">string</td>
                    <td className="px-4 py-2">-</td>
                    <td className="px-4 py-2">CSSクラス</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">style</td>
                    <td className="px-4 py-2 font-mono text-xs">CSSProperties</td>
                    <td className="px-4 py-2">-</td>
                    <td className="px-4 py-2">インラインスタイル</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">aria-label</td>
                    <td className="px-4 py-2 font-mono text-xs">string</td>
                    <td className="px-4 py-2">-</td>
                    <td className="px-4 py-2">アクセシビリティラベル</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">title</td>
                    <td className="px-4 py-2 font-mono text-xs">string</td>
                    <td className="px-4 py-2">-</td>
                    <td className="px-4 py-2">ツールチップタイトル</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* タグ */}
          {icon.tags.length > 0 && (
            <section>
              <h3 className="text-lg font-semibold mb-3">タグ</h3>
              <div className="flex flex-wrap gap-2">
                {icon.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
