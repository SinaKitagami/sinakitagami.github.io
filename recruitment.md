---
layout: post
title: チームメンバー募集
categories:
- recruitment
tag:
- ALL
author: TeamSina
date: 20203より

---
## Team Sinaに参加してみませんか？

Team Sinaでは随時新しいチームメンバーを募集しています。

気になる方は詳細をご確認の上ご応募ください。

皆さんからのご応募をお待ちしております！

現在掲載中の求人

{% for post in site.categories.recruitment %}
{{ post.date | date:"%Y/%-m/%d" }}:<a href="{{ post.url }}" class="a-orange">{{ post.title }}</a>(Author: {{ post.author }})
{% endfor %}
<br>
