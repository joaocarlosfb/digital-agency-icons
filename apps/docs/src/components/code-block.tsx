'use client';

import { useState } from 'react';

interface CodeBlockProps {
  npm?: string;
  yarn?: string;
  pnpm?: string;
}

export function CodeBlock({ npm, yarn, pnpm }: CodeBlockProps) {
  const [selected, setSelected] = useState<'pnpm' | 'npm' | 'yarn'>('pnpm');

  const commands = {
    pnpm,
    npm,
    yarn,
  };

  return (
    <div>
      <div className="flex gap-2 mb-3">
        {pnpm && (
          <button
            onClick={() => setSelected('pnpm')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              selected === 'pnpm'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            pnpm
          </button>
        )}
        {npm && (
          <button
            onClick={() => setSelected('npm')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              selected === 'npm'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            npm
          </button>
        )}
        {yarn && (
          <button
            onClick={() => setSelected('yarn')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              selected === 'yarn'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            yarn
          </button>
        )}
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
        <code className="text-sm">{commands[selected]}</code>
      </div>
    </div>
  );
}
