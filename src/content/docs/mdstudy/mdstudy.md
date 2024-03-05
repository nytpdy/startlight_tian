---
title: markdown10分钟快速入门
description: md10分钟入门
---


**简介**
Markdown是一种轻量级标记语言，排版语法简洁，让人们更多地关注内容本身而非排版。它使用易读易写的纯文本格式编写文档，可与HTML混编，可导出 HTML、PDF 以及本身的 .md 格式的文件。因简洁、高效、易读、易写，Markdown被大量使用，如Github、Wikipedia、简书等。

>语法学习非常简单,只需要10分钟不到,即可直接上手!!!

## 基础语法

### 标题语法

总结就是几级标题,就用几个#
| md | HTML | 预览效果 |
|---|---|---|
| # 一级标题 | \<h1>一级标题\</h1> | <h1>一级标题</h1> |
| ## 二级标题 | \<h2>二级标题\</h2> | <h2>二级标题</h2> |
| ### 三级标题 | \<h3>三级标题\</h3> | <h3>三级标题</h3> |
| #### 四级标题 | \<h4>四级标题\</h4> | <h4>四级标题</h4> |
| ##### 五级标题 | \<h5>五级标题\</h5> | <h5>五级标题</h5> |
| ###### 六级标题 | \<h6>六级标题\</h6> | <h6>六级标题</h6> |

---

### 段落及换行

| md | HTML | 预览效果 |
|---|---|---|
|I really like using Markdown.<br><br>I think I'll use it to format all of my documents from now on. | \<p>I really like using Markdown.\</p> <br><br> \<p>I think I'll use it to format all of my documents from now on.\</p> | <p>I really like using Markdown.</p><p>I think I'll use it to format all of my documents from now on.</p> |

>如语法显示一般,段落推荐直接书写,也可以使用p标签,不推荐在每一段之前进行首行缩进.一段的结束换行可以添加两个空格再回车或者使用\<br>进行换行

---

### 强调语法(粗体和斜体)

|类型| md | HTML | 预览效果 |
|---|---|---|---|
|粗体|我是\*\*粗体\*\* |我是\<strong>粗体\</strong>|我是<strong>粗体</strong>
|斜体|我是\*斜体\* |我是\<em>斜体\<em>|我是<em>斜体<em>
|加粗斜体|我是\*\*\*加粗斜体\*\*\* |我是\<strong>\<em>斜体\<em>\</strong>|我是<strong><em>加粗斜体<strong><em>

>如上所示,斜体两边各用一个*括起来,粗体两边用**括起来,加粗斜体则用\*\*\*
其中的*可以用下划线代替,如__加粗__ : __加粗__

---

### 列表语法

|类型| md | HTML | 预览效果 |
|---|---|---|---|
|有序列表|1. First item<br>2. Second item<br>3.Third item <br> 4. Fourth item | \<ol><br>\<li>First item\</li> <br> \<li>Second item\</li> <br> \<li>Third item\</li> <br> \<li>Fourth item\</li> <br> \</ol> | <ol><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ol>
|无序列表 |* First item <br> * Second item <br> * Third item <br> * Fourth item | \<ul><br>\<li>First item\</li> <br> \<li>Second item\</li> <br> \<li>Third item\</li> <br> \<li>Fourth item\</li> <br> \</ul> | <ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul>

>有序:要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点。数字不必按数学顺序排列，但是列表应当以数字 1 起始。

>无序:要创建无序列表，请在每个列表项前面添加破折号 (-)、星号 (*) 或加号 (+) 。缩进一个或多个列表项可创建嵌套列表。


---

### 引用语法
eg:
\> 这是一段引用文本。
\>\> 这是一段嵌套引用文本。

效果如下:
>这是markdown的引用语法
>> 这是一段嵌套引用文本。

>如上所示,使用一个\>来代表这是引用的文本,也可以使用\>\>来嵌套引用,用来表示引用或者强调

---

### 代码语法

