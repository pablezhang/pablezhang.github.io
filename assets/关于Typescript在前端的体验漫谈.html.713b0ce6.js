import{_ as c,r as o,o as a,c as n,a as e,b as t,d as p,e as r}from"./app.441515f3.js";const s={},l=r('<h2 id="关于-typescript-在前端的体验漫谈" tabindex="-1"><a class="header-anchor" href="#关于-typescript-在前端的体验漫谈" aria-hidden="true">#</a> 关于 Typescript 在前端的体验漫谈</h2><h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3><p>最近两年， <code>Typescript</code>逐渐成为前端项目的标配，甚至出现了 <code>Typescript</code>即将接管 JS 世界的段子。 大部分前端开发者也陆陆续续从 <code>React</code>、 <code>Vue</code>、 <code>Angular</code>开发生态中接触到了 TS，一时间关于 Typescript 的教程大量出现，不过大部分教程更关注 <code>Typescript</code> 的类型系统。本文将对 <code>TS</code>进行一个简单的梳理总结，旨在让 <code>TS</code>开发者换个角度了解 <code>Typescript</code>。读完本文后，我们应当能对 <code>Typescript</code> 有以下认识：</p><ol><li>Typescript 的设计初衷</li><li>Typescript 的两大特性</li><li>Typescript 为我们带来了什么</li><li>Typescript 还为我们带来了什么</li><li>Typescript 如何更利于构建大型应用</li><li>关于 Typescript 的使用建议</li></ol><h3 id="typescript-的设计初衷" tabindex="-1"><a class="header-anchor" href="#typescript-的设计初衷" aria-hidden="true">#</a> Typescript 的设计初衷</h3><blockquote><p>JavaScript 的段子：动态一时爽，重构地雷场。</p></blockquote><p>最近这些年，随着硬件性能、前端自身快速发展等因素，前端应用程序的体量与复杂度直线上升。而在大型应用的开发过程中，JavaScript 动态语言与弱类型的语言特性，随着成员数量的增加、代码体量的增长、业务场景复杂度的上升，文档及单元测试的缺失等情况的出现，导致了以下问题：</p><ol><li>类型错误多，bug 率居高不下。</li><li>缺少文档、新成员理解应用逻辑困难。</li><li>维护成本高、可扩展性差的困境。</li></ol><p>在软件开发过程中，随着需求的变化和系统规模的增大，我们的项目不可避免地会趋于复杂，最终造成了项目中后期进度缓慢的情形 。如何对软件复杂度及其增长速率进行有效控制，便成为一个日益突出的问题。Typescript 正是在这种情况下，应运而生的。</p>',9),h={href:"https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FTypeScript%23%25E8%25AE%25BE%25E8%25AE%25A1%25E8%2583%258C%25E6%2599%25AF",title:"https://zh.wikipedia.org/wiki/TypeScript#%E8%AE%BE%E8%AE%A1%E8%83%8C%E6%99%AF",target:"_blank",rel:"noopener noreferrer"},d=e("blockquote",null,[e("p",null,"TypeScript 起源于 Javascript 在微软以及客户中开发大型应用中遇到的缺点。处理复杂 JavaScript 代码带来的挑战使他们需要自定义工具来简化组件开发流程。")],-1),u={href:"https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2F%25E5%259F%25BA%25E4%25BA%258E%25E7%25B1%25BB%25E7%25BC%2596%25E7%25A8%258B",title:"https://zh.wikipedia.org/wiki/%E5%9F%BA%E4%BA%8E%E7%B1%BB%E7%BC%96%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"},f={href:"https://link.juejin.cn?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2F%25E7%2589%25A9%25E4%25BB%25B6%25E5%25B0%258E%25E5%2590%2591%25E7%25B7%25A8%25E7%25A8%258B",title:"https://zh.wikipedia.org/wiki/%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91%E7%B7%A8%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"},g=e("h3",{id:"typescript-的两大特性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#typescript-的两大特性","aria-hidden":"true"},"#"),t(" Typescript 的两大特性")],-1),m=e("p",null,[t("维基百科上关于 Typescript 的介绍，提到了两个关键的词： "),e("strong",null,"静态类型检查、面向对象。")],-1),b=e("code",null,"Flow",-1),_=e("code",null,"Typescript",-1),k={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.zhihu.com%2Fquestion%2F264510450",title:"https://www.zhihu.com/question/264510450",target:"_blank",rel:"noopener noreferrer"},y={href:"https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F27593029",title:"https://zhuanlan.zhihu.com/p/27593029",target:"_blank",rel:"noopener noreferrer"},F=e("code",null,"Typescript",-1),T=e("code",null,"Typescript",-1),j=e("code",null,"Ant-design",-1),w=e("code",null,"Angular",-1),E=e("code",null,"Vue-next",-1),v={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.zhihu.com%2Fquestion%2F378470381%2Fanswer%2F1079675543",title:"https://www.zhihu.com/question/378470381/answer/1079675543",target:"_blank",rel:"noopener noreferrer"},A=r('<h4 id="静态类型检查" tabindex="-1"><a class="header-anchor" href="#静态类型检查" aria-hidden="true">#</a> 静态类型检查</h4><p>下图即是 TS 的类型系统，市面上已经存在大量解读类型系统的教程，在这里我们不再赘述</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c315d95914d7463a88a9563122057c98~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><h4 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h4><p>在 2018 年年初，我们使用 <code>Typescript</code>重构 React 前端，很快我们与 TS 进入了短暂的蜜月期，低级的错误大幅减少。但随后我们就发现，如果上述内容就是 <code>Typescript</code>的全部内容， <code>Typescript</code>对我们来说就是一个玩具，一个高级玩具。</p><p>前面说过，随着代码体量的增长、业务复杂度的上升，文档及单元测试的缺失，人员流动等因素的出现，功能理解、模块冲突、代码难以维护的问题，并没有随着静态类型检查的出现而大幅消失。</p>',6),S={href:"https://juejin.cn/post/6952018342081216548/#heading-17",title:"https://juejin.cn/post/6952018342081216548/#heading-17",target:"_blank",rel:"noopener noreferrer"},x=e("strong",null,"Typescript 似乎并没有它宣称的那样强",-1),B=r('<p>Typescript 号称适合构建大型应用，我们开始反思这句话是否正确。在 github 上我们注意到，vscode 的源码便是通过 Typecript 编写的。既然 Typescript 能搞定 IDE 编辑器这种复杂的应用，我们期望从 vscode 的源码中，找到解决方案。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9edd0865c81b43cdbac500f1326d8157~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35261b071ef1476fb99ae8f8e2e97e35~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><p>刚开始我们对 vscode 中的这种写法很困惑，并且对大量的 <code>implements</code>、 <code>abstract</code> 、 <code>private</code> <code>protect</code>设计感到陌生。经过大量的面向 Goole 编程，我们逐渐注意到 Typescript 的第二个特点， <strong>面向对象：封装、继承、多态。</strong></p><ul><li>封装：隐藏数据和功能实现细节，避免被外部修改，而导致误用。</li><li>继承：子类拥有父类的所有属性和方法，从而实现了实现代码的复用。</li><li>多态：同一个行为具有多个不同表现形式或形态的能力。</li></ul><p>用一句话描述面向对象：将功能拆分为职责单一的功能、通过封装将功能隔离开来，再通过组合的方式去构建大型应用。</p><p>面向对象是个比较大的领域，我们将通过下文中的的一个例子，简单的讲下对面向对象的三大特性</p><h3 id="typescript-为我们带了什么" tabindex="-1"><a class="header-anchor" href="#typescript-为我们带了什么" aria-hidden="true">#</a> Typescript 为我们带了什么</h3><h4 id="低级错误的查找定位" tabindex="-1"><a class="header-anchor" href="#低级错误的查找定位" aria-hidden="true">#</a> 低级错误的查找定位</h4>',9),z={href:"https://link.juejin.cn?target=https%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttps%3A%2F%2Frollbar.com%2Fblog%2Ftop-10-javascript-errors%2F",title:"https://link.zhihu.com/?target=https://rollbar.com/blog/top-10-javascript-errors/",target:"_blank",rel:"noopener noreferrer"},q=r('<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1f7f0abeef4744cca7c7e84edc76f87f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><p>其中有 7 个是类型错误（TypeError），这对 Typescript 来说就是送分题。</p><h4 id="阅读代码能力的加持" tabindex="-1"><a class="header-anchor" href="#阅读代码能力的加持" aria-hidden="true">#</a> 阅读代码能力的加持</h4><p>vscode 中有一些非常方便的代码阅读技巧</p><ul><li><strong>查看用法</strong> 悬停： 读取 interface 同时显示注释</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/84aa888f47274df99fd816aee699f319~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><ul><li><strong>转到定义</strong> Ctrl + 单击、转到符号定义的源代码 F12。</li><li><strong>窥视定义</strong> Alt + F12：调出一个窥视窗口，显示符号的定义。</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/41689175379c4c8b97709b60c6c4c5b2~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><ul><li><strong>转到参考</strong> Shift + F12：显示相似字符的所有参考。</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ffc4c6056f0c43d1a2ad88b1317bebb1~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><h4 id="智能提示自动补全" tabindex="-1"><a class="header-anchor" href="#智能提示自动补全" aria-hidden="true">#</a> 智能提示自动补全</h4>',11),J={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdt%2Fsearch%3Fsearch%3D",title:"https://www.typescriptlang.org/dt/search?search=",target:"_blank",rel:"noopener noreferrer"},C=e("h4",{id:"重构能力的增强",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#重构能力的增强","aria-hidden":"true"},"#"),t(" 重构能力的增强")],-1),O={href:"https://link.juejin.cn?target=https%3A%2F%2Fcode.visualstudio.com%2Fassets%2Fdocs%2Flanguages%2Ftypescript%2Frefactor-extract-function.gif",title:"https://code.visualstudio.com/assets/docs/languages/typescript/refactor-extract-function.gif",target:"_blank",rel:"noopener noreferrer"},P=e("p",null,[e("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d73cfc9acb494d3e8be95c8916368a92~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image",alt:""})],-1),L={href:"https://link.juejin.cn?target=https%3A%2F%2Fcode.visualstudio.com%2Fassets%2Fdocs%2Flanguages%2Ftypescript%2Frefactor-extract-constant.gif",title:"https://code.visualstudio.com/assets/docs/languages/typescript/refactor-extract-constant.gif",target:"_blank",rel:"noopener noreferrer"},D=r('<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a237e0cc38be4e82a26cc2838ee33209~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><p>以上内容，我们可以总结为：</p><ul><li>类型错误的静态检查</li><li>代码可阅读性的提高</li><li>编写速度的加快</li><li>可维护性的提高</li></ul><h3 id="typescript-还为我们带来了什么" tabindex="-1"><a class="header-anchor" href="#typescript-还为我们带来了什么" aria-hidden="true">#</a> Typescript 还为我们带来了什么？</h3><p>Typescript 的静态类型分析，目前是影响甚广。而 Typescript 的面向对象，前端开发者普遍没太大感受。与后端发展的时间相比，前端快速发展的时间太短，以至于前端整体并没有沉淀出完整体系的 <strong>设计模式、设计原则</strong>与**建模。**借助 Typescript 的特性，刚好使我们可以借鉴其它领域。</p><h4 id="uml-建模" tabindex="-1"><a class="header-anchor" href="#uml-建模" aria-hidden="true">#</a> UML 建模</h4><blockquote><p>UML 主要使用图形符号来表示软件项目的设计，使用 UML 可以帮助项目团队沟通、验证功能的设计。</p></blockquote><p>类图：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f4cfe8e08ffc4dd0bbe62f2596a329c3~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><p>时序图：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aa56c6ff153347858cd4b1b184d07837~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><p>用户管理-时序图</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f0ec02267852484395fd3ade3b7ea99c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><p>UML 以图形符号的形式，填补了一部分的设计文档与使用文档。</p><h4 id="设计模式与设计原则" tabindex="-1"><a class="header-anchor" href="#设计模式与设计原则" aria-hidden="true">#</a> 设计模式与设计原则</h4><p>在 Typescript 出现之前，部分面向对象的设计模式也可以用 JavaScript 模拟出来，但因为缺少接口 interface、访问限定修饰符、抽象类几个概念，面向对象中的封装与多态在 JavaScript 中一直是一个难以理解、难以模拟的概念，而 Typescript 的出现恰好补上这缺失的一环。</p>',16),I={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.runoob.com%2Fdesign-pattern%2Fdesign-pattern-intro.html",title:"https://www.runoob.com/design-pattern/design-pattern-intro.html",target:"_blank",rel:"noopener noreferrer"},M=r('<h3 id="typescript-更利于构建大型应用" tabindex="-1"><a class="header-anchor" href="#typescript-更利于构建大型应用" aria-hidden="true">#</a> Typescript 更利于构建大型应用</h3><blockquote><p>如果问 Java、C#的开发者，静态类型检查有何意义？</p></blockquote><blockquote><p>标准答案是&quot;静态类型更有利于构建大型应用&quot;。</p></blockquote><p>Typescript 与 JavaScript 在开发大型应用的进度对比，如下图所示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b794ae0644cf46bca03c17d0f4522798~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><p>我们在前面的 <code>Typescript</code>设计初衷中，提到在大型 JavaScript 项目中后期，经常我们面临的 3 个问题：</p><ol><li></li></ol><blockquote><p>类型错误多，bug 率居高不下。 2.</p></blockquote><blockquote><p>缺少文档、新成员理解应用逻辑困难。 3.</p></blockquote><blockquote><p>维护成本高、可扩展性差的困境。</p></blockquote><p>Typescript 是如何解决上述问题的？</p><p>其一、静态类型检查可以尽早构建失败。一旦编写代码时发生类型不匹配，在编译阶段前、中阶段均可发现。</p><p>其二、静态类型对阅读代码是友好的。针对大型应用，方法众多，调用关系复杂，不可能每个函数都有人编写细致的文档，所以静态类型就是非常重要的提示和约束。</p><p>其三、UML 建模语言，弥补了部分设计文档与说明文档，同一套的设计模式，使得理解功能变得容易。</p><p>其四、借助面向的设计思想，隐藏实现细节，加强功能的内聚性。控制接口暴露粒度，来降低功能间的耦合度，达到容易扩展的效果。</p><p>其五、静态类型其配合 IDE 的重构功能，维护困难系数直线下降。</p><p>结合 Tyepscript、React 接触面向对象 OOP 与函数编程 FP，我们总结了如下体验：</p><ol><li>在应用设计层面，OOP 有着一套完整的设计体系，可以应对模块可扩展性、业务的复杂性的挑战。</li><li>在细节实现层面，不要为了 OOP 而 OOP，OOP 不是万能的。</li><li>在处理数据流时，FP 有着独一无二的优势。</li></ol><h3 id="关于使用-typescript-的建议" tabindex="-1"><a class="header-anchor" href="#关于使用-typescript-的建议" aria-hidden="true">#</a> 关于使用 Typescript 的建议</h3><p>我们的强烈建议是：Typescript 是一种语言，包含两部分内容：静态类型检查、面向对象。如果你已经尝试了类型系统，并且已经熟悉了 JavaScript 的各种特性，不妨学习下面向对象，或许能更好的掌握 Typescript 这门语言。</p><p>在接触面向对象之前的两点提示：</p><ol><li>设计原则、设计模式是一种编程范式，是跨语言、跨框架的。</li><li>强类型的语言特性，带来了一种新思维习惯。</li></ol><h3 id="结语" tabindex="-1"><a class="header-anchor" href="#结语" aria-hidden="true">#</a> 结语</h3><p>通过前文所述，我们应该知道：</p><ul><li>Typescript 的设计初衷是为了应对大型应用中 JavaScript 的复杂性而设计的。</li><li>Typescript 的两大特性：静态类型检查、面向对象。</li><li>Typescript 作为一种强类型语言，不仅有静态类型系统，更我们带来了一套完整的控制功能复杂度的技术体系。</li><li>如果你是一名中高级前端，建议在拥抱函数式编程的同时，尝试跨界学习下面向对象编程。</li></ul><h3 id="推荐阅读" tabindex="-1"><a class="header-anchor" href="#推荐阅读" aria-hidden="true">#</a> 推荐阅读</h3>',26),U={href:"https://link.juejin.cn?target=https%3A%2F%2Fblog.csdn.net%2Fvop444%2Farticle%2Fdetails%2F53515768",title:"https://blog.csdn.net/vop444/article/details/53515768",target:"_blank",rel:"noopener noreferrer"},V={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.visual-paradigm.com%2Fcn%2Fguide%2Fuml-unified-modeling-language%2Fwhat-is-uml%2F",title:"https://www.visual-paradigm.com/cn/guide/uml-unified-modeling-language/what-is-uml/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.runoob.com%2Fdesign-pattern%2Fdesign-pattern-intro.html",title:"https://www.runoob.com/design-pattern/design-pattern-intro.html",target:"_blank",rel:"noopener noreferrer"},N={href:"https://link.juejin.cn?target=https%3A%2F%2Ftech.meituan.com%2F2019%2F09%2F19%2Fcommon-method-of-reduce-complexity.html",title:"https://tech.meituan.com/2019/09/19/common-method-of-reduce-complexity.html",target:"_blank",rel:"noopener noreferrer"};function G(H,K){const i=o("ExternalLinkIcon");return a(),n("div",null,[l,e("p",null,[e("a",h,[t("Typescrip"),p(i)]),t("t 的维基百科词条")]),d,e("blockquote",null,[e("p",null,[t("TypeScript 开发者寻求一种不破坏现有标准兼容性和跨平台支持的解决方案。知道 ECMAScript 标准为未来"),e("a",u,[t("基于类编程"),p(i)]),t("提供支持后, Typescript 开发便基于此方案。这形成了包含一组新的语法扩展的一个 JavaScript 编译器，一个基于此提案的超集，可将 TypeScript 语法编译为常规的 JavaScript。")])]),e("blockquote",null,[e("p",null,[t("TypeScript 不仅包含 JavaScript 的语法，而且还提供了静态类型检查以及使用看起来像基于类的"),e("a",f,[t("面向对象编程"),p(i)]),t("语法操作 Prototype。C#的首席架构师以及 Delphi 和 Turbo Pascal 的创始人安德斯·海尔斯伯格参与了 TypeScript 的开发。")])]),g,m,e("p",null,[t("前端在经过 "),b,t("、 "),_,t("、"),e("a",k,[t("CoffeeScrip"),p(i)]),t("t 等短暂的"),e("a",y,[t("类型检查之争"),p(i)]),t("后。 "),F,t("在开发速度、协作成本、维护成本上的出色表现，实践过 "),T,t("构建大型应用的团队，几乎是一边倒的从 JS 转向了 TS。具有代表性的： "),j,t("、 "),w,t("、 "),E,t("从最初的 JS 版本切换到了 TS 版本。")]),e("p",null,[t("有意思的是，"),e("a",v,[t("为什么 React 不使用 Typescript？"),p(i)])]),A,e("p",null,[t("虽然逐渐沉淀出"),e("a",S,[t("容器组件、展示组件"),p(i)]),t("、业务逻辑与 UI 分离等等模式，我们还是会遇到改一发而动全身的 bug，新成员理解困难、老成员的模块各种冲突问题，逐渐我们感觉到 "),x,t("....")]),B,e("p",null,[t("rollbar 于 2018 年统计了"),e("a",z,[t("前端项目中 Top10 的错误类型"),p(i)]),t("：")]),q,e("p",null,[t("IDE 很早就有了自动补全功能，在有 d.ts 类型文件后，可以自行编写类型库，供 IDE 识别，最具代表性的便是："),e("a",J,[t("www.typescriptlang.org/dt/search?s..."),p(i)])]),C,e("ul",null,[e("li",null,[e("a",O,[t("提取函数"),p(i)])])]),P,e("ul",null,[e("li",null,[e("a",L,[t("提取变量"),p(i)])])]),D,e("p",null,[t("最近几年，在 Typescript 流行开来的同时，函数式编程也随着 Redux 等的流行而火热起来。在这里，我们无意争论两种编程模式孰优孰劣。我们需要的是保证应用构建的强壮与可维护。在使用 Typescript 的过程中，我们决定破界，去尝试前端不熟悉的面向对象。 由于面向对象是个比较大的领域，我们在这里不详细介绍面向对象的内容，有兴趣的同学可以通过底部"),e("a",I,[t("设计模式"),p(i)]),t("的链接了解一下面向对象。")]),M,e("ul",null,[e("li",null,[e("a",U,[t("为什么要建模？"),p(i)])]),e("li",null,[e("a",V,[t("UML 建模是什么"),p(i)]),t("？")]),e("li",null,[e("a",R,[t("设计模式"),p(i)])]),e("li",null,[e("a",N,[t("降低软件复杂性的一般原则和方法"),p(i)])])])])}const W=c(s,[["render",G],["__file","关于Typescript在前端的体验漫谈.html.vue"]]);export{W as default};
