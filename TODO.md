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

### Phase 1: プロジェクトセットアップ ✅
- [x] モノレポ環境構築（pnpm workspace + Turborepo）
- [x] 共通設定ファイル作成（tsconfig, prettier）
- [x] パッケージ構造作成（packages/, apps/）
- [x] packages/core/src/icons/ にSVGファイル配置（120個）

### Phase 2: コアパッケージ開発 ✅
- [x] packages/core セットアップ
- [x] SVGファイル→JSONデータ変換スクリプト作成
- [x] 共通型定義（IconProps等）
- [x] ユーティリティ関数（命名規則変換）

### Phase 3: Reactパッケージ開発 ✅
- [x] packages/react セットアップ
- [x] SVG→Reactコンポーネント自動生成スクリプト
- [x] アイコンコンポーネント実装（120個生成）
  - [x] サイズ・カラーのカスタマイズ対応
  - [x] className, style props対応
  - [x] aria-label等アクセシビリティ対応
  - [x] verticalAlign: middle でテキスト中央揃え対応
- [x] TypeScript型定義
- [x] ビルド設定（vite）
- [x] Tree-shaking対応

### Phase 4: Vue/Svelteパッケージ開発
- [ ] packages/vue セットアップ
- [ ] Vue用コンポーネント生成
- [ ] packages/svelte セットアップ
- [ ] Svelte用コンポーネント生成

### Phase 5: 紹介サイト開発 ✅
- [x] Next.js 15 プロジェクトセットアップ
- [x] デザインシステム構築（Tailwind CSS）
- [x] トップページ
  - [x] クイックデモセクション
  - [x] インストール・使い方セクション
  - [x] 検索ページへのリンク
- [x] アイコン一覧ページ（/icons）
  - [x] リアルタイム検索機能（日本語・英語対応）
  - [x] カテゴリーフィルター（10種類）
  - [x] Fill/Line切り替え
  - [x] レスポンシブグリッド表示
- [x] アイコン詳細モーダル
  - [x] インポート文コピー機能
  - [x] 基本的な使い方コピー機能
  - [x] カスタマイズ例コピー機能
  - [x] 複数サイズのプレビュー（16-96px）
  - [x] Props一覧表示
  - [x] タグ表示
  - [x] Escキー・背景クリックで閉じる
- [x] コードスニペット表示（React）
- [x] ダークモード対応
- [x] レスポンシブ対応
- [x] アイコンと文字の中央揃え

### Phase 6: ドキュメント・テスト
- [x] README.md 作成
- [x] 各パッケージのREADME
  - [x] packages/core/README.md
  - [x] packages/react/README.md
- [ ] API ドキュメント（詳細版）
- [ ] ユニットテスト（Vitest）
- [ ] E2Eテスト（Playwright）

### Phase 7: 公開準備
- [ ] npm公開設定
- [ ] バージョニング設定（changesets）
- [ ] CI/CD設定（GitHub Actions）
- [x] ライセンス確認（MIT）
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

## 完成した機能

### アイコンライブラリ
- ✅ 120個のアイコン（60種類 × 2バリアント: Fill/Line）
- ✅ TypeScript完全対応
- ✅ Tree-shaking対応（個別インポート可能）
- ✅ カスタマイズ可能なProps（size, color, className, style, aria-label, title）
- ✅ アクセシビリティ対応
- ✅ インライン表示時の中央揃え（verticalAlign: middle）

### 紹介サイト機能
- ✅ リアルタイム検索（日本語・英語タグ対応）
- ✅ カテゴリーフィルター（10種類）
  - すべて、ナビゲーション、アクション、書類、通信、人物、金融、行政、健康、システム
- ✅ Fill/Lineバリアント切り替え
- ✅ アイコン詳細モーダル
  - インポート文・使用例の即座にコピー可能
  - 複数サイズプレビュー
  - Props一覧表
- ✅ レスポンシブ＆ダークモード対応

### アクセス
- ローカル開発サーバー: http://localhost:3000
- アイコン検索: http://localhost:3000/icons

## 今後の拡張候補

### 優先度: 高
- [ ] Vue/Svelteパッケージの追加
- [ ] 紹介サイトのデプロイ（Vercel）
- [ ] npm公開

### 優先度: 中
- [ ] ユニットテスト追加
- [ ] CI/CD設定
- [ ] Storybookの追加
- [ ] アイコン使用統計の追加

### 優先度: 低
- [ ] アイコンアニメーション機能
- [ ] SVG最適化ツールの統合
- [ ] 複数カラーバリアントの追加
