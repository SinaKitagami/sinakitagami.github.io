---
layout: post
title: "サポート"
categories: ["help"]
tag: ["help"]
date: 2020-01-04 0:00
author: Team Sina
---
<center>
<h2 class="main-title">お手伝いが必要ですか?</h2>

おやおや、お手伝いが必要ですか?問題ありません。あなたにぴったりの、ヘルプを探しましょう。
<br>
<h2 class="top-black">探す</h2>
以下のカテゴリからお探しください。カテゴリ別に記事をご用意しています。お探しのカテゴリが見つかりませんか?<a class="a-orange" href="{{site.url}}/contant">お問い合わせフォーム</a>へ、ご意見をお聞かせください。
<br>
{% for c in site.categories %}
{% if c.tag==help %}<div class="btn-tag" href="{{site.url}}/help/category/{{c.title}}">{{c.title}}</div>
{% else %}
{% endif %}
{% endfor %}
<br>
<h3>過去に寄せられた質問</h3>
質問は募集中です。
</center>
