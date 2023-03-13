# phina-ts-template-test1
このリポジトリは phina.js での開発を TypeScript で行うための実験的なテンプレートです。
class 構文を用いたクラスの定義と継承ができるため、型定義の入力補完を子クラスでも利用することが可能になります。

ソースコードのエントリポイントは `src/app.ts` です。

## 機能
以下の機能が使用可能になっています。

### phina.js の TypeScript 型定義
[phina.js.d.ts](https://github.com/negiwine/phina.js.d.ts) を用いた簡易的な型定義が利用可能です。

### class 構文のサポート
[phina-patch-es-classes-support](https://github.com/negiwine/phina-patch-es-classes-support) を用いて phina.createClass で生成されたクラスを ES Classes 互換にしています。
phina.js の全てのビルトインクラスを class 構文で継承可能です。

### TypeScript のコンパイルとバンドル
webpack を用いて TypeScript のコンパイルとバンドルが可能です。

### アセットファイルの自動読み込み
[dimic](https://github.com/pentamania/dimic) を用いて `src/assets` 以下のアセットファイルを自動的に `src/assets/index.ts` にリストアップします。

### ソースコードの自動フォーマット
ESLint と Prettier を用いてソースコードの自動フォーマットが可能です。
Visual Studio Code で利用するには ESLint プラグインが必要です。

### ライブリロード
webpack-dev-server を用いてライブリロードが可能です。

## スクリプト

### `npm start`
開発モードでアプリをビルドし、起動します。
ビルドされたアプリは `www` に配置されます。
ライブリロードが利用可能です。

### `npm build`
アプリを production モードでビルドします。
ビルドされたアプリは `www` に配置されます。

## 主な採用ライブラリ
- [phina.js](https://github.com/phinajs/phina.js)
- [phina.js.d.ts](https://github.com/negiwine/phina.js.d.ts)
- [phina-patch-es-classes-support](https://github.com/negiwine/phina-patch-es-classes-support)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [webpack](https://github.com/webpack/webpack)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- [esbuild](https://github.com/evanw/esbuild)
- [dimic](https://github.com/pentamania/dimic)
- [ESLint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)

## Lisence
WTFPL
