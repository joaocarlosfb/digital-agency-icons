import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  metadataBase: new URL('https://digital-agency-icons.vercel.app'),
  title: {
    default: 'Digital Agency Icons - デジタル庁アイコンの非公式ライブラリ',
    template: '%s | Digital Agency Icons',
  },
  description:
    'デジタル庁デザインシステムのアイコンを、React・Vue・Svelteで簡単に使える非公式コンポーネントライブラリ。120個のアイコン（Fill/Line）、TypeScript完全対応、Tree-shaking対応。',
  keywords: [
    'デジタル庁',
    'Digital Agency',
    'アイコン',
    'Icons',
    'React',
    'Vue',
    'Svelte',
    'TypeScript',
    'デザインシステム',
    'Design System',
    '日本政府',
    'Japanese Government',
  ],
  authors: [{ name: 'imaimai17468' }],
  creator: 'imaimai17468',
  publisher: 'imaimai17468',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://digital-agency-icons.vercel.app',
    title: 'Digital Agency Icons - デジタル庁アイコンの非公式ライブラリ',
    description:
      'デジタル庁デザインシステムのアイコンを、React・Vue・Svelteで簡単に使える非公式コンポーネントライブラリ',
    siteName: 'Digital Agency Icons',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Agency Icons - デジタル庁アイコンの非公式ライブラリ',
    description:
      'デジタル庁デザインシステムのアイコンを、React・Vue・Svelteで簡単に使える非公式コンポーネントライブラリ',
    creator: '@imaimai17468',
  },
  alternates: {
    canonical: 'https://digital-agency-icons.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Digital Agency Icons',
    description:
      'デジタル庁デザインシステムのアイコンを、React・Vue・Svelteで簡単に使える非公式コンポーネントライブラリ',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'JPY',
    },
    author: {
      '@type': 'Person',
      name: 'imaimai17468',
    },
    programmingLanguage: ['TypeScript', 'JavaScript'],
    softwareVersion: '0.0.3',
  };

  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