语句中含有代码
| md | HTML | 预览效果 |
|---|---|---|
|我是\`code\` | 我是\<code>code\</code> | 我是`code`|

代码块


\```
printf("hello world");
\```

```C
printf("hello world");
```

>* 使用三个反引号创建代码块,要想代码语法有高亮,可以在代码块反引号后添加C,python等指定代码类型,想代码显示函数,可以加如下语句
{.line-numbers}<br> 
>* 要将单词或短语表示为代码，请将其包裹在反引号 (`) 中。

***

### 分割线

\***
\---
\___

***
---
___

>要创建分隔线，请在单独一行上使用三个或多个星号 (***)、破折号 (---) 或下划线 (___) ，并且不能包含其他内容。

***

### 链接

链接文本放在中括号内，链接地址放在后面的括号中，链接title可选。

超链接Markdown语法代码：\[超链接显示名](超链接地址 "超链接title")

对应的HTML代码：\<a href="超链接地址" title="超链接title">超链接显示名</a>

<p>这是一个链接 [我是百度链接](https://baidu.com)。</p>
渲染效果如下：

这是一个链接 [我是百度链接](https://baidu.com)。

***

#### 给链接增加 Title
链接title是当鼠标悬停在链接上时会出现的文字，这个title是可选的，它放在圆括号中链接地址后面，跟链接地址之间以空格分隔。

```md
这是一个链接 [我是百度链接](https://baidu.com "个性广告推荐器")。
```
渲染效果如下：

这是一个链接,添加了title [我是百度链接](https://baidu.com "个性广告推荐器")。

***

#### 网址和Email地址
使用尖括号可以很方便地把URL或者email地址变成可点击的链接。

```md
<https://baidu.com>
<gmail@example.com>
```
渲染效果如下：

<https://baidu.com>
<gmail@example.com>

***

#### 带格式化的链接
强调 链接, 在链接语法前后增加星号。 要将链接表示为代码，请在方括号中添加反引号。

```md
I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).
```
渲染效果如下：

I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).

#### 引用类型链接

引用样式链接是一种特殊的链接，它使URL在Markdown中更易于显示和阅读。参考样式链接分为两部分：与文本保持内联的部分以及存储在文件中其他位置的部分，以使文本易于阅读。
引用类型的链接的第一部分使用两组括号进行格式设置。第一组方括号包围应显示为链接的文本。第二组括号显示了一个标签，该标签用于指向您存储在文档其他位置的链接。

链接的第一部分
尽管不是必需的，可以在第一组和第二组括号之间包含一个空格。第二组括号中的标签不区分大小写，可以包含字母，数字，空格或标点符号。

链接的第二部分
引用第一部分的名字,冒号,然后使用<>包括网址,()包括title,小括号可以省略,一般放在文件末尾,是不会在md渲染中显示的,可以在有长链接时保持文档整洁

```md
[hobbit-hole] [Hobbit]
[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> (Hobbit lifestyles)
```

[hobbit-hole] [Hobbit]

[Hobbit]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> (Hobbit lifestyles)

***

### 图片语法

要添加图像，请使用感叹号 (!), 然后在方括号增加替代文本，图片链接放在圆括号里，括号里的链接后可以增加一个可选的图片标题文本。

```
插入图片Markdown语法代码：![图片alt](图片链接 "图片title")。
对应的HTML代码：<img src="图片链接" alt="图片alt" title="图片title">
```
```
![wlop-1se.jpg](https://ntd-1304354671.cos.ap-chengdu.myqcloud.com/mdPicture/wlop-1se.jpg)
```

实际效果
![wlop-1se.jpg](https://ntd-1304354671.cos.ap-chengdu.myqcloud.com/mdPicture/wlop-1se.jpg)

***

### 完结

到这里你已经入门了,可以开始使用md创作自己的文档了,当然md的语法不止于此,对于 Markdown 涵盖范围之外的标签，都可以直接在文件里面用 HTML 本身。如需使用 HTML，不需要额外标注这是 HTML 或是 Markdown，只需 HTML 标签添加到 Markdown 文本中即可。
