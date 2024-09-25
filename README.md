# namikiwi-site

自分のホームページ

## デプロイ方法
### AWSリソース作成
```
rain deploy aws/site.yaml namikisite --profile {profilename}
```

### コンテンツ更新
```
aws s3 sync ./www s3://namiki.kiwi --dryrun --profile {profilename}
```
