_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/EDR":function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("QeBL")}])},"4G9x":function(t,e,r){t.exports={navigation__wrapper:"navigation_navigation__wrapper__2HW_o",navigation__current:"navigation_navigation__current__3ILui",navigation__list:"navigation_navigation__list__KzaDR"}},"7W2i":function(t,e,r){var n=r("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},BAeP:function(t,e,r){t.exports={landing_hero:"landing_landing_hero__2knM2"}},Bi3C:function(t,e,r){var n;"undefined"!==typeof self&&self,n=function(t){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=r(1),a=(n=o)&&n.__esModule?n:{default:n};e.default=a.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=r(2),l=(n=i)&&n.__esModule?n:{default:n},s=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.smoothScroll=r.smoothScroll.bind(r),r}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),a(e,[{key:"componentDidMount",value:function(){r(3).polyfill()}},{key:"smoothScroll",value:function(t){var e=this;t.preventDefault();var r=function(){return 0};"undefined"!==typeof this.props.offset&&(r=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(e.props.offset)});var n=t.currentTarget.getAttribute("href").slice(1),o=document.getElementById(n).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:o-r(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(t)}},{key:"render",value:function(){var t=this.props,e=(t.offset,function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}(t,["offset"]));return l.default.createElement("a",o({},e,{onClick:this.smoothScroll}))}}]),e}(i.Component);e.default=s},function(e,r){e.exports=t},function(t,e,r){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style&&!0!==t.__forceSmoothScrollPolyfill__)){var r,n=t.HTMLElement||t.Element,o=468,a={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:n.prototype.scroll||s,scrollIntoView:n.prototype.scrollIntoView},i=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,l=(r=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(r)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?m.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):a.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?a.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):m.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var t=arguments[0].left,e=arguments[0].top;m.call(this,this,"undefined"===typeof t?this.scrollLeft:~~t,"undefined"===typeof e?this.scrollTop:~~e)}else{if("number"===typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!==typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var r=d(this),n=r.getBoundingClientRect(),o=this.getBoundingClientRect();r!==e.body?(m.call(this,r,r.scrollLeft+o.left-n.left,r.scrollTop+o.top-n.top),"fixed"!==t.getComputedStyle(r).position&&t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):t.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else a.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(t,e){this.scrollLeft=t,this.scrollTop=e}function c(t){if(null===t||"object"!==typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"===typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function u(t,e){return"Y"===e?t.clientHeight+l<t.scrollHeight:"X"===e?t.clientWidth+l<t.scrollWidth:void 0}function f(e,r){var n=t.getComputedStyle(e,null)["overflow"+r];return"auto"===n||"scroll"===n}function p(t){var e=u(t,"Y")&&f(t,"Y"),r=u(t,"X")&&f(t,"X");return e||r}function d(t){var r;do{r=(t=t.parentNode)===e.body}while(!1===r&&!1===p(t));return r=null,t}function _(e){var r,n,a,l,s=(i()-e.startTime)/o;l=s=s>1?1:s,r=.5*(1-Math.cos(Math.PI*l)),n=e.startX+(e.x-e.startX)*r,a=e.startY+(e.y-e.startY)*r,e.method.call(e.scrollable,n,a),n===e.x&&a===e.y||t.requestAnimationFrame(_.bind(t,e))}function m(r,n,o){var l,c,u,f,p=i();r===e.body?(l=t,c=t.scrollX||t.pageXOffset,u=t.scrollY||t.pageYOffset,f=a.scroll):(l=r,c=r.scrollLeft,u=r.scrollTop,f=s),_({scrollable:l,method:f,startTime:p,startX:c,startY:u,x:n,y:o})}}}}()}])},t.exports=n(r("q1tI"))},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Fxm3:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(t){var e,r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var o=+new Date;!!e&&o<e+n?(clearTimeout(r),r=setTimeout((function(){e=o,t()}),n)):(e=o,t())}};e.default=n},G2BE:function(t,e){t.exports={attributes:{date:"2019-03-17T19:31:20.591Z",title:{A:"love.",B:"inpire.",C:"create.",D:"indulge.",sub:'"The most <b>beautiful</b> thing about life  is that no matter <p> what happened to you in the past, you can <i>always</i> begin again." <i>Dhiman</i> </p>'},about:{description:"<b>Landy Simpson is a graduate from the University of Toronto with a Bachelor Honours Degree in Computer Science</b>. <br> <br> Her experience in front-end development using frameworks such as <b>React and Vue</b>, along with her eye for design allow her to create riveting web applications. However, her multiple work experiences have primed her to learn quickly adapt to new programming languages, and frameworks. She's a natural problem solver and enjoys taking on new exciting challenges. <br> <br> Aside from dev work, Landy writes inspiring and thought provoking content around her experiences as a <b> first-generation Afro-Carribean-Canadian woman around topics such as education,relationships, and self-love. </b> <br> <br> Her challenges growing up as a first generation Canadian, a person of colour, and a woman in a male dominated industry, Landy aspires to: <br> <ul>  <li> create safe spaces to engage in vulnerable conversations around womanhood, and blackness </li> <li> provide lifelong tools to youth to better prepare them for future endeavours.</li><li> engage in conversations around improving diversity and inclusivity in workspaces</li> </ul> "}},html:""}},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},Nsbk:function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},QeBL:function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),o=r.n(n),a=r("wx14"),i=r("zLVn"),l=r("TSYQ"),s=r.n(l),c=o.a.createContext({});c.Consumer,c.Provider;function u(t,e){var r=Object(n.useContext)(c);return t||r[e]||e}var f=o.a.forwardRef((function(t,e){var r,n=t.as,l=void 0===n?"div":n,c=t.className,f=t.fluid,p=t.bsPrefix,d=Object(i.a)(t,["as","className","fluid","bsPrefix"]),_=((r={})[p=u(p,"jumbotron")]=!0,r[p+"-fluid"]=f,r);return o.a.createElement(l,Object(a.a)({ref:e},d,{className:s()(c,_)}))}));f.defaultProps={fluid:!1},f.displayName="Jumbotron";var p=f,d=r("Bi3C"),_=r.n(d),m=r("YIkO"),h=r.n(m),v=r("4G9x"),y=r.n(v),b=o.a.createElement,g=function(t){var e=t.navItems;return b("div",{className:y.a.navigation__wrapper},b(h.a,{className:y.a.navigation__list,currentClassName:"navigation__current",items:e.map((function(t){return t.label.toLowerCase()}))},e.map((function(t,e){return b("li",{key:t.label+"_"+e},b(_.a,{href:"#".concat(t.label.toLowerCase()),onClick:null},t.label))}))))},w=r("hwdJ"),x=r.n(w),O=o.a.createElement,S=[{label:"Home",uri:""},{label:"About",uri:""},{label:"Contact",uri:""}],E=function(t){var e=t.id,r=t.title,n=t.classes,o=t.children;return O("section",{id:e,className:x.a.section__wrapper},O("div",{className:s()(x.a.section__content,n)},o,r&&O("h2",{className:x.a.section__title},r)),O(g,{navItems:S}))},P=r("dmJ+"),k=r.n(P),N=r("G2BE"),j=r.n(N),T=o.a.createElement,C=function(){var t=j.a.attributes.title;return T(E,{id:"home",classes:k.a.title__wrapper},T("div",{className:k.a.title__wrapper_row},T("h1",{id:k.a.love}," ",t.A," "),T("h1",{id:k.a.inspire}," ",t.B," ")),T("div",{className:k.a.title__wrapper_row},T("h1",{id:k.a.create}," ",t.C," "),T("h1",{id:k.a.indulge}," ",t.D," ")),T("div",{className:k.a.title__wrapper_statement},T("p",{dangerouslySetInnerHTML:{__html:t.sub}})))},I=r("qeQO"),B=r.n(I),L=r("rEdE"),A=r.n(L),R=o.a.createElement,V=function(){j.a.html;var t=j.a.attributes.about;return R(E,{id:"about",title:"About"},R("div",{className:B.a.about__wrapper},R("img",{className:B.a.about__img,src:A.a}),R("div",{className:B.a.about__body,dangerouslySetInnerHTML:{__html:t.description}})))},Y=/-(.)/g;var H=function(t){return t[0].toUpperCase()+(e=t,e.replace(Y,(function(t,e){return e.toUpperCase()}))).slice(1);var e};function M(t,e){var r=void 0===e?{}:e,n=r.displayName,l=void 0===n?H(t):n,c=r.Component,f=r.defaultProps,p=o.a.forwardRef((function(e,r){var n=e.className,l=e.bsPrefix,f=e.as,p=void 0===f?c||"div":f,d=Object(i.a)(e,["className","bsPrefix","as"]),_=u(l,t);return o.a.createElement(p,Object(a.a)({ref:r,className:s()(n,_)},d))}));return p.defaultProps=f,p.displayName=l,p}var D=function(t){return o.a.forwardRef((function(e,r){return o.a.createElement("div",Object(a.a)({},e,{ref:r,className:s()(e.className,t)}))}))},q=o.a.createContext(null);q.displayName="CardContext";var X=q,J=o.a.forwardRef((function(t,e){var r=t.bsPrefix,n=t.className,l=t.variant,c=t.as,f=void 0===c?"img":c,p=Object(i.a)(t,["bsPrefix","className","variant","as"]),d=u(r,"card-img");return o.a.createElement(f,Object(a.a)({ref:e,className:s()(l?d+"-"+l:d,n)},p))}));J.displayName="CardImg",J.defaultProps={variant:null};var Q=J,W=D("h5"),F=D("h6"),U=M("card-body"),Z=M("card-title",{Component:W}),G=M("card-subtitle",{Component:F}),z=M("card-link",{Component:"a"}),K=M("card-text",{Component:"p"}),$=M("card-header"),tt=M("card-footer"),et=M("card-img-overlay"),rt=o.a.forwardRef((function(t,e){var r=t.bsPrefix,l=t.className,c=t.bg,f=t.text,p=t.border,d=t.body,_=t.children,m=t.as,h=void 0===m?"div":m,v=Object(i.a)(t,["bsPrefix","className","bg","text","border","body","children","as"]),y=u(r,"card"),b=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return o.a.createElement(X.Provider,{value:b},o.a.createElement(h,Object(a.a)({ref:e},v,{className:s()(l,y,c&&"bg-"+c,f&&"text-"+f,p&&"border-"+p)}),d?o.a.createElement(U,null,_):_))}));rt.displayName="Card",rt.defaultProps={body:!1},rt.Img=Q,rt.Title=Z,rt.Subtitle=G,rt.Body=U,rt.Link=z,rt.Text=K,rt.Header=$,rt.Footer=tt,rt.ImgOverlay=et;var nt=rt,ot=o.a.createElement,at=function(t){var e=t.classes,r=t.href,n=t.children;return ot("a",{className:e,href:r},n)},it=r("ySuL"),lt=r.n(it),st=o.a.createElement,ct=function(t){var e=t.label,r=t.uri,n=t.classes;return st(nt,{className:s()(lt.a.contact_card,n)},st(at,{href:r,classes:lt.a.contact_card__gradient},st("h3",{className:lt.a.contact_card__title}," ",e," ")))},ut=function(){return st(E,{id:"contact",title:"Contact"},st("div",{className:lt.a.contact_card__wrapper},st(ct,{label:"Instagram",classes:lt.a.insta,uri:"http://www.instagram.com/simpslandyy"}),st(ct,{label:"Medium",classes:lt.a.medium,uri:"https://medium.com/@simp.lyy"}),st(ct,{label:"LinkedIn",classes:lt.a.linkedin,uri:"https://www.linkedin.com/in/simpsly/"}),st(ct,{label:"Twitter",classes:lt.a.twitter,uri:"https://twitter.com/simp_lyy"})))},ft=r("BAeP"),pt=r.n(ft),dt=o.a.createElement,_t=function(){return dt(p,{fluid:!0,className:pt.a.landing_hero},dt(C,null),dt(V,null),dt(ut,null))},mt=o.a.createElement;e.default=function(){return mt(_t,null)}},Qetd:function(t,e,r){"use strict";var n=Object.assign.bind(Object);t.exports=n,t.exports.default=t.exports},RIqP:function(t,e,r){var n=r("Ijbi"),o=r("EbDI"),a=r("ZhPi"),i=r("Bnag");t.exports=function(t){return n(t)||o(t)||a(t)||i()}},SksO:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},TSYQ:function(t,e,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var a=typeof n;if("string"===a||"number"===a)t.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&t.push(i)}else if("object"===a)for(var l in n)r.call(n,l)&&n[l]&&t.push(l)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},TqRt:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},W8MJ:function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},YIkO:function(t,e,r){"use strict";var n=r("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r("pVnL")),a=n(r("lSNA")),i=n(r("RIqP")),l=n(r("lwsE")),s=n(r("a1gu")),c=n(r("Nsbk")),u=n(r("PJYZ")),f=n(r("W8MJ")),p=n(r("7W2i")),d=n(r("17x9")),_=n(r("q1tI")),m=n(r("TSYQ")),h=n(r("Fxm3"));var v=function(t){function e(t){var r;return(0,l.default)(this,e),(r=(0,s.default)(this,(0,c.default)(e).call(this,t))).state={targetItems:[],inViewState:[],isScrolledPast:[]},r._handleSpy=r._handleSpy.bind((0,u.default)(r)),r}return(0,p.default)(e,t),(0,f.default)(e,null,[{key:"propTypes",get:function(){return{items:d.default.arrayOf(d.default.string).isRequired,currentClassName:d.default.string.isRequired,scrolledPastClassName:d.default.string,style:d.default.object,componentTag:d.default.oneOfType([d.default.string,d.default.elementType]),offset:d.default.number,rootEl:d.default.string,onUpdate:d.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,f.default)(e,[{key:"_initSpyTarget",value:function(t){return t.map((function(t){return document.getElementById(t)}))}},{key:"_fillArray",value:function(t,e){for(var r=[],n=0,o=t.length;n<o;n++)r[n]=e;return r}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var t=document,e=this.props.rootEl;return{scrollTop:e?t.querySelector(e).scrollTop:t.documentElement.scrollTop||t.body.parentNode.scrollTop||t.body.scrollTop,scrollHeight:e?t.querySelector(e).scrollHeight:t.documentElement.scrollHeight||t.body.parentNode.scrollHeight||t.body.scrollHeight}}},{key:"_getElemsViewState",value:function(t){for(var e=[],r=[],n=[],o=t||this.state.targetItems,a=!1,l=0,s=o.length;l<s;l++){var c=o[l],u=!a&&this._isInView(c);u?(a=!0,e.push(c)):r.push(c);var f=l===s-1,p=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!u&&f&&p&&(r.pop(),r.push.apply(r,(0,i.default)(e)),e=[c],n=this._fillArray(n,!1),u=!0),n.push(u)}return{inView:e,outView:r,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(t){if(!t)return!1;var e,r=this.props,n=r.rootEl,o=r.offset;n&&(e=document.querySelector(n).getBoundingClientRect());var a=t.getBoundingClientRect(),i=n?e.height:window.innerHeight,l=this._getScrollDimension().scrollTop,s=l+i,c=n?a.top+l-e.top+o:a.top+l+o,u=c+t.offsetHeight;return c<s&&u>l}},{key:"_isAtBottom",value:function(){var t=this.props.rootEl,e=this._getScrollDimension(),r=e.scrollTop,n=e.scrollHeight;return r+(t?document.querySelector(t).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(t){if(!t.some((function(t){return t})))return t;var e=!1;return t.map((function(t){return t&&!e?(e=!0,!1):!e}))}},{key:"_spy",value:function(t){var e=this,r=this._getElemsViewState(t),n=this.state.inViewState;this.setState({inViewState:r.viewStatusList,isScrolledPast:r.scrolledPast},(function(){e._update(n)}))}},{key:"_update",value:function(t){var e,r;(e=this.state.inViewState,r=t,e.length===r.length&&e.every((function(t,e){return t===r[e]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,h.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var t=this._initSpyTarget(this.props.items);this.setState({targetItems:t}),this._spy(t)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var t=this,e=this.props.componentTag,r=this.props,n=r.children,i=r.className,l=r.scrolledPastClassName,s=r.style,c=0,u=_.default.Children.map(n,(function(e,r){var n;if(!e)return null;var i=e.type,s=l&&t.state.isScrolledPast[r],u=(0,m.default)((n={},(0,a.default)(n,"".concat(e.props.className),e.props.className),(0,a.default)(n,"".concat(t.props.currentClassName),t.state.inViewState[r]),(0,a.default)(n,"".concat(t.props.scrolledPastClassName),s),n));return _.default.createElement(i,(0,o.default)({},e.props,{className:u,key:c++}),e.props.children)})),f=(0,m.default)((0,a.default)({},"".concat(i),i));return _.default.createElement(e,{className:f,style:s},u)}}]),e}(_.default.Component);e.default=v},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},a1gu:function(t,e,r){var n=r("cDf5"),o=r("PJYZ");t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!==typeof e?o(t):e}},cDf5:function(t,e){function r(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},"dmJ+":function(t,e,r){t.exports={title__wrapper:"title_title__wrapper__1Bo4z",title__wrapper_row:"title_title__wrapper_row__R3R4U",title__wrapper_statement:"title_title__wrapper_statement__2rd2f",love:"title_love__h37_O",indulge:"title_indulge__1gmOE",inspire:"title_inspire__S2U8Y",create:"title_create__QJFOg"}},hwdJ:function(t,e,r){t.exports={section__wrapper:"layout_section__wrapper__2FZP3",section__content:"layout_section__content__3VFTL",section__title:"layout_section__title__2doXQ"}},lSNA:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},pVnL:function(t,e){function r(){return t.exports=r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},r.apply(this,arguments)}t.exports=r},qeQO:function(t,e,r){t.exports={about__wrapper:"about_about__wrapper__2gLOA",about__img:"about_about__img__2AiQQ",about__body:"about_about__body__OLuxp"}},rEdE:function(t,e){t.exports="//_next/static/images/profile-a2c71daf572e08d6f4b38b8cbcca6765.jpg"},wx14:function(t,e,r){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}r.d(e,"a",(function(){return n}))},ySuL:function(t,e,r){t.exports={contact_card__wrapper:"contact_contact_card__wrapper__uBl8_",contact_card__link:"contact_contact_card__link__aBbmA",contact_card:"contact_contact_card__2-WOy",contact_card__gradient:"contact_contact_card__gradient__3N8BR",contact_card__title:"contact_contact_card__title__uxiLx",insta:"contact_insta___HeiE",twitter:"contact_twitter__pQ3dm",medium:"contact_medium__1GdC8",linkedin:"contact_linkedin__2e7kr"}},zLVn:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}r.d(e,"a",(function(){return n}))}},[["/EDR",0,1]]]);