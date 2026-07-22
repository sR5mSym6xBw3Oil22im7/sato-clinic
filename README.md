# 佐藤医院 Webサイト

佐藤医院の静的Webサイト一式です。  
HTML / CSS / JavaScript のみで構成しており、サーバーサイド処理やデータベースは使用していません。  
GitHub Pages での公開を前提にした構成です。

## 概要

本リポジトリは、添付要件 `sato-clinic-kit_20260722.zip` と現行ソースをもとに整備した、医院向けコーポレートサイトです。  
トップページを中心に、診療内容、当院について、スタッフ紹介、FAQ、アクセス、予約・お問い合わせ、お知らせ詳細ページ群で構成されています。

## 主な実装内容

- トップページ `index.html`
- お知らせ一覧ページ `news-archive.html`
- お知らせ詳細ページ `news-detail.html` と各個別ページ
- 診療内容詳細ページ `medical-detail.html`
- 当院について詳細ページ `about-detail.html`
- よくあるご質問ページ `faq.html`
- 診療時間・所在地ページ `access.html`
- 予約・お問い合わせページ `reservation.html`
- お知らせ更新導線ページ `news-update.html`

## 技術構成

- HTML5
- CSS3
- Vanilla JavaScript
- 文字コード: UTF-8

## ディレクトリ構成

```text
.
├─ about-detail.html
├─ access.html
├─ faq.html
├─ index.html
├─ medical-detail.html
├─ news-archive.html
├─ news-detail.html
├─ news-update.html
├─ reservation.html
├─ css/
│  └─ style.css
├─ js/
│  ├─ contact.js
│  ├─ news-data.js
│  ├─ news-update-popup.js
│  └─ news.js
├─ img/
└─ doc/
   ├─ index.html
   ├─ requirements.html
   ├─ design.html
   ├─ test-plan.html
   ├─ delivery-checklist.html
   ├─ style.css
   └─ script.js
```

## ローカル確認方法

`index.html` をブラウザで直接開いて確認できます。  
相対パスで構成しているため、簡易的な静的配信環境でもそのまま表示できます。

## 注意事項

- 予約・お問い合わせ、お知らせ更新などの一部導線は、仕様上 `Comming Soon` 表示で着地します。
- お知らせは `js/news-data.js` の配列データをもとに描画しています。
- 診療時間は要件誤記の訂正にあわせて、午前 `9:00〜12:00`、午後 `13:00〜18:00` を正として実装しています。

## 納品ドキュメント

納品ドキュメントは `doc/` 配下に格納しています。

- `doc/index.html`: ドキュメントトップ
- `doc/requirements.html`: 要件定義書
- `doc/design.html`: 設計書
- `doc/test-plan.html`: テスト仕様書
- `doc/delivery-checklist.html`: 納品一覧・確認書

## ライセンス

ライセンス表記は [LICENSE](./LICENSE) を参照してください。
