---
layout: post
title: チームメンバー募集
categories:
- recruitment
tag:
- ALL
author: TeamSina
date: 2023より

---
<center>
<h3 class="main-title">Team Sinaに参加してみませんか？</h3>
<br>
Team Sinaでは随時新しいチームメンバーを募集しています。<br>
気になる方は詳細をご確認の上ご応募ください。<br>
皆さんからのご応募をお待ちしております！<br>

<h3>現在掲載中の求人</h3>

{% for post in site.categories.recruitment %}
{{ post.date | date:"%Y/%m/%d" }}:<a href="{{ post.url }}" class="a-orange">{{ post.title }}</a>
{% endfor %}
<br>
