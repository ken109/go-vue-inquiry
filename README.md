# go-vue-inquiry
## インストール
```
git clone https://github.com/ken109/go-vue-inquiry.git
cd go-vue-inquiry
```

## Docker composeでの起動
使用ポート：80, 8080, 33061
```
docker-compose up
docker-compose up
```
`docker-compose up`は2回行ってください。1回目起動時にmysqlの起動がAPIサーバーの起動に間に合わなくてAPIサーバーがうまく起動しないためです。

### WEBページ
http://localhost:8080/

### APIサーバー
http://localhost/api/

## Kubernetesでの起動
使用ポート：80, 3306
```
helm install nginx-stable/nginx-ingress --generate-name
skaffold dev
```

### WEBページ
http://localhost/

### APIサーバー
http://localhost/api/

## その他
33061ポートでDBにつなげます
