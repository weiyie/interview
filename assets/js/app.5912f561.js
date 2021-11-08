"use strict";(self.webpackChunkinterview_weiyie=self.webpackChunkinterview_weiyie||[]).push([[143],{4839:(e,t,a)=>{a.d(t,{g:()=>u});var E=a(7621),n=a(6252),d=a(3577);const l=(0,n.aZ)({props:{type:{type:String,required:!1,default:"tip"},text:{type:String,required:!1,default:""},vertical:{type:String,required:!1,default:void 0}},setup:e=>(t,a)=>((0,n.wg)(),(0,n.iD)("span",{class:(0,d.C_)(["badge",e.type]),style:(0,d.j5)({verticalAlign:e.vertical})},[(0,n.WI)(t.$slots,"default",{},(()=>[(0,n.Uk)((0,d.zw)(e.text),1)]))],6))});var i=a(2262);const r=(0,n.aZ)({name:"CodeGroup",setup(e,{slots:t}){const a=(0,i.iH)(-1),E=(0,i.iH)([]);return()=>{var e;const d=((null==(e=t.default)?void 0:e.call(t))||[]).filter((e=>"CodeGroupItem"===e.type.name)).map((e=>(null===e.props&&(e.props={}),e)));return 0===d.length?null:(a.value<0||a.value>d.length-1?(a.value=d.findIndex((e=>""===e.props.active||!0===e.props.active)),-1===a.value&&(a.value=0)):d.forEach(((e,t)=>{e.props.active=t===a.value})),(0,n.h)("div",{class:"code-group"},[(0,n.h)("div",{class:"code-group__nav"},(0,n.h)("ul",{class:"code-group__ul"},d.map(((e,t)=>{const d=t===a.value;return(0,n.h)("li",{class:"code-group__li"},(0,n.h)("button",{ref:e=>{e&&(E.value[t]=e)},class:{"code-group__nav-tab":!0,"code-group__nav-tab-active":d},ariaPressed:d,ariaExpanded:d,onClick:()=>a.value=t,onKeydown:e=>((e,t)=>{" "===e.key||"Enter"===e.key?(e.preventDefault(),a.value=t):"ArrowRight"===e.key?(e.preventDefault(),((e=a.value)=>{e<E.value.length-1?a.value=e+1:a.value=0,E.value[a.value].focus()})(t)):"ArrowLeft"===e.key&&(e.preventDefault(),((e=a.value)=>{a.value=e>0?e-1:E.value.length-1,E.value[a.value].focus()})(t))})(e,t)},e.props.title))})))),d]))}}}),s=["aria-selected"],o=(0,n.aZ)({name:"CodeGroupItem"}),B=(0,n.aZ)({...o,props:{title:{type:String,required:!0},active:{type:Boolean,required:!1,default:!1}},setup:function(e){return(t,a)=>((0,n.wg)(),(0,n.iD)("div",{class:(0,d.C_)(["code-group-item",{"code-group-item__active":e.active}]),"aria-selected":e.active},[(0,n.WI)(t.$slots,"default")],10,s))}});var c=a(6661);const A={class:"sr-only"},S=(0,n.aZ)({setup(e){const t=(0,c.X6)();return(e,a)=>((0,n.wg)(),(0,n.j4)((0,i.SU)(E.MS),null,{default:(0,n.w5)((()=>[(0,n._)("span",A,(0,d.zw)((0,i.SU)(t).openInNewWindow),1)])),_:1}))}}),h=(0,E.vW)((({app:e,router:t})=>{e.component("Badge",l),e.component("CodeGroup",r),e.component("CodeGroupItem",B),delete e._context.components.OutboundLink,e.component("OutboundLink",S),e.component("NavbarSearch",(()=>{const t=e.component("Docsearch")||e.component("SearchBox");return t?(0,n.h)(t):null}));const a=t.options.scrollBehavior;t.options.scrollBehavior=async(...e)=>(await(0,c.P$)().wait(),a(...e))}));var m=a(6971),C=a(1598);const u=[h,m.Z,C.Z]},3718:(e,t,a)=>{a.d(t,{p:()=>E});const E=[a(3051).Z]},4856:(e,t,a)=>{a.d(t,{l:()=>r});var E=a(7621),n=a(6661);const d=(0,E.F2)((()=>{(0,n.OX)(),(0,n.fR)(),(0,n.gh)()}));var l=a(1263),i=a(6243);const r=[d,l.Z,i.Z]},3513:(e,t,a)=>{a.d(t,{Z:()=>n});var E=a(6252);const n={404:(0,E.RC)((()=>a.e(42).then(a.bind(a,7042)))),Layout:(0,E.RC)((()=>a.e(231).then(a.bind(a,231))))}},5214:(e,t,a)=>{a.d(t,{b:()=>n});var E=a(6252);const n={"v-8daa1a0e":(0,E.RC)((()=>a.e(509).then(a.bind(a,4137)))),"v-45fde2e3":(0,E.RC)((()=>a.e(284).then(a.bind(a,4825)))),"v-2f214a57":(0,E.RC)((()=>a.e(482).then(a.bind(a,4964)))),"v-68694585":(0,E.RC)((()=>a.e(946).then(a.bind(a,7367)))),"v-ee324a72":(0,E.RC)((()=>a.e(151).then(a.bind(a,1584)))),"v-5d1b7f84":(0,E.RC)((()=>a.e(927).then(a.bind(a,3693)))),"v-ccaefffc":(0,E.RC)((()=>a.e(162).then(a.bind(a,3179)))),"v-2e8001db":(0,E.RC)((()=>a.e(912).then(a.bind(a,5882)))),"v-8a30d6e8":(0,E.RC)((()=>a.e(876).then(a.bind(a,7120)))),"v-3ce3fee2":(0,E.RC)((()=>a.e(599).then(a.bind(a,4404)))),"v-56a56443":(0,E.RC)((()=>Promise.all([a.e(756),a.e(289)]).then(a.bind(a,6248)))),"v-6f025593":(0,E.RC)((()=>a.e(864).then(a.bind(a,967)))),"v-35219140":(0,E.RC)((()=>a.e(914).then(a.bind(a,9684)))),"v-58f114a2":(0,E.RC)((()=>a.e(331).then(a.bind(a,7922)))),"v-532ce5c0":(0,E.RC)((()=>a.e(256).then(a.bind(a,84)))),"v-66eeeb5a":(0,E.RC)((()=>a.e(481).then(a.bind(a,4105)))),"v-450b3517":(0,E.RC)((()=>a.e(445).then(a.bind(a,6136)))),"v-5cb6adea":(0,E.RC)((()=>a.e(609).then(a.bind(a,8873)))),"v-6fe59350":(0,E.RC)((()=>a.e(598).then(a.bind(a,4378)))),"v-3706649a":(0,E.RC)((()=>a.e(88).then(a.bind(a,5031))))}},5719:(e,t,a)=>{a.d(t,{T:()=>E});const E={"v-8daa1a0e":()=>a.e(509).then(a.bind(a,4958)).then((({data:e})=>e)),"v-45fde2e3":()=>a.e(284).then(a.bind(a,4020)).then((({data:e})=>e)),"v-2f214a57":()=>a.e(482).then(a.bind(a,8031)).then((({data:e})=>e)),"v-68694585":()=>a.e(946).then(a.bind(a,7756)).then((({data:e})=>e)),"v-ee324a72":()=>a.e(151).then(a.bind(a,7347)).then((({data:e})=>e)),"v-5d1b7f84":()=>a.e(927).then(a.bind(a,3161)).then((({data:e})=>e)),"v-ccaefffc":()=>a.e(162).then(a.bind(a,7559)).then((({data:e})=>e)),"v-2e8001db":()=>a.e(912).then(a.bind(a,8344)).then((({data:e})=>e)),"v-8a30d6e8":()=>a.e(876).then(a.bind(a,5957)).then((({data:e})=>e)),"v-3ce3fee2":()=>a.e(599).then(a.bind(a,7259)).then((({data:e})=>e)),"v-56a56443":()=>Promise.all([a.e(756),a.e(289)]).then(a.bind(a,7251)).then((({data:e})=>e)),"v-6f025593":()=>a.e(864).then(a.bind(a,1557)).then((({data:e})=>e)),"v-35219140":()=>a.e(914).then(a.bind(a,5255)).then((({data:e})=>e)),"v-58f114a2":()=>a.e(331).then(a.bind(a,4997)).then((({data:e})=>e)),"v-532ce5c0":()=>a.e(256).then(a.bind(a,2286)).then((({data:e})=>e)),"v-66eeeb5a":()=>a.e(481).then(a.bind(a,889)).then((({data:e})=>e)),"v-450b3517":()=>a.e(445).then(a.bind(a,6299)).then((({data:e})=>e)),"v-5cb6adea":()=>a.e(609).then(a.bind(a,7608)).then((({data:e})=>e)),"v-6fe59350":()=>a.e(598).then(a.bind(a,2666)).then((({data:e})=>e)),"v-3706649a":()=>a.e(88).then(a.bind(a,8624)).then((({data:e})=>e))}},2456:(e,t,a)=>{a.d(t,{g:()=>n});var E=a(4802);const n=[["v-8daa1a0e","/","",["/index.html","/index.md"]],["v-45fde2e3","/%E6%89%8B%E5%86%99%E9%A2%98/%E6%89%8B%E5%86%99%E9%A2%98.html","",["/手写题/手写题.html","/%E6%89%8B%E5%86%99%E9%A2%98/%E6%89%8B%E5%86%99%E9%A2%98","/手写题/手写题.md","/%E6%89%8B%E5%86%99%E9%A2%98/%E6%89%8B%E5%86%99%E9%A2%98.md"]],["v-2f214a57","/pages/8309a5b876fc95e3/","常用meta整理",["/pages/8309a5b876fc95e3/index.html","/02.页面/10.HTML/10.常用meta整理.html","/02.%E9%A1%B5%E9%9D%A2/10.HTML/10.%E5%B8%B8%E7%94%A8meta%E6%95%B4%E7%90%86.html","/02.页面/10.HTML/10.常用meta整理.md","/02.%E9%A1%B5%E9%9D%A2/10.HTML/10.%E5%B8%B8%E7%94%A8meta%E6%95%B4%E7%90%86.md"]],["v-68694585","/pages/c8f128/","CSS教程和技巧收藏",["/pages/c8f128/index.html","/02.页面/20.CSS/00.CSS教程和技巧收藏.html","/02.%E9%A1%B5%E9%9D%A2/20.CSS/00.CSS%E6%95%99%E7%A8%8B%E5%92%8C%E6%8A%80%E5%B7%A7%E6%94%B6%E8%97%8F.html","/02.页面/20.CSS/00.CSS教程和技巧收藏.md","/02.%E9%A1%B5%E9%9D%A2/20.CSS/00.CSS%E6%95%99%E7%A8%8B%E5%92%8C%E6%8A%80%E5%B7%A7%E6%94%B6%E8%97%8F.md"]],["v-ee324a72","/pages/0a83b083bdf257cb/","flex布局语法",["/pages/0a83b083bdf257cb/index.html","/02.页面/20.CSS/01.flex布局语法.html","/02.%E9%A1%B5%E9%9D%A2/20.CSS/01.flex%E5%B8%83%E5%B1%80%E8%AF%AD%E6%B3%95.html","/02.页面/20.CSS/01.flex布局语法.md","/02.%E9%A1%B5%E9%9D%A2/20.CSS/01.flex%E5%B8%83%E5%B1%80%E8%AF%AD%E6%B3%95.md"]],["v-5d1b7f84","/pages/ea6db1530c42ad51/","flex布局案例-基础",["/pages/ea6db1530c42ad51/index.html","/02.页面/20.CSS/02.flex布局案例-基础.html","/02.%E9%A1%B5%E9%9D%A2/20.CSS/02.flex%E5%B8%83%E5%B1%80%E6%A1%88%E4%BE%8B-%E5%9F%BA%E7%A1%80.html","/02.页面/20.CSS/02.flex布局案例-基础.md","/02.%E9%A1%B5%E9%9D%A2/20.CSS/02.flex%E5%B8%83%E5%B1%80%E6%A1%88%E4%BE%8B-%E5%9F%BA%E7%A1%80.md"]],["v-ccaefffc","/pages/eff61bc8b4f4695d/","flex布局案例-骰子",["/pages/eff61bc8b4f4695d/index.html","/02.页面/20.CSS/03.flex布局案例-骰子.html","/02.%E9%A1%B5%E9%9D%A2/20.CSS/03.flex%E5%B8%83%E5%B1%80%E6%A1%88%E4%BE%8B-%E9%AA%B0%E5%AD%90.html","/02.页面/20.CSS/03.flex布局案例-骰子.md","/02.%E9%A1%B5%E9%9D%A2/20.CSS/03.flex%E5%B8%83%E5%B1%80%E6%A1%88%E4%BE%8B-%E9%AA%B0%E5%AD%90.md"]],["v-2e8001db","/pages/df9e7c7214fa5046/","flex布局案例-圣杯布局",["/pages/df9e7c7214fa5046/index.html","/02.页面/20.CSS/04.flex布局案例-圣杯布局.html","/02.%E9%A1%B5%E9%9D%A2/20.CSS/04.flex%E5%B8%83%E5%B1%80%E6%A1%88%E4%BE%8B-%E5%9C%A3%E6%9D%AF%E5%B8%83%E5%B1%80.html","/02.页面/20.CSS/04.flex布局案例-圣杯布局.md","/02.%E9%A1%B5%E9%9D%A2/20.CSS/04.flex%E5%B8%83%E5%B1%80%E6%A1%88%E4%BE%8B-%E5%9C%A3%E6%9D%AF%E5%B8%83%E5%B1%80.md"]],["v-8a30d6e8","/pages/85b5a3fe218a34b7/","flex布局案例-网格布局",["/pages/85b5a3fe218a34b7/index.html","/02.页面/20.CSS/05.flex布局案例-网格布局.html","/02.%E9%A1%B5%E9%9D%A2/20.CSS/05.flex%E5%B8%83%E5%B1%80%E6%A1%88%E4%BE%8B-%E7%BD%91%E6%A0%BC%E5%B8%83%E5%B1%80.html","/02.页面/20.CSS/05.flex布局案例-网格布局.md","/02.%E9%A1%B5%E9%9D%A2/20.CSS/05.flex%E5%B8%83%E5%B1%80%E6%A1%88%E4%BE%8B-%E7%BD%91%E6%A0%BC%E5%B8%83%E5%B1%80.md"]],["v-3ce3fee2","/pages/05cc577fb51c7998/","flex布局案例-输入框布局",["/pages/05cc577fb51c7998/index.html","/02.页面/20.CSS/06.flex布局案例-输入框布局.html","/02.%E9%A1%B5%E9%9D%A2/20.CSS/06.flex%E5%B8%83%E5%B1%80%E6%A1%88%E4%BE%8B-%E8%BE%93%E5%85%A5%E6%A1%86%E5%B8%83%E5%B1%80.html","/02.页面/20.CSS/06.flex布局案例-输入框布局.md","/02.%E9%A1%B5%E9%9D%A2/20.CSS/06.flex%E5%B8%83%E5%B1%80%E6%A1%88%E4%BE%8B-%E8%BE%93%E5%85%A5%E6%A1%86%E5%B8%83%E5%B1%80.md"]],["v-56a56443","/pages/02d7f59d98d87409/","CSS3之transition过渡",["/pages/02d7f59d98d87409/index.html","/02.页面/20.CSS/07.CSS3之transition过渡.html","/02.%E9%A1%B5%E9%9D%A2/20.CSS/07.CSS3%E4%B9%8Btransition%E8%BF%87%E6%B8%A1.html","/02.页面/20.CSS/07.CSS3之transition过渡.md","/02.%E9%A1%B5%E9%9D%A2/20.CSS/07.CSS3%E4%B9%8Btransition%E8%BF%87%E6%B8%A1.md"]],["v-6f025593","/pages/c2c0432138f6e042/","CSS3之animation动画",["/pages/c2c0432138f6e042/index.html","/02.页面/20.CSS/08.CSS3之animation动画.html","/02.%E9%A1%B5%E9%9D%A2/20.CSS/08.CSS3%E4%B9%8Banimation%E5%8A%A8%E7%94%BB.html","/02.页面/20.CSS/08.CSS3之animation动画.md","/02.%E9%A1%B5%E9%9D%A2/20.CSS/08.CSS3%E4%B9%8Banimation%E5%8A%A8%E7%94%BB.md"]],["v-35219140","/pages/3d52574260725aea/","「布局技巧」图片未加载前自动撑开元素高度",["/pages/3d52574260725aea/index.html","/02.页面/20.CSS/20.「布局技巧」图片未加载前自动撑开元素高度.html","/02.%E9%A1%B5%E9%9D%A2/20.CSS/20.%E3%80%8C%E5%B8%83%E5%B1%80%E6%8A%80%E5%B7%A7%E3%80%8D%E5%9B%BE%E7%89%87%E6%9C%AA%E5%8A%A0%E8%BD%BD%E5%89%8D%E8%87%AA%E5%8A%A8%E6%92%91%E5%BC%80%E5%85%83%E7%B4%A0%E9%AB%98%E5%BA%A6.html","/02.页面/20.CSS/20.「布局技巧」图片未加载前自动撑开元素高度.md","/02.%E9%A1%B5%E9%9D%A2/20.CSS/20.%E3%80%8C%E5%B8%83%E5%B1%80%E6%8A%80%E5%B7%A7%E3%80%8D%E5%9B%BE%E7%89%87%E6%9C%AA%E5%8A%A0%E8%BD%BD%E5%89%8D%E8%87%AA%E5%8A%A8%E6%92%91%E5%BC%80%E5%85%83%E7%B4%A0%E9%AB%98%E5%BA%A6.md"]],["v-58f114a2","/pages/42b66999cc27dc25/","文字在一行或多行时超出显示省略号",["/pages/42b66999cc27dc25/index.html","/02.页面/20.CSS/30.文字在一行或多行时超出显示省略号.html","/02.%E9%A1%B5%E9%9D%A2/20.CSS/30.%E6%96%87%E5%AD%97%E5%9C%A8%E4%B8%80%E8%A1%8C%E6%88%96%E5%A4%9A%E8%A1%8C%E6%97%B6%E8%B6%85%E5%87%BA%E6%98%BE%E7%A4%BA%E7%9C%81%E7%95%A5%E5%8F%B7.html","/02.页面/20.CSS/30.文字在一行或多行时超出显示省略号.md","/02.%E9%A1%B5%E9%9D%A2/20.CSS/30.%E6%96%87%E5%AD%97%E5%9C%A8%E4%B8%80%E8%A1%8C%E6%88%96%E5%A4%9A%E8%A1%8C%E6%97%B6%E8%B6%85%E5%87%BA%E6%98%BE%E7%A4%BA%E7%9C%81%E7%95%A5%E5%8F%B7.md"]],["v-532ce5c0","/pages/20a978023139589d/","从box-sizing属性入手，了解盒子模型",["/pages/20a978023139589d/index.html","/02.页面/20.CSS/35.从box-sizing属性入手，了解盒子模型.html","/02.%E9%A1%B5%E9%9D%A2/20.CSS/35.%E4%BB%8Ebox-sizing%E5%B1%9E%E6%80%A7%E5%85%A5%E6%89%8B%EF%BC%8C%E4%BA%86%E8%A7%A3%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B.html","/02.页面/20.CSS/35.从box-sizing属性入手，了解盒子模型.md","/02.%E9%A1%B5%E9%9D%A2/20.CSS/35.%E4%BB%8Ebox-sizing%E5%B1%9E%E6%80%A7%E5%85%A5%E6%89%8B%EF%BC%8C%E4%BA%86%E8%A7%A3%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B.md"]],["v-66eeeb5a","/pages/cb7cb251adba4bf7/","水平垂直居中的几种方式-案例",["/pages/cb7cb251adba4bf7/index.html","/02.页面/20.CSS/40.水平垂直居中的几种方式-案例.html","/02.%E9%A1%B5%E9%9D%A2/20.CSS/40.%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E5%BC%8F-%E6%A1%88%E4%BE%8B.html","/02.页面/20.CSS/40.水平垂直居中的几种方式-案例.md","/02.%E9%A1%B5%E9%9D%A2/20.CSS/40.%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E5%BC%8F-%E6%A1%88%E4%BE%8B.md"]],["v-450b3517","/pages/5dde351274f1e39d/","如何根据系统主题自动响应CSS深色模式",["/pages/5dde351274f1e39d/index.html","/02.页面/20.CSS/45.如何根据系统主题自动响应CSS深色模式.html","/02.%E9%A1%B5%E9%9D%A2/20.CSS/45.%E5%A6%82%E4%BD%95%E6%A0%B9%E6%8D%AE%E7%B3%BB%E7%BB%9F%E4%B8%BB%E9%A2%98%E8%87%AA%E5%8A%A8%E5%93%8D%E5%BA%94CSS%E6%B7%B1%E8%89%B2%E6%A8%A1%E5%BC%8F.html","/02.页面/20.CSS/45.如何根据系统主题自动响应CSS深色模式.md","/02.%E9%A1%B5%E9%9D%A2/20.CSS/45.%E5%A6%82%E4%BD%95%E6%A0%B9%E6%8D%AE%E7%B3%BB%E7%BB%9F%E4%B8%BB%E9%A2%98%E8%87%AA%E5%8A%A8%E5%93%8D%E5%BA%94CSS%E6%B7%B1%E8%89%B2%E6%A8%A1%E5%BC%8F.md"]],["v-5cb6adea","/pages/941581927b4a38f8/","「css技巧」使用hover和attr()定制悬浮提示",["/pages/941581927b4a38f8/index.html","/02.页面/20.CSS/50.「css技巧」使用hover和attr()定制悬浮提示.html","/02.%E9%A1%B5%E9%9D%A2/20.CSS/50.%E3%80%8Ccss%E6%8A%80%E5%B7%A7%E3%80%8D%E4%BD%BF%E7%94%A8hover%E5%92%8Cattr()%E5%AE%9A%E5%88%B6%E6%82%AC%E6%B5%AE%E6%8F%90%E7%A4%BA.html","/02.页面/20.CSS/50.「css技巧」使用hover和attr()定制悬浮提示.md","/02.%E9%A1%B5%E9%9D%A2/20.CSS/50.%E3%80%8Ccss%E6%8A%80%E5%B7%A7%E3%80%8D%E4%BD%BF%E7%94%A8hover%E5%92%8Cattr()%E5%AE%9A%E5%88%B6%E6%82%AC%E6%B5%AE%E6%8F%90%E7%A4%BA.md"]],["v-6fe59350","/pages/3da0d7/","CSS-function汇总",["/pages/3da0d7/index.html","/02.页面/20.CSS/60.CSS-function汇总.html","/02.%E9%A1%B5%E9%9D%A2/20.CSS/60.CSS-function%E6%B1%87%E6%80%BB.html","/02.页面/20.CSS/60.CSS-function汇总.md","/02.%E9%A1%B5%E9%9D%A2/20.CSS/60.CSS-function%E6%B1%87%E6%80%BB.md"]],["v-3706649a","/404.html","",["/404"]]].reduce(((e,[t,a,n,d])=>(e.push({name:t,path:a,component:E.Y,meta:{title:n}},...d.map((e=>({path:e,redirect:a})))),e)),[{name:"404",path:"/:catchAll(.*)",component:E.Y}])},4995:(e,t,a)=>{a.d(t,{H:()=>E});const E={base:"/interview/",lang:"zh-CN",title:"前端面试",description:"前端面试必备指南",head:[],locales:{}}},8417:(e,t,a)=>{a.d(t,{f:()=>E});const E={navbar:[{text:"手写题",link:"/pages/8309a5b876fc95e3"},{text:"算法",link:""},{text:"面经",link:"/面试/"}],sidebarDepth:2,logo:"",repo:"weiyie",sidebar:{"/02.页面/":[{title:"HTML",text:"HTML",collapsable:!1,children:[["10.HTML/10.常用meta整理.md","常用meta整理","/pages/8309a5b876fc95e3"]]},{title:"CSS",text:"CSS",collapsable:!1,children:[["20.CSS/00.CSS教程和技巧收藏.md","CSS教程和技巧收藏","/pages/c8f128/"],["20.CSS/01.flex布局语法.md","flex布局语法","/pages/0a83b083bdf257cb"],["20.CSS/02.flex布局案例-基础.md","flex布局案例-基础","/pages/ea6db1530c42ad51"],["20.CSS/03.flex布局案例-骰子.md","flex布局案例-骰子","/pages/eff61bc8b4f4695d"],["20.CSS/04.flex布局案例-圣杯布局.md","flex布局案例-圣杯布局","/pages/df9e7c7214fa5046"],["20.CSS/05.flex布局案例-网格布局.md","flex布局案例-网格布局","/pages/85b5a3fe218a34b7"],["20.CSS/06.flex布局案例-输入框布局.md","flex布局案例-输入框布局","/pages/05cc577fb51c7998"],["20.CSS/07.CSS3之transition过渡.md","CSS3之transition过渡","/pages/02d7f59d98d87409"],["20.CSS/08.CSS3之animation动画.md","CSS3之animation动画","/pages/c2c0432138f6e042"],["20.CSS/20.「布局技巧」图片未加载前自动撑开元素高度.md","「布局技巧」图片未加载前自动撑开元素高度","/pages/3d52574260725aea"],["20.CSS/30.文字在一行或多行时超出显示省略号.md","文字在一行或多行时超出显示省略号","/pages/42b66999cc27dc25"],["20.CSS/35.从box-sizing属性入手，了解盒子模型.md","从box-sizing属性入手，了解盒子模型","/pages/20a978023139589d"],["20.CSS/40.水平垂直居中的几种方式-案例.md","水平垂直居中的几种方式-案例","/pages/cb7cb251adba4bf7"],["20.CSS/45.如何根据系统主题自动响应CSS深色模式.md","如何根据系统主题自动响应CSS深色模式","/pages/5dde351274f1e39d"],["20.CSS/50.「css技巧」使用hover和attr()定制悬浮提示.md","「css技巧」使用hover和attr()定制悬浮提示","/pages/941581927b4a38f8"],["20.CSS/60.CSS-function汇总.md","CSS-function汇总","/pages/3da0d7"]]}],catalogue:{},"/手写题/":[["手写题.md","手写题",""]]},editLink:!1,selectLanguageName:"简体中文",selectLanguageText:"选择语言",selectLanguageAriaLabel:"选择语言",editLinkText:"在 GitHub 上编辑此页",lastUpdatedText:"上次更新",contributorsText:"贡献者",tip:"提示",warning:"注意",danger:"警告",notFound:["这里什么都没有","我们怎么到这来了？","这是一个 404 页面","看起来我们进入了错误的链接"],backToHome:"返回首页",openInNewWindow:"在新窗口打开",toggleDarkMode:"切换夜间模式",toggleSidebar:"切换侧边栏",author:{name:"weiyie",link:"https://github.com/weiyie"},footer:{createYear:2021,copyrightInfo:'weiyie | <a href="https://github.com/weiyie/" target="_blank">MIT License</a>'},locales:{"/":{selectLanguageName:"English"}},darkMode:!0,lastUpdated:!0,contributors:!0}},6661:(e,t,a)=>{a.d(t,{OX:()=>r,gh:()=>L,fR:()=>v,vs:()=>i,sC:()=>A,P$:()=>C,VU:()=>b,X6:()=>R});var E=a(8688),n=a(6252),d=a(2262);const l=Symbol(""),i=()=>{const e=(0,n.f3)(l);if(!e)throw new Error("useDarkMode() is called without provider.");return e},r=()=>{const e=R(),t=(0,E.QA3)(),a=(0,E.y$C)("vuepress-color-scheme","auto"),i=(0,d.Fl)({get:()=>!!e.value.darkMode&&("auto"===a.value?t.value:"dark"===a.value),set(e){e===t.value?a.value="auto":a.value=e?"dark":"light"}});(0,n.JJ)(l,i),s(i)},s=e=>{const t=(t=e.value)=>{const a=null==window?void 0:window.document.querySelector("html");null==a||a.classList.toggle("dark",t)};(0,n.bv)((()=>{(0,n.YP)(e,t,{immediate:!0})})),(0,n.Ah)((()=>t()))};var o=a(480),B=a(2119);const c=(...e)=>{const t=(0,B.tv)().resolve(...e),a=t.matched[t.matched.length-1];if(!(null==a?void 0:a.redirect))return t;const{redirect:E}=a,n=(0,o.mf)(E)?E(t):E,d=(0,o.HD)(n)?{path:n}:n;return c({hash:t.hash,query:t.query,params:t.params,...d})},A=e=>{let t;if(Array.isArray(e))t={text:e[1],link:e[2]};else{const a=c(e);t={text:a.meta.title||e,link:"404"===a.name?e:a.fullPath}}return t};let S=null,h=null;const m={wait:()=>S,pending:()=>{S=new Promise((e=>h=e))},resolve:()=>{null==h||h(),S=null,h=null}},C=()=>m;var u=a(7621),f=a(6043);const p=Symbol("sidebarItems"),b=()=>{const e=(0,n.f3)(p);if(!e)throw new Error("useSidebarItems() is called without provider.");return e},v=()=>{const e=R(),t=(0,u.I2)(),a=(0,d.Fl)((()=>g(t.value,e.value)));(0,n.JJ)(p,a)},g=(e,t)=>{var a,E,n,d;const l=null!=(E=null!=(a=e.sidebar)?a:t.sidebar)?E:"auto",i=null!=(d=null!=(n=e.sidebarDepth)?n:t.sidebarDepth)?d:2;return e.home||!1===l?[]:"auto"===l?D(i):(0,o.kJ)(l)?y(l,i):(0,o.PO)(l)?w(l,i):[]},x=(e,t)=>t>0?e.map((e=>((e,t)=>({text:e.title,link:`#${e.slug}`,children:x(e.children,t)}))(e,t-1))):[],D=e=>{const t=(0,u.Vi)();return[{text:t.value.title,children:x(t.value.headers,e)}]},y=(e,t,a)=>{const E=(0,B.yj)(),n=(0,u.Vi)(),d=e=>{var l;let i;if(i=(0,o.HD)(e)||Array.isArray(e)?A(e):e,i.children)return{...i,children:i.children.map((e=>d(e)))};if((0,f.AH)(i.link||`${a}${i.text}`)===(0,f.AH)(E.path)){const e=1===(null==(l=n.value.headers[0])?void 0:l.level)?n.value.headers[0].children:n.value.headers;return{...i,children:x(e,t)}}return i};return e.map((e=>d(e)))},w=(e,t)=>{var a;const E=(0,B.yj)(),n=k(e,E.path),d=null!=(a=e[n])?a:[];return y(d,t,n)},k=(e,t)=>{const a=Object.keys(e).sort(((e,t)=>{const a=t.split("/").length-e.split("/").length;return 0!==a?a:t.length-e.length}));for(const e of a)if(t.startsWith(e))return e;for(const E of a){const a=Array.isArray(e[E])?[...e[E]]:[e[E]];for(;a.length;){const e=a.pop();if(e.link===t)return E;if(Array.isArray(e.children))a.push(e.children);else if(Array.isArray(e))if((0,o.HD)(e[0])){const a=new RegExp(`${t}?`);if(e[2]&&a.test(e[2]))return E;if((0,f.AH)(`${E}${e[0]}`)===(0,f.AH)(t))return E}else for(const t of e)(Array.isArray(t)||(0,o.PO)(t))&&a.push(t)}}return"/"};var F=a(6333);const R=()=>(0,F.X6)(),L=()=>{(0,n.bv)((()=>{const{hash:e}=document.location;if(e){const t=e.substring(1);setTimeout((()=>{const e=document.getElementById(decodeURI(t));e&&e.scrollIntoView()}),150)}}))}},6043:(e,t,a)=>{a.d(t,{AH:()=>i,Fg:()=>l,c9:()=>n});var E=a(480);const n=e=>!(0,E.ak)(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,d={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},l=({docsRepo:e,docsBranch:t,docsDir:a,filePathRelative:l,editLinkPattern:i})=>{const r=n(e);let s;return i?s=i:null!==r&&(s=d[r]),s?s.replace(/:repo/,(0,E.ak)(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,(0,E.FY)(`${(0,E.U1)(a)}/${l}`)):null},i=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,"").replace(/^(.*?)\/$/,"$1")}},e=>{e.O(0,[994,576],(()=>(5698,e(e.s=5698)))),e.O()}]);