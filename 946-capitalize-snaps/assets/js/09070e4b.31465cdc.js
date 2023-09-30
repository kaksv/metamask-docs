"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3414],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={description:"Learn about the lifecycle of a Snap.",sidebar_position:2},s="Snaps lifecycle",c={unversionedId:"concepts/lifecycle",id:"concepts/lifecycle",title:"Snaps lifecycle",description:"Learn about the lifecycle of a Snap.",source:"@site/snaps/concepts/lifecycle.md",sourceDirName:"concepts",slug:"/concepts/lifecycle",permalink:"/946-capitalize-snaps/snaps/concepts/lifecycle",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/concepts/lifecycle.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn about the lifecycle of a Snap.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Snaps anatomy",permalink:"/946-capitalize-snaps/snaps/concepts/anatomy"},next:{title:"Snaps user interface",permalink:"/946-capitalize-snaps/snaps/concepts/user-interface"}},i={},p=[],l={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snaps-lifecycle"},"Snaps lifecycle"),(0,a.kt)("p",null,"Just like ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API"},"service workers")," or\nAWS lambda functions, Snaps are designed to wake up in response to messages/events, and shut down\nwhen idle.\nSnaps have an ephemeral lifecycle: they're here one moment, gone the next.\nAlso, if MetaMask detects that a Snap becomes unresponsive, it shuts the Snap down."),(0,a.kt)("p",null,"A Snap is considered unresponsive if:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"It hasn't received a JSON-RPC request for 30 seconds."),(0,a.kt)("li",{parentName:"ol"},"It takes more than 60 seconds to process a JSON-RPC request.")),(0,a.kt)("p",null,"Stopped Snaps start whenever they receive a JSON-RPC request, unless they're disabled.\nIf a Snap is disabled, the user must re-enable it before it can start again."))}f.isMDXComponent=!0}}]);