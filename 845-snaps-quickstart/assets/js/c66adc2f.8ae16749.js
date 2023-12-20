"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4283],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return a?r.createElement(k,o(o({ref:t},u),{},{components:a})):r.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(87462),n=a(67294),s=a(86010),o=a(12466),i=a(70989),l=a(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==i&&(d(t),l(r))},k=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:k,onClick:m},o,{className:(0,s.Z)("tabs__item",p.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function c(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function d(e){const t=(0,i.Y)(e);return n.createElement("div",{className:(0,s.Z)("tabs-container",p.tabList)},n.createElement(u,(0,r.Z)({},e,t)),n.createElement(c,(0,r.Z)({},e,t)))}function m(e){const t=(0,l.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},70989:(e,t,a)=>{a.d(t,{Y:()=>d});var r=a(67294),n=a(16550),s=a(91980),o=a(67392),i=a(50012);function l(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??l(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:a}=e;const o=(0,n.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function d(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[d,m]=c({queryString:a,groupId:n}),[k,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,i.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),b=(()=>{const e=d??k;return u({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),h(e)}),[m,h,s]),tabValues:s}}},51828:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),s=a(65488),o=a(85162);const i={description:"Learn about MetaMask SDK.",sidebar_position:2,tags:["JavaScript SDK","iOS SDK","Android SDK","Unity SDK"]},l="About MetaMask SDK",p={unversionedId:"concepts/sdk/index",id:"concepts/sdk/index",title:"About MetaMask SDK",description:"Learn about MetaMask SDK.",source:"@site/wallet/concepts/sdk/index.md",sourceDirName:"concepts/sdk",slug:"/concepts/sdk/",permalink:"/845-snaps-quickstart/wallet/concepts/sdk/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/sdk/index.md",tags:[{label:"JavaScript SDK",permalink:"/845-snaps-quickstart/wallet/tags/java-script-sdk"},{label:"iOS SDK",permalink:"/845-snaps-quickstart/wallet/tags/i-os-sdk"},{label:"Android SDK",permalink:"/845-snaps-quickstart/wallet/tags/android-sdk"},{label:"Unity SDK",permalink:"/845-snaps-quickstart/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:2,frontMatter:{description:"Learn about MetaMask SDK.",sidebar_position:2,tags:["JavaScript SDK","iOS SDK","Android SDK","Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Architecture",permalink:"/845-snaps-quickstart/wallet/concepts/architecture"},next:{title:"SDK connections",permalink:"/845-snaps-quickstart/wallet/concepts/sdk/connections"}},u={},c=[{value:"Benefits of MetaMask SDK",id:"benefits-of-metamask-sdk",level:2},{value:"User experience",id:"user-experience",level:2}],d={toc:c},m="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"about-metamask-sdk"},"About MetaMask SDK"),(0,n.kt)("p",null,"MetaMask SDK is a library that provides a reliable, secure, and seamless connection from your dapp\nto the MetaMask browser extension and MetaMask Mobile.\nYou can install the SDK in existing dapps, and call any ",(0,n.kt)("a",{parentName:"p",href:"/845-snaps-quickstart/wallet/concepts/apis"},"provider API")," methods from\nyour dapp."),(0,n.kt)("admonition",{title:"Get started",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"MetaMask SDK is the recommended method of integrating your dapp with MetaMask.\nYou can get started by ",(0,n.kt)("a",{parentName:"p",href:"/845-snaps-quickstart/wallet/how-to/connect/set-up-sdk/"},"setting up the SDK"),".")),(0,n.kt)("h2",{id:"benefits-of-metamask-sdk"},"Benefits of MetaMask SDK"),(0,n.kt)("p",null,"Before MetaMask SDK, there were three ways to connect a dapp to a user's MetaMask wallet:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Connect from a web dapp in a desktop browser to the MetaMask browser extension"),(0,n.kt)("li",{parentName:"ol"},"Connect from a web dapp in MetaMask Mobile's in-app browser to MetaMask Mobile"),(0,n.kt)("li",{parentName:"ol"},"Use third-party libraries to connect a mobile dapp to MetaMask Mobile")),(0,n.kt)("p",null,"With MetaMask SDK, there are more ways to connect:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Connect from a web dapp in a desktop browser to the MetaMask browser extension or to MetaMask Mobile"),(0,n.kt)("li",{parentName:"ol"},"Connect from a web dapp in a mobile browser to MetaMask Mobile"),(0,n.kt)("li",{parentName:"ol"},"Connect from desktop, mobile, and gaming dapps to MetaMask Mobile")),(0,n.kt)("p",null,"MetaMask SDK enables your dapp to provide a seamless user experience for MetaMask users, from\nmultiple dapp platforms, without relying on third-party libraries.\nMoreover, the SDK uses the ",(0,n.kt)("a",{parentName:"p",href:"/845-snaps-quickstart/wallet/concepts/apis#ethereum-provider-api"},"Ethereum provider")," that developers are\nalready used to, so existing dapps work out of the box with the SDK."),(0,n.kt)("h2",{id:"user-experience"},"User experience"),(0,n.kt)("p",null,"The following are examples of how a user experiences a dapp with the SDK installed, on various platforms."),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{label:"Desktop browser",value:"tab1",mdxType:"TabItem"},(0,n.kt)("p",null,"When a user accesses your web dapp on a desktop browser that doesn't have the MetaMask extension\ninstalled, a popup appears that prompts the user to either install the MetaMask extension or connect\nto MetaMask Mobile using a QR code."),(0,n.kt)("p",{align:"center"},(0,n.kt)("video",{width:"100%",controls:!0},(0,n.kt)("source",{src:"/sdk-desktop.mp4",type:"video/mp4"}))),(0,n.kt)("admonition",{title:"Get started",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Get started by ",(0,n.kt)("a",{parentName:"li",href:"/845-snaps-quickstart/wallet/how-to/connect/set-up-sdk/javascript/"},"setting up the SDK in your web dapp"),"."),(0,n.kt)("li",{parentName:"ul"},"See the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples"},"example JavaScript dapps"),"\nin the JavaScript SDK GitHub repository for advanced use cases.")))),(0,n.kt)(o.Z,{label:"Mobile browser",value:"tab2",mdxType:"TabItem"},(0,n.kt)("p",null,"When a user accesses your web dapp on a mobile browser, the SDK automatically deeplinks to MetaMask\nMobile (or if the user doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."),(0,n.kt)("p",{align:"center"},(0,n.kt)("video",{width:"300",controls:!0},(0,n.kt)("source",{src:"/sdk-mobile-browser.mp4",type:"video/mp4"}))),(0,n.kt)("admonition",{title:"Get started",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Get started by ",(0,n.kt)("a",{parentName:"li",href:"/845-snaps-quickstart/wallet/how-to/connect/set-up-sdk/javascript/"},"setting up the SDK in your web dapp"),"."),(0,n.kt)("li",{parentName:"ul"},"See the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples"},"example JavaScript dapps"),"\nin the JavaScript SDK GitHub repository for advanced use cases.")))),(0,n.kt)(o.Z,{label:"iOS",value:"tab3",mdxType:"TabItem"},(0,n.kt)("p",null,"When a user accesses your iOS dapp, the SDK automatically deeplinks to MetaMask Mobile (or if the\nuser doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."),(0,n.kt)("p",{align:"center"},(0,n.kt)("video",{width:"300",controls:!0},(0,n.kt)("source",{src:"/sdk-ios.mp4",type:"video/mp4"}))),(0,n.kt)("admonition",{title:"Get started",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Get started by ",(0,n.kt)("a",{parentName:"li",href:"/845-snaps-quickstart/wallet/how-to/connect/set-up-sdk/mobile/ios"},"setting up the SDK in your iOS dapp"),"."),(0,n.kt)("li",{parentName:"ul"},"See the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-ios-sdk"},"example iOS dapp")," in the iOS SDK GitHub\nrepository for advanced use cases.")))),(0,n.kt)(o.Z,{label:"Android",value:"tab4",mdxType:"TabItem"},(0,n.kt)("p",null,"When a user accesses your Android dapp, the SDK automatically deeplinks to MetaMask Mobile (or if\nthe user doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."),(0,n.kt)("p",{align:"center"},(0,n.kt)("video",{width:"300",controls:!0},(0,n.kt)("source",{src:"/sdk-android.mp4",type:"video/mp4"}))),(0,n.kt)("admonition",{title:"Get started",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Get started by ",(0,n.kt)("a",{parentName:"li",href:"/845-snaps-quickstart/wallet/how-to/connect/set-up-sdk/mobile/android"},"setting up the SDK in your Android dapp"),"."),(0,n.kt)("li",{parentName:"ul"},"See the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-android-sdk/tree/main/app"},"example Android dapp")," in\nthe Android SDK GitHub repository and the ",(0,n.kt)("a",{parentName:"li",href:"/845-snaps-quickstart/wallet/concepts/sdk/android"},"Android SDK architecture")," for more information.")))),(0,n.kt)(o.Z,{label:"Node.js",value:"tab5",mdxType:"TabItem"},(0,n.kt)("p",null,"When a user accesses your Node.js dapp, the SDK renders a QR code on the console which users can\nscan with their MetaMask Mobile app."),(0,n.kt)("p",{align:"center"},(0,n.kt)("video",{width:"625",controls:!0},(0,n.kt)("source",{src:"/sdk-nodejs.mp4",type:"video/mp4"}))),(0,n.kt)("admonition",{title:"Get started",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Get started by ",(0,n.kt)("a",{parentName:"li",href:"/845-snaps-quickstart/wallet/how-to/connect/set-up-sdk/javascript/nodejs"},"setting up the SDK in your Node.js dapp"),"."),(0,n.kt)("li",{parentName:"ul"},"See the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/nodejs"},"example Node.js dapp"),"\nin the Node.js SDK GitHub repository for advanced use cases.")))),(0,n.kt)(o.Z,{label:"Unity",value:"tab6",mdxType:"TabItem"},(0,n.kt)("p",null,"When a user accesses your Unity game, the SDK renders a QR code in the game UI using a dedicated\nprefab which players can scan with their MetaMask Mobile app.\nIt also supports deeplinking on mobile platforms, as demonstrated in the following screen recording."),(0,n.kt)("p",{align:"center"},(0,n.kt)("video",{width:"300",controls:!0},(0,n.kt)("source",{src:"/sdk-unity.mp4",type:"video/mp4"}))),(0,n.kt)("admonition",{title:"Get started",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Get started by ",(0,n.kt)("a",{parentName:"li",href:"/845-snaps-quickstart/wallet/how-to/connect/set-up-sdk/gaming/unity"},"setting up the SDK in your Unity game"),"."),(0,n.kt)("li",{parentName:"ul"},"See the ",(0,n.kt)("a",{parentName:"li",href:"https://assetstore.unity.com/packages/decentralization/demo-game-dragon-crasher-with-metamask-sdk-infura-and-truffle-249789"},"Unity demo game with the SDK installed"),"\nfor advanced use cases."))))),(0,n.kt)("p",null,"You can read more about the ",(0,n.kt)("a",{parentName:"p",href:"/845-snaps-quickstart/wallet/concepts/sdk/connections"},"connection flow between the SDK and MetaMask"),"."))}k.isMDXComponent=!0}}]);