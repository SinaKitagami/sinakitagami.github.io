---
layout: post
title: 開発者たちのつぶやき
categories:
- TEAM
tag:
- ALL

---
## つぶやき一覧

これまでの開発者たちのつぶやきを載せています。

{% for post in site.categories.TEAM %}
{{ post.date | date:"%Y/%-m/%d" }}:<a href="{{ post.url }}" class="a-orange">{{ post.title }}</a>(Author: {{ post.author }})
{% endfor %}
<br>