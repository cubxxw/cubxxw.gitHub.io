(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{767:function(s,n,a){"use strict";a.r(n);var t=a(5),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker-nginx篇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-nginx篇"}},[s._v("#")]),s._v(" docker — Nginx篇")]),s._v(" "),a("p",[s._v("[toc]")]),s._v(" "),a("h2",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" nginx")]),s._v(" "),a("h2",{attrs:{id:"安装nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx"}},[s._v("#")]),s._v(" 安装nginx")]),s._v(" "),a("h3",{attrs:{id:"搜索nginx镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搜索nginx镜像"}},[s._v("#")]),s._v(" 搜索nginx镜像")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker search --limit 3  nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sm.nsddd.top//typora/image-20220916222258225.png?mail:3293172751@qq.com",alt:"image-20220916222258225"}})]),s._v(" "),a("h3",{attrs:{id:"拉取nginx镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取nginx镜像"}},[s._v("#")]),s._v(" 拉取nginx镜像")]),s._v(" "),a("blockquote",[a("p",[s._v("也可以不用拉取，运行时docker发现本地没有镜像会自动在远程仓库拉取")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull nginx \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#默认拉取最新版本的nginx，也可以手动指定nginx版本，如：docker pull nginx:1.20.1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"docker启动nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker启动nginx"}},[s._v("#")]),s._v(" docker启动nginx")]),s._v(" "),a("h3",{attrs:{id:"方法一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一"}},[s._v("#")]),s._v(" 方法一")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("‼️❗这里有一点很重要，所以要先说：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name nginx01 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3344")]),s._v(":80 nginx\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令详解：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run 启动一个镜像")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -d 表示后台允许")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --name nginx01  表示为当前容器起一个别名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -p 3344:80 表示将本机的3344端口映射到nginx镜像的80端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  nginx 镜像 REPOSITORY标识；或者可以使用IMAGE ID，通过命令docker images 先查看出要启动的镜像的唯一标识，使用docker images命令，查询到镜像信息，然后找到镜像的REPOSITORY标识或IMAGE ID标识即可")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("通过下面命令可以正常启动一个nginx容器没有问题，但是当我们需要修改nginx的配置文件时就会很麻烦了，需要进入到容器内部，修改配置，退出容器，然后再进行容器重启，过程较为繁琐。为了解决此问题，我们可以在容器启动的过程中添加一条命令，"),a("strong",[s._v("实现nginx 的配置文件和本地主机指定的配置文件形成关联映射")]),s._v("，那么以后只要我们改动本地的配置文件后就会自动映射到nginx容器中，这样极大的简化了修改容器配置文件的流程。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /docker/nginx/conf.d \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /docker/nginx/html\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /docker/nginx/logs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /docker/nginx/conf/nginx.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("在本地主机创建一个映射目录 -p表示递归创建")]),s._v(" "),a("p",[s._v("然后启动容器，本次启动为了进入容器去复制nginx的配置文件，并不是为了真正的“启动”")]),s._v(" "),a("p",[s._v("进入nginx容器后，使用"),a("code",[s._v("whereis nginx命令")]),s._v("查看相关的配置文件位置，找到nginx配置路径，记住路径，然后执行"),a("code",[s._v("exit")]),s._v(" 退出容器，使用")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sm.nsddd.top//typora/image-20220916223802934.png?mail:3293172751@qq.com",alt:"image-20220916223802934"}})]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#docker cp 容器id:本地存放配置文件的绝对路径 容器中配置文件存放的路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" nginx:/etc/nginx/nginx.conf /docker/nginx/conf/nginx.conf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" nginx:/etc/nginx/conf.d /docker/nginx/conf.d\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" nginx:/usr/share/nginx/html /docker/nginx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop nginx  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" 9e58af85cac4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("将其中的"),a("code",[s._v("default.conf")]),s._v("文件拷贝出到本地存放，此时可以准备重启进行一起启动，并执行配置文件映射命令了。"),a("code",[s._v("docker ps -a")]),s._v("查询全部的容器，可以将不用的删除，")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker rm 容器id(删除命令)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后使用:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run  -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3344")]),s._v(":80 --name nginx --restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /docker/nginx/conf.d:/etc/nginx/conf.d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /docker/nginx/html:/usr/share/nginx/html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /docker/nginx/logs:/var/log/nginx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d  nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("重新创建一个容器并运行即可。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sm.nsddd.top//typora/image-20220916233240835.png?mail:3293172751@qq.com",alt:"image-20220916233240835"}})]),s._v(" "),a("p",[s._v("踩坑记录：-v属性需要在-d之前，具体咋回事说不太清楚，反正-v放到最后是有问题的，无法映射上的。")]),s._v(" "),a("p",[a("strong",[a("code",[s._v("--restart=always")]),s._v(":设置容器自启动，我们有两种方式设置自启动：")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("创建容器时候设置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker run --restart=always 容器id或者容器name\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("已经存在的容器依旧也是可设置自启动❗")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker update --restart=always 容器id或者容器name\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("取消自启动")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker update --restart=no 容器id或者容器name\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("批量取消容器自启动")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker update --restart=no $(docker ps -aq)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])])]),s._v(" "),a("h2",{attrs:{id:"测试nginx是否启动成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试nginx是否启动成功"}},[s._v("#")]),s._v(" 测试nginx是否启动成功")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("curl localhost:3344  #linux命令，用于访问置顶url看是否可以读取到页面信息\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"请求代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求代理"}},[s._v("#")]),s._v(" 请求代理")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("location /test/ {  \n    proxy_pass http://127.0.0.1:8888/;   \n    proxy_read_timeout 90;   \n    proxy_http_version 1.1;   \n    proxy_set_header Upgrade $http_upgrade;   \n    proxy_set_header Connection $http_connection;  \n    proxy_set_header Host $host;  \n    proxy_set_header X-Real-IP $remote_addr;  \n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto $scheme;  \n    proxy_cache_bypass $http_upgrade; \n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("blockquote",[a("p",[s._v("请求 "),a("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//127.0.0.1/test/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://127.0.0.1/test/index.html"),a("OutboundLink")],1),s._v(" 会代理到 "),a("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//127.0.0.1%3A8888/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://127.0.0.1:8888/index.html"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"ssl证书配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssl证书配置"}},[s._v("#")]),s._v(" ssl证书配置")]),s._v(" "),a("ul",[a("li",[s._v("检查ssl是否安装")])]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/usr/local/nginx/sbin/nginx -V\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("配置nginx.conf")])]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('server {\n    # 服务器端口使用443，开启ssl, 这里ssl就是上面安装的ssl模块\n    listen       443 ssl;\n    # 填写绑定证书的域名 ，多个以空格分开\n    server_name  &lt;a href="https://www.aliyun.com/minisite/goods?userCode=veyumm2k" target="_blank">hack520.com&lt;/a> &lt;a href="https://www.aliyun.com/minisite/goods?userCode=veyumm2k" target="_blank">www.hack520.com&lt;/a>;\n\n    # ssl证书地址\n    ssl_certificate     /usr/local/nginx/cert/ssl.pem;  # pem文件的路径\n    ssl_certificate_key  /usr/local/nginx/cert/ssl.key; # key文件的路径\n\n    # ssl验证相关配置\n    ssl_session_timeout  5m;    #缓存有效期\n    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;    #加密算法\n    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;    #安全链接可选的加密协议\n    ssl_prefer_server_ciphers on;   #使用服务器端的首选算法\n\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"http强转https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http强转https"}},[s._v("#")]),s._v(" http强转https")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server {   \n    listen 80;  \n    server_name www.test.com;  \n    default_type 'text/html';   \n    charset utf-8;   \n    rewrite ^/(.*) https://$server_name/$1 permanent; #跳转到Https \n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"查看当前nginx的状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看当前nginx的状态"}},[s._v("#")]),s._v(" 查看当前nginx的状态")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("location /status {\n    stub_status on;\n    access_log /var/log/nginx/status.log; #日志\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("p",[s._v("配置好并重启 可以通过 "),a("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//127.0.0.1/status",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://127.0.0.1/status"),a("OutboundLink")],1),s._v(" 来查看当前nginx的状态")])]),s._v(" "),a("h2",{attrs:{id:"代理静态文件-如图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代理静态文件-如图片"}},[s._v("#")]),s._v(" 代理静态文件（如图片）")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("location /a/b/ {   \n    root /opt/docker/nginx/; \n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("如访问 "),a("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//127.0.0.1/a/b/test.png",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://127.0.0.1/a/b/test.png"),a("OutboundLink")],1),s._v(" 实际是会代理到 "),a("strong",[s._v("/opt/docker/nginx/a/b")]),s._v("目录下的"),a("strong",[s._v("test.png")])])]),s._v(" "),a("h2",{attrs:{id:"静态页面代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态页面代理"}},[s._v("#")]),s._v(" 静态页面代理")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("location /hello/ {   \n    index index.html;   \n    root /opt/docker/nginx/html/; \n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("p",[s._v("访问 "),a("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//127.0.0.1/hello/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://127.0.0.1/hello/"),a("OutboundLink")],1),s._v(" 会代理到**/opt/docker/nginx/html/"),a("strong",[s._v("路径下的")]),s._v("index.html**页面")])]),s._v(" "),a("h2",{attrs:{id:"配置跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置跨域"}},[s._v("#")]),s._v(" 配置跨域")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("proxy_set_header Host $host;\nproxy_set_header X-Real-IP $remote_addr;\nproxy_set_header X-Real-Port $remote_port;\nproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"设置最大body的大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置最大body的大小"}},[s._v("#")]),s._v(" 设置最大body的大小")]),s._v(" "),a("blockquote",[a("p",[s._v("如上传文件，指定最大的文件大小")])]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("client_max_body_size 50m;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"设置请求头的大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置请求头的大小"}},[s._v("#")]),s._v(" 设置请求头的大小")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server_names_hash_bucket_size 256;\nclient_header_buffer_size 256k;\nlarge_client_header_buffers 4 256k;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"客户端保持连接的时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端保持连接的时间"}},[s._v("#")]),s._v(" 客户端保持连接的时间")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("keepalive_timeout 60s;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);