"use strict";(self["webpackChunkclient_crud"]=self["webpackChunkclient_crud"]||[]).push([[265],{6265:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"list row"},[r("div",{staticClass:"col-md-6"},[r("h4",[e._v("Trees List")]),r("ul",{staticClass:"list-group"},e._l(e.trees,(function(t,s){return r("li",{key:s,staticClass:"list-group-item",class:{active:s==e.currentIndex},on:{click:function(r){return e.setActiveTree(t,s)}}},[e._v(" "+e._s(t.treeName)+" ")])})),0)]),r("div",{staticClass:"col-md-6"},[e.currentTree?r("div",[r("h4",[e._v("Tree")]),r("div",[e._m(0),e._v(" "+e._s(e.currentTree.treeName)+" ")]),r("div",[e._m(1),e._v(" "+e._s(e.currentTree.description)+" ")]),r("a",{attrs:{href:"/trees/"+e.currentTree.id}},[e._v(" Edit/Delete ")])]):r("div",[r("br"),r("p",[e._v("Please click on a Tree...")])])])])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",[r("strong",[e._v("Tree Name:")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",[r("strong",[e._v("Description:")])])}],i=r(9756),c={name:"trees-list",data(){return{trees:[],currentTree:null,currentIndex:-1,treeName:""}},methods:{retrieveTrees(){i.Z.getAll().then((e=>{this.trees=e.data,console.log(e.data)})).catch((e=>{console.log(e)}))},refreshList(){this.retrieveTrees(),this.currentTree=null,this.currentIndex=-1},setActiveTree(e,t){this.currentTree=e,this.currentIndex=t}},mounted(){this.retrieveTrees()}},l=c,u=r(1001),a=(0,u.Z)(l,s,n,!1,null,null,null),o=a.exports}}]);
//# sourceMappingURL=265.e8921d63.js.map