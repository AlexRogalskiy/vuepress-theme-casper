(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{173:function(t,a,e){},174:function(t,a,e){"use strict";var s=e(173);e.n(s).a},175:function(t,a,e){"use strict";e.r(a);var s=e(7),i=e(5),o=e(114),r=e(116),n=e(115),l={data:function(){return{header:{showCover:!1,coverImage:null,title:null,description:null}}},components:{SiteHeader:r.a,Card:o.a,Error:n.a},methods:Object(s.a)({},Object(i.b)(["updateSite","updatePage","updateParams"]),{updateLayoutClass:function(){this.$el.parentNode.className="error-template"}}),computed:Object(s.a)({},Object(i.c)(["type","blog","posts"])),watch:{$page:function(){this.updatePage(this.$page),this.updateLayoutClass()},$route:function(){this.updateParams(this.$route.params)}},mounted:function(){this.updatePage(this.$page),this.updateSite(this.$site),this.updateParams(this.$route.params),this.updateLayoutClass()}},u=(e(174),e(1)),c=Object(u.a)(l,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"site-wrapper"},[e("site-header",{attrs:{blog:t.blog,header:t.header}},[e("nav",{staticClass:"site-nav-center"},[e("a",{staticClass:"site-nav-logo",attrs:{href:t.blog.base}},[t.blog.logo?e("img",{staticClass:"site-logo",attrs:{src:t.blog.logo,alt:t.blog.title}}):e("span",[t._v(t._s(t.blog.title))])])])]),t._v(" "),e("main",{staticClass:"site-main outer",attrs:{id:"site-main"}},[e("div",{staticClass:"inner"},[e("error",{attrs:{description:"Page not found",code:"404",link:t.blog.base}})],1)]),t._v(" "),t.posts.length>0?e("aside",{staticClass:"outer"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"post-feed"},t._l(t.posts.slice(0,3),(function(t,a){return e("card",{key:a,attrs:{post:t}})})),1)])]):t._e()],1)}),[],!1,null,null,null);a.default=c.exports}}]);