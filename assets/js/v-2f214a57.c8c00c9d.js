"use strict";(self.webpackChunkinterview_weiyie=self.webpackChunkinterview_weiyie||[]).push([[482],{8031:(a,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t={key:"v-2f214a57",path:"/pages/8309a5b876fc95e3/",title:"常用meta整理",lang:"zh-CN",frontmatter:{date:"2020-02-21T12:20:10.000Z",permalink:"/pages/8309a5b876fc95e3",categories:["页面","HTML"],tags:[null],author:{name:"weiyie",link:"https://github.com/weiyie"}},excerpt:'<h1 id="常用meta整理" tabindex="-1"><a class="header-anchor" href="#常用meta整理" aria-hidden="true">#</a> 常用meta整理</h1>\n<h2 id="meta-元素" tabindex="-1"><a class="header-anchor" href="#meta-元素" aria-hidden="true">#</a> &lt;meta&gt; 元素</h2>\n<h3 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h3>\n<p>meta标签提供关于HTML文档的元数据。元数据不会显示在页面上，但是对于机器是可读的。它可用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 web 服务。</p>\n',headers:[{level:2,title:"<meta> 元素",slug:"meta-元素",children:[{level:3,title:"概要",slug:"概要",children:[]},{level:3,title:"网页相关",slug:"网页相关",children:[]},{level:3,title:"SEO优化",slug:"seo优化",children:[]},{level:3,title:"移动设备",slug:"移动设备",children:[]},{level:3,title:"一个常用的移动端页面meta设置",slug:"一个常用的移动端页面meta设置",children:[]}]}],filePathRelative:"02.页面/10.HTML/10.常用meta整理.md",git:{updatedTime:1634741038e3,contributors:[{name:"wb-wzc589583",email:"wb-wzc589583@alibaba-inc.com",commits:1}]}}},4964:(a,n,s)=>{s.r(n),s.d(n,{default:()=>_});var t=s(6252);const p=(0,t.uE)('<h1 id="常用meta整理" tabindex="-1"><a class="header-anchor" href="#常用meta整理" aria-hidden="true">#</a> 常用meta整理</h1><h2 id="meta-元素" tabindex="-1"><a class="header-anchor" href="#meta-元素" aria-hidden="true">#</a> &lt;meta&gt; 元素</h2><h3 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h3><p>meta标签提供关于HTML文档的元数据。元数据不会显示在页面上，但是对于机器是可读的。它可用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 web 服务。</p><p><strong>必要属性</strong></p><table><thead><tr><th>属性</th><th>值</th><th>描述</th></tr></thead><tbody><tr><td>content</td><td>some text</td><td>定义与http-equiv或name属性相关的元信息</td></tr></tbody></table><p><strong>可选属性</strong></p><table><thead><tr><th>属性</th><th>值</th><th>描述</th></tr></thead><tbody><tr><td>http-equiv</td><td>content-type / expire / refresh / set-cookie</td><td>把content属性关联到HTTP头部。</td></tr><tr><td>name</td><td>author / description / keywords / generator / revised / others</td><td>把 content 属性关联到一个name。</td></tr><tr><td>content</td><td>some text</td><td>定义用于翻译 content 属性值的格式。</td></tr></tbody></table><h3 id="网页相关" tabindex="-1"><a class="header-anchor" href="#网页相关" aria-hidden="true">#</a> 网页相关</h3><ul><li><strong>申明编码</strong></li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>utf-8<span class="token punctuation">&#39;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>优先使用 IE 最新版本和 Chrome</strong></li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- 关于X-UA-Compatible --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge,chrome=1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!-- 推荐 --&gt;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=6<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!-- 使用IE6 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=7<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!-- 使用IE7 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!-- 使用IE8 --&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',13),e=(0,t._)("strong",null,"浏览器内核控制",-1),l=(0,t.Uk)("：国内浏览器很多都是双内核（webkit和Trident），webkit内核高速浏览，IE内核兼容网页和旧版网站。而添加meta标签的网站可以控制浏览器选择何种内核渲染。"),o={href:"http://se.360.cn/v6/help/meta.html",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("参考文档"),u=(0,t.uE)('<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>默认用极速核(Chrome)：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>renderer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>webkit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> \n默认用ie兼容内核（IE6/7）：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>renderer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ie-comp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> \n默认用ie标准内核（IE9/IE10/IE11/取决于用户的IE）：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>renderer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ie-stand<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>国内双核浏览器默认内核模式如下：</p><ol><li>搜狗高速浏览器、QQ浏览器：IE内核（兼容模式）</li><li>360极速浏览器、遨游浏览器：Webkit内核（极速模式）</li></ol><ul><li><strong>禁止浏览器从本地计算机的缓存中访问页面内容</strong>：这样设定，访问者将无法脱机浏览。</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Pragma<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-cache<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>Windows 8</strong></li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msapplication-TileColor<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#000<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!-- Windows 8 磁贴颜色 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msapplication-TileImage<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon.png<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!-- Windows 8 磁贴图标 --&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><strong>站点适配</strong>：主要用于PC-手机页的对应关系。</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mobile-agent<span class="token punctuation">&quot;</span></span><span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>format=[wml|xhtml|html5]; url=url<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!--\n[wml|xhtml|html5]根据手机页的协议语言，选择其中一种；\nurl=&quot;url&quot; 后者代表当前PC页所对应的手机页URL，两者必须是一一对应关系。\n --&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><strong>转码申明</strong>：用百度打开网页可能会对其进行转码（比如贴广告），避免转码可添加如下meta。</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Cache-Control<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-siteapp<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="seo优化" tabindex="-1"><a class="header-anchor" href="#seo优化" aria-hidden="true">#</a> SEO优化</h3>',12),i={href:"http://msdn.microsoft.com/zh-cn/library/ff724016",target:"_blank",rel:"noopener noreferrer"},r=(0,t.Uk)("参考文档"),k=(0,t.uE)('<ul><li><strong>页面关键词</strong>，每个网页应具有描述该网页内容的一组唯一的关键字。 使用人们可能会搜索，并准确描述网页上所提供信息的描述性和代表性关键字及短语。标记内容太短，则搜索引擎可能不会认为这些内容相关。另外标记不应超过 874 个字符。</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>keywords<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>your tags<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>页面描述</strong>，每个网页都应有一个不超过 150 个字符且能准确反映网页内容的描述标签。</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>description<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>150 words<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>搜索引擎索引方式</strong>，robotterms是一组使用逗号(,)分割的值，通常有如下几种取值：none，noindex，nofollow，all，index和follow。确保正确使用nofollow和noindex属性值。</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>robots<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index,follow<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token comment">&lt;!--\n    all：文件将被检索，且页面上的链接可以被查询；\n    none：文件将不被检索，且页面上的链接不可以被查询；\n    index：文件将被检索；\n    follow：页面上的链接可以被查询；\n    noindex：文件将不被检索；\n    nofollow：页面上的链接不可以被查询。\n --&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li><strong>页面重定向和刷新</strong>：content内的数字代表时间（秒），既多少时间后刷新。如果加url,则会重定向到指定网页（搜索引擎能够自动检测，也很容易被引擎视作误导而受到惩罚）。</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>refresh<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0;url=<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>其他</strong></li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>author<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>author name<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!-- 定义网页作者 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>google<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index,follow<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>googlebot<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index,follow<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>verify<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index,follow<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="移动设备" tabindex="-1"><a class="header-anchor" href="#移动设备" aria-hidden="true">#</a> 移动设备</h3><ul><li><strong>viewport</strong>：能优化移动浏览器的显示。如果不是响应式网站，不要使用initial-scale或者禁用缩放。</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width,initial-scale=1.0,minimun-scale=1.0,maximum-scale=1.0,user-scalable=no<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n<span class="token comment">&lt;!--这是常用的移动meta设置--&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol><li>width：宽度（数值 / device-width）（范围从200 到10,000，默认为980 像素）</li><li>height：高度（数值 / device-height）（范围从223 到10,000）</li><li>initial-scale：初始的缩放比例 （范围从&gt;0 到10）</li><li>minimum-scale：允许用户缩放到的最小比例</li><li>maximum-scale：允许用户缩放到的最大比例</li><li>user-scalable：用户是否可以手动缩 (no,yes)</li></ol><p><strong>注意</strong>，很多人使用initial-scale=1到非响应式网站上，这会让网站以100%宽度渲染，用户需要手动移动页面或者缩放。如果和initial-scale=1同时使用user-scalable=no或maximum-scale=1，则用户将不能放大/缩小网页来看到全部的内容。</p><ul><li><strong>WebApp全屏模式</strong>：伪装app，离线应用。</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>apple-mobile-web-app-capable<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>yes<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!-- 启用 WebApp 全屏模式 --&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>主题颜色</strong></li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>theme-color<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#11a8cd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200221134927.jpg" alt=""></p><ul><li><strong>隐藏状态栏/设置状态栏颜色</strong>：只有在开启WebApp全屏模式时才生效。content的值为default | black | black-translucent 。</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>apple-mobile-web-app-status-bar-style<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>black-translucent<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>添加到主屏后的标题</strong></li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>apple-mobile-web-app-title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>标题<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>忽略数字自动识别为电话号码</strong></li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>telephone=no<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>format-detection<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>忽略识别邮箱</strong></li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email=no<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>format-detection<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',28),m=(0,t._)("strong",null,"添加智能 App 广告条 Smart App Banner",-1),g=(0,t.Uk)("：告诉浏览器这个网站对应的app，并在页面上显示下载banner(如下图)。"),d={href:"https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/PromotingAppswithAppBanners/PromotingAppswithAppBanners.html",target:"_blank",rel:"noopener noreferrer"},q=(0,t.Uk)("参考文档"),b=(0,t.uE)('<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>apple-itunes-app<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200221134638.png" alt=""></p>',2),h=(0,t._)("strong",null,"其他",-1),v=(0,t.Uk)(),f={href:"http://fex.baidu.com/blog/2014/10/html-head-tags/?qq-pf-to=pcqq.c2c",target:"_blank",rel:"noopener noreferrer"},x=(0,t.Uk)("参考文档"),w=(0,t.uE)('<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HandheldFriendly<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- 微软的老式浏览器 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>MobileOptimized<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>320<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- uc强制竖屏 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen-orientation<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>portrait<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- QQ强制竖屏 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>x5-orientation<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>portrait<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- UC强制全屏 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>full-screen<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>yes<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- QQ强制全屏 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>x5-fullscreen<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- UC应用模式 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>browsermode<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>application<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- QQ应用模式 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>x5-page-mode<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- windows phone 点击无高光 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msapplication-tap-highlight<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="一个常用的移动端页面meta设置" tabindex="-1"><a class="header-anchor" href="#一个常用的移动端页面meta设置" aria-hidden="true">#</a> 一个常用的移动端页面meta设置</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width,initial-scale=1.0,minimun-scale=1.0,maximum-scale=1.0,user-scalable=no<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',3),y={},_=(0,s(3744).Z)(y,[["render",function(a,n){const s=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("ul",null,[(0,t._)("li",null,[e,l,(0,t._)("a",o,[c,(0,t.Wm)(s)])])]),u,(0,t._)("p",null,[(0,t._)("a",i,[r,(0,t.Wm)(s)])]),k,(0,t._)("ul",null,[(0,t._)("li",null,[m,g,(0,t._)("a",d,[q,(0,t.Wm)(s)])])]),b,(0,t._)("ul",null,[(0,t._)("li",null,[h,v,(0,t._)("a",f,[x,(0,t.Wm)(s)])])]),w],64)}]])},3744:(a,n)=>{n.Z=(a,n)=>{const s=a.__vccOpts||a;for(const[a,t]of n)s[a]=t;return s}}}]);