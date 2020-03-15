---
layout: post
title: チームについて
date: 2020-01-04 0:00
author: Team Sina
---
<center>
<h2 class="main-title">Team Sinaについて</h2>
Team Sinaは、mii-10をはじめとした、思惟奈ちゃんの開発チームです。<br>

このページでは、メンバーを紹介します。<br>

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
<th>特技</th>
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
<td><a href="{{ member.website }}">{{ member.website }}</a></td>
</tr>
<tr>
<th>自己紹介</th>
<td>{{ member.introduction }}</td>
</tr>
</table>
{% endfor %}
</center>