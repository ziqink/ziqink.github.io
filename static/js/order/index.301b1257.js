webpackJsonp([2],{100:function(e,t,n){var a=n(2)(n(159),n(286),null,null);e.exports=a.exports},159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(238),r=(n.n(a),n(220)),i=n.n(r),s=n(87),o=(n.n(s),n(81)),l=n.n(o),u=n(88),c=(n.n(u),n(7)),d=(n.n(c),n(82)),p=n.n(d),_=n(0),g=(n(10),n(4)),h=n(6),f=n(94),v=n.n(f),m=n(69),C=n(67),b=n(246);n.n(b);_.default.use(p.a),_.default.use(l.a),_.default.use(i.a),t.default={data:function(){var e=window.location.search;e=e.substring(1,e.length);var t={};return e.split("&").forEach(function(e){var n=e.indexOf("=");if(-1!=n){var a=e.slice(0,n);t[a]=e.slice(n+1,e.length)}}),{is_order_loading:!1,breadcrumb:[{text:"首页",href:"/"},{text:"我的订单"}],tabs_active:"",order_list:[],order_list_param:{type:"",page:1,pre_page:2},order_list_total:0,is_popover:!1,btn_text:function(e){return n.i(m.a)(e)}}},components:{orderBtn:v.a},filters:{toGearboxLabel:function(e){var t=void 0;switch(e){case"model":t="波箱型号";break;case"speed":t="档数";break;case"gear_type":t="波箱类型";break;case"drive":t="驱动方式";break;case"computer_location":t="电脑位置";break;case"producer_name":t="生产厂商"}return t},toCarLabel:function(e){var t=void 0;switch(e){case"car_brand_name":t="车辆品牌";break;case"car_model":t="车型";break;case"engine_delivery":t="排量";break;case"years":t="生产年份";break;case"car_license":t="车牌";break;case"car_vin":t="车架号";break;case"mileage":t="真实里程";break;case"guide_price":t="指导价"}return t}},methods:{triggerTabs:function(e){this.order_list_param.type=e.name,this.getOrderList(this.order_list_param)},getOrderList:function(e){var t=this;e=e||this.order_list_param,this.is_order_loading=!0;var a=g.a.bxw_api_root+"/v1/order/list";e=e||{},n.i(h.a)("GET",a,e,!0).then(function(e){t.is_order_loading=!1,e=e.data,console.log(e),t.order_list=e.data.list,t.order_list_total=1*e.data.page.total,console.log(t.order_list_total)})},handleSizeChange:function(e){this.order_list_param.pre_page=e,this.getOrderList(this.order_list_param)},handleCurrentChange:function(e){this.order_list_param.page=e,this.getOrderList(this.order_list_param)},isCancelOrder:function(e){var t=!1;return e.forEach(function(e){"cancel"==e&&(t=!0)}),t},isOrderAction:function(e){for(var t=void 0,n=0,a=e.length;n<a;n++)t=this.btn_text(e[n]);return t},toFun:function(e){var t={confirm:"确认报价",delivery:"发货",receive:"确认收货"};for(var n in t)if(e==n)return t[n];return!1},cancelOrder:function(e){var t=this;this.$confirm("是否取消订单？").then(function(){var a=g.a.bxw_api_root+"/v1/order/cancel",r={order_id:e};n.i(h.a)("POST",a,r,!0).then(function(e){e=e.data,console.log(e),t.$message({type:e.success?"success":"error",message:e.success?"操作成功":e.data.message}),e.success&&t.getOrderList(t.order_list_param)})})},btnSubmit:function(e){e&&this.getOrderList()},tolineFeed:function(e){return n.i(C.a)(e,";")}},watch:{},mounted:function(){this.getOrderList()}}},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n(100),i=n.n(r);new a.default({render:function(e){return e(i.a)}}).$mount("#app")},220:function(e,t,n){e.exports=function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){e.exports=n(223)},3:function(e,t){e.exports=function(e,t,n,a,r){var i,s=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(i=e,s=e.default);var l="function"==typeof s?s.options:s;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),a&&(l._scopeId=a);var u;if(r?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=u):n&&(u=n),u){var c=l.beforeCreate;l.beforeCreate=c?[].concat(c,u):[u]}return{esModule:i,exports:s,options:l}}},60:function(e,t){e.exports=n(31)},223:function(e,t,n){"use strict";t.__esModule=!0;var a=n(224),r=function(e){return e&&e.__esModule?e:{default:e}}(a);r.default.install=function(e){e.component(r.default.name,r.default)},t.default=r.default},224:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(225),i=a(r),s=n(228),o=a(s),l=n(229),u=a(l),c=n(60),d=a(c);t.default={name:"ElPagination",props:{pageSize:{type:Number,default:10},small:Boolean,total:Number,pageCount:Number,currentPage:{type:Number,default:1},layout:{default:"prev, pager, next, jumper, ->, total"},pageSizes:{type:Array,default:function(){return[10,20,30,40,50,100]}}},data:function(){return{internalCurrentPage:1,internalPageSize:0}},render:function(e){var t=e("div",{class:"el-pagination"},[]),n=this.layout||"";if(n){var a={prev:e("prev",null,[]),jumper:e("jumper",null,[]),pager:e("pager",{attrs:{currentPage:this.internalCurrentPage,pageCount:this.internalPageCount},on:{change:this.handleCurrentChange}},[]),next:e("next",null,[]),sizes:e("sizes",{attrs:{pageSizes:this.pageSizes}},[]),slot:e("my-slot",null,[]),total:e("total",null,[])},r=n.split(",").map(function(e){return e.trim()}),i=e("div",{class:"el-pagination__rightwrapper"},[]),s=!1;return this.small&&(t.data.class+=" el-pagination--small"),r.forEach(function(e){if("->"===e)return void(s=!0);s?i.children.push(a[e]):t.children.push(a[e])}),s&&t.children.unshift(i),t}},components:{MySlot:{render:function(e){return this.$parent.$slots.default?this.$parent.$slots.default[0]:""}},Prev:{render:function(e){return e("button",{attrs:{type:"button"},class:["btn-prev",{disabled:this.$parent.internalCurrentPage<=1}],on:{click:this.$parent.prev}},[e("i",{class:"el-icon el-icon-arrow-left"},[])])}},Next:{render:function(e){return e("button",{attrs:{type:"button"},class:["btn-next",{disabled:this.$parent.internalCurrentPage===this.$parent.internalPageCount||0===this.$parent.internalPageCount}],on:{click:this.$parent.next}},[e("i",{class:"el-icon el-icon-arrow-right"},[])])}},Sizes:{mixins:[d.default],props:{pageSizes:Array},watch:{pageSizes:{immediate:!0,handler:function(e){Array.isArray(e)&&(this.$parent.internalPageSize=e.indexOf(this.$parent.pageSize)>-1?this.$parent.pageSize:this.pageSizes[0])}}},render:function(e){var t=this;return e("span",{class:"el-pagination__sizes"},[e("el-select",{attrs:{value:this.$parent.internalPageSize},on:{input:this.handleChange}},[this.pageSizes.map(function(n){return e("el-option",{attrs:{value:n,label:n+" "+t.t("el.pagination.pagesize")}},[])})])])},components:{ElSelect:o.default,ElOption:u.default},methods:{handleChange:function(e){e!==this.$parent.internalPageSize&&(this.$parent.internalPageSize=e=parseInt(e,10),this.$parent.$emit("size-change",e))}}},Jumper:{mixins:[d.default],data:function(){return{oldValue:null}},methods:{handleFocus:function(e){this.oldValue=e.target.value},handleChange:function(e){var t=e.target;this.$parent.internalCurrentPage=this.$parent.getValidCurrentPage(t.value),this.oldValue=null}},render:function(e){return e("span",{class:"el-pagination__jump"},[this.t("el.pagination.goto"),e("input",{class:"el-pagination__editor",attrs:{type:"number",min:1,max:this.internalPageCount,value:this.$parent.internalCurrentPage,number:!0},domProps:{value:this.$parent.internalCurrentPage},on:{change:this.handleChange,focus:this.handleFocus}},[]),this.t("el.pagination.pageClassifier")])}},Total:{mixins:[d.default],render:function(e){return"number"==typeof this.$parent.total?e("span",{class:"el-pagination__total"},[this.t("el.pagination.total",{total:this.$parent.total})]):""}},Pager:i.default},methods:{handleCurrentChange:function(e){this.internalCurrentPage=this.getValidCurrentPage(e)},prev:function(){var e=this.internalCurrentPage-1;this.internalCurrentPage=this.getValidCurrentPage(e)},next:function(){var e=this.internalCurrentPage+1;this.internalCurrentPage=this.getValidCurrentPage(e)},getValidCurrentPage:function(e){e=parseInt(e,10);var t="number"==typeof this.internalPageCount,n=void 0;return t?e<1?n=1:e>this.internalPageCount&&(n=this.internalPageCount):(isNaN(e)||e<1)&&(n=1),void 0===n&&isNaN(e)?n=1:0===n&&(n=1),void 0===n?e:n}},computed:{internalPageCount:function(){return"number"==typeof this.total?Math.ceil(this.total/this.internalPageSize):"number"==typeof this.pageCount?this.pageCount:null}},watch:{currentPage:{immediate:!0,handler:function(e){this.internalCurrentPage=e}},pageSize:{immediate:!0,handler:function(e){this.internalPageSize=e}},internalCurrentPage:function(e,t){var n=this;e=parseInt(e,10),e=isNaN(e)?t||1:this.getValidCurrentPage(e),void 0!==e?this.$nextTick(function(){n.internalCurrentPage=e,t!==e&&(n.$emit("update:currentPage",e),n.$emit("current-change",n.internalCurrentPage))}):(this.$emit("update:currentPage",e),this.$emit("current-change",this.internalCurrentPage))},internalPageCount:function(e){var t=this.internalCurrentPage;e>0&&0===t?this.internalCurrentPage=1:t>e&&(this.internalCurrentPage=0===e?1:e)}}}},225:function(e,t,n){var a=n(3)(n(226),n(227),null,null,null);e.exports=a.exports},226:function(e,t){"use strict";t.__esModule=!0,t.default={name:"ElPager",props:{currentPage:Number,pageCount:Number},watch:{showPrevMore:function(e){e||(this.quickprevIconClass="el-icon-more")},showNextMore:function(e){e||(this.quicknextIconClass="el-icon-more")}},methods:{onPagerClick:function(e){var t=e.target;if("UL"!==t.tagName){var n=Number(e.target.textContent),a=this.pageCount,r=this.currentPage;-1!==t.className.indexOf("more")&&(-1!==t.className.indexOf("quickprev")?n=r-5:-1!==t.className.indexOf("quicknext")&&(n=r+5)),isNaN(n)||(n<1&&(n=1),n>a&&(n=a)),n!==r&&this.$emit("change",n)}}},computed:{pagers:function(){var e=Number(this.currentPage),t=Number(this.pageCount),n=!1,a=!1;t>7&&(e>5&&(n=!0),e<t-2&&(a=!0));var r=[];if(n&&!a)for(var i=t-5,s=i;s<t;s++)r.push(s);else if(!n&&a)for(var o=2;o<7;o++)r.push(o);else if(n&&a)for(var l=Math.floor(3.5)-1,u=e-l;u<=e+l;u++)r.push(u);else for(var c=2;c<t;c++)r.push(c);return this.showPrevMore=n,this.showNextMore=a,r}},data:function(){return{current:null,showPrevMore:!1,showNextMore:!1,quicknextIconClass:"el-icon-more",quickprevIconClass:"el-icon-more"}}}},227:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"el-pager",on:{click:e.onPagerClick}},[e.pageCount>0?n("li",{staticClass:"number",class:{active:1===e.currentPage}},[e._v("1")]):e._e(),e.showPrevMore?n("li",{staticClass:"el-icon more btn-quickprev",class:[e.quickprevIconClass],on:{mouseenter:function(t){e.quickprevIconClass="el-icon-d-arrow-left"},mouseleave:function(t){e.quickprevIconClass="el-icon-more"}}}):e._e(),e._l(e.pagers,function(t){return n("li",{staticClass:"number",class:{active:e.currentPage===t}},[e._v(e._s(t))])}),e.showNextMore?n("li",{staticClass:"el-icon more btn-quicknext",class:[e.quicknextIconClass],on:{mouseenter:function(t){e.quicknextIconClass="el-icon-d-arrow-right"},mouseleave:function(t){e.quicknextIconClass="el-icon-more"}}}):e._e(),e.pageCount>1?n("li",{staticClass:"number",class:{active:e.currentPage===e.pageCount}},[e._v(e._s(e.pageCount))]):e._e()],2)},staticRenderFns:[]}},228:function(e,t){e.exports=n(33)},229:function(e,t){e.exports=n(32)}})},238:function(e,t){},246:function(e,t){},286:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("jk-header"),e._v(" "),n("jk-nav",{attrs:{cur_nav:"我的订单"}}),e._v(" "),n("breadcrumb",{attrs:{data:e.breadcrumb}}),e._v(" "),n("div",{staticClass:"jk-container jk-my-order"},[n("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.triggerTabs},model:{value:e.tabs_active,callback:function(t){e.tabs_active=t},expression:"tabs_active"}},[n("el-tab-pane",{attrs:{label:"全部订单",name:""}}),e._v(" "),n("el-tab-pane",{attrs:{label:"待发货",name:"1"}})],1),e._v(" "),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.is_order_loading,expression:"is_order_loading"}],staticClass:"jk-order-list"},[e._m(0),e._v(" "),e._l(e.order_list,function(t){return n("div",{staticClass:"body"},[n("div",{staticClass:"info"},[n("i"),e._v("\n                    "+e._s(t.created_at)+"  订单号："+e._s(t.order_sn)+"\n                ")]),e._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"item item-1"},e._l(t.gear_box,function(t,a){return n("div",[n("label",[e._v(e._s(e._f("toGearboxLabel")(a))+"：")]),e._v("\n                            "+e._s(t)+"\n                        ")])})),e._v(" "),n("div",{staticClass:"item item-2"},e._l(t.car,function(t,a){return n("div",[n("label",[e._v(e._s(e._f("toCarLabel")(a))+"：")]),e._v("\n                            "+e._s(t)+"\n                        ")])})),e._v(" "),n("div",{staticClass:"item item-3",domProps:{innerHTML:e._s(e.tolineFeed(t.fault))}}),e._v(" "),n("div",{staticClass:"item item-4"},[n("div",[e._v("总额："+e._s(t.amount))])]),e._v(" "),n("div",{staticClass:"item item-5"},[n("div",[e._v(e._s(t.order_status))]),e._v(" "),n("a",{attrs:{href:"/order/detail.html?order_id="+t.id}},[e._v("订单详情")])]),e._v(" "),n("div",{staticClass:"item item-6"},[n("order-btn",{attrs:{action:t.action,order_id:t.id,"on-success":e.btnSubmit}}),e._v(" "),n("div",[e.isCancelOrder(t.action)?n("a",{attrs:{href:"javascript:"},on:{click:function(n){e.cancelOrder(t.id)}}},[e._v("取消订单")]):e._e()])],1)])])}),e._v(" "),n("el-pagination",{staticStyle:{"text-align":"right"},attrs:{"current-page":e.order_list_param.page,"page-sizes":[2,4,8,16],"page-size":e.order_list_param.pre_page,layout:"total, sizes, prev, pager, next, jumper",total:e.order_list_total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],2)],1),e._v(" "),n("jk-footer")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"item item-1"},[e._v("波箱信息")]),e._v(" "),n("div",{staticClass:"item item-2"},[e._v("车辆信息")]),e._v(" "),n("div",{staticClass:"item item-3"},[e._v("故障现象")]),e._v(" "),n("div",{staticClass:"item item-4"},[e._v("金额")]),e._v(" "),n("div",{staticClass:"item item-5"},[e._v("全部状态")]),e._v(" "),n("div",{staticClass:"item item-6"},[e._v("操作")])])}]}}},[173]);