const themeConfig = require('./config/theme/index.js')
const navConf = require('./config/nav')
const sidebarConf = require('./config/sidebar')
const pluginsConf = require('./config/plugins/index')
module.exports = {
    //注意，此处需要填写你部署在nginx下的文件夹名称，如果是根目录，那么可以注释掉此行，注释掉后本地打开index.html无法访问
    //base: "/dist/",
    title: "链学社",
    description: '点赞、转发、收藏',
    dest: './dist',
    port: '7777',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }],
		['meta', { name: 'keywords', content: '链学者社区，基于链学链打造全民学习资源共享' }],
		['meta', { name: 'description', content: '专属于自学者的在线学习平台,这里有编程领域最完善最「体系化的」Java学习视频、如果你是小白快加入我们一起学最全最「体系化的」java知识吧，官方交流QQ群：827553720' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ["meta", {name: "robots", content: "all"}],
        ["meta", {name: "author", content: "Cub"}],
		["link", { rel: "stylesheet", href: "/css/style.css" }],//显示nav小logo
		["script", { charset: "utf-8", src: "/js/custom.js" }],//加载右侧菜单栏图片
        
        // 百度统计
        /*
        ['script', {}, `
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?e312f85a409131e18146064e62b19798";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
        `],
        */
    ],
    // 博客使用的主题，使用的是reco主题
    theme: 'reco',

    themeConfig: {
        type: 'blog',
        smoothScroll: true,
        // 博客设置
		/*
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: '标签' // 默认 “标签”
            }
        },*/
       
        //关于评论区
        valineConfig: {
            //appId: '你的LeanCloud应用的App ID',地址：https://console.leancloud.app/login.html?redirect=%2F
            // your appId
            appId: 'fcHlbtjsPFyZGFcTHmd0pQDT-MdYXbMMI',
            // your appKey
            appKey: 'hAgoLrwcWHLbdlraXYvPkMQI',
            recordIP:true,
            placeholder:'轻轻踩一踩💝，留下你的脚印👣...',
            visitor:true,
        },
        authorAvatar: '/avatar.png',
        // 最后更新时间
        lastUpdated: '2022-09-27', // string | boolean
        //repo: 'it235',
        // 如果你的文档不在仓库的根部
        //docsDir: 'docs',
        // 可选，默认为 master
        //docsBranch: 'source',
        //editLinks: true,
        //editLinkText: '在 GitHub 上编辑此页！',
        // 作者
        author: '君哥',
        // 项目开始时间
        startYear: '2022',
        nav: navConf,
        sidebar: sidebarConf,
		sidebarDepth: 2,
        // 自动形成侧边导航
		sidebar: 'auto',
        logo: '/head.png',
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // ICP备案
        record: '沪ICP备xxxxx号-6',
        recordLink: 'https://beian.miit.gov.cn/',
		// 公网安备备案
        cyberSecurityRecord: '鄂ICP备2021018622号-',
        cyberSecurityLink: 'http://icp.chinaz.com/nsddd.top',
		//友链
        friendLink: [
            {
                title: 'xiongxinwei的博客',
                desc: '这是smile的博客，一个看起来很像那么回事的博客',
                email: '3293172751@qq.com',
                link: 'http://nsddd.top'
            },
        ]
    },
    markdown: {
        lineNumbers: true
    },
    plugins: pluginsConf
}