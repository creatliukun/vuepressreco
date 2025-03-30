import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  base: '/vuepressreco/', // 替换为仓库名称,解决样式丢失问题；指定站点的基础路径。如果站点托管在子目录下（如 GitHub Pages），需要设置此值以避免资源加载错误。
  title: "MuYang's Blog",
  description: '欢迎来到MuYang的博客',
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    logo: '/photo.png', // logo
    author: 'MuYang', // 作者
    authorAvatar: '/dog.png', // 头像
    docsRepo: 'https://github.com/creatliukun/vuepressreco.git',
    docsBranch: 'main',
    docsDir: 'vuepressreco', // 如果我们文档项目存放在工程的子目录，比如 /vuepressreco 文件夹下，我们需要设置 themeConfig.docsDir 为 /vuepressreco
    lastUpdatedText: '',
    // series 为原 sidebar; 为每个标签配置子项目
    series: {
      // 文档
      '/docs/html/': [
        {
          text: 'module one',
          children: ['home', 'theme'],
        },
        {
          text: 'module two',
          children: ['api', 'plugin'],
        },
      ],
      // 博客
      '/blogs/html/': [
        {
          text: 'module one',
          children: ['home', 'theme'],
        },
        {
          text: 'module two',
          children: ['api', 'plugin'],
        },
      ],
      '/blogs/css/': [
        {
          text: 'CSS选择器、新特性',
          children: ['2025/03290830', '2025/03290841'],
        },
        {
          text: 'module two',
          children: ['api', 'plugin'],
        },
      ],
    },
    // tags包含html、css、js、ajax、brower、vue、react、node、module、git
    // categories包含：前端三剑客[FrontThreeMusketeers]（html,css,js）、前端框架[FrontEndFrame](vue、react)、
    // 服务端[Server]（Node.js、ajax、axios）、模块化[Modularization]（module、git）浏览器[Brower]（brower）
    navbar: [
      { text: '主页', link: '/' },
      { text: '记录', link: '/categories/reco/1.html' },
      { text: '标签', link: '/tags/tag1/1.html' },
      {
        text: '学习笔记',
        children: [
          { text: 'HTML', link: '/blogs/html/index' },
          { text: 'CSS', link: '/blogs/css/index' },
          { text: 'JavaScript', link: '/blogs/javaScript/index' },
          { text: 'Ajax', link: '/blogs/ajax/index' },
          { text: 'Brower', link: '/blogs/brower/index' },
          { text: 'Vue', link: '/blogs/vue/index' },
          { text: 'React', link: '/blogs/react/index' },
          { text: 'Node', link: '/blogs/node/index' },
          { text: 'Module', link: '/blogs/module/index' },
        ],
      },
    ],
    // 二维码弹框类型
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
})
