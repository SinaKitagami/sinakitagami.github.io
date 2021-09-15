---
layout: default-en
title: "思惟奈ちゃん(sina-chan)"
---
<center>
<div class="thumbnail">
    <section class="top-image"></section>
    <a class="btn-big" href="https://discordapp.com/api/oauth2/authorize?client_id=462885760043843584&permissions=1043721302&scope=bot">
    <i class="fas fa-angle-double-right"></i>Add to your server(Discord)
</a>
</div>

<br>

<h2 class="main-title">What is Sina-chan?</h2>
Sina-chan(思惟奈ちゃん) is a discord bot that has a lot of features.
It has been added to more than 1000 servers.
Why don't you invite this bot to your server?
<br>
<br>
<br>

<h3>Features</h3>
<br>
<ul class = "can">
    {% for command in site.data.functions-en %}
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
<h2 class="top-black">Notices</h2>
<br>
{% for post in site.categories.NEWS %}
{{ post.date | date:"%Y/%-m/%d" }}:<a href="{{ post.url }}" class="a-orange">{{ post.title }}</a><br>
{% endfor %}
<br>
<a class="btn-blue" href="{{site.url}}/news"><i class="fas fa-angle-double-right"></i>See more</a>
<br><br>
<h2 class="main-title">About developer team</h2>
See following page.
<br>
<a class="btn-blue" href="{{ site.url }}/aboutus"><i class="fas fa-angle-double-right"></i></a>
<br><br>

<h2 class="top-black">Developer's tweet</h2>
<br>
{% for post in site.categories.TEAM %}
{{ post.date | date:"%Y/%-m/%d" }}:<a href="{{ post.url }}" class="a-orange">{{ post.title }}</a>({{ post.author }})<br>
{% endfor %}
<br>
<a class="btn-blue" href="{{site.url}}/team"><i class="fas fa-angle-double-right"></i>See more</a>
<br>
<h3>Members</h3>
<br>
TeamSina has a lot of people that has their own skill. Here is a part of them.
<div class="yokonarabi">
{% for member in site.data.team %}
<img src="{{ site.url }}/img/teammember/{{ member.img }}" title="{{ member.name }}" class="team-img">
{% endfor %}
</div>
<br>
<h2 class="top-black">Contact us</h2>
<br>
Please contact us from following ways.
<br>
<a class="btn-blue" href="{{site.url}}/contact"><i class="fas fa-angle-double-right"></i>Contact form</a>
<br>
<a class="btn-blue" href="https://discord.gg/udA3qgZ"><i class="fas fa-angle-double-right"></i>Official discord server</a>
</center>
