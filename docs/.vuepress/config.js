// const sidebar = require('./configs/sidebar');
module.exports = {
  title: '前端文档',
  description: 'HTML,CSS,JS,DOM,BOM,HTTP,JavaScript,MarkDown,git,文档,前端...',
  base:'/docs/',
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    smoothScroll: true,
    sidebar: [
      {
        title: 'HTML',
        path: '/html/',
        sidebarDepth: 0,
        children: [
          ['/html/doctype', 'DOCTYPE'],
          ['/html/html', 'html元素'],
          ['/html/head', 'head元素'],
          ['/html/text', '文本元素'],
          ['/html/a','a元素'],
        ]
      },
      {
        title: 'CSS',
        path: '/css/',
        children: [
        ]
      },
      {
        title: 'JavaScript',
        path: '/javascript/',
        children: [
        ]
      }
    ]
  }

}