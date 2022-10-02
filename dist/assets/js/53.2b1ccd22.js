(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{765:function(s,t,a){"use strict";a.r(t);var e=a(5),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker搭建gitlab-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker搭建gitlab-服务器"}},[s._v("#")]),s._v(" docker搭建Gitlab 服务器")]),s._v(" "),a("p",[s._v("[toc]")]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("我需要在服务器上面部署一个仓库，方便提交，而且供主机和服务器之间的数据传输")]),s._v(" "),a("ul",[a("li",[s._v("系统：centos")])]),s._v(" "),a("h2",{attrs:{id:"安装镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装镜像"}},[s._v("#")]),s._v(" 安装镜像")]),s._v(" "),a("p",[s._v("🇫🇮"),a("strong",[s._v("查找镜像")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 查找Gitlab镜像\ndocker search gitlab\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("🤏拉取Gitlab镜像")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker pull gitlab/gitlab-ce:latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("🌠启动docker镜像")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -itd  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9980")]),s._v(":80 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9922")]),s._v(":22 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -v D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("gitlab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("etc:/etc/gitlab  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -v D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("gitlab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("log:/var/log/gitlab "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -v D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("gitlab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("opt:/var/opt/gitlab "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n --restart always "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n --privileged"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n --name gitlab "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n gitlab/gitlab-ce\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 启动容器\ndocker run -itd -p 9980:80 -p 9922:22 -v D:\\docker\\gitlab\\etc:/etc/gitlab -v D:\\docker\\gitlab\\log:/var/log/gitlab -v D:\\docker\\gitlab\\opt:/var/opt/gitlab  --restart always --privileged=true --name gitlab gitlab/gitlab-ce\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("🎈 解释：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("命令")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("-i")]),s._v(" "),a("td",[s._v("以交互模式运行容器，通常与 -t 同时使用命令解释")])]),s._v(" "),a("tr",[a("td",[s._v("-t")]),s._v(" "),a("td",[s._v("为容器重新分配一个伪输入终端，通常与 -i 同时使用")])]),s._v(" "),a("tr",[a("td",[s._v("-d")]),s._v(" "),a("td",[s._v("后台运行容器，并返回容器 ID")])]),s._v(" "),a("tr",[a("td",[s._v("-p 9980:80")]),s._v(" "),a("td",[s._v("将容器内 80 端口映射至宿主机 9980 端口，这是访问 gitlab 的端口")])]),s._v(" "),a("tr",[a("td",[s._v("-p 9922:22")]),s._v(" "),a("td",[s._v("将容器内 22 端口映射至宿主机 9922 端口，这是访问 ssh 的端口")])]),s._v(" "),a("tr",[a("td",[s._v("-v /home/gitlab/etc:/etc/gitlab")]),s._v(" "),a("td",[s._v("将容器 / etc/gitlab 目录挂载到宿主机 / usr/local/gitlab-test/etc 目录下，若宿主机内此目录不存在将会自动创建，其他两个挂载同这个一样")])]),s._v(" "),a("tr",[a("td",[s._v("--restart always")]),s._v(" "),a("td",[s._v("容器自启动")])]),s._v(" "),a("tr",[a("td",[s._v("--privileged=true")]),s._v(" "),a("td",[s._v("让容器获取宿主机 root 权限")])]),s._v(" "),a("tr",[a("td",[s._v("--name gitlab")]),s._v(" "),a("td",[s._v("设置容器名称为 gitlab")])]),s._v(" "),a("tr",[a("td",[s._v("gitlab/gitlab-ce")]),s._v(" "),a("td",[s._v("镜像的名称，这里也可以写镜像 ID")])])])]),s._v(" "),a("p",[a("strong",[s._v("🤳修改配置")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进容器内部")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it gitlab /bin/bash\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改gitlab.rb")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/gitlab/gitlab.rb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("❤️ 加入如下")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#gitlab访问地址，可以写域名。如果端口不写的话默认为80端口")]),s._v("\nexternal_url "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://192.168.124.194'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ssh主机ip")]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gitlab_ssh_host'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.124.194'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ssh连接端口")]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gitlab_shell_ssh_port'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9922")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("🤏让配置生效")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("gitlab-ctl reconfigure\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("⚠️ 注意不要重启，"),a("code",[s._v("/etc/gitlab/gitlab.rb")]),s._v("文件的配置会映射到"),a("code",[s._v("gitlab.yml")]),s._v("这个文件，由于咱们在"),a("a",{attrs:{href:"https://so.csdn.net/so/search?q=docker&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker"),a("OutboundLink")],1),s._v("中运行，在"),a("code",[s._v("gitlab")]),s._v("上生成的"),a("code",[s._v("http")]),s._v("地址应该是http://192.168.124.194:9980,所以，要修改下面文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 修改http和ssh配置\nvi /opt/gitlab/embedded/service/gitlab-rails/config/gitlab.yml\n \n  gitlab:\n    host: 192.168.124.194\n    port: 9980 # 这里改为9980\n    https: false\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://sm.nsddd.top/smimage-20220924225234548.png?xxw@nsddd.top",alt:"image-20220924225234548"}})]),s._v(" "),a("p",[s._v("🤏让配置生效 并且退出容器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("gitlab-ctl reconfigure\nexit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"浏览器访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器访问"}},[s._v("#")]),s._v(" 浏览器访问")]),s._v(" "),a("p",[s._v("路径访问：http://192.168.124.194:9980/")]),s._v(" "),a("blockquote",[a("p",[s._v("⚠️ 机器配置要大于"),a("code",[s._v("4g")]),s._v("，否则很容易启动不了，报"),a("code",[s._v("502")])]),s._v(" "),a("ul",[a("li",[s._v("第一次访问，会让修改root密码")]),s._v(" "),a("li",[s._v("修改后以root用户登录即可")])])]),s._v(" "),a("h3",{attrs:{id:"修改密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改密码"}},[s._v("#")]),s._v(" 修改密码")]),s._v(" "),a("p",[a("strong",[s._v("进入容器内部：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker exec -it gitlab /bin/bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("进入控制台：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("gitlab-rails console -e production\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("查询id为1的用户，id为1的用户是超级管理员：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("user = User.where(id:1).first\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://sm.nsddd.top/smimage-20220924230110134.png?xxw@nsddd.top",alt:"image-20220924230110134"}})]),s._v(" "),a("p",[a("strong",[s._v("修改密码为"),a("code",[s._v("1234")]),s._v("：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("user.password='1234' \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("保存：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("user.save!\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("退出：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("exit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://sm.nsddd.top/smimage-20220924230332131.png?xxw@nsddd.top",alt:"image-20220924230332131"}})]),s._v(" "),a("h2",{attrs:{id:"重置管理员密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重置管理员密码"}},[s._v("#")]),s._v(" 重置管理员密码")]),s._v(" "),a("p",[a("strong",[s._v("进入docker gitlab 容器中")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker exec -it gitlab（容器名字） bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("进入gitlab 控制台")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("gitlab-rails console -e production   #可能会等好几秒钟 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("搜索用户")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这里提供两种搜索方式  通过id")]),s._v("\nuser "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" User.where"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id:1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".first\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或者 通过电子邮件搜索  或者用户名")]),s._v("\nuser "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" User.find_by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("email:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin@example.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://sm.nsddd.top/smsmimage-20220924231302178.png?xxw@nsddd.top",alt:"asdf"}})]),s._v(" "),a("p",[a("strong",[s._v("修改密码")])]),s._v(" "),a("blockquote",[a("p",[s._v("⚠️ 注意：密码不能设置太简单，数据库没办法通过")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#注意这两个选项都得设置,1234为你要设置的密码")]),s._v("\nuser.password "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1234'")]),s._v("\nuser.password_confirmation "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1234'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("保存退出：wq")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("user.save!\nexit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://sm.nsddd.top/smimage-20220924232113215.png?xxw@nsddd.top",alt:"image-20220924232113215"}})]),s._v(" "),a("p",[a("strong",[s._v("登陆成功😘😘")]),a("img",{attrs:{src:"http://sm.nsddd.top/smimage-20220924233008364.png?xxw@nsddd.top",alt:"image-20220924233008364"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);