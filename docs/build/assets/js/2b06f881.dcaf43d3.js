"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(k,c(c({ref:t},l),{},{components:n})):a.createElement(k,c({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},c=void 0,i={unversionedId:"metamask-service/v1/usage-guide",id:"metamask-service/v1/usage-guide",title:"usage-guide",description:"Use this awesome feature option",source:"@site/docs/metamask-service/v1/usage-guide.md",sourceDirName:"metamask-service/v1",slug:"/metamask-service/v1/usage-guide",permalink:"/docs/metamask-service/v1/usage-guide",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"v1.0.0 docs",permalink:"/docs/category/v100-docs"}},s={},p=[{value:"Setup metamask service",id:"setup-metamask-service",level:4},{value:"To connect metamask wallet",id:"to-connect-metamask-wallet",level:4},{value:"To change active network on metamask wallet",id:"to-change-active-network-on-metamask-wallet",level:4}],l={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"My tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use this awesome feature option")),(0,r.kt)("h4",{id:"setup-metamask-service"},"Setup metamask service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'\n// import Metamask service on component in which you need\nimport { MetaMaskService } from "ng-blockchainx";\n\n// add metamask service as DI ( dependency injection )\nconstructor(private metaMaskService: MetaMaskService) {}\n\n')),(0,r.kt)("h4",{id:"to-connect-metamask-wallet"},"To connect metamask wallet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"\nthis.metaMaskService.connectMetaMask()\n.then((response:any) => {\n    // DO your success logic here\n})\n.catch((error:any) => {\n    // DO your failure logic here\n});\n\n")),(0,r.kt)("p",null,"Once metamask successfully connected need to pass what are the networks your application going to support by passing their corresponding chain id's. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"this.metaMaskService.setSupportedChains(['0x61', '0x38']);\n")),(0,r.kt)("p",null,"In above example ",(0,r.kt)("inlineCode",{parentName:"p"},"['0x61', '0x38']")," are the chain id's of BSC testnet and mainnet"),(0,r.kt)("h4",{id:"to-change-active-network-on-metamask-wallet"},"To change active network on metamask wallet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// 'chainId = chain id of the network which to be active\nthis.metaMaskService.changeNetwork('chainID')\n.then((response:any) => {\n    // DO your success logic here\n})\n.catch((error:any) => {\n    // DO your failure logic here\n});\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"\nexport interface Response {\n    status: boolean;\n    code: number;\n    message: string;\n    data: Data | undefined | any;\n}\n\nthis.metaMaskService.connectionListener.subscribe((response:Response) => {\n    console.log(response);\n    // Do your logic here\n});\n\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Response code"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Message"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"250511"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Metamask not installed on browser"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"250512"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Metamask not connected"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"250500"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Un expected error"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"250601"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Metamask connected successfully"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"250609"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Service init success"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Just ignore this event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"250610"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Chain changed"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"250611"),(0,r.kt)("td",{parentName:"tr",align:"center"},"account changed"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"250612"),(0,r.kt)("td",{parentName:"tr",align:"center"},"metamask connection closed"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"250641"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Current network is not supported"),(0,r.kt)("td",{parentName:"tr",align:"center"})))))}m.isMDXComponent=!0}}]);