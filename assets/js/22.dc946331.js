(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{737:function(s,t,a){"use strict";a.r(t);var n=a(5),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"tomcat安装挂载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat安装挂载"}},[s._v("#")]),s._v(" tomcat安装挂载")]),s._v(" "),a("p",[s._v("[toc]")]),s._v(" "),a("h2",{attrs:{id:"查找tomcat并且下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找tomcat并且下载"}},[s._v("#")]),s._v(" 查找tomcat并且下载")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("root@ubuntu:/tmp/host_data"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker search --help ")]),s._v("\n\nUsage:  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" search "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("TERM")]),s._v("\n\nSearch the Docker Hub "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" images\n\nOptions:\n  -f, --filter filter   Filter output based on conditions provided\n      --format string   Pretty-print search using a Go template\n      --limit int       Max number of search results "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --no-trunc        Don't truncate output\nroot@ubuntu:/tmp/host_data"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker search --limit 3  tomcat ")]),s._v("\nNAME             DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED\ntomcat           Apache Tomcat is an "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" implementati…   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3319")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("       \ntomee            Apache TomEE is an all-Apache Java EE certif…   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("96")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("       \nbitnami/tomcat   Bitnami Tomcat Docker Image                     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("44")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nroot@ubuntu:/tmp/host_data"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -it tomcat /bin/bash")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker run -d -p 8080:8080 --name tomcat01 tomcat\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("可以使用"),a("code",[s._v("-P")]),s._v("随机分配端口，此时内部和外部端口会不一样")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("root@ubuntu:/tmp/host_data# docker run -d -P --name tomcat02 tomcat\n9e194dbf7ecade3e1261bb836067e6f27c54ef4733ab38a036c1c3a526be5586\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("我们使用docker ps查看端口号")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/11/tVC5Df4Aks8uhZ9.png",alt:"image-20220511165418337"}})]),s._v(" "),a("h2",{attrs:{id:"访问猫首页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问猫首页"}},[s._v("#")]),s._v(" 访问猫首页")]),s._v(" "),a("p",[a("strong",[s._v("为什么上面的tomcat上面啥没有猫猫？")])]),s._v(" "),a("blockquote",[a("p",[s._v("因为这是新版，我们进入tomcat看一下")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("root@ubuntu:/tmp/host_data"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker ps")]),s._v("\nCONTAINER ID   IMAGE              COMMAND                  CREATED             STATUS                          PORTS                                         NAMES\n9e194dbf7eca   tomcat             "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"catalina.sh run"')]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" minutes ago       Up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" minutes                    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:49153-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp, :::49153-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp   tomcat02\nc6b2169449f4   ubuntu             "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bash"')]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" minutes ago      Up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" minutes                                                                 ubuntu2\n37d9f24e95a3   ubuntu             "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bash"')]),s._v("                   About an hour ago   Up About an hour                                                              u1\nf19e7fbc3d18   v2fly/v2fly-core   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/bin/v2ray -con…"')]),s._v("   About an hour ago   Restarting "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" seconds ago                                                 tcp\nroot@ubuntu:/tmp/host_data"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker exec -it 9e194dbf7eca /bin/bash")]),s._v("\nroot@9e194dbf7eca:/usr/local/tomcat"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -l")]),s._v("\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("160")]),s._v("\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18994")]),s._v(" Dec  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":01 BUILDING.txt\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6210")]),s._v(" Dec  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":01 CONTRIBUTING.md\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60269")]),s._v(" Dec  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":01 LICENSE\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2333")]),s._v(" Dec  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":01 NOTICE\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3378")]),s._v(" Dec  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":01 README.md\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6905")]),s._v(" Dec  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":01 RELEASE-NOTES\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16517")]),s._v(" Dec  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":01 RUNNING.txt\ndrwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":07 bin\ndrwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" May "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" 09:00 conf\ndrwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":06 lib\ndrwxrwxrwx "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" May "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" 09:00 logs\ndrwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":07 native-jni-lib\ndrwxrwxrwx "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":06 temp\ndrwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":06 webapps\ndrwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Dec  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":01 webapps.dist\ndrwxrwxrwx "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Dec  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":01 work\nroot@9e194dbf7eca:/usr/local/tomcat"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd webapps && ls -al")]),s._v("\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\ndrwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":06 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\ndrwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":07 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("p",[a("strong",[s._v("这是因为真正有货的是webapps.dist，而web apps里面是空的，此时我们删除并且改名")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("root@9e194dbf7eca:/usr/local/tomcat/webapps"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd .. &&rm -r webapps")]),s._v("\nroot@9e194dbf7eca:/usr/local/tomcat"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mv webapps.dist/ webapps &&cd webapps &&ls -al")]),s._v("\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("\ndrwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Dec  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":01 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\ndrwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" May "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" 09:09 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\ndrwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":06 ROOT\ndrwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":06 docs\ndrwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":06 examples\ndrwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":06 host-manager\ndrwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":06 manager\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/11/MvQHpWcql2d4OzI.png",alt:"image-20220511170245755"}})]),s._v(" "),a("p",[s._v("如上图，成功了（我设置了映射）")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"推荐使用的版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐使用的版本"}},[s._v("#")]),s._v(" 推荐使用的版本")]),s._v(" "),a("p",[a("strong",[s._v("我们的版本是最新的tomcat，其实用不到这么新的，可以删除后重新安装一个旧的")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker run -d -p 8080:8080 --name tomcat03 billygoo/tomcat8-jdk8\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("查看端口")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("root@ubuntu:/tmp/host_data"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker ps")]),s._v("\nCONTAINER ID   IMAGE                   COMMAND                  CREATED             STATUS                         PORTS                                         NAMES\n22e49c33a330   billygoo/tomcat8-jdk8   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"catalina.sh run"')]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" seconds ago      Up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" seconds                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:8080-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp, :::8080-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp     tomcat03\n9e194dbf7eca   tomcat                  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"catalina.sh run"')]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" minutes ago      Up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" minutes                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:49153-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp, :::49153-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp   tomcat02\nc6b2169449f4   ubuntu                  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bash"')]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(" minutes ago      Up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(" minutes                                                                ubuntu2\n37d9f24e95a3   ubuntu                  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bash"')]),s._v("                   About an hour ago   Up About an hour                                                             u1\nf19e7fbc3d18   v2fly/v2fly-core        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/bin/v2ray -con…"')]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" hours ago         Restarting "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" seconds ago                                                 tcp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/11/dpaNZvRrhIXbSc4.png",alt:"image-20220511170816781"}})]),s._v(" "),a("blockquote",[a("p",[s._v("建议初学者使用后面的方法就行")])])])}),[],!1,null,null,null);t.default=r.exports}}]);