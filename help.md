---
layout: post
title: "サポート"
categories: ["help"]
tag: ["help"]
---
<center>
## おやお手伝いが必要ですか?

おやおや、お手伝いが必要ですか?問題ありません。あなたにぴったりの、ヘルプを探しましょう。

<h2 class="main-title">探す</h2>
以下のカテゴリからお探しください。カテゴリ別に記事をご用意しています。お探しのカテゴリが見つかりませんか?<a class="a-orange" href="{{site.url}}/contant">お問い合わせフォーム</a>へ、ご意見をお聞かせください。

{% for post in site.categories %}
{% if post.tag==help %}<div class="btn-tag" href="{{site.url}}/help{{post.title}}">{{post.title}}</div>
{% else %}
{% endfor %}

### 過去に寄せられた質問
質問は募集中です。
</center>
