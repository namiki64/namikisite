# namikiwi-site

自分のホームページ

## TODO
- カスタムエラーページ
- アクセスログ有効化+ライフサイクルポリシー

## デプロイ方法
### AWSリソース作成
```
rain deploy aws/us-east-1/acm.yaml namikisite-acm --profile {profilename} --region us-east-1
rain deploy aws/site.yaml namikisite --profile {profilename}
```

### コンテンツ更新
```
aws s3 sync ./www s3://namiki.kiwi --dryrun --profile {profilename}
```
