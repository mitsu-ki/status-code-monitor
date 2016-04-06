# HTTPステータスコードの定期監視サンプル

任意のサイトのステータスコードを、設定時間毎に監視するサンプルファイル
launchdにて、npmスクリプトを実行します

### セットアップ

はじめに各種設定を行う

#### プロジェクトフォルダ設定

次のファイルの [project directory] 部分を、任意のプロジェクトフォルダに設定する

- cron.plist
- start.sh


#### index.js

ステータスコードを監視するサイトURLと、投稿するSlackのエンドポイントを設定

```const url = '[site url]';
const endpoint = '[slack endpoind]';```


#### start.sh

nodebrewでの node バージョン管理前提でPATHを通しているので、環境に合わせて適宜変更


#### npm install

パッケージをインストールする

```
$ npm install
```

#### cron.plist

ファイル内のコメントを参考に、実行時間、ログの出力等を設定


### launchd

launchd 実行コマンド

#### start

```
$ launchctl load [project directory]/cron.plist
```

#### stop

```
$ launchctl unload [project directory]/cron.plist
```