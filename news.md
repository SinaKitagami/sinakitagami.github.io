---
layout: post
title: "おしらせ"
categories: ["NEWS"]
tag: ["ALL"]
author: "TeamSina"
date: 2020より
---
## お知らせ一覧
これまでの更新等を載せています。

{% for post in site.categories.NEWS %}
{{ post.date | date:"%Y/%-m/%d" }}:<a href="{{ post.url }}" class="a-orange">{{ post.title }}</a>(Author: {{ post.author }})
{% endfor %}
<br>

## 記事について
お知らせ記事には以下の内容が含まれます:

1.新しい機能の追加

2.メンテナンス情報

3.このサイトについての更新

4.運営スタッフについて
