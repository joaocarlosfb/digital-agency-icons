'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CodeBlockProps {
  npm?: string;
  yarn?: string;
  pnpm?: string;
}

export function CodeBlock({ npm, yarn, pnpm }: CodeBlockProps) {
  return (
    <Tabs defaultValue="pnpm" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="pnpm">pnpm</TabsTrigger>
        <TabsTrigger value="npm">npm</TabsTrigger>
        <TabsTrigger value="yarn">yarn</TabsTrigger>
      </TabsList>
      {pnpm && (
        <TabsContent value="pnpm">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <code className="text-sm">{pnpm}</code>
          </div>
        </TabsContent>
      )}
      {npm && (
        <TabsContent value="npm">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <code className="text-sm">{npm}</code>
          </div>
        </TabsContent>
      )}
      {yarn && (
        <TabsContent value="yarn">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <code className="text-sm">{yarn}</code>
          </div>
        </TabsContent>
      )}
    </Tabs>
  );
}
