module.exports = {
  base: '/',
  title: '刘浩的博客',
  description: '刘浩的博客',
  head: [
		['link', 
			{ rel: 'icon', href: '/my-Logo.png' }
			//浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
		],  
	],
  themeConfig: {
	  	// 你的GitHub仓库，请正确填写
	    repo: 'https://github.com/2643030311/blog-demo',
	    // 自定义仓库链接文字。
	    repoLabel: 'My GitHub',
	  	nav: [
	  		{ text: 'Home', link: '/' },
	  		{ text: 'FirstBlog', link: '/blog/FirstBlog.md' }
	  	],
		//   sidebar: [
		// 	['/', '首页'],
		// 	['/blog/FirstBlog.md', '我的第一篇博客']
		//   ]
		 //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
		 sidebar: {
			 '/blog/':[   
				{
                    title: 'Html',   // 一级菜单名称
                    collapsable: true, // false为默认展开菜单, 默认值true是折叠,
                    sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                    children: []
                },      
				{
                    title: 'Css',   // 一级菜单名称
                    collapsable: true, // false为默认展开菜单, 默认值true是折叠,
                    sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                    children: [
						['Css/Flex布局总结.md', 'Flex布局']
					]
                },      
				 {
                    title: 'JavaScript',   // 一级菜单名称
                    collapsable: true, // false为默认展开菜单, 默认值true是折叠,
                    sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                    children: [
                        ['FirstBlog.md', '第一个博客'],  //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
                        ['JavaScript/text.md', '博客测试']
                    ]
                },
                {
                    title: 'Vue',
                    collapsable: true, 
                    children: [
                        ['Vue/Vue的相关学习.md', 'Vue的相关学习'],
                        ['Vue/Vue复习.md', 'Vue复习知识点']
                    ]
                }
            ],
		 }
	}

}
