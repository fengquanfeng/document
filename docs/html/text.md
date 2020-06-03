# 文本元素

## h元素

h1~h6:表示一级标题~六级标题
建议语义化使用，在页面中`<h1>`开始使用,然后`<h2>`，并且避免在一个页面中多次使用`<h1>`。

```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

## p元素

`<p>`元素是块级元素。  

```html
<p>这里表示一个段落</p>
```

html5中提到`<p>`元素中允许的内容是[语句型(phrasing content)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content)
:::danger
`<p>`元素内不要出现h1~h6,div等其他块级元素。
:::

```html
<p><h1>这里是标题</h1></p>

<!--以上代码会被浏览器解析成  -->
<p></p>
<h1>这里是标题</h1>
<p></p>
```

```html
<p>
  文本文本
  <div>这里是div</div>
</p>

<!--以上代码会被浏览器解析成  -->
<p>文本文本</p>
<div>这里是div</div>
<p></p>

```
