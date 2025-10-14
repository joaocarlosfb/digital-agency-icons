# Contributing to Digital Agency Icons

このプロジェクトへの貢献に興味を持っていただきありがとうございます！

## 開発環境のセットアップ

### 必要な環境

- Node.js 18以上
- pnpm 8以上

### セットアップ手順

```bash
# リポジトリのクローン
git clone https://github.com/imaimai17468/digital-agency-icons.git
cd digital-agency-icons

# 依存関係のインストール
pnpm install

# パッケージのビルド
pnpm build

# 開発サーバーの起動
pnpm --filter @digital-agency-icons/docs dev
```

## CI/CDについて

### CI（継続的インテグレーション）

すべてのPRとmainブランチへのプッシュで自動的に実行されます：

- **Lint & Type Check**: コードの品質チェック
- **Build**: すべてのパッケージのビルド
- **Multi-version Test**: Node.js 18, 20, 22でのビルド確認

### CD（継続的デプロイ）

#### npm公開

npm公開は手動でトリガーします：

1. GitHub Actionsの「Publish to npm」ワークフローを開く
2. 「Run workflow」をクリック
3. 公開するバージョン（例: 0.0.3）を入力
4. 実行

**必要な準備:**
- GitHubのSecretsに`NPM_TOKEN`を設定する必要があります
- npmで認証トークンを取得: `npm token create`
- GitHubリポジトリの Settings > Secrets > Actions で設定

#### Vercelデプロイ

GitHubとVercelを連携することで、mainブランチへのプッシュで自動デプロイされます。

## プルリクエストのガイドライン

1. **ブランチを作成**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **変更をコミット**
   ```bash
   git commit -m "feat: add new feature"
   ```

   コミットメッセージは [Conventional Commits](https://www.conventionalcommits.org/) に従ってください：
   - `feat:` 新機能
   - `fix:` バグ修正
   - `docs:` ドキュメント変更
   - `chore:` ビルドやツールの変更
   - `refactor:` リファクタリング

3. **プッシュとPR作成**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **CIの成功を確認**
   PRを作成すると自動的にCIが実行されます。すべてのチェックが通過することを確認してください。

## パッケージ構造

```
digital-agency-icons/
├── packages/
│   ├── core/           # SVGデータとコア機能
│   └── react/          # Reactコンポーネント
├── apps/
│   └── docs/           # 紹介サイト
└── .github/
    └── workflows/      # GitHub Actions設定
```

## 質問や問題

IssueやDiscussionでお気軽にお問い合わせください！
