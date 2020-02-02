---
layout: post
title: "開発者たちのつぶやき"
categories: ["TEAM"]
tag: ["ALL"]
---
## つぶやき一覧
これまでの開発者たちのつぶやきを載せています。

{% for post in site.categories.TEAM %}
{{ post.date | date:"%Y/%-m/%d" }}:<a href="{{ post.url }}" class="a-orange">{{ post.title }}</a>(Author by {{ post.author }})
{% endfor %}
<br>

## 記事について
つぶやきには以下の内容が含まれます。

1.機能開発日記

2.開発秘話

3.ちょっとした解説  

※情報等に誤りがあってもTeamSinaは責任を負いません。