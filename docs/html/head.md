# head元素

HTML `<head>` 元素规定文档相关的通用信息（元数据），包括文档的标题，文档的样式和脚本的链接（定义）等。这部分内容不会显式到页面上

## title元素

`<title>` 定义文档的标题，在所有 HTML 文档中是必需的。  
定义浏览器工具栏中的标题，提供页面被添加到收藏夹时的标题，显示在搜索引擎结果中的页面标题

```html
<head>
  <title>这里写网页标题</title>
</head>
```

## meta标签

元数据（Metadata）是数据的数据信息。  
`<meta>` 提供了 HTML 文档的元数据。元数据不会显示在客户端，但是会被浏览器解析。  
META元素通常用于指定网页的描述，关键词，文件的最后修改时间，作者及其他元数据。  
元数据可以被使用浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 Web 服务调用

```html
<head>
  <meta  >
</head>
```

```html
<!--定义文档的字符编码  -->
<meta charset="utf-8">

<!-- 定义文档关键词，用于搜索引擎 -->
<meta name="keywords" content="HTML, CSS, JavaScript, VUE...">

<!-- 定义web页面描述 -->
<meta name="description" content="Free Web tutorials on HTML and CSS">

<!-- 定义页面作者 -->
<meta name="author" content="zhangsan">

<!-- 
  viewport 视口
  width: 设置视口的宽度，为一个正整数，设置 width-device 表示视口宽度为设备宽度
  height:	设置视口的高度，这个属性对我们并不重要，很少使用
  initial-scale: 设置页面的初始缩放值，为一个数字，可以带小数
  minimum-scale:	允许用户的最小缩放值，为一个数字，可以带小数
  maximum-scale:	允许用户的最大缩放值，为一个数字，可以带小数
  user-scalable:	是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes代表允许
-->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

<!-- ie10以后支持，ie内核支持切换到edge -->
<meta http-equiv="X-UA-Compatible" content="ie=edge">
```
