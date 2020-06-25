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

文本框，用于输入单行文本。MDN上说，`<input>`元素由于拥有诸多属性而异常强大，其中的type属性最重要。无论type属性是何值，都是基于HTMLInputElement接口，所以理论上说，他们共享一套相同的属性。但实际上大部分属性只作用域特定的一组type。具体[点击这里](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input)自行食用吧。
### name属性
表单控件的名字。表单提交的时候，会以name:值对的形式提交到后台。
### type属性

表单类型，默认是text。type属性不同的时候，input元素的工作方式也是截然不同的

| type属性值<div style="width:105px" /> | 说明                                                         |                        展示                        |
| :------------------------------------ | :----------------------------------------------------------- | :----------------------------------------------------------|
| text                                  | 普通文本框                                                   |      <input type="text" placeholder="就是普通的文本框">      |
| password                              | 密码框                                                       |                   <input type="password">                    |
| checkbox                              | 允许选择/取消单个值的复选框                                  |       <input type="checkbox" >       |
| radio                                 | 单选框，允许在多个拥有相同 name 值的选项中选中其中一个。添加checked属性，可以让这一项默认选中 | <input type="radio" name="sex" checked >男<input type="radio"  name="sex" >女 |
| color                                 | 颜色控件                                                     |                    <input type="color" >                     |
| date                                  | 年、月、日的日期控件                                         |                     <input type="date">                      |
| datetime-local                        | 年、月、日、时、分的日期时间控件。如果要修改value，要用yyyy-MM-ddThh:mm的格式。而且你可以设定选择范围：min=""和max="" | <input type="datetime-local" min="2020-01-01T00:00"  max="2030-12-31T23:59"> |
| month                                 | 输入年和月的控件，min和max属性可以设置选择范围               |                    <input type="month" >                     |
| week                                  | 输入年、周组成的日期，不包括时区                             |                     <input type="week">                      |
| time                                  | 用于输入时间的控件，不包括时区                               |                     <input type="time">                      |
| email                                 | 编辑邮箱的区域，据说如果浏览器支持的话还会自动验证邮箱格式。 |                     <input type="email">                     |
| file                                  | 让用户选择文件，使用accept属性限定文件类型。audio/*，"video/*，image/*，分别表示音频、视频、图片 |                    <input type="file" />                     |
| hidden                                | 隐藏的空间，但是数据仍然会提交到服务器。往往用来提交不被用户看到或修改的数据。不过通过开发者工具或者查看源代码依然可以看到这部分代码。你猜右边有没有隐藏的input |                    <input type="hidden" >                    |
| image                                 | 用于创建图形提交按钮，这时候input元素不接受value属性。要显示的图像路径在src属性中指定。而且alt属性也被作为替代文本。 |                                                              |
| number                                | 用于输入数字的控件。如果支持的话，会显示滚动按钮，并且只能输入数字。拥有动态键盘灯 设备上会显示数字键盘。默认值通过value属性指定。min和max指定最小和最大值。step属性指定步进。步进可以是0.01 |               <input type="number" step="10">                |
| range                                 | 允许用户指定一个必须不小于给定值，并且不超过另一个给定值的数值。默认min是0，max是100。常用于音量控制，颜色配置（颜色通道，透明度，亮度等），游戏中可是距离等配置。总结下就是对于一些百分比的值，那么就用这个。也可以通过step来控制粒度，默认是1，也可以是0.01。<br />可以通过list属性来指定一个datalist，不过即便datalist指定了几个固定的option，range还是可以获取到范围内的任意值。 |                    <input type="range" >                     |
| tel                                   | 用于输入电话号码的控件，那么如果是支持电话的设备，就会弹出的数字键盘。 |                      <input type="tel">                      |



有很多type属性并不是所有浏览器都支持，并且各家浏览器展现形式也不同。比如datetime-local的浏览器支持（截止2020/6/13）就惨不忍睹。具体[点击这里](https://www.caniuse.com/)查询吧。

