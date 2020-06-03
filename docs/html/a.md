# a元素

`<a>` 元素（或称锚元素）可以创建通向其他网页、文件、同一页面内的位置、电子邮件地址或任何其他 URL 的超链接。
`<a>` 元素几乎可以包含任何元素

## 属性

`<a>` 支持[全局属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes)。

### href属性

它指定链接的目标  
属性值可以是绝对url，相对url，锚点（#id）

``` html
<!-- 基本用法 -->
<a href="https://www.aliyun.com/">阿里云</a>

<!-- 创建一个email链接 -->
<a href="mailto:fengqfajax@163.com">Send email to fengqf</a>

<!-- 拨打电话 -->
<a href="tel:+123456789">电话</a>

<!-- 链接到锚点-->
<a href="#info"></a>

<!-- 返回顶部 -->
<a href="#">返回顶部</a>
```

### target属性

默认值：_self  
可取值：_blank,_self,_parent,_top,framename  
  
_blank：在新窗口打开,即到一个新的未命名的HTML4窗口或HTML5浏览器上下文  
_self：在相同的框架打开,即当前的响应到同一HTML 4 frame（或HTML5浏览上下文）  
_parent：加载响应到当前框架的HTML4父框架或当前的HTML5浏览上下文的父浏览上下文。如果没parent框架或者浏览上下文，此选项的行为方式相同_self。  
_top：HTML4中加载的响应成完整的，原来的窗口，取消所有其它frame。 HTML5中：加载响应进入顶层浏览上下文（即，浏览上下文，它是当前的一个的祖先，并且没有parent）。如果没有parent框架或者浏览上下文，此选项的行为方式相同_self

```html
<a target="_blank|_self|_parent|_top">
```

### download属性

html5中新增的属性，指定下载链接

```html
<a download="filename">
```

```javascript
/**
 * 使用download属性将<canvas>保存为PNG
 * 如果你想允许用户下载一个HTML画布，你可以创建一个下载性和画布数据作为文件URL链接图像
*/
var link = document.createElement('a');
link.innerHTML = 'download image';

link.addEventListener('click', function(ev) {
    link.href = canvas.toDataURL();
    link.download = "mypainting.png";
}, false);

document.body.appendChild(link);

//以上代码来自于MDN zh-CN
```

::: warning
锚点标签常常通过将 href 属性设置为 `#` 或 `javascript:void(0)` 来创造一个能阻止页面刷新的伪按钮的方式被滥用。 这些属性值会在拖动 / 复制链接时导致意外行为，在新窗口 / 新标签打开链接，加入书签以及 JavaScript 仍在下载时会出现错误或被禁用。这也会向辅助技术（如屏幕阅读器）传达不正确的语义。在这些情况下，推荐使用 `<button>` 来代替。通常情况下，您应该只将锚点用于正常的 URL 导航。
:::
