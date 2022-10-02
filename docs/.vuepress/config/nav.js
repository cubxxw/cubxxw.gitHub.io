/*
 * @Description: 
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-09-15 08:07:14
 * @LastEditTime: 2022-09-30 23:50:48
 * @FilePath: \.vuepress\config\nav.js
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */
module.exports = [
    {
        text: '💡本站指南', link: '/guide/', icon: 'reco-eye'
    },
    {
        text: '🐋Docker学习',link:'/docker/'
    },
    {
        text: '🚀技术分享', link: '/技术文章/', icon: 'reco-api',
        
        items: [
            {
				text: 'Java',
				items: [
					{text: 'JavaSE', link: '/技术文章/java/javase'},
					{text: 'JavaEE', link: '/技术文章/java高级/javaee'},
				]
			},
            {
				text: '前端',
				items: [
					{text: '前端基础', link: '/技术文章/vue/vue01'},
				]
			},
        ]
    },
    {
        text: '🎈生活分享', link: '/生活分享/', icon: 'reco-faq',
        items: [
			{text: '生活分享', link: '/生活分享/life'},
        ]
    },
    {
        text: '博客', icon: 'reco-blog',
        items: [
            {text: 'blog', link: 'https://how.ke.qq.com/', icon: 'reco-blog'},
			{text: 'B站', link: 'https://space.bilibili.com/394702492', icon: 'reco-bilibili'},
            {text: '知乎', link: 'https://www.it235.com/', icon: 'reco-blog'},
        ]
    },/**/
	{ text: '时间轴', link: '/timeline/', icon: 'reco-date' }
]