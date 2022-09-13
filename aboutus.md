---
layout: post
title: チームについて
date: 2020-01-04 0:00
author: Team Sina
---
<center>
<h2 class="main-title">Team Sinaについて</h2>
<br>
<span class="letter-spacing">Team Sinaは、mii-10をはじめとした、</span><br class="java">思惟奈ちゃんの開発チームです。<br>

このページでは、<br class="java">メンバーを紹介します。<br>

ちなみにページの日付は、設立時の日付です。<br>
<h2 class="top-black">メンバー</h2><br>
{% for member in site.data.team %}
<br>
<h3>{{ member.name }}</h3>
<br>
<img src="{{ site.url }}/img/teammember/{{ member.img }}" title="{{ member.name }}" class="team-img">
<br>
<table>
<tr>
<th>スキル</th>
<td>{{ member.skill }}</td>
</tr>
<tr>
<th>TeamSinaとしての活動</th>
<td>{{ member.permission }}</td>
</tr>
<tr>
<th>作ったコマンド</th>
<td>{{ member.command }}</td>
</tr>
<tr>
<th>ウェブサイト</th>
<td>
{% if member.website == "none" %}
    {{ member.w-s }}
{% else %}
    <a href="{{ member.website }}" class="a-orange">{{ member.w-s }}</a>
    {% if member.website2 != "none" %}
        、<a href="{{ member.website2 }}" class="a-orange">{{ member.w-s2 }}</a>
    {% endif %}
{% endif %}
</td>
</tr>
<tr>
<th>自己紹介</th>
<td>{{ member.introduction }}</td>
</tr>
</table>
{% endfor %}
</center>
