---
layout: default
title: "思惟奈ちゃん(sina-chan)"
---
<center>
<div class="thumbnail">
    <section class="top-image"></section>
    <a class="btn-big" href="https://discordapp.com/api/oauth2/authorize?client_id=462885760043843584&permissions=1043721302&scope=bot">
    <i class="fas fa-angle-double-right"></i>招待する(Discord)
</a>
</div>

<br>

<h2 class="main-title">思惟奈ちゃん(sina-chan)について</h2>
<br>
思惟奈ちゃん(sina-chan)は、様々な機能を<br class="java">兼ね備えている、Discordbotです。
<br class="java">
現在、1000サーバーを超えるサーバーで<br class="java">利用されています。<br class="java">あなたのサーバーにも追加してみませんか?
<br>
<br>
<br>

<h3>こんなことができます!</h3>
<br>
<ul class = "can">
    {% for command in site.data.functions %}
    <li>
    <div><img src="{{site.url}}/img/{{command.img}}" alt="{{command.img}}" width="200" height="200" ></div>
    <br>
    <h3>{{ command.name }}</h3>
    <br>
    <p>{{ command.description }}</p>
    </li>
    {% endfor %}
</ul>
<br>
<h2 class="top-black">おしらせ</h2>
<br>
{% for post in site.categories.NEWS limit:5 %}
{{ post.date | date:"%Y/%-m/%d" }}:<a href="{{ post.url }}" class="a-orange">{{ post.title }}</a><br>
{% endfor %}
<br>
<a class="btn-blue" href="{{site.url}}/news"><i class="fas fa-angle-double-right"></i>もっと見る</a>
<br><br>
<h2 class="main-title">開発チームについて</h2>
<br>
TeamSinaには、様々な特技を持つ<br class="java">人材がいます。ここに書いてあるのは、<br class="java">ほんの一部のメンバーです。
<div class="yokonarabi">
{% for member in site.data.team %}
<img src="{{ site.url }}/img/teammember/{{ member.img }}" title="{{ member.name }}" class="team-img">
{% endfor %}
</div>
開発チームについては以下をご覧ください。
<br>
<a class="btn-blue" href="{{ site.url }}/aboutus"><i class="fas fa-angle-double-right"></i>開発チームについて</a>
<br><br>

<h2 class="top-black">開発チームのブログ</h2>
<br>
{% for post in site.categories.Blog limit:5 %}
{{ post.date | date:"%Y/%-m/%d" }}:<a href="{{ post.url }}" class="a-orange">{{ post.title }}</a>({{ post.author }})<br>
{% endfor %}
<br>
<a class="btn-blue" href="{{site.url}}/team"><i class="fas fa-angle-double-right"></i>もっと見る</a>
<br>
<h2 class="main-title">お問い合わせ</h2>
<br>
以下の手段よりご連絡ください。
<br>
<a class="btn-blue" href="{{site.url}}/contact"><i class="fas fa-angle-double-right"></i>お問い合わせフォーム</a>
<br>
<a class="btn-blue" href="https://discord.gg/UVMnARV"><i class="fas fa-angle-double-right"></i>Discordから</a>
</center>
