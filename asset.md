---
layout: post
title: "Asset"
author: TeamSina

---

{% for post in site.categories.asset %}
{{ post.date | date:"%Y/%m/%d" }}:<a href="{{ post.url }}" class="a-orange">{{ post.title }}</a>
{% endfor %}
