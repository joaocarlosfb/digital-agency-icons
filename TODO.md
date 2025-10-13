# デジタル庁アイコンライブラリ開発TODO

## プロジェクト概要
デジタル庁のアイコンをJSX/TSXでインストールできるライブラリを作成
- React, Vue, Svelteなど複数フレームワーク対応
- 紹介サイトも併設

## ディレクトリ構成

```
digital-agency-icons/
├── packages/
│   ├── core/                    # SVGデータとコア機能
│   │   ├── src/
│   │   │   ├── icons/          # 生成されたアイコンデータ
│   │   │   └── utils/          # 共通ユーティリティ
│   │   └── package.json
│   ├── react/                   # React用コンポーネント
│   │   ├── src/
│   │   │   ├── components/     # アイコンコンポーネント
│   │   │   └── index.ts
│   │   └── package.json
│   ├── vue/                     # Vue用コンポーネント
│   │   ├── src/
│   │   └── package.json
│   └── svelte/                  # Svelte用コンポーネント
│       ├── src/
│       └── package.json
├── apps/
│   └── docs/                    # 紹介サイト（Next.js推奨）
│       ├── src/
│       │   ├── app/            # App Router
│       │   ├── components/     # サイト用コンポーネント
│       │   └── styles/
│       ├── public/
│       └── package.json
├── assets/
│   └── icons/                   # 元のSVGファイル
├── scripts/
│   └── build-icons.ts          # SVG→コンポーネント生成スクリプト
├── package.json                 # ルートパッケージ
├── turbo.json                  # Turbo設定（モノレポ管理）
└── tsconfig.json               # 共通TypeScript設定
```

## 開発ステップ

### Phase 1: プロジェクトセットアップ
- [ ] モノレポ環境構築（Turborepo or pnpm workspace）
- [ ] 共通設定ファイル作成（tsconfig, eslint, prettier）
- [ ] パッケージ構造作成（packages/, apps/）
- [ ] assets/icons/ にSVGファイル配置

### Phase 2: コアパッケージ開発
- [ ] packages/core セットアップ
- [ ] SVGファイル→JSONデータ変換スクリプト作成
- [ ] 共通型定義（IconProps等）
- [ ] ユーティリティ関数（サイズ変換、カラー処理）

### Phase 3: Reactパッケージ開発
- [ ] packages/react セットアップ
- [ ] SVG→Reactコンポーネント自動生成スクリプト
- [ ] アイコンコンポーネント実装
  - [ ] サイズ・カラーのカスタマイズ対応
  - [ ] className, style props対応
  - [ ] aria-label等アクセシビリティ対応
- [ ] TypeScript型定義
- [ ] ビルド設定（rollup/vite）
- [ ] Tree-shaking対応

### Phase 4: Vue/Svelteパッケージ開発
- [ ] packages/vue セットアップ
- [ ] Vue用コンポーネント生成
- [ ] packages/svelte セットアップ
- [ ] Svelte用コンポーネント生成

### Phase 5: 紹介サイト開発
- [ ] Next.js 14+ プロジェクトセットアップ
- [ ] デザインシステム構築（Tailwind CSS + Shadcn/ui）
- [ ] トップページ
- [ ] アイコン一覧ページ（検索・フィルター機能）
- [ ] 各アイコン詳細ページ
- [ ] インストール・使い方ドキュメント
- [ ] コードスニペット表示（React/Vue/Svelte）
- [ ] ダークモード対応
- [ ] レスポンシブ対応

### Phase 6: ドキュメント・テスト
- [ ] README.md 作成
- [ ] 各パッケージのREADME
- [ ] API ドキュメント
- [ ] ユニットテスト（Vitest）
- [ ] E2Eテスト（Playwright）

### Phase 7: 公開準備
- [ ] npm公開設定
- [ ] バージョニング設定（changesets）
- [ ] CI/CD設定（GitHub Actions）
- [ ] ライセンス確認
- [ ] 紹介サイトデプロイ（Vercel推奨）

## 技術スタック

### モノレポ管理
- Turborepo または pnpm workspace

### ライブラリ
- TypeScript
- SVGR（SVG→React変換）
- Rollup/Vite（バンドル）

### 紹介サイト
- Next.js 14+ (App Router)
- Tailwind CSS
- Shadcn/ui
- MDX（ドキュメント）

## 参考ライブラリ
- Lucide Icons
- Heroicons
- React Icons
- Iconify

## メモ
- Tree-shaking対応で個別インポート可能にする
- アクセシビリティを重視
- 各フレームワークで一貫したAPI設計
- 紹介サイトでリアルタイムプレビュー機能
