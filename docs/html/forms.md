# 表单元素

## form 元素

`<form>` 元素表示文档中的一个区域，这个区域包含部分提交信息，用来向服务器提交信息。

一般情况下，表单需要在 `<form>` 元素内提交

具有两个属性

- action：数据提交的地址
- method：数据提交方式，GET 或 POST

```html
<form action="" method="POST" id="myform">
  <fieldset>
    <legend>测试</legend>
    标题：<input type="text" />
  </fieldset>
</form>
```

输出：
<html-display>
  <form action="" method="POST">
    <fieldset>
        <legend >测试</legend>
        标题：<input  type="text">
    </fieldset>
  </form>
</html-display>

## label 元素

使用 `<lable>` 元素，用于描述表单，可以通过将表单元素放在 `<lable>` 元素中，或者通过 for 是属性将该元素的内容与表单元素相关联。

举个例子直观一些：

```html
<!--直接将表单放在lable元素中-->
<label>点我也可以选中输入框：<input type="text"/></label>
```
输出：
<html-display>
  <label>点我也可以选中输入框：<input type="text"></label>
</html-display>

```html
<!--通过for属性和表单元素的id属性绑定-->
<label for="username">点我也可以选中输入框：</label>
<input type="text" id="username" />
```
输出：
<html-display>
  <label for="username">点我也可以选中输入框：</label>
  <input type="text" id="username">
</html-display>

## input 元素

文本框，用于输入单行文本。MDN上说，`<input>`元素由于拥有诸多属性而异常强大，其中的type属性最重要。无论type属性是何值，都是基于HTMLInputElement接口，所以理论上说，他们共享一套相同的属性。但实际上大部分属性只作用域特定的一组type。具体[点击这里](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input)自行食用MDN吧。
### name属性
表单控件的名字。表单提交的时候，会以name/值对的形式提交到后台。
### type属性

表单类型，默认是text。type属性不同的时候，input元素的工作方式也是截然不同的

| type属性值  | 说明                           |                展示                 |
| :--------- | :---------------------------- | :---------------------------------: |
| text       | 普通文本框                   | <input type="text" />  |
| checkbox   | 允许选择/取消单个值的复选框    | <input type="checkbox" >点方框选中/再点取消选中  |
| color      | 颜色控件                    |         <input type="color" >        |
|            |                             |                                     |
|            |                             |                                     |
|            |                             |                                     |
|            |                             |                                     |
|            |                             |                                     |
|            |                             |                                     |
|            |                             |                                     |