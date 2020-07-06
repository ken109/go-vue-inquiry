# go-vue-inquiry
## インストール
```
git clone https://github.com/ken109/go-vue-inquiry.git
cd go-vue-inquiry
```

## Docker composeでの起動
```
docker-compose up
docker-compose up
```
`docker-compose up`は2回行ってください。1回目起動時にmysqlの起動がAPIサーバーの起動に間に合わなくてAPIサーバーがうまく起動しないためです。

### アクセス
#### WEBページ
http://localhost/api/

#### APIサーバー
http://localhost:8080/

## Kubernetesでの起動
```
helm install nginx-stable/nginx-ingress --generate-name
skaffold dev
```

### アクセス
#### WEBページ
http://localhost/api/

#### APIサーバー
http://localhost/

## その他
33061ポートでDBにつなげます
