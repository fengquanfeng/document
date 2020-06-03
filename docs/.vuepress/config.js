// const sidebar = require('./configs/sidebar');
module.exports = {
  title: '前端笔记',
  description: 'HTML,CSS,JS,DOM,BOM,HTTP,JavaScript,MarkDown,git,文档,前端...',
  base: '/docs/',
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    smoothScroll: true,
    nextLinks: false,
    prevLinks: false,
    lastUpdated: '上次更新',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于本站', link: '/about' },
      { text: 'GitHub', link: 'https://github.com/fengquanfeng/document' },
    ],
    sidebar: [
      // {
      //   title: '关于本站',
      //   path: '/about'
      // },
      {
        title: 'HTML',
        path: '/html/',
        sidebarDepth: 0,
        collapsable: true,
        children: [
          ['/html/doctype', 'DOCTYPE'],
          ['/html/html', 'html元素'],
          ['/html/head', 'head元素'],
          ['/html/a', 'a元素'],
          ['/html/img', 'img元素'],
          ['/html/text', '文本元素'],
          ['/html/list', '列表元素'],
          ['/html/forms', '表单元素'],
          ['/html/container', '容器元素'],
          ['/html/table', '表格元素'],
          ['/html/media', '多媒体'],
          ['/html/others', '其他'],
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
      },
      {
        title: '正则表达式',
        path: '/regexp/',
        children: [
        ]
      },
    ]
  }

}