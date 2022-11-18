import{_ as o,r as c,o as r,c as a,a as t,b as e,d as s,e as d}from"./app.441515f3.js";const i={},n=d('<h1 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键" aria-hidden="true">#</a> 快捷键</h1><h3 id="basic-methods" tabindex="-1"><a class="header-anchor" href="#basic-methods" aria-hidden="true">#</a> Basic Methods</h3><table><thead><tr><th style="text-align:left;">Prefix</th><th style="text-align:left;">Method</th></tr></thead><tbody><tr><td style="text-align:left;"><code>imp→</code></td><td style="text-align:left;"><code>import moduleName from &#39;module&#39;</code></td></tr><tr><td style="text-align:left;"><code>imn→</code></td><td style="text-align:left;"><code>import &#39;module&#39;</code></td></tr><tr><td style="text-align:left;"><code>imd→</code></td><td style="text-align:left;"><code>import { destructuredModule } from &#39;module&#39;</code></td></tr><tr><td style="text-align:left;"><code>ime→</code></td><td style="text-align:left;"><code>import * as alias from &#39;module&#39;</code></td></tr><tr><td style="text-align:left;"><code>ima→</code></td><td style="text-align:left;"><code>import { originalName as aliasName} from &#39;module&#39;</code></td></tr><tr><td style="text-align:left;"><code>exp→</code></td><td style="text-align:left;"><code>export default moduleName</code></td></tr><tr><td style="text-align:left;"><code>exd→</code></td><td style="text-align:left;"><code>export { destructuredModule } from &#39;module&#39;</code></td></tr><tr><td style="text-align:left;"><code>exa→</code></td><td style="text-align:left;"><code>export { originalName as aliasName} from &#39;module&#39;</code></td></tr><tr><td style="text-align:left;"><code>enf→</code></td><td style="text-align:left;"><code>export const functionName = (params) =&gt; { }</code></td></tr><tr><td style="text-align:left;"><code>edf→</code></td><td style="text-align:left;"><code>export default (params) =&gt; { }</code></td></tr><tr><td style="text-align:left;"><code>met→</code></td><td style="text-align:left;"><code>methodName = (params) =&gt; { }</code></td></tr><tr><td style="text-align:left;"><code>fre→</code></td><td style="text-align:left;"><code>arrayName.forEach(element =&gt; { }</code></td></tr><tr><td style="text-align:left;"><code>fof→</code></td><td style="text-align:left;"><code>for(let itemName of objectName { }</code></td></tr><tr><td style="text-align:left;"><code>fin→</code></td><td style="text-align:left;"><code>for(let itemName in objectName { }</code></td></tr><tr><td style="text-align:left;"><code>anfn→</code></td><td style="text-align:left;"><code>(params) =&gt; { }</code></td></tr><tr><td style="text-align:left;"><code>nfn→</code></td><td style="text-align:left;"><code>const functionName = (params) =&gt; { }</code></td></tr><tr><td style="text-align:left;"><code>dob→</code></td><td style="text-align:left;"><code>const {propName} = objectToDescruct</code></td></tr><tr><td style="text-align:left;"><code>dar→</code></td><td style="text-align:left;"><code>const [propName] = arrayToDescruct</code></td></tr><tr><td style="text-align:left;"><code>sti→</code></td><td style="text-align:left;"><code>setInterval(() =&gt; { }, intervalTime</code></td></tr><tr><td style="text-align:left;"><code>sto→</code></td><td style="text-align:left;"><code>setTimeout(() =&gt; { }, delayTime</code></td></tr><tr><td style="text-align:left;"><code>prom→</code></td><td style="text-align:left;"><code>return new Promise((resolve, reject) =&gt; { }</code></td></tr><tr><td style="text-align:left;"><code>cmmb→</code></td><td style="text-align:left;"><code>comment block</code></td></tr><tr><td style="text-align:left;"><code>cp→</code></td><td style="text-align:left;"><code>const { } = this.props</code></td></tr><tr><td style="text-align:left;"><code>cs→</code></td><td style="text-align:left;"><code>const { } = this.state</code></td></tr></tbody></table><h3 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h3><table><thead><tr><th style="text-align:left;">Prefix</th><th style="text-align:left;">Method</th></tr></thead><tbody><tr><td style="text-align:left;"><code>imr→</code></td><td style="text-align:left;"><code>import React from &#39;react&#39;</code></td></tr><tr><td style="text-align:left;"><code>imrd→</code></td><td style="text-align:left;"><code>import ReactDOM from &#39;react-dom&#39;</code></td></tr><tr><td style="text-align:left;"><code>imrc→</code></td><td style="text-align:left;"><code>import React, { Component } from &#39;react&#39;</code></td></tr><tr><td style="text-align:left;"><code>imrcp→</code></td><td style="text-align:left;"><code>import React, { Component } from &#39;react&#39; &amp; import PropTypes from &#39;prop-types&#39;</code></td></tr><tr><td style="text-align:left;"><code>imrpc→</code></td><td style="text-align:left;"><code>import React, { PureComponent } from &#39;react&#39;</code></td></tr><tr><td style="text-align:left;"><code>imrpcp→</code></td><td style="text-align:left;"><code>import React, { PureComponent } from &#39;react&#39; &amp; import PropTypes from &#39;prop-types&#39;</code></td></tr><tr><td style="text-align:left;"><code>imrm→</code></td><td style="text-align:left;"><code>import React, { memo } from &#39;react&#39;</code></td></tr><tr><td style="text-align:left;"><code>imrmp→</code></td><td style="text-align:left;"><code>import React, { memo } from &#39;react&#39; &amp; import PropTypes from &#39;prop-types&#39;</code></td></tr><tr><td style="text-align:left;"><code>impt→</code></td><td style="text-align:left;"><code>import PropTypes from &#39;prop-types&#39;</code></td></tr><tr><td style="text-align:left;"><code>imrr→</code></td><td style="text-align:left;"><code>import { BrowserRouter as Router, Route, NavLink} from &#39;react-router-dom&#39;</code></td></tr><tr><td style="text-align:left;"><code>imbr→</code></td><td style="text-align:left;"><code>import { BrowserRouter as Router} from &#39;react-router-dom&#39;</code></td></tr><tr><td style="text-align:left;"><code>imbrc→</code></td><td style="text-align:left;"><code>import { Route, Switch, NavLink, Link } from react-router-dom&#39;</code></td></tr><tr><td style="text-align:left;"><code>imbrr→</code></td><td style="text-align:left;"><code>import { Route } from &#39;react-router-dom&#39;</code></td></tr><tr><td style="text-align:left;"><code>imbrs→</code></td><td style="text-align:left;"><code>import { Switch } from &#39;react-router-dom&#39;</code></td></tr><tr><td style="text-align:left;"><code>imbrl→</code></td><td style="text-align:left;"><code>import { Link } from &#39;react-router-dom&#39;</code></td></tr><tr><td style="text-align:left;"><code>imbrnl→</code></td><td style="text-align:left;"><code>import { NavLink } from &#39;react-router-dom&#39;</code></td></tr><tr><td style="text-align:left;"><code>imrs→</code></td><td style="text-align:left;"><code>import React, { useState } from &#39;react&#39;</code></td></tr><tr><td style="text-align:left;"><code>imrse→</code></td><td style="text-align:left;"><code>import React, { useState, useEffect } from &#39;react&#39;</code></td></tr><tr><td style="text-align:left;"><code>redux→</code></td><td style="text-align:left;"><code>import { connect } from &#39;react-redux&#39;</code></td></tr><tr><td style="text-align:left;"><code>rconst→</code></td><td style="text-align:left;"><code>constructor(props) with this.state</code></td></tr><tr><td style="text-align:left;"><code>rconc→</code></td><td style="text-align:left;"><code>constructor(props, context) with this.state</code></td></tr><tr><td style="text-align:left;"><code>est→</code></td><td style="text-align:left;"><code>this.state = { }</code></td></tr><tr><td style="text-align:left;"><code>cwm→</code></td><td style="text-align:left;"><code>componentWillMount = () =&gt; { }</code> DEPRECATED!!!</td></tr><tr><td style="text-align:left;"><code>cdm→</code></td><td style="text-align:left;"><code>componentDidMount = () =&gt; { }</code></td></tr><tr><td style="text-align:left;"><code>cwr→</code></td><td style="text-align:left;"><code>componentWillReceiveProps = (nextProps) =&gt; { }</code> DEPRECATED!!!</td></tr><tr><td style="text-align:left;"><code>scu→</code></td><td style="text-align:left;"><code>shouldComponentUpdate = (nextProps, nextState) =&gt; { }</code></td></tr><tr><td style="text-align:left;"><code>cwup→</code></td><td style="text-align:left;"><code>componentWillUpdate = (nextProps, nextState) =&gt; { }</code> DEPRECATED!!!</td></tr><tr><td style="text-align:left;"><code>cdup→</code></td><td style="text-align:left;"><code>componentDidUpdate = (prevProps, prevState) =&gt; { }</code></td></tr><tr><td style="text-align:left;"><code>cwun→</code></td><td style="text-align:left;"><code>componentWillUnmount = () =&gt; { }</code></td></tr><tr><td style="text-align:left;"><code>gdsfp→</code></td><td style="text-align:left;"><code>static getDerivedStateFromProps(nextProps, prevState) { }</code></td></tr><tr><td style="text-align:left;"><code>gsbu→</code></td><td style="text-align:left;"><code>getSnapshotBeforeUpdate = (prevProps, prevState) =&gt; { }</code></td></tr><tr><td style="text-align:left;"><code>ren→</code></td><td style="text-align:left;"><code>render() { return( ) }</code></td></tr><tr><td style="text-align:left;"><code>sst→</code></td><td style="text-align:left;"><code>this.setState({ })</code></td></tr><tr><td style="text-align:left;"><code>ssf→</code></td><td style="text-align:left;"><code>this.setState((state, props) =&gt; return { })</code></td></tr><tr><td style="text-align:left;"><code>props→</code></td><td style="text-align:left;"><code>this.props.propName</code></td></tr><tr><td style="text-align:left;"><code>state→</code></td><td style="text-align:left;"><code>this.state.stateName</code></td></tr><tr><td style="text-align:left;"><code>rcontext→</code></td><td style="text-align:left;"><code>const ${1:contextName} = React.createContext()</code></td></tr><tr><td style="text-align:left;"><code>cref→</code></td><td style="text-align:left;"><code>this.${1:refName}Ref = React.createRef()</code></td></tr><tr><td style="text-align:left;"><code>fref→</code></td><td style="text-align:left;"><code>const ref = React.createRef()</code></td></tr><tr><td style="text-align:left;"><code>bnd→</code></td><td style="text-align:left;"><code>this.methodName = this.methodName.bind(this)</code></td></tr></tbody></table><h3 id="react-hooks" tabindex="-1"><a class="header-anchor" href="#react-hooks" aria-hidden="true">#</a> React Hooks</h3>',6),f={href:"https://reactjs.org/docs/hooks-reference.html",target:"_blank",rel:"noopener noreferrer"},y=d('<table><thead><tr><th style="text-align:left;">Prefix</th><th style="text-align:left;">Method</th></tr></thead><tbody><tr><td style="text-align:left;"><code>rch→</code></td><td style="text-align:left;"><code>import { $1 } from &#39;react-native&#39;</code></td></tr></tbody></table><h3 id="react-native" tabindex="-1"><a class="header-anchor" href="#react-native" aria-hidden="true">#</a> React Native</h3><table><thead><tr><th style="text-align:left;">Prefix</th><th style="text-align:left;">Method</th></tr></thead><tbody><tr><td style="text-align:left;"><code>imrn→</code></td><td style="text-align:left;"><code>import { $1 } from &#39;react-native&#39;</code></td></tr><tr><td style="text-align:left;"><code>rnstyle→</code></td><td style="text-align:left;"><code>const styles = StyleSheet.create({})</code></td></tr></tbody></table><h3 id="redux" tabindex="-1"><a class="header-anchor" href="#redux" aria-hidden="true">#</a> Redux</h3><table><thead><tr><th style="text-align:left;">Prefix</th><th style="text-align:left;">Method</th></tr></thead><tbody><tr><td style="text-align:left;"><code>rxaction→</code></td><td style="text-align:left;"><code>redux action template</code></td></tr><tr><td style="text-align:left;"><code>rxconst→</code></td><td style="text-align:left;"><code>export const $1 = &#39;$1&#39;</code></td></tr><tr><td style="text-align:left;"><code>rxreducer→</code></td><td style="text-align:left;"><code>redux reducer template</code></td></tr><tr><td style="text-align:left;"><code>rxselect→</code></td><td style="text-align:left;"><code>redux selector template</code></td></tr><tr><td style="text-align:left;"><code>rxslice→</code></td><td style="text-align:left;"><code>redux slice template</code></td></tr></tbody></table><h3 id="proptypes" tabindex="-1"><a class="header-anchor" href="#proptypes" aria-hidden="true">#</a> PropTypes</h3><table><thead><tr><th style="text-align:left;">Prefix</th><th style="text-align:left;">Method</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pta→</code></td><td style="text-align:left;"><code>PropTypes.array</code></td></tr><tr><td style="text-align:left;"><code>ptar→</code></td><td style="text-align:left;"><code>PropTypes.array.isRequired</code></td></tr><tr><td style="text-align:left;"><code>ptb→</code></td><td style="text-align:left;"><code>PropTypes.bool</code></td></tr><tr><td style="text-align:left;"><code>ptbr→</code></td><td style="text-align:left;"><code>PropTypes.bool.isRequired</code></td></tr><tr><td style="text-align:left;"><code>ptf→</code></td><td style="text-align:left;"><code>PropTypes.func</code></td></tr><tr><td style="text-align:left;"><code>ptfr→</code></td><td style="text-align:left;"><code>PropTypes.func.isRequired</code></td></tr><tr><td style="text-align:left;"><code>ptn→</code></td><td style="text-align:left;"><code>PropTypes.number</code></td></tr><tr><td style="text-align:left;"><code>ptnr→</code></td><td style="text-align:left;"><code>PropTypes.number.isRequired</code></td></tr><tr><td style="text-align:left;"><code>pto→</code></td><td style="text-align:left;"><code>PropTypes.object</code></td></tr><tr><td style="text-align:left;"><code>ptor→</code></td><td style="text-align:left;"><code>PropTypes.object.isRequired</code></td></tr><tr><td style="text-align:left;"><code>pts→</code></td><td style="text-align:left;"><code>PropTypes.string</code></td></tr><tr><td style="text-align:left;"><code>ptsr→</code></td><td style="text-align:left;"><code>PropTypes.string.isRequired</code></td></tr><tr><td style="text-align:left;"><code>ptnd→</code></td><td style="text-align:left;"><code>PropTypes.node</code></td></tr><tr><td style="text-align:left;"><code>ptndr→</code></td><td style="text-align:left;"><code>PropTypes.node.isRequired</code></td></tr><tr><td style="text-align:left;"><code>ptel→</code></td><td style="text-align:left;"><code>PropTypes.element</code></td></tr><tr><td style="text-align:left;"><code>ptelr→</code></td><td style="text-align:left;"><code>PropTypes.element.isRequired</code></td></tr><tr><td style="text-align:left;"><code>pti→</code></td><td style="text-align:left;"><code>PropTypes.instanceOf(name)</code></td></tr><tr><td style="text-align:left;"><code>ptir→</code></td><td style="text-align:left;"><code>PropTypes.instanceOf(name).isRequired</code></td></tr><tr><td style="text-align:left;"><code>pte→</code></td><td style="text-align:left;"><code>PropTypes.oneOf([name])</code></td></tr><tr><td style="text-align:left;"><code>pter→</code></td><td style="text-align:left;"><code>PropTypes.oneOf([name]).isRequired</code></td></tr><tr><td style="text-align:left;"><code>ptet→</code></td><td style="text-align:left;"><code>PropTypes.oneOfType([name])</code></td></tr><tr><td style="text-align:left;"><code>ptetr→</code></td><td style="text-align:left;"><code>PropTypes.oneOfType([name]).isRequired</code></td></tr><tr><td style="text-align:left;"><code>ptao→</code></td><td style="text-align:left;"><code>PropTypes.arrayOf(name)</code></td></tr><tr><td style="text-align:left;"><code>ptaor→</code></td><td style="text-align:left;"><code>PropTypes.arrayOf(name).isRequired</code></td></tr><tr><td style="text-align:left;"><code>ptoo→</code></td><td style="text-align:left;"><code>PropTypes.objectOf(name)</code></td></tr><tr><td style="text-align:left;"><code>ptoor→</code></td><td style="text-align:left;"><code>PropTypes.objectOf(name).isRequired</code></td></tr><tr><td style="text-align:left;"><code>ptsh→</code></td><td style="text-align:left;"><code>PropTypes.shape({ })</code></td></tr><tr><td style="text-align:left;"><code>ptshr→</code></td><td style="text-align:left;"><code>PropTypes.shape({ }).isRequired</code></td></tr><tr><td style="text-align:left;"><code>ptany→</code></td><td style="text-align:left;"><code>PropTypes.any</code></td></tr><tr><td style="text-align:left;"><code>ptypes→</code></td><td style="text-align:left;"><code>static propTypes = {}</code></td></tr></tbody></table><h3 id="graphql" tabindex="-1"><a class="header-anchor" href="#graphql" aria-hidden="true">#</a> GraphQL</h3><table><thead><tr><th style="text-align:left;">Prefix</th><th style="text-align:left;">Method</th></tr></thead><tbody><tr><td style="text-align:left;"><code>graphql→</code></td><td style="text-align:left;"><code>import { compose, graphql } from react-apollo&#39;</code></td></tr><tr><td style="text-align:left;"><code>expgql-&gt;</code></td><td style="text-align:left;"><code>export default compose(graphql($1, { name: $2 }))($3)</code></td></tr></tbody></table><h3 id="console" tabindex="-1"><a class="header-anchor" href="#console" aria-hidden="true">#</a> Console</h3><table><thead><tr><th style="text-align:left;">Prefix</th><th style="text-align:left;">Method</th></tr></thead><tbody><tr><td style="text-align:left;"><code>clg→</code></td><td style="text-align:left;"><code>console.log(object)</code></td></tr><tr><td style="text-align:left;"><code>clo→</code></td><td style="text-align:left;"><code>console.log(</code>object<code>, object)</code></td></tr><tr><td style="text-align:left;"><code>ctm→</code></td><td style="text-align:left;"><code>console.time(</code>timeId<code>)</code></td></tr><tr><td style="text-align:left;"><code>cte→</code></td><td style="text-align:left;"><code>console.timeEnd(</code>timeId<code>)</code></td></tr><tr><td style="text-align:left;"><code>cas→</code></td><td style="text-align:left;"><code>console.assert(expression,object)</code></td></tr><tr><td style="text-align:left;"><code>ccl→</code></td><td style="text-align:left;"><code>console.clear()</code></td></tr><tr><td style="text-align:left;"><code>cco→</code></td><td style="text-align:left;"><code>console.count(label)</code></td></tr><tr><td style="text-align:left;"><code>cdi→</code></td><td style="text-align:left;"><code>console.dir</code></td></tr><tr><td style="text-align:left;"><code>cer→</code></td><td style="text-align:left;"><code>console.error(object)</code></td></tr><tr><td style="text-align:left;"><code>cgr→</code></td><td style="text-align:left;"><code>console.group(label)</code></td></tr><tr><td style="text-align:left;"><code>cge→</code></td><td style="text-align:left;"><code>console.groupEnd()</code></td></tr><tr><td style="text-align:left;"><code>ctr→</code></td><td style="text-align:left;"><code>console.trace(object)</code></td></tr><tr><td style="text-align:left;"><code>cwa→</code></td><td style="text-align:left;"><code>console.warn</code></td></tr><tr><td style="text-align:left;"><code>cin→</code></td><td style="text-align:left;"><code>console.info</code></td></tr></tbody></table>',11);function x(g,p){const l=c("ExternalLinkIcon");return r(),a("div",null,[n,t("ul",null,[t("li",null,[e("All hooks from "),t("a",f,[e("official docs"),s(l)]),e(" are added with hook name prefix.")])]),y])}const h=o(i,[["render",x],["__file","React插件-快捷键.html.vue"]]);export{h as default};
