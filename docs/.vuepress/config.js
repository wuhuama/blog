const path = require('path')

module.exports = {
  // base：站点的基础路径，它的值应当总是以斜杠开始，并以斜杠结束。这里设置为 /blog/ ，我们再次在本地运行项目，访问路径就需要变更为 http://localhost:8080/blog/
  // title：网站的标题
  // description：网站的描述
  base: '/blog/', 
  title: '博客',
  description: 'Vuepress blog demo',
  configureWebpack: {
    resolve: {
      alias: {
        '@vuepress': path.join(__dirname, '../images'),
      }
    }
  },
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
	  // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/wuhuama/blog',
    // 自定义仓库链接文字。
    repoLabel: 'GitHub',
    nav: [
        { text: '主页', link: '/' },
        { text: '文章', link: '/blog/FirstBlog.md' }
    ],
    sidebar: [
      '/',
      '/blog/FirstBlog',
      // ['/blog/FirstBlog', 'home2自定义标题'],
      '/blog/sec',
      '/blog/tree',
    ]
  }
}