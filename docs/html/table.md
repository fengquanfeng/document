# table表格元素
`<table>`通过表格的形式来展示内容

`<table>`元素可以有:
- 0~1个`<colgroup>`元素
- 0~1个`<thead>`元素
- 0~多个`<tbody>`元素
- 0~多个`<tr>`元素
- 0~1个`<tfoot>`元素

```html
<!-- 一个简单的表格 -->
<table>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>
```
输出：
<table>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>

在html5之前通过border属性在设置边框，cellpadding设置内容盒单元格边框的空格是否显示，cellspacing设置单元格之间的空间大小等等。之前我有提过，关于“展示”部分都应该交由CSS决定，所以从前的那些`<table>`元素的属性已经通通**不推荐使用，而且是强烈的不推荐**。
- angin：交由CSS设置`<table>`元素的margin
- border：交由CSS设置`<table><tr><td>`的border，或者border-color，border-width，border-style
- cellpadding：交由CSS设置`<td>`元素的padding
- cellspacing：交由CSS设置`<table>`元素的border-spacing
- bgcolor：交由CSS设置background-color
- ···

## colgroup元素

用于对表格中的列进行组合，只能在`<table>`元素中使用
···
