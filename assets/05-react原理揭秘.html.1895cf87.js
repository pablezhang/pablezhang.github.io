import{_ as n,o as s,c as a,e}from"./app.441515f3.js";const t="/assets/组件更新.3912dbb8.png",p={},l=e(`<h1 id="setstate" tabindex="-1"><a class="header-anchor" href="#setstate" aria-hidden="true">#</a> setState</h1><h2 id="更新数据" tabindex="-1"><a class="header-anchor" href="#更新数据" aria-hidden="true">#</a> 更新数据</h2><ul><li>setState() 是异步更新数据的</li><li>注意：使用该语法时，后面的 setState() 不要依赖于前面的 setState()</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span> 当你调用 setState 的时候，React<span class="token punctuation">.</span>js 并不会马上修改 state （为什么）
<span class="token number">2.</span> 而是把这个对象放到一个更新队列里面
<span class="token number">3.</span> 稍后才会从队列当中把新的状态提取出来合并到 state 当中，然后再触发组件更新。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>可以多次调用 setState() ，只会触发一次重新渲染</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用 React.js 的时候，并不需要担心多次进行 <code>setState</code> 会带来性能问题。</p><p>总结：</p><ol><li>react中setState是异步更新。</li><li>连续调用多个 <code>setState()</code> ， 会合并成一个调用。</li><li>连续调用多个setStatte()，最终render只执行一次。因此不必担心多次setState带来性能问题</li></ol><p>**设计目的：**减少render渲染次数，提高更新DOM效率。</p><p>**实现原理：**要更新的数据，放到一个更新队列里面，合并执行。</p><p><strong>合并</strong>：**后面覆盖前面：**最后一个<code>setState()</code> 会覆盖前面所有的<code>setState()</code></p><p>练习代码静态结构</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 
  学习目标：setState是异步更新
*/

import React from &#39;react&#39;;

export default class App extends React.Component {
  state = {
    count: 0,
  };

  handleClick = () =&gt; {  
    this.setState({
      count: this.state.count + 1,
    });

  };

  render() { 
    return (
      &lt;div&gt;
        &lt;h1&gt;数量： {this.state.count}&lt;/h1&gt;
        &lt;button onClick={this.handleClick}&gt;点我修改数量&lt;/button&gt;
      &lt;/div&gt;
    );
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="推荐语法" tabindex="-1"><a class="header-anchor" href="#推荐语法" aria-hidden="true">#</a> 推荐语法</h2><ul><li><p>推荐：使用 <code>setState((preState) =&gt; {})</code> 语法</p></li><li><p>参数preState: React.js 会把上一个 <code>setState</code> 的结果传入这个函数</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">preState</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
    	<span class="token literal-property property">count</span><span class="token operator">:</span> preState<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">preState</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
    	<span class="token literal-property property">count</span><span class="token operator">:</span> preState<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li><strong>这种语法依旧是异步的</strong>。</li><li>合并：**后面不会覆盖前面：**形参代表上一次调用的state结果。适用于需要调用多次setState</li><li>render仍然只会执行一次。</li></ol><h2 id="第二个参数" tabindex="-1"><a class="header-anchor" href="#第二个参数" aria-hidden="true">#</a> 第二个参数</h2><ul><li>场景：在状态更新（页面完成重新渲染）后立即执行某个操作</li><li>语法：<code>setState(updater[, callback])</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>
	<span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;这个回调函数会在状态更新后立即执行&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>
	<span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        
		document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;更新state后的标题：&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count
	<span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li>第二个参数是回调函数，会在状态更新后立即执行。</li><li>回调函数中调用setState，render会多次执行。</li></ol><h1 id="组件更新机制" tabindex="-1"><a class="header-anchor" href="#组件更新机制" aria-hidden="true">#</a> 组件更新机制</h1><ul><li>setState() 的两个作用： 1. 修改 state 2. 更新组件（UI）</li><li>过程：父组件重新渲染时，也会重新渲染子组件。但只会渲染当前组件子树（当前组件及其所有子组件）</li></ul><p><img src="`+t+`" alt=""></p><p>总结：</p><pre><code>1. 组件更新，默认会导致所有后代组件更新。
2. 组件更新，默认不会影响兄弟组件。
</code></pre><p>静态结构-复制</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React from &#39;react&#39;;
export default class App extends React.Component {
  state = {
    count: 0,
  };

  handleClick = () =&gt; {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      &lt;div&gt;
        &lt;h1&gt;数量： {this.state.count}&lt;/h1&gt;
        &lt;button onClick={this.handleClick}&gt;点我修改数量&lt;/button&gt;
        &lt;Footer&gt;&lt;/Footer&gt;
      &lt;/div&gt;
    );
  }
}

class Footer extends React.Component {
  render() {
    return &lt;div&gt;我是Footer&lt;/div&gt;;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="组件性能优化" tabindex="-1"><a class="header-anchor" href="#组件性能优化" aria-hidden="true">#</a> 组件性能优化</h1><ol><li>功能第一</li><li>性能优化</li></ol><h2 id="减轻state-负责驱动视图" tabindex="-1"><a class="header-anchor" href="#减轻state-负责驱动视图" aria-hidden="true">#</a> 减轻state - 负责驱动视图</h2><ul><li>减轻 state：只存储跟组件渲染相关的数据（比如：count / 列表数据 / loading 等）</li><li>注意：不用做渲染的数据不要放在 state 中，比如定时器 id等</li><li>对于这种需要在多个方法中用到的数据，应该直接放在 this 中 <ul><li>this.xxx = &#39;bbb&#39;</li><li>this.xxx</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// timerId存储到this中，而不是state中</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>timerId <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timerId<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> … <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li>跟渲染无关的数据，不要放到state中。</li><li>跟渲染无关的数据，直接放到this上。</li></ol><p>基本类型 - 栈</p><p>引用类型 - 堆</p><h2 id="避免不必要的重新渲染" tabindex="-1"><a class="header-anchor" href="#避免不必要的重新渲染" aria-hidden="true">#</a> 避免不必要的重新渲染</h2><ul><li>组件更新机制：父组件更新会引起子组件也被更新，这种思路很清晰 <ul><li>问题：子组件没有任何变化时也会重新渲染 （接收到的props没有发生任何的改变）</li></ul></li><li>如何避免不必要的重新渲染呢？ <ul><li><p>解决方式：使用钩子函数 <code>shouldComponentUpdate(nextProps, nextState)</code></p></li><li><p>作用：通过返回值决定该组件是否重新渲染，返回 true 表示重新渲染，false 表示不重新渲染</p></li><li><p>触发时机：更新阶段的钩子函数，组件重新渲染前执行 （shouldComponentUpdate =&gt; render）</p></li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 根据条件，决定是否重新渲染组件</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>…<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例：随机数</p><h2 id="纯组件" tabindex="-1"><a class="header-anchor" href="#纯组件" aria-hidden="true">#</a> 纯组件</h2><ul><li>纯组件：<code>React.PureComponent</code> 与 <code>React.Component </code>功能相似</li><li>区别：PureComponent 内部自动实现了 shouldComponentUpdate 钩子，不需要手动比较</li><li>原理：纯组件内部通过分别 对比 前后两次 props 和 state 的值，来决定是否重新渲染组件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
        	<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>纯组件<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Hello2</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
        	<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>msg<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>只有在性能优化的时候可能会用到纯组件，不要所有的组件都使用纯组件，因为纯组件需要消耗性能进行对比</strong></p><h2 id="纯组件比较-值类型" tabindex="-1"><a class="header-anchor" href="#纯组件比较-值类型" aria-hidden="true">#</a> 纯组件比较-值类型</h2><ul><li><p>说明：纯组件内部的对比是 shallow compare（浅层对比）</p></li><li><p>对于值类型来说：比较两个值是否相同（直接赋值即可，没有坑）</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">let</span> newNumber <span class="token operator">=</span> number
newNumber <span class="token operator">=</span> <span class="token number">2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>number <span class="token operator">===</span> newNumber<span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
<span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">number</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// PureComponent内部对比：</span>
最新的state<span class="token punctuation">.</span>number <span class="token operator">===</span> 上一次的state<span class="token punctuation">.</span>number <span class="token comment">// false，重新渲染组件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="纯组件比较-引用类型" tabindex="-1"><a class="header-anchor" href="#纯组件比较-引用类型" aria-hidden="true">#</a> 纯组件比较-引用类型</h2><ul><li>说明：纯组件内部的对比是 shallow compare（浅层对比）</li><li>对于引用类型来说：只比较对象的引用（地址）是否相同</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> newObj <span class="token operator">=</span> obj
newObj<span class="token punctuation">.</span>number <span class="token operator">=</span> <span class="token number">2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newObj <span class="token operator">===</span> obj<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token comment">// 错误做法</span>
state<span class="token punctuation">.</span>obj<span class="token punctuation">.</span>number <span class="token operator">=</span> <span class="token number">2</span>
<span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> state<span class="token punctuation">.</span>obj <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// PureComponent内部比较：</span>
最新的state<span class="token punctuation">.</span>obj <span class="token operator">===</span> 上一次的state<span class="token punctuation">.</span>obj <span class="token comment">// true，不重新渲染组件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>纯组件的最佳实践：</p><p>注意：state 或 props 中属性值为引用类型时，应该创建新数据，不要直接修改原数据！</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 正确！创建新数据</span>
<span class="token keyword">const</span> newObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>state<span class="token punctuation">.</span>obj<span class="token punctuation">,</span> <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span>
<span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> newObj <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 正确！创建新数据</span>
<span class="token comment">// 不要用数组的push / unshift 等直接修改当前数组的的方法</span>
<span class="token comment">// 而应该用 concat 或 slice 等这些返回新数组的方法</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>list<span class="token punctuation">,</span> <span class="token punctuation">{</span>新数据<span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,60),o=[l];function i(c,u){return s(),a("div",null,o)}const d=n(p,[["render",i],["__file","05-react原理揭秘.html.vue"]]);export{d as default};
