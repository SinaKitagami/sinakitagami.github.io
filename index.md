---
layout: default
title: "思惟奈ちゃん(sina-chan)"
---
<section class="top-image"></section>
<br>
<h2 class="main-title">思惟奈ちゃん(sina-chan)について</h2>
思惟奈ちゃん(sina-chan)は、様々な機能を兼ね備えている、Discordbotです。
現在、50サーバーを超えるサーバーで利用されています。あなたのサーバーにも追加してみませんか?
<br>
<a class="btn-blue" href="https://discordapp.com/api/oauth2/authorize?client_id=462885760043843584&permissions=1043721302&scope=bot">
招待する(Discord)
</a>
<br>

### こんなことができます!
グローバルチャット,音楽機能,サーバー管理機能...その他いろいろ!!
<br>
<h2 class="top-black">おしらせ</h2>
おしらせです。
<br>
{% for post in site.categories.NEWS %}
{{ post.date | date:"%Y/%-m/%d" }}:<a href="{{ post.url }}" class="a-orange">{{ post.title }}</a>
{% endfor %}
<br>
<a class="btn-blue" href="{{site.url}}/news"><i class="fas fa-angle-double-right"></i>もっと見る</a>
<br><br>
<h2 class="main-title">開発チームについて</h2>
開発チームについては以下をご覧ください。

<a class="btn-blue" href="{{ site.url }}/aboutus"><i class="fas fa-angle-double-right"></i>開発チームについて</a>
<br><br>

### 開発チームのつぶやき
<br>
{% for post in site.categories.TEAM %}
{{ post.date | date:"%Y/%-m/%d" }}:<a href="{{ post.url }}" class="a-orange">{{ post.title }}</a>({{ post.author }})
{% endfor %}
<br>
<a class="btn-blue" href="{{site.url}}/team"><i class="fas fa-angle-double-right"></i>もっと見る</a>
<br><br>

### メンバー
TeamSinaには、様々な特技を持つ人材がいます。ここに書いてあるのは、ほんの一部のメンバーです。
<div class="member">
{% for member in site.data.team %}
<img src="{{ site.url }}/img/teammember/{{ member.img }}" title="{{ member.name }}" class="team-img">
{% endfor %}
</div>
<br>
<h2 class="top-black">お問い合わせ</h2>
以下の手段よりご連絡ください。

<a class="btn-blue" href="https://discord.gg/udA3qgZ"><i class="fas fa-angle-double-right"></i>Discordから</a>