webpackJsonp([7],{LicG:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("+VlJ"),r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var i=e("C7Lr")(null,r,!1,function(t){e("rqW/")},null,null).exports,o=e("KGCO");a.default.use(o.a);var u=new o.a({routes:[{path:"/",redirect:"/dashboard"},{path:"/pay/:orderid",name:"pay",component:function(t){return e.e(0).then(function(){var n=[e("RcPq")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/",component:function(t){return e.e(1).then(function(){var n=[e("MpTN")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"自述文件"},children:[{path:"/dashboard",component:function(t){return e.e(4).then(function(){var n=[e("a52u")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"订单管理"}},{path:"/404",component:function(t){return e.e(3).then(function(){var n=[e("3bH0")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"404"}},{path:"/403",component:function(t){return e.e(5).then(function(){var n=[e("KfZE")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"403"}}]},{path:"/login",component:function(t){return e.e(2).then(function(){var n=[e("GF4k")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"*",redirect:"/404"}]}),c=e("6sKG"),l=e.n(c),p=e("DVuL"),f=e.n(p);e("LicG"),e("ympj"),e("briU");a.default.use(f.a,{size:"small"}),a.default.prototype.$axios=l.a,a.default.prototype.$staticUrl="http://static.yio.me/",u.beforeEach(function(t,n,e){var r=localStorage.getItem("userinfo");if(r||"/login"===t.path)t.meta.permission?"admin"===r?e():e("/403"):navigator.userAgent.indexOf("MSIE")>-1&&"/editor"===t.path?a.default.prototype.$alert("vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看","浏览器不兼容通知",{confirmButtonText:"确定"}):e();else{if("goodsinfo"==t.name||"pay"==t.name||"/ip"==t.path)return e(),!1;e("/login")}}),new a.default({router:u,render:function(t){return t(i)}}).$mount("#app")},"rqW/":function(t,n){},ympj:function(t,n){}},["NHnr"]);