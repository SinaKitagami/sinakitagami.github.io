---
layout: post
title: おしらせ
categories:
- NEWS
tag:
- ALL
author: TeamSina
date: 2020より

---
## お知らせ一覧

これまでの更新等を載せています。

{% for post in site.categories.NEWS %}
<span class="tag">{{ post.date | date:"%Y/%-m/%d" }}</span> <a href="{{ post.url }}" class="a-orange">{{ post.title }}</a>(Author: {{ post.author }})
{% endfor %}
<br>