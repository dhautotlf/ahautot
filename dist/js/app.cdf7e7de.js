(function(e){function t(t){for(var r,i,s=t[0],c=t[1],p=t[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,p||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f609243d"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var p=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/ahautot/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],p=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=p;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1241:function(e,t,n){e.exports=n.p+"img/sketching.627a9f48.jpeg"},1771:function(e,t,n){var r={"./ahautot.jpeg":"f98b","./airbnb.jpg":"5c5a","./logo.png":"cf05","./logo.svg":"9b19","./project1.jpeg":"ad38","./project2.jpeg":"d3f4","./sketching.jpeg":"1241","./todpole_app_icon.png":"2f4c","./todpole_screens.png":"2378"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="1771"},2378:function(e,t,n){e.exports=n.p+"img/todpole_screens.e5610b11.png"},"2f4c":function(e,t,n){e.exports=n.p+"img/todpole_app_icon.1e4aee0e.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/resume"}},[e._v("Resume")])],1),n("router-view")],1)},a=[],i=(n("5c0b"),n("2877")),s={},c=Object(i["a"])(s,o,a,!1,null,null,null),p=c.exports,u=(n("d3b7"),n("8c4f")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Main")],1)},d=[],m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-avatar",{attrs:{size:"200"}},[r("img",{attrs:{src:n("f98b"),alt:"Ambre Hautot"}})])],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v(" "+e._s(e.title)+" ")])])],1),r("v-row",e._l(e.projects,(function(t){return r("v-col",{key:t.name,attrs:{cols:"12",lg:"4",md:"4"}},[r("v-card",{staticClass:"mx-auto"},[r("v-img",{attrs:{src:e.getImgUrl(t.image),height:"200px"}}),r("v-card-title",[e._v(" "+e._s(t.name)+" ")]),r("v-card-text",[r("v-chip-group",{attrs:{column:""}},[r("v-chip",[e._v(" "+e._s(t.caption)+" ")])],1)],1),r("v-card-actions",[r("v-btn",{attrs:{color:"orange lighten-2",text:""},on:{click:function(n){return e.navigate(t.path)}}},[e._v(" View ")]),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[r("v-icon",[e._v(e._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),r("v-expand-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"item.show"}]},[r("v-divider"),r("v-card-text",[e._v(" "+e._s(t.description)+" "),r("div",[t.externalLink?r("a",{attrs:{href:t.externalLink,target:"_blank"}},[e._v("Link")]):e._e()])])],1)])],1)],1)})),1)],1)},h=[],g={name:"Main",data:function(){return{title:"Welcome to my portfolio",projects:[{name:"Todpole",image:"todpole_app_icon.png",caption:"Project from scratch",description:"Project of a new App allowing parents to find new activities for their todlers",show:!1,path:"/project/todpole"},{name:"Group feature - Airbnb",image:"airbnb.jpg",caption:"New feature",description:"Adding a new feature for group bookings to Airbnb",show:!1,path:"/project/abnb"},{name:"Sketching",image:"sketching.jpeg",caption:"Sketching challenge",description:"UX sketching challenge: 100 days of visual library building.",externalLink:"https://uxdesign.cc/ux-sketching-challenge-100-days-of-visual-library-building-580d5b102df6",show:!1,path:"/project/sketching"},{name:"Project 3",image:"project1.jpeg",caption:"Project from scratch",description:"Tbd",show:!1,path:"/"},{name:"Project 4",image:"project2.jpeg",caption:"Project from scratch",description:"Tbd",show:!1,path:"/"}]}},methods:{getImgUrl:function(e){return n("1771")("./".concat(e))},navigate:function(e){Y.push(e)}}},f=g,v=n("6544"),b=n.n(v),y=n("8212"),w=n("8336"),k=n("b0af"),_=n("99d9"),j=n("cc20"),x=n("ef9a"),I=n("62ad"),L=n("a523"),P=n("ce7e"),O=n("0789"),V=n("132d"),C=n("adda"),M=n("0fd9"),T=n("2fa4"),A=Object(i["a"])(f,m,h,!1,null,null,null),E=A.exports;b()(A,{VAvatar:y["a"],VBtn:w["a"],VCard:k["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VChip:j["a"],VChipGroup:x["a"],VCol:I["a"],VContainer:L["a"],VDivider:P["a"],VExpandTransition:O["a"],VIcon:V["a"],VImg:C["a"],VRow:M["a"],VSpacer:T["a"]});var S={name:"Home",components:{Main:E}},$=S,U=Object(i["a"])($,l,d,!1,null,null,null),H=U.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Project "+e._s(e.$route.params.name))]),n("v-container",[n("v-row",{staticClass:"text-right"},[n("p",[n("Md")],1)])],1)],1)},D=[],N=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},q=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("img",{attrs:{src:n("2378"),alt:"drawing",width:"100%"}}),r("h1",[e._v("Background")]),r("p",[e._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "),r("br"),r("br")]),r("table",[r("thead",[r("tr",[r("th",[e._v("Syntax")]),r("th",[e._v("Description")])])]),r("tbody",[r("tr",[r("td",[e._v("Header")]),r("td",[e._v("Title")])]),r("tr",[r("td",[e._v("Paragraph")]),r("td",[e._v("Text")])])])]),r("p",[r("br"),r("br")]),r("blockquote",[r("p",[e._v("test "),r("br"),r("br")])]),r("h1",{staticStyle:{color:"red"}},[e._v("Research")]),e._v(" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "),r("br"),r("br"),r("h1",[e._v("User flows")]),r("p",[e._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")]),r("h1",[e._v("Wireframes")]),r("p",[e._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")]),r("h1",[e._v("Prototype")]),r("p",[e._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")]),r("h1",[e._v("Take aways / next steps")]),r("p",[e._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")])])}],B={},G=Object(i["a"])(B,N,q,!1,null,null,null),J=G.exports,W={name:"Project",components:{Md:J}},z=W,F=(n("80bf"),Object(i["a"])(z,R,D,!1,null,null,null)),X=F.exports;b()(F,{VContainer:L["a"],VRow:M["a"]}),r["a"].use(u["a"]);var K=[{path:"/",name:"Home",component:H},{path:"/resume",name:"Resume",component:function(){return n.e("about").then(n.bind(null,"1ba2"))}},{path:"/project/:name",component:X,name:"Project"}],Q=new u["a"]({mode:"history",base:"/ahautot/",routes:K}),Y=Q,Z=n("f309");r["a"].use(Z["a"]);var ee=new Z["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:Y,vuetify:ee,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"5c5a":function(e,t,n){e.exports=n.p+"img/airbnb.5559dbc3.jpg"},"80bf":function(e,t,n){"use strict";n("a797")},"9b19":function(e,t,n){e.exports=n.p+"img/logo.63a7d78d.svg"},"9c0c":function(e,t,n){},a797:function(e,t,n){},ad38:function(e,t,n){e.exports=n.p+"img/project1.c774cee6.jpeg"},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d3f4:function(e,t,n){e.exports=n.p+"img/project2.419069bb.jpeg"},f98b:function(e,t,n){e.exports=n.p+"img/ahautot.b8e2954d.jpeg"}});
//# sourceMappingURL=app.cdf7e7de.js.map