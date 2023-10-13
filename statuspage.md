---
layout: post
title: "ステータスページの説明"
author: TeamSina

---
<a href="{{site.url}}/statuspage-en" class="a-orange">Click here for the English version</a><br>
## Ⅰ. ステータスページとは？

現在の思椎奈ちゃんに関するサービスの動作状況を確認できるページです。

障害やメンテナンス実施時はステータスページが更新され、利用者の方にお知らせする役目を持っています。

## Ⅱ. 通知の受け取り

ステータスページでは

- メール
- Twitter
- RSS

で通知を受け取ることが出来ます。

また、<a href="{{site.url}}/discord" class="a-orange">サポートサーバー(Discord)</a>でも同じように通知を受け取ることが出来ます。

## Ⅲ. 各インシデント(障害・メンテナンス)の進捗

本ステータスベージでは各インシデントの進捗は以下の通りで進捗状況を更新しております。

<u>障害</u>

1. Investigating(Under Investigating)  原因調査中
2. Identified  原因調査が終了・修正作業中
3. Monitoring  修正作業完了・正常動作のモニタリング
4. Resolved  モニタリング(通常時は10分程度)完了・障害解消

<u>メンテナンス</u>

1. Scheduled  メンテナンススケジュール公開時の初期状態
2. In Progress  メンテナンス開始時
3. Verifying  メンテナンスでの作業完了・問題が発生していないかの検証フェーズ
4. Completed  検証フェーズ(通常時は10分程度)完了・メンテナンス終了

## Ⅳ. 障害レベル

ステータスページでは障害の重要度や影響範囲などから以下のレベル分けを行っております。

- None(障害レベル1) 主にお知らせ等に使用します
- Minor(障害レベル2) 軽微な障害時(パフォーマンス低下等)に使用します
- Major(障害レベル3,4) 中規模な障害時(システムのダウン等)に使用します
- Critical(障害レベル5) 大規模な障害時に使用します

本レベルは全ての障害情報発表時に掲載されます。

レベル分けは基本障害発生時に決定し、変更することはありませんが、調査によりレベルの引き上げを実施する場合があります。

## Ⅴ. リンク集

<a href="{{site.url}}" class="a-orange">公式サイト</a><br>
<a href="{{site.url}}/discord" class="a-orange">サポートサーバー(Discord)</a><br>
<a href="{{site.url}}/contact" class="a-orange">お問い合わせ</a>
