---
layout: default
title: "思惟奈ちゃん(sina-chan)"
---
<section class="top-image"></section>
<br>
<h2 class="main-title">思惟奈ちゃん(sina-chan)について</h2>
思惟奈ちゃん(sina-chan)は、様々な機能を兼ね備えている、Discordbotです。
現在、50サーバーを超えるサーバーで利用されています。あなたのサーバーにも追加してみませんか?

<a class="btn-blue" href="https://discordapp.com/api/oauth2/authorize?client_id=462885760043843584&permissions=1043721302&scope=bot">
招待する(Discord)
</a>

### こんなことができます!
いろいろー

<h2 class="top-black">おしらせ</h2>
おしらせです。
<br>
{% for post in site.categories.NEWS %}
{{ post.date | date:"%Y/%-m/%d" }}:<a href="{{ post.url }}">{{ post.title }}</a>
{% endfor %}
<br>


<h2 class="main-title">開発チームについて</h2>
開発チームについては以下をご覧ください。

<a class="btn-blue" href="">開発チームについて</a>
<br>

### 開発チームのつぶやき
<br>
{% for post in site.categories.team %}
{{ post.date }}<a href="{{ post.url }}">{{ post.title }}</a>
{% endfor %}

<h2 class="top-black">お問い合わせ</h2>
以下の手段よりご連絡ください。

<a class="btn-blue" href="https://discord.gg/udA3qgZ">Discordから</a>
