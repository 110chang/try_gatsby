---
path: "/blog/my-first-post"
title: はじめてRuby gemを作った時のメモ
date: "2017-11-07"
---

できたもの

[Rubyrubi](https://rubygems.org/gems/rubyrubi)

READMORE

# Rubygemsに登録

なにはともあれ公開するなら[Rubygems](https://rubygems.org/)にアカウント（？）を作る

# ひな形作成

```bash
bundle gem hogehoge -t
```

-tでRSpecのテストがつく。TDDで作ります。

# gemspecを編集

summery/description/homepageあたりを入力する。`TODO`を残していると`rake/build`するとき怒られる。

`Prevent pushing this gem to...`の後段のセクションはコメントアウトする。これは間違って公開してはいけないgemを公開しないようになっているらしいです。

```
ERROR:  While executing gem ... (Gem::CommandLineError)
    Too many gem names (/Users/itochang/gems/hogefuga/pkg/hogefuga-0.1.0.gem, Set, to, http://mygemserver.com); please specify only one
```

コメントアウトしないとこのエラーメッセージが出て`rake/release`の時にgemをリリースできない。

via http://qiita.com/tossh/items/08e7165e730dbc1a0e2e

# gitリポジトリ作成

リリースするならリモートも追加しとかないとだめみたい。リモートはgithubに作りましたが、gitbucketとかでもできるのかな？

# rake/build

現在のバージョンのpkgを作成。

# rake/release

Rubygemsへリリース。リモートへの`push`も行う模様。

最初は確か、Rubygemsに登録したメールとパスワードを聞かれたような気がする。

ほとんどお膳立てされており、よくわからないことも多いが、とりあえずできた。
ちなみに、作成したのは[Rubyrubi](https://rubygems.org/gems/rubyrubi)という、テキストにルビタグを貼って返すgemです。[Rubyfuri](https://rubygems.org/gems/rubyfuri)というgemを参考にさせていただきました。

# おまけ

Guardを入れました。

```ruby
gem "guard"
gem "guard-rspec"
```

nodeで言うgruntとかgulpですかね。`guard`コマンドでファイル監視＆テストができます。
