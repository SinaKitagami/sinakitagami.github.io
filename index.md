---
layout: default
title: "Sina"
---
# 思惟奈ちゃん(Sina-chan)
思惟奈ちゃんは、mii-10が保有するDiscordの総合ボットです。あなたも導入してみませんか?
<h2 class="main-header">できること</h2>
<ul>
{% for f in site.data.functions %}
 <li>
   <img src="./img/{{ f.img }}">
   <h3>{{ f.name }}</h3>
   <p>{{ f.description }}</p>
 </li>
{% endfor %}
</ul>
