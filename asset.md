---
layout: post
title: "Asset"
author: TeamSina

---

{% for post in site.categories.asset %}
<a href="{{ post.url }}" class="a-orange">{{ post.title }}</a>
{% endfor %}
