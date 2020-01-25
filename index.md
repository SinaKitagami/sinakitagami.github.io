---
layout: default
title: "Sina"
---
# 思惟奈ちゃん(Sina-chan)
思惟奈ちゃんは、mii-10が保有するDiscordの総合ボットです。あなたも導入してみませんか?
<h2 class="main-header">できること</h2>
<ul>
{% for cmd in site.data.cmd %}
 <li>
   <img src="{{ site.url }}/img/{{ cmd.img }}">
   <h3>{{ cmd.name }}</h3>
   <p>{{ cmd.description }}</p>
 </li>
{% endfor %}
</ul>