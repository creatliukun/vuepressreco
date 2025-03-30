import{_ as s,c as i,e as l,o as n}from"./app-C-L3CEF_.js";const e={};function t(c,a){return n(),i("div",null,a[0]||(a[0]=[l(`<h1 id="关于前端js注意知识点" tabindex="-1"><a class="header-anchor" href="#关于前端js注意知识点"><span>关于前端js注意知识点：</span></a></h1><h2 id="js脚本运行机制" tabindex="-1"><a class="header-anchor" href="#js脚本运行机制"><span>js脚本运行机制</span></a></h2><p>提示：</p><ul><li>1.把脚本置于 &#39;body&#39; 元素的底部，可改善显示速度，因为脚本编译会拖慢显示；因为浏览器在解析代码的时候，先同步解析html，css，如果遇到script，会暂停解析，直到script加载完成，再继续解析。</li><li><ol start="2"><li>外部脚本不能包含 <code>&lt;script&gt;</code> 标签</li></ol></li><li><ol start="3"><li>外部 JavaScript 的优势:</li></ol><ul><li>分离了 HTML 和代码</li><li>使 HTML 和 JavaScript 更易于阅读和维护</li><li>已缓存的 JavaScript 文件可加速页面加载</li></ul><ul><li>如需向一张页面添加多个脚本文件 - 请使用多个 script 标签：</li><li>可通过完整的 URL 或相对于当前网页的路径引用外部脚本</li></ul></li><li><ol start="4"><li>外部引用</li></ol></li><li><ol start="5"><li>更改 HTML 元素的 innerHTML 属性是在 HTML 中显示数据的常用方法</li></ol></li></ul><p>注意：</p><ul><li>在 HTML 文档完全加载后使用 document.write() 将删除所有已有的 HTML；</li><li>document.write() 方法仅用于测试</li></ul><p>知识点：</p><ul><li>JavaScript 语句由以下构成： <ul><li>值、运算符、表达式、关键词和注释。</li></ul></li><li>分号分隔 JavaScript 语句。 （以分号结束语句不是必需的，但是建议写分号分割语句）</li><li>JavaScript 会忽略多个空格。可以向脚本添加空格，以增强可读性 JavaScript 关键词：</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">关键词	描述</span>
<span class="line"><span class="token builtin class-name">break</span>	终止 switch 或循环。</span>
<span class="line"><span class="token builtin class-name">continue</span>	跳出循环并在顶端开始。</span>
<span class="line">debugger	停止执行 JavaScript，并调用调试函数（如果可用）。</span>
<span class="line"><span class="token keyword">do</span> <span class="token punctuation">..</span>. <span class="token keyword">while</span>	执行语句块，并在条件为真时重复代码块。</span>
<span class="line"><span class="token keyword">for</span>	标记需被执行的语句块，只要条件为真。</span>
<span class="line"><span class="token keyword">function</span>	声明函数。</span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">..</span>. <span class="token keyword">else</span>	标记需被执行的语句块，根据某个条件。</span>
<span class="line"><span class="token builtin class-name">return</span>	退出函数。</span>
<span class="line">switch	标记需被执行的语句块，根据不同的情况。</span>
<span class="line">try <span class="token punctuation">..</span>. catch	对语句块实现错误处理。</span>
<span class="line">var	声明变量。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>JavaScript 关键词指的是保留的单词。保留词无法用作变量名 JavaScript 运算符:</li><li>JavaScript 使用算数运算符（+ - * /）来计算值：</li><li>JavaScript 使用赋值运算符（=）向变量赋值： JavaScript 表达式:</li><li>表达式是值、变量和运算符的组合，计算结果是值。 JavaScript 标识符:</li><li>在 JavaScript 中，首字符必须是字母、下划线（-）或美元符号（$）;</li><li>数值不可以作为首字符。这样，JavaScript 就能轻松区分标识符和数值 所有 JavaScript 标识符对大小写敏感: 变量 lastName 和 lastname，是两个不同的变量 JavaScript 与驼峰式大小写:</li><li>JavaScript 中不能使用连字符。它是为减法预留的。倾向于使用以小写字母开头的驼峰大小写</li></ul>`,10)]))}const r=s(e,[["render",t]]),d=JSON.parse('{"path":"/blogs/javascript/03310102.html","title":"js优化","lang":"en-US","frontmatter":{"title":"js优化","date":"2025-03-29T00:00:00.000Z","tags":["js"],"categories":["FrontThreeMusketeers"]},"headers":[{"level":2,"title":"js脚本运行机制","slug":"js脚本运行机制","link":"#js脚本运行机制","children":[]}],"git":{"createdTime":1743354643000,"updatedTime":1743354643000,"contributors":[{"name":"creatliukun","email":"952476356@qq.com","commits":1}]},"filePathRelative":"blogs/javascript/03310102.md"}');export{r as comp,d as data};
