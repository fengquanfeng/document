# DOCTYPE

`<!DOCTYPE>`文档类型声明，`<!DOCTYPE>`不是一个HTML标签，目的是要告诉浏览器应该使用什么样的文档类型定义（DTD）来解析文档。

`<!DOCTYPE>` 声明不区分大小写

## 常见的 DOCTYPE 声明

HTML5

```html
<!DOCTYPE html>
```

HTML 4.01 Strict
这个 DTD 包含所有 HTML 元素和属性，但不包括表象或过时的元素（如 font ）。框架集是不允许的。

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

HTML 4.01 Transitional
这个 DTD 包含所有 HTML 元素和属性，包括表象或过时的元素（如 font ）。框架集是不允许的。

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

HTML 4.01 Frameset
这个 DTD 与 HTML 4.01 Transitional 相同，但是允许使用框架集内容。

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```
