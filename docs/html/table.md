# table表格元素
`<table>`通过表格的形式来展示内容，虽然现在在页面布局时候已经很少也极不推荐使用`<table>`来布局。但是对于一些数据内容展示的时候，`<table>`元素还是有一席之地的。

`<table>`元素的子元素可以有:
- 0~1个`<caption>` 元素
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

::: warning 注意
由于该站点对`<table>`等元素设置有样式，所以表格的显示带部分“样式”效果。原生的`<table>`在chrome下已经不带有边框以及隔行的背景色等
:::

在html5之前通过border属性设置边框，cellpadding设置内容盒单元格边框的空格是否显示，cellspacing设置单元格之间的空间大小等等。之前我有提过关于“展示”部分都应该交由CSS决定，所以从前的那些`<table>`元素的属性已经通通**不推荐使用，而且是强烈的不推荐**。
- angin：交由CSS设置`<table>`元素的margin
- border：交由CSS设置`<table><tr><td>`的border，或者border-color，border-width，border-style
- cellpadding：交由CSS设置`<td>`元素的padding
- cellspacing：交由CSS设置`<table>`元素的border-spacing
- bgcolor：交由CSS设置background-color
- ···

## caption元素
`<caption>`元素用于展示一个表格的表格，通常作为`<table>`的第一个子元素出现，而且是现实在表格内容的最前面。不过可以被CSS样式化，所以你可以通过CSS控制它的位置。比如放到表格的下面，看下面的例子
```html
<table>
    <caption style="caption-side:bottom;padding:5px;font-size:14px">表格的标题</caption>
    <tr>
      <td>The table body</td>
      <td>with two columns</td>
    </tr>
    <tr>
      <td>The table body</td>
      <td>with two columns</td>
    </tr>
</table>
```
输出：
<table>
    <caption style="caption-side:bottom;padding:5px;font-size:14px">表格的标题</caption>
    <tr>
      <td>The table body</td>
      <td>with two columns</td>
    </tr>
    <tr>
      <td>The table body</td>
      <td>with two columns</td>
    </tr>
</table>

## colgroup元素

`<colgroup>`表示表格列组用于对表格中的列进行组合，只能在`<table>`元素中使用，如果有`<caption>`元素，那就加在`<caption>`元素的后面，以及`<thead><th><tbody><tfoot><tr>`元素的之前。
通过`<colgroup>`元素以及`<col>`元素可以对整列应用样式。而且如果该元素的第一个子元素是`<col>`，那么开始标签页可以被省略！
```html
<table>
  <colgroup>
    <col span="2" style="background-color:lightblue">
    <col style="background-color:lightcoral">
  </colgroup>
  <tr>
    <th>ISBN</th>
    <th>Title</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>3476896</td>
    <td>My first HTML</td>
    <td>$53</td>
  </tr>
</table>
```
输出：
<table>
  <colgroup>
    <col span="2" style="background-color:lightblue">
    <col style="background-color:lightcoral">
  </colgroup>
  <tr/>
  <tr>
    <th>ISBN</th>
    <th>Title</th>
    <th>Price</th>
  </tr>
  <tr/>
  <tr>
    <td>3476896</td>
    <td>My first HTML</td>
    <td>$53</td>
  </tr>
</table>

## thead、tbody、tfoot元素
`<thead>`用于表示表格表头。不过`<thead>`元素可以有多个`<tr>`  
`<tbody>`通过和`<tr>`一起，用于表示表格主体。你可以省略`<tbody>`元素。而且如果`<table>`元素已经有直接的`<tr>`子元素，那么你就不要使用`<tbody>`了，起码MDN里是这么写的（However, it must not be present, if its parent `<table>` element has a `<tr>` element as a child.）。不过现在浏览器会自动给`<tr>`外面再添加上`<tbody>`  
`<tfoot>`用于表示表格的汇总行，如果有的话必须出现在表格的最后。子元素也可以有多个`<tr>`  
```html
<table>
    <caption>table title</caption>
    <thead>
        <tr>
            <th>Items</th>
            <th scope="col">Expenditure</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Donuts</th>
            <td>3,000</td>
        </tr>
        <tr>
            <th scope="row">Stationery</th>
            <td>18,000</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th scope="row">Totals</th>
            <td>21,000</td>
        </tr>
    </tfoot>
</table>
```
输出：
<table>
    <caption>table title</caption>
    <thead>
        <tr>
            <th>Items</th>
            <th scope="col">Expenditure</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Donuts</th>
            <td>3,000</td>
        </tr>
        <tr>
            <th scope="row">Stationery</th>
            <td>18,000</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th scope="row">Totals</th>
            <td>21,000</td>
        </tr>
    </tfoot>
</table>

## tr、th、td元素
`<tr>`定义表格中的行，`<tr>`元素下可以有`<td>和<th>`  
`<th>`定义标题单元，可以使用rowspan和colspan属性来跨行和跨列，默认值是1  
`<td>`定义数据单元，可以使用rowspan和colspan属性来跨行和跨列，默认值是1  
:::tip 提示
rowspan的跨行只能跨同一父元素下的`<tr>`，也就是无法从`<tbody>`跨到`<thead>`
:::
```html
<table>
    <caption>table title</caption>
    <thead>
      <tr>
        <th></th>
        <th>Items</th>
        <th>count</th>
        <th>price</th>
        <th>sum</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th rowspan="2">cart</th>
        <th>Donuts</th>
        <td>1</td>
        <td>3000</td>
        <td>3000</td>
      </tr>
      <tr>
        <th>Stationery</th>
        <td>2</td>
        <td>18000</td>
        <td>36000</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="4">Totals</th>
        <td>39000</td>
      </tr>
    </tfoot>
  </table>
```
输出：
<table>
    <caption>table title</caption>
    <thead>
      <tr>
        <th></th>
        <th>Items</th>
        <th>count</th>
        <th>price</th>
        <th>sum</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th rowspan="2">cart</th>
        <th>Donuts</th>
        <td>1</td>
        <td>3000</td>
        <td>3000</td>
      </tr>
      <tr>
        <th>Stationery</th>
        <td>2</td>
        <td>18000</td>
        <td>36000</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="4">Totals</th>
        <td>39000</td>
      </tr>
    </tfoot>
  </table>