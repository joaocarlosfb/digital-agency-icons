# Digital Agency Icons

デジタル庁公式アイコンのReact/Vue/Svelteコンポーネントライブラリ

## 特徴

- 🎨 120個のアイコン（Fill/Line バリアント）
- ⚛️ React/Vue/Svelte対応（現在はReactのみ実装済み）
- 📦 Tree-shaking対応（個別インポート可能）
- 🔧 TypeScript完全対応
- ♿ アクセシビリティ対応
- 🎯 カスタマイズ可能なサイズ・カラー

## パッケージ

このモノレポには以下のパッケージが含まれています：

- `@imaimai17468/digital-agency-icons-core` - SVGデータとコアユーティリティ
- `@imaimai17468/digital-agency-icons-react` - Reactコンポーネント
- `@imaimai17468/digital-agency-icons-docs` - 紹介サイト（Next.js）

## インストール

```bash
# pnpm
pnpm add @imaimai17468/digital-agency-icons-react

# npm
npm install @imaimai17468/digital-agency-icons-react

# yarn
yarn add @imaimai17468/digital-agency-icons-react
```

## 使い方

### React

```tsx
import { AddFill, SearchLine, ArrowRightFill } from '@imaimai17468/digital-agency-icons-react';

function App() {
  return (
    <div>
      {/* デフォルト: 24px, currentColor */}
      <AddFill />

      {/* サイズとカラーをカスタマイズ */}
      <SearchLine size={32} color="#1A1A1C" />

      {/* アクセシビリティ対応 */}
      <ArrowRightFill
        size={24}
        color="currentColor"
        aria-label="次へ"
        title="次へ進む"
      />
    </div>
  );
}
```

### Props

全てのアイコンコンポーネントは以下のpropsをサポートしています：

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | アイコンのサイズ（px） |
| `color` | `string` | `'currentColor'` | アイコンの色 |
| `className` | `string` | - | CSSクラス |
| `style` | `React.CSSProperties` | - | インラインスタイル |
| `aria-label` | `string` | - | アクセシビリティラベル |
| `title` | `string` | - | ツールチップタイトル |

## 利用可能なアイコン

アイコンは **Fill** と **Line** の2つのバリアントで提供されています：

- **Fill**: 塗りつぶしスタイル（例: `AddFill`, `SearchFill`）
- **Line**: アウトラインスタイル（例: `AddLine`, `SearchLine`）

### アイコン一覧（一部）

- Add
- Application
- Arrival
- Arrow (Down, Left, Right, Up)
- Attention
- Authentication
- BankAccount
- Certification
- Child
- CodeReader
- Complete
- Copy
- Departure
- Documents
- Download
- EApplication
- Expenditure
- Family
- FastTrack
- FillableCard
- Health
- Help
- History
- House
- Immunization
- Inbox
- Income
- Information
- Invoice
- Itinerary
- Laws
- Luggage
- Mailing
- Me
- Medicine
- Menu
- Money
- MotherAndChild
- Municipality
- NewWindow
- Notification
- Password
- Pension
- PersonalComputer
- Printer
- PrivacyProtection
- PublicOffering
- SealCertificate
- Search
- Smartphone
- Specialist
- Stamp
- Tax
- Transactions
- Update
- Work

全アイコンの確認は紹介サイトをご覧ください。

## 開発

### セットアップ

```bash
# 依存関係のインストール
pnpm install

# 全パッケージのビルド
pnpm build

# 開発サーバーの起動（紹介サイト）
pnpm --filter @digital-agency-icons/docs dev
```

### プロジェクト構成

```
digital-agency-icons/
├── packages/
│   ├── core/           # SVGデータとコア機能
│   └── react/          # Reactコンポーネント
├── apps/
│   └── docs/           # 紹介サイト（Next.js）
└── assets/
    └── icons/          # 元のSVGファイル
```

### スクリプト

```bash
# 全パッケージのビルド
pnpm build

# 開発モード
pnpm dev

# リント
pnpm lint

# フォーマット
pnpm format
```

## ライセンス

MIT

## クレジット

アイコンデザイン: デジタル庁
