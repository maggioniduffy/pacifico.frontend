(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[917],{1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(4941).Z;o(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,u=o(7273).Z,a=r(o(7294)),f=o(6273),l=o(2725),c=o(3462),i=o(1018),s=o(7190),p=o(1210),d=o(8684),v="undefined"!==typeof a.default.useTransition,h={};function y(e,t,o,n){if(e&&f.isLocalURL(t)){e.prefetch(t,o,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;h[t+"%"+o+(r?"%"+r:"")]=!0}}var C=a.default.forwardRef((function(e,t){var o,r=e.href,C=e.as,b=e.children,x=e.prefetch,m=e.passHref,R=e.replace,g=e.soft,_=e.shallow,L=e.scroll,j=e.locale,E=e.onClick,M=e.onMouseEnter,k=e.onTouchStart,w=e.legacyBehavior,U=void 0===w?!0!==Boolean(!1):w,O=u(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=b,!U||"string"!==typeof o&&"number"!==typeof o||(o=a.default.createElement("a",null,o));var P=!1!==x,T=n(v?a.default.useTransition():[],2)[1],B=a.default.useContext(c.RouterContext),D=a.default.useContext(i.AppRouterContext);D&&(B=D);var A,I=a.default.useMemo((function(){var e=n(f.resolveHref(B,r,!0),2),t=e[0],o=e[1];return{href:t,as:C?f.resolveHref(B,C):o||t}}),[B,r,C]),S=I.href,Z=I.as,H=a.default.useRef(S),K=a.default.useRef(Z);U&&(A=a.default.Children.only(o));var F=U?A&&"object"===typeof A&&A.ref:t,N=n(s.useIntersection({rootMargin:"200px"}),3),z=N[0],G=N[1],q=N[2],J=a.default.useCallback((function(e){K.current===Z&&H.current===S||(q(),K.current=Z,H.current=S),z(e),F&&("function"===typeof F?F(e):"object"===typeof F&&(F.current=e))}),[Z,F,S,q,z]);a.default.useEffect((function(){var e=G&&P&&f.isLocalURL(S),t="undefined"!==typeof j?j:B&&B.locale,o=h[S+"%"+Z+(t?"%"+t:"")];e&&!o&&y(B,S,Z,{locale:t})}),[Z,S,G,j,P,B]);var Q={ref:J,onClick:function(e){U||"function"!==typeof E||E(e),U&&A.props&&"function"===typeof A.props.onClick&&A.props.onClick(e),e.defaultPrevented||function(e,t,o,n,r,u,a,l,c,i){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&f.isLocalURL(o)){e.preventDefault();var s=function(){"softPush"in t&&"softReplace"in t?t[u?r?"softReplace":"softPush":r?"replace":"push"](o):t[r?"replace":"push"](o,n,{shallow:a,locale:c,scroll:l})};i?i(s):s()}}(e,B,S,Z,R,g,_,L,j,D?T:void 0)},onMouseEnter:function(e){U||"function"!==typeof M||M(e),U&&A.props&&"function"===typeof A.props.onMouseEnter&&A.props.onMouseEnter(e),f.isLocalURL(S)&&y(B,S,Z,{priority:!0})},onTouchStart:function(e){U||"function"!==typeof k||k(e),U&&A.props&&"function"===typeof A.props.onTouchStart&&A.props.onTouchStart(e),f.isLocalURL(S)&&y(B,S,Z,{priority:!0})}};if(!U||m||"a"===A.type&&!("href"in A.props)){var V="undefined"!==typeof j?j:B&&B.locale,W=B&&B.isLocaleDomain&&p.getDomainLocale(Z,V,B.locales,B.domainLocales);Q.href=W||d.addBasePath(l.addLocale(Z,V,B&&B.defaultLocale))}return U?a.default.cloneElement(A,Q):a.default.createElement("a",Object.assign({},O,Q),o)}));t.default=C,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,o(2648).Z)(o(7294)),r=n.default.createContext(null);t.AppRouterContext=r;var u=n.default.createContext(null);t.LayoutRouterContext=u;var a=n.default.createContext(null);t.GlobalLayoutRouterContext=a},1664:function(e,t,o){e.exports=o(8418)},1163:function(e,t,o){e.exports=o(387)},1955:function(e,t){"use strict";function o(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)e[n]=o[n]}return e}var n=function e(t,n){function r(e,r,u){if("undefined"!==typeof document){"number"===typeof(u=o({},n,u)).expires&&(u.expires=new Date(Date.now()+864e5*u.expires)),u.expires&&(u.expires=u.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var f in u)u[f]&&(a+="; "+f,!0!==u[f]&&(a+="="+u[f].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+a}}return Object.create({set:r,get:function(e){if("undefined"!==typeof document&&(!arguments.length||e)){for(var o=document.cookie?document.cookie.split("; "):[],n={},r=0;r<o.length;r++){var u=o[r].split("="),a=u.slice(1).join("=");try{var f=decodeURIComponent(u[0]);if(n[f]=t.read(a,f),e===f)break}catch(l){}}return e?n[e]:n}},remove:function(e,t){r(e,"",o({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,o({},this.attributes,t))},withConverter:function(t){return e(o({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});t.Z=n}}]);