# HTML 笔记

HTML是HyperText Markup Language，超文本标记语言的简称。  
是一种用于描述网页结构的语言，不是一种编程语言，而是一种标记语言  
  
"HTML 标签" 和 "HTML 元素" 通常都是描述同样的意思。  
但是严格来讲, 一个 HTML 元素包含了开始标签与结束标签

## 元素类别

在HTML5之前，html标准中，元素被分为**块级元素**与**行内元素**，其实是按照display来属性开区分,这种区分更多是关注在“展示效果”。  

默认情况下**块级元素**会独占一行。并且一般块级元素可以包含行内元素和其他块级元素  

HTML5开始元素按照内容模型开区分  

1. 元数据型(metadata content)
2. 区块型(sectioning content)
3. 标题型(heading content)
4. 文档流型(flow content)
5. 语句型(phrasing content)
6. 内嵌型(embedded content)
7. 交互型(interactive content)

详见[内容分类](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Content_categories)，有英文阅读能力的小伙伴建议切换到English(US)

HTML5 之前的”块级“类别大致相当于 HTML5 中的文档流型，而”行内“类别相当于 HTML5 中的语句型

## 语义化

HTML元素都具有语义，当然可以只使用div元素来实现大部分效果。  

但是使用相应的语义是比较推荐的，比如h1，header，nav，aside等。

HTML5后强调了：  
 **选择哪个元素来展示，取决于需要展示的内容含义。而不是展示效果，展示效果都有CSS控制**  
上面这句话怎么理解呢？  
比如你需要一个展示一个加大加粗的文字。应该通过`<span>`元素，并且设置加大加粗的样式，而不是通过`<h1>`元素。虽然浏览器默认给`<h1>`元素添加了相应文本的样式。`<h1>`元素应该是在你展示的内容是**一级标题**的时候使用

### 为什么要语义化

1. 搜索引擎优化(SEO)，可以让搜索引擎更加容易理解我们网页的代码
2. 让浏览器理解网页，涉及到一部分浏览器插件比如阅读模式等等
3. 页面代码便于阅读

## 说明

本站**不会**对所有元素进行详细的笔记

可以点击[HTML5元素周期表](http://www.xuanfengge.com/funny/html5/element/)来食用html元素。感谢前辈制作的站点
