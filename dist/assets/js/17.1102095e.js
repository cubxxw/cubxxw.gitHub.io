(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{734:function(t,e,r){"use strict";r.r(e);var o=r(5),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"深入理解镜像底层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#深入理解镜像底层"}},[t._v("#")]),t._v(" 深入理解镜像底层")]),t._v(" "),r("h2",{attrs:{id:"镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#镜像"}},[t._v("#")]),t._v(" 镜像")]),t._v(" "),r("p",[r("strong",[t._v("镜像是一种轻量级、可执行的独立软件包，包含运行某个软件所需要的所有内容，我们把应用程序和配置依赖打包成一个可以交付的运行环境，这个打包好的运行环境就叫做Image镜像")])]),t._v(" "),r("p",[r("strong",[t._v("只有通过镜像文件才能生成docker容器实例")])]),t._v(" "),r("blockquote",[r("p",[t._v("我们在使用pull的时候，在下载的时候可以看到docker的镜像好像是一层层的下载")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2022/05/09/YbVFK5hG9pImyH3.png",alt:"image-20220509215720680"}})]),t._v(" "),r("p",[r("strong",[t._v("==所以说镜像是分层的==")])]),t._v(" "),r("h2",{attrs:{id:"unionfs-联合文件系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unionfs-联合文件系统"}},[t._v("#")]),t._v(" UnionFS(联合文件系统)")]),t._v(" "),r("p",[r("strong",[t._v("联合文件系统是一种分层、轻量级并且高性能的文件系统，它支持对文件的修改操作来为一次提交来一层层的叠加")])]),t._v(" "),r("p",[r("strong",[t._v("Union文件系统是docker镜像的基础，镜像可以通过分层来进行继承，基于基础镜像（没有父镜像），可以制作出各种具体的应用镜像")])]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" "),r("strong",[t._v("特性：")])]),t._v(" "),r("p",[r("strong",[t._v("一次性同时加载多个文件系统，但是从外面看起来，只能看到一个文件系统。联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录")])]),t._v(" "),r("blockquote",[r("p",[t._v("所以docker启动非常快是有原因的，它是由一层层的文件系统组成的联合文件系统")])]),t._v(" "),r("p",[r("strong",[t._v("bootfs（boot file system引导文件系统)主要包含bootloader和kernel,kernel，bootloader主要是引导加载kernel,linux刚启动时会加载bootfs文件系统，在docker镜像最底层就是引导文件系统bootfs。")])]),t._v(" "),r("p",[r("strong",[t._v("在bootfs之上，包含的就是典型的linux系统中的/dev./proc,/bin,/etc等标准文件和目录")])]),t._v(" "),r("p",[r("strong",[t._v("rootfs就是各种不同的操作系统发行版")])]),t._v(" "),r("hr"),t._v(" "),r("blockquote",[r("p",[t._v("我们只是包含了最小的容量，所以内存小，只需要包含基本的命令和函数库，所以下载的Ubuntu很小，所以很多命令都没有")])]),t._v(" "),r("p",[r("strong",[t._v("镜像分层的好处就是资源共享，方便复制迁移，就是为了==复用==")])]),t._v(" "),r("p",[r("strong",[t._v("比如说有多个镜像从相同的base镜像构建而来，那么docker host只需要在磁盘中保存一份base镜像")])]),t._v(" "),r("p",[r("strong",[t._v("同时内存中也只需要加载一份base镜像，就可以为所有容器服务了，而且镜像的每一层都可以被共享。")])]),t._v(" "),r("h2",{attrs:{id:"重点理解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重点理解"}},[t._v("#")]),t._v(" 重点理解")]),t._v(" "),r("p",[r("strong",[t._v("1. docker镜像层是只读的，容器层是可以写的")])]),t._v(" "),r("p",[r("strong",[t._v("2. 当容器启动时，一个新的可写层被加载到镜像的顶部。这一层通常被称作“容器层”，“容器层”之下的都叫“镜像层”。")])]),t._v(" "),r("h2",{attrs:{id:"docker-架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-架构"}},[t._v("#")]),t._v(" Docker 架构")]),t._v(" "),r("p",[t._v("Docker 包括三个基本概念:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("镜像（Image）")]),t._v("：Docker 镜像（Image），就相当于是一个 root 文件系统。比如官方镜像 ubuntu:16.04 就包含了完整的一套 Ubuntu16.04 最小系统的 root 文件系统。")]),t._v(" "),r("li",[r("strong",[t._v("容器（Container）")]),t._v("：镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的类和实例一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。")]),t._v(" "),r("li",[r("strong",[t._v("仓库（Repository）")]),t._v("：仓库可看成一个代码控制中心，用来保存镜像。")])]),t._v(" "),r("p",[t._v("Docker 使用客户端-服务器 (C/S) 架构模式，使用远程API来管理和创建Docker容器。")]),t._v(" "),r("p",[t._v("Docker 容器通过 Docker 镜像来创建。")]),t._v(" "),r("p",[t._v("容器与镜像的关系类似于面向对象编程中的对象与类。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("Docker")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("面向对象")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("容器")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("对象")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("镜像")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("类")])])])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2022/05/09/Exyomt4GJgAre3k.png",alt:"img"}})]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("概念")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("Docker 镜像(Images)")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Docker 镜像是用于创建 Docker 容器的模板，比如 Ubuntu 系统。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("Docker 容器(Container)")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("容器是独立运行的一个或一组应用，是镜像运行时的实体。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("Docker 客户端(Client)")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Docker 客户端通过命令行或者其他工具使用 Docker SDK (https://docs.docker.com/develop/sdk/) 与 Docker 的守护进程通信。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("Docker 主机(Host)")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("一个物理或者虚拟的机器用于执行 Docker 守护进程和容器。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("Docker Registry")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Docker 仓库用来保存镜像，可以理解为代码控制中的代码仓库。Docker Hub("),r("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hub.docker.com"),r("OutboundLink")],1),t._v(") 提供了庞大的镜像集合供使用。一个 Docker Registry 中可以包含多个仓库（Repository）；每个仓库可以包含多个标签（Tag）；每个标签对应一个镜像。通常，一个仓库会包含同一个软件不同版本的镜像，而标签就常用于对应该软件的各个版本。我们可以通过 "),r("strong",[t._v("<仓库名>:<标签>")]),t._v(" 的格式来指定具体是这个软件哪个版本的镜像。如果不给出标签，将以 "),r("strong",[t._v("latest")]),t._v(" 作为默认标签。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("Docker Machine")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Docker Machine是一个简化Docker安装的命令行工具，通过一个简单的命令行即可在相应的平台上安装Docker，比如VirtualBox、 Digital Ocean、Microsoft Azure。")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);