# 列表元素

列表在显示上有缩进的效果，但不要为了缩进效果而使用列表。应该要**语义化**使用列表

## 有序列表

`<ol>`包含一个或多个`<li>`元素。这些`<li>`元素可以再包含嵌套的`<ol>`或`<ul>`元素。  
也就是说`<ol>`内只能是`<li>`，不能有其他元素

```html
<ol type="a" start="3">
  <li>列表1</li>
  <li>
    子列表
    <ol start="2">
      <li>--列表</li>
      <li>--列表</li>
    </ol>
  </li>
  <li>列表2</li>
</ol>
```
输出:
<ol type="a" start="3">
  <li>列表1</li>
  <li>子列表
    <ol start="2">
      <li>--列表</li>
      <li>--列表</li>
    </ol>
  </li>
  <li>列表2</li>
</ol>

---

type 属性制定编号类型：

- 'a'表示小写字母编号,
- 'A' 表示大写字母编号,
- 'i' 表示小写罗马数字编号,
- 'I' 表示大写罗马数字编号,
- '1' 表示数字编号（默认值）

不过涉及到"显示效果"，还是建议通过 CSS list-style-type 来设定。其实本质上`<ol>`的编号也是来资源UA默认设定的list-style-type

start 属性来修改编号起始值，属性值是数字，即便你的列表想从字母 b 开始，start 值也应该是 2（start="2"）

## 无序列表

相比于有序列表，`<ul>`无序列表使用更加广泛。

```html
<ul>
  <li>列表1</li>
  <li>列表2</li>
  <li>列表3</li>
</ul>
```
输出：
<ul>
  <li>列表1</li>
  <li>列表2</li>
  <li>列表3</li>
</ul>

---
你可以通过给 `<ul>` 设置 list-style-type 来达到跟`<ol>`同样的效果。

```html
<ul style="list-style-type:decimal;">
  <li>列表1</li>
  <li>列表2</li>
  <li>列表3</li>
</ul>
```
输出：
<ul style="list-style-type:decimal;">
  <li>列表1</li>
  <li>列表2</li>
  <li>列表3</li>
</ul>

## 描述列表

`<dl>`的内容是零个或多个组，每个组由一个或多个`<dt>`元素，后跟一个或多个`<dd>`元素组成。

```html
<!-- 单条语句单条描述 -->
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform,
    graphical web browser developed by the
    Mozilla Corporation and hundreds of
    volunteers.
  </dd>
</dl>
```
输出：
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform,
    graphical web browser developed by the
    Mozilla Corporation and hundreds of
    volunteers.
  </dd>
</dl>


```html
<!-- 多条语句单条描述 -->
<dl>
  <dt>Firefox</dt>
  <dt>Mozilla Firefox</dt>
  <dt>Fx</dt>
  <dd>
    A free, open source, cross-platform,
    graphical web browser developed by the
    Mozilla Corporation and hundreds of
    volunteers.
  </dd>
</dl>
```
输出：
<dl>
  <dt>Firefox</dt>
  <dt>Mozilla Firefox</dt>
  <dt>Fx</dt>
  <dd>
    A free, open source, cross-platform,
    graphical web browser developed by the
    Mozilla Corporation and hundreds of
    volunteers.
  </dd>
</dl>
